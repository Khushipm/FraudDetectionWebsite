import { useState } from "react";
import axios from "axios";

export default function TransportForm() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [isDisabled, setIsDisabled] = useState(false);
  const [output, setOutput] = useState(null);
  // const handleChange = (event) => {
  //   setFormData((prevState) => {
  //     return {
  //       ...prevState,
  //       [event.target.name]: event.target.value,
  //     };
  //   }
  //   );
  // };
  const [amt, setAmt] = useState("");
  const [gender, setGender] = useState("");
  const [cityPop, setCityPop] = useState("");
  const [age, setAge] = useState("");
  const [transMonth, setTransMonth] = useState("");
  const [transYear, setTransYear] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [category_food_dining, setCategory_food_dining] = useState("");
  const [category_gas_transport, setCategory_gas_transport] = useState("");
  const [category_grocery_net, setCategory_grocery_net] = useState("");
  const [category_grocery_pos, setCategory_grocery_pos] = useState("");
  const [ category_health_fitness, setCategory_health_fitness] = useState("");
  const [ category_home, setCategory_home] = useState("");
  const [ category_kids_pets, setCategory_kids_pets] = useState("");
  const [category_misc_net, setCategory_misc_net] = useState("");
  const [ category_misc_pos, setCategory_misc_pos] = useState("");
  const [ category_personal_care, setCategory_personal_care] = useState("");
  const [category_shopping_net, setCategory_shopping_net] = useState("");
  const [category_shopping_pos, setCategory_shopping_pos] = useState("");
  const [category_travel, setCategory_travel] = useState("");

 
  // const [transDateTransTime, setTransDateTransTime] = useState("");
  // const [ccNum, setCcNum] = useState("");
  // const [merchant, setMerchant] = useState("");
  // const [category, setCategory] = useState("");
  
  // const [first, setFirst] = useState("");
  // const [last, setLast] = useState("");
 
  // const [street, setStreet] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zip, setZip] = useState("");

  
 
  // const [job, setJob] = useState("");
  // const [dob, setDob] = useState("");
  // const [transNum, setTransNum] = useState("");
  // const [unixTime, setUnixTime] = useState("");
  // const [merchLat, setMerchLat] = useState("");
  // const [merchLong, setMerchLong] = useState("");
  // const [isFraud, setIsFraud] = useState("");
  // const [transDate, setTransDate] = useState("");

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
                htmlFor="amt"
              >
                Amount:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="amt"
                  value={amt}
                  onChange={(e) => setAmt(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="gender"
              >
                Amount:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="city_pop"
              >
                City Population:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="city_pop"
                  value={cityPop}
                  onChange={(e) => setCityPop(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="age"
              >
                Age:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="age"
                  value={cityPop}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="trans_month"
              >
                Transaction Month:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="trans_month"
                  value={transMonth}
                  onChange={(e) => setTransMonth(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="trans_year"
              >
                Transaction Year:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="trans_year"
                  value={transYear}
                  onChange={(e) => setTransYear(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="lat"
              >
                Latitudinal Distance:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="lat"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="long"
              >
                Longitudinal Distance:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="long"
                  value={long}
                  onChange={(e) => setLong(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_food_dining"
              >
                 Category Food Dining:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_food_dining"
                  value={category_food_dining}
                  onChange={(e) => setCategory_food_dining(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_gas_transport"
              >
                 Category Gas Transport:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_gas_transport"
                  value={category_gas_transport}
                  onChange={(e) => setCategory_gas_transport(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_grocery_net"
              >
                 Category Grocery Net:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_grocery_net"
                  value={category_grocery_net}
                  onChange={(e) => setCategory_grocery_net(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_grocery_pos"
              >
                 Category Grocery Pos:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_grocery_pos"
                  value={category_grocery_pos}
                  onChange={(e) => SetCategory_grocery_pos(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_health_fitness"
              >
                 Category Health Fitness:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_health_fitness"
                  value={category_health_fitness}
                  onChange={(e) => SetCategory_health_fitness(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_home"
              >
                 Category Home:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_home"
                  value={category_home}
                  onChange={(e) => SetCategory_home(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_kids_pets"
              >
                 Category Kids Pets:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_kids_pets"
                  value={category_kids_pets}
                  onChange={(e) => SetCategory_kids_pets(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_misc_net"
              >
                 Category Miscellenous Net:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_misc_net"
                  value={category_misc_net}
                  onChange={(e) => SetCategory_misc_net(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_misc_pos"
              >
                 Category Miscellenous Pos:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_misc_pos"
                  value={category_misc_pos}
                  onChange={(e) => SetCategory_misc_pos(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_personal_care"
              >
                 Category Personal Care:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_personal_care"
                  value={category_personal_care}
                  onChange={(e) => SetCategory_personal_care(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_shopping_net"
              >
                 Category Shopping net:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_shopping_net"
                  value={category_shopping_net}
                  onChange={(e) => SetCategory_shopping_net(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_shopping_pos"
              >
                 Category Shopping Pos:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_shopping_pos"
                  value={category_shopping_pos}
                  onChange={(e) => SetCategory_shopping_pos(e.target.value)}
                />
              </label>
            </div>

            <div className="mb-3 mr-2">
              <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="category_travel"
              >
                 Category Travel:
                <input
                  className="border-0 px-3 mt-3 mb-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="number"
                  id="category_travel"
                  value={category_travel}
                  onChange={(e) => SetCategory_shopping_travel(e.target.value)}
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
