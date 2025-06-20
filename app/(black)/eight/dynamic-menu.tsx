import { useState, FC, ReactElement } from "react";
import { MenuProps } from "@/types/menu";
import * as S from "./menu-styles";
import * as anim from "./menu-animation";

const DynamicMenu: FC<MenuProps> = ({ menuName = "Dynamic Menu", menuItems, openDirection = "down" }: MenuProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <S.MenuContainer openDirection={openDirection} isOpen={isOpen}>
            <S.MenuWrapper
                openDirection={openDirection}
                isOpen={isOpen}
                variants={anim.menuWrapper}
                initial="initial"
                animate={isOpen ? "click" : "initial"}
                custom={menuItems.length}
            >
                <S.MenuButton onClick={() => setIsOpen(!isOpen)}>{menuName}</S.MenuButton>
                <S.MenuContent variants={anim.menuContainer} custom={[menuItems.length, openDirection]} data-testid="menu">
                    {menuItems.map((item: ReactElement, i: number) => {
                        return (
                            <S.MenuContentItem key={`key${i}`} variants={anim.item}>
                                {item}
                            </S.MenuContentItem>
                        );
                    })}
                </S.MenuContent>
            </S.MenuWrapper>
        </S.MenuContainer>
    );
};

export default DynamicMenu;
