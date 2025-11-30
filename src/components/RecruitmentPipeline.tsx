"use client";

interface PipelineProps {
  currentStep: number;
}

const steps = [
  "Besoin",
  "Préqualifications",
  "Entretiens",
  "Recrutement",
  "Onboarding",
  "Suivi",
];

export default function RecruitmentPipeline({ currentStep }: PipelineProps) {
  return (
    <div className="flex items-center w-full py-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center flex-1 last:flex-none">
          {/* Point */}
          <div className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                index <= currentStep
                  ? "bg-[#e67e22] border-[#e67e22]"
                  : "bg-white border-gray-300"
              }`}
            />
            <span
              className={`mt-2 text-[10px] font-medium whitespace-nowrap ${
                index <= currentStep ? "text-[#e67e22]" : "text-gray-400"
              }`}
            >
              {step}
            </span>
          </div>
          
          {/* Ligne entre les points */}
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 mx-1 transition-all duration-300 ${
                index < currentStep ? "bg-[#e67e22]" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
