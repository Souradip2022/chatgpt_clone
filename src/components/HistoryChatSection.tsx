"use client"
import React from 'react';

interface HistoryChatSectionProps {
  shrink: boolean;
  setShrink: React.Dispatch<React.SetStateAction<boolean>>;
}

function HistoryChatSection({shrink, setShrink}: HistoryChatSectionProps) {
  return (
    <div className={`hidden lg:flex lg:w-[calc(320px)] w-0 transition-all duration-300 ease-in-out ${shrink ? 'lg:w-0' : 'lg:w-[calc(320px)]'}`}>
      <div className="w-full px-3 pb-3.5">
        <div className="sticky">

        </div>
      </div>
    </div>
  );
}

export default HistoryChatSection;