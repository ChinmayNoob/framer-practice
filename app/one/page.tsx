/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useAnimate, AnimationScope } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";

const albums = [
    {
        id: "gnx",
        title: "reincarnated",
        artist: "Kendrick Lamar",
        image: "/albums/gnx.png",
        lines: [
            "...",
            "My present life is Kendrick Lamar",
            "A rapper lookin' at the lyrics to keep you in awe",
            "The only factor I respected was raisin' the bar",
            "My instincts sent material straight to the charts, huh",
            "My father kicked me out the house, I finally forgive him",
            "I'm old enough to understand the way I was livin'",
            "Ego and pride had me lookin' at him with resentment",
            "I close my eyes hopin' that I don't come off contentious",
            "...",
        ]
    },
    {
        id: "yeezus",
        title: "On Sight",
        artist: "Kanye West",
        image: "/albums/yeezus.png",
        lines: [
            "...",
            "Yeezy season approaching",
            "F*** whatever y'all been hearing",
            "F*** what, f*** whatever y'all been wearing",
            "A monster about to come alive again",
            "Soon as I pull up and park the Benz",
            "We get this b**** shaking like Parkinsons",
            "Take my number and lock it in",
            "Indian hair, no moccasins",
            "...",
        ]
    },
    {
        id: "nothing was the same",
        title: "furthest things",
        artist: "Drake",
        image: "/albums/nwts.png",
        lines: [
            "...",
            "I just been drinking on the low",
            "Mobbing on the low",
            "Fucking on the low",
            "Smoking on the low",
            "I just been plotting on the low",
            "Scheming on the low",
            "The furthest thing from perfect, like everyone I know",
            "...",
        ]
    }
];

export default function One() {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const animationRefs = albums.reduce((acc, album) => {
        const [scope, animate] = useAnimate<HTMLDivElement>();
        acc[album.id] = { scope, animate };
        return acc;
    }, {} as { [key: string]: { scope: AnimationScope<HTMLDivElement>, animate: ReturnType<typeof useAnimate>[1] } });

    const [highlightedIndices, setHighlightedIndices] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        const intervals: { [key: string]: NodeJS.Timeout } = {};

        albums.forEach(album => {
            if (expandedId === album.id) {
                intervals[album.id] = setInterval(() => {
                    setHighlightedIndices(prev => ({
                        ...prev,
                        [album.id]: ((prev[album.id] || 0) + 1) % album.lines.length
                    }));
                }, 1500);
            } else {
                setHighlightedIndices(prev => ({
                    ...prev,
                    [album.id]: 0
                }));
            }
        });

        return () => {
            Object.values(intervals).forEach(interval => clearInterval(interval));
        };
    }, [expandedId]);

    const toggleExpand = async (clickedCardId: string) => {
        const currentlyExpandedCardId = expandedId;
        const newTargetCardId = (currentlyExpandedCardId === clickedCardId) ? null : clickedCardId;
        if (currentlyExpandedCardId && currentlyExpandedCardId !== newTargetCardId) {
            const { scope, animate } = animationRefs[currentlyExpandedCardId];
            if (scope.current) {
                await animate(
                    scope.current,
                    { width: "180px", height: "180px" },
                    { duration: 0.3, ease: "easeInOut" } // Collapse animation
                );
            }
        }

        // Update the state to reflect which card should be expanded (or none)
        setExpandedId(newTargetCardId);

        // If a new card is targeted for expansion, animate it.
        if (newTargetCardId) {
            const { scope, animate } = animationRefs[newTargetCardId];
            if (scope.current) {
                animate(
                    scope.current,
                    {
                        width: "400px",
                        height: "500px",
                    },
                    {
                        duration: 0.4,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 16,
                    } // Expand animation
                );
            }
        }
    };

    return (
        <main className="flex min-h-screen min-w-screen flex-col items-center justify-center p-4">
            <div className="w-full flex flex-row gap-6 justify-center items-start font-courier-prime">
                {albums.map((album) => (
                    <motion.div
                        key={album.id}
                        className="flex flex-col items-center justify-between border bg-white border-zinc-200 rounded-2xl shadow-sm cursor-pointer overflow-auto z-10 hide-scrollbar"
                        style={{
                            willChange: "width, height",
                            width: "180px",
                            height: "180px",
                        }}
                        onClick={() => toggleExpand(album.id)}
                        ref={animationRefs[album.id].scope}
                        layout
                    >
                        <div className="flex gap-4 justify-between cursor-pointer w-full sticky top-0 z-10 p-4 bg-white">
                            <Image
                                width={144}
                                height={144}
                                src={album.image}
                                alt={album.id}
                                className="w-36 h-36 rounded-xl object-cover border border-zinc-200"
                            />
                            {expandedId === album.id && (
                                <motion.div
                                    className="flex flex-col gap-1 text-right min-h-full justify-between items-end"
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: 0.2,
                                    }}
                                    style={{ willChange: "opacity" }}
                                    initial={{ opacity: 0, filter: "blur(10px)" }}
                                    animate={{ opacity: expandedId === album.id ? 1 : 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, filter: "blur(10px)" }}
                                >
                                    <p className="text-sm leading-none font-bold">{album.id.toUpperCase()}</p>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-lg font-bold leading-none">
                                            {album.title}
                                        </h2>
                                        <p className="text-sm text-zinc-500 leading-none">
                                            {album.artist}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                        {expandedId === album.id && (
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: expandedId === album.id ? 1 : 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, filter: "blur(10px)" }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                    delay: 0.2,
                                }}
                                className="px-4 pb-4"
                            >
                                <p className="text-2xl leading-none font-bold flex flex-col gap-2">
                                    {album.lines.map((line, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{
                                                color: "#a1a1aa",
                                                scale: 1,
                                            }}
                                            animate={{
                                                color: index === (highlightedIndices[album.id] || 0) ? "#3f3f46" : "#a1a1aa",
                                                scale: index === (highlightedIndices[album.id] || 0) ? 1.004 : 1,
                                            }}
                                            exit={{
                                                color: "#a1a1aa",
                                                scale: 1,
                                            }}
                                            transition={{
                                                duration: 1,
                                            }}
                                        >
                                            {line}
                                        </motion.span>
                                    ))}
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </main>
    );
}