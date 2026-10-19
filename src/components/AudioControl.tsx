"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Disc3 } from "lucide-react";
import { musicPlayer } from "@/lib/audioPlayer";

export default function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Check playing state periodically
    const timer = setInterval(() => {
      setIsPlaying(musicPlayer.getPlaying());
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const handleToggle = () => {
    const newState = musicPlayer.toggle();
    setIsPlaying(newState);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 900,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button
        onClick={handleToggle}
        title={isPlaying ? "Jeda Musik" : "Putar Musik"}
        style={{
          background: isPlaying
            ? "linear-gradient(135deg, rgba(212, 175, 55, 0.95), rgba(184, 134, 11, 0.95))"
            : "rgba(18, 27, 39, 0.85)",
          color: isPlaying ? "#161003" : "var(--gold-400)",
          border: "1px solid rgba(212, 175, 55, 0.5)",
          backdropFilter: "blur(12px)",
          borderRadius: "9999px",
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          boxShadow: isPlaying
            ? "0 4px 20px rgba(212, 175, 55, 0.4)"
            : "0 4px 15px rgba(0, 0, 0, 0.5)",
          transition: "all 0.3s ease",
        }}
      >
        <Disc3
          size={18}
          className={isPlaying ? "spin-slow" : ""}
          style={{ transition: "transform 0.5s ease" }}
        />

        {isPlaying ? (
          <div className="sound-bars">
            <span className="sound-bar" style={{ background: "#161003" }}></span>
            <span className="sound-bar" style={{ background: "#161003" }}></span>
            <span className="sound-bar" style={{ background: "#161003" }}></span>
            <span className="sound-bar" style={{ background: "#161003" }}></span>
          </div>
        ) : (
          <VolumeX size={16} />
        )}

        <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.5px" }}>
          {isPlaying ? "Music ON" : "Music OFF"}
        </span>
      </button>
    </div>
  );
}
