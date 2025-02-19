import React, { useEffect, useState } from "react";
import { yourTurn, computerTurn } from "../../utils";
import { useShared } from "../../Context/SharedContext";

const TurnComponent = () => {
  const { isUserTurn } = useShared();
  const [randomIndex, setRandomIndex] = useState(0);
  
  useEffect (()=> {
    isUserTurn && setRandomIndex((Math.ceil(Math.random() * 4)) || 0);
  },[isUserTurn])

  return (
    <div className="text-3xl w-full mb-10 text-center">
      {isUserTurn ? yourTurn[randomIndex] : computerTurn[randomIndex]}
    </div>
  );
};

export default TurnComponent;

