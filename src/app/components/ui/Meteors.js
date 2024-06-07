"use client"
import { cn } from "../utils/cn";
import clsx from "clsx";
import React from "react";

const Meteors = ({ number, className }) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <div className="absolute top-0 left-0 w-full h-[75vh] overflow-hidden z-[-1]">
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute",
            "h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: `${Math.random() * 100}vh`, // Random top position
            left: `${Math.random() * 100}vw`, // Random left position
            animationDelay: `${Math.random() * 0.6 + 0.2}s`, // Random animation delay
            animationDuration: `${Math.random() * 8 + 2}s`, // Random animation duration
          }}
        />
      ))}
    </div>
  );
};

export default Meteors;
