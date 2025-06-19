'use client'
import { type Artist } from "@/types/artist";
import { ArtistProfile } from "./artist-profile";
import { useState } from "react";
import { ArtistMember } from "./artist-member";

interface ArtistListProps {
    artists: Artist[];
}

export function ArtistList({ artists }: ArtistListProps) {
    const [activeArtist, setActiveArtist] = useState<Artist | null>(artists[0] || null);
    const handleHover = (artist: Artist) => {
        setActiveArtist(artist);
    }

    return (
        <div className="flex items-stretch divide-x divide-zinc-800">
            <div className="w-3/5 min-w-0 divide-y divide-zinc-800">
                {artists.map((artist) => (
                    <ArtistMember
                        key={artist.id}
                        artist={artist}
                        isActive={activeArtist?.id === artist.id}
                        onHover={() => handleHover(artist)}
                    />
                ))}
            </div>

            <div className="relative w-2/5 flex-shrink-0">
                {activeArtist && <ArtistProfile artist={activeArtist} />}
            </div>
        </div>
    )
}