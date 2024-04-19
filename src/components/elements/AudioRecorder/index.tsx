"use client";
import AudioCancel from "@/components/atoms/AudioCancel";
import AudioPlay from "@/components/atoms/AudioPlay";
import AudioSave from "@/components/atoms/AudioSave";
import AudioTimer from "@/components/atoms/AudioTimer";
import AudioWave from "@/components/elements/AudioWave";
import { useAudioRecorder } from "@/providers/audioProvider";
import React, { useEffect, useState } from "react";

const AudioRecorder: React.FC<{ style?: any }> = ({ style }) => {
  const [recordTime, setRecordTime] = useState<number>(0);
  const { recording, hasReset, startRecording } = useAudioRecorder();

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
    <div
      style={style}
      className="flex justify-between items-center bg-[#F4F5F6] p-2 gap-2 rounded-full"
    >
      {recording ? (
        <AudioCancel icon="cross" />
      ) : (
        <AudioPlay callback={startRecording} />
      )}
      <AudioWave pills={25} />
      <AudioTimer recordTime={recordTime} />
      {recording ? <AudioSave /> : <AudioCancel icon="delete" />}
    </div>
  );
};

export default AudioRecorder;
