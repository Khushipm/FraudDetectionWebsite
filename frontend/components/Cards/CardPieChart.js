import React from "react";
import Chart from "chart.js";

export default function CardPieChart({ piechart }) {
  const pieKey = Object.keys(piechart);
  const pieVal = Object.values(piechart);
  //   console.log(barKey);
  //   console.log(barVal);
  console.log(piechart);
  React.useEffect(() => {
    let config = {
      type: "pie",
      data: {
        labels: pieKey,
        datasets: [
          {
            label: "# of Votes",
            data: pieVal,
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(0, 0, 0, 0.2)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 0, 255, 0.2)",
              "rgba(0, 255, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(0, 0, 0, 0.2)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 0, 255, 0.2)",
              "rgba(0, 255, 255, 0.2)",
              
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    };
    let ctx = document.getElementById("pie-chart").getContext("2d");
    window.myPie = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="flex items-stretch relative flex flex-col w-12/12 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t px-6 mb-10 py-4 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className=" relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                {/* Performance */}
              </h6>
              <h2 className="text-blueGray-600 text-xl font-semibold">
              Number of Credit Card Frauds by Job
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="pie-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
