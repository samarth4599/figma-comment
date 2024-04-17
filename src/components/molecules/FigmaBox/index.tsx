import PriorityStatus from "@/components/elements/PriorityStatus";
import React from "react";

const FigmaBox: React.FC = () => {
  return (
    <div className=" w-96 h-96 border-1 border-solid border-gray-300 dark:border-[#303034] rounded-xl shadow-lg bg-white dark:bg-[#141416]">
      <div className="flex flex-row p-4">
        <PriorityStatus />
      </div>
    </div>
  );
};

export default FigmaBox;
