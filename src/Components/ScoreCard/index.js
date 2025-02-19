import React from "react";
import { MusicNote, Trophy } from "@phosphor-icons/react";
import { useShared } from "../../Context/SharedContext";

const ScoreCard = () => {
  const { highScore, currentScore } = useShared();
  return (
    <div className="md:text-3xl flex gap-[2%] items-center justify-center my-[2%] w-full">
      <div className="flex w-[10%] justify-center items-center gap-[5%]">
        <Trophy size={54} />
        {highScore}
      </div>
      <div className="flex w-[10%] justify-center items-center gap-[5%]">
        <MusicNote size={54} />
        {currentScore}
      </div>
    </div>
  );
};

export default ScoreCard;

