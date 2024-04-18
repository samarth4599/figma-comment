"use client";
import { FlagIcon } from "@heroicons/react/24/outline";
import React, { useMemo, useState } from "react";
import SelectableList from "../../atoms/SelectableList";
import { priorities } from "@/constants";
import { TSelectables } from "@/types";
import { useTheme } from "next-themes";
import { getPriorityColor } from "@/utils/colorUtils";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

const PriorityStatus: React.FC<{ style?: any }> = ({ style }) => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<TSelectables>();
  const { theme } = useTheme();

  const colors = useMemo(
    () => getPriorityColor(selectedItem?.name, theme),
    [selectedItem, theme]
  );

  return (
    <div style={style} className="relative">
      <button
        style={{
          backgroundColor: colors.bg,
          color: colors.color,
        }}
        onClick={() => setVisibility(true)}
        className="flex flex-row justify-center items-center max-h-8 p-2 gap-[8px] rounded-2xl"
      >
        <FlagIcon className=" h-4 w-4" />
        {!!selectedItem && (
          <span className=" text-xs">{selectedItem?.name}</span>
        )}
        {visibility ? (
          <ChevronUpIcon className=" h-4 w-4" />
        ) : (
          <ChevronDownIcon className=" h-4 w-4" />
        )}
      </button>
      {visibility && (
        <div className=" absolute top-9 z-50">
          <SelectableList
            items={priorities}
            setSelectedItem={setSelectedItem}
            setVisibility={setVisibility}
          />
        </div>
      )}
    </div>
  );
};

export default PriorityStatus;
