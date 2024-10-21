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
        return (
          <div
            className="banner new"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 121, 52, 0.35) -1.39%, rgba(255, 255, 255, 0.0735) 95.65%)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* You can add content for the home tab here if needed */}
          </div>
        );
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
