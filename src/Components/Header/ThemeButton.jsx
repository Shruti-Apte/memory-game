import * as motion from "motion/react-client";
import { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      className="toggle-container flex cursor-pointer items-center theme border-2 w-[50px] h-[25px] md:w-[70px] md:h-[35px] rounded-[50px]"
      style={{ justifyContent: "flex-" + (isOn ? "start" : "end")}}
      onClick={toggleSwitch}
    >
      <motion.div
        className="toggle-handle reverse-theme rounded-[50%] w-[21px] h-[21px] md:w-[31px] md:h-[31px]"
        layout
        transition={{
          type: "spring",
          visualDuration: 0.2,
          bounce: 0.2,
        }}
      />
    </button>
  );
}
