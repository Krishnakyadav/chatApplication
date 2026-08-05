import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageThunk } from "../../store/slice/message/message.thunk";

const SendMessage = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    dispatch(sendMessageThunk({ receiverId: selectedUser?._id, message }));
     setMessage("")
  };

  return (
    <div className="w-full p-3 flex gap-2 border-t border-white/10">
      <input
        type="text"
        placeholder="Type here..."
        className="input input-bordered input-primary flex-1"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={handleSendMessage}
        className="btn btn-square bg-blue-600 hover:bg-blue-700 text-white border-none transition duration-300"
      >
        <IoIosSend className="text-xl transition-transform duration-300 hover:scale-110" />
      </button>
    </div>
  );
};

export default SendMessage;
