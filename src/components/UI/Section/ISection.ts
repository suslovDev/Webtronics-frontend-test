import { CSSProperties, ReactNode } from "react";

export interface ISection {
    name: "header" | "footer" | "section";
    align: "left" | "center" | "right";
    style?: CSSProperties;
    children: ReactNode
}