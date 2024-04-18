import Divider from "@/components/atoms/Divider";
import PriorityStatus from "@/components/elements/PriorityStatus";
import ProgressStatus from "@/components/elements/ProgressStatus";
import ReplyBox from "@/components/elements/ReplyBox";
import React from "react";

const FigmaBox: React.FC = () => {
  return (
    <div className=" w-96 p-4 h-96 border-1 border-solid border-gray-300 dark:border-[#303034] rounded-xl shadow-lg bg-white dark:bg-[#141416]">
      <div className="flex flex-row pb-2">
        <ProgressStatus />
        <PriorityStatus />
      </div>
      <Divider />
      <ReplyBox />
    </div>
  );
};

export default FigmaBox;
