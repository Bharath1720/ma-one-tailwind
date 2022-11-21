import React from "react";

const ToolTip = (props) => {
  return (
    <span className="group relative">
      <span className="pointer-events-none absolute -top-10 z-50 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
        {props.text}
      </span>

      {props.children}
    </span>
  );
};

export default ToolTip;
