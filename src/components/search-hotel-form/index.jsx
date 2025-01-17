import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { HOTELS_DATA_URL } from "../../constant/api";
import useAxios from "../../hooks/useAxios";
import DateSelect from "./date-select";
import { useNavigate } from "react-router-dom";
import { HOTELS_ROUTE } from "../../constant/routes";

const SearchHotelForm = () => {
  let initialDate = new Date();
  const [startDate, setStartDate] = useState(initialDate);
  const [endDate, setEndDate] = useState(
    new Date(initialDate.getTime() + 24 * 60 * 60 * 1000)
  );
  const [selectCity, setSelectCity] = useState("");
  const [passengers, setPassengers] = useState(1);
  const { startRequest, responseData, loading } = useAxios();
  const handleSelectCity = (e) => {
    setSelectCity(e.target.value);
  };
  const requestHotelsInfo = async () => {
    await startRequest({ url: HOTELS_DATA_URL });
  };
  const navigate = useNavigate();
  useEffect(() => {
    requestHotelsInfo();
  }, []);
  return (
    <form
      className="flex bg-slate-950 shadow-2xl shadow-black p-10 gap-10 mx-[5%] "
      onSubmit={(e) => {
        e.preventDefault();
        localStorage.setItem(
          "search",
          JSON.stringify([selectCity, startDate, endDate, passengers])
        );
        navigate(HOTELS_ROUTE);
      }}
    >
      <div className="relative">
        <label
          htmlFor="cities"
          className="absolute top-[-18px] left-[6px] text-white z-10"
        >
          City
        </label>
        <select
          name="cities"
          id="cities"
          className="p-2 border border-2"
          onChange={(e) => handleSelectCity(e)}
          required
        >
          <option value="" selected disabled hidden>
            Where are you travelling?
          </option>
          {loading || !responseData ? (
            <></>
          ) : (
            responseData?.map((hotel, index) => (
              <option value={hotel.Address.City} key={index}>
                {hotel.Address.City}, {hotel.Address.Country}
              </option>
            ))
          )}
            <option value="" >
                All Hotels
              </option>
        </select>
      </div>
      <DateSelect
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <div className="relative">
        <label
          htmlFor="quantity"
          className="absolute top-[-18px] left-[2px] text-white z-10"
        >
          Passengers
        </label>
        <input
          type="number"
          id="quantity"
          value={passengers}
          name="quantity"
          min="1"
          max="30"
          className="p-2 border border-2"
          onChange={(e) => setPassengers(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-orange-600 p-2 border border-2 w-[200px] hover:border-orange-600"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default SearchHotelForm;
