"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NewsletterBlock() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#FF9933] to-[#e67e22] rounded-2xl p-8 shadow-xl max-w-2xl mx-auto mb-16">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          Tenez-vous informé de nos nouveautés et de l&apos;actualité IA des ESSMS
        </h3>
        <p className="text-white/80 text-sm">
          (pas plus d&apos;un envoi par mois)
        </p>
      </div>

      <form onSubmit={handleNewsletterSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            required
            className="flex-1 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-white text-[#FF9933] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
          >
            {isSubmitting ? "Envoi..." : "Je m&apos;inscris"}
          </button>
        </div>

        {status === "success" && (
          <div className="bg-white/20 border border-white/30 text-white px-4 py-3 rounded-lg text-sm text-center">
            ✓ Merci pour votre inscription ! Vous recevrez bientôt nos actualités.
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-500/20 border border-red-300/30 text-white px-4 py-3 rounded-lg text-sm text-center">
            ✗ Une erreur est survenue. Veuillez réessayer.
          </div>
        )}
      </form>
    </div>
  );
}

export default function ContactPage() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#FFF5EB] to-white">
      {/* Logo monochrome en haut à droite */}
      <div className="fixed top-4 right-6 lg:right-12 z-30">
        <div className="w-[11.4rem] h-[5rem] rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
          <Image
            src="/logo_cia_brun_basecourt_transp.png"
            alt="ConfidensIA Logo"
            width={240}
            height={180}
            className="object-cover translate-y-0.5"
            priority
          />
        </div>
      </div>

      <section className="pt-24 pb-16 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          {/* Titre */}
          <h1 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] text-center mb-4">
            Contactez-nous
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour échanger sur vos besoins et construire ensemble des solutions adaptées.
          </p>

          {/* Bloc Newsletter centré */}
          <NewsletterBlock />

          {/* 2 Blocs élégants - RDV et Email */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Bloc RDV */}
            <Link
              href="/contact/rdv"
              className="group bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF9933] to-[#e67e22] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#4A2C2A] mb-3">Prendre un RDV</h3>
              <p className="text-gray-600 mb-6">
                Échange gratuit de 30 minutes pour discuter de vos besoins
              </p>
              <span className="text-[#FF9933] group-hover:text-[#e67e22] font-semibold flex items-center gap-2">
                Réserver un créneau
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            {/* Bloc Email */}
            <Link
              href="/contact/mail"
              className="group bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4A2C2A] to-[#6d4644] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#4A2C2A] mb-3">Nous écrire</h3>
              <p className="text-gray-600 mb-6">
                Envoyez-nous un message, nous vous répondrons rapidement
              </p>
              <span className="text-[#FF9933] group-hover:text-[#e67e22] font-semibold flex items-center gap-2">
                Écrire un message
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Informations de contact directes */}
          <div className="bg-white rounded-2xl p-8 shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-[#4A2C2A] mb-6 text-center">Ou contactez-nous directement</h3>
            <div className="space-y-4 text-center">
              <div>
                <p className="text-gray-600 text-sm mb-1">Email</p>
                <a href="mailto:patrick.danto@outlook.fr" className="text-[#FF9933] hover:text-[#e67e22] font-semibold">
                  patrick.danto@outlook.fr
                </a>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">LinkedIn</p>
                <a 
                  href="https://linkedin.com/in/patrick-danto-36408a380" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF9933] hover:text-[#e67e22] font-semibold"
                >
                  Patrick Danto
                </a>
              </div>
            </div>
          </div>

          {/* Bouton retour */}
          <div className="flex justify-center mt-12">
            <Link
              href="/"
              className="inline-block bg-[#FF9933] hover:bg-[#e67e22] text-white font-semibold py-3 px-10 text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
