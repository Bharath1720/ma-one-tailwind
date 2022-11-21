import React, { useState } from "react";

import "./index.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AppContext } from "./Context";
import Sidebar from "./Components/Sidebar.js/Sidebar";
import Inbox from "./Components/Modules/Client/Inbox";
import Assets from "./Components/Modules/Client/Assets/Assets";
import NewRequest from "./Components/Modules/Client/NewRequest/NewRequest";

import Admin from "./Components/Modules/Admin/Admin";
import RequestInfo from "./Components/Modules/Client/NewRequest/RequestInfo";
import Files from "./Components/Modules/Client/NewRequest/Files";
import AuditLog from "./Components/Modules/Client/NewRequest/AuditLog";
import Comments from "./Components/Modules/Client/NewRequest/Comments";
import Tasks from "./Components/Modules/Client/NewRequest/Tasks";
import Reporting from "./Components/Modules/Client/Reporting";
import Login from "./Components/Login";

import Browse from "./Components/Modules/Client/Assets/Browse";
import Search from "./Components/Modules/Client/Assets/Search";

import Users from "./Components/Modules/Admin/Users";
import Roles from "./Components/Modules/Admin/Roles";

import FormFields from "./Components/Modules/Admin/Workflow/FormFields";

import Template from "./Components/Modules/Admin/Workflow/Template";

import Views from "./Components/Modules/./Admin/Workflow/Views";

import Security from "./Components/Modules/Admin/Workflow/Security";

import Email from "./Components/Modules/Admin/Workflow/Email";

import Checklists from "./Components/Modules/Admin/Workflow/Checklists";

import FileTypes from "./Components/Modules/Admin/MasterLists/FileTypesEdit";

import Departments from "./Components/Modules/Admin/MasterLists/Departments";

import GeneralSettins from "./Components/Modules/Admin/Account/GeneralSettins";

import AccountDetails from "./Components/Modules/Admin/Account/AccountDetails";

import FileTypesEdit from "./Components/Modules/Admin/MasterLists/FileTypes";
import EmailEdit from "./Components/Modules/Admin/Workflow/EmailEdit";

const App = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    return setOpen(!open);
  };

  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    // alert(theme);
    return setTheme(!theme);
  };

  const applyThemes = theme === false ? "theme-light" : "theme-dark";

  const [login, setLoggedIn] = useState(false);
 

  return (
    <>
      <AppContext.Provider
        value={{ theme, toggleTheme, open, toggle, setLoggedIn }}
      >
        <div className={`${applyThemes}`}>
          <Router>
            <Routes>
              <Route exact path="/login" element={<Login />} />
            </Routes>
            {login && (
              <Sidebar>
                <Routes>
                  <Route exact path="/" element={<Inbox />} />
                  <Route exact path="/assets" element={<Assets />} />
                  <Route exact path="/new-request" element={<NewRequest />}>
                    <Route
                      exact
                      path="/new-request"
                      // element={<RequestInfo />}
                      element={<Navigate to="request-info" />}
                    />
                    <Route
                      exact
                      path="request-info"
                      element={<RequestInfo />}
                    />
                    <Route exact path="files" element={<Files />} />
                    <Route exact path="audit-log" element={<AuditLog />} />
                    <Route exact path="comments" element={<Comments />} />
                    <Route exact path="tasks" element={<Tasks />} />
                  </Route>
                  <Route exact path="/reporting" element={<Reporting />} />
                  <Route exact path="/admin" element={<Admin />} />
                  <Route exact path="/assets/browse" element={<Browse />} />
                  <Route exact path="/assets/search" element={<Search />} />
                  <Route exact path="/admin/users" element={<Users />} />
                  <Route exact path="/admin/roles" element={<Roles />} />
                  <Route
                    exact
                    path="/admin/workflow/form-fields"
                    element={<FormFields />}
                  />

                  <Route
                    exact
                    path="/admin/workflow/template"
                    element={<Template />}
                  />

                  <Route
                    exact
                    path="/admin/workflow/views"
                    element={<Views />}
                  />

                  <Route
                    exact
                    path="/admin/workflow/security"
                    element={<Security />}
                  />

                  <Route
                    exact
                    path="/admin/workflow/email"
                    element={<Email />}
                  />

                  <Route
                    exact
                    path="/admin/workflow/email-edit"
                    element={<EmailEdit />}
                  />

                  <Route
                    exact
                    path="/admin/workflow/checklists"
                    element={<Checklists />}
                  />

                  {/* <Route
                    exact
                    path="/admin/master/file-types"
                    element={<FileTypes />}
                  /> */}

                  <Route
                    exact
                    path="/admin/file-types-edit"
                    element={<FileTypes />}
                  />

                  <Route
                    exact
                    path="/admin/master/file-types"
                    element={<FileTypesEdit />}
                  />

                  <Route
                    exact
                    path="/admin/master/departments"
                    element={<Departments />}
                  />

                  <Route
                    exact
                    path="/admin/account/general-settings"
                    element={<GeneralSettins />}
                  />

                  <Route
                    exact
                    path="/admin/account/account-details"
                    element={<AccountDetails />}
                  />
                </Routes>
              </Sidebar>
            )}
          </Router>
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;

// import React, { useState } from "react";
// import "./index.css";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { AiFillLeftCircle } from "react-icons/ai";

// import { FaImage } from "react-icons/fa";

// import { BiListCheck } from "react-icons/bi";

// import { MdFileCopy } from "react-icons/md";
// import { HiChartPie } from "react-icons/hi";

// import { GiHealthNormal } from "react-icons/gi";

// import { RiInboxArchiveFill } from "react-icons/ri";

// const App = () => {
//   const [open, setOpen] = useState(true);

//   const menuItem = [
//     {
//       path: "/",
//       name: "Inbox",
//       icon: <RiInboxArchiveFill />,
//     },
//     {
//       path: "/assets",
//       name: "Assets",
//       icon: <FaImage />,
//     },

//     {
//       path: "/pack-copy",
//       name: "Pack Copy",
//       icon: <MdFileCopy />,
//     },

//     {
//       path: "/specifications",
//       name: "Specifications",
//       icon: <BiListCheck />,
//     },

//     {
//       path: "/reporting",
//       name: "Reporting",
//       icon: <HiChartPie />,
//     },

//     {
//       path: "/new-request",
//       name: "New Request",
//       icon: <GiHealthNormal />,
//     },
//   ];

//   return (
//     <div className="flex">
//       <div
//         className={`${
//           open ? "w-72" : "w-20"
//         } duration-300 h-screen p-4 pt-3 bg-dark-purple relative`}
//       >
//         <AiFillLeftCircle
//           className={`absolute cursor-pointer -right-3 bg-white rounded-sm top-6 text-2xl ${
//             !open && "rotate-180"
//           }`}
//           onClick={() => setOpen(!open)}
//         />
//         {/* Logo */}
//         <div className="flex gap-x-4 items-center">
//           {!open && (
//             <img
//               src="https://res.cloudinary.com/duwkxxbeh/image/upload/v1666002585/mlogol_preview_rev_1_aj3xdi.png"
//               alt="logo"
//               className="w-11"
//             />
//           )}

//           {open && (
//             <img
//               src="https://res.cloudinary.com/ddsej2ff9/image/upload/v1665393077/MicrosoftTeams-image_tejvle.png"
//               alt="logo"
//               className="h-28"
//             />
//           )}
//         </div>

//         <ul className="pt-6">
//           {menuItem.map((menu, index) => (
//             <li
//               key={index}
//               className="text-gray-300 mt-2 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md "
//             >
//               <span className={`text-2xl ${!open && "ml-1"} `}>
//                 {menu.icon}
//               </span>
//               <span className={`text-xl ${!open && "hidden"}   duration-200 `}>
//                 {menu.name}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="bg-slate-700 w-screen">
//         <h1 className="p-7 text-2xl font-semibold flex-1 h-screen">Home</h1>
//       </div>
//     </div>
//   );
// };

// export default App;
