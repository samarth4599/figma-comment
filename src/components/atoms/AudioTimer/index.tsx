"use client";
import { formatTime } from "@/utils/timeUtils";
import React from "react";
import { IAudioTimerProps } from "./interface";

const AudioTimer: React.FC<IAudioTimerProps> = ({ style, recordTime }) => {
  return (
    <span style={style} className="text-[#777E90] text-sm">
      {formatTime(recordTime)}
    </span>
  );
};

export default AudioTimer;
