"use client";
import { getRandomWaveHeight } from "@/utils/sizeUtils";
import { useEffect, useMemo, useState } from "react";
import { IWaveProps } from "./types";

const Wave: React.FC<IWaveProps> = ({
  index,
  loop,
  duration,
  style,
  recording,
  hasReset,
  defaultTransformed = false,
}) => {
  const [isTransformed, setIsTransformed] =
    useState<boolean>(defaultTransformed);
  const randomHeight = useMemo(() => getRandomWaveHeight(), [loop]);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (recording && !hasReset) {
      timeout = setTimeout(() => {
        setIsTransformed(true);
      }, (index + 1) * duration);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [index, randomHeight, recording, hasReset]);

  useEffect(() => {
    if ((loop || hasReset) && !defaultTransformed) {
      setIsTransformed(false);
    }
  }, [loop, hasReset, defaultTransformed]);

  return (
    <div
      style={{
        width: isTransformed ? "3.01px" : "4.67px",
        height: isTransformed ? `${randomHeight}px` : "4.67px",
        borderRadius: isTransformed ? "4px" : "5px",
        background: isTransformed ? "#625DF5" : "#B1B5C3",
        transition:
          "width 0.5s, height 0.5s, border-radius 0.5s, background-color 0.5s",
        ...style,
      }}
    ></div>
  );
};

export default Wave;
