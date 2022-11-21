import React from "react";
import { NavLink } from "react-router-dom";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

import { AppContext } from "../../../../Context";

import { useContext } from "react";

import { v4 as uuidv4 } from "uuid";

const inputData = [
  {
    id: uuidv4(),
    name: "From",
    fname: "Request No",
  },
  {
    id: uuidv4(),
    name: "To",
    fname: "Product Name",
  },
  {
    id: uuidv4(),
    name: "CC",
    fname: "Product Code",
  },
  {
    id: uuidv4(),
    name: "Bcc",
    fname: "Component Code",
  },
  {
    id: uuidv4(),
    name: "Subject",
    fname: "Brand Name",
  },
];
const EmailEdit = ({ children }) => {
  const { open } = useContext(AppContext);

  return (
    <div>
      <div className="flex flex-row justify-between items-center p-4 pl-5 shadow-md ">
        {/* Admin Header */}
        <div className="flex items-center ">
          <FiUsers className="text-2xl mr-3" />
          <nav className="">
            <ul className="flex mt-1 peer space-x-1">
              <li className="after:content-['>'] pl-2 after:px-2 ">
                <NavLink
                  to="/admin"
                  className="text-slate-500 hover:no-underline hover:text-slate-900  font-bold"
                >
                  Admin
                </NavLink>
              </li>
              <li className=" after:px-2 ">
                <NavLink
                  to="/admin/workflow/email"
                  className="text-slate-500 hover:no-underline hover:text-slate-900  font-bold"
                >
                  Email Templates
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* AdminHeader Icons  */}
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      {/* Table body Data    */}
      <div
        className={`px-5 fixed  ${
          open ? "w-[82.45%]" : " w-[94.8%]"
        } h-screen overflow-auto`}
      >
        <div className="flex  py-5 ">
          <div className="flex space-x-6 items-baseline">
            <h2 className="text-[16px]">Initiation Email</h2>

            <BiPencil className="text-xl" />
          </div>
        </div>
        <div>
          <form action="javascript:void(0);" className="space-y-9">
            {/* Description */}
            <div className="border flex">
              <div className="flex flex-col p-3 w-1/2">
                <label htmlFor="" className="mb-1">
                  Description
                </label>
                <textarea
                  name=""
                  placeholder="Enter Item description"
                  id=""
                  cols="20"
                  rows="4"
                  className="outline-none bg-skin-rightSideColor p-2 border border-slate-300 rounded-md"
                ></textarea>
              </div>
              <div className="flex justify-center flex-col w-1/2 p-2">
                <label htmlFor="" className="mb-1">
                  Reply-To
                </label>
                <input
                  type="text"
                  placeholder="exaple.email@gmail.com"
                  className="outline-none -2 p-3 border bg-skin-rightSideColor border-slate-300 rounded-md"
                />
              </div>
            </div>
            {/* Header */}
            <div className="flex border flex-col">
              <h4 className="text-center my-2 text-[16px] ">Header</h4>
              <div className="flex flex-wrap">
                {inputData.map((data) => {
                  return (
                    <div
                      key={data.id}
                      className={`flex flex-col px-3 mb-2 ${
                        data.name === "Subject" ? "w-full" : "w-1/2"
                      }`}
                    >
                      <label htmlFor="" className="mb-1">
                        {data.name}
                      </label>
                      <input
                        type="text"
                        className="outline-none  p-3  bg-skin-rightSideColor border border-slate-300  rounded-md"
                        placeholder="example.email@gmail.com"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Body */}
            <div className="flex border flex-col">
              <h4 className="text-center my-1 text-[16px] ">Body</h4>
              <div className="flex flex-col p-3 w-full">
                <label htmlFor="" className="mb-1">
                  Description
                </label>
                <textarea
                  name=""
                  placeholder="Enter Item description"
                  id=""
                  cols="20"
                  rows="4"
                  className="outline-none bg-skin-rightSideColor  border border-slate-300  p-2  rounded-md"
                ></textarea>
              </div>
              {/* Table  */}
              <div>
                <table className="border text-left table-auto ml-4 w-2/4">
                  <tr className="bg-gray-50 bg-skin-theadColor ">
                    <th className="pl-4">Field Name</th>
                    <th className="pr-12">Field Value</th>
                    <th>
                      <button className="text-white bg-gray-500 rounded-md my-2 p-3 ">
                        Add
                      </button>
                    </th>
                  </tr>

                  {inputData.map((data) => {
                    return (
                      <tr className="bg-skin-tbodyColor">
                        <td className="p-4 border-b" colSpan={3}>
                          {data.fname}
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <select
                      name=""
                      className="m-4 p-2 bg-skin-theadColor border border-slate-300  rounded-md outline-none"
                      id=""
                    >
                      <option value="">Category</option>
                      <option value="">Request No</option>
                      <option value="">Product Name</option>
                      <option value="">Product Code</option>
                    </select>
                  </tr>
                </table>
              </div>
              <div className="flex flex-col p-3 mb-4 w-full">
                <label htmlFor="" className="mb-1">
                  Description
                </label>
                <textarea
                  name=""
                  placeholder="Enter Item description"
                  id=""
                  cols="20"
                  rows="4"
                  className="outline-none p-2 border bg-skin-rightSideColor border-slate-300  rounded-md"
                ></textarea>
              </div>
              {/* button */}
              <div className="flex mb-28 justify-center items-center space-x-4">
                <NavLink
                  to="/admin/workflow/email"
                  className="text-slate-500 bg-gray-100 p-3 rounded-md hover:no-underline hover:text-slate-900  font-bold"
                >
                  Cancel
                </NavLink>
                <button className="text-white bg-gray-500 p-3 hover:bg-gray-400 rounded-md">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailEdit;
