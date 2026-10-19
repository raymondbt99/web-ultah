"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, X, Sparkles } from "lucide-react";

interface PhotoItem {
  id: number;
  src: string;
  title: string;
  subtitle: string;
}

const photos: PhotoItem[] = [
  {
    id: 1,
    src: "/images/portrait.jpg",
    title: "Djong Nyun Kui",
    subtitle: "Potret keanggunan dan ketulusan kasih tercinta dalam balutan Qipao sutra merah bersulam burung Phoenix.",
  },
  {
    id: 2,
    src: "/images/cake.jpg",
    title: "Kue Panjang Umur Shou Tao 72 (七十二大寿)",
    subtitle: "Kue bertingkat emas berhiaskan simbol Shou (寿) dan bakpao persik keabadian perlambang doa umur panjang dan berkah melimpah.",
  },
  {
    id: 3,
    src: "/images/venue.jpg",
    title: "Grand Dragon Banquet Hall",
    subtitle: "Suasana kemeriahan jamuan keluarga besar di bawah lampion merah keberuntungan dan alunan lagu nostalgia.",
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  return (
    <section id="gallery" style={{ margin: "70px 0" }}>
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--gold-400)",
            fontSize: "12px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: "8px",
          }}
        >
          <Camera size={14} /> Kenangan & Momen Indah • 岁月留影
        </div>
        <h2
          className="font-serif text-gold-gradient"
          style={{ fontSize: "2.3rem", fontWeight: "700" }}
        >
          Galeri Kenangan 72 Tahun
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", maxWidth: "520px", margin: "8px auto 0" }}>
          Merekam jejak keteladanan, cinta tulus, dan kehangatan kebersamaan keluarga Djong Nyun Kui.
        </p>
      </div>

      {/* Grid of Polaroid / Glass Photos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          maxWidth: "920px",
          margin: "0 auto",
        }}
      >
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="glass-card"
            style={{
              padding: "12px",
              cursor: "pointer",
              overflow: "hidden",
              border: "1px solid rgba(212, 175, 55, 0.4)",
              background: "rgba(36, 10, 15, 0.8)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "280px",
                borderRadius: "14px",
                overflow: "hidden",
                marginBottom: "12px",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(20, 2, 4, 0.7) 0%, transparent 50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  background: "rgba(0,0,0,0.65)",
                  backdropFilter: "blur(4px)",
                  padding: "4px 8px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  color: "var(--gold-300)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Sparkles size={12} /> Klik untuk perbesar
              </div>
            </div>

            <div style={{ padding: "0 6px 8px" }}>
              <h3
                className="font-serif"
                style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}
              >
                {photo.title}
              </h3>
              <p
                style={{
                  fontSize: "12.5px",
                  color: "var(--text-muted)",
                  lineHeight: 1.4,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {photo.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "rgba(12, 2, 3, 0.92)",
            backdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-card"
            style={{
              maxWidth: "600px",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              border: "1.5px solid rgba(212, 175, 55, 0.6)",
              background: "#1c0407",
            }}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                zIndex: 10,
                background: "rgba(0, 0, 0, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={20} />
            </button>

            <div style={{ position: "relative", width: "100%", height: "420px" }}>
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ objectFit: "contain", backgroundColor: "#120204" }}
              />
            </div>

            <div style={{ padding: "20px 24px" }}>
              <h3 className="font-serif text-gold-gradient" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                {selectedPhoto.title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "13.5px", marginTop: "6px" }}>
                {selectedPhoto.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
