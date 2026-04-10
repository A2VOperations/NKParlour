"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { artisticStills } from "../../gallery/portfolioData";

const INFINITE_STILLS = [...artisticStills, ...artisticStills, ...artisticStills];
const CARD_WIDTH = 336;

export default function Gallerycarousel() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const dragRef = useRef({ dragging: false, startX: 0, startPos: 0 });

  const singleSetWidth = artisticStills.length * CARD_WIDTH;

  useEffect(() => {
    posRef.current = singleSetWidth;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += 0.55;

        if (posRef.current >= singleSetWidth * 2) {
          posRef.current -= singleSetWidth;
        }

        if (posRef.current < 0) {
          posRef.current += singleSetWidth;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
        }
      }

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);

    return () => {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [singleSetWidth]);

  const nudge = (direction) => {
    posRef.current += direction * CARD_WIDTH;

    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.4s cubic-bezier(0.4,0,0.2,1)";
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;

      setTimeout(() => {
        if (trackRef.current) {
          trackRef.current.style.transition = "";
        }
      }, 420);
    }
  };

  const startDrag = (clientX) => {
    pausedRef.current = true;
    dragRef.current = {
      dragging: true,
      startX: clientX,
      startPos: posRef.current,
    };
  };

  const moveDrag = (clientX) => {
    if (!dragRef.current.dragging) return;

    const delta = dragRef.current.startX - clientX;
    posRef.current = dragRef.current.startPos + delta;

    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
    }
  };

  const stopDrag = () => {
    dragRef.current.dragging = false;
    setTimeout(() => {
      pausedRef.current = false;
    }, 800);
  };

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="flex items-start justify-between px-6 sm:px-12 mb-10">
        <div className="flex-1 text-center">
          <p
            className="text-[10px] tracking-[0.32em] uppercase mb-2 flex items-center justify-center gap-2"
            style={{ color: "#c8974a" }}
          >
            <span>*</span> Portfolio
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(30px, 4vw, 50px)",
              color: "#2b1a1a",
              lineHeight: 1.15,
            }}
          >
            Artistic{" "}
            <span className="italic" style={{ color: "#d63f6e" }}>
              Stills
            </span>
          </h2>
        </div>

        <div className="flex items-center gap-2 mt-2 flex-shrink-0">
          <button
            type="button"
            aria-label="Previous still"
            onClick={() => nudge(-1)}
            className="w-9 h-9 flex items-center justify-center transition-all duration-200 hover:bg-[#2b1a1a] hover:!text-white"
            style={{ border: "1.5px solid #d0c0c0", borderRadius: "8px", color: "#2b1a1a", fontSize: "16px" }}
          >
            &lsaquo;
          </button>
          <button
            type="button"
            aria-label="Next still"
            onClick={() => nudge(1)}
            className="w-9 h-9 flex items-center justify-center transition-all duration-200 hover:bg-[#2b1a1a] hover:!text-white"
            style={{ border: "1.5px solid #d0c0c0", borderRadius: "8px", color: "#2b1a1a", fontSize: "16px" }}
          >
            &rsaquo;
          </button>
        </div>
      </div>

      <div
        className="relative w-full select-none"
        style={{ cursor: "grab" }}
        onMouseDown={(e) => startDrag(e.pageX)}
        onMouseMove={(e) => moveDrag(e.pageX)}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
        onTouchEnd={stopDrag}
      >
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />

        <div
          ref={trackRef}
          className="flex gap-5 pb-4 pt-1 pl-6"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {INFINITE_STILLS.map((item, index) => (
            <StillCarouselCard key={`${item.id}-${index}`} item={item} priority={index < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StillCarouselCard({ item, priority }) {
  return (
    <article
      className="group relative flex-shrink-0 overflow-hidden bg-[#2b1a1a]"
      style={{
        width: "316px",
        height: "410px",
        borderRadius: "8px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
      }}
    >
      <Image
        src={item.src}
        alt={item.name}
        fill
        priority={priority}
        sizes="316px"
        className="object-cover object-center grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

      <div className="absolute left-5 right-5 bottom-5 text-white">
        <p className="text-[9px] font-bold tracking-[0.24em] uppercase mb-2" style={{ color: "#f0c978" }}>
          {item.tag}
        </p>
        <h3
          className="text-[22px] leading-tight mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {item.name}
        </h3>
        <p className="text-[12px] leading-[1.6] text-white/78">{item.desc}</p>
      </div>
    </article>
  );
}
