import React, { useState } from "react";
import "./Menu.css";
import { FaTasks, FaMedal, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Menu({ setActiveTab }) {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("home");

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setActiveTab(tab);
  };

  return (
    <div className="mymenu">
      <menu>
        <ul id="mainMenu">
          <button onClick={() => handleTabChange("home")}>
            <Icon icon={<FaHome />} text="Home" isSelected={selectedTab === "home"} />
          </button>
          <button onClick={() => handleTabChange("tasks")}>
            <Icon icon={<FaTasks />} text="Tasks" isSelected={selectedTab === "tasks"} />
          </button>
          <button onClick={() => handleTabChange("leaderboard")}>
            <Icon icon={<FaMedal />} text="Leaderboard" isSelected={selectedTab === "leaderboard"} />
          </button>
          <button onClick={() => handleTabChange("profile")}>
            <Icon icon={<CgProfile />} text="Profile" isSelected={selectedTab === "profile"} className="hoverable" />
          </button>
          <button onClick={handleLogout}>
            <Icon icon={<IoMdLogOut />} text="Logout" className="hoverable" />
          </button>
        </ul>
      </menu>
    </div>
  );
}

const Icon = ({ icon, text, isSelected, className }) => (
  <li className={`menu-item ${isSelected ? 'selected' : ''} ${className || ''}`}>
    <div className="icon-container">
      {icon}
      <div className="button-container">
        <div className="sparkle-button">
          <span className="text">{text}</span>
        </div>
      </div>
    </div>
  </li>
);

export default Menu;