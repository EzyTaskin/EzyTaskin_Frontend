import React from "react";

const PrimaryButton = ({
  label = "Post a task", // default can be string
  bgColor = "bg-[var(--color-primary)]",
  textColor = "text-white",
  width = "w-xs",
  borderRadius = "rounded-[25px]",
  onClick = () => {},
}: {
  label?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  width?: string;
  borderRadius?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`font-bold text-[22px] px-4 py-2 shadow-md ${bgColor} ${textColor} ${width} ${borderRadius} hover:opacity-70 flex justify-center`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
