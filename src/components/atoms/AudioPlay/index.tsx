"use client";
import { useAudioRecorder } from "@/providers/audioProvider";
import { PlayCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

const AudioPlay: React.FC = () => {
  const { startRecording } = useAudioRecorder();

  return (
    <button onClick={startRecording}>
      <PlayCircleIcon className=" text-[#625DF5] w-5 h-5" />
    </button>
  );
};

export default AudioPlay;
