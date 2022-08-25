import React from "react";
import { THEMES } from "../../components/shared/styles";
declare const SIZES: {
    readonly SMALL: "small";
    readonly MEDIUM: "medium";
    readonly LARGE: "large";
};
export interface StylingProps {
    /**
     * El botón está desactivado?
     */
    disabled?: boolean;
    /**
     * Habilitado si el botón lleva icono.
     * Pendiente de edición...
     */
    containsIcon?: boolean;
    /**
     * Tamaño del botón
     */
    size?: typeof SIZES[keyof typeof SIZES];
    /**
     * Apariencia del botón
     */
    theme?: typeof THEMES[keyof typeof THEMES];
    /**
     * Botón en bordes
     */
    outline?: boolean;
    /**
     * Botón redondeado
     */
    rounded?: boolean;
    /**
     * Ancho completo según su contenedor
     */
    fullWidth?: boolean;
    weight?: "light" | "regular" | "medium" | "semibold" | "bold" | "black";
}
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, StylingProps, never>;
export interface ConfigProps {
}
export declare const Button: React.FC<StylingProps & React.HTMLAttributes<HTMLButtonElement>>;
export {};
