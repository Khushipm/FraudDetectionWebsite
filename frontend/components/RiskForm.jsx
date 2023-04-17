import { useState } from "react";
import axios from "axios";

export default function RiskForm() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [isDisabled, setIsDisabled] = useState(false);
  const [output, setOutput] = useState(null);
  //   const handleChange = (event) => {
  //     setFormData((prevState) => {
  //       return {
  //         ...prevState,
  //         [event.target.name]: event.target.value,
  //       };
  //     });
  //   };

  //   const [transDateTransTime, setTransDateTransTime] = useState("");

  const [LIMIT_BAL, setLIMIT_BAL] = useState("");
  const [SEX, setSEX] = useState("");
  const [EDUCATION, setEDUCATION] = useState("");
  const [MARRIAGE, setMARRIAGE] = useState("");
  const [AGE, setAGE] = useState("");
  const [PAY_0, setPAY_0] = useState("");
  const [PAY_2, setPAY_2] = useState("");
  const [PAY_3, setPAY_3] = useState("");
  const [PAY_4, setPAY_4] = useState("");
  const [PAY_5, setPAY_5] = useState("");
  const [PAY_6, setPAY_6] = useState("");
  const [BILL_AMT1, setBILL_AMT1] = useState("");
  const [BILL_AMT2, setBILL_AMT2] = useState("");
  const [BILL_AMT3, setBILL_AMT3] = useState("");
  const [BILL_AMT4, setBILL_AMT4] = useState("");
  const [BILL_AMT5, setBILL_AMT5] = useState("");
  const [BILL_AMT6, setBILL_AMT6] = useState("");
  const [PAY_AMT1, setPAY_AMT1] = useState("");
  const [PAY_AMT2, setPAY_AMT2] = useState("");
  const [PAY_AMT3, setPAY_AMT3] = useState("");
  const [PAY_AMT4, setPAY_AMT4] = useState("");
  const [PAY_AMT5, setPAY_AMT5] = useState("");
  const [PAY_AMT6, setPAY_AMT6] = useState("");
  const [AVG_BILL_AMT, setAVG_BILL_AMT] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:5000/riskAssesment", {
        // location: formData.Location,
        // Moist: Number(formData.Moist),
        LIMIT_BAL: Number(LIMIT_BAL),
        SEX: Number(SEX),
        EDUCATION: Number(EDUCATION),
        MARRIAGE: Number(MARRIAGE),
        AGE: Number(AGE),
        PAY_0: Number(PAY_0),
        PAY_2: Number(PAY_2),
        PAY_3: Number(PAY_3),
        PAY_4: Number(PAY_4),
        PAY_5: Number(PAY_5),
        PAY_6: Number(PAY_6),
        BILL_AMT1: Number(BILL_AMT1),
        BILL_AMT2: Number(BILL_AMT2),
        BILL_AMT3: Number(BILL_AMT3),
        BILL_AMT4: Number(BILL_AMT4),
        BILL_AMT5: Number(BILL_AMT5),
        BILL_AMT6: Number(BILL_AMT6),
        PAY_AMT1: Number(PAY_AMT1),
        PAY_AMT2: Number(PAY_AMT2),
        PAY_AMT3: Number(PAY_AMT3),
        PAY_AMT4: Number(PAY_AMT4),
        PAY_AMT5: Number(PAY_AMT5),
        PAY_AMT6: Number(PAY_AMT6),
        AVG_BILL_AMT: Number(AVG_BILL_AMT),
      })
      .then(function (response) {
        data = response.data;
        console.log(data);
        setOutput(data);
        console.log(output);
      })
      .catch(function (error) {
        console.log(error);
      });
    // setFormData({
    //   Location: formData.Location,
    //   Moist: 0,
    //   Soil: 0,
    //   Crop: 0,
    //   N: 0,
    //   K: 0,
    //   P: 0,
    // });
    // Do something with the form data here
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  // };

  // const handleCountryChange = (e) => {
  //   setCountry(e.target.value);
  // };

  // const handleShipmentModeChange = (e) => {
  //   setShipmentMode(e.target.value);
  // };

  // const handleCompany = () => {
  //   setCompany(query);
  // };

  // // const handleDeliveryToClientDateChange = (e) => {
  // //   setDeliveryToClientDate(e.target.value);
  // // };

  // const handleUnitOfMeasureChange = (e) => {
  //   setUnitOfMeasure(e.target.value);
  // };

  // const handleLineItemValueChange = (e) => {
  //   setLineItemValue(e.target.value);
  // };

  // const handlePackPriceChange = (e) => {
  //   setPackPrice(e.target.value);
  // };

  // const handleFirstLineDesignationChange = (e) => {
  //   setFirstLineDesignation(e.target.checked);
  // };

  // const handleWeightKilogramsChange = (e) => {
  //   setWeightKilograms(e.target.value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("country", country);
  //   formData.append("shipmentMode", shipmentMode);
  //   // formData.append('deliveryToClientDate', deliveryToClientDate);
  //   formData.append("unitOfMeasure", unitOfMeasure);
  //   formData.append("lineItemValue", lineItemValue);
  //   formData.append("packPrice", packPrice);
  //   formData.append("firstLineDesignation", firstLineDesignation);
  //   formData.append("weightKilograms", weightKilograms);
  //   try {
  //     const response = await axios.post("/api/upload", formData);
  //     console.log(response.data);
  //     // reset form fields
  //     setCountry("");
  //     setShipmentMode("");
  //     // setDeliveryToClientDate('');
  //     setUnitOfMeasure("");
  //     setLineItemValue("");
  //     setPackPrice("");
  //     setFirstLineDesignation(false);
  //     setWeightKilograms("");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="flex-auto px-4 lg:px-10 py-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="LIMIT_BAL"
              >
                Limit Balance:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="LIMIT_BAL"
                  name="LIMIT_BAL"
                  value={LIMIT_BAL}
                  onChange={(e) => setLIMIT_BAL(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="SEX"
              >
                Gender:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="SEX"
                  name="SEX"
                  value={SEX}
                  onChange={(e) => setSEX(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="EDUCATION"
              >
                EDUCATION:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="EDUCATION"
                  name="EDUCATION"
                  value={EDUCATION}
                  onChange={(e) => setEDUCATION(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="MARRIAGE"
              >
                MARRIAGE:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="MARRIAGE"
                  name="MARRIAGE"
                  value={MARRIAGE}
                  onChange={(e) => setMARRIAGE(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="AGE"
              >
                AGE:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="AGE"
                  name="AGE"
                  value={AGE}
                  onChange={(e) => setAGE(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="PAY_0"
              >
                PAY_0:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="PAY_0"
                  name="PAY_0"
                  value={PAY_0}
                  onChange={(e) => setPAY_0(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="PAY_2"
              >
                PAY_2:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="PAY_2"
                  name="PAY_2"
                  value={PAY_2}
                  onChange={(e) => setPAY_2(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="PAY_3"
              >
                PAY_3:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="PAY_3"
                  name="PAY_3"
                  value={PAY_3}
                  onChange={(e) => setPAY_3(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="PAY_4"
              >
                PAY_4:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="PAY_4"
                  name="PAY_4"
                  value={PAY_4}
                  onChange={(e) => setPAY_4(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="PAY_5"
              >
                PAY_5:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="PAY_5"
                  name="PAY_5"
                  value={PAY_5}
                  onChange={(e) => setPAY_5(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="PAY_6"
              >
                PAY_6:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="PAY_6"
                  name="PAY_6"
                  value={PAY_6}
                  onChange={(e) => setPAY_6(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="BILL_AMT1"
              >
                Bill Amount 1:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="BILL_AMT1"
                  name="BILL_AMT1"
                  value={BILL_AMT1}
                  onChange={(e) => setBILL_AMT1(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="BILL_AMT2"
              >
                Bill Amount 2:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="BILL_AMT2"
                  name="BILL_AMT2"
                  value={BILL_AMT2}
                  onChange={(e) => setBILL_AMT2(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="BILL_AMT3"
              >
                Bill Amount 3:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="BILL_AMT3"
                  name="BILL_AMT3"
                  value={BILL_AMT3}
                  onChange={(e) => setBILL_AMT3(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="BILL_AMT4"
              >
                Bill Amount 4:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="BILL_AMT4"
                  name="BILL_AMT4"
                  value={BILL_AMT4}
                  onChange={(e) => setBILL_AMT4(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="BILL_AMT5"
              >
                Bill Amount 5:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="BILL_AMT5"
                  name="BILL_AMT5"
                  value={BILL_AMT5}
                  onChange={(e) => setBILL_AMT5(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="BILL_AMT6"
              >
                Bill Amount 6:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="BILL_AMT6"
                  name="BILL_AMT6"
                  value={BILL_AMT6}
                  onChange={(e) => setBILL_AMT6(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="PAY_AMT1"
              >
                Pay Amount 1:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="PAY_AMT1"
                  name="PAY_AMT1"
                  value={PAY_AMT1}
                  onChange={(e) => setPAY_AMT1(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="PAY_AMT2"
              >
                Pay Amount 2:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="PAY_AMT2"
                  name="PAY_AMT2"
                  value={PAY_AMT2}
                  onChange={(e) => setPAY_AMT2(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="PAY_AMT3"
              >
                Pay Amount 3:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="PAY_AMT3"
                  name="PAY_AMT3"
                  value={PAY_AMT3}
                  onChange={(e) => setPAY_AMT3(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="PAY_AMT4"
              >
                Pay Amount 4:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="PAY_AMT4"
                  name="PAY_AMT4"
                  value={PAY_AMT4}
                  onChange={(e) => setPAY_AMT4(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="PAY_AMT5"
              >
                Pay Amount 5:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="PAY_AMT5"
                  name="PAY_AMT5"
                  value={PAY_AMT5}
                  onChange={(e) => setPAY_AMT5(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="PAY_AMT6"
              >
                Pay Amount 6:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="PAY_AMT6"
                  name="PAY_AMT6"
                  value={PAY_AMT6}
                  onChange={(e) => setPAY_AMT6(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="AVG_BILL_AMT"
              >
                Average Bill Amount:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="AVG_BILL_AMT"
                  name="AVG_BILL_AMT"
                  value={AVG_BILL_AMT}
                  onChange={(e) => setAVG_BILL_AMT(e.target.value)}
                />
              </label>
            </div>
            {/* <div className="mb-3 mr-2">
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
            </div> */}
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
            {/* <div className="mb-3 mr-2">
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
            </div> */}
            {/* <div className="mb-3 mr-2">
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
            </div> */}

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
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
