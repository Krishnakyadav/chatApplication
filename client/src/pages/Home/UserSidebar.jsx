import React from "react";
import { IoSearch } from "react-icons/io5";
import User from "./User";

const UserSidebar = () => {
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
      <div className="h-full overflow-y-auto px-3 ">
        <User />
        <User /> <User /> <User /> <User /> 
      
      </div>
      
      {/* profile photo / Logout btn */}
      <div className="flex items-center justify-between  p-3">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <button className="btn btn-primary btn-sm px-4">Logout</button>
      </div>
    </div>
  );
};

export default UserSidebar;
