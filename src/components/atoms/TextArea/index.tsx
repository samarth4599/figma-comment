"use client";

const TextArea = (props: any) => {
  return (
    <textarea
      className=" text-black dark:text-[#E5E5E9] bg-white dark:bg-[#141416] border-none overflow-auto outline-none shadow-none resize-none w-full font-light h-5"
      {...props}
    />
  );
};

export default TextArea;
