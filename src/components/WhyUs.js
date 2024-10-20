import React from "react";
import "./WhyUs.css";
import connection from "../assets/connection.jpg";
import difference from "../assets/Designer.png";
import represent from "../assets/represent.jpg";
import skill from "../assets/skillset.jpg";
import SectionTitle from "./SectionTitle";

function WhyUs() {
  return (
    <section className="bg-[#230c3c] pt-32" id="whyus">
      <div className="flex flex-col justify-center items-center bg-[#230c3c] max-w-[85%] mx-auto">
        <div className="flex justify-center items-center gap-4">
          <SectionTitle title="Why Us ?" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="flip-card"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={skill}
                  alt="Front"
                  className="flip-card-image"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <div className="flip-card-back">
                <p className="text-3xl font-chelsea">Sharpen yer sea skills</p>
              </div>
            </div>
          </div>
          <div
            className="flip-card"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={connection}
                  alt="Front"
                  className="flip-card-image"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <div className="flip-card-back">
                <p className="text-3xl font-chelsea">Forge new alliances</p>
              </div>
            </div>
          </div>
          <div
            className="flip-card"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={represent}
                  alt="Front"
                  className="flip-card-image"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <div className="flip-card-back">
                <p className="text-3xl font-chelsea">Hoist yer college's colors</p>
              </div>
            </div>
          </div>
          <div
            className="flip-card"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={difference}
                  alt="Front"
                  className="flip-card-image"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <div className="flip-card-back">
                <p className="text-3xl font-chelsea">Leave yer mark on the world!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
