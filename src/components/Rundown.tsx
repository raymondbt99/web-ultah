"use client";

import React from "react";
import { Clock, Coffee, HeartHandshake, Flame, UtensilsCrossed, Camera, Gift } from "lucide-react";

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
    time: "11:30 - 12:00 WIB",
    title: "Penyambutan & Welcome Chrysanthemum Tea",
    chineseTitle: "迎宾品茗",
    description: "Registrasi tamu undangan, welcome tea bunga krisan & melati hangat, dan sesi temu kangen keluarga besar.",
    icon: <Coffee size={20} color="var(--gold-400)" />,
  },
  {
    time: "12:00 - 12:30 WIB",
    title: "Upacara Hormat Anak Cucu & Persembahan Teh (Teapai)",
    chineseTitle: "子孙敬茶 • 拜寿大礼",
    description: "Momen khidmat anak, menantu, cucu, dan cicit mempersembahkan secangkir teh bakti serta memohon berkah & doa restu Oma.",
    icon: <HeartHandshake size={20} color="#facc15" />,
    isSpecial: true,
  },
  {
    time: "12:30 - 13:00 WIB",
    title: "Potong Bakpao Shou Tao & Santap Mie Panjang Umur",
    chineseTitle: "切寿桃 • 尝长寿面",
    description: "Pemotongan simbolis kue Shou Tao (寿桃) dan santap Chángshòumiàn bersama sebagai doa kesehatan dan umur panjang melimpah.",
    icon: <Flame size={20} color="#dc2626" />,
    isSpecial: true,
  },
  {
    time: "13:00 - 14:15 WIB",
    title: "Jamuan Makan Siang 8-Course Imperial Banquet",
    chineseTitle: "八道吉利寿宴",
    description: "Menikmati 8 hidangan mewah khas perayaan keberuntungan Tionghoa diiringi musik instrumental Guzheng klasik.",
    icon: <UtensilsCrossed size={20} color="var(--gold-400)" />,
  },
  {
    time: "14:15 - 15:00 WIB",
    title: "Lagu Nostalgia & Foto Bersama 4 Generasi",
    chineseTitle: "四世同堂 • 怀旧金曲",
    description: "Persembahan lagu nostalgia favorit Oma, pemutaran video kenangan keluarga, dan sesi foto keluarga besar 4 generasi (四世同堂).",
    icon: <Camera size={20} color="var(--gold-400)" />,
  },
  {
    time: "15:00 - Selesai",
    title: "Pembagian Bingkisan Berkah Panjang Umur",
    chineseTitle: "寿礼致谢",
    description: "Pembagian bingkisan Shou Tao Bao, telur merah keberuntungan, dan ucapan terima kasih mendalam atas kehadiran keluarga.",
    icon: <Gift size={20} color="var(--gold-400)" />,
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
          Rangkaian tradisi penghormatan, doa panjang umur, dan jamuan kebersamaan keluarga besar Oma Tan Mei Ling.
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
                  ? "radial-gradient(circle, #facc15 30%, #dc2626 100%)"
                  : "var(--gold-gradient)",
                boxShadow: item.isSpecial
                  ? "0 0 16px rgba(220, 38, 38, 0.85)"
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
                  background: "#160305",
                }}
              />
            </div>

            {/* Event Card */}
            <div
              className="glass-card"
              style={{
                padding: "20px 24px",
                border: item.isSpecial
                  ? "1.5px solid rgba(220, 38, 38, 0.55)"
                  : "1px solid rgba(212, 175, 55, 0.3)",
                background: item.isSpecial
                  ? "linear-gradient(135deg, rgba(65, 12, 18, 0.85), rgba(30, 6, 9, 0.9))"
                  : "rgba(35, 8, 12, 0.8)",
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
                    color: item.isSpecial ? "var(--gold-300)" : "var(--gold-400)",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.icon}
                  <span>{item.time}</span>
                  <span style={{ fontSize: "12px", color: "var(--gold-400)", fontStyle: "italic" }}>
                    ({item.chineseTitle})
                  </span>
                </div>

                {item.isSpecial && (
                  <span
                    style={{
                      background: "rgba(220, 38, 38, 0.3)",
                      border: "1px solid rgba(212, 175, 55, 0.5)",
                      color: "var(--gold-300)",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "2px 10px",
                      borderRadius: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Momen Sakral ✨
                  </span>
                )}
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#fef2f2",
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
