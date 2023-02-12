import { UseFormRegisterReturn } from "react-hook-form";



export interface IInput {
    register: UseFormRegisterReturn<string>;
    placeholder: string;
    hasError?: boolean;
} 