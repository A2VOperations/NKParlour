"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Finally found a place that understands my hair. Their balayage technique is pure art.",
    name: "Mehak Verma",
    role: "HAIR STYLING CLIENT",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
    stars: 5,
  },
  {
    id: 2,
    quote: "The organic facial here is magic. My skin has never felt this hydrated and soft.",
    name: "Sanya Malhotra",
    role: "SKIN CARE CLIENT",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80",
    stars: 5,
  },
  {
    id: 3,
    quote: "The attention to detail is insane. My nails look like a piece of art. Best luxury parlour.",
    name: "Priya Sen",
    role: "NAIL ART FAN",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    stars: 5,
  },
  {
    id: 4,
    quote: "The bridal glow was beyond my expectations. Their team handled everything with such grace.",
    name: "Ananya Sharma",
    role: "HAPPY BRIDE",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&q=80",
    stars: 4,
  },
  {
    id: 5,
    quote: "Best Hydra-Facial in the city. The ambiance is so relaxing, and the staff is incredibly professional.",
    name: "Priya Kapoor",
    role: "REGULAR MEMBER",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80",
    stars: 5,
  },
  {
    id: 6,
    quote: "I walked in nervous and walked out glowing. The team truly listens and delivers perfection.",
    name: "Riya Nair",
    role: "BRIDAL CLIENT",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
    stars: 5,
  },
  {
    id: 7,
    quote: "The keratin treatment transformed my frizzy hair. I've never had so many compliments!",
    name: "Divya Menon",
    role: "HAIR CARE CLIENT",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80",
    stars: 5,
  },
];

// Triple the list for seamless infinite loop
const INFINITE = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

const CARD_WIDTH = 296; // card width + gap

export default function ClientStories() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const hoveringRef = useRef(false);
  const speedRef = useRef(0.7); // px per frame

  // Total width of one full set
  const singleSetWidth = TESTIMONIALS.length * CARD_WIDTH;

  // ── Auto-scroll loop ──
  useEffect(() => {
    // Start from the middle set so we can loop in both directions
    posRef.current = singleSetWidth;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += speedRef.current;

        // When we've scrolled past 2 sets, jump back by one set (seamless)
        if (posRef.current >= singleSetWidth * 2) {
          posRef.current -= singleSetWidth;
        }
        // When scrolled before middle set, jump forward (for reverse arrow)
        if (posRef.current < 0) {
          posRef.current += singleSetWidth;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
        }
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [singleSetWidth]);

  // ── Arrow controls — nudge by one card ──
  const nudge = (dir) => {
    posRef.current += dir * CARD_WIDTH;
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.4s cubic-bezier(0.4,0,0.2,1)";
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "";
      }, 420);
    }
  };

  // ── Drag to scroll ──
  const dragRef = useRef({ dragging: false, startX: 0, startPos: 0 });

  const onMouseDown = (e) => {
    pausedRef.current = true;
    dragRef.current = { dragging: true, startX: e.pageX, startPos: posRef.current };
  };
  const onMouseMove = (e) => {
    if (!dragRef.current.dragging) return;
    const delta = dragRef.current.startX - e.pageX;
    posRef.current = dragRef.current.startPos + delta;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
  };
  const onMouseUp = () => {
    dragRef.current.dragging = false;
    if (hoveringRef.current) {
      pausedRef.current = true;
      return;
    }

    setTimeout(() => {
      if (!hoveringRef.current && !dragRef.current.dragging) {
        pausedRef.current = false;
      }
    }, 800);
  };
  const onMouseEnter = () => {
    hoveringRef.current = true;
    pausedRef.current = true;
  };
  const onMouseLeave = () => {
    hoveringRef.current = false;
    dragRef.current.dragging = false;
    pausedRef.current = false;
  };

  return (
    <section className="w-full bg-[#faf7f4] py-16 overflow-hidden">

      {/* ── Header ── */}
      <div className="flex items-start justify-between px-6 sm:px-12 mb-10">
        <div className="flex-1 text-center">
          <p
            className="text-[10px] tracking-[0.32em] uppercase mb-2 flex items-center justify-center gap-2"
            style={{ color: "#c8974a" }}
          >
            <span>✦</span> Experiences
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(30px, 4vw, 50px)",
              color: "#2b1a1a",
              lineHeight: 1.15,
            }}
          >
            Client{" "}
            <span className="italic" style={{ color: "#d63f6e" }}>
              Stories
            </span>
          </h2>
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center gap-2 mt-2 flex-shrink-0">
          <button
            onClick={() => nudge(-1)}
            className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-[#2b1a1a] hover:!text-white"
            style={{ border: "1.5px solid #d0c0c0", color: "#2b1a1a", fontSize: "16px" }}
          >
            ‹
          </button>
          <button
            onClick={() => nudge(1)}
            className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-[#2b1a1a] hover:!text-white"
            style={{ border: "1.5px solid #d0c0c0", color: "#2b1a1a", fontSize: "16px" }}
          >
            ›
          </button>
        </div>
      </div>

      {/* ── Infinite scroll track ── */}
      <div
        className="relative w-full select-none"
        style={{ cursor: "grab" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Edge fades */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, #faf7f4, transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, #faf7f4, transparent)" }}
        />

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-5 pb-4 pt-1 pl-6"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {INFINITE.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col justify-between bg-white p-6"
      style={{
        width: "276px",
        borderRadius: "18px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        border: "1px solid #f0e8e8",
      }}
    >
      {/* Stars */}
      <div className="flex gap-[3px] mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: i < t.stars ? "#c8974a" : "#e0d0c8", fontSize: "13px" }}>
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p
        className="text-[13px] leading-[1.7] flex-1 mb-6"
        style={{
          color: "#4a3a3a",
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
        }}
      >
        &quot;{t.quote}&quot;
      </p>

      {/* Avatar + name */}
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0" style={{ width: "40px", height: "40px" }}>
          <Image
            src={t.avatar}
            alt={t.name}
            fill
            className="object-cover rounded-full"
            sizes="40px"
          />
          <span
            className="absolute bottom-0 right-0 w-3 h-3 rounded-full flex items-center justify-center"
            style={{ background: "#d63f6e", fontSize: "7px", color: "#fff" }}
          >
            ✓
          </span>
        </div>
        <div>
          <p className="text-[13px] font-bold leading-tight" style={{ color: "#2b1a1a" }}>
            {t.name}
          </p>
          <p
            className="text-[9px] tracking-[0.18em] uppercase mt-[2px]"
            style={{ color: "#d63f6e" }}
          >
            {t.role}
          </p>
        </div>
      </div>
    </div>
  );
}
