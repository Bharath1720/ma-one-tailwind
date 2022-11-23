import React from "react";
import { Link } from "react-router-dom";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

import Popup from "reactjs-popup";
import { BsXLg } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

import { useContext } from "react";

import { AppContext } from "../../../../Context";

const tableData = [
  {
    id: uuidv4(),
    name: "Artwork Files",
    details: "The artwork file that bill be approved for print",
  },

  {
    id: uuidv4(),
    name: "Print Proof Files",
    details:
      "The artwork proof that the print vendor shares for approval before printing",
  },

  {
    id: uuidv4(),
    name: "Brief",
    details: "Instruction and content designer to create the artwork",
  },

  {
    id: uuidv4(),
    name: "Dieline",
    details:
      "Also called as Key Line Diagram (KLD) this is typically a CAD file",
  },

  {
    id: uuidv4(),
    name: "Previous Art version",
    details: "Previos version of the current artwork being created",
  },

  {
    id: uuidv4(),
    name: "3D Files",
    details: "3d rendering of the artwork in GLTF or GLB format",
  },
];

const FileTypesEdit = () => {
  const { theme } = useContext(AppContext);
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-4 pl-5 shadow-md ">
        <div className="flex items-center">
          <FiUsers className="text-2xl mr-3" />
          <nav className="">
            <ul className="flex mt-1 peer space-x-1">
              <li className="after:content-['>'] pl-2 after:px-2 ">
                <Link
                  to="/admin"
                  // className="text-slate-500 hover:no-underline hover:text-slate-900  font-bold"
                  className={
                    theme === true ? "active-admin-user" : "inactive-admin-user"
                  }
                >
                  Admin
                </Link>
              </li>
              <li className="pl-0 after:px-2 ">
                <Link
                  to="/admin/master"
                  // className="text-slate-500 hover:no-underline hover:text-slate-900  font-bold"
                  className={
                    theme === true ? "active-admin-user" : "inactive-admin-user"
                  }
                >
                  Master Lists
                </Link>
              </li>
            </ul>
          </nav>
          {/* <h1 className="text-2xl">Admin Users</h1> */}
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>
      <div className="">
        <div className="flex justify-between py-5 px-5 ">
          <div className="flex space-x-6 items-center">
            <h2 className="text-xl">File Types</h2>
            <BiPencil className="text-2xl" />
          </div>
          <div>
            {/* Pop up Button */}

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
                    {/* Popup Header  */}
                    <div className=" flex justify-between p-4  items-center border-b-2  ">
                      <h1 className="text-xl font-semibold">New File Type</h1>
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
                        <label htmlFor="name" className="text-base block mb-2 ">
                          Description
                        </label>
                        <textarea
                          className="rounded-lg"
                          rows={10}
                          cols={111}
                        ></textarea>
                      </div>
                    </form>
                  </div>
                  {/* Pop up Foter */}
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
          <table className="border rounded-lg w-full text-left table-auto ">
            <thead className="bg-skin-theadColor border border-gray-400 border-opacity-20">
              <tr>
                <th className="p-3">File Type</th>
                <th>Description</th>
                <th>Last Updated By</th>
                <th>Last Updated On</th>
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
                    <td>{data.details}</td>
                    <td>User1</td>
                    <td>12 Jul 2022</td>
                    <td>
                      <Link
                        to=""
                        className="text-skin-ediBtn hover:no-underline hover:text-skin-ediBtn"
                      >
                        Edit
                      </Link>
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

export default FileTypesEdit;
