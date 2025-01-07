"use client";
import React, { useState, useEffect } from "react";
import InteractiveHoverButton from "../ui/interactive-hover-button";
import { AnimatedBeamDemo } from "@/app/components/ui/animated-beam-multiple";
import BoxReveal from "../ui/box-reveal";

const Banner = () => {
  const words =  [
    'Traders ',
    'Management ',
    'Business Development ',
    'Data',
    'DevOps ',
    'Everyone.'
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const typingSpeed =70; // Typing speed (ms)
  const deletingSpeed = 50; // Deleting speed (ms)
  const delayBetweenWords = 2000; // Delay before switching words (ms)

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing characters
        if (charIndex < currentWord.length) {
          setDisplayedText(currentWord.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting characters
        if (charIndex > 0) {
          setDisplayedText(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const typingTimer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, currentWordIndex, words]);

  return (
    <div className="bg-image relative" id="home-section">
      <div className="arrowOne"></div>
      <div className="radial-banner hidden lg:block"></div>
      <div className="mx-auto max-w-7xl pt-24 lg:pt-48 sm:pb-32 px-8">
        <div className="height-work">
          <div className="grid grid-cols-1 lg:grid-cols-12 my-24 gap-8">
            <div className="arrowTwo"></div>
            <div className="col-span-8 max-w-2xl relative z-50 -ml-4">
              <h1 className="text-blue-white text-4xl md:text-5xl font-bold">
              {/* <span style={{ color: 'rgb(221, 255, 0)' }}> */}
              <span style={{ color: '#00BFFF' }}>
  For
</span>&nbsp;
                {displayedText}
                <span className="typed-cursor">|</span>
              </h1>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h3 className="text-xl font-semibold uppercase tracking-wide fade-in my-2 mt-5">
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
              <AnimatedBeamDemo />
              <div className="arrowFive"></div>
              <div className="relative -mt-8"></div>
              <div className="arrowSix"></div>
              <div className="arrowEight"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
