"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { VideoModal, DownloadButton } from "@/components";

const demoImages = [
  { src: "/assistant_demo.png", alt: "Interface principale" },
  { src: "/capture.png", alt: "Capture d'écran" },
  { src: "/interface_1.png", alt: "Interface 1" },
  { src: "/interface_2.png", alt: "Interface 2" },
];

export default function AssistantRedactionnelPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [pseudoStep, setPseudoStep] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);
  const pseudoTexts = ["M. Dupont habite à Paris. Il travaille...", "<PER_1> habite à <LOC_1>. Il travaille...", "M. Dupont habite à Paris. Il travaille..."];

  const openVideo = (videoId: string, title: string) => {
    setSelectedVideo({ id: videoId, title });
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    const interval = setInterval(() => setCurrentImageIndex((prev) => (prev + 1) % demoImages.length), 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setPseudoStep((prev) => (prev + 1) % 3), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <div className="fixed top-4 right-6 lg:right-12 z-30">
        <div className="w-[11.4rem] h-[5rem] rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
          <Image src="/logo_cia_brun_basecourt_transp.png" alt="Logo" width={240} height={180} className="object-cover translate-y-0.5" priority />
        </div>
      </div>

      <section className="relative min-h-screen flex items-center bg-white">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-4">
              <div className="relative h-[500px] bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
                <Image src={demoImages[currentImageIndex].src} alt={demoImages[currentImageIndex].alt} fill className="object-contain p-4" />
              </div>
              <div className="flex gap-4 justify-center">
                {demoImages.map((img, i) => <button key={i} onClick={() => setCurrentImageIndex(i)} className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === i ? "bg-[#FF9933] w-8" : "bg-gray-300"}`} />)}
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center">
                  <Image src="/icone_assistant.png" alt="Assistant" width={56} height={56} className="object-contain" />
                </div>
                <h1 className="text-2xl font-bold text-[#4A2C2A]">L&apos;Assistant Rédactionnel</h1>
              </div>
              <p className="text-sm text-[#FF9933] font-semibold uppercase">La première solution conçue pour le social et le médico-social</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] leading-tight">Utilisez l&apos;IA pour vos écrits professionnels sans compromettre le RGPD</h2>
              <p className="text-lg text-gray-700">Pseudonymisation sophistiquée et réversible de vos documents</p>
              <div className="space-y-3">
                {["Aucune donnée sensible ne quitte votre ordinateur (100% local)", "Compatible avec tous les outils IA (ChatGPT, Claude, etc.)", "Solution validée par une publication scientifique"].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#FF9933] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{b}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-4">
                <a href="/contact" className="bg-[#FF9933] hover:bg-[#e67e22] text-white font-semibold py-3 px-8 rounded-full text-center">Tester gratuitement pendant 14 jours</a>
                <a href="#solution" className="inline-flex items-center justify-center gap-2 text-[#FF9933] hover:text-[#e67e22] font-semibold py-3">Voir comment ça marche <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></a>
              </div>
              <p className="text-sm text-gray-500 text-center">Essai gratuit • Sans engagement • Sans carte bancaire</p>
            </div>
          </div>
        </div>
      </section>

      <section id="probleme" className="py-20 bg-[#FFF5EB]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#4A2C2A]/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#4A2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] mb-8">Le problème</h2>
            <p className="text-lg text-gray-700 mb-6">Les travailleurs sociaux passent des heures à rédiger : rapports éducatifs, DIPC, courriers administratifs, notes de synthèse...</p>
            <p className="text-lg text-gray-700 mb-8">ChatGPT et Claude pourraient aider, MAIS ils ne sont pas conformes RGPD avec des données sensibles.</p>
            <div className="bg-white rounded-2xl p-8 border-l-4 border-[#FF9933]">
              <div className="space-y-3 text-[#FF9933] font-semibold text-lg">
                <p>→ 5-10h/semaine perdues en rédaction</p>
                <p>→ Risque RGPD si utilisation d&apos;IA grand public</p>
                <p>→ Moins de temps pour l&apos;accompagnement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-[#FF9933]/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-8">La solution</h2>
            <div className="bg-white rounded-2xl p-8 border-2 border-[#FF9933] mb-16 text-center">
              <p className="text-xl text-gray-800 font-semibold"><strong>L&apos;Assistant Rédactionnel ConfidensIA</strong> combine la puissance de l&apos;IA avec la conformité RGPD totale.</p>
            </div>
            <h3 className="text-2xl font-bold text-[#4A2C2A] text-center mb-12">Comment ça marche ?</h3>
            <div className="space-y-12">
              {[
                { num: 1, title: "Vous rédigez votre texte", desc: "(avec noms de résidents, situations sensibles...)" },
                { num: 2, title: "ConfidensIA anonymise automatiquement", desc: "(noms → codes)", ex: '"M. Dupont" devient "<PER_1>"' },
                { num: 3, title: "L&apos;IA améliore votre texte", desc: "(reformulation, structure, clarté)", note: "Utilisez ChatGPT, Claude, Mistral... au choix" },
                { num: 4, title: "ConfidensIA ré-identifie automatiquement", desc: "(codes → vrais noms)", ex: '"<PER_1>" redevient "M. Dupont"' }
              ].map((step, i) => (
                <div key={i}>
                  <div className="flex gap-6 items-start">
                    <div className="w-16 h-16 rounded-full bg-[#4A2C2A] flex items-center justify-center text-white font-bold text-2xl">{step.num}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-[#4A2C2A] mb-2">{step.title}</h4>
                      <p className="text-gray-600 mb-2">{step.desc}</p>
                      {step.ex && <div className="bg-[#FFF5EB] rounded-lg p-4 inline-block"><p className="text-sm font-mono text-[#4A2C2A]">{step.ex}</p></div>}
                      {step.note && <p className="text-sm text-gray-500 mt-2 italic">{step.note}</p>}
                    </div>
                  </div>
                  {i < 3 && <div className="flex justify-center my-6"><svg className="w-6 h-6 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div>}
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-[#FF9933] to-[#e67e22] rounded-2xl p-8 mt-16 text-center text-white">
              <p className="text-xl font-semibold">→ Vous obtenez un texte de qualité professionnelle sans JAMAIS exposer de données sensibles</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cas-usage" className="py-20 bg-[#FFF5EB]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-12">Cas d&apos;usage concrets</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Écrits professionnels", sub: "(travailleurs sociaux)", desc: "Bilans, notes d&apos;incident, rapports" },
                { title: "DIPC", sub: "(chefs de service)", desc: "Synthétiser situations complexes" },
                { title: "Courriers", sub: "(directions, TS)", desc: "Reformuler avec diplomatie" },
                { title: "Notes de synthèse", sub: "(cadres)", desc: "Extraire l&apos;essentiel" }
              ].map((uc, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border-2 border-transparent hover:border-[#FF9933] transition-all shadow-sm hover:shadow-lg">
                  <h3 className="text-lg font-bold text-[#4A2C2A] mb-1">{uc.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{uc.sub}</p>
                  <p className="text-sm text-gray-700 italic">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="technologie" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-8">La technologie</h2>
            <p className="text-xl text-center text-gray-700 mb-16">L&apos;Assistant ConfidensIA repose sur <span className="text-[#FF9933] font-bold">3 innovations</span> :</p>
            <div className="space-y-8">
              <div className="bg-[#FFF5EB] rounded-xl p-8 border-l-4 border-[#FF9933]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#4A2C2A] text-white text-xs font-bold px-3 py-1 rounded-full">PROPRIÉTAIRE</span>
                  <h3 className="text-xl font-bold text-[#4A2C2A]">1. Modèle d&apos;anonymisation pour les ESSMS</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p>→ Premier modèle français médico-social</p>
                  <p>→ 100 types d&apos;informations détectées</p>
                  <p>→ <strong>85,9% de précision (F1-score)</strong></p>
                </div>
                <a href="https://zenodo.org/records/14215309" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-[#FF9933] hover:text-[#e67e22] font-semibold">Consulter la publication scientifique</a>
              </div>
              <div className="bg-[#FFF5EB] rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#4A2C2A] mb-4">2. Pseudonymisation réversible intelligente</h3>
                <div className="bg-white rounded-lg p-6">
                  <div className="font-mono text-center py-4">
                    <p className="text-lg text-[#4A2C2A] transition-all duration-500">{pseudoTexts[pseudoStep]}</p>
                  </div>
                  <div className="flex justify-center gap-2 mt-4">
                    {pseudoTexts.map((_, i) => <div key={i} className={`w-2 h-2 rounded-full transition-all ${pseudoStep === i ? "bg-[#FF9933] w-6" : "bg-gray-300"}`} />)}
                  </div>
                </div>
              </div>
              <div className="bg-[#FFF5EB] rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#4A2C2A] mb-4">3. Multi-IA orchestrée</h3>
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center justify-center gap-2 text-sm flex-wrap">
                    <span className="px-4 py-2 bg-[#4A2C2A] text-white rounded-lg">Texte</span>
                    <span className="text-[#FF9933]">→</span>
                    <span className="px-4 py-2 bg-[#FF9933] text-white rounded-lg">Pseudo</span>
                    <span className="text-[#FF9933]">→</span>
                    <span className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">IA</span>
                    <span className="text-[#FF9933]">→</span>
                    <span className="px-4 py-2 bg-[#FF9933] text-white rounded-lg">Ré-id</span>
                    <span className="text-[#FF9933]">→</span>
                    <span className="px-4 py-2 bg-[#4A2C2A] text-white rounded-lg">Final</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefices" className="py-20 bg-gradient-to-br from-[#FF9933] to-[#e67e22]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">Bénéfices concrets</h2>
            <div className="grid md:grid-cols-2 gap-6 text-white">
              {["Gagnez 5-10h par semaine", "Améliorez la qualité de vos écrits", "Utilisez l&apos;IA sans risque RGPD", "Libérez du temps pour l&apos;accompagnement"].map((b, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                  <p className="text-lg">→ <strong>{b}</strong></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-12">Découvrez l&apos;Assistant en vidéo</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <button
                onClick={() => openVideo('2EDdIfGlBzo', 'Présentation générale')}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-[#FF9933] to-[#e67e22] flex items-center justify-center">
                  <svg className="w-16 h-16 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-lg font-bold text-[#4A2C2A] mb-2 group-hover:text-[#FF9933] transition-colors">Présentation générale</h3>
                  <p className="text-sm text-gray-600">Découvrez comment ConfidensIA transforme votre façon d&apos;utiliser l&apos;IA</p>
                </div>
              </button>
              <button
                onClick={() => openVideo('Q3CELU2zfb0', 'Interface de l\'assistant')}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-[#4A2C2A] to-[#3a2220] flex items-center justify-center">
                  <svg className="w-16 h-16 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-lg font-bold text-[#4A2C2A] mb-2 group-hover:text-[#FF9933] transition-colors">Interface de l&apos;assistant</h3>
                  <p className="text-sm text-gray-600">Découverte de l&apos;interface utilisateur</p>
                </div>
              </button>
              <button
                onClick={() => openVideo('OXix6lqmpKM', 'Démonstration technique')}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-lg font-bold text-[#4A2C2A] mb-2 group-hover:text-[#FF9933] transition-colors">Démonstration technique</h3>
                  <p className="text-sm text-gray-600">Plongez dans le fonctionnement de la pseudonymisation intelligente</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="tarification" className="py-20 bg-[#FFF5EB]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-12">Tarification</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-xl p-8 border-4 border-[#FF9933] relative">
                <span className="absolute top-0 right-8 bg-[#FF9933] text-white text-xs font-bold px-4 py-1 rounded-b-lg">RECOMMANDÉ</span>
                <h3 className="text-2xl font-bold text-[#4A2C2A] mb-2">Essai gratuit</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#4A2C2A]">0 €</span>
                  <p className="text-gray-600">pendant 14 jours</p>
                </div>
                <a href="/contact" className="block w-full bg-[#FF9933] hover:bg-[#e67e22] text-white font-semibold py-3 rounded-full text-center transition-all">Commencer l&apos;essai</a>
              </div>
              <div className="bg-white rounded-xl p-8 border-2 border-[#4A2C2A]">
                <h3 className="text-2xl font-bold text-[#4A2C2A] mb-2">Offre solo</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#4A2C2A]">29 €</span>
                  <p className="text-gray-600">/ mois</p>
                </div>
                <a href="/contact" className="block w-full border-2 border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933] hover:text-white font-semibold py-3 rounded-full text-center transition-all">Choisir</a>
              </div>
              <div className="bg-white rounded-xl p-8 border-2 border-[#4A2C2A]">
                <h3 className="text-2xl font-bold text-[#4A2C2A] mb-2">Offre équipe</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#4A2C2A]">249 €</span>
                  <p className="text-gray-600">/ mois pour 10 utilisateurs</p>
                </div>
                <a href="/contact" className="block w-full border-2 border-[#FF9933] text-[#FF9933] hover:bg-[#FF9933] hover:text-white font-semibold py-3 rounded-full text-center transition-all">Contacter</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#FF9933] to-[#e67e22]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center text-white space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Testez gratuitement pendant 14 jours</h2>
            <p className="text-lg">Commencez à améliorer vos écrits professionnels dès aujourd&apos;hui, en toute conformité RGPD</p>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="mailto:patrick.danto@outlook.fr" className="hover:underline">patrick.danto@outlook.fr</a>
              <span>confidensia.fr</span>
            </div>
            <a href="/contact" className="inline-block bg-white text-[#FF9933] hover:bg-gray-100 font-semibold py-4 px-10 rounded-full transition-all shadow-xl">Démarrer mon essai gratuit</a>
            <p className="text-sm">Sans engagement • Sans carte bancaire • Annulation à tout moment</p>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center gap-6 py-12 bg-white">
        <DownloadButton 
          fileName="Fiche_assistant.pdf"
          title="Fiche technique assistant"
          description="Guide complet - PDF"
          variant="secondary"
        />
        <Link href="/" className="bg-[#FF9933] hover:bg-[#e67e22] text-white font-semibold py-3 px-10 rounded-full transition-all shadow-lg">Retour à l&apos;accueil</Link>
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
    </main>
  );
}
