import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amauta - Sabiduria que aprende contigo",
  description:
    "Plataforma de acompanamiento academico inteligente para ninos de 5 a 9 anos. Un mentor digital que guia paso a paso el aprendizaje en casa.",
  generator: "v0.app",
  manifest: "/manifest.json",
  keywords: [
    "educacion",
    "ninos",
    "aprendizaje",
    "tutor",
    "plataforma educativa",
    "homeschool",
  ],
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512x512.jpg", type: "image/jpeg", sizes: "512x512" },
    ],
    apple: "/icons/icon-192x192.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Amauta",
  },
};

export const viewport: Viewport = {
  themeColor: "#2B5EA7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${nunito.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
