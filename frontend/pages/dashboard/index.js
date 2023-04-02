import React from "react";
import axios from "axios";

// components

import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardBarChart from "../../components/Cards/CardBarChart.js";
import CardPageVisits from "../../components/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js";

// layout for page

import Admin from "../../components/Layouts/Admin.js";

export default function Dashboard({ barchart }) {
  return (
    <>
      <Admin title="Latest Trends" headerText="Fraud Analysis" className=" bg-gray-300 ">
        <div className=" flex flex-wrap mt-4 justify-center">
          <div className="w-full mb-12 xl:mb-0 px-4">
            <div>
            <div className="w-full  px-20 mr-auto ml-auto ">
                <div className="relative  flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="https://cardconnect.com/assets/LaunchPointe/credit-card-fraud/fraud-list-1.svg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className=" absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      {/* <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon> */}
                    </svg>
                    <h4 className="text-xl font-bold text-black justify-center">
                      Top Notch Analysis Techniques
                    </h4>
                    <p className="text-lg font-light mt-2 text-black ">
                    The goal of credit card fraud analysis is to identify and prevent unauthorized transactions, protect the financial interests of consumers and financial institutions, and maintain the integrity of the payment system.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full xl:w-12/12 mt-20 mb-12 xl:mb-0 px-4">

                <CardLineChart />
              </div>
              <div className="w-full xl:w-12/12 px-4">
                <CardBarChart barchart={barchart} />
              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                <CardPageVisits />
              </div>
              <div className="w-full xl:w-4/12 px-4">
                <CardSocialTraffic />
              </div>
            </div>
          </div>
        </div>
      </Admin>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://127.0.0.1:5000/mostfraudcategory");
  console.log(res);
  return {
    props: { barchart: res.data },
  };
};

Dashboard.layout = Admin;
