import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useChat } from '../hooks/useChat';
const Dashboard = () => {
    const {user} = useSelector(state=>state.auth);
    console.log("User in Dashboard:", user);
    const chat = useChat();
    useEffect(()=>{
      chat.initializeSocketConnection();
    },[]);
  return (
    <div>
      Welcome to Dashboard
    </div>
  )
}

export default Dashboard
