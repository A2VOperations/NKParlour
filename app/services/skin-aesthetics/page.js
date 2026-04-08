"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
/* ═══════════════════════════════════════════
   WHATSAPP CONFIG
═══════════════════════════════════════════ */
const PHONE = "918178999143";
function bookOnWhatsApp(service = "") {
  const msg = service
    ? `Hi! I'd like to book: *${service}* at NK Beauty Salon & Academy. Please share availability.`
    : `Hi! I'd like to book an appointment at NK Beauty Salon & Academy.`;
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
}

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const heroSlides = [
  {
    src: "/photos/hydraFacial.jpg",
    badge: "Molecular Hydration",
    label: "Hydra Facial",
  },
  {
    src: "/photos/goldFacial.jpg",
    badge: "24K Gold Therapy",
    label: "Royal Facial",
  },
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=85",
    badge: "Collagen Induction",
    label: "Dermal Tightening",
  },
  {
    src: "/photos/makeUp.jpg",
    badge: "Bridal Glam",
    label: "Makeup Studio",
  },
];

const rituals = [
  {
    category: "LUMINOUS FACIALS",
    items: [
      { name: "Signature Glow Ritual", desc: "Vitamin C infusion with high-frequency hydration for instant radiance.", price: "₹2,500" },
      { name: "24K Gold Royal Facial", desc: "Anti-aging therapy using pure 24k gold leaves for a majestic glow.", price: "₹5,000" },
    ],
  },
  {
    category: "ADVANCED CLINICALS",
    items: [
      { name: "Hydra-Vortex Infusion", desc: "Deep pore extraction followed by molecular hyaluronic acid delivery.", price: "₹4,500" },
      { name: "Dermal Tightening", desc: "Non-invasive collagen induction for firm and youthful architecture.", price: "₹6,200" },
    ],
  },
];

const portfolio = [
  {
    id: 1,
    title: "Advanced Hydra-Glow",
    doctor: "Dr. Ananya",
    stars: 5,
    before: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80",
    after: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&q=80",
    service: "Hydra-Vortex Infusion",
  },
  {
    id: 2,
    title: "Melanin Balancing",
    doctor: "Dr. Sarah Khan",
    stars: 5,
    before: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=300&q=80",
    after: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=300&q=80",
    service: "Signature Glow Ritual",
  },
];

const experts = [
  {
    id: 1,
    role: "MEDICAL HEAD",
    name: "Dr. Ananya Rai",
    specialty: "Clinical Derma-Therapy",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80",
    featured: true,
  },
  {
    id: 2,
    role: "LEAD AESTHETICIAN",
    name: "Mehak Kapoor",
    specialty: "Molecular Hydration Expert",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
    featured: false,
  },
];

const journey = [
  { num: "01", icon: "🔬", title: "Face Mapping", desc: "Digital analysis of skin layers, pH levels, and underlying cellular concerns." },
  { num: "02", icon: "⚡", title: "Dermal Detox", desc: "Gentle lymphatic drainage and deep pore suction to prep your canvas." },
  { num: "03", icon: "💧", title: "Molecular Infusion", desc: "Targeted delivery of hyaluronic acid and vitamins via advanced tech." },
  { num: "04", icon: "✨", title: "Luminous Seal", desc: "Cryo-therapy and silk serums to lock in the glow and protect your barrier." },
];

const faqs = [
  {
    question: "Which facial is best for my skin type?",
    answer: "Every ritual begins with our 'Face Mapping' analysis. We identify your skin's hydration levels and sensitivity before recommending either a Luminous Glow or Clinical Detox ritual.",
  },
  {
    question: "Is there any downtime after advanced treatments?",
    answer: "Most of our rituals require zero downtime. Advanced clinical treatments like Dermal Tightening may involve mild redness for 12–24 hours. Our experts will guide you through aftercare.",
  },
  {
    question: "How often should I get a professional treatment?",
    answer: "We recommend a monthly ritual for maintenance glow. Intensive clinical treatments are advised once every 6–8 weeks, based on your skin assessment.",
  },
  {
    question: "Do you use medical-grade products?",
    answer: "Yes. Every ritual uses clinically validated, dermatologist-approved formulations. Our active ingredients are sourced from certified dermocosmetic labs.",
  },
];

/* ═══════════════════════════════════════════
   COLOUR TOKENS
═══════════════════════════════════════════ */
const C = {
  bg:         "#fff5f7",
  bgAlt:      "#fce8ef",
  surface:    "#ffffff",
  dark:       "#3b1022",
  mid:        "#7a4055",
  muted:      "#c4909f",
  accent:     "#e85d8a",
  accentSoft: "rgba(232,93,138,0.12)",
  gold:       "#c9a020",
  border:     "#f0d5de",
  heroGrad:   "linear-gradient(to right, #efa4bd83, #b69fa735, #f7bc979f)",
  expertGrad: "linear-gradient(135deg, #fce4ed 0%, #fad5e4 60%, #f8cfe0 100%)",
};

/* ═══════════════════════════════════════════
   PAGE
═══════════════════════════════════════════ */
export default function GlowSanctuaryPage() {
  return (
    <main style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", background: C.bg, color: C.dark, overflowX: "hidden" }}>
      <HeroSection />
      <DermalRitualsSection rituals={rituals} portfolio={portfolio} />
      <ExpertsSection experts={experts} journey={journey} />
      <SkinConciergeSection faqs={faqs} />
      <GlowCircleSection />
    </main>
  );
}

/* ─────────────────────────────────────
   HERO — auto-advancing crossfade slideshow
───────────────────────────────────── */
function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  const next = () => goTo((current + 1) % heroSlides.length);
  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);

  // Auto-advance every 3.5 s; reset on manual nav
  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % heroSlides.length);
    }, 3500);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleManualNav = (fn) => {
    fn();
    startTimer();
  };

  const slide = heroSlides[current];

  return (
    <section style={{
      background: C.heroGrad,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      padding: "80px 5vw 60px",
    }}>
      <style>{`
        @keyframes heroFloat1 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.65; }
          25% { transform: translateY(-24px) translateX(14px); opacity: 0.85; }
          50% { transform: translateY(-48px) translateX(-16px); opacity: 0.55; }
          75% { transform: translateY(-32px) translateX(22px); opacity: 0.70; }
        }
        @keyframes heroFloat2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.55; }
          25% { transform: translateY(-30px) translateX(-22px); opacity: 0.80; }
          50% { transform: translateY(-56px) translateX(18px); opacity: 0.60; }
          75% { transform: translateY(-34px) translateX(-26px); opacity: 0.75; }
        }
        @keyframes heroFloat3 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          25% { transform: translateY(-20px) translateX(18px); opacity: 0.70; }
          50% { transform: translateY(-42px) translateX(-24px); opacity: 0.65; }
          75% { transform: translateY(-28px) translateX(16px); opacity: 0.55; }
        }
        @keyframes heroFloat4 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.60; }
          25% { transform: translateY(-34px) translateX(-18px); opacity: 0.78; }
          50% { transform: translateY(-58px) translateX(14px); opacity: 0.48; }
          75% { transform: translateY(-30px) translateX(-32px); opacity: 0.68; }
        }
        .heroBubble { position: absolute; border-radius: 50%; pointer-events: none; }
        .heroBubble1 { animation: heroFloat1 8s ease-in-out infinite; }
        .heroBubble2 { animation: heroFloat2 10s ease-in-out infinite; }
        .heroBubble3 { animation: heroFloat3 12s ease-in-out infinite; }
        .heroBubble4 { animation: heroFloat4 9s ease-in-out infinite; }
      `}</style>

      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 18% 20%, rgba(255,255,255,0.24), transparent 32%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 82% 18%, rgba(232,93,138,0.14), transparent 28%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 80%, rgba(201,160,32,0.08), transparent 26%)", pointerEvents: "none" }} />

      <div className="heroBubble heroBubble1" style={{ top: "14%", left: "10%", width: 90, height: 90, background: "radial-gradient(circle at 30% 30%, rgba(232,93,138,0.36), rgba(232,93,138,0.08))", boxShadow: "0 18px 48px rgba(232,93,138,0.18)" }} />
      <div className="heroBubble heroBubble2" style={{ top: "10%", right: "12%", width: 140, height: 140, background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.78), rgba(255,255,255,0.05))", border: "1px solid rgba(255,255,255,0.35)" }} />
      <div className="heroBubble heroBubble3" style={{ bottom: "18%", left: "16%", width: 120, height: 120, background: "radial-gradient(circle at 30% 30%, rgba(249,220,231,0.28), rgba(249,220,231,0.05))", boxShadow: "0 16px 40px rgba(232,93,138,0.14)" }} />
      <div className="heroBubble heroBubble4" style={{ bottom: "20%", right: "14%", width: 80, height: 80, background: "radial-gradient(circle at 30% 30%, rgba(201,160,32,0.24), rgba(201,160,32,0.06))", }} />

      {/* Decorative rings */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 520, height: 620, borderRadius: "50%", border: "2px solid rgba(232,93,138,0.15)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 640, height: 740, borderRadius: "50%", border: "1px solid rgba(232,93,138,0.08)", pointerEvents: "none" }} />

      {/* Inner row — image + text */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(40px, 10vw, 450px)",
        flexWrap: "wrap",
        width: "100%",
        maxWidth: 1000,
        position: "relative",
        zIndex: 2,
      }}>

        {/* ── Slideshow image column ── */}
        <div style={{ position: "relative", flex: "0 0 auto", width: "clamp(260px, 30vw, 420px)" }}>

          {/* Image frame */}
          <div style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3/4",
            borderRadius: 28,
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(180,60,100,0.18)",
          }}>
            {/* All slides stacked; only current is visible */}
            {heroSlides.map((s, i) => (
              <div key={i} style={{
                position: "absolute", inset: 0,
                opacity: i === current ? 1 : 0,
                transform: i === current ? "scale(1)" : "scale(1.04)",
                transition: "opacity 0.75s cubic-bezier(.4,0,.2,1), transform 0.75s cubic-bezier(.4,0,.2,1)",
                pointerEvents: i === current ? "auto" : "none",
              }}>
                <Image
                  src={s.src}
                  alt={s.label}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Bottom gradient overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(59,16,34,0.42) 0%, transparent 52%)", pointerEvents: "none" }} />

            {/* Slide counter — top right */}
            <div style={{
              position: "absolute", top: 16, right: 16,
              background: "rgba(255,245,247,0.88)", backdropFilter: "blur(6px)",
              borderRadius: 20, padding: "4px 13px",
              fontSize: 10, letterSpacing: 1.5, color: C.accent,
              fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
              zIndex: 2,
            }}>
              {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </div>

            {/* Badge — bottom left */}
            <div style={{
              position: "absolute", bottom: 20, left: 16, zIndex: 2,
              background: "rgba(255,245,247,0.92)", backdropFilter: "blur(8px)",
              borderRadius: 12, padding: "10px 16px",
              border: "1px solid rgba(232,93,138,0.25)",
              transition: "opacity 0.4s",
            }}>
              <div style={{ fontSize: 8, letterSpacing: 2, color: C.accent, textTransform: "uppercase", marginBottom: 3, fontFamily: "'Montserrat', sans-serif" }}>
                {slide.badge}
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.dark, fontFamily: "'Playfair Display', serif" }}>
                {slide.label}
              </div>
            </div>

            {/* Arrow buttons — bottom right of frame */}
            <div style={{ position: "absolute", bottom: 16, right: 14, display: "flex", gap: 8, zIndex: 3 }}>
              {[{ label: "‹", action: () => handleManualNav(prev) }, { label: "›", action: () => handleManualNav(next) }].map(({ label, action }) => (
                <button
                  key={label}
                  onClick={action}
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: "rgba(255,245,247,0.92)",
                    border: `1px solid ${C.border}`,
                    color: C.accent, fontSize: 18, lineHeight: 1,
                    cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 2px 12px rgba(180,60,100,0.14)",
                    transition: "background 0.2s, color 0.2s",
                    backdropFilter: "blur(6px)",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,245,247,0.92)"; e.currentTarget.style.color = C.accent; }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: 7, marginTop: 16 }}>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleManualNav(() => goTo(i))}
                style={{
                  width: i === current ? 24 : 7,
                  height: 7,
                  borderRadius: 4,
                  background: i === current ? C.accent : C.border,
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.4s ease, background 0.4s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Text column ── */}
        <div style={{
          flex: 1,
          minWidth: 260,
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}>
          <div style={{
            fontSize: 9, letterSpacing: 4, color: C.accent,
            textTransform: "uppercase", marginBottom: 18,
            display: "flex", alignItems: "center", gap: 8,
            fontFamily: "'Montserrat', sans-serif",
          }}>
            <span style={{ display: "inline-block", width: 24, height: 1, background: C.accent }} />
            Aesthetic Rituals
            <span style={{ display: "inline-block", width: 24, height: 1, background: C.accent }} />
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px, 6vw, 76px)",
            fontWeight: 400, lineHeight: 1.1,
            color: C.dark, margin: "0 0 24px",
          }}>
            The<br/> <em style={{ color: C.accent, fontStyle: "italic",fontWeight: 700,fontSize: "clamp(44px, 6vw, 156px)" }}>Glow</em><br />
            <em style={{ fontStyle: "italic", fontWeight: 500,fontSize: "clamp(44px, 6vw, 126px)" }}>Sanctuary</em>
          </h1>

          <p style={{
            fontSize: "clamp(13px, 1.2vw, 15px)", lineHeight: 1.75,
            color: C.mid, margin: "0 0 36px",
            maxWidth: 340,
            fontFamily: "'Montserrat', sans-serif", fontWeight: 300,
          }}>
            Reveal your inner radiance through bespoke skin therapies. From medical-grade facials to royal hydration rituals, we perfect the art of luminous skin — right here in Burari, Delhi.
          </p>

          <div style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => bookOnWhatsApp(heroSlides[current].label)}
              style={{
                background: C.accent, color: "#fff", border: "none",
                padding: "14px 32px", borderRadius: 40, cursor: "pointer",
                fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase",
                fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
                boxShadow: "0 8px 32px rgba(232,93,138,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(232,93,138,0.45)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(232,93,138,0.3)"; }}
            >
              Book a Ritual
            </button>
            <span
              onClick={() => document.getElementById("rituals")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontSize: 11, letterSpacing: 2, color: C.muted,
                textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", cursor: "pointer",
              }}
            >
              ∨ &nbsp;Skin Menu
            </span>
          </div>

          {/* Phone strip */}
          <div style={{
            marginTop: 28,
            display: "flex", alignItems: "center", gap: 10,
            background: "rgba(255,255,255,0.72)", backdropFilter: "blur(8px)",
            borderRadius: 40, padding: "10px 20px",
            border: `1px solid ${C.border}`,
          }}>
            <span style={{ fontSize: 15 }}>📞</span>
            <span style={{ fontSize: 11, fontFamily: "'Montserrat', sans-serif", color: C.mid, fontWeight: 400 }}>
              Call us:&nbsp;
              <a href="tel:+918178999143" style={{ color: C.accent, fontWeight: 600, textDecoration: "none" }}>
                81789 99143
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Right vertical line decoration */}
      <div style={{
        position: "absolute", right: 60, top: "20%",
        height: "60%", width: 1,
        background: "linear-gradient(to bottom, transparent, rgba(232,93,138,0.3), transparent)",
      }} />
    </section>
  );
}

/* ─────────────────────────────────────
   DERMAL RITUALS + PORTFOLIO
───────────────────────────────────── */
function DermalRitualsSection({ rituals, portfolio }) {
  return (
    <>
      <section id="rituals" style={{ background: C.bg, padding: "80px 5vw" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(40px, 6vw, 100px)",
            alignItems: "start", }}>
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%", overflow: "hidden", aspectRatio: "3/4", minHeight: 280, position: "relative", boxShadow: "0 24px 64px rgba(180,60,100,0.12)" }}>
            <Image src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80" alt="Pure Radiance" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{
              position: "absolute", bottom: 32, left: 20, right: 20,
              background: C.surface, borderRadius: 12, padding: "14px 18px",
              boxShadow: "0 8px 32px rgba(180,60,100,0.10)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              border: `1px solid ${C.border}`,
            }}>
              <div>
                <div style={{ fontSize: 8, letterSpacing: 2, color: C.accent, textTransform: "uppercase", marginBottom: 3 }}>Clinical Excellence</div>
                <div style={{ fontSize: 16, fontFamily: "'Playfair Display', serif", fontWeight: 600, color: C.dark }}>Pure Radiance</div>
              </div>
              <span style={{ fontSize: 20 }}>🌸</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 9, letterSpacing: 3.5, color: C.accent, textTransform: "uppercase", marginBottom: 10, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ display: "inline-block", width: 28, height: 1, background: C.accent }} />
              Skin Sanctuary
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, margin: "0 0 12px", lineHeight: 1.15, color: C.dark }}>
              Dermal <em style={{ color: C.accent, fontStyle: "italic" }}>Rituals</em>
            </h2>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: C.mid, borderLeft: `2px solid ${C.accent}`, paddingLeft: 14, margin: "0 0 36px", fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
              Bespoke skincare solutions where advanced clinical science meets royal relaxation. Crafted for your unique glow.
            </p>

            {rituals.map((group, gi) => (
              <div key={gi} style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 8, letterSpacing: 3, color: C.muted, textTransform: "uppercase", marginBottom: 14, fontFamily: "'Montserrat', sans-serif" }}>
                  {group.category}
                </div>
                {group.items.map((item, ii) => (
                  <div key={ii} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "16px 0", borderBottom: `1px solid ${C.border}`, gap: 16,
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 16, fontFamily: "'Playfair Display', serif", fontWeight: 600, marginBottom: 4, color: C.dark }}>{item.name}</div>
                      <div style={{ fontSize: 11, color: C.mid, lineHeight: 1.6, fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>{item.desc}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: C.dark, fontFamily: "'Montserrat', sans-serif", whiteSpace: "nowrap" }}>{item.price}</div>
                      <button
                        onClick={() => bookOnWhatsApp(item.name)}
                        style={{
                          background: C.accent, color: "#fff", border: "none",
                          borderRadius: 30, padding: "7px 16px",
                          fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase",
                          fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
                          cursor: "pointer", whiteSpace: "nowrap",
                          transition: "opacity 0.2s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = "0.82"}
                        onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            <div style={{
              background: C.accentSoft, borderRadius: 10, padding: "14px 18px",
              display: "flex", alignItems: "flex-start", gap: 12, marginTop: 8,
              border: `1px solid ${C.border}`,
            }}>
              <span style={{ color: C.accent, fontSize: 16, flexShrink: 0 }}>ⓘ</span>
              <p style={{ fontSize: 11, color: C.mid, lineHeight: 1.65, margin: 0, fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                <strong style={{ color: C.accent, letterSpacing: 1 }}>EXPERT NOTE:</strong> Skin rituals include a complimentary digital skin analysis. Final treatment plan is customized post-consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section style={{ background: C.bgAlt, padding: "60px 5vw 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
            <div>
              <div style={{ fontSize: 9, letterSpacing: 3, color: C.accent, textTransform: "uppercase", marginBottom: 8, fontFamily: "'Montserrat', sans-serif", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ display: "inline-block", width: 20, height: 1, background: C.accent }} />
                Clinical Results
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 400, margin: 0, lineHeight: 1.2, color: C.dark }}>
                The <em style={{ color: C.accent, fontStyle: "italic" }}>Radiance</em> Portfolio
              </h2>
            </div>
            <button
              onClick={() => bookOnWhatsApp()}
              style={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: C.dark, background: "none", border: "none", display: "flex", alignItems: "center", gap: 8, fontFamily: "'Montserrat', sans-serif", borderBottom: `1px solid ${C.dark}`, paddingBottom: 2, cursor: "pointer" }}
            >
              Book a Session →
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {portfolio.map((item) => (
              <div key={item.id} style={{ borderRadius: 16, overflow: "hidden", background: C.surface, boxShadow: "0 4px 24px rgba(180,60,100,0.07)", border: `1px solid ${C.border}` }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(32px, 6vw, 80px)", alignItems: "start"}}>
                  {[item.before, item.after].map((src, idx) => (
                    <div key={idx} style={{ position: "relative", overflow: "hidden" }}>
                      <Image src={src} alt={idx === 0 ? "Before" : "After"} fill style={{ objectFit: "cover", filter: idx === 0 ? "grayscale(100%) brightness(0.9)" : "none" }} />
                      <span style={{
                        position: "absolute", top: 10, left: 10,
                        background: idx === 0 ? "rgba(59,16,34,0.65)" : C.accent,
                        color: "#fff", fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase",
                        padding: "3px 8px", borderRadius: 20, fontFamily: "'Montserrat', sans-serif",
                      }}>{idx === 0 ? "Base" : "Glow"}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "16px 18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: 17, fontFamily: "'Playfair Display', serif", fontWeight: 600, color: C.dark, marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 10, color: C.muted, letterSpacing: 1, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>by {item.doctor}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ color: C.gold, fontSize: 13, letterSpacing: 1 }}>{"★".repeat(item.stars)}</div>
                      <div style={{ fontSize: 8, color: C.accent, letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", marginTop: 2 }}>Verified Result</div>
                    </div>
                  </div>
                  <button
                    onClick={() => bookOnWhatsApp(item.service)}
                    style={{
                      marginTop: 14, width: "100%",
                      background: "transparent", border: `1.5px solid ${C.accent}`,
                      color: C.accent, borderRadius: 30, padding: "9px 0",
                      fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
                      fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
                      cursor: "pointer", transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.accent; }}
                  >
                    Book This Treatment
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: 32, fontSize: 11, color: C.muted, fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
            *Individual results may vary based on skin type and lifestyle. Schedule a{" "}
            <a onClick={(e) => { e.preventDefault(); bookOnWhatsApp("Face Mapping"); }} href="#" style={{ color: C.accent, textDecoration: "underline" }}>Face Mapping</a>{" "}
            session for your personalized plan.
          </p>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────
   EXPERTS + DERMAL JOURNEY
───────────────────────────────────── */
function ExpertsSection({ experts, journey }) {
  return (
    <>
      <section style={{ background: C.expertGrad, padding: "72px 5vw", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 44, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 9, letterSpacing: 3.5, color: C.accent, textTransform: "uppercase", marginBottom: 10, fontFamily: "'Montserrat', sans-serif" }}>The Skin Curators</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 400, color: C.dark, margin: 0 }}>
                Meet The <em style={{ color: C.accent, fontStyle: "italic" }}>Experts</em>
              </h2>
            </div>
            <blockquote style={{ fontSize: 12, fontStyle: "italic", color: C.mid, maxWidth: 300, textAlign: "right", margin: 0, lineHeight: 1.7, fontFamily: "'Cormorant Garamond', serif", borderRight: `2px solid rgba(232,93,138,0.35)`, paddingRight: 16 }}>
              "Science-backed rituals meet the art of pure aesthetic rejuvenation."
            </blockquote>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {experts.map((expert) => (
              <div key={expert.id} style={{
                background: expert.featured ? C.surface : "rgba(255,255,255,0.6)",
                border: expert.featured ? `1px solid rgba(232,93,138,0.4)` : `1px solid ${C.border}`,
                borderRadius: 18, padding: "28px 24px",
                display: "flex", alignItems: "center", gap: 20,
                boxShadow: expert.featured ? "0 8px 32px rgba(232,93,138,0.12)" : "none",
              }}>
                <div style={{ position: "relative", width: 80, height: 80, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `2px solid rgba(232,93,138,0.35)` }}>
                  <Image src={expert.img} alt={expert.name} fill style={{ objectFit: "cover", filter: expert.featured ? "none" : "grayscale(40%)" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 8, letterSpacing: 2.5, color: C.accent, textTransform: "uppercase", marginBottom: 6, fontFamily: "'Montserrat', sans-serif" }}>{expert.role}</div>
                  <div style={{ fontSize: 22, fontFamily: "'Playfair Display', serif", fontWeight: 400, color: expert.featured ? C.accent : C.dark, marginBottom: 10, lineHeight: 1.2 }}>{expert.name}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
                    <span style={{ fontSize: 10, color: C.accent }}>◈</span>
                    <span style={{ fontSize: 9, letterSpacing: 2, color: C.mid, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>{expert.specialty}</span>
                  </div>
                  <button
                    onClick={() => bookOnWhatsApp(`Consultation with ${expert.name}`)}
                    style={{
                      fontSize: 9, letterSpacing: 2, color: C.accent, textTransform: "uppercase",
                      background: "none", border: `1px solid ${C.accent}`, borderRadius: 20,
                      padding: "6px 14px", fontFamily: "'Montserrat', sans-serif",
                      cursor: "pointer", transition: "background 0.2s, color 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = C.accent; }}
                  >
                    Book Consultation ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dermal Journey */}
      <section style={{ background: C.bg, padding: "80px 5vw 100px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 9, letterSpacing: 4, color: C.gold, textTransform: "uppercase", marginBottom: 14, fontFamily: "'Montserrat', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
              <span style={{ display: "inline-block", width: 40, height: 1, background: C.gold }} />
              The Methodology
              <span style={{ display: "inline-block", width: 40, height: 1, background: C.gold }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 400, margin: 0, lineHeight: 1.2, color: C.dark }}>
              The <em style={{ color: C.accent, fontStyle: "italic" }}>Dermal</em> Journey
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 64 }}>
            {journey.map((step, i) => (
              <div key={i}
                style={{
                  background: C.surface, borderRadius: 20, padding: "32px 24px",
                  boxShadow: "0 4px 24px rgba(180,60,100,0.06)",
                  border: `1px solid ${C.border}`, position: "relative",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(180,60,100,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(180,60,100,0.06)"; }}
              >
                <div style={{ fontSize: 40, fontWeight: 700, color: "rgba(232,93,138,0.08)", fontFamily: "'Playfair Display', serif", position: "absolute", top: 16, right: 20, lineHeight: 1 }}>{step.num}</div>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.accentSoft, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 20 }}>{step.icon}</div>
                <div style={{ fontSize: 9, letterSpacing: 2, color: C.accent, textTransform: "uppercase", marginBottom: 8, fontFamily: "'Montserrat', sans-serif" }}>Step {step.num}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, margin: "0 0 10px", color: C.dark }}>{step.title}</h3>
                <div style={{ width: 28, height: 2, background: C.accent, borderRadius: 2, marginBottom: 12 }} />
                <p style={{ fontSize: 12, lineHeight: 1.7, color: C.mid, margin: 0, fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>{step.desc}</p>
                {i < journey.length - 1 && (
                  <div style={{ position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)", color: C.muted, fontSize: 18, zIndex: 2 }}>→</div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => bookOnWhatsApp("Face Mapping Analysis")}
              style={{
                background: C.dark, color: "#fff", border: "none",
                padding: "18px 52px", borderRadius: 50, cursor: "pointer",
                fontSize: 11, letterSpacing: 3, textTransform: "uppercase",
                fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
                display: "inline-flex", alignItems: "center", gap: 12,
                boxShadow: "0 8px 32px rgba(59,16,34,0.18)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(59,16,34,0.28)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(59,16,34,0.18)"; }}
            >
              Book Your Analysis →
            </button>
            <p style={{ marginTop: 16, fontSize: 9, letterSpacing: 2.5, color: C.muted, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>
              Personalized Plans Included In Every Session
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────
   SKIN CONCIERGE — FAQ
───────────────────────────────────── */
function SkinConciergeSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ background: C.bgAlt, padding: "80px 5vw" }}>
      <style>{`
        .concierge-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: clamp(40px, 6vw, 100px);
          align-items: start;
        }
        @media (max-width: 640px) {
          .concierge-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .concierge-left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }
        }
      `}</style>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="concierge-grid">
        <div className="concierge-left">
          <div style={{ fontSize: 9, letterSpacing: 3, color: C.accent, textTransform: "uppercase", marginBottom: 14, fontFamily: "'Montserrat', sans-serif", display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 18, height: 18, borderRadius: "50%", border: `1.5px solid ${C.accent}`, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 9 }}>?</span>
            Common Queries
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 400, color: C.dark, margin: "0 0 20px", lineHeight: 1.1 }}>
            Skin<br /><em style={{ color: C.accent, fontStyle: "italic" }}>Concierge</em>
          </h2>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: C.mid, margin: "0 0 36px", fontFamily: "'Montserrat', sans-serif", fontWeight: 300, maxWidth: 280 }}>
            Have a specific concern? Our experts are available for a 1-on-1 digital consultation to help you choose the right ritual.
          </p>
          <button
            onClick={() => bookOnWhatsApp("Skin Consultation")}
            style={{
              background: "transparent", border: `1.5px solid ${C.dark}`,
              color: C.dark, padding: "13px 26px", borderRadius: 40,
              cursor: "pointer", fontSize: 10, letterSpacing: 2.5,
              textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
              display: "inline-flex", alignItems: "center", gap: 10,
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = C.dark; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.dark; }}
          >
            <span style={{ fontSize: 14 }}>💬</span> Ask a Specialist
          </button>
        </div>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: `1px solid ${C.border}`, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%", background: "none", border: "none",
                    padding: "22px 0", display: "flex",
                    justifyContent: "space-between", alignItems: "center",
                    cursor: "pointer", gap: 16, textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(15px, 1.5vw, 18px)",
                    fontWeight: isOpen ? 600 : 400,
                    color: isOpen ? C.accent : C.dark,
                    lineHeight: 1.3, transition: "color 0.2s",
                  }}>
                    {faq.question}
                  </span>
                  <span style={{
                    flexShrink: 0, width: 28, height: 28, borderRadius: "50%",
                    border: `1.5px solid ${isOpen ? C.accent : C.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: isOpen ? C.accent : C.muted, fontSize: 14,
                    transition: "all 0.25s",
                    transform: isOpen ? "rotate(180deg)" : "none",
                  }}>∨</span>
                </button>
                <div style={{ maxHeight: isOpen ? 200 : 0, overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <div style={{ paddingBottom: 22, paddingLeft: 16, borderLeft: `3px solid ${C.accent}`, marginBottom: 4 }}>
                    <p style={{ fontSize: 13, lineHeight: 1.8, color: C.mid, margin: 0, fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────
   JOIN THE GLOW CIRCLE
───────────────────────────────────── */
function GlowCircleSection() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    if (email.trim()) {
      const msg = `Hi! I want to join the Glow Circle community at NK Beauty Salon.\nMy email: ${email}`;
      window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
      setJoined(true);
    }
  };

  return (
    <section style={{ background: C.bg, padding: "60px 5vw 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(120deg, #f9e0ea 0%, #fce8f1 50%, #f5d5e5 100%)",
          borderRadius: 24,
          padding: "clamp(28px, 4vw, 48px) clamp(24px, 4vw, 56px)",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(20px, 4vw, 48px)", flexWrap: "wrap",
          border: `1px solid rgba(232,93,138,0.2)`,
          boxShadow: "0 8px 40px rgba(232,93,138,0.08)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", right: -60, top: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(232,93,138,0.06)", pointerEvents: "none" }} />

          <div style={{ display: "flex", alignItems: "center", gap: 20, flex: "0 0 auto" }}>
            <div style={{
              width: 56, height: 56, borderRadius: "50%",
              background: C.accent, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, flexShrink: 0, boxShadow: "0 4px 20px rgba(232,93,138,0.35)", color: "#fff",
            }}>✦</div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 600, color: C.dark, marginBottom: 4 }}>
                Join the Glow Circle
              </div>
              <div style={{ fontSize: 9, letterSpacing: 2.5, color: C.accent, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                Members Get 20% Off On First Sessions
              </div>
            </div>
          </div>

          {!joined ? (
            <div style={{ display: "flex", alignItems: "center", gap: 12, flex: "1 1 auto", minWidth: 0, maxWidth: 440 }}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleJoin()}
                style={{
                  flex: 1, background: C.surface, border: `1.5px solid ${C.border}`,
                  borderRadius: 40, padding: "13px 22px", fontSize: 13,
                  fontFamily: "'Montserrat', sans-serif", color: C.dark,
                  outline: "none", minWidth: 0,
                  boxShadow: "0 2px 12px rgba(180,60,100,0.06)",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => { e.target.style.borderColor = C.accent; }}
                onBlur={e => { e.target.style.borderColor = C.border; }}
              />
              <button
                onClick={handleJoin}
                style={{
                  background: C.dark, color: "#fff", border: "none",
                  borderRadius: 40, padding: "13px 28px",
                  fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase",
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 700,
                  cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
                  transition: "background 0.2s, transform 0.2s",
                  boxShadow: "0 4px 20px rgba(59,16,34,0.18)",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = C.accent; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.dark; e.currentTarget.style.transform = "none"; }}
              >
                Join
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 24px", background: C.surface, borderRadius: 40, border: `1.5px solid rgba(232,93,138,0.3)` }}>
              <span style={{ fontSize: 18 }}>🌸</span>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: C.accent, fontWeight: 600, letterSpacing: 1 }}>Welcome to the Glow Circle!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}