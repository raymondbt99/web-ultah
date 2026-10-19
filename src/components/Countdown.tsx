"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Download, Sparkles } from "lucide-react";

export default function Countdown() {
  // Target: 28 November 2026, 18:30:00 WIB (UTC+7)
  const targetDate = new Date("2026-11-28T18:30:00+07:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Google Calendar URL generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("The Sweet 17th Birthday of Alina Putri Pratama");
    const details = encodeURIComponent(
      "Perayaan Sweet 17th Birthday Alina Putri Pratama. Dress code: Glam & Elegant (Emerald Green & Champagne Gold). Info lengkap di undangan website."
    );
    const location = encodeURIComponent("The Glasshouse Grand Pavilion, Jl. Iskandarsyah Raya No. 88, Kebayoran Baru, Jakarta Selatan");
    // 2026-11-28 18:30 WIB = 11:30 UTC -> 20261128T113000Z to 20261128T160000Z (23:00 WIB)
    const dates = "20261128T113000Z/20261128T160000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  // Download .ics file
  const handleDownloadIcs = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Alina Birthday//Invitation//ID
BEGIN:VEVENT
UID:${new Date().getTime()}@alinabirthday.com
DTSTAMP:20261128T113000Z
DTSTART:20261128T113000Z
DTEND:20261128T160000Z
SUMMARY:The Sweet 17th Birthday of Alina Putri Pratama
DESCRIPTION:Perayaan Sweet 17th Birthday Alina Putri Pratama. Dress code: Glam & Elegant (Emerald Green & Champagne Gold).
LOCATION:The Glasshouse Grand Pavilion, Jakarta Selatan
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "undangan-ultah-alina.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ textAlign: "center", margin: "40px 0" }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: "var(--gold-400)",
          fontSize: "13px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontWeight: 600,
          marginBottom: "16px",
        }}
      >
        <Sparkles size={14} /> Menghitung Hari Menuju Pesta <Sparkles size={14} />
      </div>

      {/* Countdown Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(70px, 1fr))",
          gap: "12px",
          maxWidth: "460px",
          margin: "0 auto 24px auto",
        }}
      >
        {[
          { label: "Hari", value: timeLeft.days },
          { label: "Jam", value: timeLeft.hours },
          { label: "Menit", value: timeLeft.minutes },
          { label: "Detik", value: timeLeft.seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="glass-card"
            style={{
              padding: "16px 8px",
              borderRadius: "16px",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              background: "rgba(18, 27, 39, 0.8)",
            }}
          >
            <div
              className="text-gold-gradient font-serif"
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                lineHeight: "1.2",
              }}
            >
              {String(item.value).padStart(2, "0")}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginTop: "4px",
                fontWeight: 600,
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Calendar Actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <a
          href={getGoogleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-button"
          style={{
            fontSize: "13px",
            padding: "10px 20px",
          }}
        >
          <Calendar size={16} />
          Simpan ke Google Calendar
        </a>

        <button
          onClick={handleDownloadIcs}
          className="outline-button"
          style={{
            fontSize: "13px",
            padding: "10px 18px",
          }}
        >
          <Download size={15} />
          Download Kalender (.ics)
        </button>
      </div>
    </div>
  );
}
