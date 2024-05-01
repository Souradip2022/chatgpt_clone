"use client"
import React, {useState} from "react";
import ChatSection from "@/components/ChatSection";
import HistoryChatSection from "@/components/HistoryChatSection";

export default function Home() {
  const [shrink, setShrink] = useState<boolean>(false);
  const [smScreenHistory, setSmScreenHistory] = React.useState<boolean>(false);

  return (
    <main className="flex h-screen w-full relative">
      <HistoryChatSection shrink={shrink} smScreenHistory={smScreenHistory}/>
      <ChatSection
        shrink={shrink} setShrink={setShrink} smScreenHistory={smScreenHistory}
        setSmScreenHistory={setSmScreenHistory}/>
    </main>
  );
}