import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins(
  {
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  }
);

export const metadata: Metadata = {
  title: "Transformez votre parcours scolaire | Parcours",
  description: "Découvre Parcours, la plateforme qui révolutionne le suivi scolaire et universitaire.",
  keywords: ["Parcours", "éducation", "suivi scolaire", "Bénin", "université"],
  authors: [{ name: "Phitec", url: "http://parcours.bj/" }],
  openGraph: {
    title: "Parcours - Suivi scolaire innovant",
    description: "Rejoins Parcours et découvre comment accompagner chaque élève vers la réussite.",
    url: "https://parcours.bj/",
    siteName: "Parcours",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Aperçu de la plateforme Parcours",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parcours - application scolaire innovante",
    description: "Une plateforme éducative conçue pour le Bénin et l'Afrique.",
    images: ["/opengraph.png"],
    creator: "@phitec",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.className} py-4 bg-secondary antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
