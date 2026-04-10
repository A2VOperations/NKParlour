"use client";

import { useState } from "react";
import { CiShare1 } from "react-icons/ci";


const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=NK+Beauty+Salon+and+Academy+Gate+No+2+25+Foot+Road+Burari+Delhi+110084&output=embed";
const SERVICES = [
  "Select Service",
  "Bridal Makeup",
  "Hair Styling",
  "Skin Therapy",
  "Nail Art",
  "Keratin Treatment",
  "Hydra Facial",
];

export default function VisitSanctuary() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hi NK Parlour,

  I would like to connect with you:

  👤 Name: ${form.name}
  📧 Email: ${form.email}
  💄 Service: ${form.service || "Not selected"}

  📝 Message:
  ${form.message || "No message provided"}

  Please assist me with booking.`;

    const url = `https://wa.me/918789999343?text=${encodeURIComponent(message)}`;

    // ✅ Open in new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-10">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-12">
          <p
            className="text-[10px] tracking-[0.32em] uppercase mb-3 flex items-center gap-2"
            style={{ color: "#c8974a" }}
          >
            <span>✦</span> Find Us
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(34px, 5vw, 56px)",
              color: "#2b1a1a",
              lineHeight: 1.1,
            }}
          >
            Visit Our{" "}
            <span className="italic" style={{ color: "#d63f6e" }}>
              Sanctuary
            </span>
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* LEFT — Map */}
          <div
            className="w-full lg:w-[55%] flex-shrink-0 overflow-hidden"
            style={{
              borderRadius: "16px",
              border: "1px solid #ede0d8",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
              position: "relative",
            }}
          >
            {/* Open in Maps link */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=NK+Beauty+Salon+and+Academy+Gate+No+2+25+Foot+Road+Burari+Delhi+110084"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 left-3 z-10 flex items-center gap-1 px-3 py-[5px] text-[10px] font-semibold bg-white rounded-md shadow-sm hover:bg-gray-50 transition"
              style={{
                color: "#1a73e8",
                border: "1px solid #e0e0e0",
                textDecoration: "none",
              }}
            >
              Open in Maps ↗
            </a>

            {/* Google Maps iframe */}
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="340"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="A2V Salon Location"
            />

            {/* Info bar below map */}
            <div
              className="flex divide-x"
              style={{ borderTop: "1px solid #ede0d8", divideColor: "#ede0d8" }}
            >
              {/* Location */}
              <div className="flex-1 px-5 py-4 flex flex-col">
                <p
                  className="text-[12px] font-bold tracking-[0.2em] uppercase mb-1 flex items-center gap-1 text-[#c8974a]"

                >
                  <span>📍</span> Location
                </p>
                <p href="https://www.google.com/maps/search/?api=1&query=NK+Beauty+Salon+and+Academy+Shop+No.+1+Ground+Floor+Khasra+No.+409/2+Laxmi+Vihar+Burari+Delhi+110084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] leading-[1.6] text-[#4a3a3a] transition">
                  Gate No. 2, 25 Foot Road, Bazar,<br />
                  Wali Gali, Near Govt. Hospital,<br />
                  Laxmi Vihar, Burari,<br />
                  Delhi - 110084
                </p>
                <a href="https://www.google.com/maps/search/?api=1&query=NK+Beauty+Salon+and+Academy+Shop+No.+1+Ground+Floor+Khasra+No.+409/2+Laxmi+Vihar+Burari+Delhi+110084" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af38] border-solid border-2 border-[#c8974a] rounded-full p-1 mt-3 inline-flex items-center justify-center transition">
                  <button><CiShare1 /></button>
                </a>
              </div>

              {/* Hours */}
              <div className="flex-1 px-5 py-4">
                <p
                  className="text-[12px] font-bold tracking-[0.2em] uppercase mb-1 flex items-center gap-1 text-[#c8974a]"
                >
                  <span>🕐</span> Hours
                </p>
                <p className="text-[12px] leading-[1.6]" style={{ color: "#4a3a3a" }}>
                  Mon – Sun: 10 AM – 8 PM
                  <br />
                  Open All Days
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — Contact form */}
          <div className="flex-1 w-full">
            <h3
              className="text-[22px] font-serif mb-1"
              style={{ color: "#2b1a1a", fontFamily: "'Playfair Display', serif" }}
            >
              Get in Touch
            </h3>
            <p className="text-[12px] mb-7" style={{ color: "#b0a0a0" }}>
              Have a question? Our beauty concierge is here to help you.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-0">

              {/* Full Name */}
              <div style={{ borderBottom: "1px solid #e8ddd8" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full py-4 text-[13px] bg-transparent outline-none placeholder-gray-400"
                  style={{ color: "#2b1a1a" }}
                />
              </div>

              {/* Email */}
              <div style={{ borderBottom: "1px solid #e8ddd8" }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full py-4 text-[13px] bg-transparent outline-none placeholder-gray-400"
                  style={{ color: "#2b1a1a" }}
                />
              </div>

              {/* Select Service */}
              <div style={{ borderBottom: "1px solid #e8ddd8" }}>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full py-4 text-[13px] bg-transparent outline-none appearance-none cursor-pointer"
                  style={{ color: form.service ? "#2b1a1a" : "#9ca3af" }}
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s === "Select Service" ? "" : s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div style={{ borderBottom: "1px solid #e8ddd8" }}>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full py-4 text-[13px] bg-transparent outline-none resize-none placeholder-gray-400"
                  style={{ color: "#2b1a1a" }}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="mt-8 w-full flex items-center justify-center gap-2 py-4 text-[11px] font-bold tracking-[0.25em] uppercase text-white transition-all duration-300 hover:opacity-90"
                style={{
                  background: "#2b1a1a",
                  borderRadius: "6px",
                }}
              >
                Send Message <span>✈</span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
