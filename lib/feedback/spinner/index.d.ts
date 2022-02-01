import React from "react";
import { THEMES } from "../../components/shared/styles";
export interface SpinnerProps {
    size?: "small" | "medium" | "large";
    theme?: typeof THEMES[keyof typeof THEMES];
    inline?: boolean;
}
export declare const Spinner: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<SpinnerProps & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>>, "key" | keyof React.HTMLAttributes<HTMLSpanElement> | keyof SpinnerProps> & React.RefAttributes<unknown>>;
