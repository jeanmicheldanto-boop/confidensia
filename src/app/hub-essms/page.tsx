"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const demoImages = [
  { src: "/hub_demo.png", alt: "Interface conversationnelle" },
  { src: "/hub_graph.png", alt: "Analyses visuelles" },
  { src: "/hub_tableau.png", alt: "Données structurées" },
];

export default function HubEssmsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % demoImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const questions = [
    "Quel est le budget hébergement 2024 ?",
    "Quelle est l&apos;évolution des effectifs pour le Foyer de vie X ?",
    "Compare la trésorerie de mes établissements",
    "Génère le rapport d&apos;activité 2024",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Logo monochrome en haut à droite */}
      <div className="fixed top-4 right-6 lg:right-12 z-30">
        <div className="w-[11.4rem] h-[5rem] rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
          <Image
            src="/logo_cia_brun_basecourt_transp.png"
            alt="Logo"
            width={240}
            height={180}
            className="object-cover translate-y-0.5"
            priority
          />
        </div>
      </div>

      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-[#FFF5EB]">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Partie gauche */}
            <div className="space-y-6">
              <div className="mb-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-md flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/icone_hub.png"
                      alt="Le Hub des ESSMS"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-[#4A2C2A] leading-tight">
                    Le Hub des ESSMS
                  </h1>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] leading-tight mb-4">
                  Interrogez et analysez toutes vos données financières et documentaires avec l&apos;IA
                </h2>
                <p className="text-xl text-gray-700 mb-2">
                  Un outil totalement personnalisable
                </p>
                <p className="text-lg text-[#FF9933] font-semibold">
                  Posez vos questions en français, obtenez des réponses instantanées
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md space-y-3">
                <p className="text-sm text-gray-600 font-medium mb-3">Exemples de questions :</p>
                {questions.map((question, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-[#FF9933] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>&quot;{question}&quot;</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/contact"
                  className="inline-block bg-[#FF9933] hover:bg-[#e67e22] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Découvrir en démo personnalisée
                </a>
                <a
                  href="#fonctionnement"
                  className="inline-flex items-center justify-center gap-2 text-[#FF9933] hover:text-[#e67e22] font-semibold py-3 px-8 transition-all"
                >
                  Voir comment ça marche
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Partie droite - Galerie d&apos;images */}
            <div className="space-y-4">
              <div className="relative h-96 bg-white rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src={demoImages[currentImageIndex].src}
                  alt={demoImages[currentImageIndex].alt}
                  fill
                  className="object-contain p-4 transition-opacity duration-500"
                />
              </div>
              <div className="flex gap-4 justify-center">
                {demoImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index ? "border-[#FF9933] scale-105" : "border-gray-200"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Le problème */}
      <section id="probleme" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#4A2C2A]/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#4A2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] mb-8">
              Le problème
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Vos données sont partout : dans des Excel isolés (EPRD, ERRD, CA), des documents PDF (CPOM, conventions, arrêtés de tarification, règlements), des boîtes mail, des fichiers RH éparpillés...
            </p>
            <div className="bg-[#FFF5EB] rounded-2xl p-8 border-l-4 border-[#FF9933]">
              <p className="text-2xl font-bold text-[#FF9933]">
                Impossible d&apos;avoir une vision d&apos;ensemble. Chaque reporting devient une enquête manuelle. Les décisions se prennent à l&apos;aveugle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: La solution */}
      <section id="solution" className="py-20 bg-[#FFF5EB]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md">
                <svg className="w-10 h-10 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-6">
              La solution
            </h2>
            <p className="text-2xl text-center text-gray-800 font-semibold mb-8">
              Le Hub des ESSMS centralise TOUTES vos données - financières ET documentaires - dans une seule interface conversationnelle.
            </p>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <p className="text-lg font-semibold text-[#4A2C2A] mb-4">Posez vos questions en français :</p>
              <div className="space-y-3">
                {questions.map((question, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-[#FF9933] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>&quot;{question}&quot;</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {demoImages.map((img, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                  <div className="relative h-48">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-[#4A2C2A] text-center">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Comment ça marche */}
      <section id="fonctionnement" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-[#FF9933]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-16">
              Comment ça marche ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Étape 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4A2C2A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4A2C2A] mb-2">
                    Vous téléchargez vos fichiers financiers
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">(EPRD, CA, extractions de vos logiciels financiers)</p>
                  <p className="text-[#FF9933] font-semibold text-sm">
                    → Le système extrait automatiquement les 722 variables budgétaires et calcule 136 indicateurs de gestion
                  </p>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4A2C2A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4A2C2A] mb-2">
                    Vous posez vos questions en langage naturel
                  </h3>
                  <p className="text-[#FF9933] font-semibold text-sm">
                    → L&apos;IA comprend votre intention, interroge les bonnes sources, et vous répond avec les références
                  </p>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4A2C2A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4A2C2A] mb-2">
                    Vous alimentez la base documentaire
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">(arrêtés, CPOM, règlements intérieurs, conventions collectives, circulaires...)</p>
                  <p className="text-[#FF9933] font-semibold text-sm">
                    → Tout est indexé et organisé par établissement ou service
                  </p>
                </div>
              </div>

              {/* Étape 4 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4A2C2A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4A2C2A] mb-2">
                    Vous générez vos rapports en un clic
                  </h3>
                  <p className="text-[#FF9933] font-semibold text-sm">
                    → Tableaux de bord, rapports d&apos;activité, analyses budgétaires... Tout est exportable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Pour qui */}
      <section id="cibles" className="py-20 bg-[#FFF5EB]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md">
                <svg className="w-10 h-10 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-12">
              Pour qui ?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:border-[#FF9933] border-2 border-transparent transition-all">
                <div className="w-16 h-16 rounded-full bg-[#4A2C2A]/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#4A2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4A2C2A] mb-3">
                  Organismes gestionnaires multi-établissements
                </h3>
                <p className="text-gray-600">10-30 sites</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:border-[#FF9933] border-2 border-transparent transition-all">
                <div className="w-16 h-16 rounded-full bg-[#4A2C2A]/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#4A2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4A2C2A] mb-3">
                  Fédérations d&apos;établissements
                </h3>
                <p className="text-gray-600">Mutualisation des données</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:border-[#FF9933] border-2 border-transparent transition-all">
                <div className="w-16 h-16 rounded-full bg-[#4A2C2A]/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#4A2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4A2C2A] mb-3">
                  Groupements ou OG partenaires
                </h3>
                <p className="text-gray-600">Collaboration inter-structures</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:border-[#FF9933] border-2 border-transparent transition-all">
                <div className="w-16 h-16 rounded-full bg-[#4A2C2A]/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#4A2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#4A2C2A] mb-3">
                  Directions générales et sièges sociaux
                </h3>
                <p className="text-gray-600">Pilotage stratégique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Bénéfices */}
      <section id="benefices" className="py-20 bg-gradient-to-br from-[#FF9933] to-[#e67e22]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Bénéfices concrets
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <p className="text-lg font-semibold">
                  → <span className="font-bold">Réduisez de 80% le temps passé</span> à chercher l&apos;information
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <p className="text-lg font-semibold">
                  → <span className="font-bold">Générez vos rapports en 30 secondes</span> au lieu de 3 heures
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <p className="text-lg font-semibold">
                  → <span className="font-bold">Prenez des décisions éclairées</span> avec 136 indicateurs en temps réel
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                <p className="text-lg font-semibold">
                  → <span className="font-bold">Sécurisez vos données</span> avec l&apos;isolation multi-tenant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Technologie */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-[#FF9933]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-8">
              La technologie sous le capot
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12">
              Le Hub combine <span className="text-[#FF9933] font-bold">3 technologies d&apos;IA</span> :
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start bg-[#FFF5EB] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF9933]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4A2C2A] mb-2">
                    L&apos;extraction intelligente
                  </h3>
                  <p className="text-gray-700">
                    Des données chiffrées vers une base de données relationnelles
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-[#FFF5EB] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF9933]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4A2C2A] mb-2">
                    La recherche sémantique (RAG)
                  </h3>
                  <p className="text-gray-700">
                    Vos documents sont transformés en empreintes numériques et l&apos;IA trouve les passages pertinents en fonction du contexte
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-[#FFF5EB] rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#FF9933]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4A2C2A] mb-2">
                    L&apos;orchestrateur intelligent
                  </h3>
                  <p className="text-gray-700">
                    Qui comprend ce qu&apos;il doit chercher et agit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Sur mesure */}
      <section className="py-20 bg-[#FFF5EB]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md">
                <svg className="w-10 h-10 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] mb-8">
              Une solution sur mesure
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed">
                Le Hub est <span className="text-[#FF9933] font-bold">une architecture technique qui se personnalise</span> en fonction de VOS données et VOS besoins de reporting. C&apos;est pourquoi notre accompagnement inclut une phase de conseil pour adapter la solution à votre structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#FF9933] to-[#e67e22]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center text-white space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Découvrez le Hub en démo personnalisée
            </h2>
            <p className="text-lg">
              Nous adaptons la démonstration à votre contexte : vos types d&apos;établissements, vos enjeux de reporting, vos contraintes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:patrick.danto@outlook.fr" className="hover:underline">
                  patrick.danto@outlook.fr
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>confidensia.fr</span>
              </div>
            </div>

            <a
              href="/contact"
              className="inline-block bg-white text-[#FF9933] hover:bg-gray-100 font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Demander une démo
            </a>
          </div>
        </div>
      </section>

      {/* Bouton retour */}
      <div className="flex justify-center py-12 bg-white">
        <Link
          href="/"
          className="inline-block bg-[#FF9933] hover:bg-[#e67e22] text-white font-semibold py-3 px-10 text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
