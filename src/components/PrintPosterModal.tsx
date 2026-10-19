"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Printer, Download, X, Sparkles, Calendar, Clock, MapPin, CheckCircle2 } from "lucide-react";
import html2canvas from "html2canvas";

interface PrintPosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrintPosterModal({ isOpen, onClose }: PrintPosterModalProps) {
  const posterRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownloadImage = async () => {
    if (!posterRef.current || isGenerating) return;
    setIsGenerating(true);
    setDownloadSuccess(false);

    try {
      // Allow fonts and images to settle
      await document.fonts.ready;

      const canvas = await html2canvas(posterRef.current, {
        scale: 3, // High DPI for crisp print and mobile sharing
        useCORS: true,
        backgroundColor: "#200609",
        logging: false,
      });

      const image = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement("a");
      link.href = image;
      link.download = "poster-undangan-djong-nyun-kui.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error("Gagal membuat gambar poster:", err);
      alert("Maaf, terjadi kendala saat memproses gambar poster. Anda juga dapat menggunakan opsi Cetak / Print langsung.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(10, 2, 4, 0.88)",
        backdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflowY: "auto",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          maxWidth: "560px",
          width: "100%",
          maxHeight: "94vh",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          margin: "auto",
        }}
      >
        {/* Top Action Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(35, 8, 12, 0.95)",
            padding: "12px 18px",
            borderRadius: "16px",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            color: "#ffffff",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Sparkles size={18} color="var(--gold-400)" />
            <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--gold-300)" }}>
              Poster Undangan (Portrait)
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              onClick={handlePrint}
              className="outline-button"
              style={{
                fontSize: "12px",
                padding: "6px 14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
              title="Cetak via Printer atau Simpan sebagai PDF"
            >
              <Printer size={15} /> Cetak
            </button>

            <button
              onClick={handleDownloadImage}
              disabled={isGenerating}
              className="gold-button"
              style={{
                fontSize: "12px",
                padding: "6px 14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                opacity: isGenerating ? 0.7 : 1,
              }}
              title="Unduh file gambar PNG"
            >
              {isGenerating ? (
                <>Menyimpan...</>
              ) : downloadSuccess ? (
                <>
                  <CheckCircle2 size={15} /> Tersimpan!
                </>
              ) : (
                <>
                  <Download size={15} /> Unduh Gambar
                </>
              )}
            </button>

            <button
              onClick={onClose}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              title="Tutup"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Container for Preview */}
        <div
          style={{
            overflowY: "auto",
            borderRadius: "18px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.85)",
            background: "#200609",
          }}
        >
          {/* THE PRINTABLE PORTRAIT POSTER */}
          <div
            id="printable-poster-element"
            ref={posterRef}
            style={{
              width: "100%",
              maxWidth: "500px",
              margin: "0 auto",
              background: "linear-gradient(180deg, #2a070c 0%, #170305 50%, #29070c 100%)",
              color: "#ffffff",
              padding: "28px 22px",
              boxSizing: "border-box",
              position: "relative",
              border: "8px solid #3c0c11",
              outline: "2px solid #d4af37",
              textAlign: "center",
              fontFamily: "var(--font-sans)",
            }}
          >
            {/* Traditional Corner Ornaments */}
            <div style={{ position: "absolute", top: "6px", left: "6px", color: "var(--gold-400)", fontSize: "14px", fontWeight: "bold" }}>╔</div>
            <div style={{ position: "absolute", top: "6px", right: "6px", color: "var(--gold-400)", fontSize: "14px", fontWeight: "bold" }}>╗</div>
            <div style={{ position: "absolute", bottom: "6px", left: "6px", color: "var(--gold-400)", fontSize: "14px", fontWeight: "bold" }}>╚</div>
            <div style={{ position: "absolute", bottom: "6px", right: "6px", color: "var(--gold-400)", fontSize: "14px", fontWeight: "bold" }}>╝</div>

            {/* Inner Gold Border */}
            <div
              style={{
                position: "absolute",
                inset: "10px",
                border: "1px dashed rgba(212, 175, 55, 0.45)",
                pointerEvents: "none",
              }}
            />

            {/* Header Badge */}
            <div
              style={{
                display: "inline-block",
                padding: "4px 16px",
                background: "linear-gradient(135deg, #b91c1c, #7f1d1d)",
                border: "1.5px solid #d4af37",
                borderRadius: "20px",
                color: "#fef08a",
                fontSize: "11.5px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              祝寿 • 七十二大寿 • 72nd Birthday
            </div>

            {/* Auspicious Chinese Blessing */}
            <div
              style={{
                fontSize: "1.5rem",
                color: "#facc15",
                fontWeight: 800,
                letterSpacing: "6px",
                marginBottom: "12px",
                textShadow: "0 0 15px rgba(212, 175, 55, 0.5)",
              }}
            >
              福如东海 • 寿比南山
            </div>

            {/* Circular Framed Celebrant Portrait */}
            <div
              style={{
                position: "relative",
                width: "125px",
                height: "125px",
                margin: "0 auto 12px auto",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid #d4af37",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
                  position: "relative",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/potrait.jpg"
                  alt="Djong Nyun Kui"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Age 72 Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  right: "-2px",
                  background: "linear-gradient(135deg, #facc15, #b91c1c)",
                  color: "#ffffff",
                  borderRadius: "50%",
                  width: "34px",
                  height: "34px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "14px",
                  border: "2px solid #200609",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.6)",
                }}
              >
                72
              </div>
            </div>

            {/* Celebrant Name */}
            <h2
              className="font-serif"
              style={{
                fontSize: "1.95rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "1px",
                marginBottom: "4px",
                textShadow: "0 2px 8px rgba(0,0,0,0.7)",
              }}
            >
              Djong Nyun Kui
            </h2>

            <div
              style={{
                fontSize: "11px",
                color: "var(--gold-300)",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              四世同堂 • 松柏长青 • 阖家安康
            </div>

            {/* Date & Time Pill Banner */}
            <div
              style={{
                background: "rgba(220, 38, 38, 0.22)",
                border: "1.5px solid rgba(212, 175, 55, 0.5)",
                borderRadius: "12px",
                padding: "10px 14px",
                marginBottom: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                  color: "#ffffff",
                  fontSize: "13.5px",
                  fontWeight: 700,
                }}
              >
                <Calendar size={15} color="var(--gold-400)" />
                <span>Jumat, 30 Oktober 2026</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  color: "var(--gold-300)",
                  fontSize: "12.5px",
                  fontWeight: 600,
                }}
              >
                <Clock size={14} />
                <span>Pukul 13.00 WIB - Selesai</span>
              </div>
            </div>

            {/* Rundown Schedule Card */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                borderRadius: "12px",
                padding: "12px 14px",
                marginBottom: "16px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--gold-400)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  marginBottom: "8px",
                  textAlign: "center",
                }}
              >
                Susunan Acara • 流程
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "11.5px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, color: "#ffffff" }}>• Potong Kue & Doa Syukur (切寿桃)</span>
                  <span style={{ color: "var(--gold-300)", fontWeight: 700, fontSize: "11px" }}>13.00 - 13.30</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, color: "#ffffff" }}>• Makan Sesi 1 (第一轮宴席)</span>
                  <span style={{ color: "var(--gold-300)", fontWeight: 700, fontSize: "11px" }}>13.30 - 15.30</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 600, color: "#ffffff" }}>• Makan Sesi 2 (第二轮宴席)</span>
                  <span style={{ color: "var(--gold-300)", fontWeight: 700, fontSize: "11px" }}>15.30 - Selesai</span>
                </div>
              </div>
            </div>

            {/* Location & Address Card */}
            <div
              style={{
                background: "rgba(220, 38, 38, 0.16)",
                border: "1.5px solid rgba(212, 175, 55, 0.45)",
                borderRadius: "12px",
                padding: "12px 14px",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "var(--gold-400)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                <MapPin size={13} /> Tempat & Alamat Acara
              </div>

              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "4px",
                }}
              >
                Rumah Kediaman Djong Nyun Kui
              </div>
              <div
                style={{
                  fontSize: "11.5px",
                  color: "var(--gold-300)",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                (VegeDay Halal Tebas)
              </div>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                Jl. Tebas Kuala No. 42, Mak Rampai, Kec. Tebas, Kabupaten Sambas, Kalimantan Barat 79461
              </p>
            </div>

            {/* Poster Footer Signature */}
            <div
              style={{
                borderTop: "1px solid rgba(212, 175, 55, 0.35)",
                paddingTop: "10px",
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--gold-300)",
                letterSpacing: "0.5px",
              }}
            >
              Keluarga Besar Djong Nyun Kui
            </div>
            <div
              style={{
                fontSize: "9.5px",
                color: "var(--text-dim)",
                marginTop: "2px",
                letterSpacing: "1px",
              }}
            >
              吉星高照 • 福寿双全 • 阖家敬邀
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
