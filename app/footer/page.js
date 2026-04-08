"use client";

import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const privacyPoints = [
  "We never share your personal data with third parties.",
  "Booking details are used solely for appointment management.",
  "You may request deletion of your data at any time.",
];

const termsPoints = [
  "Appointments cancelled <2 hrs prior may incur a fee.",
  "Services are exclusively for ladies.",
  "NK Beauty reserves the right to refuse service.",
];

function TooltipLink({ href, label, points }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <Link
        href={href}
        className="hover:text-white transition-colors duration-200"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      >
        {label}
      </Link>

      {/* Tooltip */}
      <div
        className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-56
          bg-[#1a1a1e] border border-[#d4af37]/30 rounded-md shadow-xl
          px-4 py-3 pointer-events-none z-50
          transition-all duration-200 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
      >
        {/* Arrow */}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3
          bg-[#1a1a1e] border-r border-b border-[#d4af37]/30 rotate-45" />

        <ul className="space-y-2">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-[10px] text-gray-400 leading-relaxed">
              <span className="mt-1 w-1 h-1 rounded-full bg-[#d4af37] shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#0c0c0f] via-[#111114] to-[#0c0c0f] text-gray-300">

      <div className="max-w-screen-xl mx-auto px-5 sm:px-10 py-14">

        {/* ── TOP GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* ── BRAND ── */}
          <div className="max-w-md">
            <p className="text-[10px] tracking-[0.4em] text-[#d4af37] mb-4">
              EXCELLENCE IN ARTISTRY
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              <span className="text-white">NK </span>
              <span className="bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text italic font-medium">
                BEAUTY
              </span>
            </h1>

            <p className="text-[11px] tracking-widest text-gray-500 mt-1 mb-1">
              Salon &amp; Academy
            </p>

            <p className="text-[9px] tracking-[0.25em] text-[#d4af37]/70 uppercase mb-4">
              Trained by VLCC · Certified by SS Bollywood Academy
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              Beauty is not just a service — it's an experience we craft with
              precision, passion, and artistry. Exclusively for ladies.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {/* Instagram — nk_beautysalon_academy */}
              <a
                href="https://www.instagram.com/nk_beautysalon_academy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full
                  border border-gray-700 text-gray-300
                  hover:border-[#d4af37] hover:text-[#d4af37]
                  hover:bg-[#d4af37]/10 transition"
              >
                <FaInstagram className="text-sm" />
              </a>

              {/* Facebook — no handle known, leave src empty */}
              <a
                href=""
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full
                  border border-gray-700 text-gray-300
                  hover:border-[#d4af37] hover:text-[#d4af37]
                  hover:bg-[#d4af37]/10 transition pointer-events-none opacity-40"
                tabIndex={-1}
              >
                <FaFacebookF className="text-sm" />
              </a>

              {/* YouTube — no handle known, leave src empty */}
              <a
                href=""
                aria-label="YouTube"
                className="w-9 h-9 flex items-center justify-center rounded-full
                  border border-gray-700 text-gray-300
                  hover:border-[#d4af37] hover:text-[#d4af37]
                  hover:bg-[#d4af37]/10 transition pointer-events-none opacity-40"
                tabIndex={-1}
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* ── RIGHT SIDE ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">

            {/* SERVICES — from navbar dropdown */}
            <div>
              <h3 className="text-[11px] tracking-[0.3em] text-[#d4af37] mb-4">
                SERVICES
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/services/hair-courture" className="hover:text-[#d4af37] transition">
                    Hair Courture
                  </Link>
                </li>
                <li>
                  <Link href="/services/skin-aesthetics" className="hover:text-[#d4af37] transition">
                    Skin Aesthetics
                  </Link>
                </li>
                <li>
                  <Link href="/services/professional-makeup" className="hover:text-[#d4af37] transition">
                    Professional Makeup
                  </Link>
                </li>
              </ul>
            </div>

            {/* PARLOUR — from navbar links */}
            <div>
              <h3 className="text-[11px] tracking-[0.3em] text-[#d4af37] mb-4">
                PARLOUR
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="hover:text-[#d4af37] transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#d4af37] transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#d4af37] transition">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#d4af37] transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-[11px] tracking-[0.3em] text-[#d4af37] mb-4">
                CONTACT
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                Shop No. 1, Ground Floor<br />
                Kh No. 409/2, Laxmi Vihar<br />
                Burari, Near Burari Govt. Hospital<br />
                Monday Market Road<br />
                Delhi – 110084
              </p>

              <a
                href="tel:+918178999443"
                className="block mt-4 text-lg font-semibold text-white hover:text-[#d4af37] transition"
              >
                +91 81789 99443
              </a>

              <p className="mt-1 text-xs text-gray-500 tracking-widest">
                HAIR · BEAUTY · NAIL · SKIN · MAKEUP
              </p>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

        {/* ── Bottom ── */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">

          <p>© 2025 NK Beauty Salon &amp; Academy</p>

          <div className="flex gap-6">
            <TooltipLink href="#" label="Privacy" points={privacyPoints} />
            <TooltipLink href="#" label="Terms"   points={termsPoints}   />
          </div>

          <p className="tracking-[0.3em] text-[#d4af37]">
            CRAFTING LEGENDS
          </p>
        </div>
      </div>

      {/* ── Back to Top ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 w-10 h-10 rounded-full
          bg-[#d4af37] text-black text-xs font-bold
          flex items-center justify-center shadow-lg
          hover:scale-110 transition"
      >
        ↑
      </button>

    </footer>
  );
}