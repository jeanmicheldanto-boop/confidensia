"use client";

import Image from "next/image";
import Link from "next/link";
import LinkerPipeline from "@/components/LinkerPipeline";

// Données fictives
const linkerData = {
  firstName: "Thomas",
  lastName: "Martin",
  speciality: "Finance & Comptabilité",
};

const missions = [
  { id: 1, title: "Directeur Financier", employer: "Groupe LVMH", currentStep: 5, candidatesCount: 8 },
  { id: 2, title: "Responsable Comptable", employer: "Métropole de Lyon", currentStep: 3, candidatesCount: 12 },
  { id: 3, title: "Contrôleur de Gestion Senior", employer: "Danone", currentStep: 6, candidatesCount: 5 },
  { id: 4, title: "Chef Comptable", employer: "CHU de Bordeaux", currentStep: 2, candidatesCount: 15 },
  { id: 5, title: "Analyste Financier", employer: "BNP Paribas", currentStep: 1, candidatesCount: 20 },
  { id: 6, title: "RAF - Responsable Administratif et Financier", employer: "StartUp GreenTech", currentStep: 4, candidatesCount: 6 },
];

export default function LinkersPage() {
  const missionsEnCours = missions.filter((m) => m.currentStep < 6).length;
  const missionsTerminees = missions.filter((m) => m.currentStep >= 6).length;
  const totalCandidats = missions.reduce((acc, m) => acc + m.candidatesCount, 0);

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
          {/* Titre avec nom */}
          <div className="mb-6">
            <h1 className="text-xl md:text-2xl font-bold text-[#1e3a5f]">
              {linkerData.firstName} {linkerData.lastName}
            </h1>
            <p className="text-xs text-gray-400 mt-1">
              Linker spécialisé · {linkerData.speciality}
            </p>
          </div>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-400 font-medium">Missions en cours</p>
                  <p className="text-2xl font-bold text-[#e67e22] mt-1">{missionsEnCours}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#e67e22]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#e67e22]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-400 font-medium">Missions terminées</p>
                  <p className="text-2xl font-bold text-[#1e3a5f] mt-1">{missionsTerminees}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#1e3a5f]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-gray-400 font-medium">Candidats sourcés</p>
                  <p className="text-2xl font-bold text-gray-600 mt-1">{totalCandidats}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des missions */}
          <div>
            <h2 className="text-base font-bold text-[#1e3a5f] mb-3">Mes missions</h2>
            <div className="space-y-3">
              {missions.map((mission) => (
                <div
                  key={mission.id}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-gray-700 group-hover:text-[#1e3a5f] transition-colors">
                      {mission.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-gray-400 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        {mission.candidatesCount} candidats
                      </span>
                      <span className="text-xs text-gray-400">
                        {mission.employer}
                      </span>
                    </div>
                  </div>
                  <LinkerPipeline currentStep={mission.currentStep} />
                </div>
              ))}
            </div>
          </div>

          {/* Bouton retour */}
          <div className="flex justify-center mt-10">
            <Link
              href="/"
              className="inline-block bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold py-2.5 px-8 text-xs rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
