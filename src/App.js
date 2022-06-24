import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import ChatScreen from './compoments/chat-screen/ChatScreen';
import Navbar from './compoments/navbar/Navbar';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Navbar user= {user} setUser={user} />
        <Routes>
        <Route exact path="/" element={<Login user= {user} setUser={setUser}/>}/>
        <Route exact path="/Chat" element={<ChatScreen user= {user} setUser={setUser}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
