import React from "react";
import { useSelector } from "react-redux";

const Message = ({ messageDetails }) => {
  // console.log(messageDetails);
  const { userProfile } = useSelector((state) => state.userReducer);
  console.log(userProfile?._id === messageDetails?.senderId);
  return (
    <>
      <div
        className={`chat ${userProfile?._id === messageDetails?.senderId ? "chat-end" : "chat-start"}`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">{messageDetails?.message}</div>
      </div>
    </>
  );
};

export default Message;
