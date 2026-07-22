import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoKeySharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../store/slice/user/user.thunk";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  useEffect(()=>{
    if(isAuthenticated){
      navigate("/")
    }
  },[isAuthenticated])

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    // setLoginData({...loginData,[name]:value})
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    //   console.log("login");
    const response = await dispatch(loginUserThunk(loginData));
    if (response?.payload?.success) {
      navigate("/");
    }

    if (loginUserThunk.fulfilled.match(response)) {
      toast.success("Login successful");
    }
  };

  // console.log(loginData);
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

        <button onClick={handleLogin} className="btn btn-primary w-full">
          Login
        </button>
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
