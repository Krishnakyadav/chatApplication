import React, { useEffect } from "react";
import UserSidebar from "./UserSidebar";
import MessageContainer from "./MessageContainer";
import { useDispatch, useSelector } from "react-redux";
import { getOtherUsersThunk } from "../../store/slice/user/user.thunk";
import io from "socket.io-client";
import {
  initializaSocket,
  setOnlineUsers,
} from "../../store/slice/socket/socket.slice";

const Home = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, userProfile } = useSelector(
    (state) => state.userReducer,
  );
  const { socket, onlineUsers } = useSelector((state) => state.socketReducer);

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(initializaSocket(userProfile?._id));
  }, [isAuthenticated]);

  useEffect(() => {
    if (!socket) return;
    socket.on("onlineUsers", (onlineUsers) => {
      dispatch(setOnlineUsers(onlineUsers));
    });
    return()=>{
      socket.close()
    }
  }, [socket]);

 

  useEffect(() => {
    dispatch(getOtherUsersThunk());
  }, [dispatch]);
  return (
    <div className="flex">
      <UserSidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
