import React from "react";

import { FaBars } from "react-icons/fa";

const dataSource = [
  {
    id: 1,
    actions: "Update File",
    filename: "12_humans.pdf",
    version: "0.1",
    file_type: "Artwork",
    added_by: "Peter Smith",
    added_on: "20 Jun 2022",
  },
  {
    id: 2,
    actions: "Update File",
    filename: "brief_documented.docx",
    version: "0.2",
    file_type: "Brief",
    added_by: "Tomr Satter",
    added_on: "20 Jun 2022",
  },
  {
    id: 3,
    actions: "Update File",
    filename: "label_deline.docx",
    version: "0.1",
    file_type: "Deline",
    added_by: "Peter Smith",
    added_on: "20 Jun 2022",
  },
];

const Files = () => {
  return (
    <div className="p-1 pt-3">
      <table className="w-full">
        <thead className="bg-skin-theadColor border border-gray-400 border-opacity-20">
          <tr>
            <th className="p-4 text-md font-bold tracking-wide text-left">
              Actions
            </th>
            <th className="p-3 text-md font-bold tracking-wide text-left">
              File Name
            </th>
            <th className="p-3 text-md font-bold tracking-wide text-left">
              Version
            </th>
            <th className="p-3 text-md font-bold tracking-wide text-left">
              File Type
            </th>
            <th className="p-3 text-md font-bold tracking-wide text-left">
              Added By
            </th>
            <th className="p-3 text-md font-bold tracking-wide text-left">
              Added On
            </th>
          </tr>
        </thead>
        <tbody className="bg-skin-tbodyColor ">
          {dataSource.map((each) => {
            return (
              <tr
                className="border odd:bg-skin-tbodyColor even:bg-skin-theadColor border-gray-400 border-opacity-20"
                key={each.id}
              >
                <td className="p-3 text-sm font-medium tracking-wide text-left flex items-center">
                  <span className="bg-gray-400 text-black p-2 text-xs rounded-lg">
                    {each.actions}
                  </span>

                  <FaBars className="ml-4 text-xl" />
                </td>
                <td className="p-3 text-sm font-medium tracking-wide text-left">
                  {each.filename}
                </td>
                <td className="p-3 text-sm font-medium tracking-wide text-left">
                  {each.version}
                </td>
                <td className="p-3 text-sm font-medium tracking-wide text-left">
                  {each.file_type}
                </td>
                <td className="p-3 text-sm font-medium tracking-wide text-left">
                  {each.added_by}
                </td>
                <td className="p-3 text-sm font-medium tracking-wide text-left">
                  {each.added_on}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Buttons container */}
      <div className="flex justify-center fixed left-1/2 bottom-0 gap-3 items-center p-3">
        <button className="bg-gray-700 p-3 py-2 rounded-md tracking-wide  text-white font-medium ">
          Submit
        </button>
        <button className="bg-gray-700 p-3 py-2 rounded-md tracking-wide  text-white font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

export default Files;
