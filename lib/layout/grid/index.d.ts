import { PropsWithChildren } from "react";
import { DivProps } from "../..";
export interface GridGeneralProps {
    /** Margin Top */
    mt?: number;
    /** Margin Bottom */
    mb?: number;
    /** Margin left */
    ml?: number;
    /** Margin right */
    mr?: number;
    /** Padding horizontal */
    ph?: number;
    /** Padding vertical */
    pv?: number;
}
export interface RowProps {
    fullWidth?: boolean;
}
export interface ColProps {
    size?: number;
}
export declare function Row({ children, ...rest }: RowProps & GridGeneralProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element;
export declare const Col: React.FC<ColProps & GridGeneralProps & React.HTMLAttributes<HTMLDivElement>>;
export declare const Hcol: import("react").ForwardRefExoticComponent<Pick<PropsWithChildren<GridGeneralProps & DivProps & import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement>>, "key" | keyof import("react").HTMLAttributes<HTMLDivElement> | keyof DivProps | keyof GridGeneralProps> & import("react").RefAttributes<unknown>>;
