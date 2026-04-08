"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./portfolio.module.css";
import { motionVideos, artisticStills } from "./portfolioData";

function VideoCard({ item, shouldPlay }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // Respond to parent's IntersectionObserver signal
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;
      if (shouldPlay) {
        video.play()
          .then(() => setPlaying(true))   // ← this was missing
          .catch(() => {});
      } else {
        video.pause();
        setPlaying(false);
      }
    }, [shouldPlay]);

  const handleClick = useCallback(() => {
  const video = videoRef.current;
  if (!video) return;
  if (video.paused) {
    document.querySelectorAll("video[data-portfolio]").forEach((v) => {
      if (v !== video) {
        v.pause();
        // also reset other cards' playing state if needed
      }
    });
    video.play()
      .then(() => setPlaying(true))   // ← use .then() here too
      .catch(() => {});
  } else {
    video.pause();
    setPlaying(false);
  }
}, []);

  return (
    <div
      className={`${styles.videoCard} ${playing ? styles.playing : ""}`}
      onClick={handleClick}
    >
      {/* Poster / thumbnail */}
      <Image
        src={item.poster}
        alt={item.title}
        fill
        sizes="(max-width:680px) 50vw, 33vw"
        className={styles.videoPoster}
        priority={item.id <= 3}
      />

      {/* Real video — swap item.src to your actual video path */}
      {item.src && (
        <video
          ref={videoRef}
          src={item.src}
          loop
          muted
          playsInline
          data-portfolio
          className={styles.videoEl}
          onEnded={() => setPlaying(false)}
        />
      )}

      {/* Play / Pause icon */}
      <button
        className={styles.playBtn}
        aria-label={playing ? "Pause video" : "Play video"}
        tabIndex={-1}
      >
        {playing ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)">
            <rect x="6" y="5" width="4" height="14" />
            <rect x="14" y="5" width="4" height="14" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Label */}
      <div className={styles.cardFooter}>
        <span className={styles.cardCategory}>{item.category}</span>
        <div className={styles.cardTitle}>{item.title}</div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   STILL CARD
   - Default: grayscale
   - Click: colour + overlay with details
   - Click again: back to grayscale
══════════════════════════════════════════ */
function StillCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.stillCard} ${styles[item.gridArea] || ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={item.src}
        alt={item.name}
        fill
        sizes="(max-width:680px) 50vw, 33vw"
        className={`${styles.stillImg} ${hovered ? styles.coloured : ""}`}
      />

      {/* Info overlay — visible on hover */}
      <div className={`${styles.stillOverlay} ${hovered ? styles.overlayVisible : ""}`}>
        <span className={styles.stillTag}>{item.tag}</span>
        <div className={styles.stillName}>{item.name}</div>
        <p className={styles.stillDesc}>{item.desc}</p>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════ */
export default function PortfolioPage() {
  const motionRef = useRef(null);
  const [videosActive, setVideosActive] = useState(false);

  // Start videos as soon as the Motion section is 20% visible
  useEffect(() => {
    const el = motionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setVideosActive(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>

      {/* ── SECTION 1 : CINEMATIC MOTION ── */}
      <section className={styles.section} ref={motionRef}>
        <div className={styles.motionHeader}>
          <span className={styles.sectionLabel}>Cinematic</span>
          <h2 className={styles.sectionTitle}>Motion</h2>
        </div>

        <div className={styles.videoGrid}>
          {motionVideos.map((item) => (
            <VideoCard key={item.id} item={item} shouldPlay={videosActive} />
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      {/* ── SECTION 2 : ARTISTIC STILLS ── */}
      <section className={styles.section}>
        <div className={styles.stillsHeader}>
          <h2 className={styles.stillsTitle}>
            Artistic <span className={styles.accent}>Stills</span>
          </h2>
          <div className={styles.titleLine} />
        </div>

        <div className={styles.stillsGrid}>
          {artisticStills.map((item) => (
            <StillCard key={item.id} item={item} />
          ))}
        </div>
      </section>

    </main>
  );
}