import React, { useEffect } from 'react'
import UserSidebar from './UserSidebar'
import MessageContainer from './MessageContainer'
import { useDispatch } from 'react-redux';
import { getOtherUsersThunk } from '../../store/slice/user/user.thunk';

const Home = () => {
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOtherUsersThunk());
  }, [dispatch]);
  return (
    <div className='flex'>
      <UserSidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home