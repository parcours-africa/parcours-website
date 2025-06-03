import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins(
  {
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  }
);

export const metadata: Metadata = {
  title: "Parcours",
  description: "Étudier n’a jamais été aussi  facile",
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
      </body>
    </html>
  );
}
