import { Route, Routes, useLocation } from "react-router";
import Header from "./components/header";
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  HOTEL_ROUTE,
  HOTELS_ROUTE,
  LOGIN_ROUTE,
  OK_ROUTE,
  PROFILE_ROUTE,
  SHOPPING_CART_ROUTE,
} from "./constant/routes";
import Home from "./pages/home";
import Footer from "./components/footer";
import Login from "./pages/login";
import Hotels from "./pages/hotels";
import useAxios from "./hooks/useAxios";
import { useEffect } from "react";
import { HOTELS_DATA_URL } from "./constant/api";
import NotFound from "./pages/notFound";
import Hotel from "./pages/hotel";
import AboutUS from "./pages/aboutUs";
import Profile from "./pages/profile";
import ShoppingCart from "./pages/shoppingCart";
import Ok from "./pages/ok";

function App() {
  const { startRequest, responseData, loading } = useAxios();
  const location = useLocation();
  const isLoginPage = location.pathname.includes(LOGIN_ROUTE);
  const requestHotelsInfo = async () => {
    await startRequest({ url: HOTELS_DATA_URL });
  };
  const isLogin = localStorage.getItem("isLogin")
  useEffect(() => {
    requestHotelsInfo();
  }, []);
  return (
    <div className="relative flex flex-col bg-gray-300 w-scree">
      {(!isLoginPage || (isLoginPage && isLogin)) && <Header />}
      <div>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={!isLogin ? LOGIN_ROUTE : PROFILE_ROUTE} element={!isLogin ? <Login /> : <Profile />} />
          {/* <Route path={PROFILE_ROUTE} element={<Profile />} /> */}
          <Route
            path={HOTELS_ROUTE}
            element={<Hotels hotelsInfo={responseData} loading={loading} />}
          />
          <Route
            path={HOTEL_ROUTE}
            element={<Hotel hotelInfo={responseData} loading={loading}/>}
          />
             <Route
            path={ABOUT_ROUTE}
            element={<AboutUS/>}
          />
          <Route path={SHOPPING_CART_ROUTE} element={<ShoppingCart hotelInfo={responseData} loading={loading}/>} />
          <Route path={isLogin ? OK_ROUTE : LOGIN_ROUTE} element={isLogin ? <Ok /> : <Login/>} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </div>
      {(!isLoginPage || (isLoginPage && isLogin)) && <Footer />}
    </div>
  );
}

export default App;
