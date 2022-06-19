import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const InputField = ({ id, placeholder, type, value, data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [show, setShow] = useState(false);

  return (
    <div className="w-full relative mb-5">
      <label htmlFor={id} className="hidden"></label>
      <input
        className="px-2.5 h-12 rounded w-full text-sm focus:outline-teal-700 placeholder:text-teal-500 border border-teal-500"
        id={id}
        name={id}
        placeholder={placeholder}
        type={id === "password" && show ? "text" : type}
        defaultValue={value}
        onChange={handleChange}
        autoComplete="off"
        required
      ></input>
      {id === "password" ? (
        <span
          className="absolute top-3 right-3"
          onClick={() => setShow((show) => !show)}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
        </span>
      ) : null}
    </div>
  );
};

export default InputField;
