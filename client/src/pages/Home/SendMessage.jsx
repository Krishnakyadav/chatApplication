import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageThunk } from "../../store/slice/message/message.thunk";

const SendMessage = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    dispatch(sendMessageThunk({ receiverId: selectedUser?._id, message }));
  };

  return (
    <div className="w-full p-3 flex gap-2 border-t border-white/10">
      <input
        type="text"
        placeholder="Type here..."
        className="input input-bordered input-primary flex-1"
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={handleSendMessage}
        className="btn btn-square bg-blue-600 hover:bg-blue-700 text-white border-none transition duration-300"
      >
        <IoIosSend className="text-xl transition-transform duration-300 hover:scale-110" />
      </button>
      {/* 
      <button className="btn btn-square btn-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button> */}
    </div>
  );
};

export default SendMessage;
