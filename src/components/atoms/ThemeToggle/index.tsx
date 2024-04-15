"use client";
import { useTheme } from "next-themes";
import React, { memo } from "react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 flex justify-center items-center rounded-full bg-slate-400 text-2xl"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default memo(ThemeToggle);
