
import React from 'react'
import './chatheader.css'


export default function ChatHeader  ({items, setReceiver})  {
  return (
    <div>
         <div className="chat-heads-container">
        {items.map((obj, i) => (
          <div
            key={i}
            className="chat-head-item"
            onClick={() => setReceiver(obj)}
          >
            <div className="user-profile-pic-container">
              <p className="user-profile-pic-text">{obj.email[0]}</p>
            </div>
            <p>{obj.email}</p>
          </div>
        ))}
      </div>
        </div>
  )
}
