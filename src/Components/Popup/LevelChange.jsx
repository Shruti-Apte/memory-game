import React from "react";
import { motion } from "motion/react";
import { ArrowsClockwise, ThumbsUp } from "@phosphor-icons/react";

const LevelChange = () => {
  return (
    <div className="flex flex-col items-center justify-between h-[60%]">
      <div className="flex flex-col  items-center justify-center">
        <span className="text-2xl md:text-4xl mb-[10%]"> Switching Levels! </span>
        <motion.div
          animate={{ rotate: [0, 30, -30, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowsClockwise color="#59D5E0" size={60} />
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center text-xl md:text-3xl">
        <span className="mb-[2%]" style={{ color: "#C0E218" }}>
         Stay Sharp 👀
        </span>

        <div
          style={{ color: "#FF8383" }}
          className="flex items-center justify-center mt-[10%]"
        >
          <span>Good luck!</span>
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ThumbsUp className="ml-2" color="#FCC737" size={30} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LevelChange;
