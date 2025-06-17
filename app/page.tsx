'use client'
import { TextScramble } from "@/components/text-scramble";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [isTrigger, setIsTrigger] = useState(false);
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2, ease: 'easeInOut' } },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    hover: { rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }
  };

  return (
    <div className="font-courier-prime text-black flex flex-col items-center justify-center gap-4 mt-4 bg-transparent">
      <div
        className="flex items-center justify-center gap-8"
      >
        <TextScramble
          className='text-7xl font-bold'
          as='span'
          speed={0.01}
          trigger={isTrigger}
          onHoverStart={() => setIsTrigger(true)}
          onScrambleComplete={() => setIsTrigger(false)}
        >
          Framer Motion Practice
        </TextScramble>
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
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold font-courier-prime">Components</h1>
        <div className="flex items-center justify-center gap-4">
          <Link href='/one' className="text-xl font-bold font-courier-prime underline">one</Link>
          <Link href='/two' className="text-xl font-bold font-courier-prime underline">two</Link>
          <Link href='/three' className="text-xl font-bold font-courier-prime underline">three</Link>
        </div>
      </div>
    </div>

  );
}
