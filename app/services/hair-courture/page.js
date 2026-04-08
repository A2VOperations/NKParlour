"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiOutlineSparkles } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import Link from "next/link";

const PHONE = "918178999143";
const NISHA_INSTA = "https://www.instagram.com/nkbeautysalon";

function bookOnWhatsApp(service = "") {
  const msg = service
    ? `Hi! I'd like to book: *${service}* at NK Beauty Salon & Academy. Please share availability.`
    : `Hi! I'd like to book an appointment at NK Beauty Salon & Academy.`;
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
}

export default function ServiceHero() {
  const [hovered, setHovered] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleMaster, setVisibleMaster] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const stepsRef = useRef([]);
  const cardsRef = useRef([]);
  const masterRef = useRef(null);

  // Intersection observer for scroll-triggered animations
  useEffect(() => {
    const observers = [];

    stepsRef.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisibleSteps(prev => [...new Set([...prev, i])]), i * 120);
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    cardsRef.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisibleCards(prev => [...new Set([...prev, i])]), i * 160);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    if (masterRef.current) {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setVisibleMaster(true); obs.disconnect(); } },
        { threshold: 0.1 }
      );
      obs.observe(masterRef.current);
      observers.push(obs);
    }

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const services = [
    {
      category: "SCULPTING ART",
      items: [
        { title: "Director's Cut", desc: "A bespoke architectural cut by our master director.", price: "₹2,500" },
        { title: "Signature Blowout", desc: "Ionic infusion for red-carpet volume and shine.", price: "₹1,800" },
      ],
    },
    {
      category: "COLOR COUTURE",
      items: [
        { title: "French Balayage", desc: "Seamless hand-painted dimension and depth.", price: "₹8,500" },
        { title: "Global Pigment", desc: "Full saturation of high-vibrancy luxury tones.", price: "₹6,200" },
      ],
    },
  ];

  const masters = [
    {
      name: "Nisha",
      role: "FOUNDER & CREATIVE HEAD",
      specialty: "Avant-Garde Cuts & Color Mastery",
      image: "/about/parler4.jpg",
    },
  ];

  const transformations = [
    { title: "Signature Balayage", artist: "Aman Verma", before: "/about/parler.jpg", after: "/about/parler2.jpg", rating: 5 },
    { title: "Molecular Repair", artist: "Sarah Khan", before: "/about/parler3.jpg", after: "/about/parler4.jpg", rating: 5 },
  ];

  const steps = [
    { id: "01", title: "Couture Analysis", desc: "Scientific mapping of hair texture, density, and facial architecture.", icon: CiSearch },
    { id: "02", title: "Artistic Sculpting", desc: "Precision cutting and color alchemy tailored to your distinct persona.", icon: HiOutlineSparkles },
    { id: "03", title: "Molecular Ritual", desc: "Deep fiber repair with steam-infused oils and a sensory scalp massage.", icon: FaRegHeart },
    { id: "04", title: "Legacy Finish", desc: "Editorial styling and a 30-day personalized ritual blueprint.", icon: FaRegHeart },
  ];

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }

        /* ── Keyframes ── */
        @keyframes float        { 0%,100%{transform:translateY(0)}    50%{transform:translateY(-20px)} }
        @keyframes float-slow   { 0%,100%{transform:translateY(0)}    50%{transform:translateY(-15px)} }
        @keyframes float-slower { 0%,100%{transform:translateY(0)}    50%{transform:translateY(-25px)} }
        @keyframes shimmer      { 0%{transform:translateX(-100%)} 100%{transform:translateX(200%)} }
        @keyframes border-spin  { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @keyframes fade-up      { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fade-left    { from{opacity:0;transform:translateX(-24px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fade-right   { from{opacity:0;transform:translateX(24px)} to{opacity:1;transform:translateX(0)} }
        @keyframes scale-in     { from{opacity:0;transform:scale(0.88)} to{opacity:1;transform:scale(1)} }
        @keyframes glow-breathe { 0%,100%{box-shadow:0 0 24px rgba(232,93,138,0.25)} 50%{box-shadow:0 0 48px rgba(232,93,138,0.55)} }
        @keyframes gold-breathe { 0%,100%{box-shadow:0 0 20px rgba(225,161,64,0.2)}  50%{box-shadow:0 0 44px rgba(225,161,64,0.5)} }
        @keyframes ticker       { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        .bubble-1{animation:float        6s  ease-in-out infinite}
        .bubble-2{animation:float-slow   7s  ease-in-out infinite 0.5s}
        .bubble-3{animation:float-slower 8s  ease-in-out infinite 1s}
        .bubble-4{animation:float        5.5s ease-in-out infinite 1.5s}
        .bubble-5{animation:float-slow   6.5s ease-in-out infinite 0.8s}
        .bubble-6{animation:float-slower 7.5s ease-in-out infinite 1.2s}

        /* ── Entrance helpers ── */
        .anim-fade-up   { animation: fade-up   0.7s cubic-bezier(.22,1,.36,1) both }
        .anim-fade-left { animation: fade-left  0.7s cubic-bezier(.22,1,.36,1) both }
        .anim-fade-right{ animation: fade-right 0.7s cubic-bezier(.22,1,.36,1) both }
        .anim-scale-in  { animation: scale-in  0.65s cubic-bezier(.22,1,.36,1) both }
        .delay-100{animation-delay:0.10s}.delay-200{animation-delay:0.20s}
        .delay-300{animation-delay:0.30s}.delay-400{animation-delay:0.40s}
        .delay-500{animation-delay:0.50s}.delay-600{animation-delay:0.60s}

        /* ── Service row ── */
        .service-row {
          position:relative;
          display:flex; justify-content:space-between; align-items:flex-start;
          padding:18px 0; border-bottom:1px solid #d1d5db;
          transition:background 0.3s; gap:12px;
        }
        .service-row::after {
          content:''; position:absolute; bottom:-1px; left:0;
          width:0; height:2px;
          background:linear-gradient(to right,#e1a140,#f5c76d);
          transition:width 0.45s ease;
        }
        .service-row.active::after,
        .service-row:hover::after { width:100%; }
        .service-row.active,
        .service-row:hover { background:rgba(225,161,64,0.05); }
        .service-row.active .service-title,
        .service-row:hover .service-title { color:#d97706; }
        .service-row.active .book-btn,
        .service-row:hover .book-btn { opacity:1; transform:translateX(0) scale(1); }

        .book-btn {
          opacity:0; transform:translateX(10px) scale(0.92);
          transition:opacity 0.3s ease, transform 0.3s ease;
          flex-shrink:0;
          background:linear-gradient(135deg,#e1a140,#f5c76d);
          color:#1a0f13; font-size:9px; font-weight:700;
          letter-spacing:0.15em; text-transform:uppercase;
          padding:7px 14px; border-radius:30px; border:none;
          cursor:pointer; white-space:nowrap;
          box-shadow:0 4px 16px rgba(225,161,64,0.35);
        }
        .book-btn:active { transform:scale(0.96) !important; }

        /* Mobile: always show book btn */
        @media (max-width:768px) {
          .book-btn { opacity:1; transform:none; }
        }

        /* ── Transformation card ── */
        .t-card {
          background:white; border-radius:20px; padding:20px;
          transition:transform 0.4s ease, box-shadow 0.4s ease;
        }
        .t-card:hover { transform:translateY(-6px); box-shadow:0 24px 60px rgba(185,155,94,0.18); }

        /* ── Nisha card ── */
        .nisha-card {
          position:relative; overflow:hidden;
          background:linear-gradient(135deg,#1a0f13 0%,#2d1820 50%,#1a0f13 100%);
          border:1px solid #3a1525; border-radius:28px;
          padding:clamp(24px,5vw,48px);
          display:flex; align-items:center; gap:clamp(20px,4vw,40px);
          flex-wrap:wrap;
          transition:transform 0.4s ease, box-shadow 0.4s ease;
          animation: glow-breathe 4s ease-in-out infinite;
        }
        .nisha-card:hover {
          transform:translateY(-4px) scale(1.01);
          box-shadow:0 28px 72px rgba(255,120,160,0.22), 0 0 0 1px rgba(235,166,37,0.35);
        }
        .nisha-card::before {
          content:''; position:absolute; inset:-2px; border-radius:30px;
          background:linear-gradient(135deg,rgba(235,166,37,0.12),transparent 40%,rgba(255,120,160,0.08) 100%);
          pointer-events:none;
        }
        .nisha-img-wrap { position:relative; flex-shrink:0;
          width:clamp(100px,18vw,150px); height:clamp(100px,18vw,150px); }
        .nisha-img-inner {
          width:100%; height:100%; border-radius:50%; overflow:hidden;
          border:2px solid #3a1525;
          transition:border-color 0.4s, filter 0.5s;
          filter:grayscale(20%);
        }
        .nisha-card:hover .nisha-img-inner { border-color:#eba625; filter:grayscale(0%); }
        .nisha-ring {
          position:absolute; inset:-7px; border-radius:50%;
          border:2px solid transparent;
          border-top-color:#eba625; border-right-color:rgba(235,166,37,0.3);
          opacity:0; animation:border-spin 3s linear infinite;
          transition:opacity 0.35s;
        }
        .nisha-card:hover .nisha-ring { opacity:1; }

        .insta-btn {
          display:inline-flex; align-items:center; gap:8px;
          padding:9px 20px; border-radius:30px;
          background:linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045);
          color:white; font-size:10px; font-weight:700;
          letter-spacing:0.25em; text-transform:uppercase;
          text-decoration:none;
          transition:transform 0.3s, box-shadow 0.3s;
          box-shadow:0 4px 20px rgba(253,29,29,0.3);
        }
        .insta-btn:hover { transform:translateY(-2px); box-shadow:0 8px 32px rgba(253,29,29,0.45); }

        /* ── Step card ── */
        .step-card {
          position:relative; background:rgba(255,255,255,0.75);
          backdrop-filter:blur(12px); border-radius:24px; padding:28px;
          text-align:left; box-shadow:0 2px 12px rgba(0,0,0,0.04);
          overflow:hidden;
          transition:transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
          opacity:0; transform:translateY(32px);
        }
        .step-card.visible {
          opacity:1; transform:translateY(0);
          transition:opacity 0.6s ease, transform 0.6s cubic-bezier(.22,1,.36,1),
                      box-shadow 0.4s ease, background 0.4s ease;
        }
        .step-card::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(184,155,94,0.1),transparent);
          opacity:0; transition:opacity 0.35s;
        }
        .step-card:hover { transform:translateY(-8px) !important; box-shadow:0 28px 60px rgba(184,155,94,0.2); background:white; }
        .step-card:hover::before { opacity:1; }
        .step-card:hover .step-divider { width:100%; }
        .step-card:hover .step-num { transform:scale(1.3) rotate(-5deg); opacity:1; color:#b89b5e; }
        .step-card:hover .step-icon-wrap { background:#d6c7a3; transform:scale(1.1) rotate(-4deg); }
        .step-card:hover .step-title { color:#b89b5e; }
        .step-divider { width:40px; height:1px; background:#b89b5e; margin-bottom:16px; transition:width 0.4s ease; }
        .step-num { position:absolute; top:20px; right:20px; font-size:2rem; font-weight:300; color:#b89b5e; opacity:0.4; transition:transform 0.4s, opacity 0.4s, color 0.4s; }
        .step-icon-wrap { width:46px; height:46px; display:flex; align-items:center; justify-content:center; border-radius:14px; background:white; box-shadow:0 2px 10px rgba(0,0,0,0.08); margin-bottom:22px; transition:background 0.4s, transform 0.4s; }

        /* ── CTA button ── */
        .cta-btn {
          display:inline-flex; align-items:center; gap:12px;
          padding:16px 40px; border-radius:50px;
          background:#1f1f1f; color:white;
          font-size:11px; letter-spacing:0.25em; text-transform:uppercase;
          border:none; cursor:pointer; position:relative; overflow:hidden;
          transition:background 0.4s, transform 0.3s, box-shadow 0.3s;
          animation: gold-breathe 4s ease-in-out infinite;
        }
        .cta-btn::after {
          content:''; position:absolute; top:0; left:-100%;
          width:60%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent);
          transition:left 0.55s ease;
        }
        .cta-btn:hover { background:#b89b5e; transform:translateY(-3px); animation:none; box-shadow:0 16px 48px rgba(184,155,94,0.4); }
        .cta-btn:hover::after { left:160%; }
        .cta-btn .arrow { transition:transform 0.3s; }
        .cta-btn:hover .arrow { transform:translateX(6px); }

        /* ── Ticker tape ── */
        .ticker-wrap { overflow:hidden; background:linear-gradient(to right,#1a0f13,#2d1820); padding:10px 0; }
        .ticker-inner { display:flex; width:max-content; animation:ticker 22s linear infinite; white-space:nowrap; }
        .ticker-inner:hover { animation-play-state:paused; }
        .ticker-item { font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#e7cfa4; padding:0 40px; opacity:0.75; }
        .ticker-dot { color:#e7cfa4; font-size:6px; opacity:0.5; margin:0 -28px; align-self:center; }

        /* ── Responsive paddings ── */
        .section-px { padding-left:clamp(16px,5vw,80px); padding-right:clamp(16px,5vw,80px); }
        .section-px-lg { padding-left:clamp(16px,8vw,160px); padding-right:clamp(16px,8vw,160px); }

        /* Mobile touch: active states mirror hover */
        @media (hover:none) {
          .service-row:active::after { width:100%; }
          .service-row:active .book-btn { opacity:1; transform:none; }
          .step-card:active { transform:translateY(-4px) !important; }
          .t-card:active { transform:translateY(-3px); }
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        className="relative py-12 md:py-20 flex items-start lg:items-center overflow-hidden"
        style={{ background: "linear-gradient(to right,#efa4bd83,#b69fa735,#f7bc979f)" }}
      >
        {/* bg glows + bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_80%_30%,rgba(255,120,160,0.18),transparent_65%)]" />
          <div className="absolute left-0 bottom-0 w-[50%] h-full bg-[radial-gradient(ellipse_at_20%_80%,rgba(225,161,64,0.12),transparent_70%)]" />
          <div className="absolute left-8 top-24 w-28 h-28 rounded-full bg-[#efa4bd83] blur-2xl opacity-80" />
          <div className="absolute right-16 top-40 w-20 h-20 rounded-full bg-[#b69fa735] blur-2xl opacity-90" />
          <div className="absolute left-24 bottom-32 w-16 h-16 rounded-full bg-[#f7bc979f] blur-2xl opacity-70" />
          <div className="absolute right-28 bottom-16 w-32 h-32 rounded-full bg-[#ffffff1a] blur-3xl opacity-70" />
          <div className="bubble-1 absolute top-16 left-20 w-24 h-24 rounded-full border-2 border-white/30 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md" />
          <div className="bubble-2 absolute top-1/3 right-32 w-32 h-32 rounded-full border-2 border-white/20 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md" />
          <div className="bubble-3 absolute bottom-20 left-1/3 w-20 h-20 rounded-full border-2 border-white/25 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md" />
          <div className="bubble-4 absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-white/35 bg-gradient-to-br from-white/25 to-white/5 backdrop-blur-md" />
          <div className="bubble-5 absolute bottom-32 right-20 w-28 h-28 rounded-full border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md" />
          <div className="bubble-6 absolute top-2/3 right-1/3 w-14 h-14 rounded-full border border-white/30 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md" />
        </div>

        <div className="relative w-full max-w-[1200px] mx-auto section-px grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left image */}
          <div
            className="relative flex items-center justify-center py-8 lg:py-0 anim-fade-left"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="relative w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] mx-auto">
              <div className="absolute -top-5 -left-5 w-[calc(100%+10px)] h-[calc(100%+10px)] rounded-t-[50%] rounded-b-[16px] border border-[#5a1a2a]/50" />
              <div className="absolute -top-2 -left-2 w-[calc(100%+4px)] h-[calc(100%+4px)] rounded-t-[50%] rounded-b-[14px] border border-[#3a1020]/60" />
              <div className="relative overflow-hidden rounded-t-[50%] rounded-b-[14px]" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/service/parler4.jpg" alt="Salon" fill
                  className={`object-cover transition-all duration-[1200ms] ease-in-out ${hovered ? "scale-105 brightness-110" : "scale-100 brightness-100"}`}
                />
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#1a0f13] via-[#1a0f13]/60 to-transparent" />
              </div>
              <div className={`absolute bottom-10 right-[-8px] sm:right-[-16px] bg-[#261018]/90 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-4 sm:py-5 border border-[#3a1525]/60 min-w-[130px] sm:min-w-[150px] transition-all duration-500 ease-out ${hovered ? "-translate-y-3 shadow-[0_20px_50px_rgba(255,120,160,0.35)]" : "shadow-[0_8px_30px_rgba(0,0,0,0.5)]"}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="1.8" className="mb-2">
                  <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
                <p className="text-[8px] tracking-[3px] text-yellow-500 font-semibold uppercase mb-1">Tailored</p>
                <p className="text-white font-serif text-xl sm:text-2xl">Precision</p>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="py-4 lg:py-0 anim-fade-right">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#EAB308"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" /></svg>
              <p className="text-[11px] sm:text-[13px] font-bold tracking-[0.3em] sm:tracking-[0.35em] text-[#dbab60] uppercase">Curated Collections</p>
            </div>

            <h1 className="font-serif leading-[1.0] text-[#4b3b39]">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px]">The <em className="text-pink-400 italic">Service</em></span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[80px] italic mt-1">Atelier</span>
            </h1>

            <p className="text-[#dbab60] text-[13px] sm:text-[14px] leading-[1.9] max-w-[420px] mt-5 sm:mt-6">
              Experience a symphony of luxury treatments. From avant-garde hair styling to royal skin rituals, redefining beauty with elegance.
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-2 sm:gap-3">
              {[
                { label: "Atelier",   color: "text-pink-700/80",   text: "Bespoke haircraft and luxury rituals." },
                { label: "Expertise", color: "text-yellow-700/80", text: "Master stylists + creative color specialists." },
                { label: "Ritual",   color: "text-cyan-700/80",   text: "Immersive prep, precision, and signature finish." },
                { label: "Glow",     color: "text-rose-700/80",   text: "Tailored beauty steps inspired by you." },
              ].map((b, i) => (
                <div key={i} className="rounded-2xl sm:rounded-full border border-white/20 bg-white/10 px-4 sm:px-6 py-3 text-xs sm:text-sm text-black backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:-translate-y-0.5 active:scale-95">
                  <span className={`block text-[9px] sm:text-[11px] font-extrabold uppercase tracking-[0.4em] mb-0.5 ${b.color}`}>{b.label}</span>
                  {b.text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-8 mt-10 sm:mt-12">
              <Link
                href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hi! I'd like to book an appointment at NK Beauty Salon & Academy.")}`}
                target="_blank"
                className="relative overflow-hidden bg-gradient-to-r from-[#e1a140] via-[#f5c76d] to-[#e1a140] text-black text-[10px] sm:text-[11px] tracking-[0.35em] font-bold uppercase px-8 sm:px-12 py-[14px] sm:py-[16px] rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(225,161,64,0.6)] active:scale-95 group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Book Experience</span>
              </Link>
              <a href="#hair-collection" className="flex items-center gap-2 text-[10px] tracking-[0.3em] text-black uppercase group cursor-pointer hover:text-pink-500 active:text-pink-500 transition">
                <FaAngleDown className="group-hover:text-pink-400 transition" />
                <span>Discover Menu</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker tape ── */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...Array(2)].map((_, ri) =>
            ["Bespoke Haircraft","Royal Rituals","Precision Cuts","Color Couture","Avant-Garde Styling","Molecular Repair","24K Glow","Expert Artisans"].map((t, i) => (
              <span key={`${ri}-${i}`} className="ticker-item">{t}<span className="ticker-dot"> ✦ </span></span>
            ))
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════
          HAIR COLLECTION
      ══════════════════════════════════════ */}
      <section id="hair-collection" className="bg-[#f4f1ec] py-12 sm:py-16 section-px">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

          {/* Image card */}
          <div
            ref={el => cardsRef.current[0] = el}
            className={`relative flex justify-center items-center transition-all duration-700 ${visibleCards.includes(0) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="bg-[#ede7df] p-4 sm:p-5 rounded-[32px] sm:rounded-[40px] shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="bg-white p-2 rounded-[24px] sm:rounded-[30px]">
                <div className="overflow-hidden rounded-[20px] sm:rounded-[25px] w-[240px] sm:w-[300px] md:w-[340px] h-[300px] sm:h-[380px] md:h-[460px]">
                  <Image src="/about/parler3.jpg" alt="hair" width={600} height={700}
                    className="object-cover w-full h-full scale-105 hover:scale-110 transition duration-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div
            ref={el => cardsRef.current[1] = el}
            className={`max-w-md mx-auto md:mx-0 transition-all duration-700 delay-150 ${visibleCards.includes(1) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="mb-6 sm:mb-8 text-center md:text-left">
              <p className="text-[10px] tracking-[0.35em] text-yellow-600 mb-3">SERVICE ATELIER</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight">
                <span className="text-gray-800 font-semibold">Hair </span>
                <span className="text-yellow-600 italic font-serif">Collection</span>
              </h2>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                Curating transformations since 2012. Each service is a bespoke ritual designed for your unique identity.
              </p>
            </div>

            {services.map((section, i) => (
              <div key={i} className="mb-6 sm:mb-8">
                <div className="flex items-center mb-2">
                  <p className="text-[10px] tracking-[0.3em] text-gray-400">{section.category}</p>
                  <div className="flex-1 h-px bg-gray-300 ml-3" />
                </div>
                {section.items.map((item, idx) => {
                  const key = `${i}-${idx}`;
                  return (
                    <div
                      key={idx}
                      className={`service-row ${activeService === key ? "active" : ""}`}
                      onMouseEnter={() => setActiveService(key)}
                      onMouseLeave={() => setActiveService(null)}
                      onTouchStart={() => setActiveService(key)}
                      onTouchEnd={() => setTimeout(() => setActiveService(null), 800)}
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="service-title text-base sm:text-lg font-medium text-gray-800 transition-colors duration-300 truncate">{item.title}</h3>
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                        <span className="text-sm text-gray-700 whitespace-nowrap font-medium">{item.price}</span>
                        <button className="book-btn" onClick={() => bookOnWhatsApp(item.title)}>Book</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRANSFORMATIONS
      ══════════════════════════════════════ */}
      <section className="bg-[#f5f3f1] py-16 sm:py-20 section-px">
        <div className="max-w-6xl mx-auto">
          <div
            ref={el => cardsRef.current[2] = el}
            className={`relative mb-12 sm:mb-16 transition-all duration-700 ${visibleCards.includes(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-xs font-bold tracking-[0.2em] text-[#b89b5e] block mb-3">VISUAL PROOF</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              <span className="font-semibold text-gray-800">Recent</span><br />
              <span className="italic text-[#b89b5e] font-semibold">Transformations</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {transformations.map((item, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[3 + index] = el}
                className={`t-card transition-all duration-700 ${visibleCards.includes(3 + index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-3 mb-4">
                  <div className="relative w-1/2 h-[180px] sm:h-[220px] rounded-xl overflow-hidden group">
                    <Image src={item.before} alt="before" fill quality={100} sizes="50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105" priority />
                    <span className="absolute top-2 left-2 text-[9px] px-2 py-1 bg-gray-600/80 text-white rounded-full backdrop-blur-sm">BEFORE</span>
                  </div>
                  <div className="relative w-1/2 h-[180px] sm:h-[220px] rounded-xl overflow-hidden bg-[#eae7e3] group">
                    {item.after && <Image src={item.after} alt="after" fill quality={100} sizes="50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105" />}
                    <span className="absolute top-2 right-2 text-[9px] px-2 py-1 bg-[#c9a96a] text-white rounded-full backdrop-blur-sm">AFTER</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-base sm:text-lg font-medium">{item.title}</h3>
                    <p className="text-xs tracking-wider text-gray-500 mt-1">BY {item.artist}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#c9a96a] text-sm">{"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}</div>
                    <button
                      onClick={() => bookOnWhatsApp(item.title)}
                      className="mt-2 text-[9px] tracking-widest uppercase text-[#b89b5e] border border-[#b89b5e] rounded-full px-3 py-1.5 hover:bg-[#b89b5e] hover:text-white active:scale-95 transition-all duration-300"
                    >
                      Book This
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          NISHA — MASTER
      ══════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-[#1a0f13] via-[#241419] to-[#2d1a20] text-white py-14 sm:py-20 section-px-lg overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_80%_30%,rgba(255,120,160,0.15),transparent_65%)]" />
          <div className="absolute left-0 bottom-0 w-[50%] h-full bg-[radial-gradient(ellipse_at_20%_80%,rgba(225,161,64,0.10),transparent_70%)]" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div
            ref={el => cardsRef.current[5] = el}
            className={`mb-10 sm:mb-14 transition-all duration-700 ${visibleCards.includes(5) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#e7cfa4] uppercase">The Artisan</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light leading-tight mt-3 sm:mt-4">
              Meet The <span className="italic text-[#e7cfa4] font-medium">Master</span>
            </h2>
          </div>

          {masters.map((item, index) => (
            <div
              key={index}
              ref={masterRef}
              className={`nisha-card transition-all duration-900 ${visibleMaster ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <div className="nisha-img-wrap">
                <div className="nisha-ring" />
                <div className="nisha-img-inner">
                  <Image src={item.image} alt={item.name} fill quality={100} sizes="150px" style={{ objectFit: "cover" }} />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[9px] sm:text-[10px] tracking-[0.35em] font-bold text-[#e7cfa4] uppercase mb-2">{item.role}</p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-white">
                  {item.name}
                  <span className="text-[#e7cfa4] ml-2 text-xl">✦</span>
                </h3>
                <p className="text-sm text-[#d6b98c] mt-2 sm:mt-3 flex items-center gap-2">
                  <span className="text-[#e7cfa4]">✂</span> {item.specialty}
                </p>
                <div className="flex flex-wrap gap-3 mt-5 sm:mt-6">
                  <button
                    onClick={() => bookOnWhatsApp(`Consultation with ${item.name}`)}
                    className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase px-4 sm:px-5 py-4.5 rounded-full border border-[#e7cfa4]/50 text-[#e7cfa4] hover:bg-[#e7cfa4] hover:text-[#1a0f13] active:scale-95 transition-all duration-300 font-bold"
                  >
                    Book with Nisha ↗
                  </button>
                  <a href={NISHA_INSTA} target="_blank" rel="noopener noreferrer" className="insta-btn">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          CREATIVE WORKFLOW
      ══════════════════════════════════════ */}
      <section className="bg-[#f5f2ee] py-16 sm:py-20 section-px text-center">
        <p className="text-xs tracking-[0.3em] text-[#b89b5e] mb-3 sm:mb-4">— THE METHODOLOGY —</p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-light mb-12 sm:mb-16">
          Our <span className="text-[#b89b5e] italic font-serif">Creative</span> Workflow
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                ref={el => stepsRef.current[i] = el}
                className={`step-card group ${visibleSteps.includes(i) ? "visible" : ""}`}
                style={{ transitionDelay: visibleSteps.includes(i) ? `${i * 100}ms` : "0ms" }}
              >
                <span className="step-num">{step.id}</span>
                <div className="step-icon-wrap">
                  <Icon size={20} className="text-[#b89b5e] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="step-title text-base sm:text-lg font-medium mb-3 text-gray-800 transition-colors duration-500">{step.title}</h3>
                <div className="step-divider" />
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16">
          <button className="cta-btn" onClick={() => bookOnWhatsApp("Creative Workflow Ritual")}>
            RESERVE YOUR RITUAL <span className="arrow">→</span>
          </button>
          <p className="text-xs text-gray-400 mt-4 tracking-widest">LIMITED DAILY SESSIONS AVAILABLE</p>
        </div>
      </section>
    </>
  );
}