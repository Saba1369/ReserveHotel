import React from "react";
import { HOTEL_RAW_ROUTE } from "../../constant/routes";
import { Link } from "react-router-dom";

const HotelComponent = ({ hotelInfo }) => {
  
  return (
    <div className="bg-white w-full h-[400px] p-4 px-10 flex justify-center items-center gap-10">
      <img
        src={require(`../../assets/images/${hotelInfo.ImagesPath[4]}`)}
        alt={hotelInfo.HotelName}
        className="h-[300px] w-[40%]"
      />
      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-lg font-semibold">{hotelInfo.HotelName}</h2>
        <h3>{hotelInfo.Address.City}, {hotelInfo.Address.Country}</h3>
        <p>Rating: {hotelInfo.Rating}</p>
        <p>{hotelInfo.Description}</p>
       <Link to={`${HOTEL_RAW_ROUTE}/${hotelInfo.HotelId}`}>BOOK NOW</Link>
      </div>
    </div>
  );
};

export default HotelComponent;
