"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME",     href: "/" },
  { label: "ABOUT",    href: "/about" },
  { label: "SERVICES", hasDropdown: true },
  { label: "GALLERY",  href: "/gallery" },
  { label: "CONTACT",  href: "/contact" },
];

const services = ["Hair Courture", "Skin Aesthetics", "Professional Makeup"];

export default function NavBar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [dropOpen, setDropOpen]   = useState(false);
  const rafRef                    = useRef(null);
  const pathname                  = usePathname();

  const [isHoverable, setIsHoverable] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    setIsHoverable(mediaQuery.matches);
  }, []);

  /* ── scroll effect ── */
  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setScrolled(window.scrollY > 20);
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  /* ── close mobile menu on desktop resize ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setDropOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── close mobile menu on route change ── */
  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith("/services/");

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 shadow-md py-2"
          : "bg-white border-b border-gray-100 py-4"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-10 flex items-center justify-between">

        {/* ── LOGO ── */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-light tracking-widest text-gray-800"
        >
          NK <span className="text-[#b8952a] font-bold">PARLOUR</span>
        </Link>

        {/* ── DESKTOP NAV ── */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.hasDropdown && isServicesActive);

            return (
              <div key={link.label} className="relative group">
                {link.hasDropdown ? (
  // 👉 SERVICES (no routing)
                <button
                  onClick={() => {
                    if (!isHoverable) {
                      setDropOpen((prev) => !prev);
                    }
                  }}
                  onMouseEnter={() => {
                    if (isHoverable) setDropOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (isHoverable) setDropOpen(false);
                  }}
                  className={`relative flex items-center gap-1 text-xs font-semibold tracking-widest pb-1 ${
                    isActive
                      ? "text-[#b8952a]"
                      : "text-gray-700 hover:text-[#b8952a]"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                // 👉 NORMAL LINKS (HOME, ABOUT, etc.)
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-1 text-xs font-semibold tracking-widest pb-1 ${
                    isActive
                      ? "text-[#b8952a]"
                      : "text-gray-700 hover:text-[#b8952a]"
                  }`}
                >
                  {link.label}
                </Link>
              )}

                {/* Desktop dropdown */}
                {link.hasDropdown && (
                  <div
                    onMouseEnter={() => {
                      if (isHoverable) setDropOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (isHoverable) setDropOpen(false);
                    }}
                    className={`absolute top-full left-0 mt-3 w-44 bg-white border border-gray-100
                      shadow-xl rounded-md z-50 transition-all duration-200
                      ${dropOpen 
                        ? "opacity-100 visible translate-y-0" 
                        : "opacity-0 invisible translate-y-2"}
                    `}
                  >
                    {/* Arrow tip */}
                    <div className="absolute -top-1.5 left-5 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
                    <div className="py-1">
                      {services.map((s) => (
                        <Link
                          key={s}
                          href={`/services/${s.toLowerCase().replace(" ", "-")}`}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium
  text-gray-600 hover:text-[#b8952a] hover:bg-pink-50 transition-colors duration-150"
                        >
                          <span className="w-1 h-1 rounded-full bg-pink-300 shrink-0" />
                          {s}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP CTA ── */}
        <div className="hidden lg:block">
          <Link
            href="https://wa.me/918789999343?text=Hi%20NK%20Parlour%2C%20I%20want%20to%20book%20an%20appointment"
            target="_blank"
            className="relative overflow-hidden border border-[#b8952a] text-[#b8952a]
              text-xs font-bold tracking-widest px-6 py-3 inline-block group
              hover:text-white transition-colors duration-300"
          >
            <span
              className="absolute inset-0 bg-[#b8952a] -translate-x-full
                group-hover:translate-x-0 transition-transform duration-300"
            />
            <span className="relative z-10">BOOK EXPERIENCE</span>
          </Link>
        </div>

        {/* ── MOBILE HAMBURGER ── */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden p-2 text-gray-600 hover:text-pink-500 transition-colors duration-200"
        >
          <div className="w-5 h-4 flex flex-col justify-between overflow-hidden">
            <span
              className={`block h-0.5 bg-current origin-left transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-x-px" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0 -translate-x-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current origin-left transition-transform duration-300 ${
                menuOpen ? "-rotate-45 translate-x-px" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-white px-6 pb-6 pt-2">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.hasDropdown && isServicesActive);

            /* Services — accordion on mobile */
            if (link.hasDropdown) {
              return (
                <div key={link.label}>
                  <button
                    onClick={() => setDropOpen((o) => !o)}
                    className={`w-full flex items-center justify-between py-3 text-xs font-semibold tracking-widest border-b border-gray-100 ${
                      isActive ? "text-[#b8952a]" : "text-gray-700"
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${
                        dropOpen ? "rotate-180 text-[#b8952a]" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Services sub-list */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      dropOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {services.map((s) => (
                      <Link
                        key={s}
                        href={`/services/${s.toLowerCase().replace(" ", "-")}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 pl-4 py-2.5 text-xs font-medium
                          text-gray-500 hover:text-[#b8952a] transition-colors duration-150"
                      >
                        <span className="w-1 h-1 rounded-full bg-pink-300 shrink-0" />
                        {s}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between py-3 text-xs font-semibold tracking-widest border-b border-gray-100 transition-colors duration-150 ${
                  isActive
                    ? "text-[#b8952a]"
                    : "text-gray-700 hover:text-[#b8952a]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile CTA */}
          <Link
            href="/book"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center justify-center border border-[#b8952a]
              text-[#b8952a] text-xs font-bold tracking-widest py-3 px-6
              hover:bg-[#b8952a] hover:text-white transition-colors duration-300"
          >
            BOOK EXPERIENCE
          </Link>
        </div>
      </div>
    </nav>
  );
}