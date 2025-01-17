import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelect = ({startDate,setStartDate,endDate,setEndDate}) => {

  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  const handleDate = (date) => {
    const nextDay = new Date(date);
      setStartDate(date);
      if(date >= endDate){
      nextDay.setDate(date.getDate() + 1);
      setEndDate(nextDay);}
  };

  return (
    <div className="flex gap-10">
      <div className="relative">
        <label
          htmlFor="startDate"
          className="absolute top-[-18px] left-[6px] text-white z-10"
        >
          Check In
        </label>
        <DatePicker
          id="startDate"
          selected={startDate}
          onChange={(date) => {
            handleDate(date);
          }}
          minDate={new Date()}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          maxDate={oneYearFromNow}
          className="p-2 border border-2"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="endDate"
          className="absolute top-[-18px] left-[6px] text-white z-10"
        >
          Check Out
        </label>
        <DatePicker
          id="endDate"
          onChange={(date) => setEndDate(date)}
          minDate={new Date(startDate.getTime() + 24 * 60 * 60 * 1000)}
          selected={endDate}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          maxDate={oneYearFromNow}
          className="p-2 border border-2"
        />
      </div>
    </div>
  );
};

export default DateSelect;
