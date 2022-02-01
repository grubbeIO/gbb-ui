import { PropsWithChildren } from "react";
export interface DivProps {
    line?: number;
    align?: 'left' | 'center' | 'right';
}
export interface TextProps {
    color?: string;
    weight?: "light" | "regular" | "medium" | "semibold" | "bold" | "black";
}
export declare const H1: import("styled-components").StyledComponent<"h1", any, TextProps, never>;
export declare const H2: import("styled-components").StyledComponent<"h2", any, TextProps, never>;
export declare const H3: import("styled-components").StyledComponent<"h3", any, TextProps, never>;
export declare const H4: import("styled-components").StyledComponent<"h4", any, TextProps, never>;
export declare const H5: import("styled-components").StyledComponent<"h5", any, TextProps, never>;
export declare const H6: import("styled-components").StyledComponent<"h5", any, TextProps, never>;
export declare const P: import("styled-components").StyledComponent<"p", any, TextProps, never>;
export declare const Label: import("styled-components").StyledComponent<"label", any, TextProps, never>;
export declare const Medium: import("styled-components").StyledComponent<"span", any, TextProps, never>;
export declare const Small: import("styled-components").StyledComponent<"small", any, {}, never>;
export declare const Div: import("react").ForwardRefExoticComponent<Pick<PropsWithChildren<DivProps & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement> | keyof DivProps> & import("react").RefAttributes<unknown>>;
