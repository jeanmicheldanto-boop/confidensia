import Image from "next/image";
import Link from "next/link";
import RecruitmentPipeline from "@/components/RecruitmentPipeline";

// Données fictives de recrutements
const recruitments = [
  { id: 1, title: "Responsable Comptable", currentStep: 4 },
  { id: 2, title: "Chef de Projet Immobilier", currentStep: 2 },
  { id: 3, title: "Directeur des Ressources Humaines", currentStep: 5 },
  { id: 4, title: "Contrôleur de Gestion", currentStep: 1 },
  { id: 5, title: "Chargé d&apos;Opérations Immobilières", currentStep: 3 },
];

export default function RecruteursPage() {
  const recrutementsEnCours = recruitments.filter((r) => r.currentStep < 5).length;
  const recrutementsTermines = recruitments.filter((r) => r.currentStep >= 5).length;

  return (
    <main className="min-h-screen bg-gray-50 relative">
      {/* Logo monochrome en haut à droite */}
      <div className="absolute top-4 right-6 lg:right-12 z-30">
        <div className="w-[11.4rem] h-[5rem] rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
          <Image
            src="/logo_mono.jpeg"
            alt="CandidLink Logo"
            width={240}
            height={180}
            className="object-cover translate-y-0.5"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <section className="pt-24 pb-16 px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          {/* Titre */}
          <h1 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-6">
            Votre espace recruteur
          </h1>

          {/* Bloc Contact */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group mb-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-50 group-hover:bg-[#e67e22]/10 flex items-center justify-center transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-gray-400 group-hover:text-[#e67e22] transition-colors duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-700 group-hover:text-[#1e3a5f] transition-colors duration-300">
                  Nous parler de votre projet de recrutement ou nous contacter
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Cliquez ici pour démarrer une nouvelle mission
                </p>
              </div>
              <div className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-300 group-hover:text-[#e67e22] group-hover:translate-x-1 transition-all duration-300"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dashboard Stats */}
          <div className="mb-8">
            <h2 className="text-base font-bold text-[#1e3a5f] mb-3">Mes recrutements</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Recrutements en cours</p>
                    <p className="text-2xl font-bold text-[#e67e22] mt-1">{recrutementsEnCours}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#e67e22]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-[#e67e22]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Recrutements terminés</p>
                    <p className="text-2xl font-bold text-[#1e3a5f] mt-1">{recrutementsTermines}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-[#1e3a5f]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des recrutements en cours */}
          <div>
            <h2 className="text-base font-bold text-[#1e3a5f] mb-3">Recrutements en cours</h2>
            <div className="space-y-4">
              {recruitments.map((recruitment) => (
                <div
                  key={recruitment.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    {recruitment.title}
                  </h3>
                  <RecruitmentPipeline currentStep={recruitment.currentStep} />
                </div>
              ))}
            </div>
          </div>

          {/* Bouton retour */}
          <div className="flex justify-center mt-12">
            <Link
              href="/"
              className="inline-block bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold py-3 px-10 text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
