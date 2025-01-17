import react from "react";
import HomePart3 from "../components/home-part3";
import Slide from "../components/slide";
import SearchHotelForm from "../components/search-hotel-form";

const Home = () => {
  return (
    <div className="flex flex-col justify-start gap-[70px] h-[300vh]">
      <Slide/>
      <SearchHotelForm/>
      <HomePart3/>
    </div>
  );
};

export default Home;
