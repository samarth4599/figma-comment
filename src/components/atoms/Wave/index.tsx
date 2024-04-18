"use client";
import { getRandomWaveHeight } from "@/utils/sizeUtils";
import { useEffect, useMemo, useState } from "react";
import { IWaveProps } from "./types";
import { useAudioRecorder } from "@/providers/audioProvider";

const Wave: React.FC<IWaveProps> = ({ index, loop, duration }) => {
  const [isTransformed, setIsTransformed] = useState<boolean>(false);
  const { recording, hasReset } = useAudioRecorder();
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
    if (loop || hasReset) {
      setIsTransformed(false);
    }
  }, [loop, hasReset]);

  return (
    <div
      style={{
        width: isTransformed ? "3.01px" : "4.67px",
        height: isTransformed ? `${randomHeight}px` : "4.67px",
        borderRadius: isTransformed ? "4px" : "5px",
        background: isTransformed ? "#625DF5" : "#B1B5C3",
        transition:
          "width 0.5s, height 0.5s, border-radius 0.5s, background-color 0.5s",
      }}
    ></div>
  );
};

export default Wave;
