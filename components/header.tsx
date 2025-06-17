'use client'

import React from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaHome } from 'react-icons/fa';
import Link from 'next/link';

const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2, ease: 'easeInOut' } },
    tap: { scale: 0.95 },
};

const iconVariants = {
    hover: { rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }
};

export default function Header() {
    return (
        <div className="flex items-center justify-center gap-8 mt-4">
            <Link href="/">
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-black w-full md:w-auto text-3xl bg-white hover:bg-gray-300 hover:text-neutral-800 duration-300 transition-all font-courier-prime px-6 py-3 flex items-center justify-center gap-2 border-2 border-black rounded-md"
                >
                    <motion.span variants={iconVariants}>
                        <FaHome className="text-xl" />
                    </motion.span>
                    home
                </motion.button>
            </Link>
            <span className='text-7xl font-bold font-courier-prime'>Framer Motion Practice</span>
            <Link href="https://github.com/chinmaynoob" target="_blank" rel="noopener noreferrer">
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-black w-full md:w-auto text-3xl bg-white hover:bg-gray-300 hover:text-neutral-800 duration-300 transition-all font-courier-prime px-6 py-3 flex items-center justify-center md:justify-start gap-2 border-2 border-black rounded-md"
                >
                    <motion.span variants={iconVariants}>
                        <FaGithub className="text-xl" />
                    </motion.span>
                    github
                </motion.button>
            </Link>
        </div>
    );
} 