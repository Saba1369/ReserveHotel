import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Tooltip as ReactTooltip } from "react-tooltip";
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  HOTELS_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  SHOPPING_CART_ROUTE,
} from "../../constant/routes";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";

const Header = () => {
  const reserveList = useSelector((state) => state.data.reserveList);
  let sum = 0;
  reserveList.map((room) => {
    sum += room.count;
  });
const [isOpen,setIsOpen ]= useState(false);
const handleIsOpen = () => {
  if(!isOpen){setIsOpen(true)}
  else{setIsOpen(false)}
  console.log(isOpen)
}
  const isLogin = localStorage.getItem("isLogin");
  return (
    <header className="p-2 px-10  shadow-xl bg-sky-900 opacity-[0.9] flex items-center justify-between gap-[100px] sticky z-50 top-0 w-[full] xs:px-2 xs:relative">
      <img src={logo} alt="logo" className="w-[100px]" />
      <button type="button" className="text-white xl:hidden" onClick={handleIsOpen}>MENU</button>
        <ul className={`xl:flex gap-20 font-semibold text-sky-300 uppercase xs:${isOpen ? "flex flex-col absolute bg-sky-900 top-0 left-[36%] p-4 gap-[20px] " : "hidden"}`}>
          <li>
            <NavLink
              to={HOME_ROUTE}
              className={({ isActive }) =>
                isActive ? "cursor-default text-white" : "hover:underline"
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ABOUT_ROUTE}
              className={({ isActive }) =>
                isActive ? "cursor-default text-white" : "hover:underline"
              }
            >
              about us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={HOTELS_ROUTE}
              className={({ isActive }) =>
                isActive ? "cursor-default text-white" : "hover:underline"
              }
            >
              hotels
            </NavLink>
          </li>
          <li>reserved list</li>

          <li>
            <NavLink
              to={isLogin ? PROFILE_ROUTE : LOGIN_ROUTE}
              className={({ isActive }) => (isActive ? "hidden" : "")}
            >
              <FontAwesomeIcon
                id="login-icon"
                icon={faUserCircle}
                size="lg"
                className="fa fa-user-circle-o text-[rgb(125,211,252)] hover:text-white font-lg"
              />
              <ReactTooltip
                anchorId="login-icon"
                content={isLogin ? "Profile" : "Login"}
                place="bottom"
                style={{ backgroundColor: "white", color: "#222" }}
              />
            </NavLink>
          </li>
          <li className="relative">
            <NavLink to={SHOPPING_CART_ROUTE}>
              <FontAwesomeIcon
                id="shopping-cart-icon"
                icon={faShoppingCart}
                size="lg"
                className="fas fa-shopping-cart text-[rgb(125,211,252)] hover:text-white font-lg"
              />
              <ReactTooltip
                anchorId="shopping-cart-icon"
                content="Shopping Cart"
                place="bottom"
                style={{ backgroundColor: "white", color: "#222" }}
              />
            </NavLink>
            <div className="rounded-full px-2 bg-orange-600 absolute text-white top-[-13px] left-[13px] opacity-[0.8]">
              {sum}
            </div>
          </li>
        </ul>
     
    </header>
  );
};

export default Header;
