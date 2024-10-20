import React from "react";
import "./About.css";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="pb-3 bg-[#230c3c] pt-16">
      {/* <span className="shape6">
        <img src={strip} className="w-full" alt="strip-top" draggable="false" />
      </span> */}
      <div className="container z-[25]">
        <div>
          <div className="col-lg-10 col-12 mx-auto">
            <div className="text-center px-4 flex flex-col justify-center items-center">
              <SectionTitle title="About Us" />
              <p
                className="desc mb-4 lg:max-w-[50%] max-w-[80%] text-start text-[12px] lg:text-[20px] lg:text-pretty font-oswald relative z-[2]"
                data-aos="fade-up"
                data-aos-duration="1900"
              >
                Abhyuday , IIT Bombay is a student-led organization that fosters
                responsibility & leadership in youth, inspiring and empowering
                young individuals to contribute to society and drive positive
                change through various initiatives. <br />
              </p>
              <p
                className="desc mb-4 lg:max-w-[50%] max-w-[80%] text-start text-[12px] lg:text-[20px] lg:text-pretty font-oswald relative z-[2]"
                data-aos="fade-up"
                data-aos-duration="1900"
              >
                Ahoy, mateys! Gather 'round and lend yer ears. We're a crew of
                spirited young buccaneers, charting a course through the seas of
                change. At Abhyuday, we're not just students; we're the captains
                of tomorrow, hoisting the sails of leadership and steering
                towards a brighter horizon. We be on a mission to inspire and
                empower our fellow shipmates, showin' 'em the ropes of
                responsibility and the true meaning of camaraderie. Join us on
                this grand adventure, and together, we'll conquer the seven seas
                of positive change!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
