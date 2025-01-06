"use client";
import React, { useState, Suspense } from "react";
import ModalVideo from "react-modal-video";
// import TypingAnimation from "@/app/components/ui/typing-animation";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import { AnimatedBeamDemo } from "@/app/components/ui/animated-beam-multiple";
import BoxReveal from "../ui/box-reveal";
import { color } from "framer-motion";
// import Ripple from "@/app/components/ui/ripple"; // This is a custom component

const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  const theme = "dark"; // Define the theme variable
  const words = [
    {
      text: "Everything",
      className: "text-blue-white",
    },

    {
      text: "At",
      className: "text-blue-white",
    },
    {
      text: "One Place",
      className: "text-blue-500",
    },
    {
      text: ".",

      className: "text-blue-500",
    },
  ];
  return (
    <div className="bg-image relative" id="home-section">
      <div className="arrowOne"></div>
      <div className="radial-banner hidden lg:block"></div>
      {/* <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="1YyAzVmP9xQ"
        onClose={() => setOpen(false)}
      /> */}

<div className="mx-auto max-w-screen-2xl pt-24 lg:pt-48 sm:pb-32 px-4 md:px-8 overflow-x-hidden">
        <div className="height-work">
          <div className="grid grid-cols-1 lg:grid-cols-12 my-24 gap-8">
            <div className="arrowTwo"></div>
            <div className="col-span-8 max-w-2xl relative z-50 -ml-4">
              <TypewriterEffectSmooth words={words} />
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h3 className=" text-xl font-semibold uppercase tracking-wide fade-in my-2">
                  <span
                    style={{
                      backgroundColor: "#ffffff",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    One
                  </span>{" "}
                  <span
                    style={{
                      backgroundColor: "#00BFFF",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Alphagrep
                  </span>{" "}
                  :{" "}
                  <span
                    style={{
                      backgroundColor: "#ffffff",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    One
                  </span>{" "}
                  <span
                    style={{
                      backgroundColor: "#00BFFF",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Platform
                  </span>
                </h3>
              </BoxReveal>

              <div className="flex align-middle justify-center md:justify-start mt-6">
                <InteractiveHoverButton />
              </div>
            </div>

            <div className="col-span-4 lg:-m-48">
              {/* <div className="ml-25 mt-40"> */}{" "}
              {/* Adjust the margin as needed */}
              {/* <div className="fade-in"> */}
              <AnimatedBeamDemo />
              {/* </div> */}
              {/* </div> */}
              {/* <div className="arrowThree"></div> */}
              {/* <div className="arrowFour"></div> */}
              <div className="arrowFive"></div>
              <div className="relative -mt-8">
                {" "}
                {/* Added negative margin top */}
                {/* <Suspense fallback={<div>Loading...</div>}>
                  <Ripple className="absolute inset-0 z-0 fade-in" />
                </Suspense> */}
                {/* <Image
                  src="/images/Banner/banner.png"
                  alt="nothing"
                  width={1013}
                  height={760}
                  className="relative z-10"
                /> */}
              </div>
              <div className="arrowSix"></div>
              {/* <div className="arrowSeven"></div> */}
              <div className="arrowEight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
