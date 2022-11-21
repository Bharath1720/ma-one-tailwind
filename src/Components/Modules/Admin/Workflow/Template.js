import React from "react";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";

import { BiPencil } from "react-icons/bi";
import { useContext } from "react";

import { AppContext } from "../../../../Context";

const tableData = [
  {
    id: uuidv4(),
    hAname: "Activity Name",
    hUname: "Users",
    hall: ``,
    hduration: "Duration (DAYS)",
    hbutton1: "Button-1 name",
    hbuttonact1: "Button-1 action",
    hbuttongoes1: "Button-1 goes to",
    hbutton2: "Button-2 name",
    hbuttonact2: "Button-2 action",
    hbuttongoes2: "Button-2 goes to",
    hstatus: "Status",
  },
  {
    id: uuidv4(),
    aname: "Start",
    uname: "Users1",
    uname2: "Users2",
    all: "Any",
    duration: "",
    button1: "Submit",
    buttonact1: "Initiate Request",
    buttongoes1: "",
    button2: "",
    buttonact2: "",
    buttongoes2: "",
    status: "Pending with 10  for activity",
  },
  {
    id: uuidv4(),
    aname: "Brief Upload",
    uname: "Users1",
    all: "Any",
    duration: "2",
    button1: "Submit",
    buttonact1: "Brief Uploaded",
    buttongoes1: "",
    button2: "",
    buttonact2: "",
    buttongoes2: "",
    status: "Pending with 23 for activity",
  },
  {
    id: uuidv4(),
    aname: "Artwork Upload",
    uname: "Users3",
    all: "Any",
    duration: "2",
    button1: "Submit",
    buttonact1: "Artwork Uploaded",
    buttongoes1: "",
    button2: "",
    buttonact2: "",
    buttongoes2: "",
    status: "Pending with 8 for activity",
  },
  {
    id: uuidv4(),
    aname: "Artwork Approval",
    uname: "Users6",
    uname2: "Users4",
    all: "All",
    duration: "5",
    button1: "Approve",
    buttonact1: "Artwork approved",
    buttongoes1: "Print Proof Upload",
    button2: "Reject",
    buttonact2: "Artwork rejected",
    buttongoes2: "Artwork upload",
    status: "Pending with 2 for activity",
  },
  {
    id: uuidv4(),
    aname: "Print Proof Upload",
    uname: "Users7",
    all: "Any",
    duration: "3",
    button1: "Submit",
    buttonact1: "Proof Uploaded",
    buttongoes1: "",
    button2: "",
    buttonact2: "",
    buttongoes2: "",
    status: "Pending with 87 for activity",
  },
  {
    id: uuidv4(),
    aname: "Print Proof Approval",
    uname: "Users6",
    uname2: "Users2",
    all: "All",
    duration: "3",
    button1: "Approve",
    buttonact1: "Proof approved",
    buttongoes1: "End",
    button2: "Reject",
    buttonact2: "Proof rejected",
    buttongoes2: "",
    status: "Pending with 82 for activity",
  },
  {
    id: uuidv4(),
    aname: "End",
    all: "",
    duration: "",
    button1: "",
    buttonact1: "",
    buttongoes1: "",
    button2: "",
    buttonact2: "",
    buttongoes2: "",
    status: "Workflow Completed",
  },
];

const Template = () => {
  const { theme } = useContext(AppContext);
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
                  to="/admin/workflow/template"
                  className={
                    theme === true ? "active-admin-user" : "inactive-admin-user"
                  }
                  // className=" text-slate-500 hover:no-underline hover:text-slate-900 font-bold"
                >
                  Workflow Templates
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* <h1 className="text-2xl">Admin Template </h1> */}
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      {/* wrokflow template */}
      <div className="">
        <div className="flex justify-between py-2 px-5 ">
          <div className="flex space-x-6 items-baseline">
            <h2 className="text-[16px]">New Template</h2>
            <BiPencil className="text-xl" />
          </div>
          <div>
            {/*Pop Up */}
            {/* <button className="text-white bg-violet-500 rounded-md p-3 ">
              Add CheckList
            </button> */}
          </div>
        </div>
        <div>
          <table className="rounded-lg w-full text-left table-auto">
            <thead className="bg-skin-theadColor border border-gray-400 border-opacity-20">
              {tableData.map((data) => {
                return (
                  <>
                    {data.hAname === "Activity Name" && (
                      <tr>
                        <th className="p-5">{data.hAname}</th>
                        <th className="">{data.hUname}</th>
                        <th className="">All or {<br />} Anyone?</th>
                        <th className="">Duration {<br />} (DAYS)</th>
                        <th className="">Button-1 {<br />} Name</th>
                        <th className="">{data.hbuttonact1}</th>
                        <th className="">{data.hbuttongoes1}</th>
                        <th className="">{data.hbutton2}</th>
                        <th className="">{data.hbuttonact2}</th>
                        <th className="">{data.hbuttongoes2}</th>
                        <th className="">{data.hstatus}</th>
                        <th></th>
                      </tr>
                    )}
                  </>
                );
              })}
            </thead>

            <tbody className="bg-skin-tbodyColor">
              {tableData.map((data) => {
                return (
                  <>
                    {data.hAname !== "Activity Name" && (
                      <tr className="border odd:bg-skin-tbodyColor even:bg-skin-theadColor border-gray-400 border-opacity-20">
                        <td className=" p-4 ">{data.aname}</td>
                        <td className="flex mt-4 ">
                          {data.uname && (
                            <button
                              className={` ${
                                data.uname === "Users1" ||
                                data.uname === "Users2" ||
                                data.uname === "Users7"
                                  ? "bg-gray-200 text-gray-400"
                                  : "text-violet-400 bg-violet-100"
                              } ${
                                data.uname === "Users6"
                                  ? "bg-red-200 text-red-400"
                                  : "text-violet-400 bg-violet-100"
                              } outline-none rounded-full px-2 py-1 text-xs  font-medium`}
                            >
                              {data.uname}
                            </button>
                          )}
                          {data.uname2 && (
                            <button className="bg-violet-100 ml-1 outline-none rounded-full px-2 py-1 text-xs  text-violet-400 font-medium">
                              {data.uname2}
                            </button>
                          )}
                        </td>
                        <td>{data.all}</td>
                        <td>{data.duration}</td>
                        <td>{data.button1}</td>
                        <td>{data.buttonact1}</td>
                        <td>{data.buttongoes1}</td>
                        <td>{data.button2}</td>
                        <td>{data.buttonact2}</td>
                        <td>{data.buttongoes2}</td>
                        <td>{data.status}</td>
                        {data.hAname !== "Activity Name" && (
                          <td>
                            <NavLink
                              to=""
                              className="text-violet-500 hover:no-underline"
                            >
                              Edit
                            </NavLink>
                          </td>
                        )}
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Template;
