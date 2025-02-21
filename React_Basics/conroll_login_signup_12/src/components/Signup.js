import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup({ isLoggedIn, setLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_pass: "",
  });
  const [showpass, setPass] = useState(false);
  const [showConfirmPass, setConfirmPass] = useState(false);

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirm_pass) {
      setLogin(true);
      toast.success("Signup successful");
      navigate("/");
    } else {
      toast.error("Passwords do not match");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Signup</h2>
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
        <div className="relative">
          <input
            type={showConfirmPass ? "text" : "password"}
            name="confirm_pass"
            placeholder="Confirm Password"
            onChange={changeHandler}
            className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-white"
          />
          <span
            onClick={() => setConfirmPass(!showConfirmPass)}
            className="absolute right-4 top-3 text-white cursor-pointer"
          >
            {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Signup
        </button>
      </form>
    </div>
  );
}
