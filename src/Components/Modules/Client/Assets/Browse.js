import React from "react";
import { useState, useRef } from "react";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import { Disclosure } from "@headlessui/react";
import TableIcon from "@rsuite/icons/Table";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import { DATAS } from "./AssetsMainPage";
import AssetCard from "./AssetCard";
let fdata = [];
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
const Browse = () => {
  const [data, setData] = useState(false);
  let refone = useRef(0);
  let reftwo = useRef(0);
  let refthree = useRef(0);
  let reffour = useRef(0);
  let reffive = useRef(0);
  let refsix = useRef(0);
  function filters(dId) {
    let NewData = DATAS.filter((data) => {
      return data.uid === dId;
    });
    return NewData;
  }
  function filteredData() {
    if (refone.current.checked) {
      let dId = refone.current.value;
      fdata = filters(dId);
      setData(true);
    } else if (reftwo.current.checked) {
      let dId = reftwo.current.value;
      fdata = filters(dId);
      setData(true);
    } else if (refthree.current.checked) {
      let dId = refthree.current.value;
      fdata = filters(dId);
      setData(true);
    } else if (reffour.current.checked) {
      let dId = reffour.current.value;
      fdata = filters(dId);
      setData(true);
    } else if (reffive.current.checked) {
      let dId = reffive.current.value;
      fdata = filters(dId);
      setData(true);
    } else if (refsix.current.checked) {
      let dId = refsix.current.value;
      fdata = filters(dId);
      setData(true);
    } else {
      setData(false);
    }
  }

  const filesList = [
    { name: "A3", Ref: refone, Val: "V1", Nums: "One", Names: "grocery" },
    {
      name: "Alpha Project",
      Ref: reftwo,
      Val: "V2",
      Nums: "Two",
      Names: "grocery",
    },
    {
      name: "Amador Whiskey Co",
      Ref: refthree,
      Val: "V3",
      Nums: "Three",
      Names: "grocery",
    },
    {
      name: "Aravail",
      Ref: reffour,
      Val: "V4",
      Nums: "Four",
      Names: "grocery",
    },
    {
      name: "Avissi",
      Ref: reffive,
      Val: "V5",
      Nums: "Five",
      Names: "grocery",
    },
    {
      name: "Bandit",
      Ref: refsix,
      Val: "V6",
      Nums: "Six",
      Names: "furniture",
    },
    {
      name: "Bandit 1% for the planet 1L",
      Ref: null,
      Val: "V7",
      Nums: "Seven",
      Names: "furniture",
    },
    { name: "Bandit 1% for the planet update 500ML CH" },
    // { name: "Bandit CAB 500ml" },
    // { name: "Bandit CAB American Appellation 1L" },
  ];
  return (
    <section className="">
      <div className="flex flex-row  justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md ">
        <div className="flex items-center ">
          <Dropdown className="mr-2" icon={<BsSliders className="h-36" />}>
            {dropdownMenu.map((item) => (
              <Dropdown.Item key={item.id} icon={item.icon}>
                {item.text}
              </Dropdown.Item>
            ))}
          </Dropdown>

          <h1 className="text-2xl">Assets - Browse</h1>
        </div>
        <div className="flex justify-between">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      {/* Accordations */}
      <div className="flex">
        <div className="flex h-fit shrink-0 overflow-auto flex-col w-1/4">
          {filesList.map((eachFile, index) => (
            <>
              <div className="" key={index}>
                <Disclosure>
                  <>
                    {/* <pre>{JSON.stringify(eachFile)}</pre>
                    console.log(eachFile) */}
                    <Disclosure.Button className="text-left outline-none transition duration-200  hover:bg-gray-300 bg-gray-100 text-gray-500 cursor-pointer p-4 w-full">
                      {({ open }) => (
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                              />
                            </svg>
                            <p className="text-lg ml-2 font-medium">
                              {eachFile.name}
                            </p>
                          </div>
                          {!open && (
                            <span className="font-bold text-2xl  ui-open:rotate-60 ui-open:transform">
                              +
                            </span>
                          )}
                          {open && (
                            <span className="font-bold text-2xl mr-1  ui-open:rotate-60 ui-open:transform">
                              -
                            </span>
                          )}
                        </div>
                      )}
                    </Disclosure.Button>

                    <Disclosure.Panel className="px-4 bg-white overflow-hidden">
                      <div className="p-1 flex space-x-2">
                        <input
                          type="checkbox"
                          ref={eachFile.Ref}
                          onChange={filteredData}
                          name=""
                          id={eachFile.Nums}
                          value={eachFile.Val}
                          className=""
                        />
                        <label htmlFor={eachFile.Nums} className="">
                          {eachFile.Val} Items
                        </label>
                      </div>
                    </Disclosure.Panel>
                  </>
                </Disclosure>

                {/* <button className="accordion text-left outline-none transition duration-200 focus:bg-gray-300 bg-gray-200 text-gray-500 cursor-pointer p-4 w-full">
            Section 1
          </button>
          <div className="panel px-4 bg-white max-h-0 transition-all duration-200 ease-out overflow-hidden">
            <p>Lorem ipsum...</p>
          </div> */}
              </div>
            </>
          ))}
        </div>
        <div className="flex p-2 flex-wrap content-start gap-3">
          {data &&
            fdata.map((eachUser, index) => {
              return <AssetCard key={index} eachUser={eachUser}></AssetCard>;
            })}
        </div>
      </div>
    </section>
  );
};

export default Browse;
