import React from "react";
import ChatSection from "@/components/ChatSection";
import HistoryChatSection from "@/components/HistoryChatSection";

export default function Home() {
  return (
    <main className="flex h-screen w-full relative">
      <HistoryChatSection/>
      <ChatSection/>
    </main>
  );
}