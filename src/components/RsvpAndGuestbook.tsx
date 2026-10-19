"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Send, MessageSquareHeart, Heart, Sparkles, UserCheck, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

interface WishItem {
  id: string;
  name: string;
  status: "hadir" | "ragu" | "tidak";
  message: string;
  timestamp: string;
  likes: number;
}

const initialWishes: WishItem[] = [
  {
    id: "w-1",
    name: "Jessica Maharani & Randy",
    status: "hadir",
    message: "Happy 17th Birthday dearest Alina! 💖 Semoga semakin sukses, tercapai semua impianmu, dan selalu bahagia. Can't wait to party together!",
    timestamp: "10 menit lalu",
    likes: 12,
  },
  {
    id: "w-2",
    name: "Keluarga Om Budi & Tante Rita",
    status: "hadir",
    message: "Selamat ulang tahun yang ke-17 keponakan kami tersayang. Semoga selalu dalam lindungan Allah, sehat, dan berbakti kepada orang tua.",
    timestamp: "1 jam lalu",
    likes: 8,
  },
  {
    id: "w-3",
    name: "Dimas Anggara (SMA 8)",
    status: "hadir",
    message: "Happy Sweet Seventeen Alina! Makin glowing, sukses belajarnya, dan seru-seruan di acara nanti malam!",
    timestamp: "3 jam lalu",
    likes: 5,
  },
  {
    id: "w-4",
    name: "Sarah Aurelia",
    status: "ragu",
    message: "Happy birthday Alina sayang! Aku usahakan hadir ya, semoga jadwal ujiannya aman. Have a blast milestone! ✨",
    timestamp: "Kemarin",
    likes: 4,
  },
];

interface RsvpAndGuestbookProps {
  initialGuestName?: string;
}

export default function RsvpAndGuestbook({ initialGuestName = "" }: RsvpAndGuestbookProps) {
  const [name, setName] = useState(initialGuestName);
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"hadir" | "ragu" | "tidak">("hadir");
  const [guestCount, setGuestCount] = useState("1");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<WishItem[]>(initialWishes);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  // Sync initialGuestName if it updates
  useEffect(() => {
    if (initialGuestName && !name) {
      setName(initialGuestName);
    }
  }, [initialGuestName, name]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("alina_birthday_wishes");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newWish: WishItem = {
      id: "w-" + Date.now(),
      name: name.trim(),
      status,
      message: message.trim() || "Selamat ulang tahun ke-17 Alina Putri Pratama! Sukses selalu!",
      timestamp: "Baru saja",
      likes: 1,
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem("alina_birthday_wishes", JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#d4af37", "#10b981", "#f43f5e", "#facc15"],
    });

    setIsSubmitted(true);
    setMessage("");
  };

  const handleLike = (id: string) => {
    if (likedMap[id]) return;
    setLikedMap((prev) => ({ ...prev, [id]: true }));
    setWishes((prev) =>
      prev.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w))
    );
  };

  return (
    <section id="rsvp" style={{ margin: "70px 0" }}>
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
          <UserCheck size={14} /> Reservasi & Doa
        </div>
        <h2
          className="font-serif text-gold-gradient"
          style={{ fontSize: "2.3rem", fontWeight: "700" }}
        >
          Konfirmasi Kehadiran & Buku Tamu
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", maxWidth: "520px", margin: "8px auto 0" }}>
          Kehadiran dan doa restu Anda merupakan hadiah terindah yang sangat kami nantikan.
        </p>
      </div>

      <div
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
          alignItems: "start",
        }}
      >
        {/* Left: RSVP Form */}
        <div className="glass-card" style={{ padding: "30px 24px" }}>
          <h3
            className="font-serif"
            style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}
          >
            <Sparkles size={18} color="var(--gold-400)" /> Form Konfirmasi
          </h3>

          {isSubmitted ? (
            <div
              style={{
                textAlign: "center",
                padding: "36px 16px",
                background: "rgba(16, 185, 129, 0.1)",
                borderRadius: "16px",
                border: "1px solid rgba(16, 185, 129, 0.3)",
              }}
            >
              <CheckCircle2 size={48} color="#10b981" style={{ margin: "0 auto 12px" }} />
              <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>
                Terima Kasih, {name}!
              </h4>
              <p style={{ fontSize: "13.5px", color: "var(--text-muted)", marginBottom: "18px" }}>
                Konfirmasi dan ucapan Anda telah berhasil terkirim dan tercatat di buku tamu.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="outline-button"
                style={{ fontSize: "12.5px", padding: "8px 18px" }}
              >
                Kirim Ucapan Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12.5px", color: "var(--text-muted)", marginBottom: "6px", fontWeight: 600 }}>
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Raymond & Partner"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12.5px", color: "var(--text-muted)", marginBottom: "6px", fontWeight: 600 }}>
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="0812xxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12.5px", color: "var(--text-muted)", marginBottom: "6px", fontWeight: 600 }}>
                  Konfirmasi Kehadiran *
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                  {[
                    { key: "hadir", label: "Hadir 🎉" },
                    { key: "ragu", label: "Masih Ragu 🤔" },
                    { key: "tidak", label: "Berhalangan 💌" },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setStatus(opt.key as "hadir" | "ragu" | "tidak")}
                      style={{
                        padding: "10px 4px",
                        fontSize: "12px",
                        fontWeight: 600,
                        borderRadius: "8px",
                        cursor: "pointer",
                        border: status === opt.key ? "1.5px solid var(--gold-400)" : "1px solid rgba(255, 255, 255, 0.1)",
                        background: status === opt.key ? "rgba(212, 175, 55, 0.2)" : "rgba(255, 255, 255, 0.03)",
                        color: status === opt.key ? "var(--gold-300)" : "var(--text-muted)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {status === "hadir" && (
                <div>
                  <label style={{ display: "block", fontSize: "12.5px", color: "var(--text-muted)", marginBottom: "6px", fontWeight: 600 }}>
                    Jumlah Tamu Hadir
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: "#121b27",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#ffffff",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  >
                    <option value="1">1 Orang (Hanya Saya)</option>
                    <option value="2">2 Orang (+ Pasangan / Teman)</option>
                    <option value="3">3 Orang (+ Keluarga)</option>
                  </select>
                </div>
              )}

              <div>
                <label style={{ display: "block", fontSize: "12.5px", color: "var(--text-muted)", marginBottom: "6px", fontWeight: 600 }}>
                  Ucapan & Doa Hangat
                </label>
                <textarea
                  rows={3}
                  placeholder="Tuliskan ucapan dan doa terbaik untuk Alina..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: "14px",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button type="submit" className="gold-button" style={{ width: "100%", marginTop: "8px" }}>
                <Send size={16} />
                Kirim Konfirmasi & Doa
              </button>
            </form>
          )}
        </div>

        {/* Right: Guestbook Feed */}
        <div className="glass-card" style={{ padding: "30px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <h3
              className="font-serif"
              style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", display: "flex", alignItems: "center", gap: "8px" }}
            >
              <MessageSquareHeart size={20} color="var(--gold-400)" /> Buku Tamu
            </h3>
            <span
              style={{
                fontSize: "12px",
                background: "rgba(212, 175, 55, 0.15)",
                color: "var(--gold-300)",
                padding: "3px 10px",
                borderRadius: "20px",
                fontWeight: 600,
              }}
            >
              {wishes.length} Pesan
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              maxHeight: "440px",
              overflowY: "auto",
              paddingRight: "6px",
            }}
          >
            {wishes.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "14px",
                  padding: "14px 16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: "#ffffff" }}>
                    {item.name}
                  </div>
                  <span
                    style={{
                      fontSize: "10.5px",
                      padding: "2px 8px",
                      borderRadius: "10px",
                      fontWeight: 600,
                      background:
                        item.status === "hadir"
                          ? "rgba(16, 185, 129, 0.2)"
                          : item.status === "ragu"
                          ? "rgba(250, 204, 21, 0.2)"
                          : "rgba(244, 63, 94, 0.2)",
                      color:
                        item.status === "hadir"
                          ? "#6ee7b7"
                          : item.status === "ragu"
                          ? "#fde047"
                          : "#fca5a5",
                    }}
                  >
                    {item.status === "hadir" ? "Hadir" : item.status === "ragu" ? "Ragu-ragu" : "Berhalangan"}
                  </span>
                </div>

                <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "8px" }}>
                  {item.message}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "11px", color: "var(--text-dim)" }}>
                  <span>{item.timestamp}</span>
                  <button
                    onClick={() => handleLike(item.id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: likedMap[item.id] ? "#f43f5e" : "var(--text-dim)",
                      fontSize: "11.5px",
                      fontWeight: 600,
                    }}
                  >
                    <Heart size={13} fill={likedMap[item.id] ? "#f43f5e" : "none"} />
                    {item.likes}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
