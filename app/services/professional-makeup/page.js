"use client";

import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import { useState, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";

const PHONE = "918178999143";
function bookWA(service = "") {
  const msg = service
    ? `Hi! I'd like to book: *${service}* at NK Beauty Salon & Academy.`
    : `Hi! I'd like to book an appointment at NK Beauty Salon & Academy.`;
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
}

const DATA = [
  { id: 1, title: "The Royal Bridal Reveal", tag: "BRIDAL COUTURE", desc: "Witness how we enhance facial features while maintaining a skin-like finish.", before: "/about/photoBridalMakeup.jpg", after: "/about/photoBridalMakeup.jpg" },
  { id: 2, title: "Editorial Glam Look", tag: "EDITORIAL", desc: "High fashion inspired glam with bold highlights and sculpted definition.", before: "/about/parler2.jpg", after: "/about/parler2.jpg" },
  { id: 3, title: "Soft Matte Beauty", tag: "SIGNATURE", desc: "Flawless matte finish with long-lasting coverage and natural tone balance.", before: "/about/parler3.jpg", after: "/about/parler3.jpg" },
];

const steps = [
  { id: "01", title: "The Dialogue", desc: "Sensory consultation to align artistry with your aura." },
  { id: "02", title: "Skin Canvas", desc: "Clinical-grade priming for a 24-hour luminous stay." },
  { id: "03", title: "Master Stroke", desc: "Final reveal with elite pigments and precision." },
];

const services = [
  { id: "01", tag: "THE ULTIMATE GLOW",   title: "Royal Bridal",   desc: "An architectural approach to bridal beauty. We craft a timeless HD glow that stays flawless through every emotion.", price: "₹25,000" },
  { id: "02", tag: "EDITORIAL GLAM",      title: "Red Carpet",     desc: "High-contrast contouring and editorial-grade pigments designed for the lens and the spotlight.", price: "₹12,000" },
  { id: "03", tag: "MINIMALIST ART",      title: "Ethereal Glass", desc: "Focus on molecular hydration and a lit-from-within translucent finish for that natural look.", price: "₹8,000" },
  { id: "04", tag: "SIGNATURE STYLING",   title: "Hair Couture",   desc: "Precision-crafted hairstyles tailored to your face structure, blending volume, texture, and elegance.", price: "₹5,000" },
];

export default function ProfessionalMakup() {
  const [index, setIndex]         = useState(0);
  const [active, setActive]       = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const nextSlide = () => setIndex((p) => (p + 1) % DATA.length);
  const prevSlide = () => setIndex((p) => (p - 1 + DATA.length) % DATA.length);
  const current   = DATA[index];

  return (
    <>
      <style>{`
        @keyframes neon-glow-1  { 0%,100%{opacity:.5}  50%{opacity:1} }
        @keyframes neon-glow-2  { 0%,100%{opacity:.4}  50%{opacity:.8} }
        @keyframes neon-pulse   { 0%,100%{transform:scale(1);opacity:.6} 50%{transform:scale(1.1);opacity:1} }
        @keyframes ticker       { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        .neon-1    { animation: neon-glow-1 3s ease-in-out infinite; }
        .neon-2    { animation: neon-glow-2 4s ease-in-out infinite .5s; }
        .neon-pulse{ animation: neon-pulse  3.5s ease-in-out infinite; }

        /* ── fluid section padding ── */
        .sp  { padding-left: clamp(20px,6vw,96px);  padding-right: clamp(20px,6vw,96px); }
        .spl { padding-left: clamp(20px,9vw,140px); padding-right: clamp(20px,9vw,140px); }

        .service-card {
          position:relative; background:rgba(255,255,255,.7);
          backdrop-filter:blur(8px); border:1px solid #e7e3dc;
          border-radius:28px; padding:clamp(20px,4vw,36px);
          transition:transform .3s ease, box-shadow .3s ease;
          overflow:hidden;
        }
        .service-card:hover { transform:translateY(-6px); box-shadow:0 24px 60px rgba(236,72,153,.1); }
        .service-card::after {
          content:''; position:absolute; inset:0; border-radius:28px;
          background:linear-gradient(135deg,rgba(251,207,232,.25),transparent);
          opacity:0; transition:opacity .3s; pointer-events:none;
        }
        .service-card:hover::after { opacity:1; }

        .step-row {
          display:flex; align-items:center; justify-content:space-between;
          padding:clamp(14px,3vw,22px); border-radius:18px; border:1px solid #ede9e4;
          cursor:pointer; transition:background .25s, box-shadow .25s;
        }
        .step-row.active, .step-row:hover { background:white; box-shadow:0 6px 28px rgba(0,0,0,.07); }

        .book-cta {
          display:inline-flex; align-items:center; gap:8px;
          background:#000; color:#fff; border:none; cursor:pointer;
          padding:14px clamp(24px,4vw,40px); border-radius:50px;
          font-size:11px; letter-spacing:.25em; text-transform:uppercase;
          transition:background .3s, transform .25s;
          position:relative; overflow:hidden;
        }
        .book-cta::after {
          content:''; position:absolute; top:0; left:-100%; width:60%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.15),transparent);
          transition:left .5s ease;
        }
        .book-cta:hover { background:#111; transform:translateY(-2px); }
        .book-cta:hover::after { left:160%; }

        .ticker-wrap  { overflow:hidden; background:#fff8f0; padding:9px 0; border-top:1px solid #f0e0e8; border-bottom:1px solid #f0e0e8; }
        .ticker-inner { display:flex; width:max-content; animation:ticker 20s linear infinite; white-space:nowrap; }
        .ticker-inner:hover { animation-play-state:paused; }
        .ticker-item  { font-size:10px; letter-spacing:.3em; text-transform:uppercase; color:#be185d; padding:0 32px; opacity:.7; }

        /* ── hero two-column layout ── */
        .hero-inner {
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:clamp(24px,4vw,40px);
          width:100%;
          max-width:1100px;
        }
        @media(min-width:768px){
          .hero-inner {
            flex-direction:row;
            align-items:center;
            justify-content:space-between;
            gap:clamp(32px,5vw,56px);
          }
          .hero-left  { flex:1 1 0; max-width:520px; text-align:left; }
          .hero-right { flex:0 0 auto; }
        }
        @media(max-width:767px){
          .hero-left  { text-align:center; width:100%; }
          .hero-right { width:100%; display:flex; justify-content:center; }
        }

        @media(max-width:640px){
          .slider-side { display:none; }
          .slider-main { width:90vw !important; max-width:340px; height:420px !important; }
          .content-card { width:90vw !important; max-width:320px; }
        }
      `}</style>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        className="relative flex items-center justify-center py-20 md:py-32 sp overflow-hidden"
        style={{ background: "linear-gradient(to right,#efa4bd83,#b69fa735,#f7bc979f)" }}
      >
        {/* neon bg blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="neon-1 absolute top-20 left-10 w-40 h-40 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="neon-2 absolute top-1/3 right-20 w-60 h-60 rounded-full bg-purple-500/15 blur-3xl" />
          <div className="neon-pulse absolute bottom-32 left-1/3 w-48 h-48 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="neon-1 absolute top-24 left-16 w-32 h-32 rounded-full border-2 border-pink-400/40 bg-gradient-to-br from-pink-500/20 to-pink-300/5 backdrop-blur-md shadow-[0_0_30px_rgba(236,72,153,0.4)]" />
          <div className="neon-2 absolute top-1/4 right-20 w-40 h-40 rounded-full border-2 border-purple-400/30 bg-gradient-to-br from-purple-500/15 to-fuchsia-300/5 backdrop-blur-md shadow-[0_0_35px_rgba(168,85,247,0.3)]" />
          <div className="neon-pulse absolute bottom-40 left-1/4 w-28 h-28 rounded-full border border-fuchsia-400/35 bg-gradient-to-br from-fuchsia-500/15 to-pink-300/5 backdrop-blur-md shadow-[0_0_25px_rgba(236,72,153,0.3)]" />
          <div className="neon-1 absolute bottom-24 right-1/3 w-36 h-36 rounded-full border-2 border-pink-400/25 bg-gradient-to-br from-pink-400/12 to-transparent backdrop-blur-md" />
          <div className="neon-2 absolute top-1/2 left-1/3 w-24 h-24 rounded-full border border-purple-400/40 bg-gradient-to-br from-purple-500/20 to-transparent backdrop-blur-md" />
        </div>

        {/* watermark */}
        <h1 className="absolute text-[100px] md:text-[200px] font-serif text-white/10 left-1/2 -translate-x-1/2 select-none pointer-events-none leading-none">
          LUMOU
        </h1>

        {/* ── two-column hero ── */}
        <div className="hero-inner relative z-10">

          {/* LEFT — text */}
          <div className="hero-left">
            <p className="text-[10px] tracking-[0.35em] text-yellow-600 mb-4 uppercase">— Elite Artistry</p>

            <h1 className="font-serif leading-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl text-[#4b3b39]">Divine</span>
              <span className="block text-4xl sm:text-5xl md:text-6xl text-pink-500 italic">Artistry</span>
            </h1>

            <p className="text-gray-600 mt-5 text-sm leading-relaxed border-l-2 border-yellow-600 pl-4 max-w-sm mx-auto md:mx-0 line-clamp-3">
              Redefining elegance through precision brushwork. We sculpt your vision into a cinematic reality with world-class pigments.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-5 mt-7 flex-wrap">
              <button
                onClick={() => bookWA("Makeup Look")}
                className="bg-yellow-500 text-black px-7 py-3 rounded-full text-[10px] tracking-widest hover:bg-yellow-400 active:scale-95 transition"
              >
                BOOK A LOOK ↗
              </button>
              <div onClick={() => setShowVideo(true)} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 group-hover:border-pink-500 transition">
                  <FaPlay className="text-[9px] ml-0.5 group-hover:text-pink-500 transition" />
                </div>
                <span className="text-gray-600 text-[10px] tracking-widest group-hover:text-pink-500 transition">VIDEO REEL</span>
              </div>
            </div>
          </div>

          {/* RIGHT — card */}
          <div className="hero-right">
            <div className="relative">
              <div className="group w-[260px] sm:w-[300px] md:w-[320px] h-[340px] sm:h-[380px] md:h-[420px] border border-[#5a1a1f] rounded-[30px] md:rounded-[40px] bg-[#1a0b0d] relative overflow-hidden shadow-[0_0_40px_rgba(255,0,60,0.15)]">
                {showVideo ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    poster="/pexels-ritam-das-113941289-9901800.jpg"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src="/videos/video7.mp4" type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src="/photos/photoBridalMakeup.jpg"
                    alt="Makeup Look"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />
                <div className="absolute inset-0 rounded-[30px] md:rounded-[40px] border border-[#7a2a30] opacity-40" />
              </div>

              {/* badge */}
              <div className="absolute bottom-3 right-3 bg-[#2a1416] border border-[#5a1a1f] px-3 py-2 rounded-lg backdrop-blur-md">
                <p className="text-[9px] text-yellow-500 tracking-widest">{showVideo ? "PORTFOLIO" : "STUDIO READY"}</p>
                <p className="text-white text-xs font-semibold">{showVideo ? "Showcase" : "4K HD Finish"}</p>
              </div>

              {/* close button when video playing */}
              {showVideo && (
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition text-sm"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ticker */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...Array(2)].map((_, ri) =>
            ["Royal Bridal","Editorial Glam","Ethereal Glass","Hair Couture","HD Finish","24K Glow","Precision Artistry","Luxury Pigments"].map((t, i) => (
              <span key={`${ri}-${i}`} className="ticker-item">
                {t}<span style={{ margin:"0 -24px", opacity:.4 }}> ✦ </span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════
          SIGNATURE TRANSFORMATIONS
      ══════════════════════════════════════ */}
      <section className="bg-[#f4f1ec] py-16 sm:py-20 md:py-24 sp">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <p className="text-[10px] tracking-[0.4em] text-gray-500 mb-3 uppercase">— Service Portfolio</p>
            <h2 className="font-serif leading-none">
              <span className="block text-3xl sm:text-4xl md:text-6xl text-black">Signature</span>
              <span className="block text-3xl sm:text-4xl md:text-6xl text-pink-600 italic">Transformations</span>
            </h2>
            <p className="max-w-xs text-xs text-gray-500 border-l-2 border-pink-500 pl-4 mt-5 leading-relaxed">
              Where luxury meets precision. We use the dark's depth to highlight your inner radiance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {services.map((item, i) => (
              <div key={i} className="service-card">
                <p className="text-[9px] tracking-[0.3em] text-pink-500 mb-3 uppercase">{item.tag}</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-black">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between mt-5 sm:mt-6">
                  <p className="text-lg font-medium text-black">{item.price}</p>
                  <button
                    onClick={() => bookWA(item.title)}
                    className="text-[9px] tracking-widest px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white active:scale-95 transition"
                  >
                    BOOK NOW ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ART OF TRANSFORMATION — SLIDER
      ══════════════════════════════════════ */}
      <section className="relative bg-[#14070d] text-white py-16 sm:py-20 md:py-24 sp overflow-hidden">
        <div className="text-center mb-12 sm:mb-16 relative z-10">
          <p className="text-[10px] sm:text-sm tracking-[0.3em] text-yellow-500 mb-2 uppercase">The Art</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light">
            Art of <span className="italic text-pink-500">Transformation</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 relative z-10">

          {/* Before — desktop only */}
          <div className="slider-side w-[170px] h-[400px] relative rounded-2xl overflow-hidden border border-white/10 opacity-70 scale-95 flex-shrink-0">
            <Image key={current.before} src={current.before} alt="before" fill className="object-cover grayscale" />
          </div>

          {/* Main */}
          <div className="slider-main relative w-[88vw] max-w-[380px] h-[460px] rounded-[28px] sm:rounded-[30px] overflow-hidden border border-yellow-500/30 shadow-[0_20px_80px_rgba(255,0,80,0.15)] group flex-shrink-0">
            <Image key={current.after} src={current.after} alt="after" fill
              className="object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 w-full px-5 py-4">
              <p className="text-yellow-400 text-[10px] tracking-widest">AFTER</p>
              <p className="text-white text-base font-medium">HD Finish + 24hr Stay</p>
            </div>
          </div>

          {/* Content card */}
          <div className="content-card w-[88vw] max-w-[300px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl flex-shrink-0">
            <p className="text-[9px] tracking-widest text-pink-400 mb-2 uppercase">{current.tag}</p>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">{current.title}</h3>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">{current.desc}</p>
            <button
              onClick={() => bookWA(current.title)}
              className="w-full border border-yellow-500 text-yellow-400 py-2.5 rounded-full hover:bg-yellow-500 hover:text-black active:scale-95 transition-all duration-300 text-sm tracking-wider"
            >
              BOOK THIS LOOK →
            </button>
          </div>
        </div>

        {/* Nav */}
        <div className="flex justify-center mt-10 sm:mt-14 gap-4 z-10 relative">
          {[{ label: "‹", fn: prevSlide }, { label: "›", fn: nextSlide }].map(({ label, fn }) => (
            <button key={label} onClick={fn}
              className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 active:scale-95 transition text-lg">
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          SUPREME ARTISTRY — RITUAL
      ══════════════════════════════════════ */}
      <section className="bg-[#f5f1ef] py-16 sm:py-20 md:py-24 sp relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 w-full max-w-7xl mx-auto items-center">

          {/* Left */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-pink-500 mb-4">✦ The Ritual</p>

            <h1 className="font-serif leading-tight">
              <span className="block text-5xl sm:text-6xl md:text-7xl text-black italic">Supreme</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl text-pink-500 italic">Artistry</span>
            </h1>

            <div className="mt-10 space-y-3">
              {steps.map((item, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`step-row ${active === i ? "active" : ""}`}
                >
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <span className="text-gray-400 italic text-sm flex-shrink-0">{item.id}</span>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-medium text-black">{item.title}</h3>
                      <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); bookWA(item.title); }}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-pink-100 flex items-center justify-center flex-shrink-0 ml-3 transition"
                  >
                    <GoArrowUpRight size={15} />
                  </button>
                </div>
              ))}
            </div>

            <button onClick={() => bookWA("Makeup Ritual")} className="book-cta mt-10">
              Book The Ritual <span>→</span>
            </button>
          </div>

          {/* Right */}
          <div className="relative">
            <div
              className="w-full rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-xl relative"
              style={{
                height: "clamp(320px,55vw,520px)",
                backgroundImage: "url('https://images.unsplash.com/photo-1665960211264-5e0a7112bacd?q=80&w=1170&auto=format&fit=crop')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10" />

              <div className="absolute top-5 right-5 bg-white rounded-2xl px-4 py-3 shadow-md text-center">
                <div className="text-yellow-500 text-sm">★★★★★</div>
                <p className="text-xs font-medium mt-0.5">Premium Experience</p>
              </div>

              <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 rounded-full backdrop-blur-xl bg-white/40 border border-white/50" />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-xs tracking-[0.4em] text-gray-400 flex items-center justify-center gap-3 flex-wrap">
          <span>❤</span>
          <span>THE MASTER'S TOUCH • EST. 2015 • LUXURY STANDARD</span>
          <span>❤</span>
        </div>
      </section>
    </>
  );
}