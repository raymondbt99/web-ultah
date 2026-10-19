"use client";

import React from "react";
import { Clock, Wine, Video, Flame, Utensils, Gift, Music2 } from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isSpecial?: boolean;
}

const schedules: ScheduleItem[] = [
  {
    time: "18:30 - 19:15 WIB",
    title: "Red Carpet & Welcome Mocktail",
    description: "Registrasi tamu, welcome drink spesial, photobooth 360°, dan mingle santai bersama sahabat.",
    icon: <Wine size={20} color="var(--gold-400)" />,
  },
  {
    time: "19:15 - 19:45 WIB",
    title: "Grand Entrance & Memory Tribute",
    description: "Pembukaan meriah oleh MC, pemutaran video perjalanan hidup Alina dari masa kecil hingga 17 tahun.",
    icon: <Video size={20} color="var(--gold-400)" />,
  },
  {
    time: "19:45 - 20:30 WIB",
    title: "Candle Blowing & First Cake Ceremony",
    description: "Momen puncak tiup 17 lilin harapan, pemotongan kue pertama untuk orang tua tercinta, dan doa bersama.",
    icon: <Flame size={20} color="#f43f5e" />,
    isSpecial: true,
  },
  {
    time: "20:30 - 21:30 WIB",
    title: "Dinner Feast & Live Acoustic",
    description: "Santap malam bersama dengan hidangan buffet mewah diiringi alunan live acoustic band.",
    icon: <Utensils size={20} color="var(--gold-400)" />,
  },
  {
    time: "21:30 - 22:15 WIB",
    title: "Fun Games & Best Dress Award",
    description: "Keseruan games interaktif, pengumuman Best Dressed Guest, dan pembagian lucky draw hadiah spesial.",
    icon: <Gift size={20} color="var(--gold-400)" />,
  },
  {
    time: "22:15 - Selesai",
    title: "Dance Floor & After Celebration",
    description: "Sesi foto bersama, sing-along, dan dansa merayakan malam tak terlupakan.",
    icon: <Music2 size={20} color="var(--gold-400)" />,
  },
];

export default function Rundown() {
  return (
    <section id="rundown" style={{ margin: "70px 0" }}>
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
          <Clock size={14} /> Susunan Acara
        </div>
        <h2
          className="font-serif text-gold-gradient"
          style={{ fontSize: "2.3rem", fontWeight: "700" }}
        >
          Rundown Perayaan
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", maxWidth: "480px", margin: "8px auto 0" }}>
          Jadwal rangkaian malam istimewa untuk memastikan setiap momen dinikmati bersama.
        </p>
      </div>

      {/* Timeline Container */}
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          position: "relative",
          paddingLeft: "24px",
          borderLeft: "2px dashed rgba(212, 175, 55, 0.3)",
        }}
      >
        {schedules.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              marginBottom: index === schedules.length - 1 ? 0 : "30px",
              paddingLeft: "20px",
            }}
          >
            {/* Timeline Dot Indicator */}
            <div
              style={{
                position: "absolute",
                left: "-34px",
                top: "12px",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: item.isSpecial
                  ? "radial-gradient(circle, #f43f5e 30%, #d4af37 100%)"
                  : "var(--gold-gradient)",
                boxShadow: item.isSpecial
                  ? "0 0 15px rgba(244, 63, 94, 0.8)"
                  : "0 0 10px rgba(212, 175, 55, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#0d131a",
                }}
              />
            </div>

            {/* Event Card */}
            <div
              className="glass-card"
              style={{
                padding: "20px 24px",
                border: item.isSpecial
                  ? "1.5px solid rgba(244, 63, 94, 0.5)"
                  : "1px solid rgba(212, 175, 55, 0.25)",
                background: item.isSpecial
                  ? "linear-gradient(135deg, rgba(30, 20, 28, 0.8), rgba(20, 28, 40, 0.85))"
                  : "rgba(18, 27, 39, 0.75)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: item.isSpecial ? "#f43f5e" : "var(--gold-400)",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.icon}
                  <span>{item.time}</span>
                </div>

                {item.isSpecial && (
                  <span
                    style={{
                      background: "rgba(244, 63, 94, 0.2)",
                      border: "1px solid rgba(244, 63, 94, 0.4)",
                      color: "#fecdd3",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "2px 10px",
                      borderRadius: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Momen Utama ✨
                  </span>
                )}
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#f8fafc",
                  marginBottom: "6px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "13.5px",
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
