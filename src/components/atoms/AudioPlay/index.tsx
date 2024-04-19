"use client";
import { PlayCircleIcon } from "@heroicons/react/16/solid";
import React from "react";
import { IAudioPlayProps } from "./types";

const AudioPlay: React.FC<IAudioPlayProps> = ({ style, callback }) => {
  return (
    <button style={style} onClick={callback}>
      <PlayCircleIcon className=" text-[#625DF5] w-5 h-5" />
    </button>
  );
};

export default AudioPlay;
