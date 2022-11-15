import React from "react";

import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";

import Popup from "reactjs-popup";
import { BsXLg } from "react-icons/bs";
import "reactjs-popup/dist/index.css";

const newRequestRoutes = [
  {
    path: "/new-request/request-info",
    name: "Request Info",
  },
  {
    path: "/new-request/copy",
    name: "Copy",
  },
  {
    path: "/new-request/spec",
    name: "Spec",
  },
  {
    path: "/new-request/files",
    name: "Files",
  },
  {
    path: "/new-request/tasks",
    name: "Tasks",
  },
  {
    path: "/new-request/audit-log",
    name: "Audit log",
  },
  {
    path: "/new-request/comments",
    name: "Comments",
  },
];

const NewRequest = () => {
  return (
    <section className="">
      <div className="flex flex-row justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md  ">
        <div className="flex items-center">
          <BsSliders className="text-2xl mr-3" />
          <h1 className="text-2xl">New Artwork Request</h1>
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>
      <div className="flex border border-b-2 justify-between items-center">
        <nav className="flex items-center  pl-4">
          {newRequestRoutes.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-navbar" : "inactive-navbar"
              }
              end
              to={item.path}
              key={index}
            >
              <div className="font-medium">{item.name}</div>
            </NavLink>
          ))}
        </nav>
        {/* Pop Up */}
        <div className="">
          <Popup
            modal
            trigger={
              <button
                type="button"
                className="bg-indigo-500  rounded-md p-3 text-sky-50 font-extrabold  mr-3 "
              >
                Add New User
              </button>
            }
            // overlayStyle={}
          >
            {(close) => (
              <div className=" bg-gray-100   rounded-lg ring ring-gray-100  m-auto">
                <div className="">
                  <div className=" flex justify-between p-4  items-center border-b-2  ">
                    <h1 className="text-xl font-semibold">Add New User</h1>
                    {/* <MdOutlineModeEditOutline className="text-2xl" /> */}
                    <BsXLg className="cursor-pointer" onClick={() => close()} />
                  </div>

                  {/* Form Fields */}

                  <form className="flex p-3 flex-col space-y-2 border">
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
      </div>

      <Outlet />
    </section>
  );
};

export default NewRequest;
