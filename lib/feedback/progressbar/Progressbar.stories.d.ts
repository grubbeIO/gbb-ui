/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").ForwardRefExoticComponent<Pick<import("react").PropsWithChildren<import(".").ProgressbarProps & import(".").BarProps & import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement>>, "theme" | "progress" | "key" | keyof import("react").HTMLAttributes<HTMLSpanElement>> & import("react").RefAttributes<unknown>>;
};
export default _default;
export declare const Basic: {
    (args: any): JSX.Element;
    args: {
        theme: string;
    };
};
export declare const ThemeColors: () => JSX.Element;
export declare const LoadingProgress: () => JSX.Element;
