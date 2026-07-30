import React, { useEffect } from "react";
import User from "./User";
import Message from "./Message";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getMessageThunk } from "../../store/slice/message/message.thunk";
import SendMessage from "./SendMessage";

const MessageContainer = () => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  const { messages } = useSelector((state) => state.messageReducer);

  useEffect(() => {
    if (selectedUser?._id) {
      dispatch(getMessageThunk({ receiverId: selectedUser?._id }));
    }
  }, [selectedUser]);

  return (
    <>
      {!selectedUser ? (
        <>please select a user</>
      ) : (
        <div className="h-screen w-full flex flex-col">
          {/* Header */}
          <div className="px-3 py-3 border-b border-white/10">
            <User userDetails={selectedUser} />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3">
            {messages?.map((messageDetails) => {
              return (
                <Message
                  key={messageDetails?._id}
                  messageDetails={messageDetails}
                />
              );
            })}
          </div>
          <SendMessage />
        </div>
      )}
    </>
  );
};

export default MessageContainer;
