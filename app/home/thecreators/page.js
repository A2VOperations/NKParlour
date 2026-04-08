import Image from "next/image";

const CREATORS = [
  {
    id: 1,
    badge: "ARTIST",
    name: "NISHA",
    role: "MASTER BEAUTICIAN",
    specialty: "15+ Years",
    stars: 5,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
  },
];

export default function TheCreators() {
  const isSingle = CREATORS.length === 1;

  return (
    <section
      className="w-full py-20 px-4 sm:px-10"
      style={{ background: "#faf7f4" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div style={{ width: "36px", height: "1px", backgroundColor: "#c8974a" }} />
            <span style={{ color: "#c8974a", fontSize: "13px" }}>✦</span>
            <p
              className="text-[10px] tracking-[0.32em] uppercase"
              style={{ color: "#c8974a" }}
            >
              The Masters
            </p>
            <span style={{ color: "#c8974a", fontSize: "13px" }}>✦</span>
            <div style={{ width: "36px", height: "1px", backgroundColor: "#c8974a" }} />
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(42px, 6vw, 72px)",
              color: "#2b1a1a",
              lineHeight: 1.1,
            }}
          >
            The{" "}
            <span className="italic" style={{ color: "#d63f6e" }}>
              Creators
            </span>
          </h2>

          <p
            className="mt-4 text-[13px] italic"
            style={{
              color: "#9e8e7e",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            "Meet the visionaries who transform beauty into a living masterpiece."
          </p>
        </div>

        {/* ── Cards ── */}
        <div
          className={
            isSingle
              ? "flex justify-center"
              : "grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          }
        >
          {CREATORS.map((c) => (
            <div
              key={c.id}
              style={isSingle ? { width: "100%", maxWidth: "320px" } : undefined}
            >
              <CreatorCard c={c} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function CreatorCard({ c }) {
  return (
    <div className="group flex flex-col items-center">

      {/* Image card */}
      <div
        className="relative w-full overflow-hidden mb-5 transition-transform duration-500 group-hover:-translate-y-1"
        style={{
          borderRadius: "28px",
          height: "300px",
          border: "1px solid #ede0d8",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}
      >
        <Image
          src={c.image}
          alt={c.name}
          fill
          className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badge pill — top left */}
        <div
          className="absolute top-4 left-4 px-3 py-[4px] text-[8.5px] font-bold tracking-[0.18em] uppercase"
          style={{
            borderRadius: "999px",
            background: "rgba(255,255,255,0.88)",
            color: "#2b1a1a",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.5)",
            boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
          }}
        >
          {c.badge}
        </div>
      </div>

      {/* Info below image */}
      <div className="text-center w-full px-2">

        {/* Stars */}
        <div className="flex justify-center gap-[3px] mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              style={{
                color: i < c.stars ? "#c8974a" : "#e0d0c8",
                fontSize: "12px",
              }}
            >
              ★
            </span>
          ))}
        </div>

        {/* Name */}
        <h3
          className="font-serif text-[22px] leading-tight mb-[3px]"
          style={{ color: "#2b1a1a", fontFamily: "'Playfair Display', serif" }}
        >
          {c.name}
        </h3>

        {/* Role */}
        <p
          className="text-[9.5px] font-bold tracking-[0.2em] uppercase mb-2"
          style={{ color: "#d63f6e" }}
        >
          {c.role}
        </p>

        {/* Specialty */}
        <p
          className="text-[11px] italic mb-4"
          style={{
            color: "#b0a0a0",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {c.specialty}
        </p>

        {/* Divider */}
        <div
          className="mx-auto mb-4"
          style={{ width: "100%", height: "1px", backgroundColor: "#ede0d8" }}
        />

        {/* View work link */}
        
        <a
          href="https://www.instagram.com/nk_beautysalon_academy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="flex items-center justify-center gap-2 mx-auto text-[10px] font-bold tracking-[0.22em] uppercase transition-all duration-200 hover:gap-3"
            style={{ color: "#2b1a1a" }}
          >
            PORTFOLIO <span>→</span>
          </button>
        </a>
      </div>
    </div>
  );
}