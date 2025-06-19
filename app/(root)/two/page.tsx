"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Spinner } from "./Spinner";

const BUTTON_STATES = ["idle", "loading", "success"] as const;
type ButtonState = typeof BUTTON_STATES[number];

const buttonCopy: Record<ButtonState, React.ReactNode> = {
    idle: "Send me a login link",
    loading: <Spinner size={16} color="rgba(255, 255, 255, 0.65)" />,
    success: (
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M5 10.5L9 14.5L15 7.5"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                />
            </svg>
            Login link sent!
        </span>
    ),
};

export default function SmoothButton() {
    const [buttonState, setButtonState] = useState<ButtonState>("idle");

    return (
        <div className="outer-wrapper">
            <motion.button
                className="blue-button"
                disabled={buttonState === "loading"}
                aria-live="polite"
                animate={{
                    backgroundColor:
                        buttonState === "success"
                            ? "#22c55e" // green-500
                            : "#2563eb", // blue-600
                }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={() => {
                    if (buttonState === "success") return;

                    setButtonState("loading");

                    setTimeout(() => {
                        setButtonState("success");
                    }, 1750);

                    setTimeout(() => {
                        setButtonState("idle");
                    }, 3500);
                }}
                style={{ position: "relative", overflow: "hidden" }}
            >
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                        transition={{ type: "spring", duration: 0.35, bounce: 0.3 }}
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        key={buttonState}
                        style={{ display: "inline-flex", alignItems: "center" }}
                    >
                        {buttonCopy[buttonState]}
                    </motion.span>
                </AnimatePresence>
            </motion.button>
        </div>
    );
}