import React from "react";

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

const RequestInfo = () => {
  return (
    <section>
      <div className="flex flex-wrap flex-1 gap-4 gap-x-6 p-3 mt-3 ">
        {inputFields.map((inputField, index) => (
          <div className="relative w-[32%]" key={inputField.id}>
            <input
              className="bg-white peer h-11 w-full border border-slate-300 outline-none rounded-md px-9 py-3 md:px-3 md:py-2"
              type="text"
              required
            />
            <label
              className="absolute mt-1 top-2 left-3 peer-focus:duration-200 peer-focus:-translate-y-5 peer-valid:-translate-y-5 peer-focus:bg-white peer-valid:bg-white peer-valid:font-bold peer-focus:font-bold text-gray-400 transition duration-100"
              htmlFor="input"
              alt=""
            >
              {inputField.placeholder}
            </label>
          </div>
        ))}
      </div>

      {/* Buttons container */}
      <div className="flex justify-center fixed left-1/2 bottom-0 gap-3 items-center p-3">
        <button className="bg-gray-700 px-5 py-2 pt-1 rounded-md tracking-wide  text-white font-medium ">
          Submit
        </button>
        <button className="bg-gray-700 px-5 py-2 pt-1 rounded-md tracking-wide  text-white font-medium">
          Save
        </button>
      </div>
    </section>
  );
};

export default RequestInfo;
