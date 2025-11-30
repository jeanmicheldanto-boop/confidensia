import { NextResponse } from 'next/server';

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY!;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN!;
const RECIPIENT_EMAIL = 'patrick.danto@outlook.fr';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Envoi via Mailgun API
    const formData = new URLSearchParams();
    formData.append('from', `Newsletter ConfidensIA <noreply@${MAILGUN_DOMAIN}>`);
    formData.append('to', RECIPIENT_EMAIL);
    formData.append('subject', 'Nouvelle inscription newsletter ConfidensIA');
    formData.append('text', `Nouvelle inscription à la newsletter :\n\nEmail : ${email}\n\nDate : ${new Date().toLocaleString('fr-FR')}`);
    formData.append('html', `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4A2C2A;">Nouvelle inscription newsletter</h2>
        <p style="color: #666;">Une nouvelle personne s'est inscrite à la newsletter ConfidensIA :</p>
        <div style="background-color: #FFF5EB; padding: 20px; border-left: 4px solid #FF9933; margin: 20px 0;">
          <p style="margin: 0; color: #4A2C2A;"><strong>Email :</strong> ${email}</p>
          <p style="margin: 10px 0 0 0; color: #666;"><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</p>
        </div>
      </div>
    `);

    const response = await fetch(
      `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Mailgun error:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
