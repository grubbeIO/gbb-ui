/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").ForwardRefExoticComponent<Pick<import("react").PropsWithChildren<import(".").SectionProps & import("react").ClassAttributes<HTMLElement> & import("react").HTMLAttributes<HTMLElement>>, "key" | "heading" | keyof import("react").HTMLAttributes<HTMLElement>> & import("react").RefAttributes<unknown>>;
};
export default _default;
export declare const Basic: {
    (args: any): JSX.Element;
    args: {
        heading: string;
    };
};
export declare const Simple: () => JSX.Element;
export declare const HeadingAndContent: () => JSX.Element;
export declare const MultipleSections: () => JSX.Element;
