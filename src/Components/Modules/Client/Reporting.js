import React from "react";

import Chart from "react-apexcharts";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";

import { useContext } from "react";

import { AppContext } from "../../../Context";

// let colors = ["#008ffb", "#ffc300", "#0acf97", "#fa5c7c", "#e3eaef"];

const Reporting = ({ children }) => {
  const { theme } = useContext(AppContext);

  const labelColors = theme === true ? "#D2D2D2" : "#333333";

  return (
    <section className="">
      <div className="flex flex-row justify-between items-center p-4 pl-5  shadow-md  ">
        <div className="flex items-center ">
          <BsSliders className="text-2xl mr-4" />
          <h1 className="text-2xl font-extrabold">Reporting</h1>
        </div>
        <div className="flex justify-between">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>
      <div className=" flex  justify-center p-3 mt-20">
        <Chart
          className="w-96 text-gray-100"
          type="pie"
          series={[23, 45, 43, 87, 65]}
          options={{
            legend: {
              position: "bottom",
              horizontalAlign: "center",
            },
            chart: {
              foreColor: `${labelColors}`,
            },

            // colors: colors,

            labels: ["Brief", "Print", "Artwork", "Uploaded", "Approval"],
          }}
        />
      </div>
    </section>
  );
};

export default Reporting;
