import React from "react";
import User from "./User";
import Message from "./Message";
import { IoIosSend } from "react-icons/io";

const MessageContainer = () => (
  <div className="h-screen w-full flex flex-col">
    {/* Header */}
    <div className="px-3 py-3 border-b border-white/10">
      <User />
    </div>

    {/* Messages */}
    <div className="flex-1 overflow-y-auto p-3">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>

    {/* Input */}
    <div className="w-full p-3 flex gap-2 border-t border-white/10">
      <input
        type="text"
        placeholder="Type here..."
        className="input input-bordered input-primary flex-1"
      />

      <button className="btn btn-square bg-blue-600 hover:bg-blue-700 text-white border-none transition duration-300">
        <IoIosSend className="text-xl transition-transform duration-300 hover:scale-110" />
      </button>

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
      </button>
    </div>
  </div>
);

export default MessageContainer;
