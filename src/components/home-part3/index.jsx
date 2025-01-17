import React, { useEffect } from "react";
import Loading from "../loading";
import EachFigure from "./eachFigure";
import useAxios from "../../hooks/useAxios";
import { HOTELS_DATA_URL } from "../../constant/api";

const HomePart3 = () => {
  const { startRequest, responseData, loading } = useAxios();

  const requestHotelsInfo = async () => {
    await startRequest({ url: HOTELS_DATA_URL });
  };

  useEffect(() => {
    requestHotelsInfo();
  }, []);
   
  
  return (
    <div className="flex flex-col justify-between items-center h-screen w-full gap-[6rem]">
      <h3 className="text-2xl font-semibold text-slate-700">FEATURED HOTELS</h3>
      {loading || !responseData ? (
        <Loading />
      ) : (
        <div className="px-[5%] grid grid-col-2 w-full h-screen gap-y-[2rem]">
          <EachFigure hotel={responseData[2]} styles="col-start-1 col-end-3" price={99}/>
          <EachFigure hotel={responseData[5]} styles="flex-row-reverse" price={100}/>
          <EachFigure hotel={responseData[6]} styles="col-span-1 flex-row-reverse" price={110}/>
        </div>
      )}
    </div>
  );
};

export default HomePart3;
