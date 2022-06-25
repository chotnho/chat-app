import React from "react";
import "./chatheads.css";

export default function ChatHeads({ item, setReceiver }) {
  return (
   
   
    <div className="chat-heads-container">
        {item.map((obj,i) => (
          <div
            key={i}
            className="chat-head-item"
            onClick={() => setReceiver(obj)}
            >
            <div className="user-profile-pic-container">
              <p className="user-profile-pic-text">{obj.email[0]}</p>
            </div>
            <p className="user-profile-pic-text">{obj.email}</p>
          </div>
        ))}
    </div>
   
  );

}







