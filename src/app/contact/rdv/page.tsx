"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function RDVPage() {
  useEffect(() => {
    // Charger le script Calendly
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#FFF5EB] to-white">
      {/* Logo en haut à droite */}
      <div className="fixed top-4 right-6 lg:right-12 z-30">
        <div className="w-[11.4rem] h-[5rem] rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
          <Image
            src="/logo_cia_brun_basecourt_transp.png"
            alt="ConfidensIA Logo"
            width={240}
            height={180}
            className="object-cover translate-y-0.5"
            priority
          />
        </div>
      </div>

      <section className="pt-24 pb-16 px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          {/* Titre */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FF9933] to-[#e67e22] mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] mb-4">
              Réserver un rendez-vous
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Échange gratuit de 30 minutes pour discuter de vos besoins et explorer comment ConfidensIA peut vous accompagner.
            </p>
          </div>

          {/* Widget Calendly */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/jeanmichel-danto/30min"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>

          {/* Boutons de navigation */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#4A2C2A] border-2 border-[#4A2C2A] hover:bg-[#4A2C2A] hover:text-white font-semibold py-3 px-10 text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-center"
            >
              Retour au contact
            </Link>
            <Link
              href="/"
              className="inline-block bg-[#FF9933] hover:bg-[#e67e22] text-white font-semibold py-3 px-10 text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
