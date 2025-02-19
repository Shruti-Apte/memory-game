import React, { useState, createContext, useContext } from "react";

const SharedContext = createContext("");

export const SharedProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [showStopPopup, setShowStopPopup] = useState(false);
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [memorySequence, setMemorySequence] = useState([2]);
  const [userSequence, setUserSequence] = useState([]);
  const [level, setLevel] = useState("easy");
  const [showLevelChange, setShowLevelChange] = useState(false);
  const [showToaster, setShowToaster] = useState(false);

  const handleStop = () => {
    if(currentScore > highScore) {
      setHighScore(currentScore);
    }
    setShowPopup(true);
    setShowStopPopup(true);
    setUserSequence([]);
    setMemorySequence([0]);
  };


  const handlePlay = () => {
    setCurrentScore(0);
    setShouldPlay(true);
    setShowPopup(false);
    setShowStopPopup(false);
    setShowLevelChange(false);
    setIsUserTurn(false);
    setUserSequence([]);
    setMemorySequence([0]);
  };

  const handleLevel = (lev) => {
    setLevel(lev.value);
    setShowLevelChange(true);
    setShowPopup(true);
    setUserSequence([]);
    setMemorySequence([0]);
}

  return (
    <SharedContext.Provider
      value={{
        showPopup,
        setShowPopup,
        shouldPlay,
        setShouldPlay,
        highScore,
        setHighScore,
        currentScore,
        setCurrentScore,
        isUserTurn,
        setIsUserTurn,
        showStopPopup,
        setShowStopPopup,
        handleStop,
        handlePlay,
        memorySequence,
        setMemorySequence,
        userSequence,
        setUserSequence,
        handleLevel,
        showLevelChange,
        level,
        showToaster,
        setShowToaster,
      }}
    >
      {children}
    </SharedContext.Provider>
  );
};
export const useShared = () => useContext(SharedContext);
