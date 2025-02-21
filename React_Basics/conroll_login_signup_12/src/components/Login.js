import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login({ isLoggedIn, setLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showpass, setPass] = useState(false);

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLogin(true);
    toast.success("Logged in successfully");
    navigate("/");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white"
        />
        <div className="relative">
          <input
            type={showpass ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={changeHandler}
            className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white"
          />
          <span
            onClick={() => setPass(!showpass)}
            className="absolute right-4 top-3 text-white cursor-pointer"
          >
            {showpass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
