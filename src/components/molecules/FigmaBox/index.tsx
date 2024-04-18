import Divider from "@/components/atoms/Divider";
import PriorityStatus from "@/components/elements/PriorityStatus";
import ProgressStatus from "@/components/elements/ProgressStatus";
import ReplyBox from "@/components/elements/ReplyBox";
import { CheckIcon, EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import {
  ChatBubbleLeftEllipsisIcon,
  ClipboardIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const FigmaBox: React.FC = () => {
  return (
    <div className=" w-96 p-4 h-96 border-1 border-solid border-gray-300 dark:border-[#303034] rounded-xl shadow-lg bg-white dark:bg-[#141416]">
      <div className="flex flex-row pb-2 items-center justify-between">
        <div className="gap-2 flex">
          <ProgressStatus />
          <PriorityStatus />
        </div>
        <div className="flex gap-4">
          <EllipsisHorizontalIcon className="w-4 h-4 text-[#353945] dark:text-[#91919C]" />
          <ClipboardIcon className="w-4 h-4 text-[#353945] dark:text-[#91919C]" />
          <CheckIcon className="w-4 h-4 text-[#353945] dark:text-[#91919C]" />
        </div>
      </div>
      <Divider />
      <ReplyBox />
      <div className="gap-1 flex mt-6 justify-center items-center text-[#625DF5] dark:text-[#494960]">
        <ChatBubbleLeftEllipsisIcon className="  w-5 h-5" />
        <span>All comments</span>
      </div>
    </div>
  );
};

export default FigmaBox;
