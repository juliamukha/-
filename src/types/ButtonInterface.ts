import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IButton {
    isDisabled: boolean,
    clickFunction?: () => void,
    typeButton: string,
    action?: "submit" | "reset" | "button" | undefined,
    children?: string
}


export interface IIconButton {
    isDisabled: boolean,
    clickFunction?: () => void,
    hoverFunction?: () => void,
    unhoverFunction?: () => void,
    typeButton?: string,
    titleButton: string,
    fontAwesome: IconProp,
    idButton?: string
}