import React from "react";
import "../../style.css";
const divs = [0, 1, 2, 3, 4];
const Loading = () => {
  return (
    <div className="w-full h-full flex gap-[9px] items-center justify-center ">
      {divs.map((item) => (
        <div key={item} className="border-2 border-white w-[3px] rounded" style={{animation: "load 0.5s ease-in-out infinite alternate", animationDelay:`${item * 0.1 + 0.1}s`}}></div>
      ))}
    </div>
  );
};

export default Loading;
