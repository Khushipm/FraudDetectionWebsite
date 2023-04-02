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
      <Admin title="Latest Trends" headerText="Stocks Analysis">
        <div className="flex flex-wrap mt-4 justify-center">
          <div className="w-full mb-12 xl:mb-0 px-4">
            <div className="flex flex-wrap">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <CardLineChart />
              </div>
              <div className="w-full xl:w-4/12 px-4">
                <CardBarChart barchart={barchart} />
              </div>
            </div>
            <div className="flex flex-wrap mt-4">
              <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
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
