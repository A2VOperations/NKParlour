"use client";

import Image from "next/image";

const PLANS = [
  {
    id: 1,
    badge: "ESSENTIAL RITUAL",
    title: "Classic Elegance",
    subtitle: "PROFESSIONAL CARE",
    price: "2,499",
    featured: false,
    image: "https://plus.unsplash.com/premium_photo-1724762184102-c61dab5edf9f",
    features: ["Signature Haircut", "Organic Facial", "Thread & Shape", "Head Massage"],
  },
  {
    id: 2,
    badge: "MOST LOVED",
    title: "Royal Glow",
    subtitle: "PROFESSIONAL CARE",
    price: "5,999",
    featured: true,
    image: "https://images.unsplash.com/photo-1610276347459-825713e28145",
    features: ["Hydra Facial Luxe", "Global Hair Color", "Keratin Spa", "Premium Manicure"],
  },
  {
    id: 3,
    badge: "COUTURE LEGACY",
    title: "The Bridal Ritual",
    subtitle: "PROFESSIONAL CARE",
    price: "12,499",
    featured: false,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
    features: ["HD Bridal Makeup", "Pre-Bridal Care", "Hair Artistry", "Draping & Nails"],
  },
];

export default function GlowMenu() {
 
  return (
    <section
      className="w-full py-20 px-4 sm:px-10"
      style={{
        background: "linear-gradient(160deg, #fff0f4 0%, #faf7f4 50%, #fce8f0 100%)",
      }}
    >
      {/* ── Header ── */}
      <div className="text-center mb-14">
        <p
          className="text-[11px] tracking-[0.32em] uppercase mb-3 flex items-center justify-center gap-2"
          style={{ color: "#d63f6e" }}
        >
          <span>♥</span> Unveil Your Radiance <span>♥</span>
        </p>
        <h2
          className="leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5vw, 58px)",
            color: "#3d2b2e",
          }}
        >
          Our Signature{" "}
          <span
            className="italic"
            style={{ color: "#d63f6e" }}
          >
            Glow Menu
          </span>
        </h2>
        {/* Gold underline */}
        <div
          className="mx-auto mt-4"
          style={{ width: "48px", height: "2px", backgroundColor: "#c8974a" }}
        />
      </div>

      {/* ── Cards ── */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
        {PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      {/* ── Footer badge ── */}
      <div className="flex items-center justify-center gap-3 mt-14">
        <span style={{ fontSize: "22px", color: "#c8974a" }}>⚜</span>
        <p
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "#9e8e7e" }}
        >
          Luxury Salon Experience
        </p>
        <span style={{ fontSize: "18px", color: "#c8974a" }}>📋</span>
      </div>
    </section>
  );
}

function PlanCard({ plan }) {
  const { badge, title, subtitle, price, featured, image, features } = plan;

  return (
    <div
      className="relative flex flex-col bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      style={{
        borderRadius: "24px",
        border: featured ? "2px solid #d63f6e" : "1px solid #f0e8e8",
        boxShadow: featured
          ? "0 8px 40px rgba(214,63,110,0.18)"
          : "0 4px 24px rgba(0,0,0,0.07)",
      }}
    >
      {/* Image area */}
      <div className="relative w-full overflow-hidden" style={{ height: "160px" }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
        {/* Badge pill */}
        <div
          className="absolute top-4 left-4 px-3 py-[4px] text-[8.5px] font-bold tracking-[0.18em] uppercase"
          style={{
            borderRadius: "999px",
            background: featured ? "#d63f6e" : "rgba(255,255,255,0.92)",
            color: featured ? "#fff" : "#d63f6e",
            border: featured ? "none" : "1px solid #f0c0ce",
            backdropFilter: "blur(6px)",
          }}
        >
          {badge}
        </div>

        {/* Crown icon for featured */}
        {featured && (
          <div className="absolute top-4 right-4 text-xl" style={{ color: "#c8974a" }}>
            👑
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
        {/* Title row */}
        <div className="mb-4">
          <h3
            className="font-serif text-[22px] leading-tight"
            style={{ color: "#2b1a1a", fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h3>
          <p
            className="text-[9px] tracking-[0.22em] uppercase mt-1"
            style={{ color: "#b0a0a0" }}
          >
            {subtitle}
          </p>
        </div>

        {/* Price */}
        <p
          className="font-bold mb-5 leading-none"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 4vw, 48px)",
            color: "#2b1a1a",
          }}
        >
          <span
            className="font-normal"
            style={{ fontSize: "0.5em", verticalAlign: "super", color: "#2b1a1a" }}
          >
            ₹
          </span>
          {price}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-[10px] mb-7 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span style={{ color: "#d63f6e", fontSize: "13px" }}>✓</span>
              <span className="text-[13px]" style={{ color: "#6b5c52" }}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
  onClick={()=>handleWhatsAppClick(plan)}
  className="w-full flex items-center justify-center gap-2 py-[13px] text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
  style={{
    borderRadius: "10px",
    background: featured ? "#d63f6e" : "transparent",
    color: featured ? "#fff" : "#2b1a1a",
    border: featured ? "none" : "1.5px solid #2b1a1a",
  }}
  onMouseEnter={(e) => {
    if (!featured) {
      e.currentTarget.style.background = "#2b1a1a";
      e.currentTarget.style.color = "#fff";
    }
  }}
  onMouseLeave={(e) => {
    if (!featured) {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "#2b1a1a";
    }
  }}
>
   Reserve my Glow
</button>
      </div>
    </div>
  );
}
function handleWhatsAppClick(plan) {
  const phoneNumber = "918178999943";

  const message = `Hello N K Beauty Salon,

I want to book the *${plan.title}* package.

💄 Package: ${plan.title}
🏷️ Plan: ${plan.badge}
💰 Price: ₹${plan.price}

Includes:
${plan.features.map((f) => `• ${f}`).join("\n")}

Please assist me with booking.`;

  const encodedMessage = encodeURIComponent(message);

  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
}