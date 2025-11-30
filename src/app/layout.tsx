import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ConfidensIA - L&apos;IA utile pour le médico-social",
  description: "Solutions d&apos;intelligence artificielle adaptées aux ESSMS : Hub de données, Assistant rédactionnel, Automatisation et Accompagnement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
