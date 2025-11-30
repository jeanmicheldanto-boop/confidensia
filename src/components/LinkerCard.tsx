"use client";

import Image from "next/image";
import Link from "next/link";

export default function LinkerCard() {
  return (
    <Link href="/linkers" className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer p-8 block">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src="/linker.jpeg"
            alt="Linker"
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-[#1e3a5f]">
          Espace Linkers
        </h3>
      </div>
    </Link>
  );
}
