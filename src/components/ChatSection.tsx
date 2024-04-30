import React from 'react';
import {RiOpenaiFill} from "react-icons/ri";
import UserText from "@/components/sub_components/UserText";

function ChatSection() {
  return (
    <div className="h-full bg-accent p-8 w-full lg:w-[calc(100%-320px)] flex flex-col items-center justify-end">
      <div className="absolute top-1/2 transform -translate-y-1/2 ">
        <div className="relative bottom-8 flex flex-col gap-6 justify-center items-center">
          <RiOpenaiFill size={60}/>
          <p className="text-center text-3xl font-medium">How can I help you today?</p>
        </div>
      </div>
      <div className="lg:max-w-[800px] lg:min-w-[680px] w-full relative mx-auto bottom-8">
        <UserText/>
      </div>
    </div>
  );
}

export default ChatSection;