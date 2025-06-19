'use client'
import { useArtist } from "@/hooks/use-artist"
import { FaSpinner } from "react-icons/fa";
import { ArtistList } from "./artist-list";
import { ImSpinner3 } from "react-icons/im";
import Link from "next/link";

export default function Six() {
    const { artists, loading } = useArtist();
    if (loading) {
        return (
            <div className="mx-auto flex h-full w-full items-center justify-center text-zinc-400">
                <ImSpinner3 className="animate-spin text-4xl" />
            </div>
        )
    }
    return (
        <>
            <div className="mx-auto w-full overflow-hidden border border-zinc-800">
                <ArtistList artists={artists} />
            </div>
            <footer className="fixed bottom-4 right-4 text-xs text-zinc-400">
                <div className="flex items-center space-x-2">
                    <Link href="https://vercel.com/ship" target="_blank" className="hover:text-white transition-colors">Inspired by Vercel Ship 2025</Link>
                </div>
            </footer>
        </>
    )
}