import React from "react";
import { SmileyXEyes } from "@phosphor-icons/react";
import { motion } from "motion/react";
import ScoreCard from "../ScoreCard";

const Stop = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between h-[80%]">
      <span className="text-5xl">Oops!! </span>
      <div className="w-full flex flex-col justify-between items-center ">
        <div className="flex flex-col items-center justify-self-end">
          <motion.div
            animate={{ rotate: [0, 30, -30, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <SmileyXEyes size={70} />
          </motion.div>
          <span className="text-2xl mb-[5%]" style={{ color: "#FCC737" }}>
            Nice Try!
          </span>
        </div>
        <ScoreCard />
      </div>
      <div className="flex flex-col justify-between items-center">
        <div className="text-base md:text-xl mb-[3%]">
          <span style={{ color: "#F94892" }}>The colors won </span>
          <span style={{ color: "#9195F6" }}>this round.</span>
        </div>
        <span className="text-lg" style={{ color: "#C0E218" }}>
          Ready for a rematch?
        </span>
      </div>
    </div>
  );
};

export default Stop;
