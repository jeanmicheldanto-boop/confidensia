"use client";

import Image from "next/image";
import Link from "next/link";

interface SpaceCardProps {
  title: string;
  iconSrc: string;
  photoSrc: string;
  iconAlt: string;
  photoAlt: string;
  href?: string;
}

export default function SpaceCard({ title, iconSrc, photoSrc, iconAlt, photoAlt, href = "#" }: SpaceCardProps) {
  return (
    <Link href={href} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-48 block">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent z-10" />
      
      {/* Contenu à gauche */}
      <div className="relative z-20 h-full flex items-center p-8">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={iconSrc}
              alt={iconAlt}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-[#1e3a5f] leading-tight">
            {title.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h3>
        </div>
      </div>

      {/* Photo à droite */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
        <Image
          src={photoSrc}
          alt={photoAlt}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </Link>
  );
}
