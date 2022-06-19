import {
  // getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  signOut,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
  Timestamp,
  setDoc,
  addDoc,
  orderBy,
} from "firebase/firestore";
import { auth, db, storage } from "./firebase.config";

import { eventChannel } from "redux-saga";
const { v4: uuidv4 } = require("uuid");

const signupWithEmailAndPassword = async ({
  email,
  password,
  phone,
  name,
  type,
}) => {
  try {
    const result = await setPersistence(auth, browserSessionPersistence).then(
      async () => {
        return await createUserWithEmailAndPassword(auth, email, password);
      }
    );
    const userData = {
      uid: result.user.uid,
      phone,
      name,
      email,
      type,
    };
    const collectionName = type === "manager" ? "managers" : "drivers";

    await setDoc(doc(db, collectionName, result.user.uid), userData);

    return userData;
  } catch (error) {
    console.log(error, error.code);
    throw error;
  }
};

const loginWithEmailAndPassword = async ({ email, password, type }) => {
  try {
    const result = await setPersistence(auth, browserSessionPersistence).then(
      async () => {
        return await signInWithEmailAndPassword(auth, email, password);
      }
    );
    //store result as auth
    const collectionName = type === "manager" ? "managers" : "drivers";

    const userData = await getDoc(
      doc(db, collectionName, result.user.uid)
    ).then((docSnap) => {
      if (docSnap.exists()) {
        return docSnap.data();
      }
    });

    return userData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const logout = async () => {
  localStorage.clear();
  sessionStorage.clear();
  await signOut(auth);
};

const addNewVehicle = async ({
  model,
  name,
  managerUID,
  registrationNumber,
  status,
  document,
  documentPath,
}) => {
  try {
    await getDoc(doc(db, "vehicles", registrationNumber)).then((docSnap) => {
      if (docSnap.exists()) {
        throw Error;
      }
    });

    const uid = uuidv4();
    const carData = {
      uid,
      model,
      name,
      managerUID,
      registrationNumber,
      status,
      document,
      documentPath,
      registeredAt: Timestamp.fromDate(new Date()),
    };

    await setDoc(doc(db, "vehicles", uid), carData);

    return carData;
  } catch (error) {
    console.log(error, error.code);
    throw error;
  }
};

const myVehicles = async ({ managerUID }) => {
  try {
    const vehiclesRef = collection(db, "vehicles");
    // create query object
    const q = query(vehiclesRef, where("managerUid", "in", [managerUID]));

    return eventChannel((emitter) => {
      const unsub = onSnapshot(q, (querySnapshot) => {
        let vehicles = [];
        querySnapshot.forEach((doc) => {
          vehicles.push(doc.data());
        });
        emitter(vehicles);
      });
      return () => unsub();
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export {
  signupWithEmailAndPassword,
  loginWithEmailAndPassword,
  logout,
  myVehicles,
  addNewVehicle,
};
