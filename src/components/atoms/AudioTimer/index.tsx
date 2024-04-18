"use client";
import { useAudioRecorder } from "@/providers/audioProvider";
import { formatTime } from "@/utils/timeUtils";
import React, { useEffect, useState } from "react";

const AudioTimer: React.FC = () => {
  const { recording, hasReset } = useAudioRecorder();
  const [recordTime, setRecordTime] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (recording) {
      timer = setInterval(() => {
        setRecordTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer!);
    }

    return () => {
      clearInterval(timer!);
    };
  }, [recording]);

  useEffect(() => {
    if (hasReset) {
      setRecordTime(0);
    }
  }, [hasReset]);

  return (
    <span className="text-[#777E90] text-sm">{formatTime(recordTime)}</span>
  );
};

export default AudioTimer;
