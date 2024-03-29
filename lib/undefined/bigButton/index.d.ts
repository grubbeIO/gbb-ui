/// <reference types="react" />
export interface StylingBigButton {
    id?: string | undefined;
    type?: "email" | "link";
    theme?: "jungle" | "punch" | "studio" | "havelock";
}
export declare const BigButton: import("react").ForwardRefExoticComponent<StylingBigButton & import("react").RefAttributes<unknown>>;
