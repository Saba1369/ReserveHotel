import React from "react";
import Loading from "../components/loading";
import SearchHotelForm from "../components/search-hotel-form";
import HotelComponent from "../components/hotelComponent";

const Hotels = ({ hotelsInfo, loading}) => {
  const searched = JSON.parse(localStorage.getItem('search')) || []
  return (
    <div className="flex flex-col gap-10 justify-center items-center p-10">
      <h1 className="text-2xl font-bold">OUR HOTELS</h1>
      <SearchHotelForm />
      {loading || !hotelsInfo ? (
        <Loading />
      ) : searched[0] ? (
        hotelsInfo
          .filter((hotel) => hotel.Address.City == searched[0])
          .map((hotel, index) => <HotelComponent key={index} hotelInfo={hotel} />)
      ) : (
        hotelsInfo.map((hotel, index) => (
          <HotelComponent key={index} hotelInfo={hotel} />
        ))
      )}
    </div>
  );
};

export default Hotels;
