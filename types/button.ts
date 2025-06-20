import { ButtonHTMLAttributes } from "react";

export type SpidermanButtonProps = {
    buttonName: string;
    hoverBtnName: string;
    btnClassName?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'default';
    handleButtonClick: (e: any) => void;
}

export type ValorantButtonProps = {
    text?: string;
    buttonColor?: number;
    textColor?: string;
    variant?: 'default' | 'liquid' | 'neon' | 'warp';
} & ButtonHTMLAttributes<HTMLButtonElement>;