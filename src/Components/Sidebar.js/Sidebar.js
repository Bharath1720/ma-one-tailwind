import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { RiInboxArchiveFill } from "react-icons/ri";

// import { AiFillLeftCircle } from "react-icons/ai";

import { FaImage } from "react-icons/fa";

import { BiListCheck } from "react-icons/bi";

import { MdFileCopy } from "react-icons/md";
import { HiChartPie } from "react-icons/hi";

import { IoSettingsSharp } from "react-icons/io5";

import { GiHealthNormal } from "react-icons/gi";

import { FaUserShield } from "react-icons/fa";

import { FaLock, FaMoneyBill, FaUser } from "react-icons/fa";

// import { Menu, Transition } from "@headlessui/react";
// import { Fragment } from "react";

import { BiTable } from "react-icons/bi";

import { useContext } from "react";

import { AppContext } from "../../Context";

import Dark from "../../images/Dark.png";

import Light from "../../images/Light.png";

const menuItem = [
  {
    path: "/",
    name: "Inbox",
    icon: <RiInboxArchiveFill />,
  },
  {
    path: "/assets",
    name: "Assets",
    icon: <FaImage />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/pack-copy",
    name: "Pack Copy",
    icon: <MdFileCopy />,
  },

  {
    path: "/specifications",
    name: "Specifications",
    icon: <BiListCheck />,
  },

  {
    path: "/reporting",
    name: "Reporting",
    icon: <HiChartPie />,
  },

  {
    path: "/new-request",
    name: "New Request",
    icon: <GiHealthNormal />,
  },
];

const Sidebar = ({ children }) => {
  // const [open, setOpen] = useState(false);

  // const [isSelected, setIsSelected] = useState(false);

  // const toggle = () => setOpen(!open);

  // for Themes

  const { open, toggle, theme, toggleTheme } = useContext(AppContext);

  const applyStyles = theme ? "transit" : "not-transit";

  const applyStylesToProfile = open
    ? "active-container-items"
    : "inactive-container-items";

  const toggleLogos = theme === true ? Dark : Light;
  // ? "https://res.cloudinary.com/dyx9u0bif/image/upload/v1667883952/highres-ma-very-large_gce4xc.png"
  // : "https://res.cloudinary.com/ddsej2ff9/image/upload/v1665393077/MicrosoftTeams-image_tejvle.png";

  const toggleTexts = theme === true ? "Light Mode" : "Dark Mode";

  const applyHrLine = theme === true ? "hr-light" : "hr-dark";

  const [settings, setSettings] = useState(false);

  const toggleSettings = () => {
    setSettings(!settings);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const applyThemes = theme === false ? "theme-light" : "theme-dark";

  return (
    // All the routings goes from here

    <div className="flex max-h-screen relative ">
      <div
        className={`${
          open ? "w-80" : "w-20"
        } duration-300 h-screen p-4 pt-3 bg-skin-fill relative `}
      >
        <img
          src="https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/control.png"
          alt=""
          className={`absolute cursor-pointer -right-3 rounded-sm top-5 text-sm h-7 ${
            !open && "rotate-180"
          }`}
          onClick={toggle}
        />
        {/* Logo */}
        <div className="flex gap-x-4 items-center">
          {/* small Logo */}
          {!open && (
            <img
              src="https://res.cloudinary.com/duwkxxbeh/image/upload/v1666002585/mlogol_preview_rev_1_aj3xdi.png"
              alt="logo"
              className="w-11"
            />
          )}

          {open && <img src={`${toggleLogos}`} alt="logo" className=" h-20" />}
        </div>

        <ul className="pt-6">
          {menuItem.map((menu, index) => {
            // Asset here

            return (
              <div className="group relative">
                <NavLink
                  to={menu.path}
                  key={index}
                  // className="text-gray-300 mt-2 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md "

                  className={({ isActive }) =>
                    isActive ? "active-state" : "inactive-state"
                  }
                >
                  <span className={`text-2xl ${!open && "ml-1"} `}>
                    {menu.icon}
                  </span>
                  <span
                    className={`text-base ${!open && "hidden"}   duration-200 `}
                  >
                    {menu.name}
                  </span>

                  {menu.name === "Assets" && (
                    <div className="hidden group-hover:block absolute -right-32  z-20 top-0 ">
                      <NavLink
                        to="/assets/search"
                        // element={<AssetSearch />}

                        className={
                          "bg-gray-100 hover:text-gray-900 visited:text-gray-900 visited:no-underline  text-gray-400  hover:bg-gray-300  flex items-center space-x-2 hover:no-underline px-6 py-4 text-lg"
                        }
                      >
                        <BiTable className="text-2xl" />
                        <span className="text-base">Search</span>
                      </NavLink>
                      <NavLink
                        to="/assets/browse"
                        // element={<AssetBrowse />}

                        className={
                          "bg-gray-100  hover:bg-gray-300 hover:text-gray-900 text-gray-400 flex items-center space-x-2 text-lg hover:no-underline px-6 pr-3 py-4"
                        }
                      >
                        <BiTable className="text-2xl" />
                        <span className="text-base">Browse</span>
                      </NavLink>
                    </div>
                  )}
                </NavLink>
              </div>
            );
          })}
        </ul>

        <hr className={`${applyHrLine}`} />

        {/* Admin  Routing Link */}

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "active-state" : "inactive-state"
          }
        >
          <span className={`text-2xl ${!open && "ml-1"} `}>
            <FaUserShield />
          </span>
          <span className={`text-base ${!open && "hidden"}   duration-200 `}>
            Admin
          </span>
        </NavLink>

        {/* Themes and profile details container*/}
        <div className={` ${applyStylesToProfile}  `}>
          {/* Themes slider  */}
          <div className="flex justify-between pb-4 ">
            {open && (
              <span
                className={`${
                  theme === true
                    ? "text-white text-base font-bold"
                    : "text-black text-base font-bold "
                }`}
              >{`${toggleTexts}`}</span>
            )}

            <div
              className="w-11 h-6 flex items-center bg-gray-300 rounded-full cursor-pointer "
              // onClick={() => setIsSelected(!isSelected)}
              onClick={toggleTheme}
            >
              <span
                className={`w-6 h-6 bg-skin-indicator rounded-full shadow-md ${applyStyles} duration-300 ease-in-out  `}
              ></span>
            </div>
          </div>

          {/* Profile details container */}

          <NavLink
            to="/user-profile"
            // className=" flex mb-6  items-center border border-indigo-600 "
            className={({ isActive }) =>
              isActive
                ? "active-state flex mb-6  items-center  "
                : "inactive-state flex mb-6  items-center"
            }
          >
            <img
              className={open ? "profile-lg" : "profile-sm"}
              src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
              alt=""
            />
            <div className="flex ml-4 flex-col">
              <h1
                className={`text-base text-skin-base font-bold ${
                  !open && "hidden"
                } `}
              >
                Jane Doe
              </h1>
              <span
                className={`text-xs text-skin-base ${
                  !open && "hidden"
                }   duration-200 `}
              >
                View Profile
              </span>
            </div>
          </NavLink>
        </div>
      </div>

      <main className="max-h-screen  bg-skin-rightSideColor text-skin-base  w-screen">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;

// if (menu.path === "/assets") {
//   return (
//     <Menu as="div" className="relative" key={index}>
//       <NavLink
//         to={menu.path}
//         className={({ isActive }) =>
//           isActive ? "active-state" : "inactive-state"
//         }
//         // className={`flex ${open && "w-64"} ${({ isActive }) =>
//         //   isActive
//         //     ? "active-state"
//         //     : "inactive-state"} p-2 mt-2 justify-between items-center rounded-md bg-transparent text-lg font-medium text-white  focus:outline-none `}
//       >
//         <span
//           className={`text-xl flex ${
//             !open && "ml-1"
//           } items-center `}
//         >
//           {open && (
//             <>
//               {menu.icon}{" "}
//               <span className="text-base ml-[19px] ">Asset</span>
//             </>
//           )}
//           {!open && <> {menu.icon} </>}
//         </span>
//         <Menu.Button>
//           {open && (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="#ffffff"
//               className="w-6 h-6 ml-28"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M8.25 4.5l7.5 7.5-7.5 7.5"
//               />
//             </svg>
//           )}

//           {/* <ChevronDownIcon
//             className="-mr-1 ml-2 h-5 w-5"
//             aria-hidden="true"
//           /> */}
//         </Menu.Button>
//       </NavLink>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute right-0 top-0 left-64 ml-1 z-10 mt-2 w-56 origin-top-right  rounded-md bg-slate-200  ring-black ring-opacity-5 focus:outline-none">
//           <div
//             className={`text-xl ${
//               !open && "hidden"
//             } py-1   duration-200 `}
//           >
//             <Menu.Item>
//               {({ active }) => (
//                 <NavLink
//                   to="/assets/search"
//                   // element={<AssetSearch />}

//                   className={classNames(
//                     active
//                       ? "bg-gray-100 text-gray-900"
//                       : "text-gray-700",
//                     "flex items-center space-x-2 hover:no-underline px-4 py-3 text-lg"
//                   )}
//                 >
//                   <BiTable />
//                   <span>Search</span>
//                 </NavLink>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <NavLink
//                   to="/assets/browse"
//                   // element={<AssetBrowse />}

//                   className={classNames(
//                     active
//                       ? "bg-gray-100 text-gray-900"
//                       : "text-gray-700",
//                     "flex items-center space-x-2 text-lg hover:no-underline  px-4 py-3"
//                   )}
//                 >
//                   <BiTable />
//                   <span>Browse</span>
//                 </NavLink>
//               )}
//             </Menu.Item>
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }
