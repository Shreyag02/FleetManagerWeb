import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { useSelector, useDispatch } from "react-redux";
import { emailSignUpFetch } from "../store/reducers/userReducer";
import { Link, useNavigate } from "react-router-dom";
import cars from "../assets/car.svg";
const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
    // eslint-disable-next-line
  }, [currentUser]);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    type: "",
    loading: false,
  });

  const { name, email, password, loading, phone, type } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data });

    try {
      dispatch(emailSignUpFetch({ name, email, phone, password, type }));
      setData({
        name: "",
        phone: "",
        email: "",
        password: "",
        type: "",
      });
    } catch (error) {
      setData({ ...data });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <div className="flex justify-center items-center w-full md:w-1/2 flex-col p-2 form-card rounded">
        <form
          onSubmit={handleSubmit}
          className="form w-11/12 max-w-sm rounded-lg -mt-3 p-5 md:py-12 md:px-7 outline-none text-teal-700 border-2 z-10 "
        >
          <div className="text-center">
            <img className="h-48 m-auto mb-2" src={cars} alt="Fleeter" />
            <h3 className="text-xl my-3 font-bold">Welcome to Fleeter!</h3>
          </div>
          <InputField
            id="name"
            placeholder="Full Name"
            type="text"
            value={name}
            data={data}
            setData={setData}
          />

          <InputField
            id="phone"
            placeholder="phone number"
            type="text"
            value={phone}
            data={data}
            setData={setData}
          />
          <InputField
            id="email"
            placeholder="Email"
            type="email"
            value={email}
            data={data}
            setData={setData}
          />
          <InputField
            id="type"
            placeholder="manager/driver"
            type="text"
            value={type}
            data={data}
            setData={setData}
          />

          <InputField
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            data={data}
            setData={setData}
          />

          {/* {error ? handleError({ error }) : null} */}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-teal-700 text-white py-2 fs-6 rounded cursor-pointer border-0 mb-2"
          >
            {isLoading ? "Registering..." : "Signup"}
          </button>

          <div className="text-center my-2">
            <p>
              Already have an account?
              <Link to="/login"> Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
