import React from "react";
import Start from "./Start";
import Stop from "./Stop";
import LevelChange from "./LevelChange";
import { useShared } from "../../Context/SharedContext";

const Popup = () => {
  const { handlePlay, showStopPopup, showLevelChange } = useShared();

  const renderPopup = () => {
    if (showStopPopup) return <Stop />;
    if (showLevelChange) return <LevelChange />;
    return <Start />;
  };
  

  return (
    <div className="reverse-theme absolute flex flex-col items-center justify-between h-[80%] w-[70%] md:w-[50%] top-1/2 left-1/2 z-10 transform translate-x-[-50%] translate-y-[-50%] rounded-[2%] p-[3%] shadow-dark dark:shadow-light">
       {renderPopup()}
      <button
        className="flex items-center theme md:text-2xl rounded-[5%] py-[1.5%] px-[5%] text-center cursor-pointer hover:border-2"
        onClick={handlePlay}
      >
        Play
      </button>
    </div>
  );
};

export default Popup;
