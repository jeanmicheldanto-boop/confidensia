"use client";

interface DownloadButtonProps {
  fileName: string;
  title?: string;
  description?: string;
  variant?: 'primary' | 'secondary';
}

export default function DownloadButton({ 
  fileName, 
  title = "Télécharger la documentation", 
  description = "Format PDF",
  variant = 'primary' 
}: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const baseClasses = "group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md";
  
  const variantClasses = variant === 'primary' 
    ? "bg-[#FF9933] hover:bg-[#e67e22] text-white"
    : "bg-white hover:bg-gray-50 text-[#4A2C2A] border-2 border-[#FF9933] hover:border-[#e67e22]";

  return (
    <button
      onClick={handleDownload}
      className={`${baseClasses} ${variantClasses}`}
      aria-label={`Télécharger ${title}`}
    >
      <svg 
        className="w-5 h-5 group-hover:scale-110 transition-transform" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
        />
      </svg>
      <div className="text-left">
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs opacity-75">{description}</div>
      </div>
    </button>
  );
}