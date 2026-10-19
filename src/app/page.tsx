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
              padding: "6px 22px",
              background: "rgba(220, 38, 38, 0.28)",
              borderRadius: "30px",
              border: "1.5px solid rgba(212, 175, 55, 0.5)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12.5px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--gold-300)",
              fontWeight: 700,
              marginBottom: "24px",
              boxShadow: "0 4px 20px rgba(220, 38, 38, 0.4)",
            }}
          >
            <Sparkles size={15} color="var(--gold-400)" /> 祝寿 • The 72nd Longevity Celebration ( 七十二大寿 )
          </div>

          {/* Celebrant Main Hero Portrait */}
          <div
            style={{
              position: "relative",
              width: "230px",
              height: "230px",
              margin: "0 auto 24px auto",
              borderRadius: "50%",
              padding: "6px",
              background: "linear-gradient(135deg, #fef08a 0%, #d4af37 45%, #dc2626 100%)",
              boxShadow: "0 0 40px rgba(212, 175, 55, 0.5), 0 0 60px rgba(220, 38, 38, 0.4)",
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
                alt="Oma Tan Mei Ling (陈美玲)"
                fill
                sizes="230px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "6px",
                right: "8px",
                background: "linear-gradient(135deg, #facc15, #b91c1c)",
                color: "#ffffff",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "19px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.8)",
                border: "3px solid #230608",
              }}
            >
              72
            </div>
          </div>

          {/* Chinese Blessing Calligraphy Title */}
          <div
            style={{
              fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
              color: "var(--gold-400)",
              letterSpacing: "8px",
              fontWeight: 800,
              marginBottom: "8px",
              textShadow: "0 0 20px rgba(212, 175, 55, 0.4)",
            }}
          >
            福如东海 • 寿比南山
          </div>

          {/* Celebrant Name */}
          <h1
            className="font-serif text-gold-gradient"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              fontWeight: "700",
              lineHeight: 1.15,
              marginBottom: "6px",
            }}
          >
            Oma Tan Mei Ling
          </h1>
          <div
            style={{
              fontSize: "1.4rem",
              color: "var(--gold-300)",
              fontWeight: 600,
              letterSpacing: "4px",
              marginBottom: "16px",
            }}
          >
            ( 陈美玲 )
          </div>

          <p
            style={{
              fontSize: "clamp(0.95rem, 2.2vw, 1.15rem)",
              color: "var(--text-muted)",
              fontStyle: "italic",
              maxWidth: "580px",
              marginBottom: "28px",
              lineHeight: 1.7,
            }}
          >
            &ldquo;Semoga rezeki seluas samudra timur, dan panjang umur setinggi kokohnya gunung selatan. Mensyukuri 72 tahun anugerah kesehatan, keteladanan, dan kasih sayang yang mempersatukan keluarga empat generasi (四世同堂).&rdquo;
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
                background: "rgba(220, 38, 38, 0.18)",
                border: "1.5px solid rgba(212, 175, 55, 0.4)",
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
              <span>Minggu, 15 November 2026 • 11:30 WIB (Lunch)</span>
            </div>

            <div
              style={{
                background: "rgba(220, 38, 38, 0.18)",
                border: "1.5px solid rgba(212, 175, 55, 0.4)",
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
              <span>Grand Dragon Ballroom (Sun City), Jakarta</span>
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
            borderTop: "1.5px solid rgba(212, 175, 55, 0.35)",
          }}
        >
          <div
            className="font-serif text-gold-gradient"
            style={{ fontSize: "1.7rem", fontWeight: 700, marginBottom: "8px" }}
          >
            Keluarga Besar Oma Tan Mei Ling (陈美玲)
          </div>
          <p style={{ color: "var(--gold-300)", fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>
            四世同堂 • 松柏长青 • 阖家安康
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "13.5px", maxWidth: "520px", margin: "0 auto 16px" }}>
            Merupakan kehormatan dan kebahagiaan terbesar bagi kami sekeluarga atas kehadiran dan doa restu Bapak/Ibu/Saudara/i sekalian.
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
            Made with <Heart size={13} color="#dc2626" fill="#dc2626" /> for Oma&apos;s 72nd Longevity Celebration (祝寿)
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
            background: "#120305",
            color: "#d4af37",
            fontFamily: "sans-serif",
            fontSize: "18px",
          }}
        >
          Memuat Undangan Syukuran Ulang Tahun ke-72...
        </div>
      }
    >
      <InvitationContent />
    </Suspense>
  );
}
