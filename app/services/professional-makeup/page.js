"use client";

import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import { useState, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";


const DATA = [
    {
        id: 1,
        title: "The Royal Bridal Reveal",
        tag: "BRIDAL COUTURE",
        desc: "Witness how we enhance facial features while maintaining a skin-like finish.",
        before: "/about/photoBridalMakeup.jpg",
        after: "/about/photoBridalMakeup.jpg",
    },
    {
        id: 2,
        title: "Editorial Glam Look",
        tag: "EDITORIAL",
        desc: "High fashion inspired glam with bold highlights and sculpted definition.",
        before: "/about/parler2.jpg",
        after: "/about/parler2.jpg",
    },
    {
        id: 3,
        title: "Soft Matte Beauty",
        tag: "SIGNATURE",
        desc: "Flawless matte finish with long-lasting coverage and natural tone balance.",
        before: "/about/parler3.jpg",
        after: "/about/parler3.jpg",
    },
];

const steps = [
    {
        id: "01",
        title: "The Dialogue",
        desc: "Sensory consultation to align artistry with your aura.",
    },
    {
        id: "02",
        title: "Skin Canvas",
        desc: "Clinical-grade priming for a 24-hour luminous stay.",
    },
    {
        id: "03",
        title: "Master Stroke",
        desc: "Final reveal with elite pigments and precision.",
    },
];

export default function ProfessionalMakup() {

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % DATA.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + DATA.length) % DATA.length);
    };

    const current = DATA[index];

    const services = [
        {
            id: "01",
            tag: "THE ULTIMATE GLOW",
            title: "Royal Bridal",
            desc: "An architectural approach to bridal beauty. We craft a timeless HD glow that stays flawless through every emotion.",
            price: "₹25,000",
        },
        {
            id: "02",
            tag: "EDITORIAL GLAM",
            title: "Red Carpet",
            desc: "High-contrast contouring and editorial-grade pigments designed for the lens and the spotlight.",
            price: "₹12,000",
        },
        {
            id: "03",
            tag: "MINIMALIST ART",
            title: "Ethereal Glass",
            desc: "Focus on molecular hydration and a lit-from-within translucent finish for that natural look.",
            price: "₹8,000",
        },
        {
            id: "04",
            tag: "SIGNATURE STYLING",
            title: "Hair Couture",
            desc: "Precision-crafted hairstyles tailored to your face structure, blending volume, texture, and elegance for every occasion.",
            price: "₹5,000",
        },
    ];

    const [active, setActive] = useState(0);
    const [showVideo, setShowVideo] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlayPause = () => {
        if (videoRef.current) {
            try {
                if (isPlaying) {
                    videoRef.current.pause();
                } else {
                    videoRef.current.play();
                }
                setIsPlaying(!isPlaying);
            } catch (error) {
                console.log('Video play error:', error);
            }
        }
    };

    return (
        <>
            <style>{`
        @keyframes neon-glow-1 {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes neon-glow-2 {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes neon-pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .neon-1 { animation: neon-glow-1 3s ease-in-out infinite; }
        .neon-2 { animation: neon-glow-2 4s ease-in-out infinite 0.5s; }
        .neon-pulse { animation: neon-pulse 3.5s ease-in-out infinite; }
      `}</style>
            <section
                className="relative flex items-center justify-center px-4 md:px-10 py-16 md:py-20 overflow-hidden flex items-center"
                style={{
                    background: "linear-gradient(to right, #efa4bd83, #b69fa735, #f7bc979f)",
                }}
            >
                {/* NEON BACKGROUND EFFECTS */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="neon-1 absolute top-20 left-10 w-40 h-40 rounded-full bg-pink-500/20 blur-3xl" />
                    <div className="neon-2 absolute top-1/3 right-20 w-60 h-60 rounded-full bg-purple-500/15 blur-3xl" />
                    <div className="neon-pulse absolute bottom-32 left-1/3 w-48 h-48 rounded-full bg-fuchsia-500/10 blur-3xl" />
                    <div className="neon-1 absolute bottom-20 right-1/4 w-52 h-52 rounded-full bg-pink-400/12 blur-3xl" />

                    {/* NEON GLASS BUBBLES */}
                    <div className="neon-1 absolute top-24 left-16 w-32 h-32 rounded-full border-2 border-pink-400/40 bg-gradient-to-br from-pink-500/20 to-pink-300/5 backdrop-blur-md shadow-[0_0_30px_rgba(236,72,153,0.4)]" />
                    <div className="neon-2 absolute top-1/4 right-20 w-40 h-40 rounded-full border-2 border-purple-400/30 bg-gradient-to-br from-purple-500/15 to-fuchsia-300/5 backdrop-blur-md shadow-[0_0_35px_rgba(168,85,247,0.3)]" />
                    <div className="neon-pulse absolute bottom-40 left-1/4 w-28 h-28 rounded-full border border-fuchsia-400/35 bg-gradient-to-br from-fuchsia-500/15 to-pink-300/5 backdrop-blur-md shadow-[0_0_25px_rgba(236,72,153,0.3)]" />
                    <div className="neon-1 absolute bottom-24 right-1/3 w-36 h-36 rounded-full border-2 border-pink-400/25 bg-gradient-to-br from-pink-400/12 to-transparent backdrop-blur-md shadow-[0_0_30px_rgba(236,72,153,0.25)]" />
                    <div className="neon-2 absolute top-1/2 left-1/3 w-24 h-24 rounded-full border border-purple-400/40 bg-gradient-to-br from-purple-500/20 to-transparent backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.4)]" />
                </div>
                {/* BACKGROUND BIG TEXT */}
                <h1 className="absolute text-[120px] md:text-[200px] font-serif text-white/10 opacity-20 left-1/2 -translate-x-1/2 select-none pointer-events-none">
                    LUMOU
                </h1>

                {/* CENTER CONTAINER */}
                <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                    {/* LEFT CONTENT */}
                    <div className="max-w-xl text-center md:text-left">
                        <p className="text-xs tracking-[0.3em] text-yellow-600 mb-4">
                            — ELITE ARTISTRY
                        </p>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight">
                            <span className="text-[#4b3b39]">Divine</span>
                            <br />
                            <span className="text-pink-500 italic">Artistry</span>
                        </h1>

                        <p className="text-gray-600 mt-5 leading-relaxed border-l border-yellow-600 pl-4 line-clamp-3">
                            Redefining elegance through precision brushwork. We sculpt your
                            vision into a cinematic reality with world-class pigments.
                        </p>

                        <div className="flex items-center justify-center md:justify-start gap-6 mt-6">
                            <button
                                onClick={() => window.open('https://wa.me/8178999143?text=Hello%20I%20want%20to%20book%20a%20makeup%20look', '_blank')}
                                className="bg-yellow-500 text-black px-6 py-2.5 rounded-full text-xs tracking-widest hover:bg-yellow-400 transition"
                            >
                                BOOK A LOOK ↗
                            </button>

                            <div
                                onClick={() => setShowVideo(true)}
                                className="flex items-center gap-3 cursor-pointer group"
                            >
                                <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 group-hover:border-white transition">
                                    <FaPlay className="text-[10px] group-hover:text-white transition ml-1" />
                                </div>
                                <span className="text-gray-600 text-xs tracking-widest group-hover:text-white transition">
                                    VIDEO REEL
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="relative">
                        <div className="group w-[260px] sm:w-[300px] md:w-[320px] h-[340px] sm:h-[380px] md:h-[420px] border border-[#5a1a1f] rounded-[30px] md:rounded-[40px] bg-[#1a0b0d] relative overflow-hidden shadow-[0_0_40px_rgba(255,0,60,0.15)]">
                            {showVideo ? (
                                <div className="relative w-full h-full">
                                    <video
                                        ref={videoRef}

                                        autoPlay
                                        muted
                                        loop
                                        className="w-full h-full object-cover rounded-[30px] md:rounded-[40px]"
                                        poster="/pexels-ritam-das-113941289-9901800.jpg"
                                        onPlay={() => setIsPlaying(true)}
                                        onPause={() => setIsPlaying(false)}
                                        onError={(e) => console.log('Video error:', e)}
                                        onLoadedData={() => console.log('Video loaded')}
                                    >
                                        <source src="/videos/video7.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    {/* CUSTOM PLAY/PAUSE OVERLAY */}
                                    {/* <div className="absolute inset-0 flex items-center justify-center">
                                        <button
                                            onClick={togglePlayPause}
                                            className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 group"
                                        >
                                            {isPlaying ? (
                                                <div className="flex space-x-1">
                                                    <div className="w-1 h-6 bg-white"></div>
                                                    <div className="w-1 h-6 bg-white"></div>
                                                </div>
                                            ) : (
                                                <FaPlay className="ml-1 text-white group-hover:scale-110 transition-transform" size={20} />
                                            )}
                                        </button>
                                    </div> */}
                                </div>
                            ) : (
                                <Image
                                    src="/photos/photoBridalMakeup.jpg"
                                    alt="High-End Makeup Look"
                                    fill
                                    className="object-cover rounded-[30px] md:rounded-[40px] transition duration-700 group-hover:scale-110"
                                />
                            )}

                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500"></div>

                            <div className="absolute inset-0 rounded-[30px] md:rounded-[40px] border border-[#7a2a30] opacity-40"></div>
                        </div>

                        {/* BADGE */}
                        <div className="absolute bottom-3 right-3 bg-[#2a1416] border border-[#5a1a1f] px-3 py-2 rounded-lg shadow-lg backdrop-blur-md">
                            <p className="text-[9px] text-yellow-500 tracking-widest">
                                {showVideo ? "PORTFOLIO" : "STUDIO READY"}
                            </p>
                            <p className="text-white text-xs font-semibold">
                                {showVideo ? "Showcase" : "4K HD Finish"}
                            </p>
                        </div>

                        {/* CLOSE VIDEO BUTTON */}
                        {showVideo && (
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>
            </section>

            <section className="relative bg-[#f4f1ec] py-24 px-4 md:px-8 overflow-hidden">
                <div className="relative max-w-5xl mx-auto">
                    {/* TOP HEADER */}
                    <div className="mb-16">
                        <p className="text-[10px] tracking-[0.4em] text-gray-700 mb-3">
                            — SERVICE PORTFOLIO
                        </p>

                        <h2 className="text-4xl md:text-6xl font-serif leading-none">
                            <span className="text-black">Signature</span>
                            <br />
                            <span className="text-pink-600 italic">Transformations</span>
                        </h2>

                        <p className="max-w-xs text-xs text-gray-500 border-l border-pink-500 pl-4 mt-6">
                            Where luxury meets precision. We use the dark’s depth to highlight
                            your inner radiance.
                        </p>
                    </div>

                    {/* CARDS GRID */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((item, i) => (
                            <div
                                key={i}
                                className="group relative bg-white/70 backdrop-blur-sm border border-[#e7e3dc] rounded-[28px] p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* TAG */}
                                <p className="text-[10px] tracking-[0.3em] text-pink-500 mb-3">
                                    {item.tag}
                                </p>

                                {/* TITLE */}
                                <h3 className="text-2xl md:text-3xl font-serif text-black">
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* FOOTER */}
                                <div className="flex items-center justify-between mt-6">
                                    <p className="text-lg font-medium text-black">{item.price}</p>

                                    <button
                                        onClick={() => window.open('https://wa.me/8178999143?text=Hello%20I%20want%20to%20book%20this%20service', '_blank')}
                                        className="text-[10px] tracking-widest px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
                                    >
                                        BOOK NOW ↗
                                    </button>
                                </div>

                                {/* HOVER GLOW */}
                                <div
                                    className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition pointer-events-none 
            bg-gradient-to-br from-pink-200/20 to-transparent"
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative bg-[#14070d] text-white py-24 px-6 md:px-20 overflow-hidden">


                {/* HEADER */}
                <div className="text-center mb-16 relative z-10">
                    <p className="text-sm tracking-[0.3em] text-yellow-500 mb-2">
                        THE ART
                    </p>
                    <h2 className="text-4xl md:text-6xl font-light">
                        Art of <span className="italic text-pink-500">Transformation</span>
                    </h2>
                </div>

                {/* SLIDER */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">

                    {/* BEFORE (LEFT SMALL) */}
                    <div className="hidden md:block w-[180px] h-[420px] relative rounded-2xl overflow-hidden border border-white/10 opacity-70 scale-95">
                        <Image
                            key={current.before}
                            src={current.before}
                            alt="before"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>

                    {/* MAIN IMAGE (CENTER BIG) */}
                    <div className="relative w-[320px] md:w-[420px] h-[500px] rounded-[30px] overflow-hidden border border-yellow-500/30 shadow-[0_20px_80px_rgba(255,0,80,0.15)] group">
                        <Image
                            key={current.after}
                            src={current.after}
                            alt="after"
                            fill
                            className="object-cover transition duration-700 group-hover:scale-105"
                        />

                        {/* GLOW */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* LABEL */}
                        <div className="absolute bottom-0 w-full px-6 py-4">
                            <p className="text-yellow-400 text-[11px] tracking-widest">
                                AFTER
                            </p>
                            <p className="text-white text-lg font-medium">
                                HD Finish + 24hr Stay
                            </p>
                        </div>
                    </div>

                    {/* CONTENT CARD */}
                    <div className="md:ml-10">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 w-[280px] shadow-xl">

                            <p className="text-[10px] tracking-widest text-pink-400 mb-2">
                                {current.tag}
                            </p>

                            <h3 className="text-xl font-semibold mb-3">
                                {current.title}
                            </h3>

                            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                                {current.desc}
                            </p>

                            <button
                                onClick={() => window.open('https://wa.me/8178999143?text=Hello%20I%20want%20to%20book%20this%20makeup%20look', '_blank')}
                                className="w-full border border-yellow-500 text-yellow-400 py-2.5 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300"
                            >
                                BOOK THIS LOOK →
                            </button>
                        </div>
                    </div>

                </div>

                {/* NAV BUTTONS */}
                <div className="flex justify-center mt-14 gap-4 z-10 relative">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 transition"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 transition"
                    >
                        ›
                    </button>
                </div>

            </section>

            <section className="bg-[#f5f1ef] min-h-screen flex items-center px-6 md:px-16 py-20 relative overflow-hidden">

                {/* MAIN GRID */}
                <div className="grid md:grid-cols-2 gap-16 w-full max-w-7xl mx-auto">

                    {/* LEFT SIDE */}
                    <div>
                        {/* TAG */}
                        <p className="text-xs tracking-[0.4em] uppercase text-pink-500 mb-4">
                            ✦ The Ritual
                        </p>

                        {/* HEADING */}
                        <h1 className="text-6xl md:text-7xl font-serif leading-tight">
                            <span className="block text-black italic ">Supreme</span>
                            <span className="block text-pink-500 italic text-center">Artistry</span>
                        </h1>

                        {/* STEPS */}
                        <div className="mt-12 space-y-5">
                            {steps.map((item, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActive(index)}
                                    className={`flex items-center justify-between p-5 rounded-2xl border transition cursor-pointer
                  ${active === index
                                            ? "bg-white shadow-md"
                                            : "bg-white/60 hover:bg-white"
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-gray-400 italic">
                                            {item.id}
                                        </span>

                                        <div>
                                            <h3 className="text-lg font-medium text-black">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => window.open('https://wa.me/8178999143?text=Hello%20I%20want%20to%20book%20this%20service', '_blank')}
                                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                                    >
                                        <GoArrowUpRight size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* BUTTON */}
                        <button
                            onClick={() => window.open('https://wa.me/8178999143?text=Hello%20I%20want%20to%20book%20the%20makeup%20ritual', '_blank')}
                            className="mt-10 px-8 py-4 rounded-full bg-black text-white text-sm tracking-widest uppercase hover:opacity-90 transition"
                        >
                            Book The Ritual →
                        </button>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative">
                        {/* CARD */}
                        <div
                            className="w-full h-[520px] rounded-[40px] shadow-inner relative overflow-hidden"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1665960211264-5e0a7112bacd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10" />

                            {/* TOP BADGE */}
                            <div className="absolute top-6 right-6 bg-white rounded-2xl px-4 py-3 shadow-md text-center">
                                <div className="text-yellow-500 text-sm">★★★★★</div>
                                <p className="text-xs font-medium">Premium Experience</p>
                            </div>

                            {/* GLASS CIRCLE */}
                            <div className="absolute bottom-[-40px] left-[-40px] w-40 h-40 rounded-full backdrop-blur-xl bg-white/40 border border-white/50"></div>
                        </div>
                    </div>
                </div>

                {/* FOOTER LINE */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-gray-400 flex items-center gap-3">
                    <span>❤</span>
                    <span>THE MASTER'S TOUCH • EST. 2015 • LUXURY STANDARD</span>
                    <span>❤</span>
                </div>
            </section>


        </>
    );
}