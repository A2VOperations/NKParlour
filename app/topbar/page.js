"use client";

import { FaInstagram, FaWhatsapp  } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#fff1f2] via-[#fde2e4] to-[#fff1f2] border-b border-pink-100 backdrop-blur-sm">

      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between">

        {/* ── Left: Contact ── */}
        <div className="flex items-center gap-4 sm:gap-6 text-xs text-gray-700">

          {/* Phone */}
          <a
            href="tel:+918178999943"
            className="flex items-center gap-2 font-medium hover:text-pink-600 transition-all duration-300 group"
          >
            <span className="w-6 h-6 flex items-center justify-center rounded-full 
              bg-gradient-to-tr from-[#b8952a] to-pink-400 text-white shadow-sm group-hover:scale-110 transition">

              {/* FIXED ICON */}
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"   // 👈 FIX (was none)
                viewBox="0 0 24 24"
              >
                <path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.6.6 4 .6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.1 22 2 13.9 2 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.4.2 2.8.6 4 .1.4 0 .8-.3 1.1l-2.2 2.7z" />
              </svg>

            </span>

            <span className="tracking-wide">+91 8178999943</span>
          </a>

          {/* Divider */}
          <span className="hidden sm:block w-px h-4 bg-pink-200"></span>

          {/* Hours */}
          <div className="hidden sm:flex items-center gap-2 text-gray-600 font-medium">
            <span className="w-6 h-6 flex items-center justify-center rounded-full 
              bg-gradient-to-tr from-[#b8952a] to-pink-400 text-white shadow-sm">

              {/* CLOCK ICON FIXED */}
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h5v-2h-4V7h-2v6z" />
              </svg>

            </span>
            MON–SUN: 10 AM – 8 PM
          </div>
        </div>

        {/* ── Right: Social ── */}
        <div className="flex items-center gap-3">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/nk_beautysalon_academy/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 flex items-center justify-center rounded-full
              bg-gradient-to-tr from-yellow-400 via-pink-500 to-rose-500
              text-white shadow-sm
              hover:scale-110 hover:shadow-pink-400/40
              transition-all duration-300"
          >
            <FaInstagram className="w-3 h-3" />
          </a>

          

        </div>
      </div>
    </div>
  );
}