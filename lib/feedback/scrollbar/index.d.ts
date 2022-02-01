import React from "react";
export interface ScrollbarProps {
}
export interface WrapperScrollProps {
    height?: string;
}
export declare const Scrollbar: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<ScrollbarProps & WrapperScrollProps & React.ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement>>, "height" | "key" | keyof React.HTMLAttributes<HTMLSpanElement>> & React.RefAttributes<unknown>>;
