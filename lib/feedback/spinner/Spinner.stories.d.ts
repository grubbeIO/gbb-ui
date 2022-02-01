/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").ForwardRefExoticComponent<Pick<import("react").PropsWithChildren<import(".").SpinnerProps & import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement>>, "key" | keyof import("react").HTMLAttributes<HTMLSpanElement> | keyof import(".").SpinnerProps> & import("react").RefAttributes<unknown>>;
};
export default _default;
export declare const Basic: {
    (args: any): JSX.Element;
    args: {
        theme: string;
    };
};
export declare const Sizes: () => JSX.Element;
export declare const ColorThemes: () => JSX.Element;
export declare const ColorInline: () => JSX.Element;
export declare const LoadingButton: () => JSX.Element;
