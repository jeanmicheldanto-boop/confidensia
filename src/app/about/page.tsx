"use client";

import Image from "next/image";
import Link from "next/link";
import { DownloadButton } from "@/components";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Logo monochrome en haut à droite */}
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

      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#FFF5EB] to-white">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#4A2C2A] leading-tight">
                À propos de ConfidensIA
              </h1>
              <p className="text-lg text-gray-600">
                Technologies de confiance pour les environnements sociaux et médico-sociaux
              </p>
              <a
                href="#mission"
                className="inline-block bg-[#FF9933] hover:bg-[#e67e22] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Découvrir notre mission
              </a>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-white shadow-lg">
              <Image
                src="/hero.png"
                alt="Hero illustration"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Vos défis, notre mission */}
      <section id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-16">
            Vos défis, notre mission
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-64 lg:h-80">
              <Image
                src="/doc.png"
                alt="Documents organisés"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                Diriger un établissement ou un service social ou médico-social aujourd&apos;hui, c&apos;est jongler avec :
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933] mt-1">•</span>
                  <span>Une inflation du reporting (tarifications, CPOM, Serafin-PH, EIG, dotations multiples, règles spécifiques à chaque financeur, ...),</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933] mt-1">•</span>
                  <span>Des exigences de qualité et de conformité renforcées,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933] mt-1">•</span>
                  <span>Des besoins en hausse avec des ressources contraintes,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933] mt-1">•</span>
                  <span>La nécessité d&apos;innover tout en préservant l&apos;humain.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#FFF5EB] border-l-4 border-[#FF9933] rounded-lg p-8 space-y-4">
            <p className="text-lg font-semibold text-[#4A2C2A]">
              La technologie peut être un levier...
            </p>
            <p className="text-gray-700 leading-relaxed">
              À condition qu&apos;elle soit pensée PAR et POUR le secteur. C&apos;est à dire avec un respect de ses valeurs, une compréhension de son environnement et une envie commune de transformation dans l&apos;intérêt des personnes accompagnées.
            </p>
            <div className="pt-4">
              <p className="text-lg font-bold text-[#4A2C2A]">Notre conviction :</p>
              <p className="text-gray-700 italic">
                Maîtriser la bureaucratie et comprendre vos contraintes pour vous en libérer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Une aventure humaine */}
      <section id="equipe" className="py-20 bg-[#FFF5EB]">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-8">
            Une aventure humaine, une double expertise
          </h2>
          
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            ConfidensIA est née de la rencontre de quatre profils complémentaires, tous liés à la technologie ET au médico-social :
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Patrick Danto */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#FF9933]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4A2C2A]">Patrick Danto</h3>
                  <p className="text-sm text-gray-600">Développement technique</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                12 ans de management dans le secteur social et médico-social, diplômé en analyse de la donnée (Sciences Po et ENSAE) et formé à la programmation et aux technologies d&apos;intelligence artificielle. Il développe les solutions techniques.
              </p>
            </div>

            {/* Emmanuelle Rambaud */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#4A2C2A]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-[#4A2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4A2C2A]">Emmanuelle Rambaud</h3>
                  <p className="text-sm text-gray-600">Relation clientèle</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Diplômée en psychologie et en politiques publiques, elle assure le support à la relation clientèle.
              </p>
            </div>

            {/* Loïc Danto */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#FF9933]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4A2C2A]">Loïc Danto</h3>
                  <p className="text-sm text-gray-600">Fiabilité opérationnelle</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Expert en administration des données et back office, il assure la fiabilité opérationnelle de nos solutions.
              </p>
            </div>

            {/* Alex Djegnonde */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-[#4A2C2A]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-[#4A2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4A2C2A]">Alex Djegnonde</h3>
                  <p className="text-sm text-gray-600">Président de la SAS</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Président de la SAS, il apporte sa vision stratégique et son expérience de salarié de l&apos;aide à la personne.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Convaincus que la technologie pouvait être un levier de transformation du secteur si on la pensait AVEC les acteurs et les personnes concernées, nous avons commencé à développer des solutions en parallèle de nos activités avant de nous lancer dans l&apos;aventure entrepreneuriale.
            </p>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#FF9933]">
              <h3 className="text-xl font-bold text-[#4A2C2A] mb-4">Notre différence :</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933] mt-1">→</span>
                  <span>Nous connaissons vos métiers de l&apos;intérieur.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933] mt-1">→</span>
                  <span>Nous maîtrisons les outils technologiques.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933] mt-1">→</span>
                  <span>Nous croyons à l&apos;accompagnement plutôt qu&apos;au « produit clé en main ».</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pourquoi choisir ConfidensIA */}
      <section id="valeurs" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-16">
            Pourquoi choisir ConfidensIA ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* SOBRIÉTÉ */}
            <div className="bg-[#FFF5EB] rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#4A2C2A] mb-3">SOBRIÉTÉ</h3>
              <p className="text-gray-700">
                Pas d&apos;usine à gaz. Des outils efficaces, pensés pour l&apos;usage réel.
              </p>
            </div>

            {/* ACCOMPAGNEMENT */}
            <div className="bg-[#FFF5EB] rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#4A2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#4A2C2A] mb-3">ACCOMPAGNEMENT</h3>
              <p className="text-gray-700">
                Nous ne vendons pas un logiciel, nous construisons avec vous.
              </p>
            </div>

            {/* RESPONSABILITÉ */}
            <div className="bg-[#FFF5EB] rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#4A2C2A] mb-3">RESPONSABILITÉ</h3>
              <p className="text-gray-700">
                Respect du RGPD, transparence des algorithmes, primauté de l&apos;humain.
              </p>
            </div>

            {/* PERSONNALISATION */}
            <div className="bg-[#FFF5EB] rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#4A2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#4A2C2A] mb-3">PERSONNALISATION</h3>
              <p className="text-gray-700">
                Respect de votre logique métier, association des professionnels, support dans la durée.
              </p>
            </div>
          </div>

          {/* Séparateur */}
          <div className="flex justify-center my-12">
            <svg width="200" height="20" viewBox="0 0 200 20" fill="none">
              <path d="M0 10 Q 50 5, 100 10 T 200 10" stroke="#FF9933" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Notre différence */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#4A2C2A] mb-6 text-center">
              Notre différence face aux autres acteurs ?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              ConfidensIA ne se positionne pas en concurrence directe avec les autres acteurs et entend développer un positionnement original.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#FF9933] text-xl">→</span>
                <span className="text-gray-700">Nous connaissons le CASF, les CPOM, les EPRD, Serafin-PH, la M22</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF9933] text-xl">→</span>
                <span className="text-gray-700">Nous avons été directeurs, cadres, aidants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF9933] text-xl">→</span>
                <span className="text-gray-700">Lorsqu&apos;un outil grand public, simple et peu coûteux existe, nous vous suggérons de l&apos;utiliser</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF9933] text-xl">→</span>
                <span className="text-gray-700">Nous développons nos propres outils lorsqu&apos;il n&apos;existe pas d&apos;outils sur le marché (pas de sous-traitance)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FF9933] text-xl">→</span>
                <span className="text-gray-700">Nous restons à taille humaine pour rester réactifs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Approche scientifique */}
      <section id="approche" className="py-20 bg-[#FFF5EB]">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-16">
            Une approche scientifique et rigoureuse
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Publication scientifique */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#4A2C2A] mb-6">Publication scientifique</h3>
              <div className="mb-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Notre système de pseudonymisation pour l&apos;assistant rédactionnel fait l&apos;objet d&apos;une publication scientifique
                </p>
                <a 
                  href="https://zenodo.org/records/17689395" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#FF9933] hover:text-[#e67e22] font-semibold text-sm underline"
                >
                  Consulter la publication →
                </a>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933] mt-1">→</span>
                  <span>Premier modèle de reconnaissance d&apos;entités nommées (NER) conçu spécifiquement pour les écrits professionnels du secteur social et médico-social français</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933] mt-1">→</span>
                  <span>Taxonomie de 100 catégories d&apos;entités développée avec des professionnels du terrain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF9933] mt-1">→</span>
                  <span>85,9% de précision (F1-score) et plus de 96% sur entités critiques sur corpus de test</span>
                </li>
              </ul>
            </div>

            {/* Phases pilotes */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#4A2C2A] mb-6">Phases pilotes en cours</h3>
              <p className="text-gray-700 mb-6">
                Plusieurs structures testent actuellement nos solutions en avant-première.
              </p>
              <div className="bg-[#FFF5EB] rounded-lg p-6 mb-6">
                <p className="font-semibold text-[#4A2C2A] mb-3">Nos utilisateurs apprécient particulièrement :</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF9933] mt-1">✓</span>
                    <span>La simplicité d&apos;utilisation malgré la sophistication technique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF9933] mt-1">✓</span>
                    <span>L&apos;adaptation précise à leurs besoins métier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF9933] mt-1">✓</span>
                    <span>La disponibilité et la réactivité de l&apos;équipe</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section finale: CTA */}
      <section className="py-20 bg-gradient-to-br from-[#FF9933] to-[#e67e22]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Parlons de vos défis
            </h2>
            <p className="text-lg leading-relaxed">
              Chaque structure a ses spécificités, ses contraintes, ses priorités.
            </p>
            <p className="text-lg leading-relaxed">
              Nous ne proposons pas de solution toute faite.<br/>
              Nous prenons le temps d&apos;échanger avec vous pour comprendre vos besoins réels et vous proposer une réponse adaptée.
            </p>
            <div className="pt-8 space-y-4">
              <a 
                href="/contact"
                className="inline-block bg-white text-[#FF9933] hover:bg-gray-100 font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Premier échange gratuit et sans engagement
              </a>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <a 
                  href="mailto:patrick.danto@outlook.fr" 
                  className="text-white hover:text-gray-100 text-sm underline"
                >
                  patrick.danto@outlook.fr
                </a>
                <a 
                  href="https://linkedin.com/in/patrick-danto-36408a380" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-100 text-sm underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouton retour */}
      <div className="flex justify-center items-center gap-6 py-12 bg-white">
        <DownloadButton 
          fileName="Brochure ConfidensIA.pdf"
          title="Télécharger notre brochure"
          description="Présentation complète - PDF"
          variant="secondary"
        />
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
