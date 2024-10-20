// import React from "react";
// import "./Footer.css";
// import logo from "../assets/logo.png";
// import footer_left from "../assets/footer-left.png";
// import footer_right from "../assets/footer-right.png";
// import footer_gif from "../assets/footer-gif.gif";
// import SocialMediaBar from "./SocialMediaBar";
// import Contact from "./Contact";

// function Footer() {
//   return (
//     <>
//       <footer
//         id="footer-sec"
//         className="d-none bg-[#230c3c] w-full"
//       >
//         <div className="container">
//           {/* <Contact /> */}
//           <div className="row flex items-end justify-center pt-3">
//             <div className="cls flex items-center justify-center">
//               {/* <div className="footer-box-logo flex items-center justify-center relative z-[2]">
//                 <img src={logo} alt="abhyuday logo" draggable="false" />
//               </div> */}
//               {/* <SocialMediaBar className="pl-2 mt-16" /> */}
//             </div>
//           </div>
//         </div>
//         <span className="shape2 footer-shape">
//           <img
//             src={footer_left}
//             alt="footer shape left"
//             draggable="false"
//             loading="lazy"
//           />
//         </span>
//         <span className="shape3 footer-shape">
//           <img
//             src={footer_right}
//             alt="footer shape right"
//             draggable="false"
//             loading="lazy"
//           />
//         </span>
//         <div className="h-16"></div>
//         <span className="shape1 footer-shape">
//           {/* <img
//             src={footer_gif}
//             className="gif"
//             width="100%"
//             alt="footer shape"
//             draggable="false"
//             loading="lazy"
//           /> */}
//         </span>
//       </footer>
//     </>
//   );
// }

// export default Footer;

import React from "react";
import "./Footer.css";
import logo from "../assets/logo_white.svg";
import footer_gif from "../assets/footer-gif-new.gif";
import footer_left from "../assets/footer-left.png";
import footer_right from "../assets/footer-right.png";
import Contact from "./Contact";
import SocialMediaBarHorizontal from "./SocialMediaBarHorizontal";
import { Link as RouteLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <Contact />
      <footer
        id="footer"
        className="bg-[#230c3c] overflow-x-hidden overflow-y-visible pt-16"
      >
        <span className="shape-left">
          <img
            className="image1"
            src={footer_left}
            alt="footer shape left"
            draggable="false"
            loading="lazy"
          />
        </span>
        <div className="flex flex-col justify-center items-center">
        <RouteLink to="https://abhyudayiitb.org/" target="_blank">
        <img src={logo} alt="Abhyuday logo" draggable="false" loading="lazy" className="relative z-[24] w-[300px] lg:w-[600px] mb-4 hoverable"/></RouteLink>
        <h2 className="text-white font-chelsea font-bold text-lg text-pretty text-center lg:text-3xl">Inspiring Individuals, Transforming Communities</h2>
        </div>
        <span className="shape-right">
          <img
            className="image2"
            src={footer_right}
            alt="footer shape right"
            draggable="false"
            loading="lazy"
          />
        </span>
        <div className="mydiv">
          <span className="gif">
            <img
              src={footer_gif}
              className=""
              width="100%"
              alt="footer shape"
              draggable="false"
              loading="lazy"
            />
          </span>
          <div className="flex justify-center items-center">
          <div className="absolute bottom-1 z-[2] w-full">
            <SocialMediaBarHorizontal className="flex-row footer-social" />
          </div>
        </div></div>
      </footer>
    </>
  );
}

export default Footer;
