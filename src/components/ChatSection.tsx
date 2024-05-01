"use client"
import React, {useEffect, useRef, useState} from 'react';
import {RiOpenaiFill} from "react-icons/ri";
import UserText from "@/components/sub_components/UserText";
import {Button} from "@/components/ui/button";
import {BsChevronCompactDown} from "react-icons/bs";
import HistoryShrinkableButton from "@/components/sub_components/HistoryShrinkableButton";

interface ChatSectionProps {
  shrink: boolean;
  setShrink: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatSection({shrink, setShrink}: ChatSectionProps) {

  // Create separate refs for each div
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const chatPage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatPage.current) {
      if (chatPage.current.offsetWidth < window.innerWidth) setShrink(false);
    }
  }, []);

  useEffect(() => {
    if (shrink) {
      if (ref1.current) {
        ref1.current.style.transform = "translateY(0.15rem) rotate(-15deg)";
        ref1.current.style.background = "#9b9b9b";
      }
      if (ref2.current) {
        ref2.current.style.transform = "translateY(-0.15rem) rotate(15deg)";
        ref2.current.style.background = "#9b9b9b";
      }
    }

  }, [shrink]);

  // Function to change styles
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ref1.current) {
      if (!shrink) ref1.current.style.transform = "translateY(0.15rem) rotate(15deg)";
      ref1.current.style.background = "#ececec";
    }
    if (ref2.current) {
      if (!shrink) ref2.current.style.transform = "translateY(-0.15rem) rotate(-15deg)";
      ref2.current.style.background = "#ececec";
    }
  };

  // Function to change styles
  function handleMouseLeave(e: React.MouseEvent<HTMLButtonElement>) {
    if (ref1.current) {
      if (!shrink) ref1.current.style.transform = "translateY(0.15rem) rotate(0deg)";
      ref1.current.style.background = "#9b9b9b";
    }
    if (ref2.current) {
      if (!shrink) ref2.current.style.transform = "translateY(-0.15rem) rotate(0deg)";
      ref2.current.style.background = "#9b9b9b";
    }
  }

  return (
    <>
      <HistoryShrinkableButton
        ref1={ref1} ref2={ref2} chatPage={chatPage} shrink={shrink} setShrink={setShrink}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}/>

      <div
        ref={chatPage}
        className={`h-full bg-[#212121] p-8 pb-3.5 w-full flex flex-col items-center justify-end relative 
        transition-all duration-300 ease-in-out
         ${shrink ? "lg:w-[calc(100%)]" : "lg:w-[calc(100%-320px)]"}`}>
        <Button variant="secondary"
                className="bg-[#212121] text-2xl absolute top-4 left-3 hover:bg-[#2f2f2f] px-5 py-7 rounded-2xl">
          ChatGPT 3.5
          <div className="mx-2 h-[20px] w-[20px] ">
            <BsChevronCompactDown className="h-full w-full" size={15}/>
          </div>
        </Button>

        <div className="absolute top-1/2 transform -translate-y-1/2">
          <div className=" relative bottom-8 flex flex-col gap-6 justify-center items-center">
            <RiOpenaiFill size={55}/>
            <p className="text-center text-2xl md:text-3xl font-medium">How can I help you today?</p>
          </div>
        </div>

        <div
          className="lg:max-w-[800px] lg:min-w-[680px] w-full flex flex-col gap-y-2 justify-center items-center mx-auto bottom-8">
          <div className="w-full relative">
            <UserText/>
          </div>
          <p className="text-sm text-[#CDCDCD] tracking-wide text-center">ChatGPT can make mistakes. Consider checking
            important information.</p>
        </div>
      </div>
    </>
  )

}

export default ChatSection;
