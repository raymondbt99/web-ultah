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
    // Launch celebratory gold & imperial red confetti burst
    confetti({
      particleCount: 130,
      spread: 95,
      origin: { y: 0.6 },
      colors: ["#dc2626", "#d4af37", "#facc15", "#ffd700", "#7f1d1d"],
    });

    // Start oriental guzheng background music
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
        background: "radial-gradient(ellipse at center, #2e080d 0%, #0d0203 100%)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Decorative Traditional Chinese Background Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle 2px at 20% 30%, rgba(212, 175, 55, 0.45), transparent), radial-gradient(circle 2px at 80% 70%, rgba(220, 38, 38, 0.45), transparent), radial-gradient(circle 3px at 50% 80%, rgba(250, 204, 21, 0.4), transparent)",
        }}
      />

      {/* Main Imperial Red Angpao Card */}
      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "460px",
          padding: "38px 26px",
          textAlign: "center",
          position: "relative",
          border: "2px solid rgba(212, 175, 55, 0.55)",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 35px rgba(220, 38, 38, 0.35)",
          borderRadius: "28px",
          animation: "floatBob 6s ease-in-out infinite",
          background: "linear-gradient(165deg, rgba(50, 10, 15, 0.92) 0%, rgba(25, 4, 6, 0.95) 100%)",
        }}
      >
        {/* Chinese Auspicious Knot Ornament */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
          <div
            style={{
              padding: "6px 16px",
              background: "rgba(220, 38, 38, 0.25)",
              borderRadius: "30px",
              border: "1px solid rgba(212, 175, 55, 0.45)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "var(--gold-300)",
              fontWeight: 700,
            }}
          >
            <Sparkles size={14} color="var(--gold-400)" /> 祝寿 • 72nd Longevity Celebration
          </div>
        </div>

        {/* Circular Celebrant Photo Preview */}
        <div
          style={{
            position: "relative",
            width: "145px",
            height: "145px",
            margin: "0 auto 18px auto",
            borderRadius: "50%",
            padding: "4px",
            background: "linear-gradient(135deg, #fef08a, #d4af37, #dc2626)",
            boxShadow: "0 0 25px rgba(212, 175, 55, 0.5), 0 0 40px rgba(220, 38, 38, 0.35)",
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
              src="/images/potrait.jpg"
              alt="Djong Nyun Kui"
              fill
              sizes="145px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-4px",
              right: "4px",
              background: "linear-gradient(135deg, #facc15, #b91c1c)",
              color: "#ffffff",
              borderRadius: "50%",
              width: "38px",
              height: "38px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "900",
              fontSize: "14px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.6)",
              border: "2px solid #280508",
            }}
          >
            72
          </div>
        </div>

        {/* Traditional Chinese Character Blessing */}
        <div
          style={{
            fontSize: "1.4rem",
            color: "var(--gold-400)",
            letterSpacing: "6px",
            fontWeight: 800,
            marginBottom: "4px",
          }}
        >
          福如东海 • 寿比南山
        </div>

        {/* Main Title */}
        <h2
          className="font-serif text-gold-gradient"
          style={{
            fontSize: "1.9rem",
            fontWeight: "700",
            marginBottom: "12px",
            letterSpacing: "0.5px",
          }}
        >
          Djong Nyun Kui
        </h2>

        <p
          style={{
            fontSize: "12.5px",
            color: "var(--text-muted)",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Jumat, 30 Oktober 2026 • 13:00 WIB - Selesai
        </p>

        {/* Guest Name Card */}
        <div
          style={{
            background: "rgba(220, 38, 38, 0.12)",
            border: "1.5px dashed rgba(212, 175, 55, 0.4)",
            borderRadius: "16px",
            padding: "16px 20px",
            marginBottom: "24px",
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
          Buka Undangan ( 开函 )
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
          Alunan musik tradisional & konfeti emas diputar otomatis <Heart size={12} color="#dc2626" fill="#dc2626" />
        </p>
      </div>
    </div>
  );
}
