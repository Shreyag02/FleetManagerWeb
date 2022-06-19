import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
//components
import PersonalDetails from "../components/PersonalDetails";
import PopupCard from "../components/PopupCard";

//images
import addCar from "../assets/addCar.svg";
import noData from "../assets/noData.svg";
import VehicleCard from "../components/VehicleCard";

const DashBoard = () => {
  const { vehicles } = useSelector((state) => state.user);

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen p-6">
      <div className="flex justify-center items-center h-full w-full md:w-2/5 flex-col p-3  ">
        <PersonalDetails />
      </div>

      <div className="h-full w-full md:w-3/5  p-3  flex flex-col">
        <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 px-6">
          <div className="flex flex-row justify-between items-center">
            <img className="h-20" src={addCar} alt="Bonnie image" />
            <button
              className="bg-teal-700 rounded-md h-12 text-white px-5"
              onClick={() => setShowModal(true)}
            >
              Add Vehicle
            </button>
          </div>
          {showModal ? <PopupCard setShowModal={setShowModal} /> : null}
        </div>
        {/* cars added*/}
        <div
          className={clsx(
            "list-card overflow-y-scroll bg-white w-full text-center rounded-lg border border-gray-200 shadow-md p-4 px-6 mt-2 h-full flex justify-center",
            !vehicles.length ? "items-start" : "items-center"
          )}
        >
          {!vehicles.length ? (
            <div className="w-full">
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
              <VehicleCard />
            </div>
          ) : (
            <div>
              <img src={noData} alt="no cars" className="h-40" />

              <span className="font-bold">No cars yet!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
