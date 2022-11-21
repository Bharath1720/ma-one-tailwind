import React from "react";
import { NavLink } from "react-router-dom";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

const FileTypes = () => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center p-4 pl-5  shadow-md ">
        <div className="flex items-center">
          <FiUsers className="text-2xl mr-3" />
          <nav className="">
            <ul className="flex mt-1 peer space-x-1">
              <li className="odd:after:content-[''] even:after:content-['_/'] pl-2 after:px-2 ">
                <NavLink
                  to="/admin"
                  className="text-slate-500 hover:no-underline hover:text-slate-900  font-bold"
                >
                  Admin
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>
      <div className="">
        <div className="flex items-baseline py-3 px-5 space-x-6">
          <h2 className="text-[16px]">Master lists</h2>
          <BiPencil className="text-xl" />
        </div>
        <div className="p-1 ">
          <table className="border rounded-lg w-full text-left table-auto">
            <thead className="bg-skin-theadColor">
              <tr>
                <th className="p-3">List Name</th>
                <th>Numbers Of Items</th>
                <th>Last Updated By</th>
                <th>Last Updated On</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-skin-tbodyColor">
              <tr>
                <td className="p-4">File Types</td>
                <td>6</td>
                <td>User1</td>
                <td>12 Jul 2022</td>
                <td>
                  <NavLink to="/admin/file-types-edit">Edit</NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FileTypes;
