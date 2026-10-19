import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://undangan-ultah.vercel.app"),
  title: "Perayaan Ulang Tahun ke-72 Djong Nyun Kui | 祝寿 • 七十二大寿",
  description: "Undangan perayaan ulang tahun ke-72 (Zhu Shou / 祝寿) Djong Nyun Kui. Kami mengundang keluarga dan sahabat untuk bersama mensyukuri limpahan berkah dan umur panjang.",
  openGraph: {
    title: "Undangan Ulang Tahun ke-72 Djong Nyun Kui (七十二大寿)",
    description: "福如东海 寿比南山 • A Celebration of Longevity, Grace & Love",
    images: ["/images/potrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
