"use client";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import React from "react";
import { ISendButtonProps } from "./types";

const SendButton: React.FC<ISendButtonProps> = ({
  onClick,
  enabled,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      className=" w-8 h-8 rounded-full flex justify-center items-center text-white bg-[#625DF5]"
      style={{
        opacity: enabled ? 1 : 0.5,
        ...style,
      }}
    >
      <ArrowRightIcon className=" w-2 h-2" />
    </button>
  );
};

export default SendButton;
