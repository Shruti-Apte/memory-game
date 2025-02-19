/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Circle from "./Circle";
import sounds from "../sounds";
import { useShared } from "../../Context/SharedContext";
import { colors } from "../../utils";
import Toaster from "../Toaster";

const Circles = () => {
  const circleRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const {
    shouldPlay,
    setShouldPlay,
    setCurrentScore,
    handleStop,
    isUserTurn,
    setIsUserTurn,
    highScore,
    currentScore,
    memorySequence,
    setMemorySequence,
    userSequence,
    setUserSequence,
    level,
    showToaster,
    setShowToaster,
    setShowPopup,
    setShowStopPopup,
  } = useShared();
  const [ripplePosition, setRipplePosition] = useState(null);
  const [activeCircle, setActiveCircle] = useState(null);
  const [circles, setCircles] = useState([]);
  const [timeLeft, setTimeLeft] = useState(false);

  const playCircleSound = (index) => sounds[index]?.play();

  const playRippleEffect = (event, index) => {
    setRipplePosition(null); // to make double animation
    setActiveCircle(index);
    setTimeout(() => {
      const position = { x: event.target.clientX, y: event.target.clientY };
      setRipplePosition(position);
    }, 10);
  };

  const handleCircleClick = (event, index) => {
    sounds[10].stop();
    playRippleEffect(event, index);
    if (!isUserTurn) return playCircleSound(index);

    setUserSequence((prev) => {
      const newSequence = [...prev, index];
      return newSequence;
    });
  };

  const handlePlayerChange = () => {
    const timer = isUserTurn ? 1000 : memorySequence.length * 800;
    setTimeout(() => {
      setIsUserTurn(!isUserTurn);
    }, timer);
  };

  const calculateNextSequence = () => {
    const sequence = [...memorySequence];

    let randomIndex = Math.floor(Math.random() * circles.length);

    if (sequence.length >= 2 && level === "easy") {
      do {
        randomIndex = Math.floor(Math.random() * circles.length);
      } while (
        sequence.length >= 2 &&
        sequence[sequence.length - 1] === randomIndex
      );
    }

    if (sequence.length >= 2 && level !== "easy") {
      do {
        randomIndex = Math.floor(Math.random() * circles.length);
      } while (
        sequence.length >= 2 &&
        sequence[sequence.length - 1] === randomIndex &&
        sequence[sequence.length - 2] === randomIndex
      );
    }

    if (sequence.length >= 1 && level === "hard") {
      const isConsecutiveRepeat =
        sequence.length >= 2 && sequence[sequence.length - 1] === randomIndex;
      const exceedsMaxOccurrences =
        sequence.filter((num) => num === randomIndex).length >= 3;
      do {
        randomIndex = Math.floor(Math.random() * circles.length);
      } while (isConsecutiveRepeat || exceedsMaxOccurrences);
    }

    sequence.push(randomIndex);
    setMemorySequence(sequence);
  };

  const playSequence = () => {
    if (!isUserTurn) {
      memorySequence.forEach((seq, index) => {
        setTimeout(() => {
          circleRefs[seq].current?.click();
        }, index * 800);
      });
      setShouldPlay(false);
      handlePlayerChange();
      calculateNextSequence();
      setUserSequence([]);
    }
  };

  const compareSequences = () => {
    const tempSeq = [...memorySequence];
    tempSeq.pop();

    const areSequencesEqual = userSequence.every((val, i) => val === tempSeq[i]);

    if (tempSeq.length === userSequence.length && areSequencesEqual) {
      playCircleSound(activeCircle);
      handlePlayerChange();
      setShouldPlay(true);
      setCurrentScore((prevState) => prevState + 1);
    }

    if (areSequencesEqual) {
      playCircleSound(activeCircle);
    }

    if (!areSequencesEqual) {
      playCircleSound(7);
      handleStop();
    }
  };

  useEffect(() => {
    userSequence.length > 0 && compareSequences();
  }, [userSequence]);

  useEffect(() => {
    if (!isUserTurn && shouldPlay) {
      setTimeout(() => {
        playSequence();
      }, 1000);
    }
  }, [isUserTurn, shouldPlay]);

  useEffect(() => {
    if (highScore > 0 && currentScore === highScore + 1) {
      setTimeout(() => {
        setShowToaster(true);
        sounds[8].play();
      }, 800);
    }
  }, [currentScore]);

  useEffect(() => {
    setCircles(colors[level]);
  }, [level]);

  useEffect(() => {
    if (showToaster) {
      setTimeout(() => setShowToaster(false), 3000);
    }
  }, [showToaster]);

  useEffect(() => {
    if (isUserTurn) {
      setTimeLeft(memorySequence.length + 15);
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 4) {
            setShowToaster(true);
            sounds[10].play(); // Play sound when 3 seconds are left
          }
          if (prev <= 1) {
            clearInterval(timer);
            setShowPopup(true);
            setShowStopPopup(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isUserTurn]);

  return (
    <div className="flex flex-col w-full">
      <Toaster
        show={showToaster}
        message={
          currentScore === highScore + 1
            ? "New High Score!🎉 "
            : `${timeLeft} seconds left!⏰`
        }
      />
      <Circle
        ripplePosition={ripplePosition}
        activeCircle={activeCircle}
        handleCircleClick={handleCircleClick}
        circleRefs={circleRefs}
        isUserTurn={isUserTurn}
        circles={circles}
      />
    </div>
  );
};

export default Circles;
