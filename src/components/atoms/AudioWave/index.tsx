"use client";
import { useAudioRecorder } from "@/providers/audioProvider";
import React, { useEffect, useMemo, useState } from "react";
import WaveMultiple from "../WaveMultiple";
import { IAudioWaveProps } from "./types";

const AudioWave: React.FC<IAudioWaveProps> = ({
  duration = 500,
  pills = 10,
  style,
}) => {
  const [loop, setLoop] = useState(false);
  const { recording, hasReset } = useAudioRecorder();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (recording && !loop && !hasReset) {
      timeout = setTimeout(() => {
        setLoop(true);
      }, pills * duration);
    } else {
      setLoop(false);
    }

    return () => clearTimeout(timeout);
  }, [loop, recording, hasReset]);

  const waveSize = useMemo(() => pills * 3.7 * 2 - 2, [pills]);

  return (
    <div style={{ minWidth: waveSize, ...style }} className="flex gap-[2px]">
      <WaveMultiple
        pills={pills}
        loop={loop}
        duration={duration}
        recording={recording}
        hasReset={hasReset}
      />
    </div>
  );
};

export default AudioWave;
