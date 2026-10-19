"use client";

import React from "react";
import { Clock, Cake, UtensilsCrossed, Sparkles } from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  chineseTitle: string;
  description: string;
  icon: React.ReactNode;
  isSpecial?: boolean;
}

const schedules: ScheduleItem[] = [
  {
    time: "13.00 - 13.30 WIB",
    title: "Potong Kue Ulang Tahun & Doa Syukur",
    chineseTitle: "切寿桃 • 祝寿祈福",
    description: "Momen istimewa pemotongan kue ulang tahun dan doa bersama memohon kelimpahan berkah, kesehatan, dan umur panjang.",
    icon: <Cake size={20} color="#facc15" />,
    isSpecial: true,
  },
  {
    time: "13.30 - 15.30 WIB",
    title: "Makan Sesi 1",
    chineseTitle: "第一轮宴席 • 齐聚享宴",
    description: "Jamuan makan bersama sesi pertama penuh kehangatan dan kebersamaan keluarga serta para sahabat.",
    icon: <UtensilsCrossed size={20} color="var(--gold-400)" />,
  },
  {
    time: "15.30 WIB - Selesai",
    title: "Makan Sesi 2",
    chineseTitle: "第二轮宴席 • 喜乐同欢",
    description: "Jamuan makan bersama sesi kedua, ramah tamah, dan sesi foto kebersamaan keluarga besar.",
    icon: <UtensilsCrossed size={20} color="var(--gold-400)" />,
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
          <Clock size={14} /> Susunan Acara • 寿诞流程
        </div>
        <h2
          className="font-serif text-gold-gradient"
          style={{ fontSize: "2.3rem", fontWeight: "700" }}
        >
          Rundown Perayaan Syukuran
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", maxWidth: "520px", margin: "8px auto 0" }}>
          Rangkaian tradisi doa panjang umur dan jamuan kebersamaan keluarga besar Djong Nyun Kui.
        </p>
      </div>

      {/* Timeline Container */}
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          position: "relative",
          paddingLeft: "24px",
          borderLeft: "2px dashed rgba(212, 175, 55, 0.45)",
        }}
      >
        {schedules.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              marginBottom: index === schedules.length - 1 ? 0 : "34px",
              paddingLeft: "20px",
            }}
          >
            {/* Timeline Dot Node */}
            <div
              style={{
                position: "absolute",
                left: "-37px",
                top: "4px",
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                background: item.isSpecial
                  ? "linear-gradient(135deg, #facc15, #b91c1c)"
                  : "linear-gradient(135deg, #b91c1c, #450a0a)",
                border: "2px solid rgba(250, 204, 21, 0.9)",
                boxShadow: item.isSpecial
                  ? "0 0 16px rgba(250, 204, 21, 0.6)"
                  : "0 0 8px rgba(0, 0, 0, 0.5)",
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
                  background: "#ffffff",
                }}
              />
            </div>

            {/* Content Glass Card */}
            <div
              className="glass-card"
              style={{
                padding: "20px",
                border: item.isSpecial
                  ? "1.5px solid rgba(212, 175, 55, 0.55)"
                  : "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: item.isSpecial
                  ? "0 8px 30px rgba(212, 175, 55, 0.15)"
                  : "0 4px 15px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginBottom: "8px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      background: "rgba(220, 38, 38, 0.25)",
                      border: "1px solid rgba(212, 175, 55, 0.4)",
                      borderRadius: "10px",
                      padding: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="font-serif"
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: "700",
                        color: item.isSpecial ? "var(--gold-300)" : "#ffffff",
                      }}
                    >
                      {item.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "var(--gold-400)",
                        fontWeight: 600,
                        letterSpacing: "1px",
                      }}
                    >
                      {item.chineseTitle}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(212, 175, 55, 0.15)",
                    border: "1px solid rgba(212, 175, 55, 0.35)",
                    color: "var(--gold-300)",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.time}
                </div>
              </div>

              <p
                style={{
                  fontSize: "13.5px",
                  color: "var(--text-muted)",
                  lineHeight: "1.6",
                  margin: 0,
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
