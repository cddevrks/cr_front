import React from "react";
import image1 from "./img/1-fotor-20240725143915.jpg";
import image2 from "./img/2-fotor-2024072514383.jpg";
import image3 from "./img/3-fotor-2024072514402.jpg";
import image4 from "./img/4-fotor-20240725143841.jpg";
import image5 from "./img/5-fotor-20240725143221.jpg";
import image6 from "./img/6-fotor-20240725151526.jpg";
import image7 from "./img/7-fotor-20240725151631.jpg";
import image8 from "./img/8-fotor-20240725151723.jpg";
import placeholderGif from "./img/logoabhyuday.gif";  // Import your GIF file

const images = [
  image1,
  image2,
  image3,
  image4,
  placeholderGif,  // Use the imported GIF file
  image5,
  image6,
  image7,
  image8,
  
];

function MainRightBottomCard() {
  return (
    <div className="bottom_card">
      <div className="bottomCard_name">
        <h2>Follow Us</h2>
        <a href="https://www.instagram.com/iitbombay_abhyuday/">Instagram</a>
      </div>
      <div className="grid-container">
        {images.map((src, index) => (
          <div key={index} className={`grid-item ${src === placeholderGif ? 'gif-background' : ''}`}>
            <img src={typeof src === 'string' ? src : src.default} alt={`Grid item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainRightBottomCard;
