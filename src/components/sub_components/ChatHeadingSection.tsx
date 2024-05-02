"use client"
import React from 'react';
import conversationData from "@/data/conversation.json";
import chatSection from "@/components/ChatSection";

function ChatHeadingSection() {
  const chatData = conversationData.dateWiseData;
  const dateWiseData = chatData.length;


  // console.log(chatData.length);

  // To select the "2024-03-25" object key
  const march25Object = chatData.find(obj => obj.hasOwnProperty("2024-03-25"));

  console.log(march25Object);

  return (
    <div>

    </div>
  );
}

export default ChatHeadingSection;