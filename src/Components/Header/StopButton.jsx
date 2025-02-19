import React from "react";
import { StopCircle } from "@phosphor-icons/react";
import { useShared } from "../../Context/SharedContext";

const StopButton = () => {
  const { handleStop } = useShared();
  return (
      <StopCircle size={55} weight="light" className="theme cursor-pointer p-0 rounded-[50%]" onClick={() => handleStop()}/>
  );
};

export default StopButton;
