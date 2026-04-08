"use client";
import { useEffect, useState } from "react";

export default function WhatsAppBtn() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // trigger after scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return(
    <a
          href="https://wa.me/8178999143"
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed bottom-3.5 z-[9999] bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-full shadow-lg transition-all duration-300 hover:scale-110
            ${scrolled ? "right-16" : "right-3.5"}
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 fill-white"
          >
            <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.888.757 5.708 2.192 8.18L0 32l7.61-2.153a15.93 15.93 0 008.39 2.407c8.836 0 16-7.164 16-16S24.836.396 16 .396zm0 29.19a13.11 13.11 0 01-6.683-1.84l-.48-.287-4.515 1.276 1.206-4.395-.312-.452a13.06 13.06 0 01-2.06-7.032c0-7.23 5.884-13.114 13.114-13.114 7.23 0 13.114 5.884 13.114 13.114 0 7.23-5.884 13.114-13.114 13.114zm7.18-9.83c-.392-.196-2.32-1.146-2.68-1.277-.36-.13-.622-.196-.884.196-.262.392-1.015 1.277-1.244 1.538-.229.262-.458.294-.85.098-.392-.196-1.655-.61-3.153-1.946-1.166-1.04-1.954-2.325-2.183-2.717-.229-.392-.024-.603.172-.799.176-.175.392-.458.588-.687.196-.229.262-.392.392-.654.13-.262.065-.49-.033-.687-.098-.196-.884-2.13-1.21-2.915-.317-.76-.64-.656-.884-.668l-.754-.013c-.262 0-.687.098-1.048.49-.36.392-1.375 1.342-1.375 3.27 0 1.93 1.408 3.79 1.605 4.05.196.262 2.77 4.234 6.713 5.93.939.405 1.672.647 2.243.828.942.299 1.8.257 2.477.156.756-.113 2.32-.948 2.65-1.863.327-.916.327-1.7.229-1.863-.098-.164-.36-.262-.753-.458z"/>
          </svg>
        </a>
  )
}