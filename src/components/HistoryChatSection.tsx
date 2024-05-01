"use client"
import React from 'react';
import {RiOpenaiFill} from "react-icons/ri";
import {MdOutlineOpenInNew} from "react-icons/md";
import Link from "next/link";
import conversationData from "@/data/conversation.json";

// console.log(conversationData);

interface HistoryChatSectionProps {
  shrink: boolean;
  smScreenHistory: boolean;
}

function HistoryChatSection({shrink, smScreenHistory}: HistoryChatSectionProps) {
  console.log(smScreenHistory);

  return (
    <div
      className={` lg:flex w-0 transition-all duration-300 ease-in-out bg-background
      ${shrink ? 'lg:w-0' : 'lg:w-[calc(320px)]'}
      ${smScreenHistory ? "flex flex-col absolute z-10 h-full left-0 top-0 w-[calc(320px)]" : "hidden"}`}>
      <nav className="h-full w-full">
        <div className="w-full px-3 pb-3.5">
          <div className="sticky w-full px-3 py-6">
            <Link href="/">
              <div className="relative flex w-full h-full justify-start align-middle gap-x-3">
                <RiOpenaiFill size={28} color={"#ececec"}/>
                <p className=" text-lg text-ellipsis text-[#ececec] font-medium tracking-tight ">New Chat</p>
                <MdOutlineOpenInNew
                  className="absolute right-4 top-1/2 transform -translate-y-1/2" size={25}
                  color={"#ececec"}/>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HistoryChatSection;