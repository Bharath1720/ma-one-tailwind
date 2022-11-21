import React from "react";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FiUsers } from "react-icons/fi";

import { BiPencil } from "react-icons/bi";
import Popup from "reactjs-popup";
import { BsXLg } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

const tableData = [
  {
    id: uuidv4(),
    name: "Inbox",
    description: "Show only tasks pending for the user to take action",
    lastEditBy: null,
    lastEditOn: null,
  },
  {
    id: uuidv4(),
    name: "In-Progress",
    description: "All requests in progress",
    lastEditBy: "Peter Townsend",
    lastEditOn: "8-Jun-2022",
  },
  {
    id: uuidv4(),
    name: "Completed",
    description: "All computed requests",
    lastEditBy: "John Mallick",
    lastEditOn: "12-Jul-2022",
  },
  {
    id: uuidv4(),
    name: "Terminated",
    description: "All terminated request",
    lastEditBy: null,
    lastEditOn: null,
  },
  {
    id: uuidv4(),
    name: "All requests",
    description: "All requests",
    lastEditBy: null,
    lastEditOn: null,
  },
  {
    id: uuidv4(),
    name: "Request I initiated",
    description: "Request I initiated",
    lastEditBy: null,
    lastEditOn: null,
  },
  {
    id: uuidv4(),
    name: "Request I Participated",
    description: "Request I Participated",
    lastEditBy: null,
    lastEditOn: null,
  },
  {
    id: uuidv4(),
    name: "All request except terminated",
    description: "All request except terminated",
    lastEditBy: null,
    lastEditOn: null,
  },
];

const Views = () => {
  return (
    <div>
      <div className="  flex flex-row justify-between items-center p-4 pl-5  shadow-md ">
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
                  to="/admin/workflow/views"
                  className=" text-slate-500 hover:no-underline hover:text-slate-900 font-bold"
                >
                  Views
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* <h1 className="text-2xl">Admin Views </h1> */}
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      <div className="">
        <div className="flex px-5">
          <div className="flex space-x-6 items-baseline">
            <h2 className="text-[16px]">Workflow Views</h2>
            <BiPencil className="text-xl" />
          </div>
        </div>
        <div className="p-1">
          <table className="border rounded-lg w-full text-left">
            <thead className="bg-skin-theadColor">
              <tr>
                <th className="p-3 text-md font-bold tracking-wide ">
                  View Name
                </th>
                <th>View Description</th>
                <th>Last Edited By</th>
                <th>Last Edited On</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-skin-tbodyColor">
              {tableData.map((data) => {
                return (
                  <tr className="border" key={data.id}>
                    <td className="p-4">{data.name}</td>
                    <td className="">{data.description}</td>
                    <td>{data.lastEditBy}</td>
                    <td>{data.lastEditOn}</td>
                    <td>
                      <Popup
                        modal
                        trigger={
                          <button type="button" className="text-indigo-500 ">
                            Edit
                          </button>
                        }
                      >
                        {(close) => (
                          <div className=" bg-gray-100 rounded-lg ring ring-gray-100 m-auto">
                            <div className="">
                              {/* Popup Header  */}
                              <div className=" flex justify-between p-4  items-center border-b-2  ">
                                <h1 className="text-xl font-semibold">
                                  In Progress
                                </h1>
                                {/* <MdOutlineModeEditOutline className="text-2xl" /> */}
                                <BsXLg
                                  className="cursor-pointer"
                                  onClick={() => close()}
                                />
                              </div>

                              {/* Form Fields */}

                              <form className="flex p-3 flex-col space-y-2">
                                <div>
                                  <label htmlFor="name" className="text-base ">
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    className="w-full mt-1 p-2 outline-none ring-1 ring-gray-300 rounded-md "
                                    id="name"
                                  />
                                </div>
                                <div>
                                  <label
                                    htmlFor="name"
                                    className="text-base block mb-2 "
                                  >
                                    Description
                                  </label>
                                  <textarea
                                    className="rounded-lg"
                                    rows={5}
                                    cols={111}
                                  ></textarea>
                                </div>
                              </form>
                            </div>
                            {/* Pop up Footer */}
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
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Views;
