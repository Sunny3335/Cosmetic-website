import React from "react";
import { Whisper } from "next/font/google";
const whisper = Whisper({ subsets: ["latin"], weight: "400" });
const NewArrival = () => {
  return (
    <div className="container pr-32">
      <div className="text-center">
        <h3 className={`${whisper.className}`}>For your beauty</h3>
      </div>
    </div>
  );
};

export default NewArrival;
