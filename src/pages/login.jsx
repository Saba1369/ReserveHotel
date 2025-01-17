import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import { USERS_URL } from "../constant/api";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../constant/routes";

const Login = () => {
  const navigate = useNavigate();
  const [name , setName]=("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { startRequest, responseData, loading } = useAxios();
  const notify = () => {
    isLogin
      ? toast("Login successful")
      : toast("Your username or password is incorrect!");
  };
  let isLogin = false;
  const requestUsersInfo = async () => {
    await startRequest({ url: USERS_URL });
  };

  useEffect(() => {
    requestUsersInfo();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loading && responseData) {
      responseData.map((user,index) => {
        if (user.username == username && user.password == password) {
          isLogin = true;
          localStorage.setItem("isLogin","true")
          localStorage.setItem("user",JSON.stringify(user))
          setTimeout(() => handleGoBack() , 1000)
        }
      });
    }
    notify();
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="bg-sky-950 text-white w-[500px] h-[300px] shadow-black shadow-lg p-8 flex flex-col gap-8 rounded-lg"
      >
        <div className="flex flex-col">
          <label>UserName</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 text-black"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>PassWord</label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-600 p-2 rounded border-2 hover:border-transparent"
        >
          LOGIN
        </button>
        <ToastContainer />
      </form>
      <button
        type="button"
        className="text-sky-950 text-lg font-semibold hover:text-sky-600"
        onClick={handleGoBack}
      >
        GO BACK
      </button>
    </div>
  );
};

export default Login;
