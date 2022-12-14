import React from "react";

const dataSource = [
  {
    id: 1,
    task: "Start",
    users: "User 1",
    duration: "",
    color: "#0000ff",
  },
  {
    id: 2,
    task: "Brief Upload",
    users: "User 2",
    duration: "2",
  },
  {
    id: 3,
    task: "Artwork Upload",
    users: "User 3",
    duration: "2",
  },
  {
    id: 4,
    task: "Artwork Approval",
    users: "User 6",
    duration: "5",
  },
  {
    id: 5,
    task: "Print proof Upload",
    users: "User 7",
    duration: "3",
  },
  {
    id: 6,
    task: "Print Proof Approval",
    users: "User 2",
    duration: "3",
  },
];

const Tasks = () => {
  return (
    <div className="p-1 pt-3">
      <table className="w-full">
        <thead className="bg-skin-theadColor border border-gray-400 border-opacity-20">
          <tr>
            <th className="p-4 text-md font-bold tracking-wide text-left">
              Task Name
            </th>
            <th className="p-4 text-md font-bold tracking-wide text-left">
              Users
            </th>
            <th className="p-4 text-md font-bold tracking-wide text-left">
              Duration
            </th>
            <th className="p-4 text-md font-bold tracking-wide text-left"></th>
          </tr>
        </thead>
        <tbody className="">
          {dataSource.map((each) => {
            return (
              <tr
                className=" border odd:bg-skin-tbodyColor even:bg-skin-theadColor border-gray-400 border-opacity-20"
                key={each.id}
              >
                <td className="p-4 text-sm font-medium tracking-wide text-left flex items-center">
                  <span>{each.task}</span>
                </td>
                <td className="p-4 text-sm font-medium tracking-wide text-left">
                  <span> {each.users}</span>
                </td>
                <td className="p-4 text-sm font-medium tracking-wide text-left">
                  {each.duration}
                </td>
                <td className="p-4 text-sm font-medium tracking-wide text-left">
                  Edit
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Buttons container */}
      <div className="flex justify-center fixed left-1/2 bottom-0 gap-3 items-center p-3">
        <button className="bg-gray-700 px-3 py-2  rounded-md tracking-wide  text-white font-medium ">
          Submit
        </button>
        <button className="bg-gray-700 px-3 py-2 rounded-md tracking-wide  text-white font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

export default Tasks;
