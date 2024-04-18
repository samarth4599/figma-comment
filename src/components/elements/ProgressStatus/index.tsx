import { ChevronDownIcon, CircleStackIcon } from "@heroicons/react/16/solid";
import React from "react";

const ProgressStatus: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex bg-[#E7E8FA] text-[#625DF5] dark:bg-[#625DF5] dark:text-[#E7E8FA] flex-row justify-center items-center max-h-8 p-2 gap-[4px] rounded-2xl">
        <CircleStackIcon className=" h-3 w-3" />
        <span className=" text-xs">Open</span>
        <ChevronDownIcon className=" h-4 w-4" />
      </div>
    </div>
  );
};

export default ProgressStatus;
