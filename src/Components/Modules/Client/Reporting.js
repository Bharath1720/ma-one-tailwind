import React from "react";

import Chart from "react-apexcharts";
import { MdNotifications } from "react-icons/md";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";

const Reporting = () => {
  return (
    <section className="">
      <div className="flex flex-row justify-between items-center p-4 pl-5 border border-t-0 border-x-0 shadow-md  ">
        <div className="flex items-center ">
          <BsSliders className="text-2xl mr-4" />
          <h1 className="text-2xl font-extrabold">Reporting</h1>
        </div>
        <div className="flex justify-between">
          <MdNotifications className="text-2xl mr-4" />
          <BsFillQuestionCircleFill className="text-2xl" />
        </div>
      </div>
      <div className=" flex border justify-center p-3 mt-20">
        <Chart
          className="w-96"
          type="pie"
          series={[23, 45, 43, 87, 65]}
          options={{
            legend: {
              position: "bottom",
              horizontalAlign: "center",
            },

            labels: ["Brief", "Print", "Artwork", "Uploaded", "Approval"],
          }}
        />
      </div>
    </section>
  );
};

export default Reporting;
