import React from "react";
export interface TableProps {
    orientation?: "vertical" | "horizontal";
    heading?: Array<string>;
}
export interface TRprops {
    underline?: boolean;
}
export declare const TR: import("styled-components").StyledComponent<"tr", any, TRprops, never>;
export declare const TD: import("styled-components").StyledComponent<"td", any, {}, never>;
export declare const TABLE: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<TableProps & React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement>>, "key" | keyof React.TableHTMLAttributes<HTMLTableElement> | keyof TableProps> & React.RefAttributes<unknown>>;
