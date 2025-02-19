import React from "react";

import Popup from "./Popup";
import Header from "./Header";
import Levels from "./Levels";
import Circles from "./Circles";
import ScoreCard from "./ScoreCard";
import TurnComponent from "./TurnComponent";

import { useShared } from "../Context/SharedContext";

const AppWrapper = () => {
  const { showPopup } = useShared();
  return (
    <div className={`finger-font theme flex flex-col h-full min-h-screen`}>
      <Header />
      {showPopup ? (
        <Popup />
      ) : (
        <div className="w-full h-full flex flex-1 flex-col justify-between items-center">
          <ScoreCard />
          <div className="w-full mb-[5%]">
            <TurnComponent />
            <Circles />
          </div>
          <Levels />
        </div>
      )}
    </div>
  );
};

export default AppWrapper;
