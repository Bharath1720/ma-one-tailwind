import React from "react";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import { BiPencil } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RiKeyLine, RiKeyFill } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";

import { AppContext } from "../../../../Context";

import { useContext } from "react";

import { v4 as uuidv4 } from "uuid";

const tableData = [
  { id: uuidv4(), name: "Tom Satter" },
  {
    id: uuidv4(),
    name: "James Watt",
  },
  {
    id: uuidv4(),
    name: "Peter Smith",
  },
  {
    id: uuidv4(),
    name: "vikram Raj",
  },
  {
    id: uuidv4(),
    name: "Sandy Wilson",
  },
];

const Security = ({ children }) => {
  const { open } = useContext(AppContext);

  return (
    <div>
      {/* Admin Header */}
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
                  to="/admin/workflow/security"
                  className=" text-slate-500 hover:no-underline hover:text-slate-900 font-bold"
                >
                  Security
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* <h1 className="text-2xl">Admin Security </h1> */}
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      {/* Table body */}

      <div
        className={`px-5 overflow-auto ${
          open ? "w-[82.45%]" : "w-[94.8%]"
        } h-screen fixed`}
      >
        <div className="flex">
          <div className="flex space-x-6 items-baseline">
            <h2 className="text-[16px]">Workflow Setting</h2>
            <BiPencil className="text-xl" />
          </div>
        </div>
        <div>
          {/* Normal Access */}
          <div className="flex  p-4 space-x-6">
            <div>
              <RiKeyLine className="text-2xl" />
            </div>
            <div className="space-y-2">
              <h6 className="text-[16px]">Normal Access</h6>
              <p className="leading-7">
                By Default all users are added to Normal Security unless they
                are added to restricted list <br /> Normal security allows users
                to view all data in the application
              </p>
            </div>
          </div>
          <div className="flex p-4 space-x-6">
            <div>
              <RiKeyFill className="text-2xl" />
            </div>
            <div className="space-y-2 w-full">
              <h6>Restricted Access</h6>
              <div className="flex justify-between mr-44  ">
                <div className="">
                  <p className="leading-7">
                    The following user will be able to see the views specified{" "}
                    <br />
                    in the view setting
                  </p>

                  {/* Usernames Table  */}
                  <table className="border mt-3 w-3/4 mb-16 rounded-lg text-left table-auto">
                    <tr className="bg-skin-theadColor">
                      <th className="pl-4 text-[14px] ">User Names</th>
                      <th>
                        <button className="text-white bg-gray-500 rounded-md my-2 mx-2 p-2 ">
                          Add
                        </button>
                      </th>
                    </tr>
                    {tableData.map((data) => {
                      return (
                        <tr
                          className="border-b bg-skin-tbodyColor"
                          key={data.id}
                        >
                          <td className="p-4">{data.name}</td>
                          <td>
                            <MdOutlineDeleteForever className="text-red-500 ml-4 text-2xl" />
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <select
                        name=""
                        className="m-4 p-2 border-2 outline-none bg-skin-theadColor"
                        id=""
                      >
                        {tableData.map((data) => {
                          return (
                            <option key={data.id} value="">
                              {data.name}
                            </option>
                          );
                        })}
                      </select>
                    </tr>
                  </table>
                </div>
                <div>
                  <p className="leading-7">
                    Users in the restricted list will only have access <br /> to
                    the following views
                  </p>
                  <table className="border mt-3 w-2/3 rounded-lg   text-left table-auto">
                    <tr className="bg-gray-50 bg-skin-theadColor">
                      <th className="pl-4">Views</th>
                      <th>
                        <button className="text-white bg-gray-500 rounded-md my-2 mx-2 p-2 ">
                          Add
                        </button>
                      </th>
                    </tr>

                    <tr className="border-b bg-skin-tbodyColor">
                      <td className="p-4 ">Inbox</td>
                      <td>
                        <MdOutlineDeleteForever className="text-red-500 ml-4 text-2xl" />
                      </td>
                    </tr>

                    <tr>
                      <select
                        name=""
                        className="m-4 p-2 border-2 outline-none bg-skin-theadColor"
                        id=""
                      >
                        <option value="">Requests 1 Participated</option>;
                        <option value="">Requests 2 Participated</option>;
                      </select>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
