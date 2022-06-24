// import React from 'react'
import "./navbar.css"
import {useNavigate} from "react-router-dom"
import { LogoutOutlined } from "@ant-design/icons";


export default function Navbar({user, setUser}) {

    let navigate = useNavigate();

    const logout = () => {
        localStorage.setItem("user", null);
        setUser(null);
        navigate("/");
      };

  return (
    <div className="navbar-container">

        <div >
               {user ? (
      <div>
        <div className="chat-head-item-navbar">
          <div className="user-profile-pic-container">
            <p className="user-profile-pic-text">{user.email[0]}</p>
          </div>
          <div>
            <p className="user-name">{user.email}</p>
            <div className="log-out-button" onClick={logout}>
              <LogoutOutlined />
              Log out
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <p className="navbar-text">Login to use chat.</p>
      </div>
    )}
        </div>
   
    </div>

   
  );
}

