import React from "react";

import { useContext } from "react";

import { AppContext } from "../../../../Context";

const inputFields = [
  { id: 1, inputType: "text", placeholder: "Request Info" },
  { id: 2, inputType: "text", placeholder: "Initaied By" },
  { id: 3, inputType: "text", placeholder: "Initaied Date" },
  { id: 4, inputType: "text", placeholder: "Category" },
  { id: 5, inputType: "text", placeholder: "Brand" },
  { id: 6, inputType: "text", placeholder: "Product / FG Code" },
  { id: 7, inputType: "text", placeholder: "SKU" },
  { id: 8, inputType: "text", placeholder: "Pack Size" },
  { id: 9, inputType: "date", placeholder: "Due Date" },
  { id: 10, inputType: "text", placeholder: "Reason for Request" },
  { id: 11, inputType: "text", placeholder: "Comment Type" },
  { id: 12, inputType: "text", placeholder: "Comoponent Code /Artwork Code" },
  { id: 13, inputType: "text", placeholder: "Production Code" },
  { id: 14, inputType: "text", placeholder: "Productio Site" },
];

const RequestInfo = ({ children }) => {
  const { theme } = useContext(AppContext);

  const toggleBorders =
    theme === true ? "border  border-gray-300 border-opacity-20" : "";

  return (
    <section>
      <div className="flex flex-wrap  flex-1 gap-4 gap-x-6 p-3 mt-3 ">
        {inputFields.map((inputField, index) => (
          <div className=" w-[32%]">
            <div className="relative ">
              <input
                type="text"
                id={inputField.id}
                className={`h-11 border bg-skin-rightSideColor ${toggleBorders}  py-1 w-full rounded-md focus:outline-none text-base  focus:border transition-colors peer`}
                autocomplete="off"
                required
              />

              <label
                htmlFor={inputField.id}
                className="absolute peer-valid:font-semibold peer-valid:bg-skin-rightSideColor peer-valid:-top-3 peer-valid:text-sm  px-2 left-2 top-[12px] text-gray-400 cursor-text peer-focus:text-sm peer-focus:font-semibold peer-focus:left-2 peer-focus:bg-skin-rightSideColor peer-focus:-top-3  transition-all"
              >
                {inputField.placeholder}
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons container */}
      <div className="flex justify-center fixed left-1/2 bottom-0 gap-3 items-center p-3">
        <button className="bg-gray-700 p-3 py-2 rounded-md tracking-wide  text-white font-medium ">
          Submit
        </button>
        <button className="bg-gray-700 p-3 py-2 rounded-md tracking-wide  text-white font-medium">
          Save
        </button>
      </div>
    </section>
  );
};

export default RequestInfo;

{
  /* <div className="relative w-[32%]" key={inputField.id}> */
}
