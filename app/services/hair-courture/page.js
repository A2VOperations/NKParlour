"use client";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { HiOutlineSparkles } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import Link from "next/link";
export default function ServiceHero() {
  const [hovered, setHovered] = useState(false);
  const services = [
    {
      category: "SCULPTING ART",
      items: [
        {
          title: "Director's Cut",
          desc: "A bespoke architectural cut by our master director.",
          price: "₹2,500",
        },
        {
          title: "Signature Blowout",
          desc: "Ionic infusion for red-carpet volume and shine.",
          price: "₹1,800",
        },
      ],
    },
    {
      category: "COLOR COUTURE",
      items: [
        {
          title: "French Balayage",
          desc: "Seamless hand-painted dimension and depth.",
          price: "₹8,500",
        },
        {
          title: "Global Pigment",
          desc: "Full saturation of high-vibrancy luxury tones.",
          price: "₹6,200",
        },
      ],
    },
  ];

  const masters = [
    {
      name: "Aman Verma",
      role: "CREATIVE DIRECTOR",
      specialty: "Avant-Garde Cuts",
      image: "/about/parler4.jpg",
    },
    {
      name: "Sarah Khan",
      role: "SENIOR COLORIST",
      specialty: "Balayage Expert",
      image: "/about/parler4.jpg",
    },
  ];
  const transformations = [
    {
      title: "Signature Balayage",
      artist: "Aman Verma",
      before: "/about/parler.jpg",
      after: "/about/parler2.jpg",
      rating: 5,
    },
    {
      title: "Molecular Repair",
      artist: "Sarah Khan",
      before: "/about/parler3.jpg",
      after: "/about/parler4.jpg",
      rating: 5,
    },
  ];
  const steps = [
    {
      id: "01",
      title: "Couture Analysis",
      desc: "Scientific mapping of hair texture, density, and facial architecture.",
      icon: CiSearch,
    },
    {
      id: "02",
      title: "Artistic Sculpting",
      desc: "Precision cutting and color alchemy tailored to your distinct persona.",
      icon: HiOutlineSparkles,
    },
    {
      id: "03",
      title: "Molecular Ritual",
      desc: "Deep fiber repair with steam-infused oils and a sensory scalp massage.",
      icon: FaRegHeart,
    },
    {
      id: "04",
      title: "Legacy Finish",
      desc: "Editorial styling and a 30-day personalized ritual blueprint.",
      icon: FaRegHeart,
    },
  ];
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .bubble-1 { animation: float 6s ease-in-out infinite; }
        .bubble-2 { animation: float-slow 7s ease-in-out infinite 0.5s; }
        .bubble-3 { animation: float-slower 8s ease-in-out infinite 1s; }
        .bubble-4 { animation: float 5.5s ease-in-out infinite 1.5s; }
        .bubble-5 { animation: float-slow 6.5s ease-in-out infinite 0.8s; }
        .bubble-6 { animation: float-slower 7.5s ease-in-out infinite 1.2s; }
      `}</style>      
      <section
        className="relative py-12 md:py-16  flex items-start lg:items-center overflow-hidden"
        style={{
          background: "linear-gradient(to right, #efa4bd83, #b69fa735, #f7bc979f)",
        }}
      >
        {/* ───── BACKGROUND GLOWS ───── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Pink glow */}
          <div
            className="absolute right-0 top-0 w-[60%] h-full 
        bg-[radial-gradient(ellipse_at_80%_30%,rgba(255,120,160,0.18),transparent_65%)]"
          />

          {/* Gold glow */}
          <div
            className="absolute left-0 bottom-0 w-[50%] h-full 
        bg-[radial-gradient(ellipse_at_20%_80%,rgba(225,161,64,0.12),transparent_70%)]"
          />

          {/* Center soft light */}
          <div
            className="absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]"
          />

          {/* Bubble accents */}
          <div className="absolute left-8 top-24 w-28 h-28 rounded-full bg-[#efa4bd83] blur-2xl opacity-80" />
          <div className="absolute right-16 top-40 w-20 h-20 rounded-full bg-[#b69fa735] blur-2xl opacity-90" />
          <div className="absolute left-24 bottom-32 w-16 h-16 rounded-full bg-[#f7bc979f] blur-2xl opacity-70" />
          <div className="absolute right-28 bottom-16 w-32 h-32 rounded-full bg-[#ffffff1a] blur-3xl opacity-70" />

          {/* Glass bubbles */}
          <div className="bubble-1 absolute top-16 left-20 w-24 h-24 rounded-full border-2 border-white/30 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(255,255,255,0.1)]" />
          <div className="bubble-2 absolute top-1/3 right-32 w-32 h-32 rounded-full border-2 border-white/20 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(255,255,255,0.1)]" />
          <div className="bubble-3 absolute bottom-20 left-1/3 w-20 h-20 rounded-full border-2 border-white/25 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(255,255,255,0.1)]" />
          <div className="bubble-4 absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-white/35 bg-gradient-to-br from-white/25 to-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(255,255,255,0.1)]" />
          <div className="bubble-5 absolute bottom-32 right-20 w-28 h-28 rounded-full border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(255,255,255,0.1)]" />
          <div className="bubble-6 absolute top-2/3 right-1/3 w-14 h-14 rounded-full border border-white/30 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(255,255,255,0.1)]" />

          {/* Center soft light */}
          <div
            className="absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]"
          />

          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay 
        bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"
          />
        </div>

        <div className="relative w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* ───── LEFT IMAGE ───── */}
          <div
            className="relative flex items-center justify-center lg:justify-start px-4 lg:px-8 py-8 lg:py-0 h-full group cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="relative w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px]">
              {/* Border rings */}
              <div className="absolute -top-5 -left-5 w-[calc(100%+10px)] h-[calc(100%+10px)] rounded-t-[50%] rounded-b-[16px] border border-[#5a1a2a]/50" />
              <div className="absolute -top-2 -left-2 w-[calc(100%+4px)] h-[calc(100%+4px)] rounded-t-[50%] rounded-b-[14px] border border-[#3a1020]/60" />

              {/* Image */}
              <div
                className="relative overflow-hidden rounded-t-[50%] rounded-b-[14px]"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="/service/parler4.jpg"
                  alt="Salon"
                  fill
                  className={`object-cover transition-all duration-[1200ms] ease-in-out
                ${hovered ? "scale-105 brightness-110" : "scale-100 brightness-100"}`}
                />

                {/* Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#1a0f13] via-[#1a0f13]/60 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div
                className={`absolute bottom-10 right-[-10px] sm:right-[-20px]
              bg-[#261018]/90 backdrop-blur-md rounded-2xl px-6 py-5
              border border-[#3a1525]/60 min-w-[150px]
              transition-all duration-500 ease-out
              ${hovered
                    ? "-translate-y-3 shadow-[0_20px_50px_rgba(255,120,160,0.35)]"
                    : "shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                  }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#EAB308"
                  strokeWidth="1.8"
                  className="mb-3"
                >
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>

                <p className="text-[9px] tracking-[4px] text-yellow-500 font-semibold uppercase mb-1">
                  Tailored
                </p>
                <p className="text-white font-serif text-2xl">Precision</p>
              </div>
            </div>
          </div>

          {/* ───── RIGHT CONTENT ───── */}
          <div className="px-4 sm:px-6 lg:px-10 py-8 lg:py-0">
            {/* Tag */}
            <div className="flex items-center gap-3 mb-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#EAB308">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
              <p className="text-[13px] font-bold tracking-[0.35em] text-[#dbab60] uppercase">
                Curated Collections
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-serif leading-[1.0] text-[#4b3b39]">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[86px]">
                The <em className="text-pink-400 italic">Service</em>
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[86px] italic mt-2">
                Atelier
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#dbab60] text-[14px] leading-[1.9] max-w-[420px] mt-6">
              Experience a symphony of luxury treatments. From avant-garde hair
              styling to royal skin rituals, redefining beauty with elegance.
            </p>

            {/* About bubbles */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <div className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-black shadow-lg backdrop-blur-sm">
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.4em] text-pink-700/80">
                  Atelier
                </span>
                Bespoke haircraft and luxury rituals.
              </div>
              <div className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-black shadow-lg backdrop-blur-sm">
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.4em] text-yellow-700/80">
                  Expertise
                </span>
                Master stylists + creative color specialists.
              </div>
              <div className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-black shadow-lg backdrop-blur-sm">
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.4em] text-cyan-700/80">
                  Ritual
                </span>
                Immersive prep, precision, and signature finish.
              </div>
              <div className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-black shadow-lg backdrop-blur-sm">
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.4em] text-rose-700/80">
                  Glow
                </span>
                Tailored beauty steps inspired by you.
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-8 mt-12">
              {/* Primary */}
              <Link
                href="https://wa.me/918789999343?text=Hi%20NK%20Parlour%2C%20I%20want%20to%20book%20an%20appointment"
                target="_black"
                className="relative overflow-hidden 
            bg-gradient-to-r from-[#e1a140] via-[#f5c76d] to-[#e1a140]
            text-black text-[11px] tracking-[0.4em] font-bold uppercase 
            px-12 py-[16px] rounded-full 
            transition-all duration-500
            hover:scale-110 hover:shadow-[0_0_35px_rgba(225,161,64,0.6)]
            group"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                />

                <span className="relative flex items-center gap-3">
                  Book Experience
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </span>
              </Link>

              {/* Secondary */}
              <a href="#hair-collection" className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-black uppercase group cursor-pointer">
                <span className="w-7 h-7 flex items-center justify-center group-hover:text-pink-400 transition">
                  <FaAngleDown />
                </span>
                <span className="group-hover:text-pink-400 transition">
                  Discover Menu
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="hair-collection" className="bg-[#f4f1ec] py-12 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* IMAGE CARD */}
          <div className="relative flex justify-center items-center">
            <div className="bg-[#ede7df] p-5 rounded-[40px] shadow-sm">
              <div className="bg-white p-2 rounded-[30px]">
                <div
                  className="overflow-hidden rounded-[25px] 
            w-[280px] sm:w-[340px] md:w-[360px] 
            h-[360px] sm:h-[420px] md:h-[500px]"
                >
                  <Image
                    src="/about/parler3.jpg"
                    alt="hair"
                    width={600}
                    height={700}
                    className="object-cover w-full h-full scale-105 hover:scale-110 transition duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-md mx-auto md:mx-0">
            {/* TITLE */}
            <div className="mb-8 text-center md:text-left">
              <p className="text-[10px] tracking-[0.35em] text-yellow-600 mb-3">
                SERVICE ATELIER
              </p>

              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                <span className="text-gray-800 font-semibold"> Hair </span>
                <span className="text-yellow-600 italic font-serif">
                  Collection
                </span>
              </h2>

              <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                Curating transformations since 2012. Each service is a bespoke
                ritual designed for your unique identity.
              </p>
            </div>

            {/* SERVICES */}
            <div>
              {services.map((section, i) => (
                <div key={i} className="mb-8">
                  {/* Category */}
                  <div className="flex items-center mb-2">
                    <p className="text-[10px] tracking-[0.3em] text-gray-400">
                      {section.category}
                    </p>
                    <div className="flex-1 h-px bg-gray-300 ml-3" />
                  </div>

                  {/* Items */}
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex justify-between items-start py-4 
                border-b border-gray-300 
                hover:border-yellow-500 transition-all duration-300"
                    >
                      <div className="max-w-[75%]">
                        <h3
                          className="text-lg font-medium text-gray-800 
                  group-hover:text-yellow-500 transition-colors duration-300"
                        >
                          {item.title}
                        </h3>

                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <span className="text-sm text-gray-700 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3f1] py-20 px-5">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="relative mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-[#b89b5e] block mb-3">
              VISUAL PROOF
            </span>

            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              <span className="font-semibold text-gray-800">Recent</span>
              <br />
              <span className="italic text-[#b89b5e] font-semibold">
                Transformations
              </span>
            </h2>

            {/* <a
              href="#"
              className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-bold tracking-[0.2em]"
            >
              VIEW ALL WORK →
            </a> */}
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {transformations.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-5">
                {/* Images */}
                <div className="flex gap-3 mb-4">
                  {/* BEFORE */}
                  <div className="relative w-1/2 h-[220px] rounded-xl overflow-hidden group">
                    <Image
                      src={item.before}
                      alt="before"
                      fill
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      priority
                    />
                    <span className="absolute top-3 left-3 text-[10px] px-2 py-1 bg-gray-500 text-white rounded-full">
                      BEFORE
                    </span>
                  </div>

                  {/* AFTER */}
                  <div className="relative w-1/2 h-[220px] rounded-xl overflow-hidden bg-[#eae7e3] group">
                    {item.after && (
                      <Image
                        src={item.after}
                        alt="after"
                        fill
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    )}
                    <span className="absolute top-3 right-3 text-[10px] px-2 py-1 bg-[#c9a96a] text-white rounded-full">
                      AFTER
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-xs tracking-wider text-gray-500 mt-1">
                      BY {item.artist}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="text-[#c9a96a] text-sm">
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#1a0f13] via-[#241419] to-[#2d1a20] text-white py-16 px-6 md:px-20 lg:px-40 overflow-hidden">
        {/* ───── BACKGROUND GLOWS ───── */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Pink glow */}
          <div
            className="absolute right-0 top-0 w-[60%] h-full 
    bg-[radial-gradient(ellipse_at_80%_30%,rgba(255,120,160,0.15),transparent_65%)]"
          />

          {/* Gold glow */}
          <div
            className="absolute left-0 bottom-0 w-[50%] h-full 
    bg-[radial-gradient(ellipse_at_20%_80%,rgba(225,161,64,0.10),transparent_70%)]"
          />

          {/* Center light */}
          <div
            className="absolute inset-0 
    bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]"
          />

          {/* Noise */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay 
    bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <span className="text-[11px] tracking-[0.35em] text-[#e7cfa4] uppercase">
              The Artisans
            </span>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-6 gap-6">
              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                Meet The{" "}
                <span className="italic text-[#e7cfa4] font-medium">
                  Masters
                </span>
              </h2>

              <div className="hidden md:flex items-center gap-4">
                <p className="text-sm text-[#d6b98c] italic whitespace-nowrap">
                  "Crafting identity through precision and passion."
                </p>
                <span className="w-[1px] h-6 bg-[#e7cfa4] opacity-40"></span>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {masters.map((item, index) => (
              <div
                key={index}
                className="
          group relative flex items-center gap-6 md:gap-8 p-6 md:p-10 rounded-[28px]
          bg-gradient-to-r from-[#1a0f13]/90 via-[#241419]/80 to-[#2d1a20]/90
          backdrop-blur-md
          border border-[#3a1525]
          hover:scale-[1.02]
          hover:shadow-[0_10px_40px_rgba(255,120,160,0.15)]
          transition-all duration-300
        "
              >
                {/* IMAGE */}
                <div
                  className="
    relative w-28 h-28 rounded-full overflow-hidden 
    border border-[#3a1525] shrink-0
    group-hover:border-[#eba625]

    transition-all duration-300 ease-out
    group-hover:ring-4 group-hover:ring-[#eba625]/40
  "
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    quality={100}
                    sizes="112px"
                    className="
      object-cover
      grayscale
      group-hover:grayscale-0
      transition-all duration-700 ease-out
    "
                  />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-medium flex items-center gap-2">
                    {item.name}
                    <span className="text-[#e7cfa4] text-lg">•</span>
                  </h3>

                  <p className="text-[10px] md:text-[11px] tracking-[0.35em] font-bold text-[#e7cfa4] mt-2 uppercase">
                    {item.role}
                  </p>

                  <p className="text-sm text-[#d6b98c] mt-3 md:mt-4 flex items-center gap-2">
                    <span className="text-[#e7cfa4]">✂</span>
                    {item.specialty}
                  </p>

                  <a
                    href="#"
                    className="mt-5 md:mt-6 inline-flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/70 hover:text-[#e7cfa4] transition"
                  >
                    View Portfolio
                    <span className="group-hover:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2ee] py-20 px-6 md:px-16 text-center">
        {/* Top Label */}
        <p className="text-xs tracking-[0.3em] text-[#b89b5e] mb-4">
          — THE METHODOLOGY —
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-light mb-16">
          Our <span className="text-[#b89b5e] italic font-serif">Creative</span>{" "}
          Workflow
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={i}
                className="group relative bg-white/70 backdrop-blur-md rounded-[28px] p-8 text-left 
              shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
              >
                {/* Step Number */}

                <span
                  className="absolute top-6 right-6 text-[#b89b5e] text-3xl font-light 
group-hover:scale-125 
transition-all duration-500 ease-out"
                >
                  {step.id}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl 
bg-white shadow mb-6 bg--[#b89b5e]
group-hover:bg-[#d6c7a3] 
group-hover:scale-110 transition duration-500 ease-out delay-75"
                >
                  <i>
                    <Icon
                      size={20}
                      className="text-[#b89b5e] group-hover:text-white  "
                    />{" "}
                  </i>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-medium mb-3 text-gray-800 
group-hover:text-[#d6c7a3] transition duration-500 ease-out delay-75"
                >
                  {step.title}
                </h3>

                {/* Divider */}
                <div className="w-10 h-[1px] bg-[#b89b5e] mb-4 transition-all duration-300 group-hover:w-full" />

                {/* Description */}
                <p
                  className="text-sm text-gray-500 leading-relaxed 
group-hover:text-gray-600 transition"
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button
            className="group px-10 py-4 rounded-full bg-[#1f1f1f] text-white text-sm tracking-widest
  flex items-center gap-3 mx-auto
  transition-colors duration-500 ease-out delay-75
  hover:bg-[#b89b5e]"
          >
            RESERVE YOUR RITUAL
            <span className="group-hover:translate-x-1 transition">→</span>
          </button>

          <p className="text-xs text-gray-400 mt-4 tracking-widest">
            LIMITED DAILY SESSIONS AVAILABLE
          </p>
        </div>
      </section>


    </>
  );
}