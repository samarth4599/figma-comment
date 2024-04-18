import { TSelectables } from "@/types";

export interface ISelectableList {
  items: TSelectables[];
  setSelectedItem: React.Dispatch<
    React.SetStateAction<TSelectables | undefined>
  >;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  style?: any;
}
