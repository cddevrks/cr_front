// import React from "react";
// import logo from "../assets/logo.png";

// const Header = () => {
//   return (
//     <header id="main-top-header" className="bg-white py-4">
//       <div className="container mx-auto p-4">
//         <div className="lg:hidden">
//           <nav className="navbar navbar-expand-lg">
//             <a className="navbar-brand" href="/">
//               <img src={logo} alt="bootyledger logo" className="w-8 h-8" />
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon">
//                 <svg
//                   width="28"
//                   height="28"
//                   viewBox="0 0 28 28"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect
//                     width="18"
//                     height="2"
//                     rx="1"
//                     transform="matrix(-1 0 0 1 26 0)"
//                     fill="white"
//                   />
//                   <rect
//                     width="18"
//                     height="2"
//                     rx="1"
//                     transform="matrix(-1 0 0 1 20 26)"
//                     fill="white"
//                   />
//                   <rect
//                     width="16"
//                     height="2"
//                     rx="1"
//                     transform="matrix(-1 0 0 1 28 13)"
//                     fill="white"
//                   />
//                   <rect
//                     width="10"
//                     height="2"
//                     rx="1"
//                     transform="matrix(-1 0 0 1 10 13)"
//                     fill="white"
//                   />
//                 </svg>
//               </span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav mb-2 mb-lg-0 gap-5 align-items-center">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link active"
//                     aria-current="page"
//                     href="#story"
//                   >
//                     Story
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#ledger">
//                     Ledger
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#map">
//                     The Map
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#features">
//                     Bot
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#faq">
//                     FAQ
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link green-btn"
//                     href="https://app.bootyledger.com"
//                     rel="nofollow, noindex"
//                   >
//                     Open App
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//         <div className="hidden lg:block">
//           <nav className="navbar navbar-expand-lg">
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContentMobile"
//               aria-controls="navbarSupportedContentMobile"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon">
//                 <i className="fa fa-bars" aria-hidden="true" />
//               </span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContentMobile"
//             >
//               <ul className="navbar-nav mb-2 mb-lg-0 gap-5 align-items-center">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link active"
//                     aria-current="page"
//                     href="#story"
//                   >
//                     Story
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#ledger">
//                     Ledger
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#map">
//                     The Map
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <a className="navbar-brand mx-auto" href="/">
//               <img src={logo} alt="bootyledger logo" className="w-8 h-8" />
//             </a>
//             <div className="main-btn">
//               <ul className="navbar-nav mb-2 mb-lg-0 gap-5 align-items-center">
//                 <li className="nav-item">
//                   <a className="nav-link" href="#features">
//                     Features
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#faq">
//                     FAQ
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link green-btn"
//                     href="https://app.bootyledger.com"
//                     rel="nofollow, noindex"
//                   >
//                     Open App
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {Link as RouteLink } from 'react-router-dom';
import ablogo from "../assets/logo.png";

const Nav = () => {
  const [navSticky, setNavSticky] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavSticky(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };


  return (
    <div
      className={`w-full z-10 absolute transition-all duration-200 ${
        navSticky ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="flex items-center z-10 h-[10vh] lg:h-[12vh] justify-between w-4/5 mx-auto">
        <ul className="lg:flex hidden items-center font-chelsea text-white space-x-10 lg:space-x-12 xl:space-x-14">
          <li className="hoverable hover:text-[#ffd700]">
            <Link to="home" smooth={true} duration={500} className="nav_link">
              Home
            </Link>
          </li>
          <li className="hoverable hover:text-[#ffd700]">
            <Link
              to="about"
              // smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
              About
            </Link>
          </li>
          <li className="hoverable hover:text-[#ffd700]">
            <Link
              to="incentives"
              // smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
              Incentives
            </Link>
          </li>
        </ul>
        <div className="font-bold text-white text-2xl">
          <RouteLink to="https://abhyudayiitb.org/" target="_blank">
            <img src={ablogo} alt="Logo" className="w-32 md:w-48 ml-4 mr-4 hoverable" />
          </RouteLink>
        </div>
        <ul className="lg:flex hidden items-center font-chelsea text-white space-x-10 lg:space-x-12 xl:space-x-14">
          <li className="hoverable hover:text-[#ffd700]">
            <Link
            onClick={toggleNav}
              to="sponsors"
              // smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
              Sponsors
            </Link>
          </li>
          <li className="hoverable hover:text-[#ffd700]">
          <Link
          
              to="faqs"
              // smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
              FAQs
            </Link>
          </li>
          <li className="hoverable hover:text-[#ffd700]">
            <Link
              to="contact"
              // smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <button
          className="lg:hidden text-white"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarSupportedContent"
          aria-expanded={navOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="18"
                height="2"
                rx="1"
                transform="matrix(-1 0 0 1 26 0)"
                fill="white"
              ></rect>
              <rect
                width="18"
                height="2"
                rx="1"
                transform="matrix(-1 0 0 1 20 26)"
                fill="white"
              ></rect>
              <rect
                width="16"
                height="2"
                rx="1"
                transform="matrix(-1 0 0 1 28 13)"
                fill="white"
              ></rect>
              <rect
                width="10"
                height="2"
                rx="1"
                transform="matrix(-1 0 0 1 10 13)"
                fill="white"
              ></rect>
            </svg>
          </span>
        </button>
      </div>
      <div
        className={`lg:hidden bg-[#571774f4] text-white ${
          navOpen ? "block" : "hidden"
        }`}
        id="navbarSupportedContent"
      >
        <ul className="flex flex-col items-center font-chelsea space-y-4 p-4">
        <li className="hoverable hover:text-[#ffd700]">
            <Link onClick={toggleNav} to="home" smooth={true} duration={500} className="nav_link">
              Home
            </Link>
          </li>
          <li className="hoverable hover:text-[#ffd700]">
            <Link
            onClick={toggleNav}
              to="about"
              smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
              About
            </Link>
          </li>
          <li className="hoverable hover:text-[#ffd700]">
            <Link
            onClick={toggleNav}
              to="incentives"
              smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
              Incentives
            </Link>
          </li>
          <li className="hoverable hover:text-[#ffd700]">
            <Link
            onClick={toggleNav}
              to="sponsors"
              smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
              Sponsors
            </Link>
          </li>
          <li className="hoverable hover:text-[#ffd700]">
            <Link
            onClick={toggleNav}
              to="faqs"
              smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
              FAQs
            </Link>
          </li>
          <li className="hoverable hover:text-[#ffd700]">
            <Link
            onClick={toggleNav}
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="nav_link"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
