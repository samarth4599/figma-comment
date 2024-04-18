import { FlagIcon } from "@heroicons/react/24/outline";
import { TSelectables } from "./types";
import { UserCircleIcon } from "@heroicons/react/16/solid";

export const priorities: TSelectables[] = [
  {
    id: "P0",
    name: "P0",
    LeftIcon: FlagIcon,
    leftIconColor: "#FF7162",
  },
  {
    id: "P1",
    name: "P1",
    LeftIcon: FlagIcon,
    leftIconColor: "#FFD166",
  },
  {
    id: "P2",
    name: "P2",
    LeftIcon: FlagIcon,
    leftIconColor: "#80808A",
  },
];

export const mentions: TSelectables[] = [
  {
    id: "1",
    name: "Kate Petrokhalko",
    LeftIcon: UserCircleIcon,
    leftIconColor: "red",
  },
  {
    id: "2",
    name: "Kate Petrokhalko",
    LeftIcon: UserCircleIcon,
    leftIconColor: "green",
  },
  {
    id: "3",
    name: "Kate Petrokhalko",
    LeftIcon: UserCircleIcon,
    leftIconColor: "blue",
  },
];
