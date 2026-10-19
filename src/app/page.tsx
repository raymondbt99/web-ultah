"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Sparkles, Calendar, MapPin, Heart, ChevronDown } from "lucide-react";
import OpeningEnvelope from "@/components/OpeningEnvelope";
import AudioControl from "@/components/AudioControl";
import Countdown from "@/components/Countdown";
import Rundown from "@/components/Rundown";
import LocationCard from "@/components/LocationCard";
import Gallery from "@/components/Gallery";
import RsvpAndGuestbook from "@/components/RsvpAndGuestbook";
import DigitalGift from "@/components/DigitalGift";
import FloatingNav from "@/components/FloatingNav";
import ShareAndCustomize from "@/components/ShareAndCustomize";

function InvitationContent() {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState("Tamu Undangan");

  useEffect(() => {
    const toParam = searchParams.get("to");
    if (toParam) {
      setGuestName(toParam);
    }
  }, [searchParams]);

  return (
    <>
      {/* Cover / Opening Envelope Modal */}
      {!isOpen && (
        <OpeningEnvelope
          guestName={guestName}
          onOpen={() => setIsOpen(true)}
        />
      )}

      {/* Persistent Floating Controls (shown once opened) */}
      {isOpen && (
        <>
          <AudioControl />
          <ShareAndCustomize
            currentGuest={guestName}
            onUpdateGuest={(name) => setGuestName(name)}
          />
          <FloatingNav />
        </>
      )}

      {/* Main Page Layout */}
      <main
        style={{
          minHeight: "100vh",
          padding: "20px 20px 100px",
          maxWidth: "1100px",
          margin: "0 auto",
          opacity: isOpen ? 1 : 0.05,
          transition: "opacity 0.8s ease",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {/* HERO SECTION */}
        <section
          id="hero"
          style={{
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            position: "relative",
            padding: "40px 10px",
          }}
        >
          {/* Milestone Badge */}
          <div
            style={{
              padding: "6px 20px",
              background: "rgba(212, 175, 55, 0.12)",
              borderRadius: "30px",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12.5px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--gold-400)",
              fontWeight: 700,
              marginBottom: "28px",
              boxShadow: "0 4px 15px rgba(212, 175, 55, 0.15)",
            }}
          >
            <Sparkles size={15} /> The Sweet 17th Birthday Celebration
          </div>

          {/* Celebrant Main Hero Portrait */}
          <div
            style={{
              position: "relative",
              width: "220px",
              height: "220px",
              margin: "0 auto 28px auto",
              borderRadius: "50%",
              padding: "6px",
              background: "linear-gradient(135deg, #fef08a 0%, #d4af37 50%, #10b981 100%)",
              boxShadow: "0 0 35px rgba(212, 175, 55, 0.35), 0 20px 40px rgba(0,0,0,0.8)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/images/portrait.jpg"
                alt="Alina Putri Pratama"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "4px",
                right: "8px",
                background: "linear-gradient(135deg, #facc15, #b8860b)",
                color: "#181203",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "18px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.6)",
                border: "3px solid #0f1723",
              }}
            >
              17
            </div>
          </div>

          {/* Celebrant Name */}
          <h1
            className="font-serif text-gold-gradient"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: "700",
              lineHeight: 1.15,
              marginBottom: "12px",
            }}
          >
            Alina Putri Pratama
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "var(--text-muted)",
              fontStyle: "italic",
              maxWidth: "540px",
              marginBottom: "28px",
              lineHeight: 1.6,
            }}
          >
            &ldquo;Count your life by smiles, not tears. Count your age by friends, not years. Menyambut usia ke-17 dengan penuh syukur dan sukacita.&rdquo;
          </p>

          {/* Quick Details Pill Cards */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(212, 175, 55, 0.25)",
                padding: "8px 18px",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13.5px",
                color: "#ffffff",
              }}
            >
              <Calendar size={16} color="var(--gold-400)" />
              <span>Sabtu, 28 November 2026 • 18:30 WIB</span>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(212, 175, 55, 0.25)",
                padding: "8px 18px",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13.5px",
                color: "#ffffff",
              }}
            >
              <MapPin size={16} color="var(--gold-400)" />
              <span>The Glasshouse Grand Pavilion, Jakarta</span>
            </div>
          </div>

          <a
            href="#countdown-section"
            style={{
              color: "var(--gold-400)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              animation: "floatBob 2.5s ease-in-out infinite",
            }}
          >
            Scroll untuk melihat rincian acara <ChevronDown size={16} />
          </a>
        </section>

        {/* COUNTDOWN SECTION */}
        <section id="countdown-section">
          <Countdown />
        </section>

        {/* RUNDOWN TIMELINE SECTION */}
        <Rundown />

        {/* LOCATION & DRESSCODE SECTION */}
        <LocationCard />

        {/* PHOTO GALLERY SECTION */}
        <Gallery />

        {/* RSVP & VIRTUAL GUESTBOOK SECTION */}
        <RsvpAndGuestbook initialGuestName={guestName !== "Tamu Undangan" ? guestName : ""} />

        {/* DIGITAL GIFT & ANGPAO SECTION */}
        <DigitalGift />

        {/* FOOTER */}
        <footer
          style={{
            marginTop: "80px",
            padding: "40px 20px",
            textAlign: "center",
            borderTop: "1px solid rgba(212, 175, 55, 0.2)",
          }}
        >
          <div
            className="font-serif text-gold-gradient"
            style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "8px" }}
          >
            Alina Putri Pratama & Keluarga
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "13.5px", maxWidth: "480px", margin: "0 auto 16px" }}>
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan doa restu.
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "var(--text-dim)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            Made with <Heart size={13} color="#f43f5e" fill="#f43f5e" /> for Sweet 17th Birthday Celebration
          </p>
        </footer>
      </main>
    </>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#070a0f",
            color: "#d4af37",
            fontFamily: "sans-serif",
            fontSize: "18px",
          }}
        >
          Memuat Undangan Ulang Tahun...
        </div>
      }
    >
      <InvitationContent />
    </Suspense>
  );
}
