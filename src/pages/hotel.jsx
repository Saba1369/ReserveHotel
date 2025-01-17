import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../components/loading";
import Counter from "../components/counter";

const Hotel = ({ hotelInfo, loading }) => {
  const location = useLocation();
  const hotelId = location.pathname.split("/");
  const hotelNum = hotelId[hotelId.length - 1] - 1;
  const [bigImage, setBigImage] = useState("");
  const handleBigImage = (e) => {
    setBigImage(e.target.src);
  };


  return (
    <div className="w-full p-10">
      {loading || !hotelInfo ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-4 bg-white p-[2rem] ">
          <h1 className="text-3xl">{hotelInfo[hotelNum].HotelName}</h1>
          <div className="flex grow gap-10">
            <div>
              <img
                className="w-[100%] h-[400px]"
                src={
                  bigImage
                    ? bigImage
                    : require(`../assets/images/${hotelInfo[hotelNum].ImagesPath[0]}`)
                }
                alt="hotel"
              />
              {hotelInfo[hotelNum].ImagesPath.map((imageUrl, index) => (
                <button
                  className="h-[90px] x-[70px] border"
                  key={index}
                  type="button"
                  onClick={(e) => {
                    handleBigImage(e);
                  }}
                >
                  <img
                    src={require(`../assets/images/${imageUrl}`)}
                    alt="hotel"
                    className="h-full w-full"
                  />
                </button>
              ))}
            </div>
            <div className="w-[50%] flex flex-col gap-4 grow p-4">
              <p>Rate : {hotelInfo[hotelNum].Rating}</p>
              <p>
                Address: {hotelInfo[hotelNum].Address.StreetAddress}
                {hotelInfo[hotelNum].Address.City}
                {hotelInfo[hotelNum].Address.Country}
              </p>
              <p>{hotelInfo[hotelNum].Description}</p>
              <p>
                ParkingIncluded:
                {hotelInfo[hotelNum].ParkingIncluded ? "YES" : "NO"}
              </p>
              <p>
                {hotelInfo[hotelNum].Tags.map((tag, index) => (
                  <span key={index} className="block">
                    {tag}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="grid gap-10 grid-cols-2">
            {hotelInfo[hotelNum].Rooms.map((room, index) => (
              <div
                key={index}
                className="bg-sky-950 shadow-xl shadow-black p-4 text-white flex justify-between items-end"
              >
                <div>
                  {Object.keys(room).map((key, index) => (
                    <p className="block" key={index}>
                      {key}:
                      {key == "tags"
                        ? room[key].map((tag, index) => (
                            <p key={index} className="">
                              {tag}
                            </p>
                          ))
                        : room[key]}
                    </p>
                  ))}
                </div>
                <Counter hotelNum={hotelNum} index={index} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hotel;
