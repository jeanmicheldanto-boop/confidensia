"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { VideoModal } from "@/components";

export default function Home() {
  const [showVideoMenu, setShowVideoMenu] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Configuration des vidéos
  const videos = [
    { id: '2EDdIfGlBzo', title: 'Découvrez l\'assistant rédactionnel', description: 'Présentation générale' },
    { id: 'Q3CELU2zfb0', title: 'Interface de l\'assistant rédactionnel', description: 'Démonstration de l\'interface' },
    { id: 'OXix6lqmpKM', title: 'La technique derrière l\'assistant', description: 'Explication technique' },
  ];

  // useCallback pour React 19
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu(prev => !prev);
  }, []);

  const openVideo = (videoId: string, title: string) => {
    setSelectedVideo({ id: videoId, title });
    setShowVideoMenu(false);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  // Fermer le menu quand on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Element;
      
      // Gérer le menu vidéo
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setShowVideoMenu(false);
      }
      
      // Gérer le menu mobile - plus spécifique pour éviter les fermetures involontaires
      if (showMobileMenu && target && !target.closest('.mobile-menu-container')) {
        setShowMobileMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showMobileMenu]);
  return (
    <main className="min-h-screen bg-white">
      {/* Menu hamburger mobile */}
      <div className="fixed top-2 left-2 z-[100] md:hidden">
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="p-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 hover:bg-white transition-all duration-200 active:scale-95 hover:border-[#FF9933]"
          style={{ 
            minHeight: '48px', 
            minWidth: '48px'
          }}
          aria-label="Menu navigation"
        >
          <svg className="w-6 h-6 text-[#4A2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu mobile dropdown */}
        {showMobileMenu && (
          <div className="absolute top-16 left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-[101] animate-in fade-in-0 slide-in-from-top-1 duration-200">
            <Link 
              href="/about" 
              className="block px-4 py-3 text-[#4A2C2A] hover:bg-gray-50 hover:text-[#FF9933] transition-colors"
              onClick={toggleMobileMenu}
            >
              À propos
            </Link>
            <Link 
              href="/hub-essms" 
              className="block px-4 py-3 text-[#4A2C2A] hover:bg-gray-50 hover:text-[#FF9933] transition-colors"
              onClick={toggleMobileMenu}
            >
              Le Hub des ESSMS
            </Link>
            <Link 
              href="/automatisation" 
              className="block px-4 py-3 text-[#4A2C2A] hover:bg-gray-50 hover:text-[#FF9933] transition-colors"
              onClick={toggleMobileMenu}
            >
              Automatisation
            </Link>
            <Link 
              href="/assistant-redactionnel" 
              className="block px-4 py-3 text-[#4A2C2A] hover:bg-gray-50 hover:text-[#FF9933] transition-colors"
              onClick={toggleMobileMenu}
            >
              Assistant rédactionnel
            </Link>
            <Link 
              href="/accompagnement-formation" 
              className="block px-4 py-3 text-[#4A2C2A] hover:bg-gray-50 hover:text-[#FF9933] transition-colors"
              onClick={toggleMobileMenu}
            >
              Accompagnement & Formation
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-3 text-[#4A2C2A] hover:bg-gray-50 hover:text-[#FF9933] transition-colors"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>

      {/* Boutons en haut à droite */}
      <div className="fixed top-2 md:top-4 right-2 md:right-6 lg:right-12 z-50 flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-3">
        {/* Bouton Se connecter */}
        <button className="bg-white/90 backdrop-blur-sm hover:bg-white text-[#4A2C2A] text-xs md:text-sm font-medium py-1.5 md:py-2 px-3 md:px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-[#FF9933] whitespace-nowrap">
          Se connecter à mon espace
        </button>
        
        {/* Bouton Vidéos avec dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setShowVideoMenu(!showVideoMenu)}
            className="bg-white/90 backdrop-blur-sm hover:bg-white text-[#FF9933] hover:text-[#e67e22] text-xs md:text-sm font-medium py-1.5 md:py-2 px-3 md:px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-[#FF9933] hover:border-[#e67e22] flex items-center gap-2 whitespace-nowrap"
          >
            Nos outils en vidéo
            <svg className={`w-4 h-4 transition-transform ${showVideoMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Dropdown Menu */}
          {showVideoMenu && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-60">
              {videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => openVideo(video.id, video.title)}
                  className="block w-full text-left px-4 py-3 text-sm text-[#4A2C2A] hover:bg-gray-50 hover:text-[#FF9933] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#FF9933] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-medium">{video.title}</div>
                      <div className="text-xs text-gray-500">{video.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>



      {/* Modal Vidéo */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={closeVideo}
          videoId={selectedVideo.id}
          title={selectedVideo.title}
        />
      )}

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Hero Background Image - tout à gauche */}
        <div className="absolute -top-8 md:top-0 left-0 w-[65%] h-[90%] z-0">
          <Image
            src="/hero.png"
            alt="Hero background"
            fill
            className="object-contain object-left opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/30 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-start justify-between pt-12 md:pt-24 lg:pt-16">
            {/* Center - Logo & Text */}
            <div className="w-full flex flex-col items-center text-center order-2 lg:order-1 mt-16 md:mt-0">
              {/* Logo dans un cadre oblong - agrandi */}
              <div className="mb-16 md:mb-20 w-[14rem] md:w-[17rem] h-[6rem] md:h-[8rem] rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
                <Image
                  src="/logo_cia_basecourt_transp_2.png"
                  alt="Logo CIA Basecourt"
                  width={360}
                  height={280}
                  className="object-cover translate-y-0.5 w-[280px] md:w-[360px]"
                  priority
                />
              </div>

              {/* CTA Button */}
              <a
                href="/about"
                className="inline-block bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold py-2 px-8 text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6 md:mb-5 mt-4 md:mt-0"
              >
                Découvrez nous
              </a>

              {/* Texte déplacé sous le bouton */}
              <p className="text-gray-400 text-xs md:text-sm font-semibold mt-6 md:mt-0 mb-12 md:mb-4">
                Technologies de confiance pour les environnements sociaux et médico sociaux.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* 4 Blocs d'icônes positionnés juste sous le contenu hero visible */}
      <section className="absolute bottom-12 md:bottom-24 left-0 right-0 z-30">
        <div className="container mx-auto max-w-6xl px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Bloc 1 - Le Hub des ESSMS */}
            <Link 
              href="/hub-essms"
              className="group bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center transform hover:scale-105 relative z-10"
            >
              <div className="relative w-full h-16 md:h-20">
                <Image
                  src="/icone_hub_texte.png"
                  alt="Le Hub des ESSMS"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Bloc 2 - Automatisation */}
            <Link 
              href="/automatisation"
              className="group bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center transform hover:scale-105 relative z-10"
            >
              <div className="relative w-full h-16 md:h-20">
                <Image
                  src="/icone_automatisation_texte.png"
                  alt="Automatisation"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Bloc 3 - L'assistant rédactionnel */}
            <Link 
              href="/assistant-redactionnel"
              className="group bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center transform hover:scale-105 relative z-10"
            >
              <div className="relative w-full h-16 md:h-20">
                <Image
                  src="/icone_assistant_texte.png"
                  alt="L'assistant rédactionnel"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Bloc 4 - Accompagnement & Formation */}
            <Link 
              href="/accompagnement-formation"
              className="group bg-white/95 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center transform hover:scale-105 relative z-10"
            >
              <div className="relative w-full h-16 md:h-20">
                <Image
                  src="/icone_accompagnement_texte.png"
                  alt="Accompagnement & Formation"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>    </main>
  );
}
