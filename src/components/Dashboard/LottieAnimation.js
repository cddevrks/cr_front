import React from "react";
import Lottie from "lottie-react";
import animationData from "./Animationflag.json"; // Update the path to your JSON file

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie animationData={animationData} className="h-[95px] w-[95px] mx-auto" loop={true}/>;
};

export default LottieAnimation;
