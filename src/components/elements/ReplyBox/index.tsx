"use client";

import TextArea from "@/components/atoms/TextArea";
import React, { useEffect, useMemo, useState } from "react";
import SelectableList from "../SelectableList";
import { mentions } from "@/constants";
import { TSelectables } from "@/types";
import Divider from "@/components/atoms/Divider";
import {
  ComputerDesktopIcon,
  FaceSmileIcon,
  MicrophoneIcon,
  PaperClipIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import AudioRecorder from "../AudioRecorder";
import { useAudioRecorder } from "@/providers/audioProvider";
import SendButton from "@/components/atoms/SendButton";
import { useAudioMessage } from "@/providers/messageProvider";

const ReplyBox = (style?: any) => {
  const [text, setText] = useState<string>("");
  const [showMentionBox, setShowMentionBox] = useState<boolean>(false);
  const [showAudioBox, setShowAudioBox] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<TSelectables>();

  const { audioChunks, reset } = useAudioRecorder();
  const { addMessage } = useAudioMessage();

  const handleTextChange = (e: any) => {
    const newText = e.target.value;
    setText(newText);

    if (newText.includes("@")) {
      setShowMentionBox(true);
    } else {
      setShowMentionBox(false);
    }
  };

  useEffect(() => {
    if (selectedItem) {
      const newText = text.replace("@", `${selectedItem.name} `);
      setText(newText);
      setShowMentionBox(false);
    }
  }, [selectedItem]);

  const onSend = () => {
    if (text || audioChunks.length) {
      addMessage(text, audioChunks);
      reset();
      setText("");
      setShowAudioBox(false);
      setSelectedItem(undefined);
    }
  };

  return (
    <div
      style={style}
      className=" relative w-full p-4 rounded-xl bg-white dark:bg-[#141416] border border-[#F4F5F6] dark:border-[#303034]"
    >
      <TextArea
        value={text}
        placeholder="Comment or type @ to add others"
        onChange={handleTextChange}
      />
      {showAudioBox && (
        <AudioRecorder style={{ marginTop: 10, marginBottom: 10 }} />
      )}
      <Divider style={{ marginTop: 6, marginBottom: 10 }} />
      <div className=" flex justify-between items-center">
        <div className="flex items-center gap-2 text-[#B1B5C3] dark:text-[#91919C]">
          <FaceSmileIcon className=" h-4 w-4" />
          <PaperClipIcon className=" h-4 w-4" />
          <MicrophoneIcon
            onClick={() => setShowAudioBox((val) => !val)}
            className=" h-4 w-4 cursor-pointer"
          />
          <VideoCameraIcon className=" h-4 w-4" />
          <ComputerDesktopIcon className=" h-4 w-4" />
        </div>
        <SendButton enabled={!!text || !!audioChunks.length} onClick={onSend} />
      </div>
      {showMentionBox && (
        <div className=" absolute top-12 z-50">
          <SelectableList
            items={mentions}
            setSelectedItem={setSelectedItem}
            setVisibility={setShowMentionBox}
          />
        </div>
      )}
    </div>
  );
};

export default ReplyBox;
