import React from "react";
import Admin from "../../components/Layouts/Admin";
import RiskForm from "../../components/RiskForm.jsx";

const index = () => {
  return (
    <Admin title="Place an Order" headerText="Enter details">
      <div className="flex flex-wrap mt-4 justify-center">
        <div className="w-full mb-12 xl:mb-0 px-4">
          <RiskForm />
        </div>
      </div>
    </Admin>
  );
};

export default index;
