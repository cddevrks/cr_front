import React, { useEffect } from "react";

import women from "../img/women.jpg";

function TopContainer() {


  return (
    <div className="topContainer">
  

      <div className="profileContainer">
       
        <div className="profileImage">
          <img src={women} alt="" />
        </div>
        <p className="profileName">Olivia Christine</p>
       

       
      </div>
    </div>
  );
}

export default TopContainer;
