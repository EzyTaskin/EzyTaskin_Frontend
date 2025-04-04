import React from "react";

const PrimaryButton = ({
  label = "Post a task",
  bgColor = "bg-[var(--color-primary)]",
  textColor = "text-white",
  onClick = () => {},
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-full shadow-md ${bgColor} ${textColor} hover:opacity-70`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
