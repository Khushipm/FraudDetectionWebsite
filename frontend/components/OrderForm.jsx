import { useState } from "react";
import axios from "axios";

export default function TransportForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [output, setOutput] = useState(null);
  const handleChange = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const [transDateTransTime, setTransDateTransTime] = useState("");
  const [ccNum, setCcNum] = useState("");
  const [merchant, setMerchant] = useState("");
  const [category, setCategory] = useState("");
  const [amt, setAmt] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [gender, setGender] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [cityPop, setCityPop] = useState("");
  const [job, setJob] = useState("");
  const [dob, setDob] = useState("");
  const [transNum, setTransNum] = useState("");
  const [unixTime, setUnixTime] = useState("");
  const [merchLat, setMerchLat] = useState("");
  const [merchLong, setMerchLong] = useState("");
  const [isFraud, setIsFraud] = useState("");
  const [transDate, setTransDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:5000/logfraud", {
        // location: formData.Location,
        // Moist: Number(formData.Moist),
        amt: 327.36,
        gender: 0,
        city_pop: 3876,
        age: 59,
        trans_month: 12,
        trans_year: 2019,
        latitudinal_distance: 0.349,
        longitudinal_distance: 0.183,
        category_food_dining: 0,
        category_gas_transport: 0,
        category_grocery_net: 0,
        category_grocery_pos: 1,
        category_health_fitness: 0,
        category_home: 0,
        category_kids_pets: 0,
        category_misc_net: 0,
        category_misc_pos: 0,
        category_personal_care: 0,
        category_shopping_net: 0,
        category_shopping_pos: 0,
        category_travel: 0,
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
                htmlFor="date/time"
              >
                Transaction Date/Time:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="datetime-local"
                  id="transDateTransTime"
                  name="transDateTransTime"
                  value={transDateTransTime}
                  onChange={(e) => setTransDate(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="ccno"
              >
                Credit Card Number:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="text"
                  id="ccNum"
                  value={ccNum}
                  onChange={(e) => setCcNum(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="merchant:"
              >
                Merchant:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="text"
                  value={merchant}
                  onChange={(e) => setMerchant(e.target.value)}
                  id="merchant"
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category:"
              >
                Category:
                <input />
              </label>
              <select
                className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="category"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                required
              >
                <option value="">--Please select an option--</option>
                <option value="M">category1</option>
                <option value="F">category2</option>
              </select>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category:"
              >
                Amount:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="category"
                  type="number"
                  value={amt}
                  onChange={(e) => setAmt(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category:"
              >
                First Name:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="category"
                  type="text"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category:"
              >
                Last Name:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="category"
                  type="text"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category:"
              >
                Gender:
                <input />
              </label>
              <select
                className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                id="gender"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                required
              >
                <option value="">--Please select an option--</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="street:"
              >
                Street Address:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="category"
                  type="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="city:"
              >
                City:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="state:"
              >
                State:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="state"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="zip:"
              >
                Zip Code:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="zip"
                  type="number"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="zip:"
              >
                Latitude:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="lat"
                  type="number"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="long:"
              >
                Longitude:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="long"
                  type="number"
                  value={long}
                  onChange={(e) => setLong(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="cityPop"
              >
                City Population:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="cityPop"
                  type="number"
                  value={cityPop}
                  onChange={(e) => setCityPop(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="job"
              >
                Job Title:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="job"
                  type="text"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="dob"
              >
                Date of Birth:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="merchLat"
              >
                Merchant Latitude:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="merchLat"
                  type="number"
                  value={merchLat}
                  onChange={(e) => setMerchLat(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="merchLong"
              >
                Merchant Latitude:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  id="merchLong"
                  type="number"
                  value={merchLong}
                  onChange={(e) => setMerchLong(e.target.value)}
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
