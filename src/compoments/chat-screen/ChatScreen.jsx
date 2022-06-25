import React, { useState } from 'react'
import ChatHeads from '../chatheader/ChatHeads'
import Conversation from '../conversation/Conversation'
import "./chatscreen.css"
import {useNavigate} from "react-router-dom"
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../Firebase"
export default function ChatScreen  ({setUser, user})  {

let navigate = useNavigate();
const [chatHeads, setChatHeads] = useState([]);
const [receiver, setReceiver] = useState(null);

React.useEffect (()=>{
  // get from localstorage
  const user = JSON.parse(localStorage.getItem("user"));
  
  if(user) setUser(user);
  else navigate('/');
}, [navigate, setUser]);

React.useEffect(() => {
  if (!user) return;

  (async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    setChatHeads(
      querySnapshot.docs
        .map((doc) => doc.data())
        .filter((obj) => obj.uid !== user.uid)
    );
  })();
}, [user]);
console.log(chatHeads);

  return (
    <div className='chat-screen'>
     <div className="half-screen chat-heads">
      {/* chatheader */}
  
      <ChatHeads item ={chatHeads} setReceiver={setReceiver}/>
     </div>
     <div className="half-screen">
      {/* chat conversaition */}
      <Conversation receiver={receiver} user={user}/>
     </div>
      </div>
  )
}

