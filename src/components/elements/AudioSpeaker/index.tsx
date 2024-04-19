"use client";
import AudioCancel from "@/components/atoms/AudioCancel";
import AudioPlay from "@/components/atoms/AudioPlay";
import AudioTimer from "@/components/atoms/AudioTimer";
import WaveMultiple from "@/components/atoms/WaveMultiple";
import { createAudio, playRecording } from "@/utils/audioUtils";
import React, { useEffect, useMemo, useState } from "react";
import { IAudioSpeakerProps } from "./types";

const AudioSpeaker: React.FC<IAudioSpeakerProps> = ({ style, audioChunks }) => {
  const audio = useMemo(() => createAudio(audioChunks), [audioChunks]);
  const [recordTime, setRecordTime] = useState<number>(0);
  const waveSize = useMemo(() => 25 * 3.7 * 2 - 2, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (audio) {
      const handleTimeUpdate = () => {
        timeout = setInterval(() => {
          setRecordTime((v) => v + 1);
        }, 1000);
      };

      const endTime = () => {
        clearTimeout(timeout);
        setRecordTime(0);
      };

      audio.addEventListener("playing", handleTimeUpdate);
      audio.addEventListener("ended", endTime);

      return () => {
        audio.removeEventListener("playing", handleTimeUpdate);
        audio.removeEventListener("ended", endTime);
        if (timeout) {
          clearTimeout(timeout);
        }
      };
    }
  }, [audio]);

  return (
    <div
      style={style}
      className="flex justify-between items-center bg-[#F4F5F6] p-2 gap-2 rounded-full"
    >
      <AudioPlay callback={() => (audio ? playRecording(audio) : null)} />
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
      <AudioTimer recordTime={recordTime} />
      <AudioCancel icon="delete" />
    </div>
  );
};

export default AudioSpeaker;
