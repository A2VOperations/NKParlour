import "./globals.css";
import TopBar from "./topbar/page";
import NavBar from "./navbar/page";
import Footer from "./footer/page";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata = {
  authors: [{ name: "NK Beauty Salon & Academy" }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "NK Beauty Salon & Academy",
    images: [
      {
        url: "https://nk-parlour.vercel.app/og-image.jpg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-full flex flex-col"
        style={{ colorScheme: "light" }} 
      >
        <TopBar />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
