import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    // setLoginData({...loginData,[name]:value})
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(loginData);
  return (
    <div className="flex justify-center items-center p-6 min-h-screen">
      <div className="max-w-[35rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
        <h1 className="text-2xl font-semibold">Please Login...!</h1>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaUser />
          <input
            type="text"
            name="username"
            className="grow"
            placeholder="Username"
            value={loginData.username}
            onChange={handleInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <IoKeySharp />
          <input
            type="password"
            name="password"
            className="grow"
            placeholder="Password"
            value={loginData.password}
            onChange={handleInputChange}
          />
        </label>

        <button className="btn btn-primary w-full">Login</button>
        <p>
          Don't have an account? &nbsp;{" "}
          <Link to="/signup" className="text-blue-400 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
