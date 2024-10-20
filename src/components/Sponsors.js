import React from "react";
import { Link } from "react-router-dom";
import "./Sponsors.css";
import coin from "../assets/coin.png";
import SectionTitle from "./SectionTitle";
import noticebard from "../assets/noticebard.jpg";
import zex from "../assets/ZEX.png";
import know from "../assets/know.jpg";
import algasem from "../assets/algasem.svg";
import badda from "../assets/badda.png";
import tgh from "../assets/tgh.png";
import youth from "../assets/youth.png";
import her from "../assets/her-1.png";

const Sponsors = () => {
  return (
    <section className="bg-[#230c3c] pt-16" id="sponsors">
      <div className="flex flex-col justify-center items-center max-w-[85%] mx-auto pt-16 pb-14">
        <div className="flex justify-center items-center gap-4 pb-4">
          <span>
            <img
              src={coin}
              alt="Coin"
              className="coin"
              draggable="false"
              loading="lazy"
            />
          </span>

          <SectionTitle title="Sponsors" />
          <span>
            <img
              src={coin}
              alt="Coin"
              className="coin"
              draggable="false"
              loading="lazy"
            />
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="profile-card hoverable">
            <Link to="https://zexprwire.com/" target="_blank" rel="noreferrer">
              <div className="img-container hoverable">
                <img
                  loading="lazy"
                  draggable="false"
                  src={zex}
                  alt=""
                  data-aos="fade-up"
                  data-aos-duration="800"
                />
              </div>
            </Link>
          </div>
          <div className="profile-card">
            <Link to='https://www.thehighereducationreview.com/' target="_blank" rel="noreferrer">
            <div className="img-container hoverable">
              <img
                loading="lazy"
                draggable="false"
                src={her}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
            </Link>
          </div>
          <div className="profile-card">
          <Link to='https://news.aglasem.com/' target="_blank" rel="noreferrer">
            <div className="img-container hoverable">
              <img
                loading="lazy"
                draggable="false"
                src={algasem}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
            </Link>
          </div>
          <div className="profile-card">
          <Link to='https://www.blogadda.com/' target="_blank" rel="noreferrer">
            <div className="img-container hoverable">
              <img
                loading="lazy"
                draggable="false"
                src={badda}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
            </Link>
          </div>
          <div className="profile-card">
            <Link to='https://theglobalhues.com/' target="_blank" rel="noreferrer">
            <div className="img-container hoverable">
              <img
                loading="lazy"
                draggable="false"
                src={tgh}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
            </Link>
          </div>
          <div className="profile-card">
            <Link to='https://youthincmag.com/' target="_blank" rel="noreferrer">
            <div className="img-container hoverable">
              <img
                loading="lazy"
                draggable="false"
                src={youth}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
            </Link>
          </div>
          <div className="profile-card">
            <Link to='https://www.knowafest.com/explore/events' target="_blank" rel="noreferrer">
            <div className="img-container hoverable">
              <img
                loading="lazy"
                draggable="false"
                src={know}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
            </Link>
          </div>
          <div className="profile-card">
            <Link to='https://noticebard.com/' target="_blank" rel="noreferrer">
            <div className="img-container hoverable">
              <img
                loading="lazy"
                draggable="false"
                src={noticebard}
                alt=""
                data-aos="fade-up"
                data-aos-duration="800"
              />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
