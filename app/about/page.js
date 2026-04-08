"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";


export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
<section className="relative bg-[#14070d] text-white overflow-hidden" style={{ background: "linear-gradient(to right, #efa4bd83, #b69fa735, #f7bc979f)" }}>
  {/* Base radial */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,0,80,0.08),transparent_60%)]" />

  {/* Ambient blobs */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-80" />
    <div className="absolute right-10 top-16 h-72 w-72 rounded-full bg-pink-200/15 blur-3xl opacity-80" />
    <div
      className="absolute left-1/2 top-1/3 h-[24rem] w-[24rem] rounded-full bg-white/10 backdrop-blur-2xl opacity-70"
      style={{ transform: "translateX(-50%) rotate(18deg)", clipPath: "ellipse(42% 55% at 50% 50%)" }}
    />
    <div
      className="absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl opacity-90"
      style={{ clipPath: "polygon(0 0, 100% 15%, 85% 100%, 0 85%)" }}
    />
  </div>

  {/* Side bleeds */}
  <div className="absolute inset-y-0 left-0 w-[34%] overflow-hidden pointer-events-none">
    <div className="absolute inset-y-0 left-0 w-full bg-pink-500/10 blur-3xl" style={{ clipPath: "polygon(0 0, 100% 8%, 70% 42%, 100% 84%, 0 100%)" }} />
  </div>
  <div className="absolute inset-y-0 right-0 w-[34%] overflow-hidden pointer-events-none">
    <div className="absolute inset-y-0 right-0 w-full bg-yellow-500/10 blur-3xl" style={{ clipPath: "polygon(100% 0, 0 8%, 30% 42%, 0 84%, 100% 100%)" }} />
  </div>

  {/* ── LIQUID GLASS LAYER between the two cards ── */}
  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
    {/* Primary glass orb — sits dead-center between the two panels */}
    <div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "260px",
        height: "320px",
        borderRadius: "50% 44% 56% 40% / 48% 52% 40% 56%",
        background: "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,200,220,0.12) 40%, rgba(255,255,255,0.06) 100%)",
        backdropFilter: "blur(28px) saturate(1.6)",
        WebkitBackdropFilter: "blur(28px) saturate(1.6)",
        border: "1px solid rgba(255,255,255,0.28)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(255,200,180,0.2), 0 8px 40px rgba(255,100,150,0.12)",
      }}
    />

    {/* Inner highlight streak — gives the "liquid" refraction feel */}
    <div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
        transform: "translate(-42%, -60%) rotate(-20deg)",
        width: "80px",
        height: "180px",
        borderRadius: "50%",
        background: "linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 100%)",
        filter: "blur(6px)",
      }}
    />

    {/* Secondary small glass bubble — bottom-center */}
    <div
      className="absolute"
      style={{
        left: "50%",
        top: "62%",
        transform: "translate(-50%, 0)",
        width: "110px",
        height: "110px",
        borderRadius: "56% 44% 60% 40% / 50% 55% 45% 52%",
        background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,220,200,0.08) 100%)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
      }}
    />

    {/* Top-center tiny glass bead */}
    <div
      className="absolute"
      style={{
        left: "50%",
        top: "24%",
        transform: "translate(-30%, 0)",
        width: "64px",
        height: "64px",
        borderRadius: "52% 48% 44% 56% / 48% 54% 46% 52%",
        background: "linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,180,210,0.1) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    />
  </div>
  {/* ── END LIQUID GLASS LAYER ── */}

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
    {/* LEFT */}
    <div className="relative z-10 text-center lg:text-left rounded-[2rem] border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.22)] p-8 md:p-10">
      <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 md:mb-8">
        <div className="w-8 md:w-10 h-[1px] bg-yellow-600" />
        <p className="text-[11px] md:text-[12px] tracking-[0.25em] md:tracking-[0.35em] text-yellow-600 uppercase">
          The Midnight Legacy
        </p>
      </div>

      <h1 className="font-serif leading-tight text-[#4b3b39] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        <span>True </span>
        <span className="text-pink-500 italic">Artistry</span>
        <br />
        <span className="text-[#4b3b39]">Beyond Borders</span>
      </h1>

      <p className="mt-6 md:mt-8 text-gray-800 max-w-md mx-auto lg:mx-0 text-sm md:text-[15px] leading-relaxed">
        We don't just provide services; we curate midnight masterpieces.
        Since 2026, NK Parlour has been the sanctuary of luxury hair and skin couture.
      </p>

      {/* ── FLIP CARD replacing the old button ── */}
      <div className="mt-10 flex justify-center lg:justify-start" style={{ perspective: "1000px" }}>
        <div
          className="relative w-64 h-32 cursor-pointer"
          style={{ transformStyle: "preserve-3d", transition: "transform 0.7s ease" }}
          onMouseEnter={e => e.currentTarget.style.transform = "rotateY(180deg)"}
          onMouseLeave={e => e.currentTarget.style.transform = "rotateY(0deg)"}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 rounded-2xl flex items-center gap-5 px-6"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              
              
              
            }}
          >
            <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full border border-gray-500 text-black transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500">
              <FaArrowRight />
            </div>
            <span className="text-[11px] tracking-[0.35em] text-black uppercase font-bold">
              OUR PHILOSOPHY
            </span>
          </div>

          {/* BACK */}
          <div
                  style={{
                    position: "absolute", inset: 0,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: "linear-gradient(135deg, #3d2a2a 0%, #7a2d52 55%, #b5476e 100%)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "18px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 24px",
                    textAlign: "center",
                    gap: "10px",
                  }}
                >
                  <div style={{ width: "32px", height: "2px", background: "#facc15", borderRadius: "2px" }} />
                  <p style={{
                    fontSize: "22px",
                    fontFamily: "serif",
                    fontStyle: "italic",
                    color: "#fff",
                    lineHeight: 1.35,
                    margin: 0,
                  }}>
                    "Beauty nurtured<br />with love."
                  </p>
                  <p style={{ fontSize: "10px", letterSpacing: "3px", color: "#f9a8d4", margin: 0 }}>
                    — NK PARLOUR
                  </p>
                </div>
        </div>
      </div>
      {/* ── END FLIP CARD ── */}
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center">
      <div className="relative p-0.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.18)] group cursor-pointer">
        <div className="rounded-full overflow-hidden bg-black">
          <img
            src="https://images.pexels.com/photos/36846532/pexels-photo-36846532/free-photo-of-fashionable-woman-holding-lipstick-in-hand.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Hair styling"
            width={410}
            height={560}
            className="object-cover w-full h-full transition-all ease-in-out duration-[1200ms] group-hover:brightness-110 group-hover:scale-105"
          />
        </div>

        {/* EST BOX */}
        <div className="absolute left-[-30px] md:left-[-50px] top-1/2 -translate-y-1/2 bg-[#221218] w-[80px] h-[110px] md:w-[100px] md:h-[130px] rounded-xl md:rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-300 ease-out">
          <span className="text-yellow-400 text-sm md:text-lg">✦</span>
          <span className="font-serif text-sm md:text-xl mt-1">Est.</span>
          <span className="text-yellow-500 text-[10px] md:text-sm tracking-[0.2em] mt-1">2026</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* SECOND SECTION */}
      <section className="bg-[#f5efed] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* IMAGE */}
          <div className="relative flex justify-center order-1 lg:order-none">
            <div className="relative w-full max-w-[420px] md:max-w-[500px] group cursor-pointer">
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[40px_15px_40px_15px] md:rounded-[60px_20px_60px_20px] shadow-2xl">
                <img
                  src="https://i.pinimg.com/736x/f8/19/e8/f819e88f63269d0ab8602f59fd62d615.jpg"
                  alt="Makeup Artist"
                  width={600}
                  height={700}
                  className={`object-cover w-full h-full transition-all ease-in-out duration-[1200ms]
          group-hover:brightness-110 group-hover:scale-105
        `}
                />
              </div>

              {/* FLOATING BOX */}
              <div
                className="absolute bottom-4 md:bottom-6 
        -right-4 md:-right-10 lg:-right-14
        bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl
        px-6 md:px-8 py-4 md:py-6 text-center max-w-[200px] w-full
        border border-white/40 z-10
        transition-all duration-300 ease-out
        group-hover:-translate-y-2 group-hover:brightness-105 group-hover:shadow-2xl"
              >
                <h3 className="text-2xl md:text-3xl font-serif text-[#4b3b39]">
                  10+
                </h3>
                <p className="text-[8px] md:text-[10px] tracking-[3px] md:tracking-[4px] text-gray-400 mt-1 md:mt-2">
                  DECADE OF LUXURY RITUALS
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="text-center lg:text-left">
            <p className="text-[10px] md:text-[12px] tracking-[3px] md:tracking-[4px] text-[#c9a46c] mb-3 md:mb-4">
              OUR PHILOSOPHY
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#4b3b39] leading-tight">
              Where Soul Meets
              <span className="block text-pink-500 italic mt-2">Artistry</span>
            </h2>

            <p className="mt-4 md:mt-6 text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 text-sm md:text-base">
              At NK Parlour, we treat beauty as a silent language. Our sanctuary is
              crafted for those who seek more than a service—they seek a
              transformation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10 text-left">
              <div>
                <p className="text-[10px] md:text-[12px] tracking-[2px] md:tracking-[3px] text-[#c9a46c] mb-2">
                  • BESPOKE MISSION
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  Tailoring luxury experiences that resonate with your unique
                  frequency.
                </p>
              </div>

              <div>
                <p className="text-[10px] md:text-xs tracking-[2px] md:tracking-[3px] text-[#c9a46c] mb-2">
                  • PUREST ESSENCE
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  Global standards met with organic, dermal-approved apothecary.
                </p>
              </div>
            </div>

            <a href="/gallery">
              <button className="mt-8 md:mt-12 border border-[#4b3b39] px-6 md:px-10 py-3 md:py-4 text-[10px] md:text-xs tracking-[3px] md:tracking-[4px] text-[#4b3b39] hover:bg-[#4b3b39] hover:text-white transition-all duration-300">
                EXPLORE THE LEGACY →
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}