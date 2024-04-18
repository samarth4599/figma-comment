"use client";
import { useAudioRecorder } from "@/providers/audioProvider";
import { TrashIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { IAudioCancelProps } from "./types";

const AudioCancel: React.FC<IAudioCancelProps> = ({ icon }) => {
  const { reset } = useAudioRecorder();

  return (
    <button onClick={reset}>
      {icon === "cross" ? (
        <XCircleIcon className=" text-[#FF7162] w-5 h-5" />
      ) : (
        <TrashIcon className=" text-[#FF7162] w-5 h-5" />
      )}
    </button>
  );
};

export default AudioCancel;
