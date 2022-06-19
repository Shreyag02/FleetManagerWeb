import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import { useSelector, useDispatch } from "react-redux";
import { emailLogInFetch } from "../store/reducers/userReducer";
import { Link, useNavigate } from "react-router-dom";
import cars from "../assets/car.svg";
const Login = () => {
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
    email: "",
    password: "",
    type: "",
    loading: false,
  });

  const { email, password, loading, type } = data;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, loading: true });
    if (!email || !password) {
      setData({
        ...data,
        loading: false,
      });
    }

    try {
      dispatch(emailLogInFetch({ email, password, type }));

      setData({
        email: "",
        password: "",
        type: "",
        loading: false,
      });
    } catch (error) {
      setData({
        ...data,
        loading: false,
      });
    }
  };

  return (
    <>
      <div className="clippy absolute bg-teal-500"></div>
      <div className="flex flex-col md:flex-row justify-center items-center h-screen">
        <div className="flex justify-center items-center w-full md:w-1/2 flex-col p-2 form-card rounded">
          <form
            onSubmit={handleSubmit}
            className="form w-11/12 max-w-sm rounded-lg -mt-3 p-5 md:py-12 md:px-7 outline-none text-teal-700 border-2 z-10 "
          >
            <div className="text-center">
              <img className="h-48 m-auto mb-2" src={cars} alt="Fleeter" />
              <h3 className="text-xl my-3 font-bold">Welcome Back Fleeter!</h3>
            </div>

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
              {isLoading ? "Logging in..." : "Login"}
            </button>

            <div className="text-center my-2">
              <p>
                Don't have an account? <Link to="/signup"> Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
