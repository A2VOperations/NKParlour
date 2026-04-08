import "./globals.css";
import { Playfair_Display, Montserrat } from "next/font/google";
import TopBar from "./topbar/page";
import NavBar from "./navbar/page";
import Footer from "./footer/page";

export const viewport={
  colorSchema:"light"
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{colorSchema:"light"}}
    >
      <body className="min-h-full flex flex-col">
              <TopBar/>
              <NavBar/>
              {children}
              <Footer/>
      </body>
    </html>
  );
}
