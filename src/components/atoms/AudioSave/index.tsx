"use client";
import { useAudioRecorder } from "@/providers/audioProvider";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const AudioSave: React.FC = () => {
  const { stopRecording } = useAudioRecorder();

  return (
    <button onClick={stopRecording}>
      <CheckCircleIcon className=" text-[#0DCF82] w-4 h-4" />
    </button>
  );
};

export default AudioSave;
