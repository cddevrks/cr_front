import React from "react";
import "./Contact.css"; // Import the custom CSS file
import pramod from "../assets/pramod.jpg";
import ritika from "../assets/ritika.jpg";
import garvit from "../assets/garvit.jpg";
import { ReactComponent as Insta } from "../assets/insta.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="pb-3 pt-16 bg-[#230c3c] relative z-[0]">
      <div className="flex flex-col justify-center items-center max-w-[85%] mx-auto pb-14">
        <div className="flex justify-center items-center gap-4 pb-4">
          <SectionTitle title="Contact Us" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            className="card w-48 h-64 overflow-visible relative"
            data-aos="fade-right"
          >
            <div className="content w-full h-full transform-style-preserve-3d transition-transform duration-300 shadow-lg rounded-md">
              <div className="back w-full h-full absolute top-0 left-0 bg-gray-400 rounded-md flex items-center justify-center overflow-hidden">
                <div className="back-content absolute w-[99%] h-[99%] bg-gray-400 rounded-md text-white flex flex-col items-center justify-center">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <div className="image-container w-40 h-40">
                      <img
                        src={pramod}
                        alt="Pramod"
                        className="w-full h-full object-cover rounded-md"
                        draggable="false"
                        loading="lazy"
                      />
                    </div>
                    <h2 className="text-lg font-bold">Pramod Sai</h2>
                    <div className="h-0.5 bg-gray-300 w-full"></div>
                    <h2 className="text-md text-gray-300 font-bold font-oswald">
                      Media & PR Head
                    </h2>
                    <a href="tel:+918919642307" className="hoverable">+91 8919642307</a>
                    <div className="social-media flex justify-center items-center gap-4">
                      <span>
                        <a
                          href="https://www.instagram.com/pramod_____1/?utm_source=ig_web_button_share_sheet"
                          target="_blank"
                          rel="noreferrer"
                          className="hoverable"
                        >
                          <div className="hover:text-red-700">
                            <Insta />
                          </div>
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://www.linkedin.com/in/pramod-sai-972b11289"
                          target="_blank"
                          rel="noreferrer"
                          className="hoverable"
                        >
                          <Linkedin />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card w-48 h-64 overflow-visible relative"
            data-aos="fade-up"
          >
            <div className="content w-full h-full transform-style-preserve-3d transition-transform duration-300 shadow-lg rounded-md">
              <div className="back w-full h-full absolute top-0 left-0 bg-gray-400 rounded-md flex items-center justify-center overflow-hidden">
                <div className="flex justify-center items-center">
                  <div className="back-content absolute w-[99%] h-[99%] bg-gray-400 rounded-md text-white flex flex-col items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-4">
                      <div className="image-container w-40 h-40">
                        <img
                          src={ritika}
                          alt="Ritika"
                          className="w-full h-full object-cover rounded-md"
                          draggable="false"
                          loading="lazy"
                        />
                      </div>
                      <h2 className="text-lg font-bold">Ritika Sirohiya</h2>
                      <div className="h-0.5 bg-gray-300 w-full"></div>
                      <h2 className="text-md text-gray-300 font-bold font-oswald">
                        Media & PR Head
                      </h2>
                      <a href="tel:+919599265453" className="hoverable">+91 9599265453</a>
                      <div className="social-media flex justify-center items-center gap-4">
                        <span>
                          <a
                            href="https://www.instagram.com/ritika_sirohiya?igsh=MTR6OXh6cnl2amU0NQ=="
                            target="_blank"
                            rel="noreferrer"
                            className="hoverable"
                          >
                            <Insta />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://www.linkedin.com/in/ritika-sirohiya-337035279"
                            target="_blank"
                            rel="noreferrer"
                            className="hoverable"
                          >
                            <Linkedin />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card w-48 h-64 overflow-visible relative"
            data-aos="fade-left"
          >
            <div className="content w-full h-full transform-style-preserve-3d transition-transform duration-300 shadow-lg rounded-md">
              <div className="back w-full h-full absolute top-0 left-0 bg-gray-400 rounded-md flex items-center justify-center overflow-hidden">
                <div className="flex justify-center items-center">
                  <div className="back-content absolute w-[99%] h-[99%] bg-gray-400 rounded-md text-white flex flex-col items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-4">
                      <div className="image-container w-40 h-40">
                        <img
                          src={garvit}
                          alt="Garvit"
                          className="w-full h-full object-cover rounded-md"
                          draggable="false"
                          loading="lazy"
                        />
                      </div>
                      <h2 className="text-lg font-bold">Garvit Kulhari</h2>
                      <div className="h-0.5 bg-gray-300 w-full"></div>
                      <h2 className="text-md text-gray-300 font-bold font-oswald">
                        Media & PR Head
                      </h2>
                      <a href="tel:+919664169359" className="hoverable">+91 9664169359</a>
                      <div className="social-media flex justify-center items-center gap-4">
                        <span>
                          <a
                            href="https://www.instagram.com/i_m_garvitkulhari"
                            target="_blank"
                            rel="noreferrer"
                            className="hoverable"
                          >
                            <Insta />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://www.linkedin.com/in/garvit-kulhari-7164b8259"
                            target="_blank"
                            rel="noreferrer"
                            className="hoverable"
                          >
                            <Linkedin />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
