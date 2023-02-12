export interface IArrow {
    to: "prev" | "next";
    onClick: React.MouseEventHandler<HTMLButtonElement>
}