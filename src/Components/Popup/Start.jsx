import React from "react";
import { motion } from "motion/react";

const Start = () => {
  return (
    <div className="flex flex-col items-center justify-between h-[70%]">
      <span className="text-base md:text-5xl">Hola!!</span>
      <div className="text-sm md:text-2xl flex flex-col items-center justify-evenly h-[60%]">
        <div className="text-base md:text-3xl flex" style={{ color: "#59D5E0" }}>
          How to Play 
          <motion.div
          className="mx-2 text-base md:text-4xl"
          animate={{ rotate: [0, -20, 20, -10, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
           ??
          </motion.div> 
        </div>
        <div className="flex flex-col items-center justify-center gap-[3%] md:gap-[10%] text-center">
          <span style={{ color: "#FCC737" }}>
            1.Hit play and watch the colors light up in a sequence
          </span>
          <span style={{ color: "#F94892" }}>
            2. Remember the order they appeared
          </span>
          <span style={{ color: "#9195F6" }}>
            3. Click the colors in the same sequence
          </span>
          <span style={{ color: "#C0E218" }}>
            4. Each round adds a new color to the sequence
          </span>
        </div>
      </div>
    </div>
  );
};

export default Start;
