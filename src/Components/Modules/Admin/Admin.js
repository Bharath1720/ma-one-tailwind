import React from "react";

// import { Link, Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";

import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

import { IoGitNetworkSharp } from "react-icons/io5";

import { FaWpforms } from "react-icons/fa";

import { GrTemplate, GrUserSettings } from "react-icons/gr";

import { MdManageAccounts } from "react-icons/md";

import { IoMdPeople } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

import { SiSpringsecurity } from "react-icons/si";

import { MdEmail } from "react-icons/md";

import { BsCardChecklist } from "react-icons/bs";

import { AiFillFolderOpen } from "react-icons/ai";

import { HiTemplate } from "react-icons/hi";

import AdminCard from "./AdminCard";

const teamData = [
  {
    id: 1,
    path: "/admin/users",
    heading: "Users",
    description: "Add and manage users",
    icon: <FiUsers />,
  },
  {
    id: 2,
    path: "/admin/roles",
    heading: "Roles",
    description: "Add and manage roles",
    icon: <IoGitNetworkSharp />,
  },
];

const workflowData = [
  {
    id: 1,
    path: "/admin/workflow/form-fields",
    heading: "Form Fields",
    description:
      "Customize your data capture fields used in the workflow request",
    icon: <FaWpforms />,
  },

  {
    id: 2,
    path: "/admin/workflow/template",
    heading: "Workfllow Template",
    description: "Build your owm workflow template",
    icon: <HiTemplate />,
  },
  {
    id: 3,
    path: "/admin/workflow/views",
    heading: "Views",
    description:
      "Customize what fields to be used for tracking the workflow status",
    icon: <IoMdPeople />,
  },
  {
    id: 4,
    path: "/admin/workflow/security",
    heading: "Security",
    description: "Specify who should see the data",
    icon: <SiSpringsecurity />,
  },
  {
    id: 5,
    path: "/admin/workflow/email",
    heading: "Email templates",
    description: "Customize when, what and who will receive the email",
    icon: <MdEmail />,
  },
  {
    id: 6,
    heading: "Checklists",
    path: "/admin/workflow/checklists",
    description: "Customize the checklists used by the reviewers",
    icon: <BsCardChecklist />,
  },

  // {
  //   id: 7,
  //   heading: "Checklists",
  //   description: "Customize the checklists used by the reviewers",
  //   icon: <BsCardChecklist />,
  // },
  // {
  //   id: 8,
  //   heading: "Checklists",
  //   description: "Customize the checklists used by the reviewers",
  //   icon: <BsCardChecklist />,
  // },
];

const masterData = [
  {
    id: 1,
    path: "/admin/master/file-types",
    heading: "File Types",
    description: "Manage the list of file types",
    icon: <AiFillFolderOpen />,
  },
  {
    id: 2,
    path: "/admin/master/departments",
    heading: "Departments",
    description: "Manage the list of department users",
    icon: <FiUsers />,
  },
];

const accountData = [
  {
    id: 1,
    path: "/admin/account/general-settings",
    heading: "General Settings",
    description: "Manage default settings for all users-timezone,etc.",
    icon: <IoSettings />,
  },
  {
    id: 2,
    path: "/admin/account/account-details",
    heading: "Account Details",
    description: "View account status and storage information",
    icon: <MdManageAccounts />,
  },
];

const Admin = () => {
  return (
    <section className="">
      <div className="  flex flex-row justify-between items-center p-4 pl-5  shadow-md ">
        <div className="flex items-center">
          <BsSliders className="text-2xl mr-3" />
          <h1 className="text-xl">Admin Dashboard</h1>
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      <div className="overflow-scroll h-full fixed pb-12">
        {/* Team  */}

        <div className="">
          <h1 className=" text-[18px] ml-5 mt-4 font-extrabold ">Team</h1>
          <div className="flex flex-row p-2  ">
            {teamData.map((eachTeam, index) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active-admin-dashboard"
                    : "inactive-admin-dashboard"
                }
                // className="w-1/2 ml-2"
                to={eachTeam.path}
                key={eachTeam.id}
              >
                <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
              </NavLink>
            ))}
          </div>
        </div>

        {/* Workflow */}

        <div className=" flex flex-col flex-1  flex-wrap  ">
          <h1 className=" text-[18px] ml-5 mt-3 font-extrabold">Workflow</h1>
          <div className=" flex flex-wrap p-3 px-0 py-2 gap-y-4  -mt-1 ">
            {workflowData.map((eachTeam, index) => (
              <NavLink
                // className="w-[44.33%] flex items-center p-3 ml-9 "

                className={({ isActive }) =>
                  isActive ? "active-admin-workflow" : "inactive-admin-workflow"
                }
                to={eachTeam.path}
                key={eachTeam.id}
              >
                <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
              </NavLink>
            ))}
          </div>
        </div>

        {/* <div>
        <h1 className="admin-dashboard-heading">Workflow</h1>
        <div className="p-3 d-flex flex-row  flex-wrap">
          {workflowData.map((eachTeam, index) => (
            <div className="nav-l" key={eachTeam.id}>
              <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
            </div>
          ))}
        </div>
      </div> */}

        {/* Master lists */}

        {/* <div>
        <h1 className="admin-dashboard-heading">Master Lists</h1>
        <div className="p-3 d-flex flex-row  flex-wrap">
          {masterData.map((eachTeam, index) => (
            <div className="nav-l" key={eachTeam.id}>
              <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
            </div>
          ))}
        </div>
      </div> */}

        <div className=" flex flex-col flex-1 flex-wrap  ">
          <h1 className=" text-[18px] ml-5 font-extrabold">Master Lists</h1>
          <div className=" flex flex-wrap ">
            {masterData.map((eachTeam, index) => (
              <NavLink
                // className="w-[44%]  flex items-center ml-16 "
                className={({ isActive }) =>
                  isActive ? "active-admin-master" : "inactive-admin-master"
                }
                to={eachTeam.path}
                key={eachTeam.id}
              >
                <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
              </NavLink>
            ))}
          </div>
        </div>

        {/* Account  */}

        {/* <div>
        <h1 className="admin-dashboard-heading">Account </h1>
        <div className="p-3 d-flex flex-row  flex-wrap">
          {accountData.map((eachTeam, index) => (
            <div className="nav-l" key={eachTeam.id}>
              <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
            </div>
          ))}
        </div>
      </div> */}

        <div className=" flex flex-col flex-1 flex-wrap  ">
          <h1 className=" text-[18px] ml-5 font-extrabold">Account</h1>
          <div className=" flex flex-wrap">
            {accountData.map((eachTeam, index) => (
              <NavLink
                // className="w-[44%]  flex items-center ml-16 "
                // className={({ isActive }) =>
                //   isActive ? "active-admin-workflow" : "inactive-admin-workflow"
                // }

                className={({ isActive }) =>
                  isActive ? "active-admin-master" : "inactive-admin-master"
                }
                to={eachTeam.path}
                key={eachTeam.id}
              >
                <AdminCard key={eachTeam.id} eachTeam={eachTeam} />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
