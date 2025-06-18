'use client'
import { TextScramble } from "@/components/text-scramble";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isTrigger, setIsTrigger] = useState(false);

  return (
    <div className="font-courier-prime text-black flex flex-col items-center justify-center gap-4 mt-4 bg-transparent">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold font-courier-prime">Components</h1>
        <div className="flex items-center justify-center gap-4">
          <Link href='/one' className="text-xl font-bold font-courier-prime underline">one</Link>
          <Link href='/two' className="text-xl font-bold font-courier-prime underline">two</Link>
          <Link href='/three' className="text-xl font-bold font-courier-prime underline">three</Link>
          <Link href='/four' className="text-xl font-bold font-courier-prime underline">four</Link>
          <Link href='/five' className="text-xl font-bold font-courier-prime underline">five</Link>
        </div>
      </div>
    </div>
  );
}
