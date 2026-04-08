import "./globals.css";
import TopBar from "./topbar/page";
import NavBar from "./navbar/page";
import Footer from "./footer/page";

export const viewport = {
  themeColor: "#ffffff", // optional but good
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