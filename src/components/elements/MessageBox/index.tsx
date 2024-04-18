"use client";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { IMessageBoxProps } from "./types";
import AudioSpeaker from "../AudioSpeaker";

const MessageBox: React.FC<IMessageBoxProps> = ({ message, style }) => {
  return (
    <div style={style} className="flex gap-2">
      <UserCircleIcon className=" w-8 h-8 rounded-full bg-red-300" />
      <div className="gap-2 flex flex-col items-start">
        <span className=" text-base font-semibold text-black dark:text-white">
          Me
        </span>
        <div className="flex gap-3 items-center justify-center">
          <span className=" text-xs text-[rgb(177,181,195)] dark:text-[#91919C]">
            7 min. ago
          </span>
          <div className="flex gap-1 items-center justify-center">
            <ComputerDesktopIcon className=" w-3 h-3 text-[#B1B5C3] dark:text-[#80808A]" />
            <span className=" text-xs text-[#B1B5C3] dark:text-[#80808A]">
              Desktop
            </span>
          </div>
        </div>
        <div className=" text-[#23262F] dark:text-[#E5E5E9]">
          {message.message}
        </div>
        {!!message.audioChunks && message.audioChunks.length > 0 && (
          <AudioSpeaker audioChunks={message.audioChunks} />
        )}
      </div>
    </div>
  );
};

export default MessageBox;
