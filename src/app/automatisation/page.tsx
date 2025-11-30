import Image from "next/image";
import Link from "next/link";
import { DownloadButton } from "@/components";

export default function AutomatisationPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="fixed top-4 right-6 lg:right-12 z-30">
        <div className="w-[11.4rem] h-[5rem] rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
          <Image src="/logo_cia_brun_basecourt_transp.png" alt="Logo" width={240} height={180} className="object-cover translate-y-0.5" priority />
        </div>
      </div>

      <section className="relative min-h-screen flex items-center bg-white pt-20">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center">
                <Image src="/icone_automatisation_texte.png" alt="Automatisation" width={64} height={64} className="object-contain" />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A]">Automatisation</h1>
            </div>

            <p className="text-sm text-[#FF9933] font-semibold uppercase tracking-wide">Des automatisations fiables et éprouvées</p>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-[#4A2C2A] leading-tight px-4">
              Libérez-vous des tâches administratives répétitives sans usine à gaz technologique
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              L&apos;automatisation n&apos;est pas un outil supplémentaire, c&apos;est l&apos;orchestration d&apos;une série d&apos;actions métiers à partir de vos données et de vos outils existants.
            </p>

            <div className="bg-[#FFF5EB] rounded-2xl p-8 my-12 max-w-3xl mx-auto border-l-4 border-[#FF9933]">
              <p className="text-lg text-gray-800 leading-relaxed">
                L&apos;automatisation ne concerne pas les tâches d&apos;accompagnement.<br/>
                Elle cible les fonctions supports et les tâches administratives redondantes.
              </p>
              <p className="text-xl text-[#FF9933] font-bold mt-4">
                Dans la logique ConfidensIA : redonner du temps pour l&apos;humain.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a href="/contact" className="bg-[#FF9933] hover:bg-[#e67e22] text-white font-semibold py-3 px-8 rounded-full transition-all text-center">
                Découvrir en échange personnalisé
              </a>
            </div>
            <p className="text-sm text-gray-500">Chaque automatisation est construite sur mesure</p>
          </div>
        </div>
      </section>

      <section id="probleme" className="py-20 bg-[#FFF5EB]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#4A2C2A]/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#4A2C2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] mb-8">Le problème</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Vos équipes passent des heures sur des tâches administratives répétitives : traiter des mails, saisir des données éparpillées, vérifier les procédures attendues par chaque financeur, relancer des partenaires, vérifier des échéances, éditer des tableaux de bord...
            </p>
            <div className="bg-white rounded-2xl p-8 border-l-4 border-[#FF9933]">
              <div className="space-y-3 text-[#FF9933] font-semibold text-lg">
                <p>→ Du temps perdu pour l&apos;accompagnement</p>
                <p>→ Des risques d&apos;oubli</p>
                <p>→ Une charge mentale importante</p>
                <p>→ Des collaborateurs frustrés de faire &quot;de l&apos;administratif&quot; plutôt que leur cœur de métier</p>
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
                <svg className="w-10 h-10 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-8">La solution</h2>
            
            <p className="text-2xl text-center text-gray-800 font-semibold mb-8 leading-relaxed">
              L&apos;automatisation intelligente orchestre vos processus métiers en connectant vos données et vos outils existants - sans ajouter de nouvelle interface à maîtriser.
            </p>

            <p className="text-xl text-center text-gray-600 mb-16 italic">
              L&apos;IA comprend vos données (mails, PDF, documents), les structure selon vos règles métiers, et déclenche les actions appropriées.
            </p>

            <div className="flex justify-center my-16">
              <div className="bg-[#FFF5EB] rounded-2xl p-8 max-w-4xl">
                <div className="flex items-center justify-center gap-4 text-lg flex-wrap">
                  <div className="px-6 py-4 bg-white rounded-xl shadow-md text-center">
                    <p className="font-bold text-[#4A2C2A]">Données entrantes</p>
                    <p className="text-sm text-gray-600 mt-1">Mails, PDF, documents</p>
                  </div>
                  <svg className="w-8 h-8 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="px-6 py-4 bg-[#FF9933] text-white rounded-xl shadow-md text-center">
                    <p className="font-bold">Traitement IA</p>
                    <p className="text-sm mt-1">Compréhension & structuration</p>
                  </div>
                  <svg className="w-8 h-8 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="px-6 py-4 bg-white rounded-xl shadow-md text-center">
                    <p className="font-bold text-[#4A2C2A]">Actions automatiques</p>
                    <p className="text-sm text-gray-600 mt-1">Relances, alertes, édition</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-lg text-gray-600 italic">
              Une orchestration intelligente qui s&apos;adapte à vos processus métiers
            </p>
          </div>
        </div>
      </section>

      <section id="possibilites" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-8">
              Ce que l&apos;automatisation peut faire
            </h2>
            <p className="text-center text-xl text-gray-700 mb-16">Un processus complet en 4 étapes</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  num: "1",
                  title: "Traiter vos données entrantes",
                  desc: "Comprendre et extraire l&apos;essentiel de vos mails, PDF scannés, documents épars...",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                },
                {
                  num: "2",
                  title: "Structurer et alimenter automatiquement",
                  desc: "Vos tableaux de suivi, votre documentation, vos bases de données",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                },
                {
                  num: "3",
                  title: "Appliquer vos règles métiers",
                  desc: "Vérifier la complétude, calculer des échéances, identifier des anomalies",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                },
                {
                  num: "4",
                  title: "Déclencher les actions appropriées",
                  desc: "Relances, préparation de courriers, alertes, édition de tableaux de bord",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                }
              ].map((step, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:border-[#FF9933] border-2 border-transparent transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-[#4A2C2A] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="text-[#FF9933]">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#4A2C2A] mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="exemple" className="py-20 bg-[#FFF5EB]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md">
                <svg className="w-10 h-10 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-8">
              Un exemple concret : le suivi de l&apos;aide sociale à l&apos;hébergement
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 italic">Automatisation complète du processus administratif de l&apos;ASH</p>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF9933] flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-[#4A2C2A] mb-1">Réception</h4>
                      <p className="text-sm text-gray-600">Extraction automatique des données depuis les courriers du Conseil départemental ou les mails des familles, des tuteurs, etc.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF9933] flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-[#4A2C2A] mb-1">Alimentation</h4>
                      <p className="text-sm text-gray-600">Mise à jour automatique du tableau de suivi avec dates et montants</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF9933] flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-[#4A2C2A] mb-1">Vérification</h4>
                      <p className="text-sm text-gray-600">Contrôle automatique des montants et détection d&apos;incohérences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF9933] flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-[#4A2C2A] mb-1">Action</h4>
                      <p className="text-sm text-gray-600">Génération des courriers de relance et alertes échéances</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-gray-600 mt-8 italic">
              Ce processus illustre comment l&apos;automatisation peut prendre en charge l&apos;ensemble d&apos;un flux administratif complexe, de la réception des documents à l&apos;édition des courriers.
            </p>
          </div>
        </div>
      </section>

      <section id="demarche" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-8">Comment ça marche ?</h2>
            <p className="text-center text-xl text-gray-700 mb-16">Nous construisons une démarche sur-mesure en trois étapes</p>

            <div className="space-y-12">
              {[
                {
                  num: 1,
                  title: "Nous analysons votre processus métier",
                  desc: "→ Identification des données entrantes, des règles métiers, des contraintes réglementaires et des actions attendues\n→ Notre plus-value : nous connaissons le secteur, la réglementation et vos contraintes opérationnelles",
                  benefit: "Vous obtenez une vision complète du processus à automatiser et de ses coûts (en général 6 000 à 15 000 € HT de mise en place et un coût très limité d&apos;usage < 10 € par mois)"
                },
                {
                  num: 2,
                  title: "Nous concevons votre automatisation personnalisée",
                  desc: "→ Pas d&apos;outil supplémentaire : nous connectons vos données et outils existants\n→ Nous travaillons avec les meilleurs outils du marché sur le plan technologique et les moins chers en termes de coûts d&apos;utilisation\n→ Architecture technique adaptée à votre infrastructure",
                  benefit: "Vous obtenez un outil d&apos;automatisation aux meilleurs standards actuels et une vision précise sur les données, les technologies et les coûts associés."
                },
                {
                  num: 3,
                  title: "Nous déployons et ajustons avec vous",
                  desc: "→ Formation des équipes et période d&apos;ajustement\n→ Suivi et optimisation continue",
                  benefit: "Vous bénéficiez d&apos;un accompagnement complet pour une adoption réussie"
                }
              ].map((step, i) => (
                <div key={i}>
                  <div className="flex gap-6 items-start">
                    <div className="w-16 h-16 rounded-full bg-[#4A2C2A] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#4A2C2A] mb-3">{step.title}</h3>
                      <div className="text-gray-700 mb-4 whitespace-pre-line">{step.desc}</div>
                      <div className="bg-[#FFF5EB] rounded-lg p-4 border-l-4 border-[#FF9933]">
                        <p className="text-[#4A2C2A] font-semibold">{step.benefit}</p>
                      </div>
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="flex justify-center my-8">
                      <svg className="w-6 h-6 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFF5EB]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-12">Pour qui ?</h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-lg text-gray-700 mb-6">L&apos;automatisation s&apos;adresse aux structures qui :</p>
              <div className="space-y-4">
                {[
                  "Gèrent des volumes importants de dossiers administratifs",
                  "Cherchent à harmoniser leurs processus (gestionnaires multi-établissements)",
                  "Ont des équipes support débordées par les tâches répétitives"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#FF9933] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
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
              {[
                "Libérez du temps pour l&apos;accompagnement : vos équipes se concentrent sur leur cœur de métier",
                "Réduisez la charge mentale : l&apos;IA gère le suivi administratif en arrière-plan",
                "Sécurisez vos processus : aucun oubli d&apos;échéance, traçabilité complète, conformité garantie",
                "Une solution qui s&apos;adapte à VOUS : nous construisons l&apos;automatisation autour de VOS processus, pas l&apos;inverse"
              ].map((b, i) => (
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#FF9933]/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#FF9933]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] mb-8">
              La technologie au service de l&apos;humain
            </h2>
            <div className="bg-[#FFF5EB] rounded-2xl p-8 space-y-4 text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Contrairement aux outils &quot;prêts à l&apos;emploi&quot;, nous ne vous imposons pas de changer vos méthodes de travail.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                L&apos;automatisation ConfidensIA s&apos;intègre dans votre écosystème existant et respecte vos spécificités métiers.
              </p>
              <p className="text-xl text-[#FF9933] font-bold text-center pt-4">
                Le principe : Redonner du temps pour l&apos;humain en automatisant ce qui n&apos;a pas besoin de l&apos;être.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#FF9933] to-[#e67e22]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center text-white space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Découvrez l&apos;automatisation en échange personnalisé</h2>
            <p className="text-lg">
              Chaque processus est unique. Nous prenons le temps d&apos;analyser vos besoins spécifiques avant de vous proposer une solution adaptée.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="mailto:patrick.danto@outlook.fr" className="hover:underline">patrick.danto@outlook.fr</a>
              <span>confidensia.fr</span>
            </div>
            <a href="/contact" className="inline-block bg-white text-[#FF9933] hover:bg-gray-100 font-semibold py-4 px-10 rounded-full transition-all shadow-xl">
              Planifier un échange
            </a>
            <p className="text-sm">Premier échange gratuit et sans engagement</p>
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center gap-6 py-12 bg-white">
        <DownloadButton 
          fileName="Fiche_automatisation.pdf"
          title="Fiche technique automatisation"
          description="Solutions d'automatisation - PDF"
          variant="secondary"
        />
        <Link href="/" className="bg-[#FF9933] hover:bg-[#e67e22] text-white font-semibold py-3 px-10 rounded-full transition-all shadow-lg">
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
