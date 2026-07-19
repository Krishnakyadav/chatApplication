import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    let {name,value} = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  console.log(signupData)
  return (
    <div className="flex justify-center items-center p-6 min-h-screen">
      <div className="max-w-[35rem] w-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg">
        <h1 className="text-2xl font-semibold">Please Signup...!</h1>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaUser />
          <input
            type="text"
            name="fullName"
            className="grow"
            placeholder="Full Name"
            value={signupData.fullName}
            onChange={handleInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaUser />
          <input
            type="text"
            name="username"
            className="grow"
            placeholder="Username"
            value={signupData.username}
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
            value={signupData.password}
            onChange={handleInputChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 w-full">
          <IoKeySharp />
          <input
            type="password"
            name="confirmPassword"
            className="grow"
            placeholder="Confirm Password"
            value={signupData.confirmPassword}
            onChange={handleInputChange}
          />
        </label>

        <button className="btn btn-primary w-full">Signup</button>
        <p>
          Already have an account? &nbsp;{" "}
          <Link to="/login" className="text-blue-400 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
