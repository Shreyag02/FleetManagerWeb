import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Dashboard from "./screens/DashBoard";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Router>
      <div className="App bg-teal-50 text-teal-700">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<Dashboard />} />

          <Route path="/home" element={<PrivateRoute />}>
            <Route path="/home" element={<Dashboard />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
