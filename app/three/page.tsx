'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function StackedAlbumCards() {
    const albums = [
        { id: 1, src: "/images/mbdtf.jpg", alt: "My Beautiful Dark Twisted Fantasy" },
        { id: 2, src: "/images/college-dropout.jpg", alt: "The College Dropout" },
        { id: 3, src: "/images/tlop.jpg", alt: "The Life of Pablo" },
        { id: 4, src: "/images/graduation.jpg", alt: "Graduation" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % albums.length);

                setTimeout(() => {
                    setIsTransitioning(false);
                }, 100);
            }, 400);
        }, 3000);

        return () => clearInterval(interval);
    }, [albums.length]);

    const reorderedAlbums = [...albums.slice(currentIndex), ...albums.slice(0, currentIndex)];

    return (
        <div>

            <div className="mt-32 flex justify-center">
                <div className="relative w-64 h-64 perspective-1000">
                    {reorderedAlbums.map((album, i) => (
                        <div
                            className={`
            absolute inset-0 w-full h-full rounded-lg overflow-hidden shadow-xl bg-white 
            transition-all duration-500 ease-in-out
            ${i === 0 && isTransitioning ? "opacity-0 -translate-y-8 rotate-6" : ""}
            `}
                            key={album.id}
                            style={{
                                "--index": i.toString(),
                                transform: `
              scale(${1 - 0.04 * i}) 
              translateY(${-10 * i}px) 
              ${i === 0 && isTransitioning ? "translateY(-2rem) rotate(6deg)" : ""}
              `,
                                zIndex: 10 - i,
                                boxShadow: `0 ${4 + i * 2}px ${10 + i * 3}px rgba(0, 0, 0, ${0.2 + i * 0.02})`,
                            } as React.CSSProperties}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={album.src}
                                    alt={album.alt}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    priority={i === 0}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}