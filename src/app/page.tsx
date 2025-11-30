import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Hero Background Image - tout à gauche */}
        <div className="absolute top-0 left-0 w-[65%] h-[90%] z-0">
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
          <div className="flex flex-col lg:flex-row items-start justify-between pt-12 lg:pt-16">
            {/* Center - Logo & Text */}
            <div className="w-full flex flex-col items-center text-center order-2 lg:order-1">
              {/* Logo dans un cadre oblong - agrandi */}
              <div className="mb-20 w-[17rem] h-[8rem] rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
                <Image
                  src="/logo_cia_basecourt_transp_2.png"
                  alt="Logo CIA Basecourt"
                  width={360}
                  height={280}
                  className="object-cover translate-y-0.5"
                  priority
                />
              </div>

              {/* CTA Button */}
              <a
                href="/about"
                className="inline-block bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold py-2 px-8 text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-5"
              >
                Découvrez nous
              </a>

              {/* Texte déplacé sous le bouton */}
              <p className="text-gray-400 text-xs md:text-sm font-semibold">
                Technologies de confiance pour les environnements sociaux et médico sociaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 4 Blocs */}
      <section id="discover" className="pt-6 pb-16 px-6 lg:px-12 bg-gray-50 -mt-48">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bloc 1 - Le Hub des ESSMS */}
            <Link 
              href="/hub-essms"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center transform hover:scale-105 relative z-10"
            >
              <div className="relative w-full h-24">
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
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center transform hover:scale-105 relative z-10"
            >
              <div className="relative w-full h-24">
                <Image
                  src="/icone_automatisation_texte.png"
                  alt="Automatisation"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Bloc 3 - L&apos;assistant rédactionnel */}
            <Link 
              href="/assistant-redactionnel"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center transform hover:scale-105 relative z-10"
            >
              <div className="relative w-full h-24">
                <Image
                  src="/icone_assistant_texte.png"
                  alt="L&apos;assistant rédactionnel"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Bloc 4 - Accompagnement & Formation */}
            <Link 
              href="/accompagnement-formation"
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center transform hover:scale-105 relative z-10"
            >
              <div className="relative w-full h-24">
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
      </section>
    </main>
  );
}
