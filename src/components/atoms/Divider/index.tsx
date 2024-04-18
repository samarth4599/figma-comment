import React from "react";

const Divider: React.FC<{ style?: any }> = ({ style }) => {
  return (
    <div
      style={style}
      className="w-full h-[1px] bg-[#E6E8EC] dark:bg-[#303034]"
    ></div>
  );
};

export default Divider;
