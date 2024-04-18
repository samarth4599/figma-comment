"use client";
import { useAudioRecorder } from "@/providers/audioProvider";
import { PlayCircleIcon } from "@heroicons/react/16/solid";
import React from "react";
import { IAudioPlayProps } from "./types";

const AudioPlay: React.FC<IAudioPlayProps> = ({ style, audioChunks }) => {
  const { startRecording, playRecording, recording } = useAudioRecorder();

  const callback =
    audioChunks.length > 0 && !recording
      ? () => playRecording(audioChunks)
      : () => startRecording();

  return (
    <button style={style} onClick={callback}>
      <PlayCircleIcon className=" text-[#625DF5] w-5 h-5" />
    </button>
  );
};

export default AudioPlay;
