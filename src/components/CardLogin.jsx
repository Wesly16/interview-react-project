import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateUser, islogin } from "../stores/auth";
import Error from "./Error";

const CardLogin = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    authenticateUser({ username, password });
    navigate("/dashboard");
  }
  return (
    <>
      <div className="absolute top-5 right-10">{isError && <Error />}</div>
      <div className="w-full h-full flex flex-col py-8 px-10 rounded-[24px] bg-white shadow-2xl gap-6 z-30">
        <h1 className="text-[28px] font-semibold py-4">Masuk</h1>
        <h3 className="text-[12px]">Masukkan alamat email / nomor telepon dan kata sandi yang telah anda daftarkan.</h3>
        <div>
          <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
            <div className="w-full py-[14px] px-5 flex gap-[10px] rounded-full border-[1px] ">
              <img src="./person.png" alt="person" />
              <input type="text" name="username" id="username" className="w-full border-none outline-none" />
            </div>
            <div className="w-full py-[14px] px-5 flex gap-[10px] rounded-full border-[1px] ">
              <img src="./lock.png" alt="lock" />
              <input type="password" name="password" id="password" className="w-full border-none outline-none" />
            </div>
            <button type="submit" className="w-full bg-[#f06623] py-4 px-16 text-white rounded-full text-center font-bold">
              Masuk Sekarang
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CardLogin;
