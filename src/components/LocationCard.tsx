"use client";

import React from "react";
import { MapPin, Navigation, Clock, Calendar, Sparkles } from "lucide-react";

export default function LocationCard() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=VegeDay+Halal+Tebas+Sambas";

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
          <MapPin size={14} /> Lokasi & Waktu Acara • 寿宴地点
        </div>
        <h2
          className="font-serif text-gold-gradient"
          style={{ fontSize: "2.3rem", fontWeight: "700" }}
        >
          Lokasi Perayaan Syukuran
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", maxWidth: "520px", margin: "8px auto 0" }}>
          Merupakan suatu kehormatan dan kebahagiaan bagi kami atas kehadiran Bapak/Ibu/Saudara/i di kediaman kami.
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
        {/* Main Venue Card */}
        <div className="glass-card" style={{ overflow: "hidden", border: "1.5px solid rgba(212, 175, 55, 0.45)" }}>
          <div style={{ padding: "28px 24px" }}>
            <div
              style={{
                display: "inline-block",
                padding: "5px 14px",
                background: "rgba(220, 38, 38, 0.35)",
                border: "1px solid rgba(212, 175, 55, 0.5)",
                color: "var(--gold-300)",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 700,
                marginBottom: "12px",
                letterSpacing: "0.5px",
              }}
            >
              Kediaman Keluarga & Tempat Acara
            </div>

            <h3
              className="font-serif text-gold-gradient"
              style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "8px", lineHeight: 1.3 }}
            >
              Rumah Kediaman Djong Nyun Kui (VegeDay Halal Tebas)
            </h3>

            <p style={{ color: "var(--text-main)", fontSize: "15px", fontWeight: 500, lineHeight: 1.6, marginBottom: "16px" }}>
              Jl. Tebas Kuala No. 42, Mak Rampai, Kec. Tebas, Kabupaten Sambas, Kalimantan Barat 79461
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                paddingBottom: "22px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-300)", fontSize: "14px", fontWeight: 600 }}>
                  <Calendar size={16} /> Jumat, 30 Oktober 2026
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-muted)", fontSize: "13.5px" }}>
                  <Clock size={16} color="var(--gold-400)" /> Pukul 13.00 WIB - Selesai
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button"
                style={{ fontSize: "13.5px", padding: "11px 22px" }}
              >
                <Navigation size={16} />
                Buka di Google Maps
              </a>
            </div>

            {/* Embedded Google Maps */}
            <div style={{ marginTop: "22px" }}>
              <div
                style={{
                  width: "100%",
                  height: "360px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1.5px solid rgba(212, 175, 55, 0.4)",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.6)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63822.317345494776!2d109.0695465486328!3d1.232777400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e499fdb3ace905%3A0xbef6f97f2f226f9c!2sVegeDay%20Halal%20Tebas!5e0!3m2!1sid!2sid!4v1792396765170!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Peta Lokasi Rumah Kediaman Djong Nyun Kui (VegeDay Halal Tebas)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
