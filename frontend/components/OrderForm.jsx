import { useState } from "react";
import axios from "axios";

const OrderForm = ({ query }) => {
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [shipmentMode, setShipmentMode] = useState("");
  // const [deliveryToClientDate, setDeliveryToClientDate] = useState('');
  const [unitOfMeasure, setUnitOfMeasure] = useState("");
  const [lineItemValue, setLineItemValue] = useState("");
  const [packPrice, setPackPrice] = useState("");
  const [firstLineDesignation, setFirstLineDesignation] = useState(false);
  const [weightKilograms, setWeightKilograms] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleShipmentModeChange = (e) => {
    setShipmentMode(e.target.value);
  };

  const handleCompany = () => {
    setCompany(query);
  };

  // const handleDeliveryToClientDateChange = (e) => {
  //   setDeliveryToClientDate(e.target.value);
  // };

  const handleUnitOfMeasureChange = (e) => {
    setUnitOfMeasure(e.target.value);
  };

  const handleLineItemValueChange = (e) => {
    setLineItemValue(e.target.value);
  };

  const handlePackPriceChange = (e) => {
    setPackPrice(e.target.value);
  };

  const handleFirstLineDesignationChange = (e) => {
    setFirstLineDesignation(e.target.checked);
  };

  const handleWeightKilogramsChange = (e) => {
    setWeightKilograms(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("country", country);
    formData.append("shipmentMode", shipmentMode);
    // formData.append('deliveryToClientDate', deliveryToClientDate);
    formData.append("unitOfMeasure", unitOfMeasure);
    formData.append("lineItemValue", lineItemValue);
    formData.append("packPrice", packPrice);
    formData.append("firstLineDesignation", firstLineDesignation);
    formData.append("weightKilograms", weightKilograms);
    try {
      const response = await axios.post("/api/upload", formData);
      console.log(response.data);
      // reset form fields
      setCountry("");
      setShipmentMode("");
      // setDeliveryToClientDate('');
      setUnitOfMeasure("");
      setLineItemValue("");
      setPackPrice("");
      setFirstLineDesignation(false);
      setWeightKilograms("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="flex-auto px-4 lg:px-10 py-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="country"
              >
                Country:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="text"
                  value={country}
                  onChange={handleCountryChange}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="shipmentmode"
              >
                Shipment Mode:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="text"
                  value={shipmentMode}
                  onChange={handleShipmentModeChange}
                />
              </label>
            </div>
            {/* <div className="mb-3 mr-2">
      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      htmlFor="deliveryToClientDate">
        Delivery to Client Date:
        <input className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          type="date"
          value={deliveryToClientDate}
          onChange={handleDeliveryToClientDateChange}
        />
      </label>
      </div> */}
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="unitOfMeasure"
              >
                Unit of Measure (Per Pack):
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="text"
                  value={unitOfMeasure}
                  onChange={handleUnitOfMeasureChange}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="lineItemValue"
              >
                Line Item Value:
              </label>
              <input
                className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                type="text"
                id="lineItemValue"
                value={lineItemValue}
                onChange={handleLineItemValueChange}
              />
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="packPrice"
              >
                Pack Price:
              </label>
              <input
                className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                type="text"
                id="packPrice"
                value={packPrice}
                onChange={handlePackPriceChange}
              />
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="firstLineDesignation"
              >
                First Line Designation:
              </label>
              <select
                className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="firstLineDesignation"
                value={firstLineDesignation}
                onChange={handleFirstLineDesignationChange}
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="weight"
              >
                Weight (Kilograms):
              </label>
              <input
                className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                type="text"
                id="weight"
                value={weightKilograms}
                onChange={handleWeightKilogramsChange}
              />
            </div>

            <div className="flex justify-center my-6">
              {/* <button
              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="submit"
            >
              Submit
            </button> */}
              <button
                type="submit"
                className="w-96 h-12 flex justify-center items-center text-md text-white bg-blue-800 hover:bg-blueGray-800 transition-all font-medium rounded-lg px-5 py-2.5 text-center"
                onClick={handleCompany}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
{
  /* <div className="w-full mb-12 xl:mb-0 px-4">
<TransportForm/>
</div> */
}
