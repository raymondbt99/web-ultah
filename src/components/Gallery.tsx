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
    title: "Alina Putri Pratama",
    subtitle: "Menyambut babak baru kehidupan penuh harapan dan cinta di usia 17 tahun.",
  },
  {
    id: 2,
    src: "/images/cake.jpg",
    title: "Sweet 17th Golden Cake",
    subtitle: "Kue kebahagiaan bertabur emas dan 17 lilin cita-cita yang siap ditiup bersama.",
  },
  {
    id: 3,
    src: "/images/venue.jpg",
    title: "The Glasshouse Ballroom",
    subtitle: "Malam pesta bertabur gemerlap lampu kristal dan kehangatan sahabat tercinta.",
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
          <Camera size={14} /> Memory Lane
        </div>
        <h2
          className="font-serif text-gold-gradient"
          style={{ fontSize: "2.3rem", fontWeight: "700" }}
        >
          Galeri & Kenangan
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", maxWidth: "480px", margin: "8px auto 0" }}>
          Setiap senyuman dan detik perjalanan berharga yang membimbing menuju usia ke-17.
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
              transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease",
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
                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  background: "rgba(0,0,0,0.6)",
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
            background: "rgba(5, 8, 12, 0.9)",
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
              border: "1px solid rgba(212, 175, 55, 0.4)",
            }}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                zIndex: 10,
                background: "rgba(0, 0, 0, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
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
                style={{ objectFit: "contain", backgroundColor: "#0b1017" }}
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
