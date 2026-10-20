"use client";

import React from "react";

interface GeneratingLoaderProps {
  text?: string;
  size?: number;
}

export default function GeneratingLoader({ text = "Generating", size = 180 }: GeneratingLoaderProps) {
  const letters = text.split("");

  return (
    <div className="flex flex-col items-center justify-center select-none">
      <style>{`
        .loader-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: ${size}px;
          height: ${size}px;
          font-family: "Inter", sans-serif;
          font-size: ${size > 130 ? "1.2em" : size > 90 ? "0.9em" : "0.75em"};
          font-weight: 400;
          color: white;
          border-radius: 50%;
          background-color: transparent;
          user-select: none;
        }

        .loader {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          background-color: transparent;
          animation: loader-rotate 2s linear infinite;
          z-index: 0;
        }

        @keyframes loader-rotate {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 10px 20px 0 #fff inset,
              0 20px 30px 0 #ad5fff inset,
              0 60px 60px 0 #471eec inset;
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 10px 20px 0 #fff inset,
              0 20px 10px 0 #d60a47 inset,
              0 40px 60px 0 #311e80 inset;
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 10px 20px 0 #fff inset,
              0 20px 30px 0 #ad5fff inset,
              0 60px 60px 0 #471eec inset;
          }
        }

        .loader-letter {
          display: inline-block;
          opacity: 0.4;
          transform: translateY(0);
          animation: loader-letter-anim 2s infinite;
          z-index: 1;
          border-radius: 50ch;
          border: none;
        }

        @keyframes loader-letter-anim {
          0%,
          100% {
            opacity: 0.4;
            transform: translateY(0);
          }
          20% {
            opacity: 1;
            transform: scale(1.15);
          }
          40% {
            opacity: 0.7;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="loader-wrapper">
        {letters.map((char, index) => (
          <span
            key={index}
            className="loader-letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
        <div className="loader" />
      </div>
    </div>
  );
}
