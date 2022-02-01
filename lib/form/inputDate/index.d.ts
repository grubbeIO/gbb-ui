import React from "react";
/**
 * Input date main controller
 * ------------------------------
 */
export interface InputDateProps {
    id: string;
    label?: string;
    inputDisplay?: "calendar" | "time" | "both";
}
export interface TimeProps {
    visible: boolean;
}
export declare const InputDate: React.ForwardRefExoticComponent<InputDateProps & React.RefAttributes<unknown>>;
