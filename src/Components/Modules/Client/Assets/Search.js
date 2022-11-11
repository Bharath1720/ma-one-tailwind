import React, { useRef, useState } from "react";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";
import { Disclosure, Transition } from "@headlessui/react";
import { DATAS } from "./AssetsMainPage";
import TableIcon from "@rsuite/icons/Table";
import AssetCard from "./AssetCard";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
let fdata = [];
let Newfdata = [];
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
const filesList = [
  { name: "Brands" },
  {
    name: "Vareity",
  },
  {
    name: "Component Type",
  },
  {
    name: "Bottle Size",
  },
  {
    name: "Product Name",
  },
  {
    name: "Product Code",
  },
  {
    name: "Mfg Location",
  },
  // { name: "Bandit CAB 500ml" },
  // { name: "Bandit CAB American Appellation 1L" },
];

const Search = () => {
  const [data, setData] = useState(false);
  const [data1, setData1] = useState(false);
  let refs1 = useRef(0);
  let refs2 = useRef(0);
  let refs3 = useRef(0);
  let refSno1 = useRef(0);
  let refSno2 = useRef(0);
  let refSno3 = useRef(0);
  let refSno4 = useRef(0);
  const fileSubList = [
    {
      type: "Sutter Home",
      refValue: refs1,
      refSub: refSno1,
      Val: "V1",
      Nums: "One",
      Names: "grocery",
    },
    {
      type: "Joel coat wines",
      refValue: refs2,
      refSub: refSno2,
      Val: "V2",
      Nums: "Two",
      Names: "grocery",
    },
    {
      type: "Manage trios",
      refValue: refs3,
      refSub: refSno3,
      Val: "V3",
      Nums: "Three",
      Names: "grocery",
    },
  ];
  const filter = (dId) => {
    let NewData = DATAS.filter((data) => {
      return data.uname === dId;
    });
    return NewData;
  };
  const filterName = (dId) => {
    let NewData = fdata.filter((data) => {
      return data.uid === dId;
    });
    return NewData;
  };
  function filteredData() {
    if (refs1.current.checked) {
      let dId = refs1.current.value;
      fdata = filter(dId);
      console.log(dId);
      console.log(fdata);
      setData(true);
    } else if (refs2.current.checked) {
      let dId = refs2.current.value;
      console.log(dId);
      console.log(fdata);
      fdata = filter(dId);
      setData(true);
    } else if (refs3.current.checked) {
      let dId = refs3.current.value;
      console.log(dId);
      console.log(fdata);
      fdata = filter(dId);
      setData(true);
    } else {
      setData(false);
    }
    return fdata;
  }
  function filteredName() {
    if (refSno1.current.checked) {
      let dId = refSno1.current.value;
      Newfdata = filterName(dId);
      setData1(true);
      setData(false);
    } else if (refSno2.current.checked) {
      let dId = refSno2.current.value;
      Newfdata = filterName(dId);
      setData1(true);
      setData(false);
    } else if (refSno3.current.checked) {
      let dId = refSno3.current.value;
      Newfdata = filterName(dId);
      setData1(true);
      setData(false);
    } else if (refSno4.current.checked) {
      let dId = refSno4.current.value;
      Newfdata = filterName(dId);
      setData1(true);
      setData(false);
    } else {
      setData1(false);
      setData(false);
    }
  }
  return (
    <section className="">
      <div className="flex flex-row justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md ">
        <div className="flex items-center ">
          <Dropdown className="mr-2" icon={<BsSliders className="h-36" />}>
            {dropdownMenu.map((item) => (
              <Dropdown.Item key={item.id} icon={item.icon}>
                {item.text}
              </Dropdown.Item>
            ))}
          </Dropdown>

          <h1 className="text-2xl">Assets - Search</h1>
        </div>
        <div className="flex justify-between">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>

      {/* Accordations */}
      <div className="flex w-full">
        <div className="flex h-fit overflow-auto shrink-0 flex-col w-1/4">
          <h4 className="ml-8 py-2 tracking-wider font-bold">Filters</h4>
          {filesList.map((eachFile, indexss) => (
            <>
              <div className="" key={indexss}>
                <Disclosure className="overflow-auto">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="text-left outline-none  hover:bg-gray-300 bg-gray-100 text-gray-500 cursor-pointer p-4 w-full">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <p className="text-lg ml-2 font-medium">
                              {eachFile.name}
                            </p>
                          </div>

                          <span
                            className={`font-bold text-2xl ${
                              open && "rotate-180 transition-all duration-300"
                            }  `}
                          >
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
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </span>
                        </div>
                      </Disclosure.Button>
                      <Transition
                        show={open}
                        enter="transition duration-300 ease-out"
                        enterFrom="transform  opacity-0"
                        enterTo="transform scale-100 "
                        leave="transition duration-100 ease-out"
                        leaveFrom="transform scale-100 "
                        leaveTo="transform opacity-0"
                      >
                        <Disclosure.Panel
                          static
                          className="px-4 bg-white overflow-hidden"
                        >
                          {fileSubList.map((edata, index) => (
                            <div>
                              {indexss === "1" && index === "0" && (
                                <div className="flex relative">
                                  <input
                                    className="p-3 w-full outline-none mt-2 rounded-md bg-gray-100 "
                                    placeholder="Search Vareity"
                                    type="text"
                                  />
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 absolute stroke-gray-400  right-3 top-5"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                  </svg>
                                </div>
                              )}
                              <div className="px-2 mt-1 py-1 flex space-x-2">
                                <input
                                  type="checkbox"
                                  ref={edata.refValue}
                                  onChange={filteredData}
                                  name=""
                                  id={edata.Nums + indexss}
                                  value={edata.type}
                                  className=""
                                />
                                <label
                                  htmlFor={edata.Nums + indexss}
                                  className=""
                                >
                                  {edata.type}
                                </label>
                              </div>
                            </div>
                          ))}
                          <p className="ml-3 mb-2 mt-1 cursor-pointer  font-medium text-indigo-500">
                            Show 15 More
                          </p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            </>
          ))}
        </div>
        <div className="flex p-2 flex-wrap content-start gap-3">
          {data &&
            fdata.map((eachUser, index) => {
              return <AssetCard key={index} eachUser={eachUser}></AssetCard>;
            })}
          {data1 &&
            Newfdata.map((eachUser, index) => {
              return <AssetCard key={index} eachUser={eachUser}></AssetCard>;
            })}
        </div>
      </div>
    </section>
  );
};

export default Search;
