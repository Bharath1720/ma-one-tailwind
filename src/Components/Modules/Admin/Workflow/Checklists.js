import React from "react";

import { v4 as uuidv4 } from "uuid";

import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FiUsers } from "react-icons/fi";

import { BiPencil } from "react-icons/bi";

import Popup from "reactjs-popup";
import { BsXLg } from "react-icons/bs";

import { useContext } from "react";

import { AppContext } from "../../../../Context";

const checkboxData = [
  {
    id: uuidv4(),
    text: "Marketing",
  },
  {
    id: uuidv4(),
    text: "Regulatory",
  },
  {
    id: uuidv4(),
    text: "Packing",
  },
  {
    id: uuidv4(),
    text: "Quality",
  },
  {
    id: uuidv4(),
    text: "Legal",
  },
  {
    id: uuidv4(),
    text: "Supply Chain",
  },
];

const tableData = [
  {
    id: uuidv4(),
    name: "Verify Product name",
    uname: "Paul Mason",
    date: "12 Jul 2022",
    depart: "Marketing",
  },

  {
    id: uuidv4(),
    name: "Check UPC and QR code",
    uname: "Vivek Garg",
    date: "18 May 2022",
    depart: "Marketing",
    depart2: "Packaging",
  },

  {
    id: uuidv4(),
    name: "Check Nutrition Panel Format",
    uname: "Paul Mason",
    date: "18 May 2022",
    depart: "Regulatory",
  },

  {
    id: uuidv4(),
    name: "Net Content Statement",
    uname: "Paul Mason",
    date: "18 May 2022",
    depart: "Regulatory",
  },
];

const Checklists = () => {
  const { theme } = useContext(AppContext);
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
                  // className="text-slate-500 hover:no-underline hover:text-slate-900  font-bold"
                  className={
                    theme === true ? "active-admin-user" : "inactive-admin-user"
                  }
                >
                  Admin
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/workflow/checklists"
                  // className=" text-slate-500 hover:no-underline hover:text-slate-900 font-bold"
                  className={
                    theme === true ? "active-admin-user" : "inactive-admin-user"
                  }
                >
                  Workflow
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* <h1 className="text-2xl">Admin Checklists </h1> */}
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      {/* Table  */}

      <div className="">
        <div className="flex justify-between py-2 px-5 ">
          <div className="flex space-x-6 items-baseline">
            <h2 className="text-[16px]">Checklists</h2>
            <BiPencil className="text-xl" />
          </div>
          <div>
            {/* Popup Button */}

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
                    {/* Pop up Header  */}
                    <div className=" flex justify-between p-4  items-center border-b-2  ">
                      <h1 className="text-xl font-semibold">
                        Add New Checklist
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
                        <label
                          htmlFor="name"
                          className="text-sm font-extrabold"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-full mt-1 p-2 outline-none ring-1 ring-gray-300 rounded-md "
                          id="name"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-extrabold">
                          Departments
                        </label>

                        <div className="flex  flex-wrap flex-1 justify-between items-center  p-2 ">
                          {checkboxData.map((each) => (
                            <div key={each.id} className="w-1/2 p-1">
                              <input
                                type="checkbox"
                                id={each.text}
                                className="mr-1"
                              />
                              <label htmlFor={each.text}>{each.text}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Popup Footer */}
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
        <div className="p-1 ">
          <table className="border rounded-lg w-full text-left table-auto">
            <thead className="bg-skin-theadColor border border-gray-400 border-opacity-20">
              <tr>
                <th className="p-3">CheckList Items</th>
                <th>Last Edited By</th>
                <th>Last Updated By</th>
                <th>Departments</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="bg-skin-tbodyColor">
              {tableData.map((data) => {
                return (
                  <tr
                    className="border odd:bg-skin-tbodyColor even:bg-skin-theadColor border-gray-400 border-opacity-20"
                    key={data.id}
                  >
                    <td className="p-4">{data.name}</td>
                    <td>{data.uname}</td>
                    <td>{data.date}</td>
                    <td>
                      <button className="bg-violet-100 outline-none rounded-full p-2 text-violet-400 font-medium">
                        {data.depart}
                      </button>
                      {data.name === "Check UPC and QR code" && (
                        <button className="bg-violet-100 ml-3 outline-none rounded-full p-2 text-violet-400 font-medium">
                          {data.depart2}
                        </button>
                      )}
                    </td>
                    <td>
                      <NavLink
                        to=""
                        className="text-violet-500 hover:no-underline"
                      >
                        Edit
                      </NavLink>
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

export default Checklists;
