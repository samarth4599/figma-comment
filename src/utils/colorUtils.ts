import { TPriorityColors } from "@/types";

export const getPriorityColor = (
  priority: string | undefined,
  theme: string | undefined
): TPriorityColors => {
  switch (priority) {
    case "P0":
      return {
        bg: theme === "dark" ? "#FF7162" : "#F7E7E7",
        color: theme === "dark" ? "white" : "#FF7162",
      };
    case "P1":
      return {
        bg: theme === "dark" ? "#EAB308" : "#FEF3F7",
        color: theme === "dark" ? "white" : "#FFD166",
      };
    case "P2":
      return { bg: theme === "dark" ? "#222226" : "#f4f5f6", color: "#555a69" };
    default:
      return { bg: theme === "dark" ? "#222226" : "#f4f5f6", color: "#555a69" };
  }
};
