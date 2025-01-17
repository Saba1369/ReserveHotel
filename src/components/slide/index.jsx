import react from "react";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../../style.css";
import Circle from "./circle";
import useAxios from "../../hooks/useAxios";
import { SLIDES_INFO_URL } from "../../constant/api";
import { useEffect } from "react";
import Loading from "../loading";
import { Link } from "react-router-dom";
import { HOTEL_RAW_ROUTE } from "../../constant/routes";


const Slide = () => {
  const { startRequest, responseData, loading } = useAxios();

  const requestSlidesInfo = async () => {
    await startRequest({ url: SLIDES_INFO_URL });
  };

  useEffect(() => {
    requestSlidesInfo();
  }, []);
  
  return (
    <div className="overflow-y-hidden h-[570px] ">
    {loading  || !responseData ? (<Loading/>) : ( <div className="slide-container">
      <Fade>
        {responseData?.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container relative">
              <img
                src={require(`../../assets/images/${fadeImage.url}`)}
                alt="image"
                className=" h-[650px] w-full"
              />
              <div className="absolute left-[50%] top-[10%] z-40 text-2xl text-gray-200 font-bold">
                <h2 className="border-y-2 w-fit mb-8">{fadeImage.title}</h2>
                <p className="text-white text-4xl mb-12">{fadeImage.caption}</p>
                <Link className="bg-orange-500 px-6 py-4 shadow-md shadow-black rounded-full hover:bg-sky-900" to={`${HOTEL_RAW_ROUTE}/${fadeImage.HotelId}`}>BOOK NOW</Link>
              </div>
              <div className="absolute left-[47%] top-[80%] z-40 flex gap-4">
                <Circle index={index} circleNum={0} />
                <Circle index={index} circleNum={1} />
                <Circle index={index} circleNum={2} />
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>)}
   </div>
  );
};

export default Slide;
