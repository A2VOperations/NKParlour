"use client";


import { useReducer, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

// ── Slide Data ────────────────────────────────────────────
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df",
    tagline: "Bloom In Beauty",
    heading1: "Eternal",
    heading2: "Glow",
    heading3: "Artistry",
    sub: "Experience the delicate touch of luxury with our signature rose-gold facial treatments.",
  },
  {
    id: 2,
    image: "https://plus.unsplash.com/premium_photo-1663047609863-c0f4682d0ef7",
    tagline: "Premium Care",
    heading1: "Radiant",
    heading2: "Skin",
    heading3: "Awaits",
    sub: "Indulge in world-class facials and skin-care rituals crafted just for you.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1629397685944-7073f5589754",
    tagline: "Hair & Beyond",
    heading1: "Stunning",
    heading2: "Hair",
    heading3: "Transformations",
    sub: "From colour to cut, our master stylists bring your dream look to life.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1765871903225-f1a9b549e47f",
    tagline: "Pure Luxury",
    heading1: "Beauty",
    heading2: "Redefined",
    heading3: "Exclusively",
    sub: "Step into a world of elegance — where every detail is designed for you.",
  },
];

const TOTAL = slides.length;
const INTERVAL = 5500;

// ── Keyframes injected once as a plain <style> tag ────────
const KEYFRAMES = `
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes progressFill {
    from { width: 0%; }
    to   { width: 100%; }
  }
`;

// ── Reducer ───────────────────────────────────────────────
function reducer(state, action) {
  switch (action.type) {
    case "GOTO":
      return { ...state, current: (action.index + TOTAL) % TOTAL, animKey: state.animKey + 1 };
    case "PAUSE":
      return { ...state, paused: true };
    case "RESUME":
      return { ...state, paused: false };
    default:
      return state;
  }
}

// ── Component ─────────────────────────────────────────────
export default function Hero() {
  const [state, dispatch] = useReducer(reducer, {
    current: 0,
    animKey: 0,
    paused: false,
  });
  const { current, animKey, paused } = state;

  const touchStartX = useRef(null);
  const intervalRef = useRef(null);

  const goTo = useCallback((index) => dispatch({ type: "GOTO", index }), []);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // ── Auto-play ──────────────────────────────────────────
    const currentRef = useRef(current);

    useEffect(() => {
    currentRef.current = current;
    }, [current]);
    // ── Pause when tab hidden ─────────────────────────────
    // ── Auto-play ──────────────────────────────────────────
    useEffect(() => {
    if (paused) {
        clearInterval(intervalRef.current);
        return;
    }

    intervalRef.current = setInterval(() => {
        dispatch({ type: "GOTO", index: currentRef.current + 1 });
    }, INTERVAL);

    return () => clearInterval(intervalRef.current);
    }, [paused]);

  // ── Touch / Swipe ─────────────────────────────────────
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const slide = slides[current];

  // Inline animation style helper
  const anim = (delay = "0s") => ({
    animation: `slideUp 0.55s ${delay} ease forwards`,
    opacity: 0,
  });

  return (
    <>
      {/* ── Inject keyframes once (no styled-jsx / no Head needed) ── */}
      <style dangerouslySetInnerHTML={{ __html: KEYFRAMES }} />

      <section
        className="relative w-full h-[90vh] min-h-[580px] overflow-hidden bg-black select-none"
        onMouseEnter={() => {
        if (!paused) dispatch({ type: "PAUSE" });
        }}
        onMouseLeave={() => {
        dispatch({ type: "RESUME" });
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* ═══ SLIDES ══════════════════════════════════════════ */}
        {slides.map((s, i) => {
          const isActive = i === current;
          return (
            <div
              key={s.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out will-change-[opacity] ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Ken Burns zoom */}
              <div
                className={`absolute inset-0 transition-transform duration-[6000ms] ease-out will-change-transform ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.heading1}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover object-center"
                  quality={85}
                />
              </div>
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          );
        })}

        {/* ═══ TEXT CONTENT ════════════════════════════════════ */}
        <div className="relative z-20 h-full max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center pt-4">

          {/* Tagline */}
          <div
            key={`tag-${animKey}`}
            className="flex items-center gap-3 mb-5"
            style={anim("0s")}
          >
            <div className="h-px w-8 bg-[#b8952a]" />
            <span className="text-[#b8952a] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
              {slide.tagline}
            </span>
          </div>

          {/* Headline — staggered lines */}
          <h1 key={`h-${animKey}`} className="text-white leading-none">
            <span
              className="block text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem] font-serif font-bold"
              style={anim("0.06s")}
            >
              {slide.heading1}
            </span>
            <span
              className="block text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem] font-serif font-bold"
              style={anim("0.13s")}
            >
              {slide.heading2}
            </span>
            <span
              className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-serif italic font-normal text-pink-200 mt-1"
              style={anim("0.20s")}
            >
              {slide.heading3}
            </span>
          </h1>

          {/* Subtext */}
          <p
            key={`sub-${animKey}`}
            className="mt-6 text-white/80 text-sm sm:text-base max-w-sm sm:max-w-md leading-relaxed font-light"
            style={anim("0.28s")}
          >
            {slide.sub}
          </p>

          {/* CTA */}
          <div key={`cta-${animKey}`} className="mt-8" style={anim("0.36s")}>
            <a
              href="https://wa.me/918789999343?text=Hi%20NK%20Parlour%2C%20I%20want%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-600 active:scale-95
                text-white text-xs font-bold tracking-[0.2em] uppercase px-10 py-4
                transition-all duration-200 ease-out hover:shadow-lg hover:shadow-pink-500/30 group"
            >

              EXPERIENCE NOW
            </a>
          </div>
        </div>

        {/* ═══ PREV ARROW ══════════════════════════════════════ */}
<button
  onClick={prev}
  aria-label="Previous slide"
  className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30
    w-12 h-12 items-center justify-center
    rounded-full bg-white/10 backdrop-blur-md border border-white/20
    text-white shadow-lg
    hover:bg-pink-500 hover:text-white hover:border-pink-400
    transition-all duration-300 ease-out hover:scale-110"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>

{/* ═══ NEXT ARROW ══════════════════════════════════════ */}
<button
  onClick={next}
  aria-label="Next slide"
  className="hidden sm:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30
    w-12 h-12 items-center justify-center
    rounded-full bg-white/10 backdrop-blur-md border border-white/20
    text-white shadow-lg
    hover:bg-pink-500 hover:text-white hover:border-pink-400
    transition-all duration-300 ease-out hover:scale-110"
>
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>

        {/* ═══ DOT INDICATORS ══════════════════════════════════ */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ease-out ${
                i === current
                  ? "w-8 h-2 bg-pink-500"
                  : "w-2 h-2 bg-white/40 hover:bg-white/80 hover:scale-125"
              }`}
            />
          ))}
        </div>

        {/* ═══ SLIDE COUNTER ═══════════════════════════════════ */}
        <div className="absolute bottom-8 right-6 sm:right-10 z-30 font-mono text-xs tracking-widest text-white/50">
          <span className="text-white font-bold text-sm">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="mx-1 text-white/30">/</span>
          {String(TOTAL).padStart(2, "0")}
        </div>

        {/* ═══ PROGRESS BAR ════════════════════════════════════ */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-30">
          <div
            key={`progress-${animKey}`}
            className="h-full bg-gradient-to-r from-[#b8952a] to-pink-400"
            style={{
              animation: `progressFill ${INTERVAL}ms linear forwards`,
            }}
          />
        </div>

        {/* ═══ PAUSE BADGE ═════════════════════════════════════ */}
        {paused && (
          <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white/70 text-[10px] tracking-widest uppercase px-2.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            Paused
          </div>
        )}
      </section>
    </>
  );
}