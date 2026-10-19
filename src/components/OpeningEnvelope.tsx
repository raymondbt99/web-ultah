"use client";

import React from "react";
import Image from "next/image";
import { MailOpen, Sparkles, Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { musicPlayer } from "@/lib/audioPlayer";

interface OpeningEnvelopeProps {
  guestName: string;
  onOpen: () => void;
}

export default function OpeningEnvelope({ guestName, onOpen }: OpeningEnvelopeProps) {
  const handleOpen = () => {
    // Launch celebratory confetti burst
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#d4af37", "#facc15", "#10b981", "#ffffff", "#f43f5e"],
    });

    // Start music
    musicPlayer.start();

    // Trigger parent open callback
    onOpen();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "radial-gradient(ellipse at center, #172435 0%, #080c12 100%)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Decorative Floating Sparkles Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: "radial-gradient(circle 2px at 20% 30%, rgba(212, 175, 55, 0.4), transparent), radial-gradient(circle 2px at 80% 70%, rgba(212, 175, 55, 0.3), transparent), radial-gradient(circle 3px at 50% 80%, rgba(16, 185, 129, 0.3), transparent)",
        }}
      />

      {/* Main Invitation Cover Envelope Card */}
      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "460px",
          padding: "40px 28px",
          textAlign: "center",
          position: "relative",
          border: "1.5px solid rgba(212, 175, 55, 0.45)",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(212, 175, 55, 0.2)",
          borderRadius: "28px",
          animation: "floatBob 6s ease-in-out infinite",
        }}
      >
        {/* Top Ornament */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
          <div
            style={{
              padding: "6px 16px",
              background: "rgba(212, 175, 55, 0.12)",
              borderRadius: "30px",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "var(--gold-400)",
              fontWeight: 600,
            }}
          >
            <Sparkles size={14} /> The Sweet 17th Birthday
          </div>
        </div>

        {/* Circular Celebrant Photo Preview */}
        <div
          style={{
            position: "relative",
            width: "140px",
            height: "140px",
            margin: "0 auto 20px auto",
            borderRadius: "50%",
            padding: "4px",
            background: "linear-gradient(135deg, #facc15, #d4af37, #10b981)",
            boxShadow: "0 0 25px rgba(212, 175, 55, 0.4)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src="/images/portrait.jpg"
              alt="Alina Putri Pratama"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-4px",
              right: "4px",
              background: "#d4af37",
              color: "#181203",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "900",
              fontSize: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
              border: "2px solid #0f1723",
            }}
          >
            17
          </div>
        </div>

        {/* Main Title */}
        <h2
          className="font-serif text-gold-gradient"
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "6px",
            letterSpacing: "0.5px",
          }}
        >
          Alina Putri Pratama
        </h2>

        <p
          style={{
            fontSize: "13px",
            color: "var(--text-muted)",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Sabtu, 28 November 2026
        </p>

        {/* Guest Name Card */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px dashed rgba(212, 175, 55, 0.35)",
            borderRadius: "16px",
            padding: "16px 20px",
            marginBottom: "26px",
          }}
        >
          <p style={{ fontSize: "12px", color: "var(--text-dim)", marginBottom: "4px" }}>
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: "700",
              color: "#ffffff",
              letterSpacing: "0.5px",
            }}
          >
            {guestName || "Tamu Undangan"}
          </div>
          <p style={{ fontSize: "11px", color: "rgba(212, 175, 55, 0.9)", marginTop: "4px", fontStyle: "italic" }}>
            *Mohon maaf jika ada kesalahan penulisan nama / gelar
          </p>
        </div>

        {/* Open Button */}
        <button
          onClick={handleOpen}
          className="gold-button"
          style={{
            width: "100%",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          <MailOpen size={18} />
          Buka Undangan
        </button>

        <p
          style={{
            fontSize: "11px",
            color: "var(--text-dim)",
            marginTop: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          Sentuhan musik & confetti akan diputar otomatis <Heart size={12} color="#f43f5e" fill="#f43f5e" />
        </p>
      </div>
    </div>
  );
}
