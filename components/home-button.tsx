'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { FaHome } from 'react-icons/fa';

const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2, ease: 'easeInOut' } },
    tap: { scale: 0.95 },
};

const iconVariants = {
    hover: { rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }
};

const HomeButton = () => {
    return (
        <div className="my-8">
            <Link href="/">
                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-white w-full md:w-auto text-2xl bg-black hover:bg-gray-300 hover:text-neutral-800 duration-300 transition-all font-courier-prime px-6 py-3 flex items-center justify-center gap-2 border-2 border-black rounded-md"
                >
                    <motion.span variants={iconVariants}>
                        <FaHome className="text-xl" />
                    </motion.span>
                    home
                </motion.button>
            </Link>
        </div>
    )
}

export default HomeButton