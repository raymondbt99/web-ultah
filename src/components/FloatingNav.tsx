"use client";

import React from "react";
import { Home, Timer, Clock, MapPin } from "lucide-react";

export default function FloatingNav() {
  const navItems = [
    { label: "Home", href: "#hero", icon: <Home size={18} /> },
    { label: "Hitung Mundur", href: "#countdown-section", icon: <Timer size={18} /> },
    { label: "Acara", href: "#rundown", icon: <Clock size={18} /> },
    { label: "Lokasi", href: "#location", icon: <MapPin size={18} /> },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 900,
        background: "rgba(15, 23, 35, 0.82)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(212, 175, 55, 0.35)",
        borderRadius: "9999px",
        padding: "8px 14px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(212, 175, 55, 0.15)",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {navItems.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          onClick={(e) => handleScroll(e, item.href)}
          title={item.label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 12px",
            borderRadius: "9999px",
            color: "var(--text-muted)",
            fontSize: "10.5px",
            fontWeight: 600,
            gap: "2px",
            transition: "all 0.2s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--gold-400)";
            e.currentTarget.style.background = "rgba(212, 175, 55, 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-muted)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          {item.icon}
          <span style={{ fontSize: "10px" }}>{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
