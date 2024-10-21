import React from "react";
import "./MainContainer.css";
import "./Container.css";
import MainRightBottomCard from "./MainRightBottomCard";
import Tasks from "./Tasks.js";
import Leaderboard from "./Leaderboard"; 
import Profile from "./Profile.tsx";

function MainContainer({ activeTab }) {
  const renderLeftContent = () => {
    switch (activeTab) {
      case "tasks":
        return <Tasks />;
      case "leaderboard":
        return <Leaderboard />;
      case "profile":
        return <Profile />;
      default:
        return <Tasks />;
    }
  };

  return (
    <div className="container">
      <div className="maincontainer">
        <div className="left">{renderLeftContent()}</div>
        <div className="right">
          <MainRightBottomCard />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
