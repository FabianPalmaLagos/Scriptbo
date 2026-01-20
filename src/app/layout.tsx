import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Scriptbo - Tu Coautor Inteligente",
  description:
    "Plataforma de escritura asistida por IA para autores de todos los géneros. Crea novelas, guiones, anime, manhwa y más con la ayuda de inteligencia artificial.",
  keywords: [
    "escritura",
    "IA",
    "inteligencia artificial",
    "novela",
    "guion",
    "anime",
    "manhwa",
    "manhua",
    "escritor",
    "autor",
    "coautor",
    "asistente de escritura",
    "story bible",
  ],
  authors: [{ name: "Scriptbo" }],
  openGraph: {
    title: "Scriptbo - Tu Coautor Inteligente",
    description:
      "Plataforma de escritura asistida por IA para autores de todos los géneros.",
    type: "website",
    locale: "es_LA",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scriptbo - Tu Coautor Inteligente",
    description:
      "Plataforma de escritura asistida por IA para autores de todos los géneros.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { AuthProvider } from "@/components/providers/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
