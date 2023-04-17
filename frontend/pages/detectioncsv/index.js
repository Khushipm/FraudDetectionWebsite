import React from "react";
import Admin from "../../components/Layouts/Admin";

import { useState } from "react";
import Dropzone from "react-dropzone";
import FileUpload from "../../components/FileUpload";

// import OrderForm from "../../components/OrderForm";

const index = () => {
  // const [csvFile, setCsvFile] = useState(null);

  // const handleDrop = (acceptedFiles) => {
  //   setCsvFile(acceptedFiles[0]);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append("csvFile", csvFile);

  //   const response = await fetch("/process-csv", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const data = await response.json();
  //   console.log(data);
  // };

  return (
    // <Admin title="Place an Order" headerText="Enter details">
    //   <div className="flex flex-wrap mt-4 justify-center">
    //     <div className="w-full mb-12 xl:mb-0 px-4">
    <FileUpload />

    // {/* <OrderForm /> */}
    //     </div>
    //   </div>
    // </Admin>
  );
};

export default index;
