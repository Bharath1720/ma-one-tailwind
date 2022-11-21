import React from "react";

import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
// import { BsSliders } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

import { NavLink } from "react-router-dom";

// import { MdOutlineModeEditOutline } from "react-icons/md";

import Popup from "reactjs-popup";
import { BsXLg } from "react-icons/bs";
import UserTableGrid from "../../Tables/UserTableGrid";

const Users = () => {
  // const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="  flex flex-row justify-between items-center p-4 pl-5 shadow-md ">
        <div className="flex items-center">
          <FiUsers className="text-2xl mr-3" />
          {/* Breadcrumbs */}
          <nav className="">
            <ul className="flex mt-1 space-x-1">
              <li className="after:content-['>'] pl-2 after:px-2 ">
                <NavLink
                  to="/admin"
                  className="text-slate-500 hover:no-underline hover:text-slate-900  font-bold"
                >
                  Admin
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/users"
                  className=" text-slate-500 hover:no-underline hover:text-slate-900 font-bold"
                >
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* <h1 className="text-2xl">Admin Users </h1> */}
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      <div className=" p-3 flex justify-end">
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="bg-gray-500 rounded-md p-3 py-2 text-sky-50 font-extrabold  "
            >
              Add New User
            </button>
          }
        >
          {(close) => (
            <div className=" bg-gray-100 rounded-lg ring ring-gray-100  m-auto">
              <div className="">
                <div className=" flex justify-between p-4  items-center border-b-2  ">
                  <h1 className="text-xl font-semibold">Add New User</h1>
                  {/* <MdOutlineModeEditOutline className="text-2xl" /> */}
                  <BsXLg className="cursor-pointer" onClick={() => close()} />
                </div>

                {/* Form Fields */}

                <form className="flex p-3 flex-col space-y-2">
                  <div>
                    <label htmlFor="name" className="text-base ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full mt-1 p-2 outline-none ring-1 ring-gray-300 rounded-md "
                      id="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="text-base ">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full mt-1 p-2 outline-none ring-1 ring-gray-300 rounded-md "
                      id="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="department" className="text-base ">
                      Departments
                    </label>
                    <select
                      id="department"
                      className="w-full mt-1 p-2 outline-none ring-1 ring-gray-300 rounded-md"
                    >
                      <option>Select</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="department" className="text-base">
                      Security
                    </label>
                    <select
                      id="department"
                      className="w-full mt-1 p-2 outline-none ring-1 ring-gray-300 rounded-md"
                    >
                      <option>Select</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="p-3 mt-3 flex justify-end border-t-2 ">
                <button
                  type="button"
                  className="bg-black rounded-lg text-white p-2 px-4"
                >
                  Create
                </button>

                <button
                  type="button"
                  className="bg-black rounded-lg text-white p-2 px-4 mx-2"
                  onClick={() => close()}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
      <UserTableGrid />
    </div>

    // <>
    //   <button
    //     className="bg-blue-200 text-black active:bg-blue-500
    // font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
    //     type="button"
    //     onClick={() => setShowModal(true)}
    //   >
    //     Fill Details
    //   </button>
    //   {showModal ? (
    //     <>
    //       <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
    //         <div className="relative w-auto my-6 mx-auto max-w-3xl">
    //           <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
    //             <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
    //               <h3 className="text-3xl font=semibold">General Info</h3>
    //               <button
    //                 className="bg-transparent border-0 text-black float-right"
    //                 onClick={() => setShowModal(false)}
    //               >
    //                 <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
    //                   x
    //                 </span>
    //               </button>
    //             </div>
    //             <div className="relative p-6 flex-auto">
    //               <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
    //                 <label className="block text-black text-sm font-bold mb-1">
    //                   First Name
    //                 </label>
    //                 <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
    //                 <label className="block text-black text-sm font-bold mb-1">
    //                   Last Name
    //                 </label>
    //                 <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
    //                 <label className="block text-black text-sm font-bold mb-1">
    //                   Address
    //                 </label>
    //                 <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
    //                 <label className="block text-black text-sm font-bold mb-1">
    //                   City
    //                 </label>
    //                 <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
    //               </form>
    //             </div>
    //             <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
    //               <button
    //                 className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
    //                 type="button"
    //                 onClick={() => setShowModal(false)}
    //               >
    //                 Close
    //               </button>
    //               <button
    //                 className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
    //                 type="button"
    //                 onClick={() => setShowModal(false)}
    //               >
    //                 Submit
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </>
    //   ) : null}
    // </>
  );
};

export default Users;
