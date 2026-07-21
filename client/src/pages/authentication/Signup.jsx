import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../../store/slice/user/user.thunk";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "male",
  });

  // console.log(signupData);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    if (signupData.password !== signupData.confirmPassword) {
      return toast.error("Password and confirm password do not match");
    }
    const response = await dispatch(registerUserThunk(signupData));
    if (response?.payload?.success) {
   navigate("/")
    }
  };
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

        <div className="border border-base-300 rounded-lg h-12 px-4 flex items-center gap-6 w-full">
          <label
            htmlFor="male"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              id="male"
              type="radio"
              name="gender"
              value="male"
              className="radio radio-primary radio-sm"
              defaultChecked
              onChange={handleInputChange}
            />
            <span>Male</span>
          </label>

          <label id="female" className="flex items-center gap-2 cursor-pointer">
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              className="radio radio-primary radio-sm"
              onChange={handleInputChange}
            />
            <span>Female</span>
          </label>
        </div>

        <button onClick={handleSignup} className="btn btn-primary w-full">
          Signup
        </button>
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
