import React from "react";
import Chart from "chart.js";

export default function CardPieChart() {
  //   const barKey = Object.keys(barchart);
  //   const barVal = Object.values(barchart);
  //   console.log(barKey);
  //   console.log(barVal);
  //   console.log(barchart);
  React.useEffect(() => {
    let config = {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
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
                Performance
              </h6>
              <h2 className="text-blueGray-600 text-xl font-semibold">
                Total orders
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto flex items-center">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="pie-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
