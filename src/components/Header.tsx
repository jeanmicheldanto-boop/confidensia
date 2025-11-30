"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Le Hub des ESSMS", href: "/hub-essms" },
    { label: "Automatisation", href: "/automatisation" },
    { label: "L'assistant rédactionnel", href: "/assistant-redactionnel" },
    { label: "Accompagnement & Formation", href: "/accompagnement-formation" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4">
        <div className="container mx-auto flex justify-start">
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-400 transition-all duration-300 ease-out ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-400 transition-all duration-300 ease-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-400 transition-all duration-300 ease-out ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Menu Panel */}
      <nav
        className={`fixed top-0 left-0 h-full w-80 bg-white/95 backdrop-blur-md shadow-2xl z-40 transform transition-transform duration-500 ease-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          {/* Menu Items */}
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 text-gray-600 hover:text-[#1e3a5f] hover:bg-gray-50 rounded-lg transition-all duration-300 font-medium text-sm tracking-wide transform ${
                    isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 100}ms` }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Bottom Section */}
          <div className="mt-auto pb-8">
            <div className="border-t border-gray-100 pt-6">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full py-3 px-6 bg-[#e67e22] hover:bg-[#d35400] text-white text-center text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
