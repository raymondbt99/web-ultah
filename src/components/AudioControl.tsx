"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Disc3, Volume1 } from "lucide-react";
import { musicPlayer } from "@/lib/audioPlayer";

export default function AudioControl() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);

  useEffect(() => {
    // Check playing state periodically
    const timer = setInterval(() => {
      setIsPlaying(musicPlayer.getPlaying());
      setVolume(musicPlayer.getVolume());
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const handleToggle = () => {
    const newState = musicPlayer.toggle();
    setIsPlaying(newState);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    musicPlayer.setVolume(val);
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
        gap: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(18, 27, 39, 0.88)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(212, 175, 55, 0.45)",
          borderRadius: "9999px",
          padding: "6px 14px",
          boxShadow: isPlaying
            ? "0 4px 20px rgba(212, 175, 55, 0.35)"
            : "0 4px 15px rgba(0, 0, 0, 0.5)",
          transition: "all 0.3s ease",
        }}
      >
        <button
          onClick={handleToggle}
          title={isPlaying ? "Jeda Musik Chinatown" : "Putar Musik Chinatown"}
          style={{
            background: isPlaying
              ? "linear-gradient(135deg, rgba(212, 175, 55, 0.95), rgba(184, 134, 11, 0.95))"
              : "rgba(255, 255, 255, 0.08)",
            color: isPlaying ? "#161003" : "var(--gold-400)",
            border: "none",
            borderRadius: "9999px",
            padding: "5px 10px",
            display: "flex",
            alignItems: "center",
            gap: "7px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <Disc3
            size={17}
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
            <VolumeX size={15} />
          )}

          <span style={{ fontSize: "11.5px", fontWeight: "700", letterSpacing: "0.4px" }}>
            {isPlaying ? "Chinatown BGM" : "Musik Mati"}
          </span>
        </button>

        {/* Volume slider */}
        {isPlaying && (
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginLeft: "2px" }}>
            <Volume2 size={14} color="var(--gold-400)" />
            <input
              type="range"
              min="0.1"
              max="0.8"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              title={`Volume: ${Math.round((volume / 0.8) * 100)}%`}
              style={{
                width: "55px",
                height: "4px",
                accentColor: "var(--gold-400)",
                cursor: "pointer",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
