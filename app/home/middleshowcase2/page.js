import Image from "next/image";
import Link from "next/link";
export default function MiddleShowcase2() {
  return (
    <section
      style={{ backgroundColor: "#faf7f4" }}
      className="w-full py-16 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* ── LEFT — Image card with floating stat ── */}
        <div className="relative flex-shrink-0 w-full md:w-[420px]">

          {/* Watermark — sits behind the image */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute font-serif font-black leading-none"
            style={{
              top: "-100px",
              left: "-32px",
              fontSize: "clamp(100px, 20vw, 160px)",
              color: "transparent",
              WebkitTextStroke: "2px rgba(180,150,130,0.18)",
              letterSpacing: "-0.05em",
              zIndex: 0,
              userSelect: "none",
            }}
          >
            NK
          </div>

          {/* Main image — tall pill shape */}
          <div
            className="overflow-hidden w-full"
            style={{
              borderRadius: "160px 160px 24px 24px",
              height: "520px",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1589710751893-f9a6770ad71b"
              alt="Makeup artist applying bridal makeup"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Floating stat card — bottom right, overlapping image */}
          <div
            className="absolute bg-white shadow-xl"
            style={{
              borderRadius: "20px",
              bottom: "-10px",
              right: "-10px",
              minWidth: "190px",
              padding: "28px 32px",
              zIndex: 2,
            }}
          >
            {/* 10+ with gold plus */}
            <p
              className="font-bold leading-none"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "52px",
                color: "#2b1a1a",
              }}
            >
              10
              <span style={{ fontSize: "32px", color: "#c8974a" }}>+</span>
            </p>

            {/* Gold divider */}
            <div
              className="my-3"
              style={{
                height: "2px",
                width: "44px",
                backgroundColor: "#c8974a",
              }}
            />

            {/* Label */}
            <p
              className="font-semibold uppercase"
              style={{
                color: "#9e8e7e",
                fontSize: "10px",
                letterSpacing: "0.20em",
                lineHeight: "1.7",
              }}
            >
              Decade of
              <br />
              Luxury Rituals
            </p>
          </div>
        </div>

        {/* ── RIGHT — Text content ── */}
        <div className="flex-1">

          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "32px", height: "2px", backgroundColor: "#c8974a" }} />
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#c8974a", letterSpacing: "0.18em" }}
            >
              Our Philosophy
            </p>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            style={{ color: "#2b1a1a", fontFamily: "'Playfair Display', serif" }}
          >
            Where Soul
            <br />
            Meets{" "}
            <span
              className="italic"
              style={{ color: "#d63f6e", fontFamily: "'Playfair Display', serif" }}
            >
              Artistry
            </span>
          </h2>

          {/* Body paragraph — drop-cap A */}
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "#6b5c52", maxWidth: "440px" }}
          >
            <span
              className="float-left text-4xl font-bold mr-1 mt-1 leading-none"
              style={{ color: "#2b1a1a", fontFamily: "'Playfair Display', serif" }}
            >
              A
            </span>
            t NK Parlour, we treat beauty as a silent language. Our sanctuary is crafted
            for those who seek more than a service—they seek a transformation.
            Every stroke, every essence, and every ritual is a testament to our
            obsession with perfection.
          </p>

          {/* Two mini feature columns */}
          <div className="flex gap-10 mb-10">
            {/* Bespoke Mission */}
            <div className="flex gap-3">
              <div
                style={{
                  width: "3px",
                  backgroundColor: "#c8974a",
                  flexShrink: 0,
                  borderRadius: "2px",
                }}
              />
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-1"
                  style={{ color: "#2b1a1a", letterSpacing: "0.14em" }}
                >
                  ✦ Bespoke Mission
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b5c52" }}>
                  Tailoring luxury experiences that resonate with your unique
                  frequency.
                </p>
              </div>
            </div>

            {/* Purest Essence */}
            <div className="flex gap-3">
              <div
                style={{
                  width: "3px",
                  backgroundColor: "#c8974a",
                  flexShrink: 0,
                  borderRadius: "2px",
                }}
              />
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-1"
                  style={{ color: "#2b1a1a", letterSpacing: "0.14em" }}
                >
                  ✦ Purest Essence
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b5c52" }}>
                  Global standards met with organic, dermat-approved apothecary.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/gallery">
            <button
              className="flex items-center gap-3 border px-8 py-3 text-xs tracking-widest uppercase font-semibold transition-all duration-300 hover:bg-[#2b1a1a] hover:!text-white group"
              style={{
                borderColor: "#2b1a1a",
                color: "#2b1a1a",
                letterSpacing: "0.18em",
              }}
            >
              Explore the Legacy
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}