"use client";

import { ReactNode } from "react";

interface FeatureItemProps {
  icon: ReactNode;
  text: string;
  delay: string;
}

export default function FeatureItem({ icon, text, delay }: FeatureItemProps) {
  return (
    <div 
      className={`flex items-center gap-2 py-2 px-4 bg-gray-100/30 backdrop-blur-sm rounded-full opacity-0 animate-fade-in-left ${delay}`}
    >
      <span className="text-gray-400 text-sm">{icon}</span>
      <span className="text-gray-500 font-medium text-xs">{text}</span>
    </div>
  );
}
