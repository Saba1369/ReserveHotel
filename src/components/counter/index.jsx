import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseCount } from "../store/actions/reserveAction";

const Counter = ({ hotelNum, index }) => {
  const reserveList = useSelector((state) => state.data.reserveList); 
  let g = reserveList.findIndex((room)=>room.hotelId==hotelNum && room.roomNum==index)
  const [counter, setCounter] = useState(reserveList[g]? reserveList[g].count : 0);

  
//  console.log(reserveList)
  const dispatch = useDispatch();

  const increaseCounter = (x) => {
    dispatch(addItem({ hotelId: hotelNum, roomNum: x }));
    let g = reserveList.findIndex((room)=>room.hotelId==hotelNum && room.roomNum==x)
    setCounter(reserveList[g] ? reserveList[g].count + 1 : 1);
  };
  const decreaseCounter = (x) => {
    dispatch(decreaseCount({ hotelId: hotelNum, roomNum: x }));
    let g = reserveList.findIndex((room)=>room.hotelId==hotelNum && room.roomNum==x)
    setCounter(reserveList[g] ? reserveList[g].count - 1 : 1);
  };

  return (
    <div className="flex border">
      <button
        type="button"
        className="bg-orange-600 px-4 py-2"
        onClick={() => {
          decreaseCounter(index);
        }}
      >
        -
      </button>
      <span className="px-4 py-2 bg-white text-black">{counter}</span>
      <button
        type="button"
        onClick={() => {
          increaseCounter(index);
        }}
        className="bg-orange-600 px-4 py-2"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
