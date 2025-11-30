"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CandidatePipeline from "@/components/CandidatePipeline";

// Données fictives
const candidateData = {
  firstName: "Marie",
  lastName: "Dupont",
  birthDate: "15/03/1988",
  address: "25 rue de la République, 69001 Lyon",
  nationality: "Française",
};

const initialSkills = [
  "Comptabilité générale",
  "Contrôle de gestion",
  "SAP",
  "Excel avancé",
  "Sage",
  "Fiscalité",
  "Audit",
];

const projectData = {
  contractType: ["CDI", "CDD"],
  geoZone: "Lyon et périphérie (30km)",
};

const applications = [
  { id: 1, title: "Contrôleur de Gestion", employer: "Groupe Carrefour", currentStep: 3 },
  { id: 2, title: "Responsable Comptable", employer: "Veolia Environnement", currentStep: 1 },
  { id: 3, title: "Chef Comptable", employer: "Métropole de Lyon", currentStep: 4 },
  { id: 4, title: "Analyste Financier", employer: "Sanofi", currentStep: 0 },
];

export default function CandidatsPage() {
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState("");
  const [showSkillInput, setShowSkillInput] = useState(false);

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
      setShowSkillInput(false);
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

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
          <h1 className="text-xl md:text-2xl font-bold text-[#1e3a5f] mb-6">
            {candidateData.firstName} {candidateData.lastName}
          </h1>

          {/* Grid des blocs d&apos;info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            {/* Mes informations personnelles */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-[#1e3a5f]">Mes informations personnelles</h2>
                <button className="text-gray-400 hover:text-[#e67e22] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </button>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex">
                  <span className="text-gray-400 w-24">Nom</span>
                  <span className="text-gray-600 font-medium">{candidateData.lastName}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-400 w-24">Prénom</span>
                  <span className="text-gray-600 font-medium">{candidateData.firstName}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-400 w-24">Naissance</span>
                  <span className="text-gray-600 font-medium">{candidateData.birthDate}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-400 w-24">Adresse</span>
                  <span className="text-gray-600 font-medium">{candidateData.address}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-400 w-24">Nationalité</span>
                  <span className="text-gray-600 font-medium">{candidateData.nationality}</span>
                </div>
              </div>
            </div>

            {/* Mes compétences */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-[#1e3a5f]">Mes compétences</h2>
                <button 
                  onClick={() => setShowSkillInput(!showSkillInput)}
                  className="text-gray-400 hover:text-[#e67e22] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
              
              {showSkillInput && (
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                    placeholder="Nouvelle compétence..."
                    className="flex-1 text-xs px-3 py-1.5 border border-gray-200 rounded-full focus:outline-none focus:border-[#e67e22]"
                  />
                  <button
                    onClick={addSkill}
                    className="px-3 py-1.5 bg-[#e67e22] text-white text-xs rounded-full hover:bg-[#d35400] transition-colors"
                  >
                    Ajouter
                  </button>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="group inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-[#e67e22]/10 hover:text-[#e67e22] transition-colors cursor-default"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkill(skill)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Mon projet */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-[#1e3a5f]">Mon projet</h2>
                <button className="text-gray-400 hover:text-[#e67e22] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </button>
              </div>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-gray-400 block mb-1">Type de contrat recherché</span>
                  <div className="flex gap-2">
                    {projectData.contractType.map((type, index) => (
                      <span key={index} className="px-3 py-1 bg-[#e67e22]/10 text-[#e67e22] font-medium rounded-full">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1">Zone géographique</span>
                  <span className="text-gray-600 font-medium">{projectData.geoZone}</span>
                </div>
              </div>
            </div>

            {/* Mon CV */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-[#1e3a5f]">Mon CV</h2>
                <button className="text-gray-400 hover:text-[#e67e22] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                </button>
              </div>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-[#e67e22] transition-colors cursor-pointer group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mx-auto text-gray-300 group-hover:text-[#e67e22] transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <p className="text-xs text-gray-400 mt-2 group-hover:text-[#e67e22] transition-colors">
                  CV_Marie_Dupont.pdf
                </p>
                <p className="text-[10px] text-gray-300 mt-1">
                  Cliquez pour modifier
                </p>
              </div>
            </div>
          </div>

          {/* Suivi de mes candidatures */}
          <div>
            <h2 className="text-base font-bold text-[#1e3a5f] mb-3">Suivi de mes candidatures</h2>
            <div className="space-y-3">
              {applications.map((application) => (
                <div
                  key={application.id}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-gray-700">
                      {application.title}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {application.employer}
                    </span>
                  </div>
                  <CandidatePipeline currentStep={application.currentStep} />
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
