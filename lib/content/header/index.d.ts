import { HTMLAttributes } from 'react';
export interface Ichildren {
    children?: any;
}
export interface Inav {
    orientation?: "vertical" | "horizontal";
    align?: "start" | "center" | "end" | "split";
}
export declare function Header({ children, ...rest }: Ichildren & Inav & HTMLAttributes<HTMLHeadElement>): JSX.Element;
export declare function Nav({ children, ...rest }: Ichildren & Inav & HTMLAttributes<HTMLDivElement>): JSX.Element;
export declare namespace Nav {
    var Item: ({ children, ...rest }: Ichildren) => JSX.Element;
    var Section: ({ children, ...rest }: Ichildren) => JSX.Element;
}
