"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MailPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    structure: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          structure: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#FFF5EB] to-white">
      {/* Logo en haut à droite */}
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
        <div className="container mx-auto max-w-3xl">
          {/* Titre */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#4A2C2A] to-[#6d4644] mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-[#4A2C2A] mb-4">
              Envoyez-nous un message
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous vous répondrons dans les plus brefs délais pour échanger sur vos besoins.
            </p>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom et prénom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9933] focus:border-transparent outline-none transition-all"
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9933] focus:border-transparent outline-none transition-all"
                    placeholder="votre@email.fr"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9933] focus:border-transparent outline-none transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div>
                  <label htmlFor="structure" className="block text-sm font-semibold text-gray-700 mb-2">
                    Structure
                  </label>
                  <input
                    type="text"
                    id="structure"
                    name="structure"
                    value={formData.structure}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9933] focus:border-transparent outline-none transition-all"
                    placeholder="Nom de votre établissement"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Votre message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF9933] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Décrivez-nous votre projet ou vos besoins..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border-2 border-green-200 text-green-700 px-5 py-4 rounded-lg text-sm flex items-start gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>
                    <strong>Message envoyé avec succès !</strong><br />
                    Nous vous répondrons rapidement.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border-2 border-red-200 text-red-700 px-5 py-4 rounded-lg text-sm flex items-start gap-3">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>
                    <strong>Une erreur est survenue.</strong><br />
                    Veuillez réessayer ou nous contacter directement par email.
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF9933] hover:bg-[#e67e22] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-lg shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          </div>

          {/* Contact direct */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Ou contactez-nous directement :</p>
            <a href="mailto:patrick.danto@outlook.fr" className="text-[#FF9933] hover:text-[#e67e22] font-semibold text-lg">
              patrick.danto@outlook.fr
            </a>
          </div>

          {/* Boutons de navigation */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#4A2C2A] border-2 border-[#4A2C2A] hover:bg-[#4A2C2A] hover:text-white font-semibold py-3 px-10 text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-md text-center"
            >
              Retour au contact
            </Link>
            <Link
              href="/"
              className="inline-block bg-[#FF9933] hover:bg-[#e67e22] text-white font-semibold py-3 px-10 text-sm rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
