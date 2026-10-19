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
  title: "The Sweet 17th Birthday of Alina Putri Pratama | Undangan Ulang Tahun",
  description: "Kami mengundang Anda untuk hadir dalam perayaan ulang tahun ke-17 Alina Putri Pratama. Simak detail acara, rundown, lokasi, dan kirimkan ucapan serta konfirmasi kehadiran Anda.",
  openGraph: {
    title: "Undangan Ulang Tahun ke-17 Alina Putri Pratama",
    description: "A Night of Radiance, Laughter & Unforgettable Memories",
    images: ["/images/portrait.jpg"],
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
