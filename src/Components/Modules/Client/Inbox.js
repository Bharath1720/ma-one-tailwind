import React, { useState } from "react";

import { useContext } from "react";

import { AppContext } from "../../../Context";

import { BsSliders } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";

import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";

import TableIcon from "@rsuite/icons/Table";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import { v4 as uuidv4 } from "uuid";

import MainTableGrid from "../../Tables/MainTableGrid";

import ToolTip from "../ToolTip";
import { button } from "@material-tailwind/react";

const dropdownMenu = [
  {
    id: 1,
    text: " Print Proof Requests",
    icon: <TableIcon />,
  },
  {
    id: 2,
    text: "In Progress",
    icon: <TableIcon />,
  },
  {
    id: 3,
    text: "Completed",
    icon: <TableIcon />,
  },
  {
    id: 4,
    text: "New Products",
    icon: <TableIcon />,
  },
  {
    id: 5,
    text: " Shange Requests",
    icon: <TableIcon />,
  },
  {
    id: 6,
    text: "Promo Requests",
    icon: <TableIcon />,
  },
];

const filterButtons = [
  {
    id: uuidv4(),
    text: "Delay",
    bgColor: "bg-red-500",
    displayCount: "10",
  },
  {
    id: uuidv4(),
    text: "InProgress",
    bgColor: " bg-amber-300",
    displayCount: "22",
  },
  {
    id: uuidv4(),
    text: "Completed",
    bgColor: "bg-green-500",
    displayCount: "3",
  },
  // {
  //   id: uuidv4(),
  //   text: "Yet to Start",
  //   bgColor: "bg-slate-500",
  //   displayCount: "12",
  // },
];

const Inbox = ({ children }) => {
  const [drop, setDrop] = useState(false);

  const { theme } = useContext(AppContext);

  // border border-t-0 border-x-0

  return (
    <section className="">
      <div className="flex flex-row justify-between items-center pl-5  p-4  shadow-md  ">
        <div className="flex justify-center items-center  ">
          <Dropdown className="mr-2" icon={<BsSliders className="h-36" />}>
            {dropdownMenu.map((item) => (
              <Dropdown.Item key={item.id} icon={item.icon}>
                {item.text}
              </Dropdown.Item>
            ))}
          </Dropdown>

          <h1 className="text-2xl">Inbox</h1>
        </div>
        <div className="flex justify-between">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      <div className="h-16 flex items-center mt-2  bg-skin-rightSideColor ">
        {filterButtons.map((btn) => (
          <>
            {/* <ToolTip text={btn.text}> */}
            <div>
              <nav key={btn.id}>
                <div
                  className={` ${btn.bgColor} cursor-pointer flex w-16 flex-col items-center  text-white font-bold mx-2 p-1 rounded-md `}
                  type="button"
                  // title={btn.text}
                >
                  <div className="">{btn.displayCount}</div>
                  <div className="text-[9px]">{btn.text}</div>
                </div>
              </nav>
            </div>
          </>
        ))}
        <h1 className="text-sm font-bold text-gray-500">Todo List</h1>
      </div>

      <MainTableGrid />
    </section>
  );
};

export default Inbox;
