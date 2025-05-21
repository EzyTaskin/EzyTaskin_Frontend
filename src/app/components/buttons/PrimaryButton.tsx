import React from "react";

const PrimaryButton = ({
                           label = "Post A Task", // default can be string
                           bgColor = "bg-[var(--color-primary)]",
                           textColor = "text-white",
                           width = "w-xs",
                           borderRadius = "rounded-full",
                           textSize = "text-xl",
                           borderStyle = "",
                           fontStyle = "",
                           onClick = () => {
                           },
                           disabled = false,
                       }: {
    label?: React.ReactNode;
    bgColor?: string;
    textColor?: string;
    width?: string;
    borderRadius?: string;
    textSize?: string;
    borderStyle?: string;
    fontStyle?: string;
    onClick?: () => void;
    disabled?: boolean;
}) => {
    return (
        <button
            className={`
        ${fontStyle} ${textSize} px-4 py-2 shadow-md 
        ${bgColor} ${textColor} ${width} ${borderRadius} ${borderStyle} 
        flex justify-center 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:opacity-70'}
    `}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};
export default PrimaryButton;
