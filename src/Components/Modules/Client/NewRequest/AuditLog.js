import React from "react";
import { v4 as uuidv4 } from "uuid";



const AuditLog = () => {
  const tableData = [
    {
      id: uuidv4(),
      name: "Start",
      owner: "Users",
      Duration: null,
      startDate: "23 jul 2022 11:01",
      endDate: "26 jul 2022",
      action: "Initiate Request",
    },
    {
      id: uuidv4(),
      name: "Brief Upload",
      owner: "User2",
      Duration: "2",
      startDate: "23 jul 2022 11:01",
      endDate: "26 Jul 2022 11:01",
      action: "Brief Upload",
    },
    {
      id: uuidv4(),
      name: null,
      owner: "Upload-Brief-0.1",
      Duration: "Brife-file.docx",
      startDate: null,
      endDate: "user2",
      action: "23 Jul 2022 11:01",
    },
    {
      id: uuidv4(),
      name: null,
      owner: "Change data-Duration",
      Duration: "Old 2 days-now:3days",
      startDate: null,
      endDate: "user3	",
      action: "23 Jul 2022 11:01",
    },
    {
      id: uuidv4(),
      name: "Artwork Upload",
      owner: "User2",
      Duration: "2",
      startDate: "23 Jul 2022 11:01",
      endDate: "26 Jul 2022 11:01	",
      action: "Artwork Upload",
    },
    {
      id: uuidv4(),
      name: null,
      owner: "Upload - Artwork-0.1",
      Duration: "Mannage-Red-V1.pdf",
      startDate: null,
      endDate: "user3",
      action: "23 Jul 2022 11:01",
    },
    {
      id: uuidv4(),
      name: "Artwork Approval",
      owner: "User2",
      Duration: "5",
      startDate: "23 Jul 2022 11:01	",
      endDate: "26 Jul 2022 11:01	",
      action: "Artwork Approved",
    },
    {
      id: uuidv4(),
      name: "Print Proof Approval	",
      owner: "User4",
      Duration: "3",
      startDate: "23 Jul 2022 11:01",
      endDate: null,
      action: null,
    },
  ];

  return (
    <div className="mx-2 my-2">
      <table className="container border-slate-300 mx-auto table-auto rounded-lg">
        <thead className="bg-gray-200">
          <tr className="border border-slate-300">
            <th className="py-4 pl-3 text-left">Task Name</th>
            <th className="text-left">Task Owner</th>
            <th className="text-left pr-14">Duration</th>
            <th className="text-left pr-14">Start Date</th>
            <th className="text-left pr-14">End Date</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {tableData.map((tData) => {
            return (
              <tr
                className="border text-slate-500 border-slate-300"
                key={tData.id}
              >
                {/* Ist col */}
                {tData.name !== null && (
                  <td
                    className={`pl-3 text-black py-4  ${
                      tData.name === "Print Proof Approval" ? "py-4" : ""
                    }${tData.name === "Artwork Approval" ? "py-4" : ""}`}
                    rowSpan={
                      tData.name === "Brief Upload"
                        ? "3"
                        : "" || tData.name === "Artwork Upload"
                        ? "2"
                        : ""
                    }
                  >
                    {tData.name}
                  </td>
                )}

                {/* 2nd col */}
                <td
                  className={`text-slate-500 ${
                    tData.name === "Brief Upload" ||
                    tData.name === "Artwork Upload"
                      ? "py-3"
                      : ""
                  }`}
                  colSpan={tData.name === "Start" ? "2" : ""}
                >
                  {tData.owner}
                </td>

                {/* 3rd col */}
                {tData.Duration != null && (
                  <td
                    className={`${
                      tData.owner === "Change data-Duration" ? "py-6" : ""
                    }${tData.owner === "Upload-Brief-0.1" ? "py-4" : ""}${
                      tData.owner === "Upload - Artwork-0.1" ? "py-4" : ""
                    }`}
                    colSpan={
                      tData.Duration === "Brife-file.docx"
                        ? "2"
                        : "" || tData.Duration === "Old 2 days-now:3days"
                        ? "2"
                        : "" || tData.Duration === "Mannage-Red-V1.pdf"
                        ? "2"
                        : ""
                    }
                  >
                    {tData.Duration}
                  </td>
                )}
                {/* 4th col */}
                {tData.startDate != null && (
                  <td
                    className=""
                    colSpan={tData.name === "Print Proof Approval" ? "3" : ""}
                  >
                    {tData.startDate}
                  </td>
                )}
                {/* 5th col */}
                {tData.endDate !== null && (
                  <td className="">{tData.endDate}</td>
                )}
                {/* 6 th col */}
                {tData.action !== null && <td className="">{tData.action}</td>}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Buttons container */}
      <div className="flex justify-center fixed left-1/2 bottom-0 gap-3 items-center p-3">
        <button className="bg-gray-700 px-5 py-2 pt-1 rounded-md tracking-wide  text-white font-medium ">
          Submit
        </button>
        <button className="bg-gray-700 px-5 py-2 pt-1 rounded-md tracking-wide  text-white font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

export default AuditLog;
