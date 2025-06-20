import { ReactElement } from "react";

export type MenuProps = {
    menuName?: string;
    menuItems: ReactElement[];
    openDirection?: "up" | "down";
};
