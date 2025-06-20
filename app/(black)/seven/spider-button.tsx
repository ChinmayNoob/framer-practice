'use client'
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { SpidermanButtonProps } from "../../../types/button";
import style from "./spider-button.module.css";
import { RANDOM_INT } from "@/lib/utils";
import { buttonAnim, clickAnim } from "./spiderbtn-animation";

export default function SpiderButton({ buttonName, hoverBtnName, btnClassName, variant = 'default', handleButtonClick }: SpidermanButtonProps) {
    const [btnName, setBtnName] = useState(buttonName);
    const [shakeAmount, setShakeAmount] = useState(8);
    const [clickOffset, setClickOffset] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setShakeAmount(RANDOM_INT(6, 12));
        setClickOffset(RANDOM_INT(-50, 50));
        setIsMounted(true);
    }, []);

    const getButtonClassName = () => {
        let className = style.btn;
        if (variant !== 'default') {
            className += ` ${style[variant]}`;
        }
        if (btnClassName) {
            className += ` ${btnClassName}`;
        }
        return className;
    };

    if (!isMounted) {
        return (
            <button
                type="button"
                className={getButtonClassName()}
                onClick={handleButtonClick}
            >
                {buttonName}
            </button>
        );
    }

    return (
        <motion.button
            type="button"
            className={getButtonClassName()}
            initial="init"
            animate="init"
            whileHover="hover"
            whileTap="tap"
            whileFocus="focus"
            variants={buttonAnim}
            custom={shakeAmount}
            onMouseEnter={() => setBtnName(hoverBtnName)}
            onMouseLeave={() => setBtnName(buttonName)}
            onClick={handleButtonClick}
        >
            {btnName}
            <motion.div className={style.click} variants={clickAnim} custom={clickOffset}></motion.div>
        </motion.button>
    );
} 