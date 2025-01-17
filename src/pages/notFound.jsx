import React from "react";
import NotFoundImg from "../assets/images/404.png" 

const NotFound = () => {
    return(
        <div className="flex items-center justify-center h-[313px]">
            <img src={NotFoundImg} alt="NOT FOUND" className="w-[500px] pt-10"/>
        </div>
    )
};

export default NotFound;