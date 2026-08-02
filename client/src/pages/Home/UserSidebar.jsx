import React from "react";
import { IoSearch } from "react-icons/io5";
import User from "./User";
import { logoutUserThunk } from "../../store/slice/user/user.thunk";
import { useDispatch, useSelector } from "react-redux";

const UserSidebar = () => {
  const dispatch = useDispatch();
  const { otherUsers, userProfile } = useSelector((state) => state.userReducer);

  const handleLogout = async () => {
    await dispatch(logoutUserThunk());
  };

  return (
    // chat app
    <div className="max-w-[20em] w-full h-screen  flex flex-col border-r border-r-white/10">
      <h1 className="bg-black mx-3 rounded-lg mt-3 px-2 py-1 text-[#5754E8] text-xl font-semibold ">
        Chat App
      </h1>

      {/* Search bar */}
      <div className="p-3">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <IoSearch />
        </label>
      </div>

      {/* User */}
      <div className="h-full overflow-y-auto px-3 flex flex-col gap-1">
        {otherUsers?.map((userDetails) => {
          return <User key={userDetails?._id} userDetails={userDetails} />;
        })}
      </div>

      {/* profile photo / Logout btn */}
      <div className="flex items-center justify-between  p-3">
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
              <img src={userProfile?.avatar} />
            </div>
         
          </div>
             <h2>{userProfile?.username}</h2>
        </div>
        <button onClick={handleLogout} className="btn btn-primary btn-sm px-4">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;
