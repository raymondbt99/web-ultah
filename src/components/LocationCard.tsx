"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Navigation, Shirt, Car, Info } from "lucide-react";

export default function LocationCard() {
  const googleMapsUrl = "https://maps.google.com/?q=The+Glasshouse+Jakarta+Selatan";

  return (
    <section id="location" style={{ margin: "70px 0" }}>
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
          <MapPin size={14} /> Lokasi & Waktu
        </div>
        <h2
          className="font-serif text-gold-gradient"
          style={{ fontSize: "2.3rem", fontWeight: "700" }}
        >
          Tempat Perayaan
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", maxWidth: "480px", margin: "8px auto 0" }}>
          Kami menantikan kehadiran Anda di venue megah bernuansa kaca dan taman impian.
        </p>
      </div>

      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Main Venue Preview Card */}
        <div className="glass-card" style={{ overflow: "hidden" }}>
          <div style={{ position: "relative", width: "100%", height: "280px" }}>
            <Image
              src="/images/venue.jpg"
              alt="The Glasshouse Grand Pavilion"
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(13, 19, 26, 0.95) 10%, rgba(13, 19, 26, 0.2) 60%, transparent 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "24px",
                right: "24px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  background: "rgba(16, 185, 129, 0.25)",
                  border: "1px solid rgba(16, 185, 129, 0.5)",
                  color: "#6ee7b7",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                Ballroom & Garden Pavilion
              </div>
              <h3
                className="font-serif"
                style={{ fontSize: "1.7rem", fontWeight: 700, color: "#ffffff" }}
              >
                The Glasshouse Grand Pavilion
              </h3>
            </div>
          </div>

          <div style={{ padding: "24px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div style={{ maxWidth: "460px" }}>
                <p style={{ color: "var(--text-main)", fontSize: "15px", fontWeight: 600, marginBottom: "4px" }}>
                  Jl. Iskandarsyah Raya No. 88, Melawai, Kebayoran Baru
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "13.5px" }}>
                  Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button"
                style={{ fontSize: "13.5px", padding: "12px 22px" }}
              >
                <Navigation size={16} />
                Buka Google Maps
              </a>
            </div>

            {/* Practical Information Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-400)", marginBottom: "6px" }}>
                  <Car size={16} />
                  <span style={{ fontSize: "13px", fontWeight: 700 }}>Akses & Valet Parking</span>
                </div>
                <p style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>
                  Tersedia fasilitas Valet Parking gratis di lobi utama & basement luas.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-400)", marginBottom: "6px" }}>
                  <Info size={16} />
                  <span style={{ fontSize: "13px", fontWeight: 700 }}>Kehadiran Tepat Waktu</span>
                </div>
                <p style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>
                  Disarankan tiba pukul 18:30 WIB untuk registrasi & sesi photobooth 360°.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dress Code Section */}
        <div
          className="glass-card"
          style={{
            padding: "24px",
            textAlign: "center",
            border: "1px solid rgba(212, 175, 55, 0.3)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--gold-400)",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginBottom: "6px",
            }}
          >
            <Shirt size={16} /> Dress Code
          </div>
          <h3
            className="font-serif"
            style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}
          >
            Glam & Elegant (Cocktail Attire)
          </h3>
          <p style={{ fontSize: "13.5px", color: "var(--text-muted)", maxWidth: "480px", margin: "0 auto 16px" }}>
            Kami mengundang para tamu mengenakan pakaian formal elegan dengan sentuhan palet warna pilihan:
          </p>

          {/* Color Palette Swatches */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            {[
              { name: "Emerald Green", color: "#065f46", text: "#ffffff" },
              { name: "Champagne Gold", color: "#d4af37", text: "#181203" },
              { name: "Midnight Black", color: "#0f172a", text: "#ffffff" },
              { name: "Ivory Cream", color: "#fef3c7", text: "#181203" },
            ].map((swatch, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: swatch.color,
                    border: "2px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
                  }}
                />
                <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600 }}>
                  {swatch.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
