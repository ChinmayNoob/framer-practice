import { type Artist } from "@/types/artist";
import { motion } from "motion/react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

interface SocialLinksProps {
    links: Artist['social'];
}

const iconVariants = {
    hover: {
        rotate: [0, -10, 10, -10, 0],
        transition: { duration: 0.5 },
    },
};

export function SocialLinks({ links }: SocialLinksProps) {
    if (!links) return null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="ml-4 flex gap-3"
        >
            {links.twitter && (
                <motion.a
                    href={links.twitter}
                    className="text-zinc-400 transition-colors duration-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover="hover"
                >
                    <motion.span className="inline-block" variants={iconVariants}>
                        <FaTwitter />
                    </motion.span>
                </motion.a>
            )}
            {links.instagram && (
                <motion.a
                    href={links.instagram}
                    className="text-zinc-400 transition-colors duration-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover="hover"
                >
                    <motion.span className="inline-block" variants={iconVariants}>
                        <FaInstagram />
                    </motion.span>
                </motion.a>
            )}
        </motion.div>
    )
}