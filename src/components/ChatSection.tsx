"use client"
import React, {useEffect, useRef, useState} from 'react';
import {RiOpenaiFill} from "react-icons/ri";
import UserText from "@/components/sub_components/UserText";
import {Button} from "@/components/ui/button";
import {BsChevronCompactDown} from "react-icons/bs";
import HistoryShrinkableButton from "@/components/sub_components/HistoryShrinkableButton";
import {MdOutlineOpenInNew} from "react-icons/md";
import {BiMenuAltLeft} from "react-icons/bi";
import {RxCross1} from "react-icons/rx";

interface ChatSectionProps {
  shrink: boolean;
  setShrink: React.Dispatch<React.SetStateAction<boolean>>;
  smScreenHistory: boolean;
  setSmScreenHistory: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatSection({shrink, setShrink, smScreenHistory, setSmScreenHistory}: ChatSectionProps) {

  // Create separate refs for each div
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const chatPage = useRef<HTMLDivElement>(null);

  const [iconSize, setIconSize] = React.useState<number>(window.innerWidth >= 1024 ? 24 : 30);


  useEffect(() => {

    const handleResize = () => {
      setIconSize(() => window.innerWidth >= 1024 ? 24 : 30);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  useEffect(() => {

  }, [])

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
        transition-all duration-300 ease-in-out ${shrink ? "lg:w-[calc(100%)]" : "lg:w-[calc(100%-320px)]"}`}>

        <div className="absolute w-full top-0 left-0 h-16  border-b border-gray-500 lg:hidden"></div>

        <Button
          variant="secondary"
          className={`bg-[#212121] absolute top-2.5 hover:bg-[#2f2f2f] rounded-md  w-fit p-1 border hover:opacity-85 lg:hidden active:border-[#ececec] transition-all transform duration-250
          ${smScreenHistory ? "left-[328px] border-[#ececec]" : "left-6"}`}
          onClick={() => setSmScreenHistory((prevState) => !prevState)}>
          {smScreenHistory ? <RxCross1 size={30} color={"#ececec"}/> : <BiMenuAltLeft size={33} color={"#ececec"}/>}

        </Button>

        <Button
          variant={"secondary"}
          className={`bg-[#212121] text-2xl absolute lg:top-3.5 top-2.5 hover:bg-[#2f2f2f] lg:px-2 lg:py-5 rounded-md right-6 w-fit lg:left-5  lg:flex p-0 lg:border border-gray-600 hover:border-gray-400
          ${!shrink && 'lg:hidden'}`}>
          <MdOutlineOpenInNew size={iconSize} color={"#ececec"}/>
        </Button>

        <Button
          variant="secondary"
          className={`bg-[#212121] text-2xl lg:text-xl absolute lg:top-2 top-0 hover:bg-[#2f2f2f] px-3 py-7 rounded-2xl 
          ${shrink ? "lg:left-[75px]" : "lg:left-3 "}`}>
          ChatGPT 3.5
          <div className="mx-2 h-[20px] w-[20px] flex">
            <BsChevronCompactDown className="h-full w-full" size={15}/>
          </div>
        </Button>


        <div className="absolute top-1/2 transform -translate-y-1/2">
          <div className=" relative bottom-8 flex flex-col gap-6 justify-center items-center">
            <RiOpenaiFill size={55}/>
            <p className="text-center text-xl md:text-3xl font-medium">How can I help you today?</p>
          </div>
        </div>

        <div
          className="lg:max-w-[800px] lg:min-w-[570px] w-full flex flex-col gap-y-2 justify-center items-center mx-auto bottom-8">
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
