import React from "react";
import myCar from "../assets/myCar.svg";

const VehicleCard = () => {
  return (
    <div className="w-full lg:max-w-full lg:flex my-2">
      <div
        className="h-48 w-1/5 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-teal-100 border-l border-t border-b border-teal-400"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')",
        }}
        title="car"
      ></div>
      <div className=" w-4/5 text-left border-r border-b border-l border-teal-400 lg:border-l-0 lg:border-t lg:border-teal-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="">
          <div className="flex justify-between">
            <div className="text-teal-900 mb-2">
              <p className="font-bold text-xl">Car Name</p>
              <p className="text-sm">Model</p>
            </div>
            <div className="text-right">
              <p className="text-xs">Registered on: DD/MM/YYYY </p>
              <p className="text-xs flex items-center justify-end">
                Status: available
                <span className="ml-2 inline-block h-2 w-2 bg-green-500 rounded-full" />
              </p>
            </div>
          </div>

          <div className="flex mt-4 space-x-3 lg:mt-6 items-center justify-between">
            <span className="text-xs">Rides:10 </span>

            <div>
              <a
                href="#"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center border border-teal-700 text-teal-700 bg-white hover:text-white focus:text-white  rounded-lg focus:bg-teal-700 hover:bg-teal-700   focus:outline-none  mr-2"
              >
                View Document
              </a>
              <a
                href="#"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:outline-none  dark:bg-teal-600 dark:hover:bg-teal-700 "
              >
                Past Rides
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
