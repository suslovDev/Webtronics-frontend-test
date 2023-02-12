export interface IAccordeon {
    title: string;
    text: string;
    isDriven: boolean
    id?: number;
    opened?: boolean;
    onClick?: (id: number) => void;
}
