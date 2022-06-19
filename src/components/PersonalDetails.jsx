import React from "react";
import { faEnvelope, faPhone, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../assets/avatar.png";

const PersonalDetails = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6 h-1/2 w-11/12 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            className="mb-3 w-28 h-28 rounded-full shadow-lg border border-teal-700"
            src={avatar}
            alt="Bonnie image"
          />
          <label htmlFor="img" className="cursor-pointer">
            <div className="rounded-full absolute h-6 w-6 right-0 bottom-4 flex justify-center items-center bg-teal-700 text-white">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </label>
          <input
            // onChange={addImg}
            type="file"
            id="img"
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
        <h5 className="mb-1 text-xl font-medium text-teal-700">Bonnie Green</h5>
        <span className="text-sm text-teal-400 mb-4">Visual Designer</span>

        <p className="mb-1 text-base  text-teal-700">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Bonnie@gmail.com
        </p>
        <p className="mb-1 text-base  text-teal-700">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          +91 XXXXX XXXXX
        </p>

        {/* <div className="flex mt-4 space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default PersonalDetails;
