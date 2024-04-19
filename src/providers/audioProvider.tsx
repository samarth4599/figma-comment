"use client";
import React, {
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

interface AudioRecorderContextType {
  recording: boolean;
  hasReset: boolean;
  audioChunks: Blob[];
  startRecording: () => void;
  reset: () => void;
  stopRecording: () => void;
}

const AudioRecorderContext = createContext<AudioRecorderContextType | null>(
  null
);

export const useAudioRecorder = () => {
  const context = useContext(AudioRecorderContext);
  if (!context) {
    throw new Error(
      "useAudioRecorder must be used within an AudioRecorderProvider"
    );
  }
  return context;
};

export const AudioRecorderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [recording, setRecording] = useState<boolean>(false);
  const [hasReset, setHasReset] = useState<boolean>(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);

  const reset = () => {
    setHasReset(true);
    stopRecording();
    setTimeout(() => setAudioChunks([]), 200);
  };

  const startRecording = async () => {
    try {
      setHasReset(false);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = handleDataAvailable;
      mediaRecorder.start();
      setRecording(true);
      mediaRecorderRef.current = mediaRecorder;
      audioStreamRef.current = stream;
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      if (audioStreamRef.current) {
        audioStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    }
  };

  const handleDataAvailable = (event: BlobEvent) => {
    if (event.data.size > 0) {
      setAudioChunks((prevChunks) => [...prevChunks, event.data]);
    }
  };

  const value: AudioRecorderContextType = {
    audioChunks,
    reset,
    hasReset,
    recording,
    startRecording,
    stopRecording,
  };

  return (
    <AudioRecorderContext.Provider value={value}>
      {children}
    </AudioRecorderContext.Provider>
  );
};
