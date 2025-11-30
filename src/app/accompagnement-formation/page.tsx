'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Lightbulb, Star, MapPin, Users, Heart, Mail, Globe, ArrowRight } from 'lucide-react';

export default function AccompagnementFormationPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header with Logo */}
      <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
        <Image src="/logo_cia_brun_basecourt_transp.png" alt="ConfidensIA" width={120} height={40} className="h-10 w-auto" />
      </div>

      {/* Section 1: Hero */}
      <section className="relative bg-white pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex items-center gap-4 mb-6">
                <Image src="/icone_accompagnement.png" alt="Accompagnement" width={56} height={56} className="object-contain" />
                <p className="text-[#FF9933] font-semibold text-sm tracking-wide uppercase">UN ACCOMPAGNEMENT COOPÉRATIF ET LUDIQUE</p>
              </div>

              <h1 className="text-5xl font-bold text-[#4A2C2A] leading-tight">
                Développez votre maturité IA et structurez votre stratégie data
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                ConfidensIA est une aventure collective tournée vers la technologie utile. Au sein d&apos;une équipe de 4 personnes et entourés au besoin de professionnels du secteur, nous accompagnons les ESSMS dans leur transformation.
              </p>

              {/* Points clés */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#FF9933] flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Transformation des ESSMS</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#FF9933] flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Maîtrise de la réglementation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-[#FF9933] flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Développement de solutions techniques conformes RGPD</span>
                </div>
              </div>

              {/* Méthode */}
              <div className="bg-[#FFF5EB] border-l-4 border-[#FF9933] p-6 rounded-r-lg">
                <p className="text-[#4A2C2A] text-lg">
                  <strong>Notre méthode : </strong>ancrage terrain, formations-actions, personnalisation totale.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/questionnaire" className="bg-[#FF9933] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e67e22] transition-all transform hover:scale-105 text-center shadow-lg animate-pulse">
                  Commencer par l&apos;auto-diagnostic gratuit
                </Link>
                <a href="#formats" className="text-[#FF9933] font-semibold px-8 py-4 rounded-lg border-2 border-[#FF9933] hover:bg-[#FFF5EB] transition-all flex items-center justify-center gap-2">
                  Découvrir nos formats d&apos;accompagnement
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <Image src="/auto-diag.png" alt="Auto-diagnostic IA" width={600} height={600} className="w-full h-auto object-contain drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Le constat */}
      <section id="constat" className="bg-[#FFF5EB] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-6">
              <div className="bg-[#4A2C2A] p-4 rounded-full">
                <Lightbulb className="text-white" size={48} />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-[#4A2C2A] mb-6">Le constat</h2>

            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Les ESSMS sont confrontées à une hausse des besoins, des exigences renforcées et des contraintes sur les ressources. Les injonctions paradoxales s&apos;accumulent. L&apos;attente d&apos;une manne qui ne vient jamais peut rendre fou.
              </p>
              <p>
                Pendant ce temps, les gains issus de la technologie paraissent sous-estimés ou inaccessibles. L&apos;IA suscite de la curiosité et beaucoup l&apos;utilisent déjà sans cadre.
              </p>
            </div>

            {/* Message clé */}
            <div className="bg-white border-2 border-[#FF9933] p-8 rounded-xl shadow-lg mt-8">
              <p className="text-xl font-semibold text-[#FF9933] leading-relaxed">
                Un virage paraît nécessaire : une technologie utile, sobre, ancrée dans vos réalités, qui permet de se concentrer sur l&apos;essentiel : l&apos;humain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Notre approche */}
      <section id="approche" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#FF9933] p-3 rounded-full">
                <Star className="text-white" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-[#4A2C2A]">Notre approche</h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              ConfidensIA est une aventure collective tournée vers la technologie utile. Au sein d&apos;une équipe de 4 personnes et entourés au besoin de professionnels du secteur, nous accompagnons les ESSMS dans leur transformation.
            </p>

            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="font-bold text-[#4A2C2A]">Notre expertise :</p>
              <p>transformation des ESSMS, maîtrise de la réglementation, développement de solutions techniques conformes RGPD.</p>
            </div>

            <div className="bg-white border-2 border-[#FF9933] p-8 rounded-xl shadow-md">
              <p className="text-xl text-[#4A2C2A]">
                <strong>Notre méthode : </strong>ancrage terrain, formations-actions, personnalisation totale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Notre méthodologie */}
      <section id="methodologie" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="bg-[#FF9933] p-3 rounded-full">
                <MapPin className="text-white" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-[#4A2C2A]">Notre méthodologie</h2>
            </div>

            <p className="text-center text-xl text-gray-700 mb-12">
              Nous proposons 4 niveaux d&apos;accompagnement adaptés à vos besoins
            </p>

            <div className="space-y-6">
              {/* Niveau 1 */}
              <div className="bg-white border-2 border-[#FF9933] p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="bg-[#FF9933] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">1</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-[#4A2C2A]">Auto-diagnostic interactif</h3>
                      <span className="bg-[#FF9933] text-white px-3 py-1 rounded-full text-sm font-semibold">GRATUIT • 15 min</span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Évaluez votre maturité IA en ligne<br />
                      → Identifiez vos priorités et obtenez votre profil
                    </p>
                    <Link href="/questionnaire" className="inline-block text-[#FF9933] font-semibold hover:underline">
                      Faire l&apos;auto-diagnostic →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Niveau 2 */}
              <div className="bg-[#FFF5EB] border-2 border-[#4A2C2A] p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="bg-[#4A2C2A] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">2</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-[#4A2C2A]">Diagnostic approfondi</h3>
                      <span className="bg-[#4A2C2A] text-white px-3 py-1 rounded-full text-sm font-semibold">1 journée sur site • 800 € HT</span>
                    </div>
                    <div className="text-gray-700 mb-4 space-y-2">
                      <p>→ Entretiens équipes et direction</p>
                      <p>→ Analyse de vos processus et données</p>
                      <p>→ Identification des gains rapides et des freins</p>
                    </div>
                    <p className="text-[#FF9933] font-semibold">
                      Vous obtenez une cartographie précise de votre situation et des recommandations actionnables
                    </p>
                  </div>
                </div>
              </div>

              {/* Niveau 3 */}
              <div className="bg-white border-2 border-[#FF9933] p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="bg-[#FF9933] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">3</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-[#4A2C2A]">Formations-actions</h3>
                      <span className="bg-[#FF9933] text-white px-3 py-1 rounded-full text-sm font-semibold">½j à 2j selon besoins • À partir de 1000 € HT</span>
                    </div>
                    <div className="text-gray-700 mb-4 space-y-2">
                      <p>→ Ateliers participatifs : enjeux données, techniques IA, risques, cas d&apos;usage</p>
                      <p>→ Mise en pratique immédiate sur vos cas réels</p>
                    </div>
                    <p className="text-[#FF9933] font-semibold">
                      Vos équipes montent en compétence et expérimentent concrètement
                    </p>
                  </div>
                </div>
              </div>

              {/* Niveau 4 */}
              <div className="bg-[#FFF5EB] border-2 border-[#4A2C2A] p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="bg-[#4A2C2A] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">4</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-[#4A2C2A]">Accompagnement stratégique</h3>
                      <span className="bg-[#4A2C2A] text-white px-3 py-1 rounded-full text-sm font-semibold">3-6 mois • À partir de 5000 € HT</span>
                    </div>
                    <div className="text-gray-700 mb-4 space-y-2">
                      <p>→ Rédaction de votre Charte IA</p>
                      <p>→ Élaboration d&apos;une stratégie données personnalisée</p>
                      <p>→ Déploiement d&apos;outils conformes RGPD et suivi</p>
                    </div>
                    <p className="text-[#FF9933] font-semibold">
                      Vous structurez une transformation complète et durable de votre organisation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Exemples de formats */}
      <section id="formats" className="bg-[#FFF5EB] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="bg-[#FF9933] p-3 rounded-full">
                <Users className="text-white" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-[#4A2C2A]">Exemples de formats d&apos;accompagnement</h2>
            </div>

            <p className="text-center text-xl text-gray-700 mb-12">
              Notre approche est personnalisée en fonction de vos besoins, voici quelques exemples :
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Format 1 */}
              <div className="bg-white border-2 border-[#4A2C2A] p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#4A2C2A] mb-2">Format &ldquo;Découvert&rdquo;</h3>
                <p className="text-[#FF9933] font-semibold mb-4">Durée : 1/2 journée</p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Lors de votre séminaire d&apos;encadrement : présentation ludique et pédagogique des concepts de l&apos;IA, baromètre des usages dans vos équipes, échanges sur vos freins et opportunités.
                </p>
                <p className="text-[#FF9933] font-semibold">
                  Vous repartez avec une vision claire et des pistes concrètes adaptées à votre contexte.
                </p>
              </div>

              {/* Format 2 */}
              <div className="bg-[#FFF5EB] border-2 border-[#FF9933] p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#4A2C2A] mb-2">Format &ldquo;Stratégie&rdquo;</h3>
                <p className="text-[#FF9933] font-semibold mb-4">Durée : 3 jours</p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Construisons ensemble votre feuille de route IA : diagnostic approfondi sur site, ateliers participatifs pour élaborer une approche spécifique à votre ESSMS, rédaction collaborative de votre Charte IA (avec prise en compte des usages hors cadre)
                </p>
                <p className="text-[#FF9933] font-semibold">
                  Vous repartez avec une charte IA qui vous ressemble et 3 gains rapides grâce à l&apos;IA.
                </p>
              </div>

              {/* Format 3 */}
              <div className="bg-white border-2 border-[#4A2C2A] p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#4A2C2A] mb-2">Format &ldquo;Pilote&rdquo;</h3>
                <p className="text-[#FF9933] font-semibold mb-4">Durée : 3 mois</p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Testons ensemble sur un cas d&apos;usage concret : par exemple déployez l&apos;assistant rédactionnel avec 5 travailleurs sociaux volontaires, organisez des ateliers de co-développement mensuels pour partager les pratiques, mesurez les résultats à 3 mois. Si ça marche (et ça marchera), vous généralisez en toute confiance.
                </p>
                <p className="text-[#FF9933] font-semibold">
                  Vous repartez avec un usage différenciant et maîtrisé de l&apos;IA.
                </p>
              </div>

              {/* Format 4 */}
              <div className="bg-[#FFF5EB] border-2 border-[#FF9933] p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-[#4A2C2A] mb-2">Format &ldquo;Transformation&rdquo;</h3>
                <p className="text-[#FF9933] font-semibold mb-4">Durée : 6-12 mois</p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Pour les organismes gestionnaires ambitieux : gouvernance IA déployée sur vos établissements, 3 outils mis en place (reporting, rédaction, pilotage), formation de tous les cadres, accompagnement au long cours.
                </p>
                <p className="text-[#FF9933] font-semibold">
                  Objectif mesuré : réduction de 30-40% du temps administratif pour libérer du temps d&apos;accompagnement.
                </p>
              </div>
            </div>

            <p className="text-center text-gray-600 italic">
              Tous ces formats sont personnalisables en fonction de vos besoins spécifiques
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Ce qui nous différencie */}
      <section id="differences" className="bg-gradient-to-br from-[#FF9933] to-[#e67e22] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12 justify-center">
              <div className="bg-white p-3 rounded-full">
                <Heart className="text-[#FF9933]" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-white">Ce qui nous différencie</h2>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-10 rounded-2xl shadow-2xl space-y-6 text-white">
              <div className="flex items-start gap-4">
                <span className="text-2xl">→</span>
                <p className="text-lg leading-relaxed">
                  <strong>Une méthodologie d&apos;auto-diagnostic IA adaptée aux ESSMS</strong> accessible gratuitement
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">→</span>
                <p className="text-lg leading-relaxed">
                  <strong>La prise en compte du shadow IA</strong> (c&apos;est à dire des usages professionnels avec des outils personnels)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">→</span>
                <p className="text-lg leading-relaxed">
                  <strong>Charte IA personnalisée</strong> adaptée à vos valeurs et contraintes
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">→</span>
                <p className="text-lg leading-relaxed">
                  <strong>Formations-actions de terrain</strong> (ateliers participatifs, co-développement, pédagogie adaptée et ancrée dans les réalités de vos métiers que nous connaissons)
                </p>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">→</span>
                <p className="text-lg leading-relaxed">
                  <strong>Maîtrise de l&apos;environnement réglementaire et du RGPD</strong> mais dans une approche qui encadre et sensibilise davantage qu&apos;elle n&apos;interdit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Auto-diagnostic mis en avant */}
      <section id="diagnostic" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#4A2C2A] text-center mb-12">
              Commencez par l&apos;auto-diagnostic gratuit
            </h2>

            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h3 className="text-2xl font-semibold text-[#4A2C2A]">
                Évaluez votre maturité IA en 15 minutes
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 justify-center">
                  <CheckCircle className="text-[#FF9933] flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Identifiez vos priorités</span>
                </div>
                <div className="flex items-start gap-3 justify-center">
                  <CheckCircle className="text-[#FF9933] flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Obtenez votre profil personnalisé</span>
                </div>
                <div className="flex items-start gap-3 justify-center">
                  <CheckCircle className="text-[#FF9933] flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">Recevez des recommandations actionnables</span>
                </div>
                <div className="flex items-start gap-3 justify-center">
                  <CheckCircle className="text-[#FF9933] flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">100% gratuit et sans engagement</span>
                </div>
              </div>

              <Link href="/questionnaire" className="inline-block bg-[#FF9933] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e67e22] transition-all transform hover:scale-105 shadow-lg animate-pulse">
                Démarrer l&apos;auto-diagnostic IA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: CTA Final */}
      <section className="bg-gradient-to-br from-[#FF9933] to-[#e67e22] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 text-white">
            <h2 className="text-5xl font-bold mb-6">Parlons de vos défis</h2>

            <div className="text-xl leading-relaxed space-y-4">
              <p>Chaque structure a ses spécificités, ses contraintes, ses priorités.</p>
              <p>
                Nous ne proposons pas de solution toute faite.<br />
                Nous prenons le temps d&apos;échanger avec vous pour comprendre vos besoins réels et vous proposer une réponse adaptée.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Mail className="text-white" size={32} />
                <a href="mailto:patrick.danto@outlook.fr" className="text-white hover:underline text-lg">
                  patrick.danto@outlook.fr
                </a>
              </div>
              <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <Globe className="text-white" size={32} />
                <a href="https://confidensia.fr" className="text-white hover:underline text-lg">
                  confidensia.fr
                </a>
              </div>
            </div>

            <Link href="/contact" className="inline-block bg-white text-[#FF9933] px-12 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              Planifier un échange
            </Link>

            <p className="text-white/90 text-sm mt-6">
              Premier échange gratuit et sans engagement
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A2C2A] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/" className="hover:text-[#FF9933] transition-colors">Accueil</Link>
            <Link href="/about" className="hover:text-[#FF9933] transition-colors">À propos</Link>
            <Link href="/contact" className="hover:text-[#FF9933] transition-colors">Contact</Link>
            <Link href="/questionnaire" className="hover:text-[#FF9933] transition-colors">Auto-diagnostic IA</Link>
          </div>
          <p className="text-sm text-gray-400">© 2024 ConfidensIA - Technologie utile pour le médico-social</p>
        </div>
      </footer>
    </div>
  );
}
