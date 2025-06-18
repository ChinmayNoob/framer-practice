'use client';

import { instrumentSerif } from '@/fonts';
import { motion, useSpring, useTransform, MotionValue } from 'motion/react';
import { useRef, useMemo, memo } from 'react';

interface AnimatedCharProps {
    char: string;
    index: number;
    mouseX: MotionValue<number>;
    springConfig: {
        damping: number;
        stiffness: number;
        mass: number;
    };
    containerRef: React.RefObject<HTMLParagraphElement | null>;
}

export const AnimatedChar: React.FC<AnimatedCharProps> = memo(({
    char,
    mouseX,
    springConfig,
    containerRef
}) => {
    const charRef = useRef<HTMLSpanElement>(null);

    // Memoize constants to avoid recalculation
    const maxDistance = useMemo(() => 100, []);
    const hoverThreshold = useMemo(() => 50, []);

    // Memoize the easing function for better performance
    const easeInOutQuart = useMemo(() => (t: number) => {
        if (t < 0.5) {
            return 8 * t * t * t * t;
        }
        const u = 1 - t;
        return 1 - 8 * u * u * u * u;
    }, []);

    // Memoize transform functions to avoid recreation
    const transformFunctions = useMemo(() => ({
        distance: (latest: number) => {
            if (!charRef.current || !containerRef.current) return 1000;

            const charRect = charRef.current.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            const charCenterX = charRect.left + charRect.width / 2 - containerRect.left;

            return Math.abs(latest - charCenterX);
        },

        relativePosition: (latest: number) => {
            if (!charRef.current || !containerRef.current) return 0;

            const charRect = charRef.current.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            const charLeft = charRect.left - containerRect.left;
            const charRight = charRect.right - containerRect.left;

            if (latest < charLeft || latest > charRight) return 0;

            const relativeX = latest - charLeft;
            const progress = (relativeX / charRect.width) * 100;
            return Math.max(0, Math.min(100, progress));
        }
    }), []);

    // Calculate distance from mouse
    const distance = useTransform(mouseX, transformFunctions.distance);

    // Calculate relative position within character
    const relativePosition = useTransform(mouseX, transformFunctions.relativePosition);

    // Memoize combined transform function for all animations
    const calculateIntensity = useMemo(() => (
        [dist, pos]: number[],
        maxEffect: number,
        proximityEffect: number
    ) => {
        if (dist > maxDistance) return 0;

        if (dist < hoverThreshold) {
            let intensity: number;
            if (pos <= 50) {
                intensity = easeInOutQuart(pos / 50);
            } else {
                intensity = easeInOutQuart((100 - pos) / 50);
            }
            return intensity * maxEffect;
        }

        const proximity = Math.pow(1 - dist / maxDistance, 3);
        return proximity * proximityEffect;
    }, [easeInOutQuart, maxDistance, hoverThreshold]);

    // Stroke width animation
    const strokeWidth = useSpring(
        useTransform(
            [distance, relativePosition],
            (values: number[]) => calculateIntensity(values, 0.1, 0.04)
        ),
        springConfig,
    );

    // Scale X animation
    const scaleX = useSpring(
        useTransform(
            [distance, relativePosition],
            (values: number[]) => 1 + calculateIntensity(values, 0.12, 0.05)
        ),
        springConfig,
    );

    // Scale Y animation
    const scaleY = useSpring(
        useTransform(
            [distance, relativePosition],
            (values: number[]) => 1 - calculateIntensity(values, 0.06, 0.02)
        ),
        springConfig,
    );

    // Padding X animation
    const paddingX = useSpring(
        useTransform(
            [distance, relativePosition],
            (values: number[]) => calculateIntensity(values, 0.2, 0.08)
        ),
        springConfig,
    );

    // Transform functions for styles (moved outside useMemo to follow Rules of Hooks)
    const webkitTextStroke = useTransform(strokeWidth, (value) => `${value}em currentcolor`);
    const paddingLeftTransform = useTransform(paddingX, (value) => `${value}em`);
    const paddingRightTransform = useTransform(paddingX, (value) => `${value}em`);

    return (
        <motion.span
            ref={charRef}
            className={`inline-block cursor-none text-[200px] font-extralight leading-none text-white mix-blend-difference ${instrumentSerif.className}`}
            style={{
                WebkitTextStroke: webkitTextStroke,
                paddingLeft: paddingLeftTransform,
                paddingRight: paddingRightTransform,
                scaleX,
                scaleY,
                willChange: 'transform', // Hint for GPU acceleration
            }}
        >
            {char}
        </motion.span>
    );
}); 