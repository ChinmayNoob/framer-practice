'use client'
import { motion } from "motion/react";
import { RefObject, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function App() {
    return (
        <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-50">
            <h1 className="text-center relative z-0 text-[14vw] font-black text-neutral-200 md:text-[100px]">
                Awesome Drag Cards<span className="text-sky-600">.</span>
            </h1>
            <Cards />
        </section>
    );
}

const Cards = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    return (
        <div ref={containerRef} className=" absolute inset-0 z-0">
            <Card
                containerRef={containerRef}
                src="/albums/blonde.png"
                alt="image"
                rotate="6deg"
                top="20%"
                left="25%"
                className="w-36 md:w-56"
            />
            <Card
                containerRef={containerRef}
                src="/images/college-dropout.jpg"
                alt="image"
                rotate="12deg"
                top="45%"
                left="60%"
                className="w-24 md:w-48"
            />
            <Card
                containerRef={containerRef}
                src="/images/graduation.jpg"
                alt="image"
                rotate="-6deg"
                top="20%"
                left="40%"
                className="w-52 md:w-80"
            />
            <Card
                containerRef={containerRef}
                src="/images/mbdtf.jpg"
                alt="image"
                rotate="8deg"
                top="50%"
                left="40%"
                className="w-48 md:w-72"
            />
            <Card
                containerRef={containerRef}
                src="/images/tlop.jpg"
                alt="image"
                rotate="18deg"
                top="20%"
                left="65%"
                className="w-40 md:w-64"
            />
            <Card
                containerRef={containerRef}
                src="/albums/yeezus.png"
                alt="image"
                rotate="-3deg"
                top="35%"
                left="55%"
                className="w-24 md:w-48"
            />
            <Card
                containerRef={containerRef}
                src="/albums/gnx.png"
                alt="image"
                rotate="4deg"
                top="55%"
                left="20%"
                className="w-28 md:w-56"
            />
            <Card
                containerRef={containerRef}
                src="/albums/nwts.png"
                alt="image"
                rotate="-4deg"
                top="40%"
                left="10%"
                className="w-28 md:w-56"
            />
        </div>
    );
};

type CardProps = {
    containerRef: RefObject<HTMLDivElement | null>;
    src: string;
    alt: string;
    top: string;
    left: string;
    rotate: string;
    className?: string;
};
const Card = ({
    containerRef,
    src,
    alt,
    top,
    left,
    rotate,
    className,
}: CardProps) => {
    const [zIndex, setZIndex] = useState(0);

    const updateZIndex = () => {
        const elements = document.querySelectorAll(".drag-els");
        let maxZIndex = -Infinity;

        elements.forEach((el) => {
            const zIndex = parseInt(
                window.getComputedStyle(el).getPropertyValue("z-index")
            );

            if (!isNaN(zIndex) && zIndex > maxZIndex) {
                maxZIndex = zIndex;
            }
        });

        setZIndex(maxZIndex + 1);
    };
    return (
        <motion.img
            onMouseDown={updateZIndex}
            src={src}
            alt={alt}
            dragConstraints={containerRef}
            drag
            dragElastic={0.65}
            className={twMerge(
                "drag-els absolute w-48 bg-white border border-neutral-200 shadow-lg p-1 pb-4",
                className
            )}
            style={{
                top,
                left,
                rotate,
                zIndex,
            }}
        />
    );
};