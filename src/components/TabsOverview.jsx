import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import questionMark from "../assets/questionMark.svg";
import gridIcon from "../assets/gridIcon.svg";

const TabsOverview = () => {
  const [activeTab, setActiveTab] = useState("About Me");
  const [hoveredTab, setHoveredTab] = useState(null);
  const [exitDirection, setExitDirection] = useState("right"); // track exit side

  const tabs = ["About Me", "Experiences", "Recommended"];

  return (
    <div
      className="relative rounded-[18.89px] flex flex-col items-center justify-start pt-10 px-6"
      style={{
        width: "720px",
        height: "316px",
        backgroundColor: "#363C43",
        boxShadow: "5.67px 5.67px 3.78px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* Top-left question icon */}
      <img
        src={questionMark}
        alt="help icon"
        className="absolute top-5 left-6 w-6 h-6"
      />

      {/* Tab bar */}
      <div
        className="flex items-center justify-between px-[8px] w-full max-w-[600px] h-[62px] -mt-6 rounded-[23px] bg-[#171717]"
        style={{
          boxShadow: "inset 0px 4.96px 12.4px 2.48px rgba(0, 0, 0, 0.25)",
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          const isHover = hoveredTab === tab;

          return (
           <button
  key={tab}
  onClick={() => {
    setActiveTab(tab);
    setHoveredTab(null); // remove hover immediately on tab switch
  }}
  onMouseEnter={() => {
    setHoveredTab(tab);
    setExitDirection("left"); // entering → left-to-right
  }}
  onMouseLeave={() => {
    setHoveredTab(null);
    setExitDirection("right"); // exiting → right-to-left
  }}
  className="relative flex-1 h-[49px] rounded-[16px] flex items-center justify-center font-[500] text-[20px] transition-all duration-300 text-center"
>
  {/* Active Pill */}
  {isActive && (
    <motion.div
      layoutId="active-pill"
      className="absolute inset-0 rounded-[16px] bg-[#28292F]"
      style={{
        boxShadow:
          "13.49px 16.87px 67.47px 8.43px #0A0A0A, -8.43px -16.87px 50.6px -16.87px #485B71",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  )}

  {/* Hover Effect */}
{/* Hover Effect */}
<AnimatePresence>
  {!isActive && isHover && (
    <motion.div
      className="absolute inset-0 rounded-[16px] z-0"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 0.9 }}
      exit={{ scaleX: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{
        transformOrigin:
          exitDirection === "left" ? "left" : "right",
        backgroundColor: "rgba(72, 91, 113, 0.2)", // solid slightly transparent color
      }}
    />
  )}
</AnimatePresence>


  <span
    className={`relative z-10 ${
      isActive ? "text-white" : "text-[#A3ADB2]"
    }`}
  >
    {tab}
  </span>
</button>

          );
        })}
      </div>

      {/* Content area */}
      <div
        className="mt-6 px-6 lg:px-10 overflow-hidden"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "20px",
          lineHeight: "120%",
          letterSpacing: "0%",
          color: "#969696",
        }}
      >
        <p>
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working
          at this awesome company for 3 years now.
        </p>
        <br />
        <p>
          I was born and raised in Albany, NY & have been living in Santa Carla
          for the past 10 years with my wife Tiffany and my 4-year-old twin
          daughters—Emma and Ella. Both of them are just starting school, so my
          calendar is usually blocked between 9-10 AM. This is a...
        </p>
      </div>

      {/* Bottom-left grid icon */}
      <img
        src={gridIcon}
        alt="grid icon"
        className="absolute left-6 opacity-90 z-10"
        style={{
          bottom: "150px",
          width: "30px",
          height: "33px",
        }}
      />

      {/* Right gradient rectangle */}
      <div
        className="absolute right-[20px] top-1/2 -translate-y-1/2 w-[8px] h-[64px] rounded-[8px] z-20"
        style={{
          background:
            "linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)",
          boxShadow: "4px 4px 4.9px 0px #00000040",
        }}
      />
    </div>
  );
};

export default TabsOverview;
