import { PropsWithChildren } from "react";
export interface SectionProps {
    heading?: string;
}
export declare const Section: import("react").ForwardRefExoticComponent<Pick<PropsWithChildren<SectionProps & import("react").ClassAttributes<HTMLElement> & import("react").HTMLAttributes<HTMLElement>>, "key" | "heading" | keyof import("react").HTMLAttributes<HTMLElement>> & import("react").RefAttributes<unknown>>;
