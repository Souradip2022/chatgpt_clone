"use client"
import React from 'react';

interface HistoryShrinkableButtonProps {
  ref1: React.RefObject<HTMLDivElement>;
  ref2: React.RefObject<HTMLDivElement>;
  chatPage:React.RefObject<HTMLDivElement>;
  shrink:boolean;
  setShrink:React.Dispatch<React.SetStateAction<boolean>>;
  handleMouseEnter: any;
  handleMouseLeave: any;
}

function HistoryShrinkableButton({ref1, ref2, chatPage, shrink, setShrink, handleMouseEnter, handleMouseLeave}: HistoryShrinkableButtonProps) {
  return (
    <div
      className={`fixed left-0 top-1/2 z-40 transform translate-x-[320px] -translate-y-1/2 transition-all duration-300 ease-in-out 
        ${shrink && "translate-x-[3px]"}`}
    >
      <button onMouseEnter={(e) => handleMouseEnter(e)}
              onMouseLeave={(e) => handleMouseLeave(e)}
              onClick={(e) => setShrink((prev) => !prev)}>
          <span className="">
            <div className="flex h-[72px] w-8 items-center justify-center">
              <div className="flex h-7 w-6 flex-col items-center">
                <div
                  ref={ref1}
                  className=" invisible lg:visible lg:h-3.5 lg:w-1 rounded-full"
                  style={{
                    background: "#9b9b9b", transform: "translateY(0.15rem) rotate(0deg) translateZ(0px)",
                    transition: "all 0.3s ease"
                  }}
                ></div>
                <div
                  ref={ref2}
                  className=" invisible lg:visible lg:h-3.5 lg:w-1 rounded-full"
                  style={{
                    background: "#9b9b9b", transform: "translateY(-0.15rem) rotate(0deg) translateZ(0px)",
                    transition: "all 0.3s ease"
                  }}
                ></div>
              </div>
            </div>
            <span
              style={{
                position: "absolute", border: "0px", width: "1px", height: "1px", padding: "0px", margin: "-1px",
                overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", whiteSpace: "nowrap", overflowWrap: "normal",
              }}
            >Close sidebar</span>
          </span>
      </button>
    </div>
  );
}

export default HistoryShrinkableButton;