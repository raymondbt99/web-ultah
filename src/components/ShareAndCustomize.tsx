"use client";

import React, { useState } from "react";
import { Share2, X, Copy, Check, MessageCircle, Sparkles } from "lucide-react";

interface ShareAndCustomizeProps {
  currentGuest: string;
  onUpdateGuest: (name: string) => void;
}

export default function ShareAndCustomize({ currentGuest, onUpdateGuest }: ShareAndCustomizeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [nameInput, setNameInput] = useState(currentGuest);
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window === "undefined") return "";
    const url = new URL(window.location.origin + window.location.pathname);
    if (nameInput.trim()) {
      url.searchParams.set("to", nameInput.trim());
    }
    return url.toString();
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onUpdateGuest(nameInput.trim());
      const url = new URL(window.location.href);
      url.searchParams.set("to", nameInput.trim());
      window.history.replaceState({}, "", url.toString());
    }
  };

  const handleCopyLink = () => {
    const link = getShareUrl();
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    const link = getShareUrl();
    const guest = nameInput.trim() || "Tamu Undangan";
    const text = `Kepada Yth. ${guest}%0A%0A*祝寿 • Undangan Perayaan Ulang Tahun ke-72 (七十二大寿)*%0A*Oma Tan Mei Ling (陈美玲)*%0A%0AFú rú dōnghǎi, Shòu bǐ nánshān (福如东海，寿比南山)%0A%0ATanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam perayaan syukuran ulang tahun dan jamuan makan siang bersama Oma terkasih kami.%0A%0A📅 Minggu, 15 November 2026 (11:30 WIB)%0A📍 Grand Dragon Ballroom (Sun City Club), LTC Glodok Jakarta%0A%0ALink Undangan Digital & Konfirmasi Kehadiran:%0A${encodeURIComponent(
      link
    )}`;
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Floating Button in Top Left */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 900,
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          title="Personalisasi & Bagikan Undangan"
          style={{
            background: "rgba(35, 8, 12, 0.88)",
            color: "var(--gold-400)",
            border: "1.5px solid rgba(212, 175, 55, 0.55)",
            backdropFilter: "blur(12px)",
            borderRadius: "9999px",
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: 700,
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.7)",
            transition: "all 0.25s ease",
          }}
        >
          <Share2 size={15} />
          <span>Bagikan Undangan</span>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10001,
            background: "rgba(10, 2, 4, 0.88)",
            backdropFilter: "blur(12px)",
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
              maxWidth: "460px",
              width: "100%",
              padding: "28px",
              border: "1.5px solid rgba(212, 175, 55, 0.5)",
              position: "relative",
              background: "#1c0407",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "transparent",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-400)", marginBottom: "6px" }}>
              <Sparkles size={16} />
              <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px" }}>
                Personalisasi Tamu Undangan
              </span>
            </div>

            <h3 className="font-serif text-gold-gradient" style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "8px" }}>
              Buat Link Undangan Khusus Tamu
            </h3>

            <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "20px" }}>
              Ketikkan nama keluarga atau kerabat untuk membuat tautan undangan khusus dengan nama mereka di sampul amplop.
            </p>

            <form onSubmit={handleApply} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", color: "var(--text-muted)", marginBottom: "6px", fontWeight: 600 }}>
                  Nama Tamu Undangan / Kerabat:
                </label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Contoh: Bpk. Tan Tjin Hock & Keluarga"
                    style={{
                      flex: 1,
                      padding: "10px 14px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(212, 175, 55, 0.3)",
                      color: "#ffffff",
                      fontSize: "13.5px",
                      outline: "none",
                    }}
                  />
                  <button type="submit" className="outline-button" style={{ fontSize: "12.5px", padding: "10px 16px" }}>
                    Terapkan
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="gold-button"
                  style={{ width: "100%", fontSize: "13px", padding: "11px 16px" }}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Link Khusus Berhasil Disalin!" : "Salin Link Khusus Tamu"}
                </button>

                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  style={{
                    width: "100%",
                    fontSize: "13px",
                    padding: "11px 16px",
                    borderRadius: "9999px",
                    background: "rgba(37, 211, 102, 0.15)",
                    border: "1px solid rgba(37, 211, 102, 0.4)",
                    color: "#4ade80",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <MessageCircle size={16} />
                  Kirim Undangan via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
