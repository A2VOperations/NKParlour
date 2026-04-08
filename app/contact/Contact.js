"use client";

import { useState } from "react";

const C = {
  pageBg: "linear-gradient(135deg, #fff0f4 0%, #fce4ec 40%, #fff8fa 100%)",
  heroBg: "linear-gradient(to right, #efa4bd83, #b69fa735, #f7bc979f)",
  bookBg: "#ffffff",
  faqLeft: "#ffffff",
  faqRight: "#0d0007",
  dark: "#0d0007",
  mid: "#7a2045",
  muted: "#c08090",
  white: "#ffffff",
  offwhite: "rgba(255,230,240,0.88)",
  pink: "#e8185a",
  pinkSoft: "#f472a0",
  pinkLight: "rgba(232,24,90,0.10)",
  gold: "#c9a020",
  goldLight: "#e8b830",
  surface: "#ffffff",
  border: "#f0d0da",
  cardBg: "rgba(255,240,244,0.8)",
};

const SERVICES = [
  { icon: "✦", name: "Bridal Makeup", duration: "PRE-BRIDAL PACKAGE", price: "₹12,000", tag: "bridal" },
  { icon: "✂", name: "Hair Extensions & Color", duration: "KERATIN · SMOOTHING · HIGHLIGHTS", price: "₹3,500+", tag: "hair" },
  { icon: "✦", name: "HD & Airbrush Makeup", duration: "MAKEUP STUDIO", price: "₹5,000", tag: "makeup" },
  { icon: "✦", name: "Skin Rituals", duration: "HYDRA · OZONE FACIAL", price: "₹1,800", tag: "skin" },
  { icon: "◈", name: "Nail Art & Extensions", duration: "NAIL STUDIO", price: "₹800+", tag: "nail" },
  { icon: "✦", name: "Nano Plastia / Botox", duration: "ADVANCED HAIR CARE", price: "On Request", tag: "other" },
];

const TIME_SLOTS = ["10:00 AM", "12:30 PM", "03:00 PM", "05:30 PM", "07:00 PM"];

const FAQS = [
  {
    q: "What hair services do you specialize in?",
    a: "We offer Keratin, Smoothing, Botox, Nano Plastia, Highlights, Ombre Technique, and Permanent Hair Extensions — all performed by VLCC-trained and SS Bollywood Academy certified stylists.",
  },
  {
    q: "Do you offer Pre-Bridal Packages?",
    a: "Haan! Hamara Pre-Bridal Package is tailored to your big day. It includes skin prep facials, HD/Airbrush bridal makeup, nail art, and a dedicated consultation session at least 4 weeks prior.",
  },
  {
    q: "Are all services exclusively for ladies?",
    a: "Yes, NK Beauty Salon & Academy is a ladies-only salon offering a private, comfortable experience. We also run a professional beauty academy for those who wish to train in the field.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can call or WhatsApp us at 81789 99143, or use our booking form below to select your service and time slot. Walk-ins are welcome based on availability.",
  },
];

/* ── Parlour placeholder image (SVG data URI) ── */
const PARLOUR_IMG = `https://img.freepik.com/premium-photo/portrait-young-woman-dressed-splendid-evening-makeup-perfect-dense-wavy-hairstyle-make-up-manicure-jewellery-purple-tints-hairdressing-art-hair-care-makeup_353119-186.jpg?semt=ais_hybrid&w=740&q=80`;

export const metadata = {
  title: "Contact Us | Book Appointment at NK Beauty Salon Burari",
  description:
    "Visit us at Laxmi Vihar, Burari. Call 81789 99143 to book your bridal makeup or hair appointment. Find our location and hours here.",
  keywords: [
    "contact NK Beauty Salon",
    "salon address Burari",
    "book hair appointment Delhi",
    "ladies parlor phone number",
    "NK Beauty location",
    "salon near Burari Govt Hospital",
  ],
  openGraph: {
    title: "Book Your Beauty Session at NK Beauty Salon",
    description:
      "Located in Laxmi Vihar, Burari. Call 81789 99143 for appointments.",
  },
};

export default function ContactPage() {
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif", overflowX: "hidden" }}>
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          25% { transform: translateY(-30px) translateX(20px); opacity: 0.8; }
          50% { transform: translateY(-60px) translateX(-20px); opacity: 0.5; }
          75% { transform: translateY(-30px) translateX(30px); opacity: 0.7; }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          25% { transform: translateY(-40px) translateX(-30px); opacity: 0.7; }
          50% { transform: translateY(-70px) translateX(25px); opacity: 0.6; }
          75% { transform: translateY(-35px) translateX(-35px); opacity: 0.8; }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          25% { transform: translateY(-25px) translateX(25px); opacity: 0.6; }
          50% { transform: translateY(-50px) translateX(-30px); opacity: 0.7; }
          75% { transform: translateY(-40px) translateX(20px); opacity: 0.5; }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.55; }
          25% { transform: translateY(-35px) translateX(-25px); opacity: 0.75; }
          50% { transform: translateY(-65px) translateX(20px); opacity: 0.45; }
          75% { transform: translateY(-30px) translateX(-40px); opacity: 0.65; }
        }
        .bubble { position: absolute; pointerEvents: "none"; borderRadius: "50%"; }
        .bubble-1 { animation: float1 8s ease-in-out infinite; }
        .bubble-2 { animation: float2 10s ease-in-out infinite; }
        .bubble-3 { animation: float3 12s ease-in-out infinite; }
        .bubble-4 { animation: float4 9s ease-in-out infinite; }
        @media (max-width: 768px) {
          .hero-grid        { grid-template-columns: 1fr !important; }
          .hero-right       { display: none !important; }
          .booking-grid     { grid-template-columns: 1fr !important; }
          .booking-left     { display: none !important; }
          .faq-grid         { grid-template-columns: 1fr !important; }
          .faq-left-mobile  { padding: 48px 6vw 28px !important; }
          .service-pill-row { display: none !important; }
          .contact-row      { flex-direction: column !important; gap: 18px !important; }
          .booking-inner    { padding: 48px 5vw !important; }
          .date-time-grid   { grid-template-columns: 1fr !important; gap: 20px !important; }
          .hero-section     { min-height: auto !important; padding-bottom: 48px !important; }
          .hero-left        { padding: 56px 6vw 40px !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-grid        { grid-template-columns: 1fr 1fr !important; }
          .booking-grid     { grid-template-columns: 38% 62% !important; }
          .faq-grid         { grid-template-columns: 1fr 1fr !important; }
        }
        * { box-sizing: border-box; }
      `}</style>
      <JourneySection />
      <BookingSection
        step={bookingStep}
        setStep={setBookingStep}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      <FaqSection faqs={FAQS} openFaq={openFaq} setOpenFaq={setOpenFaq} />
    </main>
  );
}

/* ─── SECTION 1 — Hero ─── */
function JourneySection() {
  return (
    <section className="hero-section hero-grid" style={{
      background: C.heroBg,
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "-10%", left: "30%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,24,90,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,160,32,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Animated bubbles */}
      <div className="bubble bubble-1" style={{ top: "15%", left: "10%", width: 80, height: 80, background: "radial-gradient(circle at 30% 30%, rgba(232,24,90,0.4), rgba(232,24,90,0.1))", boxShadow: "0 8px 32px rgba(232,24,90,0.2)" }} />
      <div className="bubble bubble-2" style={{ top: "25%", right: "15%", width: 60, height: 60, background: "radial-gradient(circle at 30% 30%, rgba(201,160,32,0.3), rgba(201,160,32,0.08))", boxShadow: "0 8px 32px rgba(201,160,32,0.15)" }} />
      <div className="bubble bubble-3" style={{ bottom: "20%", left: "20%", width: 100, height: 100, background: "radial-gradient(circle at 30% 30%, rgba(232,24,90,0.25), rgba(232,24,90,0.05))", boxShadow: "0 8px 32px rgba(232,24,90,0.15)" }} />
      <div className="bubble bubble-4" style={{ bottom: "30%", right: "10%", width: 70, height: 70, background: "radial-gradient(circle at 30% 30%, rgba(201,160,32,0.35), rgba(201,160,32,0.1))", boxShadow: "0 8px 32px rgba(201,160,32,0.2)" }} />

      {/* Left content */}
      <div className="hero-left" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "90px 6vw 90px 8vw", maxWidth: 640, gap: 10, position: "relative", zIndex: 2 }}>

        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "rgba(201,160,32,0.12)", border: "1px solid rgba(201,160,32,0.3)",
          borderRadius: 40, padding: "8px 16px", marginBottom: 32, width: "fit-content",
        }}>
          <span style={{ color: C.gold, fontSize: 10 }}>★</span>
          <span style={{ fontSize: 8, letterSpacing: 2.5, color: C.gold, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
            Trained by VLCC · Certified by SS Bollywood Academy
          </span>
        </div>

        <h1 style={{ margin: "0 0 18px", lineHeight: 1.0, fontWeight: 400 }}>
          <span style={{ display: "block", fontSize: "clamp(16px, 3vw, 36px)", color: C.gold, fontFamily: "'Playfair Display', serif", letterSpacing: 2, textTransform: "uppercase" }}>N K Beauty</span>
          <span style={{ display: "block", fontSize: "clamp(42px, 6.5vw, 82px)", color: C.dark, fontFamily: "'Playfair Display', serif" }}>Salon &amp;</span>
          <em style={{ display: "block", fontSize: "clamp(42px, 6.5vw, 82px)", color: C.mid, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>Academy</em>
        </h1>

        {/* Service pills — hidden on mobile */}
        <div className="service-pill-row" style={{ display: "flex", flexWrap: "wrap", gap: 10, margin: "10px 0 10px" }}>
          {["Hair", "Beauty", "Nail", "Skin", "Make Up Studio"].map((s, i) => (
            <span key={i} style={{
              fontSize: 9, letterSpacing: 2, color: "rgba(9, 5, 6, 0.79)",
              textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif",
              border: "1px solid rgba(232,24,90,0.25)", borderRadius: 20, padding: "5px 12px",
            }}>{s}</span>
          ))}
        </div>

        <p style={{
          fontSize: 13, lineHeight: 1.8, color: C.dark,
          maxWidth: 360, margin: "16px 0 36px",
          borderLeft: "2px solid rgba(232,24,90,0.4)", paddingLeft: 16,
          fontFamily: "'Montserrat', sans-serif", fontWeight: 300,
        }}>
          Exclusively for ladies. Experience luxury beauty rituals crafted by Bollywood-certified artists in the heart of Delhi.
        </p>

        {/* Contact row */}
        <div
          className="contact-row"
          style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "flex-start" }}
        >
          {[
            {
              icon: "📞",
              label: "CALL US",
              value: "81789 99143",
              href: "tel:+918178999143",
            },
            {
              icon: "📍",
              label: "LOCATION",
              value: "Laxmi Vihar, Burari, Delhi",
              href: "https://www.google.com/maps/search/?api=1&query=NK+Beauty+Salon+and+Academy+Shop+No.+1+Ground+Floor+Khasra+No.+409/2+Laxmi+Vihar+Burari+Delhi+110084",
            },
          ].map((c, i) => (
            <a
              key={i}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: "1px solid rgba(232,24,90,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  color: C.pink,
                  background: "rgba(232,24,90,0.08)",
                }}
              >
                {c.icon}
              </div>

              <div>
                <div
                  style={{
                    fontSize: 8,
                    letterSpacing: 2.5,
                    color: C.mid,
                    textTransform: "uppercase",
                    marginBottom: 3,
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {c.label}
                </div>

                <div
                  style={{
                    fontSize: 14,
                    color: C.dark,
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                  }}
                >
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile-only: social cards */}
        <div className="hero-mobile-cards" style={{ display: "none", marginTop: 32, flexDirection: "column", gap: 12 }}>
          <style>{`.hero-mobile-cards { display: none !important; } @media (max-width: 768px) { .hero-mobile-cards { display: flex !important; } }`}</style>
          <a href="https://wa.me/918178999143" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(20,0,12,0.85)", border: "1px solid rgba(201,160,32,0.25)", borderRadius: 16, padding: "14px 18px", textDecoration: "none" }}>
            <div style={{ width: 34, height: 34, background: "rgba(232,24,90,0.15)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>💬</div>
            <div>
              <div style={{ fontSize: 8, letterSpacing: 2, color: C.gold, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Fastest Way</div>
              <div style={{ fontSize: 16, color: C.white, fontFamily: "'Playfair Display', serif" }}>WhatsApp Us →</div>
            </div>
          </a>
          <a href="https://instagram.com/nk_beautysalon_academy" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(20,0,12,0.85)", border: "1px solid rgba(232,24,90,0.25)", borderRadius: 16, padding: "14px 18px", textDecoration: "none" }}>
            <div style={{ width: 34, height: 34, background: "linear-gradient(135deg, #e8185a 0%, #c9a020 100%)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>📷</div>
            <div>
              <div style={{ fontSize: 8, letterSpacing: 2, color: C.pink, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Follow Us</div>
              <div style={{ fontSize: 16, color: C.white, fontFamily: "'Playfair Display', serif" }}>@nk_beautysalon →</div>
            </div>
          </a>
        </div>
      </div>

      {/* Right — parlour image + social cards */}
      <div className="hero-right" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 48px 60px 36px", gap: 28 }}>
        {/* Arch bg */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80%", borderRadius: "200px 0 0 200px", background: "rgba(255,182,200,0.025)", border: "1px solid rgba(255,180,200,0.07)", pointerEvents: "none" }} />

        {/* Parlour image card */}
        <div style={{
          position: "relative", zIndex: 3, width: "100%", maxWidth: 480,
          borderRadius: 24, overflow: "hidden",
          border: "1px solid rgba(232,24,90,0.2)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}>
          <img
            src={PARLOUR_IMG}
            alt="NK Beauty Salon & Academy"
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
          />
          {/* Overlay label */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(to top, rgba(13,0,7,0.9) 0%, transparent 100%)",
            padding: "24px 20px 16px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div>
              <div style={{ fontSize: 8, letterSpacing: 3, color: C.gold, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, marginBottom: 4 }}>NK Beauty Studio</div>
              <div style={{ fontSize: 14, color: C.white, fontFamily: "'Playfair Display', serif" }}>Laxmi Vihar, Burari, Delhi</div>
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(232,24,90,0.15)", border: "1px solid rgba(232,24,90,0.35)",
              borderRadius: 40, padding: "5px 12px",
            }}>
              <span style={{ fontSize: 10 }}>♀</span>
              <span style={{ fontSize: 8, letterSpacing: 2, color: C.pink, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}>Ladies Only</span>
            </div>
          </div>
        </div>

        {/* Social cards row */}
        <div style={{ display: "flex", gap: 16, position: "relative", zIndex: 3 }}>
          {/* Instagram card */}
          <a href="https://instagram.com/nk_beautysalon_academy" target="_blank" rel="noopener noreferrer"
            style={{
              position: "relative",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12,
              background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(232,24,90,0.25)", borderRadius: 20,
              padding: "20px", textDecoration: "none",
              boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
              width: 180, height: 180, transition: "transform 0.25s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
          >
            <img src="https://img.freepik.com/premium-vector/instagram-logo-with-colorful-gradient_1273375-1516.jpg?semt=ais_hybrid&w=740&q=80" alt="Instagram" style={{ width: 48, height: 48, background: "linear-gradient(135deg, #e8185a 0%, #c9a020 100%)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 7, letterSpacing: 2.5, color: C.pink, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, marginBottom: 6 }}>Follow Us</div>
              <div style={{ fontSize: 15, color: "black", fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>Instagram</div>
            </div>
          </a>

          {/* WhatsApp card */}
          <a href="https://wa.me/918178999143" target="_blank" rel="noopener noreferrer"
            style={{
              position: "relative",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12,
              background: "rgba(255, 255, 255, 0.85)", backdropFilter: "blur(12px)",
              border: "1px solid rgba(201,160,32,0.25)", borderRadius: 20,
              padding: "20px", textDecoration: "none",
              boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
              width: 180, height: 180, transition: "transform 0.25s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
          >
            <img src="https://img.freepik.com/premium-vector/circle-whatsapp-logotype-icon-social-media-app-network-application-popular-editorial-brand-vector-illustration_913857-391.jpg?semt=ais_hybrid&w=740&q=80" alt="WhatsApp" style={{ width: 48, height: 48, background: "rgba(255, 255, 255, 0.3)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 7, letterSpacing: 2.5, color: C.gold, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 600, marginBottom: 6 }}>Fastest Way</div>
              <div style={{ fontSize: 15, color: "black", fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>WhatsApp</div>
            </div>
          </a>
        </div>
      </div>

      {/* Grain overlay */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")", pointerEvents: "none", zIndex: 1 }} />
    </section>
  );
}

/* ─── SECTION 2+3 — Booking ─── */
function BookingSection({ step, setStep, selectedService, setSelectedService, selectedDate, setSelectedDate, selectedTime, setSelectedTime }) {
  return (
    <section className="booking-grid" style={{
      background: C.bookBg,
      minHeight: "80vh",
      display: "grid",
      gridTemplateColumns: "40% 60%",
    }}>
      {/* Left info panel — hidden on mobile */}
      <div className="booking-left" style={{
        background: C.dark,
        padding: "80px 5vw",
        display: "flex", flexDirection: "column", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "20%", left: "-20%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,24,90,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        
        {/* Animated bubbles for booking section */}
        <div className="bubble bubble-1" style={{ top: "10%", right: "15%", width: 90, height: 90, background: "radial-gradient(circle at 30% 30%, rgba(232,24,90,0.3), rgba(232,24,90,0.05))", boxShadow: "0 8px 32px rgba(232,24,90,0.15)" }} />
        <div className="bubble bubble-3" style={{ bottom: "15%", left: "5%", width: 70, height: 70, background: "radial-gradient(circle at 30% 30%, rgba(201,160,32,0.25), rgba(201,160,32,0.05))", boxShadow: "0 8px 32px rgba(201,160,32,0.1)" }} />
        
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
            <span style={{ color: C.gold, fontSize: 16 }}>✦</span>
            <span style={{ fontSize: 9, letterSpacing: 4, color: C.gold, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>NK Beauty Studio</span>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 400, color: C.white, margin: "0 0 20px", lineHeight: 1.1 }}>
            Your <em style={{ color: C.pink, fontStyle: "italic" }}>Transform-</em><br />
            <em style={{ color: C.pink, fontStyle: "italic" }}>ation</em> Awaits.
          </h2>
          <p style={{ fontSize: 13, lineHeight: 1.85, color: "rgba(255,210,225,0.7)", maxWidth: 280, fontFamily: "'Montserrat', sans-serif", fontWeight: 300, marginBottom: 36 }}>
            Shop No. 1, Ground Floor, Kh No. 409/2, Laxmi Vihar, Burari, Near Burari Govt. Hospital, Monday Market Road, Delhi-110084.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {["Trained by VLCC", "Certified by SS Bollywood Academy", "Ladies-Only Sanctuary"].map((cert, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold, flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: "rgba(255,210,225,0.65)", fontFamily: "'Montserrat', sans-serif", letterSpacing: 1 }}>{cert}</span>
              </div>
            ))}
          </div>
          <a  href="https://www.google.com/maps/search/?api=1&query=NK+Beauty+Salon+and+Academy+Shop+No.+1+Ground+Floor+Khasra+No.+409/2+Laxmi+Vihar+Burari+Delhi+110084"
              target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 40, background: "rgba(232,24,90,0.1)", border: "1px solid rgba(232,24,90,0.25)", borderRadius: 40, padding: "12px 20px", textDecoration: "none", color: C.pink, fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
            <span>📍</span> View on Maps →
          </a>
        </div>
      </div>

      {/* Right — booking form */}
      <div className="booking-inner" style={{ padding: "72px 6vw 72px 5vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span style={{ display: "inline-block", width: 28, height: 1.5, background: C.pink }} />
          <span style={{ fontSize: 9, letterSpacing: 4, color: C.pink, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Appointment Booking</span>
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 56px)", fontWeight: 400, margin: "0 0 24px", lineHeight: 1.1, color: C.dark }}>
          Secure Your{" "}<em style={{ color: C.gold, fontStyle: "italic" }}>Spot.</em>
        </h2>

        {/* Progress */}
        <div style={{ display: "flex", gap: 6, marginBottom: 32 }}>
          {[1, 2].map(s => (
            <div key={s} style={{ flex: 1, height: 3, borderRadius: 2, background: step >= s ? C.pink : "rgba(232,24,90,0.15)", transition: "background 0.4s" }} />
          ))}
          <div style={{ flex: 3, height: 3, background: "rgba(232,24,90,0.08)", borderRadius: 2 }} />
        </div>

        <div style={{ fontSize: 9, letterSpacing: 3.5, color: C.muted, textTransform: "uppercase", marginBottom: 24, fontFamily: "'Montserrat', sans-serif" }}>
          Step 0{step} — {step === 1 ? "Choose Service" : "Pick Date & Time"}
        </div>

        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {SERVICES.map((svc, i) => (
              <button key={i} onClick={() => { setSelectedService(svc); setStep(2); }}
                style={{
                  display: "flex", alignItems: "center",
                  padding: "16px 0",
                  borderTop: i === 0 ? `1px solid ${C.border}` : "none",
                  borderBottom: `1px solid ${C.border}`,
                  borderLeft: "none", borderRight: "none",
                  background: "none", cursor: "pointer", textAlign: "left", gap: 14,
                  width: "100%", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(232,24,90,0.04)"; e.currentTarget.style.paddingLeft = "8px"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.paddingLeft = "0"; }}
              >
                <span style={{ fontSize: 15, color: C.gold, width: 24, textAlign: "center", flexShrink: 0 }}>{svc.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(14px, 1.6vw, 19px)", fontWeight: 500, color: C.dark, marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{svc.name}</div>
                  <div style={{ fontSize: 8, letterSpacing: 2, color: C.muted, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>{svc.duration}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                  <span style={{ fontSize: 12, color: C.mid, fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>{svc.price}</span>
                  <span style={{ fontSize: 12, color: C.muted }}>→</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div>
            {selectedService && (
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(232,24,90,0.08)", borderRadius: 40, padding: "8px 18px", marginBottom: 28, border: "1px solid rgba(232,24,90,0.2)" }}>
                <span style={{ fontSize: 13, color: C.gold }}>{selectedService.icon}</span>
                <span style={{ fontSize: 12, fontFamily: "'Montserrat', sans-serif", color: C.mid, fontWeight: 500 }}>{selectedService.name}</span>
                <span style={{ fontSize: 11, color: C.muted, fontFamily: "'Montserrat', sans-serif" }}>{selectedService.price}</span>
              </div>
            )}

            <div className="date-time-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 32 }}>
              <div>
                <div style={{ fontSize: 8, letterSpacing: 3, color: C.muted, textTransform: "uppercase", marginBottom: 12, fontFamily: "'Montserrat', sans-serif" }}>Select Date</div>
                <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)}
                  style={{ width: "100%", padding: "13px 14px", border: `1.5px solid ${selectedDate ? C.pink : C.border}`, borderRadius: 10, background: C.surface, fontFamily: "'Montserrat', sans-serif", fontSize: 13, color: selectedDate ? C.dark : C.muted, outline: "none", cursor: "pointer" }}
                />
              </div>
              <div>
                <div style={{ fontSize: 8, letterSpacing: 3, color: C.muted, textTransform: "uppercase", marginBottom: 12, fontFamily: "'Montserrat', sans-serif" }}>Available Slots</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {TIME_SLOTS.map(t => (
                    <button key={t} onClick={() => setSelectedTime(t)}
                      style={{ padding: "9px 14px", borderRadius: 8, border: `1.5px solid ${selectedTime === t ? C.pink : C.border}`, background: selectedTime === t ? "rgba(232,24,90,0.08)" : C.surface, color: selectedTime === t ? C.pink : C.mid, fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: selectedTime === t ? 600 : 400, cursor: "pointer", transition: "all 0.2s", textAlign: "left" }}
                    >{t}</button>
                  ))}
                </div>
              </div>
            </div>

            {selectedDate && selectedTime && (
              <a href={`https://wa.me/918178999143?text=Hi! I'd like to book ${selectedService?.name} on ${selectedDate} at ${selectedTime}`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 12, background: C.pink, color: "#fff", textDecoration: "none", padding: "14px 28px", borderRadius: 40, fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, boxShadow: "0 8px 28px rgba(232,24,90,0.3)", marginBottom: 14, transition: "transform 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
              >
                💬 Confirm on WhatsApp →
              </a>
            )}

            <button onClick={() => setStep(1)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, letterSpacing: 2.5, color: C.muted, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", display: "flex", alignItems: "center", gap: 8, padding: 0, marginTop: 8 }}>
              ← Back to Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── SECTION 4 — FAQ ─── */
function FaqSection({ faqs, openFaq, setOpenFaq }) {
  return (
    <section className="faq-grid" style={{ display: "grid", gridTemplateColumns: "38% 62%", minHeight: "80vh" }}>
      {/* Left */}
      <div className="faq-left-mobile" style={{
        background: C.faqLeft,
        padding: "55px 5vw 55px 6vw",
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        borderRight: `1px solid ${C.border}`,
      }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <span style={{ display: "inline-block", width: 24, height: 1.5, background: C.pink }} />
          <span style={{ fontSize: 9, letterSpacing: 4, color: C.pink, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>Service Concierge</span>
        </div>
        <h2 style={{ display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 62px)", fontWeight: 400, color: C.dark, margin: "0 0 24px", lineHeight: 1.05 }}>
          <em style={{ fontStyle: "italic" }}>Essential</em>
          <em style={{ fontStyle: "italic", color: C.gold }}>Insights.</em>
        </h2>
        <p style={{ fontSize: 13, lineHeight: 1.85, color: C.mid, margin: "0 0 36px", maxWidth: 280, fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}>
          Aapke har sawal ka jawab hamari priority hai. Agar aapko kuch aur poochna hai, toh humse seedha baat karein.
        </p>
        <a href="https://wa.me/918178999143" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 14, background: C.surface, border: `1px solid ${C.border}`, borderRadius: 50, padding: "12px 18px 12px 12px", textDecoration: "none", boxShadow: "0 4px 20px rgba(180,40,80,0.08)", transition: "all 0.25s", maxWidth: 280 }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(180,40,80,0.16)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(180,40,80,0.08)"; e.currentTarget.style.transform = "none"; }}
        >
          <div style={{ width: 42, height: 42, borderRadius: "50%", background: C.dark, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>💬</div>
          <div>
            <div style={{ fontSize: 9, letterSpacing: 2.5, color: C.muted, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", marginBottom: 3 }}>Direct Line</div>
            <div style={{ fontSize: 14, color: C.dark, fontFamily: "'Montserrat', sans-serif", fontWeight: 500 }}>Chat with our experts →</div>
          </div>
        </a>

        {/* Address block — hidden on mobile to save space */}
        <div className="address-block-desktop" style={{ marginTop: 32, padding: "16px 20px", background: "rgba(232,24,90,0.05)", borderRadius: 12, border: "1px solid rgba(232,24,90,0.12)", maxWidth: 300 }}>
          <style>{`.address-block-desktop {} @media (max-width: 768px) { .address-block-desktop { display: none !important; } }`}</style>
          <div style={{ fontSize: 8, letterSpacing: 2, color: C.pink, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif", marginBottom: 6 }}>Find Us</div>
          <p style={{ fontSize: 12, color: C.mid, fontFamily: "'Montserrat', sans-serif", lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
            NK Beauty Salon & Academy Shop No. 1,<br />
            Ground Floor Khasra No. 409/2, <br />
            Laxmi Vihar Burari, Delhi – 110084, India
          </p>
        </div>
      </div>

      {/* Right — FAQ */}
      <div style={{ background: C.faqRight, padding: "80px 6vw 80px 5vw", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -20, right: -20, fontSize: "clamp(60px, 12vw, 160px)", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "rgba(255,255,255,0.03)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>Q&amp;A</div>
        <div style={{ position: "absolute", top: "30%", right: "-10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,24,90,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Animated bubbles for FAQ section */}
        <div className="bubble bubble-2" style={{ top: "15%", left: "5%", width: 80, height: 80, background: "radial-gradient(circle at 30% 30%, rgba(232,24,90,0.25), rgba(232,24,90,0.05))", boxShadow: "0 8px 32px rgba(232,24,90,0.12)" }} />
        <div className="bubble bubble-4" style={{ bottom: "10%", right: "8%", width: 100, height: 100, background: "radial-gradient(circle at 30% 30%, rgba(201,160,32,0.2), rgba(201,160,32,0.05))", boxShadow: "0 8px 32px rgba(201,160,32,0.1)" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <button onClick={() => setOpenFaq(isOpen ? null : i)}
                  style={{ width: "100%", background: "none", border: "none", padding: "24px 0", display: "flex", alignItems: "flex-start", gap: 16, cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: 11, color: C.pink, fontFamily: "'Montserrat', sans-serif", fontWeight: 600, letterSpacing: 1, flexShrink: 0, paddingTop: 4, minWidth: 22 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ flex: 1, fontFamily: "'Playfair Display', serif", fontSize: "clamp(14px, 1.7vw, 21px)", fontStyle: "italic", color: isOpen ? C.gold : "rgba(255,230,238,0.9)", lineHeight: 1.35, transition: "color 0.25s" }}>
                    {faq.q}
                  </span>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", border: `1.5px solid ${isOpen ? C.pink : "rgba(255,255,255,0.15)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: isOpen ? C.pink : "rgba(255,255,255,0.4)", fontSize: 16, flexShrink: 0, background: isOpen ? "rgba(232,24,90,0.15)" : "transparent", transition: "all 0.25s" }}>
                    {isOpen ? "×" : "+"}
                  </div>
                </button>
                <div style={{ maxHeight: isOpen ? 200 : 0, overflow: "hidden", transition: "max-height 0.38s ease" }}>
                  <div style={{ paddingLeft: 38, paddingBottom: 24, borderLeft: `2px solid ${C.pink}`, marginLeft: 20 }}>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, lineHeight: 1.85, color: "rgba(255,205,220,0.75)", margin: 0, fontWeight: 300, fontStyle: "italic" }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ position: "absolute", bottom: 28, right: 32, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: C.gold, fontSize: 10 }}>✦</span>
          <span style={{ fontSize: 8, letterSpacing: 3, color: "rgba(255,255,255,0.2)", textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>NK Beauty Salon & Academy · Delhi</span>
        </div>
      </div>
    </section>
  );
}