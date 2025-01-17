import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { HOTELS_DATA_URL } from "../../constant/api";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { HOTELS_ROUTE } from "../../constant/routes";
import DateSelect from "../search-hotel-form/date-select";
import { useDispatch } from "react-redux";
import { addItem } from "../store/actions/reserveAction";
import { object } from "prop-types";

const SelectDate = ({index}) => {
  let initialDate = new Date();
  const [startDate, setStartDate] = useState(initialDate);
  const [endDate, setEndDate] = useState(
    new Date(initialDate.getTime() + 24 * 60 * 60 * 1000)
  );
  const [passengers, setPassengers] = useState(1);
const info = JSON.parse(localStorage.getItem('reserveList')).data.reserveList;
const changeInfo = (index) => {
  info[index].startDate = startDate
  info[index].endDate = endDate
  localStorage.setItem("reserved",JSON.stringify(info));
}
changeInfo(index)
console.log(info)
  return (
    <form
      className="flex bg-slate-950 shadow-2xl shadow-black p-10 gap-10 mx-[5%] "
       onChange={changeInfo(index)}
    >
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
    </form>
  );
};

export default SelectDate;
