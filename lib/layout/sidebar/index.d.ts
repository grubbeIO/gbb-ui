import { HTMLAttributes } from "react";
import { Ichildren } from "../..";
import { THEMES } from "../../components/shared/styles";
export interface Ilayout {
    theme?: typeof THEMES[keyof typeof THEMES];
    dark?: boolean;
}
export interface Iitem {
    active?: boolean;
    icon?: React.ReactNode;
}
export interface Ibar {
    isOpen?: boolean;
}
export declare function SidebarLayout({ children, theme, ...rest }: Ichildren & Ilayout): JSX.Element;
export declare function Bar({ children, isOpen, ...rest }: Ichildren & Ibar): JSX.Element;
export declare namespace Bar {
    var Menu: ({ children, ...rest }: Ichildren) => JSX.Element;
    var Item: ({ children, active, icon, ...rest }: Ichildren & Iitem & HTMLAttributes<HTMLLIElement>) => JSX.Element;
    var FloatArrowTrigger: ({ children, ...rest }: Ichildren & HTMLAttributes<HTMLButtonElement>) => JSX.Element;
    var Footer: ({ children, ...rest }: Ichildren) => JSX.Element;
}
export declare function ContentOut({ children, ...rest }: Ichildren): JSX.Element;
