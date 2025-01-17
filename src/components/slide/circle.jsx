import React from "react";

const Circle = ({index , circleNum, onClick}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-4 h-4 rounded-full shadow-md shadow-black ${
        index === circleNum ? "bg-sky-900" : "bg-white"
      }` }
    ></button>
  );
};

export default Circle;
