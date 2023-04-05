import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// components

export default function CardPageVisits({ tran }) {
  console.log(tran);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // setData(transdata);
  // const fetchData = async () => {
  //   const response = await fetch("http://127.0.0.1:5000/transactiondata");
  //   const jsonData = await response.json();
  //   setData(jsonData);
  // };

  return (
    <>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
        {/* {tran.cc_num} */}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {/* {tran.merchant} */}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {/* {tran.amt} */}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
        {/* {tran.is_fraud} */}
      </td>
    </>
  );
}
