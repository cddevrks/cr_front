import React from "react";
import Lottie from "lottie-react";
import treasure from "../assets/treasure.json";
import SectionTitle from "./SectionTitle";
import "./Incentives.css";
import metvy from "../assets/metvy.jpg";
import unstop from "../assets/unstop.png";
import seekho from "../assets/seekho.png";
import vskills from "../assets/vskills.png";
import geeks from "../assets/gfg.png";
import tale from "../assets/Talerang.png";
import pocket from "../assets/pocketfm.png";
import tech from "../assets/techbairn.png";
import abhi from "../assets/abhibus.png";
import ais from "../assets/mycodingclass.jpeg";

const Incentives = () => {
  return (
    <section id="incentives" className="bg-[#230c3c] text-gray-300 pt-16">
      <div className="campaigns-container1">
        <div className="wrapper1">
          <section>
            <div className="flex justify-center items-center content-center gap-2">
              <span>
                <Lottie
                  animationData={treasure}
                  loop={true}
                  className="treasure-svg pb-4"
                />
              </span>
              <SectionTitle title="Incentives" />
              <span>
                <Lottie
                  animationData={treasure}
                  loop={true}
                  className="treasure-svg pb-4"
                />
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center mt-8 lg:gap-8">
              <div>
                <div className="flex justify-center items-center mb-[-40px]">
                  <div className="col1" data-aos="zoom-in">
                    <div className="container1">
                      <div className="front1">
                        <div className="profile-card1">
                          <div className="img-container1">
                            <img src={unstop} alt="Unstop" />
                          </div>
                          <div className="caption1">
                            <p className="text-center text-white font-oswald">
                              - Discount coupons of 25% for all the participants
                            </p>
                            <p className="text-center text-white font-oswald">
                              - Free vouchers/gift coupons will be provided to
                              all the winners
                            </p>
                          </div>
                        </div>
                        {/* <h3 className="name1">Manasvi Kushwaha</h3> */}
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="font-chelsea text-lg">
                  Official Hosting Partner
                </h1>
              </div>

              <div>
                <div className="flex justify-center items-center mb-[-40px]">
                  <div className="col1" data-aos="zoom-in">
                    <div className="container1">
                      <div className="front1">
                        <div className="profile-card1">
                          <div className="img-container1">
                            <img src={metvy} alt="metvy" />
                          </div>
                          <div className="caption1">
                            <p className="text-center text-white font-oswald">
                              - Discount coupons of 25% for all the participants
                            </p>
                            <p className="text-center text-white font-oswald">
                              - Free vouchers/gift coupons will be provided to
                              all the winners
                            </p>
                          </div>
                        </div>
                        {/* <h3 className="name1">Manasvi Kushwaha</h3> */}
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="font-chelsea text-lg">
                  Official Mentorship Partner
                </h1>
              </div>
              <div>
                <div className="flex justify-center items-center mb-[-40px]">
                  <div className="col1" data-aos="zoom-in">
                    <div className="container1">
                      <div className="front1">
                        <div className="profile-card1">
                          <div className="img-container1">
                            <img src={seekho} alt="seekho" />
                          </div>
                          <div className="caption1">
                            <p className="text-center text-white font-oswald">
                              - 100% off on sprints to the Top 3 Winners
                            </p>
                            <p className="text-center text-white font-oswald">
                              - 20% off to the top 20 participants
                            </p>
                            <p className="text-center text-white font-oswald">
                              - 10% off coupons/vouchers to all participants
                            </p>
                          </div>
                        </div>
                        {/* <h3 className="name1">Manasvi Kushwaha</h3> */}
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="font-chelsea text-lg">
                  Official Student Networking Partner
                </h1>
              </div>
              <div>
                <div className="flex justify-center items-center mb-[-40px]">
                  <div className="col1" data-aos="zoom-in">
                    <div className="container1">
                      <div className="front1">
                        <div className="profile-card1">
                          <div className="img-container1">
                            <img src={vskills} alt="vskills" />
                          </div>
                          <div className="caption1">
                            <p className="text-center text-white font-oswald">
                              - 30% worth Discount coupons for all the
                              participants
                            </p>
                            <p className="text-center text-white font-oswald">
                              - 50% worth Discount coupons for all monthly
                              winners
                            </p>
                            <p className="text-center text-white font-oswald">
                              - Internship opportunity to all the 100 final
                              winners of the program
                            </p>
                          </div>
                        </div>
                        {/* <h3 className="name1">Manasvi Kushwaha</h3> */}
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="font-chelsea text-lg">
                  Official Learning Partner
                </h1>
              </div>
              <div>
                <div className="flex justify-center items-center mb-[-40px]">
                  <div className="col1" data-aos="zoom-in">
                    <div className="container1">
                      <div className="front1">
                        <div className="profile-card1">
                          <div className="img-container1">
                            <img src={geeks} alt="geeksforgeeks" />
                          </div>
                          <div className="caption1">
                            <p className="text-center text-white font-oswald">
                              - Discount coupons of 35% off for all the winners
                            </p>
                            <p className="text-center text-white font-oswald">
                              - Discount coupons of 20% off for all participants
                            </p>
                          </div>
                        </div>
                        {/* <h3 className="name1">Manasvi Kushwaha</h3> */}
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="font-chelsea text-lg">
                  Official Coding Partner
                </h1>
              </div>
              <div>
                <div className="flex justify-center items-center mb-[-40px]">
                  <div className="col1" data-aos="zoom-in">
                    <div className="container1">
                      <div className="front1">
                        <div className="profile-card1">
                          <div className="img-container1">
                            <img src={abhi} alt="abhibus" />
                          </div>
                          <div className="caption1">
                            <p className="text-center text-white font-oswald">
                              - 15% discount coupons up to ₹200 Instant Discount
                              + 10% off up to ₹300 AbhiCash for all the
                              participants
                            </p>
                            <p className="text-center text-white font-oswald">
                              - Abhibus will provide 25 full value vouchers
                              worth ₹1000 each for the winners
                            </p>
                          </div>
                        </div>
                        {/* <h3 className="name1">Manasvi Kushwaha</h3> */}
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="font-chelsea text-lg">
                  Official Travel Partner
                </h1>
              </div>
              <div>
                <div className="flex justify-center items-center mb-[-40px]">
                  <div className="col1" data-aos="zoom-in">
                    <div className="container1">
                      <div className="front1">
                        <div className="profile-card1">
                          <div className="img-container1">
                            <img src={tale} alt="Talerang" />
                          </div>
                          <div className="caption1">
                            <p className="text-center text-white font-oswald">
                              - 10 full scholarships to the winners which
                              includes internship and job opportunities
                            </p>
                            <p className="text-center text-white font-oswald">
                              - 100 part-scholarships to the winners which
                              includes 10 career track challenges
                            </p>
                            <p className="text-center text-white font-oswald">
                              - 10 live simulation projects to winners which
                              includes 1-1 mentorship sessions, access to
                              internships, networking opportunities, and guest
                              speakers from industry leaders
                            </p>
                          </div>
                        </div>
                        {/* <h3 className="name1">Manasvi Kushwaha</h3> */}
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="font-chelsea text-lg">Work Readiness Partner</h1>
              </div>
              <div>
                <div className="flex justify-center items-center mb-[-40px]">
                  <div className="col1" data-aos="zoom-in">
                    <div className="container1">
                      <div className="front1">
                        <div className="profile-card1">
                          <div className="img-container1">
                            <img src={tech} alt="TechBairn" />
                          </div>
                          <div className="caption1">
                            <p className="text-center text-white font-oswald">
                              - 100% off to the 1st & 2nd Winner
                            </p>
                            <p className="text-center text-white font-oswald">
                              - 60% off to the participants in the Top 5 list
                            </p>
                            <p className="text-center text-white font-oswald">
                              - 50% off to the participants in the Top 10 listst
                            </p>
                          </div>
                        </div>
                        {/* <h3 className="name1">Manasvi Kushwaha</h3> */}
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="font-chelsea text-lg">
                  Official Education Partner
                </h1>
              </div>
              <div>
                <div className="flex justify-center items-center mb-[-40px]">
                  <div className="col1" data-aos="zoom-in">
                    <div className="container1">
                      <div className="front1">
                        <div className="profile-card1">
                          <div className="img-container1">
                            <img src={pocket} alt="pocketFM" />
                          </div>
                          <div className="caption1">
                            <p className="text-center text-white font-oswald">
                              - 50 free subscriptions to its 1-year plan to the
                              winners
                            </p>
                          </div>
                        </div>
                        {/* <h3 className="name1">Manasvi Kushwaha</h3> */}
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <h1 className="font-chelsea text-lg">Audio Series Partner</h1>
              </div>
              
            </div>
            <div className="flex justify-center items-center flex-col">
                <div>
                  <div className="flex justify-center items-center mb-[-40px]">
                    <div className="col1" data-aos="zoom-in">
                      <div className="container1">
                        <div className="front1">
                          <div className="profile-card1">
                            <div className="img-container1">
                              <img src={ais} alt="mycodingclass" />
                            </div>
                            <div className="caption1">
                              <p className="text-center text-white font-oswald">
                                - 50 free subscriptions to its 1-year plan to
                                the winners
                              </p>
                            </div>
                          </div>
                          {/* <h3 className="name1">Manasvi Kushwaha</h3> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <h1 className="font-chelsea text-lg">AISATS</h1>
              </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Incentives;
