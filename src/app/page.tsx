"use client"
import React, {useState} from "react";
import ChatSection from "@/components/ChatSection";
import HistoryChatSection from "@/components/HistoryChatSection";

export default function Home() {
  const [shrink, setShrink] = useState<boolean>(false);

  return (
    <main className="flex h-screen w-full relative">
      <HistoryChatSection shrink={shrink} setShrink={setShrink} />
      <ChatSection shrink={shrink} setShrink={setShrink} />
    </main>
  );
}