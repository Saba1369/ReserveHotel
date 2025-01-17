import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { HOTEL_RAW_ROUTE } from "../../constant/routes";

const EachFigure = ({ hotel, styles, price }) => {
  return (
    <figure className={`cluster flex bg-white w-full h-[400px] ${styles}`}>
      <div className="relative flex-1">
        <div className="absolute right-0 text-white bg-orange-500 flex flex-col justify-center items-center px-8 py-4 scale-x-0 gap-2 transition-transform duration-300 origin-right cluster-hover:scale-x-100 ">
          <span className="text-xs text-gray-100">FOR AS LOW AS</span>
          <span className="text-lg">${price}/night</span>
        </div>
        <img
          src={require(`../../assets/images/${hotel.ImagesPath[4]}`)}
          alt={hotel.HotelName}
          className="h-full w-[120%]"
        />
      </div>
      <figcaption className="py-[3rem] px-[2rem] flex-1">
        <h2 className="text-2xl text-gray-800 capitalize">{hotel.HotelName}</h2>
        <p className="text-xl py-6 text-gray-600">{hotel.Description}</p>
        <Link to={`${HOTEL_RAW_ROUTE}/${hotel.HotelId}`} className="group text-white bg-gray-600 p-2 font-semibold">
          <span className="p-2">BOOK NOW</span>
          <FontAwesomeIcon
            icon={faAngleRight}
            className="fas fa-angle-right hidden px-2 group-hover:inline "
          />
        </Link>
      </figcaption>
    </figure>
  );
};

export default EachFigure;
