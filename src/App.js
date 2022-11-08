import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import  LoginForm from './components/LoginForm';
import './App.css';
import ChatFeed from './components/ChatFeed';




// import "./style.css";


function App() {

  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
      height="100vh"
      projectID="fe1ef751-8115-42f4-9f81-d138f671cbb7"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App
