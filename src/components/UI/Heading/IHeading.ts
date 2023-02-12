import { CSSProperties, ReactNode } from "react";

export interface IHeading {
    size: "1" | "2" | "3" | "4";
    children: ReactNode;
    style?: CSSProperties
}