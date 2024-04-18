"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

export interface AudioMessage {
  message: string;
  audioChunks?: Blob[];
}

interface AudioMessageContextType {
  messages: AudioMessage[];
  addMessage: (message: string, audioChunks: Blob[]) => void;
}

const AudioMessageContext = createContext<AudioMessageContextType | null>(null);

export const useAudioMessage = () => {
  const context = useContext(AudioMessageContext);
  if (!context) {
    throw new Error(
      "useAudioMessage must be used within an AudioMessageProvider"
    );
  }
  return context;
};

export const AudioMessageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<AudioMessage[]>([
    { message: "Change the logo" },
  ]);

  const addMessage = (message: string, audioChunks: Blob[]) => {
    const newMessage: AudioMessage = { message, audioChunks };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const value: AudioMessageContextType = {
    messages,
    addMessage,
  };

  return (
    <AudioMessageContext.Provider value={value}>
      {children}
    </AudioMessageContext.Provider>
  );
};
