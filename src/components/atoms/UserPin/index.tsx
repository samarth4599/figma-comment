import React from "react";

const UserPin: React.FC<{ style?: any }> = ({ style }) => {
  return (
    <div
      style={style}
      className=" w-8 h-8 flex justify-center items-center border-2 border-white border-transparent transform -rotate-90 bg-indigo-700 rounded-tl-sm rounded-br-full rounded-bl-full rounded-tr-full"
    >
      <div className="w-4 h-4 bg-red-500 rounded-full" />
    </div>
  );
};

export default UserPin;
