/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").ForwardRefExoticComponent<Pick<import("react").PropsWithChildren<import(".").TableProps & import("react").ClassAttributes<HTMLTableElement> & import("react").TableHTMLAttributes<HTMLTableElement>>, "key" | keyof import("react").TableHTMLAttributes<HTMLTableElement> | keyof import(".").TableProps> & import("react").RefAttributes<unknown>>;
};
export default _default;
export declare const Basic: {
    (args: any): JSX.Element;
    args: {
        orientation: string;
        heading: string[];
    };
};
export declare const WithoutHeading: () => JSX.Element;
export declare const Underline: () => JSX.Element;
export declare const Orientation: () => JSX.Element;
