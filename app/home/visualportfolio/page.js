"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const TABS = ["ALL", "BRIDAL", "HAIR", "SKIN"];

const PORTFOLIO = [
  {
    id: 1,
    title: "The Royal Bride",
    category: "BRIDAL",
    image: "https://plus.unsplash.com/premium_photo-1724762183115-12787b04eadc",
  },
  {
    id: 2,
    title: "Silk Finish Balayage",
    category: "HAIR",
    tag: "HAIR",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  },
  {
    id: 3,
    title: "Hydra-Glow Ritual",
    category: "SKIN",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  },
  {
    id: 4,
    title: "Traditional Henna",
    category: "BRIDAL",
    tag: "BRIDAL",
    image: "https://plus.unsplash.com/premium_photo-1720798651667-992d38944619",
  },
  {
    id: 5,
    title: "Signature Styling",
    category: "HAIR",
    image: "https://images.unsplash.com/flagged/photo-1579276621976-0b8a0a354998",
  },
  {
    id: 6,
    title: "Oxygen Therapy",
    category: "SKIN",
    tag: "SKIN",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  },
];

export default function VisualPortfolio() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filtered =
    activeTab === "ALL"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === activeTab);

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-3"
            style={{ color: "#c8974a" }}
          >
            Crafting Perfection
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              color: "#2b1a1a",
              lineHeight: 1.15,
            }}
          >
            Our{" "}
            <span style={{ color: "#2b1a1a" }}>
              Visual  <span className="italic" style={{ color: "#d63f6e" }}>
                Portfolio
              </span>
            </span>
          </h2>
          {/* Gold underline */}
          <div
            className="mx-auto mt-4"
            style={{ width: "48px", height: "2px", backgroundColor: "#c8974a" }}
          />
        </div>

        {/* ── Filter tabs ── */}
        <div className="flex items-center justify-center gap-8 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="text-[11px] font-semibold tracking-[0.22em] uppercase transition-all duration-200 pb-1"
              style={{
                color: activeTab === tab ? "#2b1a1a" : "#b0a0a0",
                borderBottom:
                  activeTab === tab ? "2px solid #2b1a1a" : "2px solid transparent",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        {/* ── Footer row ── */}
        <div className="flex items-center justify-between mt-14">
          {/* Instagram follow */}
          <a
            href="https://instagram.com/nk_beautysalon_academy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div
              className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
              style={{ border: "1.5px solid #d0c0c0" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9e8e7e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#9e8e7e" stroke="none" />
              </svg>
            </div>

            <div>
              <p className="text-[9px] font-bold tracking-[0.2em] uppercase">
                Follow Our Journey
              </p>
              <p className="text-[10px] group-hover:text-[#d63f6e]">
                @nk_beautysalon_academy
              </p>
            </div>
          </a>





          {/* Visit full gallery CTA */}
          <Link
            href="/gallery"
            className="flex items-center gap-3 px-7 py-3 text-[11px] font-bold tracking-[0.22em] uppercase text-white transition-all duration-300 hover:opacity-90"
            style={{
              background: "#2b1a1a",
              borderRadius: "999px",
            }}
          >
            Visit Full Gallery
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

function PortfolioCard({ item }) {
  const ROUTES = {
    HAIR: "/services/hair-couture",
    SKIN: "/services/skin-aesthetics",
    BRIDAL: "/services/professional-makeup",
  };

  const href = ROUTES[item.category] || "/services";

  return (
    <Link href={href}>

      <div
        className="group relative overflow-hidden cursor-pointer"
        style={{ borderRadius: "16px", height: "260px" }}
      >
        {/* Image */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Category tag — top left (only on some cards as in design) */}
        {item.tag && (
          <div
            className="absolute top-4 left-4 px-3 py-[4px] text-[8px] font-bold tracking-[0.2em] uppercase text-white"
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "999px",
            }}
          >
            {item.tag}
          </div>
        )}

        {/* Title + View Detail */}
        <div className="absolute bottom-4 left-4 right-4">
          <p
            className="text-white font-serif text-[17px] leading-tight mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {item.title}
          </p>
          <p
            className="flex items-center gap-1 text-[9px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            View Detail <span>→</span>
          </p>
        </div>
      </div>
    </Link>
  );
}