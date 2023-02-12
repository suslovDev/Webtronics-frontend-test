import { ButtonHTMLAttributes, FormEvent } from "react";

export interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type: "button" | "submit" | "reset" | undefined;
    text: string;
    size: "1" | "2";
    isDisabled?: boolean
}