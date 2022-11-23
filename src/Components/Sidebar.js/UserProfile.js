import React from "react";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";

import { FaUserCircle, FaUser } from "react-icons/fa";

import { v4 as uuidv4 } from "uuid";

import { useContext } from "react";

import { AppContext } from "../../Context";

const userData = [
  {
    id: uuidv4(),
    fullName: "Bharath",
    mailId: "bharath@nomail.com",
    language: "English",
    loginId: "bharath@nomail.com",
    timeZone: "(UTC+5:30) Chennai, Kolkata, Mumbai, New Delhi",
    lastSuccessFullyLogin: "22-Nov-2022 12:32",
  },
];

const UserProfile = () => {
  const { theme } = useContext(AppContext);

  const toggleBorders =
    theme === true ? "border  border-gray-300 border-opacity-10 " : " border";

  return (
    <>
      {/* Header */}
      <div className="flex flex-row justify-between items-center p-4 pl-5 shadow-md  ">
        <div className="flex items-center">
          <FaUser className="text-2xl mr-3" />
          <h1 className="text-xl">User Profile Details</h1>
        </div>
        <div className="flex">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      {/* User Profile information */}

      <div className={`flex ${toggleBorders} m-1 mt-2`}>
        {/* Profile image container */}

        <div className="flex w-80 h-80 items-center justify-center ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
            alt="profile-img"
            className="rounded-full"
          />
        </div>

        {/* Profile details container */}

        <div className="w-full h-auto pt-2 pr-2 ">
          <div
            className={`flex justify-between items-center p-2 ${toggleBorders} `}
          >
            <h1 className="text-base">Basic Information</h1>
            <button className="bg-gray-500  rounded-md p-3 py-2 text-sky-50 font-extrabold  mr-3">
              Change Password
            </button>
          </div>

          <ul className="">
            {userData.map((each) => (
              <>
                <li className={` flex ${toggleBorders}   p-2 py-3`}>
                  <span className="w-96">Full Name </span>
                  {each.fullName}
                </li>
                <li className={` flex  ${toggleBorders}   p-2 py-3`}>
                  <span className="w-96">Mail ID </span>
                  {each.mailId}
                </li>
                <li className={` flex  ${toggleBorders}   p-2 py-3`}>
                  <span className="w-96"> Language </span>
                  {each.language}
                </li>
                <li className={` flex  ${toggleBorders}   p-2 py-3`}>
                  <span className="w-96"> Login ID </span>
                  {each.loginId}
                </li>
                <li className={` flex  ${toggleBorders}   p-2 py-3`}>
                  <span className="w-96"> Time Zone </span>
                  {each.timeZone}
                </li>
                <li className={` flex  ${toggleBorders}   p-2 py-3`}>
                  <span className="w-96"> Last Successfully login :</span>
                  {each.lastSuccessFullyLogin}
                </li>
                {/* <li className="border border-gray-100 border-opacity-10 p-2  py-3">
                  Mail ID : <span className="mx-auto">{each.fullName}</span>
                </li>
                <li className="border border-gray-100 border-opacity-10 p-2  py-3">
                  Language :<span className="mx-auto">{each.language}</span>
                </li>
                <li className="border border-gray-100 border-opacity-10 p-2  py-3">
                  Login ID :<span className="mx-auto"> {each.loginId}</span>
                </li>
                <li className="border border-gray-100 border-opacity-10 p-2  py-3">
                  Time Zone : <span className="mx-auto">{each.timeZone}</span>
                </li>
                <li className=" p-2  py-3">
                  Last Successfully login :
                  <span className="mx-auto">{each.lastSuccessFullyLogin}</span>
                </li> */}
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
