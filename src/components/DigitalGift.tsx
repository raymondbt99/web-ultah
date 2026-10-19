"use client";

import React, { useState } from "react";
import { Gift, Copy, Check, CreditCard, Send, MapPin, Sparkles } from "lucide-react";

export default function DigitalGift() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const accounts = [
    {
      key: "bca",
      bank: "Bank Central Asia (BCA)",
      accNumber: "5270198821",
      accName: "Tan Mei Ling",
      badge: "BCA",
      color: "#005baa",
    },
    {
      key: "mandiri",
      bank: "Bank Mandiri",
      accNumber: "1190012847192",
      accName: "Tan Mei Ling",
      badge: "Mandiri",
      color: "#002d62",
    },
    {
      key: "qris",
      bank: "E-Wallet / QRIS Angpao",
      accNumber: "081188223344",
      accName: "Tan Mei Ling",
      badge: "QRIS / GoPay",
      color: "#dc2626",
    },
  ];

  const giftAddress =
    "Jl. Pluit Samudra Raya No. 18, RT 06 / RW 05, Pluit, Penjaringan, Jakarta Utara 14450 (Penerima: Oma Tan Mei Ling / c.o David Wijaya 081188223344)";

  return (
    <section id="gift" style={{ margin: "70px 0" }}>
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
          <Gift size={14} /> Tanda Kasih & Angpao • 礼金红包
        </div>
        <h2
          className="font-serif text-gold-gradient"
          style={{ fontSize: "2.3rem", fontWeight: "700" }}
        >
          Kado & Angpao Keberuntungan (红包)
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", maxWidth: "540px", margin: "8px auto 0" }}>
          Kehadiran dan doa restu Anda adalah karunia yang paling bernilai bagi keluarga. Namun bagi yang ingin mengirimkan tanda kasih dan angpao digital untuk Oma:
        </p>
      </div>

      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Bank & E-Wallet Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {accounts.map((acc) => (
            <div
              key={acc.key}
              className="glass-card"
              style={{
                padding: "22px 20px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "14px",
                border: "1px solid rgba(212, 175, 55, 0.4)",
                background: "rgba(35, 8, 12, 0.8)",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--gold-300)",
                      background: "rgba(220, 38, 38, 0.35)",
                      border: "1px solid rgba(212, 175, 55, 0.35)",
                      padding: "3px 8px",
                      borderRadius: "6px",
                    }}
                  >
                    {acc.badge}
                  </span>
                  <CreditCard size={18} color="var(--gold-400)" />
                </div>
                <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "4px" }}>
                  {acc.bank}
                </div>
                <div
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    color: "#ffffff",
                    fontFamily: "monospace",
                  }}
                >
                  {acc.accNumber}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-dim)", marginTop: "2px" }}>
                  a.n. {acc.accName}
                </div>
              </div>

              <button
                onClick={() => handleCopy(acc.accNumber, acc.key)}
                className="outline-button"
                style={{
                  width: "100%",
                  fontSize: "12.5px",
                  padding: "9px 12px",
                  borderColor: copiedKey === acc.key ? "var(--gold-400)" : "rgba(212, 175, 55, 0.4)",
                  color: copiedKey === acc.key ? "var(--gold-300)" : "#ffffff",
                }}
              >
                {copiedKey === acc.key ? (
                  <>
                    <Check size={14} color="var(--gold-400)" /> Rekening Berhasil Disalin!
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Salin Nomor Rekening
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Physical Gift Delivery Address */}
        <div
          className="glass-card"
          style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            border: "1.5px solid rgba(212, 175, 55, 0.4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-400)" }}>
            <MapPin size={18} />
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>
              Kirim Bingkisan Bunga / Parcel Buah Sehat
            </h4>
          </div>
          <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.6 }}>
            {giftAddress}
          </p>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "4px" }}>
            <button
              onClick={() => handleCopy(giftAddress, "address")}
              className="outline-button"
              style={{
                fontSize: "12.5px",
                padding: "8px 16px",
                borderColor: copiedKey === "address" ? "var(--gold-400)" : "rgba(212, 175, 55, 0.4)",
                color: copiedKey === "address" ? "var(--gold-300)" : "#ffffff",
              }}
            >
              {copiedKey === "address" ? (
                <>
                  <Check size={14} /> Alamat Berhasil Disalin!
                </>
              ) : (
                <>
                  <Copy size={14} /> Salin Alamat Kediaman Oma
                </>
              )}
            </button>

            <a
              href="https://wa.me/6281188223344?text=Halo%20Keluarga%20Oma%20Tan%20Mei%20Ling,%20kami%20telah%20mengirimkan%20tanda%20kasih%20angpao%20untuk%20ulang%20tahun%20ke-72%20Oma.%20Semoga%20Oma%20selalu%20sehat%20walafiat,%20panjang%20umur,%20dan%20bahagia!"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button"
              style={{ fontSize: "12.5px", padding: "8px 18px" }}
            >
              <Send size={14} />
              Konfirmasi Angpao via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
