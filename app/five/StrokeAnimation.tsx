'use client';

import { motion, useMotionValue } from 'motion/react';
import Link from 'next/link';
import type React from 'react';
import { useCallback, useRef, useMemo } from 'react';
import { AnimatedChar } from './AnimatedChar';
import { satoshi } from '@/fonts';
import styles from './stroke-animation.module.css';

const text = 'kanyewest';

export const StrokeAnimation: React.FC = () => {
    const containerRef = useRef<HTMLParagraphElement>(null);
    const mouseX = useMotionValue(0);
    const throttleRef = useRef<number | null>(null);

    // Memoize text splitting to avoid recreating array on every render
    const textChars = useMemo(() => text.split(''), []);

    // Spring configuration - memoized to avoid recreating object
    const springConfig = useMemo(() => ({
        damping: 25,
        stiffness: 200,
        mass: 0.5,
    }), []);

    // Throttled mouse move handler for better performance
    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLParagraphElement>) => {
            if (throttleRef.current) return;

            throttleRef.current = requestAnimationFrame(() => {
                if (!containerRef.current) {
                    throttleRef.current = null;
                    return;
                }

                const rect = containerRef.current.getBoundingClientRect();
                mouseX.set(e.clientX - rect.left);
                throttleRef.current = null;
            });
        },
        [mouseX],
    );

    const handleMouseLeave = useCallback(() => {
        if (throttleRef.current) {
            cancelAnimationFrame(throttleRef.current);
            throttleRef.current = null;
        }
        mouseX.set(-1000); // reset all effects
    }, [mouseX]);

    return (
        <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#181b26] overflow-hidden">
            {/* Animated background blob - moved to CSS for better performance */}
            <div className={styles.animatedBlob} />

            {/* Main text with interactive effects */}
            <motion.p
                ref={containerRef}
                className="z-50 inline-flex select-none"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                {textChars.map((char, index) => (
                    <AnimatedChar
                        key={`${char}-${index}`}
                        char={char}
                        index={index}
                        mouseX={mouseX}
                        springConfig={springConfig}
                        containerRef={containerRef}
                    />
                ))}
                <span className={`${satoshi.className} text-[50px] leading-none text-[#e7e4d9] ml-2`}>®</span>
            </motion.p>

            {/* Description section */}
            <motion.div
                className={`z-10 mt-8 ${satoshi.className}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
                <p className="text-xl text-white/70 text-center">
                    The Creator Of the College Trilogy: &quot;The College Dropout&quot;, &quot;Graduation&quot;, and &quot;Late Registration&quot;.{' '}
                    <Link
                        href="https://dailyhiphop.vercel.app"
                        target="_blank"
                        className="cursor-pointer text-white underline underline-offset-4 hover:text-white/80 transition-colors duration-200"
                    >
                        @kanyewest
                    </Link>
                </p>
            </motion.div>

            {/* Footer attribution */}
            <motion.p
                className={`absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-sm text-white/70 ${satoshi.className}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Inspired by{' '}
                <Link
                    href="https://labs.aeoscompany.com/"
                    target="_blank"
                    className="text-white underline-offset-4 hover:underline transition-all duration-200"
                >
                    AEOS Labs
                </Link>
            </motion.p>
        </main>
    );
}; 