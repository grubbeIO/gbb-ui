import React from "react";
import { THEMES } from "../../components/shared/styles";
/**
 * Interfaces
 * ---------------------
 */
export interface TabsProps {
    theme?: typeof THEMES[keyof typeof THEMES];
}
export interface LinkTabProps {
    active?: boolean;
}
/**
 * Export elements and style
 * ---------------------------
 */
export declare const Tab: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Title: import("styled-components").StyledComponent<"h5", any, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Tabs: React.ForwardRefExoticComponent<Pick<React.PropsWithChildren<TabsProps & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>>, "theme" | "key" | keyof React.HTMLAttributes<HTMLDivElement>> & React.RefAttributes<unknown>>;
