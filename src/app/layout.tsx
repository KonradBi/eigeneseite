import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kommunikationstraining - Starke Worte, Klare Wirkung",
  description: "Ich zeige dir, wie du in Gesprächen überzeugst – egal ob im Job, zu Hause oder online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
