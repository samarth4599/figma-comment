"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useTheme } from "next-themes";
import React, { memo } from "react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 flex justify-center items-center rounded-full bg-slate-400 text-2xl"
    >
      {theme === "dark" ? (
        <SunIcon className=" w-1/2 text-yellow-300" />
      ) : (
        <MoonIcon className=" w-1/2 text-white" />
      )}
    </button>
  );
};

export default memo(ThemeToggle);
