import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { USERS_URL } from "../constant/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../constant/routes";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <div className="bg-sky-900 p-10 text-white flex flex-col gap-4">
        <p>
          Welcome Dear {JSON.parse(localStorage.getItem("user")).firstName}{" "}
          {JSON.parse(localStorage.getItem("user")).lastName}
        </p>
        <button
          type="button"
          className="bg-orange-600 p-2 border hover:border-transparent"
          onClick={() => {
            localStorage.removeItem("isLogin");
            localStorage.removeItem("user");
            navigate(LOGIN_ROUTE);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
