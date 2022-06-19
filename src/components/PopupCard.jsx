import React, { useState } from "react";

// import DetailedCard from "./DetailsCard.jsx";

const PopupCard = ({ setShowModal, showModal }) => {
  // const [showAccordion, setShowAccordion] = useState();
  return (
    <div>
      <div
        className="modal z-10 fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-slate-300/50"
        id="exampleModalCenter"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div
          className="modal fade fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-5/6 outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalCenteredScrollable"
          tabIndex="-1"
          aria-labelledby="exampleModalCenteredScrollable"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalCenteredScrollableLabel"
                >
                  Past Rides
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal((showModal) => !showModal)}
                >
                  X
                </button>
              </div>
              <div className="modal-body relative p-4">
                {/* <DetailedCard /> */}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quidem, placeat. Vel veritatis aperiam porro eius inventore, eum
                tempora harum aut error repudiandae ad, rerum laborum. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Neque
                perferendis, similique, ipsa aspernatur ea quia consectetur
                libero minus dolores numquam quos inventore? Ipsam consectetur
                hic aspernatur quo? Odit nisi illo cum hic natus dolores animi
                consequatur et laborum eum exercitationem explicabo excepturi
                nam, incidunt quae repellat aut repudiandae totam vitae.
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-800 hover:shadow-lg focus:bg-teal-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-900 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => setShowModal((showModal) => !showModal)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
