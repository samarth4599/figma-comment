"use client";
import React, { useEffect, useRef } from "react";
import { ISelectableList } from "./types";

const SelectableList: React.FC<ISelectableList> = ({
  items,
  setSelectedItem,
  setVisibility,
  style,
}) => {
  const toggleRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      toggleRef.current &&
      !toggleRef.current.contains(event.target as Node)
    ) {
      setVisibility(false);
    } else {
      setTimeout(() => setVisibility(false), 100);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={style}
      ref={toggleRef}
      className="flex flex-col items-start min-w-48 border border-[#E6E8EC] dark:border-[#303034] bg-white dark:bg-[#141416] rounded-xl p-3 gap-3 shadow-md"
    >
      {items.map((item) => (
        <button
          className=" text-black dark:text-[#91919C] flex gap-2 w-full"
          key={item.id}
          onClick={() => setSelectedItem(item)}
        >
          <item.LeftIcon
            style={{ color: item.leftIconColor }}
            className=" h-5 w-5"
          />
          <div className="flex flex-col w-full">
            <span className=" text-left">{item.name}</span>
            <span className="text-[#777E90]">{item.sub}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default SelectableList;
