"use client";
import React from "react";
import Wave from "../Wave";
import { WaveMultipleProps } from "./types";

const WaveMultiple: React.FC<WaveMultipleProps> = ({
  pills,
  loop,
  duration,
  recording,
  hasReset,
  style,
  defaultTransformed = false,
}) => {
  return (
    <>
      {Array.from({ length: pills }, (_, index) => (
        <Wave
          key={index}
          style={style}
          index={index}
          loop={loop}
          duration={duration}
          recording={recording}
          hasReset={hasReset}
          defaultTransformed={defaultTransformed}
        />
      ))}
    </>
  );
};

export default WaveMultiple;
