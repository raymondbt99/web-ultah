"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Navigation, Shirt, Car, Info, Sparkles } from "lucide-react";

export default function LocationCard() {
  const googleMapsUrl = "https://maps.google.com/?q=Sun+City+Restaurant+Ballroom+Hayam+Wuruk+Jakarta";

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
          <MapPin size={14} /> Lokasi & Waktu • 寿宴地点
        </div>
        <h2
          className="font-serif text-gold-gradient"
          style={{ fontSize: "2.3rem", fontWeight: "700" }}
        >
          Tempat Jamuan Syukuran
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", maxWidth: "480px", margin: "8px auto 0" }}>
          Kami menantikan kehadiran keluarga dan sahabat di ballroom megah bernuansa oriental klasik.
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
        <div className="glass-card" style={{ overflow: "hidden", border: "1.5px solid rgba(212, 175, 55, 0.45)" }}>
          <div style={{ position: "relative", width: "100%", height: "290px" }}>
            <Image
              src="/images/venue.jpg"
              alt="Grand Dragon Imperial Ballroom, Sun City Jakarta"
              fill
              sizes="(max-width: 768px) 100vw, 760px"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(20, 3, 5, 0.95) 12%, rgba(20, 3, 5, 0.35) 60%, transparent 100%)",
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
                  background: "rgba(220, 38, 38, 0.4)",
                  border: "1px solid rgba(212, 175, 55, 0.5)",
                  color: "var(--gold-300)",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                Grand Imperial Ballroom & Banquet Hall
              </div>
              <h3
                className="font-serif"
                style={{ fontSize: "1.7rem", fontWeight: 700, color: "#ffffff" }}
              >
                Grand Dragon Ballroom (Sun City Club)
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
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ maxWidth: "460px" }}>
                <p style={{ color: "var(--text-main)", fontSize: "15px", fontWeight: 600, marginBottom: "4px" }}>
                  Gedung LTC Glodok Lt. 6, Jl. Hayam Wuruk No. 127
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "13.5px" }}>
                  Mangga Besar, Taman Sari, Jakarta Barat, DKI Jakarta 11180
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
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-400)", marginBottom: "6px" }}>
                  <Car size={16} />
                  <span style={{ fontSize: "13px", fontWeight: 700 }}>Akses Lift VIP & Parkir</span>
                </div>
                <p style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>
                  Tersedia Lift Khusus Ballroom di Lobby Utama LTC dan layanan Valet Parking gratis.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  padding: "16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-400)", marginBottom: "6px" }}>
                  <Info size={16} />
                  <span style={{ fontSize: "13px", fontWeight: 700 }}>Waktu Kehadiran</span>
                </div>
                <p style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>
                  Disarankan tiba pukul 11:30 WIB untuk menikmati welcome tea & registrasi foto keluarga.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dress Code Section */}
        <div
          className="glass-card"
          style={{
            padding: "26px",
            textAlign: "center",
            border: "1px solid rgba(212, 175, 55, 0.4)",
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
            <Shirt size={16} /> Dress Code • 著装要求
          </div>
          <h3
            className="font-serif"
            style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}
          >
            Oriental Elegance / Batik Halus / Cheongsam
          </h3>
          <p style={{ fontSize: "13.5px", color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto 16px" }}>
            Kami mengundang para tamu mengenakan pakaian sopan dan elegan bernuansa merah keberuntungan atau emas kemakmuran:
          </p>

          {/* Color Palette Swatches */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "16px",
            }}
          >
            {[
              { name: "Merah Keberuntungan", color: "#b91c1c", text: "#ffffff" },
              { name: "Emas Kemakmuran", color: "#d4af37", text: "#181203" },
              { name: "Merah Marun (Burgundy)", color: "#7f1d1d", text: "#ffffff" },
              { name: "Emas Champagne", color: "#facc15", text: "#181203" },
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
                    border: "2px solid rgba(255, 255, 255, 0.5)",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                  }}
                />
                <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600 }}>
                  {swatch.name}
                </span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "11.5px", color: "var(--gold-300)", fontStyle: "italic", background: "rgba(220, 38, 38, 0.15)", padding: "8px 14px", borderRadius: "10px", display: "inline-block" }}>
            *Catatan: Dimohon untuk menghindari pakaian serba hitam atau putih polos demi keselarasan tradisi syukuran (祝寿)
          </p>
        </div>
      </div>
    </section>
  );
}
