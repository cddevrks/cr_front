import React, { useState, useEffect } from "react";
import "./Hero.css";
import banner from "../assets/banner-img.png";
import boat from "../assets/boat.png";
import moon from "../assets/moon.png";
import SocialMediaBar from "./SocialMediaBar";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";  // Import useNavigate

function Hero() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();  // Initialize the navigate function

  useEffect(() => {
    // Prevent right-click on images
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      images.forEach((img) => {
        img.removeEventListener("contextmenu", (e) => {
          e.preventDefault();
        });
      });
    };
  }, []);

  // Navigate to the Details page when the Register button is clicked
  const handleRegisterClick = () => {
    navigate("/details");  // Navigate to the Details page
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);  // Toggle popup visibility
    document.body.classList.toggle("popup-active");
  };

  return (
    <section id="hero-section">
      <div className="container">
        <div className="flex flex-col justify-center items-start mx-auto space-y-6">
          <div className="flex flex-col justify-center items-center mx-auto">
            <div className="inline-block">
              <h1
                className="font-chelsea text-[#F4EDDF] text-[20px] lg:text-[65px] text-center max-w-[85%] mx-auto font-normal text_animation text-pretty"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                COLLEGE & SCHOOL REPRESENTATIVE PROGRAM
              </h1>
            </div>
            <h2
              className="font-oswald text-[#F4EDDF]  text-[13px] lg:text-[21px] text-opacity-75 font-normal pt-2 pb-8 max-w-[85%] text-justify"
              data-aos="fade-up"
              data-aos-duration="1900"
            >
              The College Representative Program of Abhyuday, IIT Bombay is a
              student-driven initiative aimed at fostering social change among
              college students in India. Our representatives actively raise
              awareness, organize events, & mobilize peers to tackle critical
              issues such as education, health, & gender equality. The program
              offers leadership training, resources, and a robust network to
              support impactful community engagement. It empowers students to
              drive positive change while nurturing empathy and a deeper
              understanding of social challenges.
            </h2>
            <button
              type="button"
              className="font-chelsea font-bold register-btn"
              data-aos="fade-up"
              data-aos-duration="1500"
              onClick={handleRegisterClick}  // Call handleRegisterClick on click
            >
              REGISTER NOW
            </button>
          </div>
          <div className="mob">
            <Link
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
              className="scroll-icon flex items-center justify-center"
            >
              <span>
                <svg
                  className="scroll hoverable"
                  width="193"
                  height="194"
                  viewBox="0 0 193 194"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="96.8333"
                    cy="97"
                    r="46.5833"
                    stroke="white"
                    strokeWidth="3"
                  ></circle>
                  <path
                    d="M96.8392 20.0996C96.2355 20.0996 95.7461 20.589 95.7461 21.1927L95.7461 86.6834C95.7461 88.8184 93.1648 89.8876 91.6551 88.3779L90.7334 87.4562C90.3066 87.0294 89.6146 87.0294 89.1878 87.4562C88.761 87.883 88.761 88.5749 89.1878 89.0017L93.3036 93.1175C95.2563 95.0702 98.4221 95.0702 100.375 93.1175L104.491 89.0017C104.917 88.5749 104.917 87.883 104.491 87.4562C104.064 87.0294 103.372 87.0294 102.945 87.4562L102.023 88.3779C100.514 89.8876 97.9322 88.8184 97.9322 86.6834L97.9322 21.1927C97.9322 20.589 97.4428 20.0996 96.8392 20.0996Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </span>
              <span className="scroll-font hoverable bg-[#230c3c]">
                Scroll down
              </span>
            </Link>
          </div>
        </div>
      </div>
      <span className="shape1 header-shape">
        <img
          src={banner}
          className=" banner-img"
          alt="CR hero banner"
          draggable="false"
        />
      </span>
      <div>
        <span className="boat header-shape boatMove overflow-hidden">
          <img src={boat} alt="Boat" draggable="false" />
        </span>
        <SocialMediaBar />
        <span className="moon header-shape topMove">
          <img src={moon} alt="moon" draggable="false" />
        </span>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <button className="close-btn" onClick={togglePopup}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                id="close"
              >
                <path
                  fill="#000"
                  d="M7.05 7.05a1 1 0 0 0 0 1.414L10.586 12 7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 0 0 1.414-1.414L13.414 12l3.536-3.536a1 1 0 0 0-1.414-1.414L12 10.586 8.464 7.05a1 1 0 0 0-1.414 0Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;