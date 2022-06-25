import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaSignOutAlt} from "react-icons/fa";
import ICON from "../../assets/logo.png";

export default function Navbar ({ user }) {
  let navigate = useNavigate();
  const [ User, setUser] = React.useState();
  const logout = () => {
    localStorage.setItem("user", null);
    setUser(null);
    navigate("/");
  };

  return (
    <div className="navbar-container">
      {/* Left */}
      <div className="nav-search-container">
        <img src={ICON} className="navbar-logo" alt="navbar-logo" />
        <div className="nav-search-container-input-bar">
        
          <p>Thiên Di chat</p>
        </div>
      </div>

     

      {/* Right */}
      <div>
        {user ? (
          <div>
            <div className="chat-head-item-navbar">
              <div className="user-profile-pic-container">
                <p className="user-profile-pic-text">{user.email[0]}</p>
              </div>
              <div>
                <p className="user-name">{user.email}</p>
                <div className="log-out-button" onClick={logout}>
                  <FaSignOutAlt />
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

