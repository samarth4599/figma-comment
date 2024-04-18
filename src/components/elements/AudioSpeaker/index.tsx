"use client";
import AudioCancel from "@/components/atoms/AudioCancel";
import AudioPlay from "@/components/atoms/AudioPlay";
import AudioTimer from "@/components/atoms/AudioTimer";
import WaveMultiple from "@/components/atoms/WaveMultiple";
import React, { useMemo } from "react";
import { IAudioSpeakerProps } from "./types";

const AudioSpeaker: React.FC<IAudioSpeakerProps> = ({ style, audioChunks }) => {
  const waveSize = useMemo(() => 25 * 3.7 * 2 - 2, []);
  return (
    <div
      style={style}
      className="flex justify-between items-center bg-[#F4F5F6] p-2 gap-2 rounded-full"
    >
      <AudioPlay audioChunks={audioChunks} />
      <div style={{ minWidth: waveSize }} className="flex gap-[2px]">
        <WaveMultiple
          pills={25}
          loop={false}
          duration={100}
          recording={false}
          hasReset={true}
          defaultTransformed={true}
        />
      </div>
      <AudioTimer />
      <AudioCancel icon="delete" />
    </div>
  );
};

export default AudioSpeaker;
