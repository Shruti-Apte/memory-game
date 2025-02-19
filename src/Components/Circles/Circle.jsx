import React from "react";
import { motion } from "motion/react";

const Circle = ({
  handleCircleClick,
  ripplePosition,
  activeCircle,
  circleRefs,
  isUserTurn,
  circles,
}) => {
  return (
    <div className="w-full flex justify-center items-center gap-[2%]">
      {circles.map((color, index) => (
        <motion.div
          className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] rounded-[50%] cursor-pointer relative hover:shadow-dark hover:dark:shadow-light"
          ref={circleRefs[index]}
          key={index}
          onClick={(e) => handleCircleClick(e, index)}
          style={{
            pointerEvents: `${isUserTurn ? "auto" : "none"}`,
            backgroundColor: color,
          }}
        >
          {ripplePosition && activeCircle === index && (
            <motion.div
              style={{
                position: "absolute",
                top: `${ripplePosition.y - 40}px`,
                left: `${ripplePosition.x - 40}px`,
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundColor: color,
                opacity: 0.5,
                pointerEvents: "none",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Circle;
