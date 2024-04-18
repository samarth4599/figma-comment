"use client";
import AudioCancel from "@/components/atoms/AudioCancel";
import AudioPlay from "@/components/atoms/AudioPlay";
import AudioSave from "@/components/atoms/AudioSave";
import AudioTimer from "@/components/atoms/AudioTimer";
import AudioWave from "@/components/atoms/AudioWave";
import { useAudioRecorder } from "@/providers/audioProvider";
import React from "react";

const AudioRecorder: React.FC = () => {
  const { recording } = useAudioRecorder();
  return (
    <div className="flex justify-between items-center bg-[#F4F5F6] p-2 gap-2 rounded-full">
      {recording ? <AudioCancel icon="cross" /> : <AudioPlay />}
      <AudioWave pills={25} />
      <AudioTimer />
      {recording ? <AudioSave /> : <AudioCancel icon="delete" />}
    </div>
  );
};

export default AudioRecorder;
