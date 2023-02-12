import { CSSProperties, ReactNode } from "react";

export interface IParagraph {
    size: "1" | "2";
    children: ReactNode;
    style?: CSSProperties
}