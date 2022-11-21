import React from "react";

import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import { FiUsers } from "react-icons/fi";

import { NavLink } from "react-router-dom";

const Roles = () => {
  return (
    <div>
      <div className="  flex flex-row justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md ">
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
                  to="/admin/roles"
                  className=" text-slate-500 hover:no-underline hover:text-slate-900 font-bold"
                >
                  Roles
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* <h1 className="text-2xl">Admin Roles </h1> */}
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Roles;
