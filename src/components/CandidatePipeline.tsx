"use client";

interface CandidatePipelineProps {
  currentStep: number;
}

const steps = [
  "Candidature envoyée",
  "Échanges",
  "Pré-recrutement",
  "Entretiens",
  "Contrats",
  "Onboarding",
];

export default function CandidatePipeline({ currentStep }: CandidatePipelineProps) {
  return (
    <div className="flex items-center w-full py-3">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center flex-1 last:flex-none">
          {/* Point */}
          <div className="flex flex-col items-center">
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index <= currentStep
                  ? "bg-[#e67e22] border-[#e67e22]"
                  : "bg-white border-gray-300"
              }`}
            />
            <span
              className={`mt-1.5 text-[8px] font-medium whitespace-nowrap ${
                index <= currentStep ? "text-[#e67e22]" : "text-gray-400"
              }`}
            >
              {step}
            </span>
          </div>
          
          {/* Ligne entre les points */}
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-0.5 transition-all duration-300 ${
                index < currentStep ? "bg-[#e67e22]" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
