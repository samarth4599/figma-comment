"use client";
import UserPin from "@/components/atoms/UserPin";
import { AudioRecorderProvider } from "@/providers/audioProvider";
import { AudioMessageProvider } from "@/providers/messageProvider";
import React, { useState } from "react";
import FigmaBox from "../FigmaBox";

const PlayBoard: React.FC = () => {
  const [playBoardClicked, setPlayBoardClicked] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  return (
    <AudioMessageProvider>
      <AudioRecorderProvider>
        <div
          onClick={() => setPlayBoardClicked(true)}
          style={{ width: "70vw", height: "75vh" }}
          className=" bg-slate-300 dark:bg-slate-600 cursor-pointer flex items-center justify-center rounded-xl"
        >
          <div className="flex gap-3 cursor-default">
            {playBoardClicked && (
              <div
                className=" cursor-pointer"
                onClick={() => setShowMessage((v) => !v)}
              >
                <UserPin />
              </div>
            )}
            {showMessage && <FigmaBox />}
          </div>
        </div>
      </AudioRecorderProvider>
    </AudioMessageProvider>
  );
};

export default PlayBoard;
