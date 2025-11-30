import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, structure, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    // Configuration Mailgun
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
    const MAILGUN_BASE_URL = process.env.MAILGUN_BASE_URL;

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !MAILGUN_BASE_URL) {
      console.error("Configuration Mailgun manquante");
      return NextResponse.json(
        { error: "Erreur de configuration du serveur" },
        { status: 500 }
      );
    }

    // Préparer le contenu de l'email
    const emailContent = `
Nouveau message depuis le formulaire de contact ConfidensIA

Nom: ${name}
Email: ${email}
Téléphone: ${phone || "Non renseigné"}
Structure: ${structure || "Non renseignée"}

Message:
${message}
    `.trim();

    // Envoyer l'email via Mailgun
    const formData = new URLSearchParams();
    formData.append("from", `Contact ConfidensIA <noreply@${MAILGUN_DOMAIN}>`);
    formData.append("to", "patrick.danto@outlook.fr");
    formData.append("subject", `[ConfidensIA] Nouveau message de ${name}`);
    formData.append("text", emailContent);
    formData.append("h:Reply-To", email);

    const response = await fetch(
      `${MAILGUN_BASE_URL}/${MAILGUN_DOMAIN}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64")}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erreur Mailgun:", errorText);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
