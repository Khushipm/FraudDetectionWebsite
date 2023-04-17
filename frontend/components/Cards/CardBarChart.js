import React from "react";
import Chart from "chart.js";

export default function CardBarChart({ barchart }) {
  const barKey1 = Object.keys(barchart[0]);
  const barVal1 = Object.values(barchart[0]);
  const barKey2 = Object.keys(barchart[1]);
  const barVal2 = Object.values(barchart[1]);
  // console.log(barKey);
  // console.log(barVal);
  // console.log(barchart);
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: "Number of Transactions",
        datasets: [
          {
            label: "Fradulent Transactions",
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: barVal1,
            fill: false,
            barThickness: 8,
          },
          {
            label: "Non-Fradulent Transactions",
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: barVal2,
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="flex items-stretch relative flex flex-col w-12/12 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t px-6 mb-0 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className=" relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Performance
              </h6>
              <h2 className="text-blueGray-600 text-xl font-semibold">
                Fradulent v/s Non-Fraudelent Transactions
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px w-20-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
