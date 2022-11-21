import React from "react";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FiUsers } from "react-icons/fi";

import { BiPencil } from "react-icons/bi";

import { AppContext } from "../../../../Context";

import { useContext } from "react";

import { v4 as uuidv4 } from "uuid";

const tableData = [
  {
    id: uuidv4(),
    name: "initiation email",
    description: "Send an alert whena workflow is initiated",
    lasteditby: null,
    lastediton: null,
  },
  {
    id: uuidv4(),
    name: "New Task email",
    description: "Send an alert when a task is about to start",
    lasteditby: "Peter Townsend",
    lastediton: "8-Jun-2022",
  },
  {
    id: uuidv4(),
    name: "Task Reminder email",
    description: "Send an alert a day before a task is due",
    lasteditby: "John Mallick",
    lastediton: "12-Jul-2022",
  },
  {
    id: uuidv4(),
    name: "Approval or Rejection email",
    description: "Send an alert when an approval task is completed",
    lasteditby: null,
    lastediton: null,
  },
  {
    id: uuidv4(),
    name: "workflow complete email",
    description: "Send an alert when the workflow finishes",
    lasteditby: null,
    lastediton: null,
  },
  {
    id: uuidv4(),
    name: "Delegate task alert",
    description: "Send an alert when user delegates to another user",
    lasteditby: null,
    lastediton: null,
  },
];

const Email = ({ Children }) => {
  const { open } = useContext(AppContext);

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
                  to="/admin/workflow/email"
                  className=" text-slate-500 hover:no-underline hover:text-slate-900 font-bold"
                >
                  Email Templates
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* <h1 className="text-2xl">Admin Email </h1> */}
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>
      {/* Table  */}

      <div className="">
        <div className="flex px-5 ">
          <div className="flex space-x-6 items-baseline">
            <h2 className="text-[16px]">Email Templates</h2>
            <BiPencil className="text-xl" />
          </div>
        </div>
        <div className="p-1 ">
          <table className="border rounded-lg w-full text-left table-auto">
            <thead className="bg-skin-theadColor">
              <tr>
                <th className=" p-3 text-md font-bold ">Template Name</th>
                <th className="text-md font-bold ">Template Description</th>
                <th className="text-md font-bold ">Last Edited By</th>
                <th className="text-md font-bold ">Last Edited On</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-skin-tbodyColor">
              {tableData.map((data) => {
                return (
                  <tr className="border" key={data.id}>
                    <td className=" text-sm font-medium p-4">{data.name}</td>
                    <td className=" text-sm font-medium">{data.description}</td>
                    <td className="text-sm font-medium">{data.lasteditby}</td>
                    <td className="text-sm font-medium">{data.lastediton}</td>
                    <td>
                      <NavLink
                        to="/admin/workflow/email-edit"
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

export default Email;
