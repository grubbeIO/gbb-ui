import React from "react";
import { THEMES } from "../../components/shared/styles";
export interface ProgressbarProps {
    theme?: typeof THEMES[keyof typeof THEMES];
}
export interface BarProps {
    progress?: number;
}
export declare const Progressbar: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<ProgressbarProps & BarProps & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>>, "theme" | "progress" | "key" | keyof React.HTMLAttributes<HTMLSpanElement>> & React.RefAttributes<unknown>>;
