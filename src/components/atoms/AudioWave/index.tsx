"use client";
import React, { useEffect, useMemo, useState } from "react";
import { IAudioWaveProps } from "./types";
import Wave from "../Wave";
import { useAudioRecorder } from "@/providers/audioProvider";

const AudioWave: React.FC<IAudioWaveProps> = ({
  duration = 500,
  pills = 10,
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

  const waveComponents = useMemo(
    () =>
      Array.from({ length: pills }, (_, index) => (
        <Wave key={index} index={index} loop={loop} duration={duration} />
      )),
    [loop, recording]
  );

  return (
    <div style={{ minWidth: waveSize }} className="flex gap-[2px]">
      {waveComponents}
    </div>
  );
};

export default AudioWave;
