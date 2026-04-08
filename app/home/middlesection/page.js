"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const TAG_ICON = {
  "HAIR ART":     { icon: "✂", color: "#e63f6e" },
  "SKIN THERAPY": { icon: "✦", color: "#c9a646" },
  "MAKEUP ART":   { icon: "♡", color: "#9e8e7e" },
  "FACIAL":       { icon: "✦", color: "#c9a646" },
  "BRIDAL":       { icon: "♡", color: "#d63f6e" },
  default:        { icon: "✦", color: "#c9a646" },
};

export default function MiddleShowcase() {
  const [cards, setCards]       = useState([]);
  const [tapped, setTapped]     = useState(null); // tracks tapped card id on touch

  useEffect(() => {
    fetch("/data/cards.json")
      .then((r) => r.json())
      .then((data) => setCards(data));
  }, []);

  const handleWhatsApp = (card) => {
    if (typeof window === "undefined") return;
    const message = `Hi NK Parlour, I want to book:\n\nService: ${card.title || ""}\nDetails: ${card.tag || ""}${card.price ? `\nPrice: ${card.price}` : ""}`;
    window.open(`https://wa.me/918789999343?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const handleCardTap = (id) => {
    // toggle: first tap reveals, second tap on button fires whatsapp
    setTapped((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-[#faf7f4] px-6 sm:px-10 lg:px-16 pt-20 pb-28 overflow-hidden">

      {/* subtle background text */}
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 text-[120px] font-serif text-[#00000008] select-none pointer-events-none rotate-90">
        NISHA PARLOUR
      </div>

      <div className="max-w-screen-lg mx-auto relative z-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24">
          <div>
            <p className="text-[11px] tracking-[0.38em] uppercase mb-6 flex items-center gap-2 text-[#c9a646]">
              ★ THE MASTER SUITE
            </p>
            <h1
              className="leading-[0.9] text-[#3a2a2a]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(60px, 8vw, 110px)",
                letterSpacing: "-0.02em",
              }}
            >
              Bespoke{" "}<br/>
              <span className="italic text-[#d63f6e]">Artistry.</span>
            </h1>
          </div>

          <div className="mt-12 lg:mt-28 max-w-[220px]">
            <div className="mb-3 w-12 h-[1px] bg-[#c9a646]" />
            <p className="text-[10px] tracking-[0.22em] leading-[2.1] text-[#9e8e7e]">
              INDIA'S LEADING SANCTUARY
              <br />FOR COUTURE BEAUTY AND
              <br />DERMATOLOGICAL PRECISION.
            </p>
            <div className="mt-3 w-12 h-[1px] bg-[#c9a646]" />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cards.map((card) => {
            const { icon, color } = TAG_ICON[card.tag] ?? TAG_ICON.default;
            const isActive = tapped === card.id;

            return (
              <div
                key={card.id}
                onClick={() => handleCardTap(card.id)}
                className={`group relative rounded-[30px] overflow-hidden transition-all duration-500 cursor-pointer
                  ${isActive ? "-translate-y-2" : "hover:-translate-y-2"}`}
                style={{
                  boxShadow: isActive
                    ? "0 30px 60px -15px rgba(0,0,0,0.35), 0 0 30px rgba(201,166,70,0.35)"
                    : "0 30px 60px -15px rgba(0,0,0,0.35)",
                  border: "1px solid rgba(201,166,70,0.35)",
                }}
              >

                {/* GOLD GLOW — desktop hover only (touch uses isActive via boxShadow above) */}
                <div
                  className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  style={{ boxShadow: "0 0 30px rgba(201,166,70,0.35)" }}
                />

                <div className="relative rounded-[30px] overflow-hidden">

                  {/* IMAGE */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={420}
                    className={`w-full h-[420px] object-cover transition-transform duration-[1200ms] ease-out
                      ${isActive ? "scale-[1.06]" : "group-hover:scale-[1.06]"}`}
                  />

                  {/* pink overlay */}
                  <div
                    className={`absolute inset-0 pointer-events-none bg-gradient-to-t from-[#d63f6e]/70 via-[#d63f6e]/20 to-transparent transition duration-500
                      ${isActive ? "opacity-90" : "opacity-80 group-hover:opacity-90"}`}
                  />

                  {/* dark overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  {/* TAG */}
                  <div className="absolute top-4 left-4 px-3 py-[5px] text-[9px] tracking-[0.22em] uppercase text-white rounded-full backdrop-blur-md bg-white/20 border border-white/30">
                    {card.tag}
                  </div>

                  {/* ICON */}
                  <div
                    className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl backdrop-blur-md transition-all duration-500
                      ${isActive ? "rotate-0 scale-110" : "rotate-[-20deg] group-hover:rotate-0 group-hover:scale-110"}`}
                    style={{
                      background: "rgba(255,255,255,0.9)",
                      border: "1px solid rgba(255,255,255,0.6)",
                      color,
                    }}
                  >
                    {icon}
                  </div>

                  {/* TITLE */}
                  <div
                    className={`absolute left-6 right-6 text-white transition-all duration-500
                      ${isActive ? "bottom-24" : "bottom-20 group-hover:bottom-24"}`}
                  >
                    <p
                      className="leading-[1.2]"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "22px",
                        textShadow: "0 2px 10px rgba(0,0,0,0.35)",
                      }}
                    >
                      {card.title}
                    </p>
                  </div>

                  {/* RESERVE ROW — hover on desktop, tap-reveal on touch */}
                  <div
                    className={`absolute bottom-6 left-6 right-6 flex justify-between items-center transition-all duration-500
                      ${isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0"
                      }`}
                  >
                    <p className="text-sm font-medium text-[#ffd1dc]">
                      {card.price}
                    </p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // don't re-toggle the card
                        handleWhatsApp(card);
                      }}
                      className="text-[10px] px-4 py-2 rounded-full font-semibold tracking-widest bg-white text-[#2b1a1a] hover:bg-[#c9a646] hover:text-white transition-all duration-300"
                    >
                      RESERVE →
                    </button>
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