import React from "react";
import { useSelector } from "react-redux";
import Loading from "../components/loading";
import Counter from "../components/counter";
import SelectDate from "../components/select-date";
import { LOGIN_ROUTE, OK_ROUTE } from "../constant/routes";
import { Navigate, useNavigate } from "react-router-dom";

const ShoppingCart = ({ hotelInfo, loading }) => {
  const reserveList = useSelector((state) => state.data.reserveList);
  const isLogin = localStorage.getItem('isLogin');
  const navigate = useNavigate()
  return (
    <div className={ `flex flex-col gap-10 items-center ${
      reserveList.length == 0 ? "h-[314px]" : "min-h-[314px]"
    }`}>
      <div className="w-full">
        {reserveList.length == 0 ? (
          <p>Your shopping cart is empty.</p>
        ) : loading || !hotelInfo ? (
          <Loading />
        ) : (
          reserveList.map((room, index) =>
            !room.count ? (
              <></>
            ) : (
              <div key={index} className="flex p-4 items-center gap-4 border">
                <p>
                  Hotel {hotelInfo[room.hotelId].HotelName},
                  {room.hotelId + 1},
                  {hotelInfo[room.hotelId].Rooms[room.roomNum].Description}
                </p>
                <Counter hotelNum={room.hotelId} index={room.roomNum} />
                <SelectDate index={index} />
              </div>
            )
          )
        )}
      </div>
      <button
        type="button" onClick={(e) => {isLogin ? navigate(OK_ROUTE) : navigate(LOGIN_ROUTE)
              }}
        className={`bg-orange-600 w-[200px] p-2 mb-4 ${
          reserveList.length == 0 ? "hidden" : ""
        }`}
      >
        Final reservation
      </button>
    </div>
  );
};

export default ShoppingCart;
