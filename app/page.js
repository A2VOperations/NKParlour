import ClientStories from "./home/clientstories/page";
import Footer from "./footer/page";
import GlowMenu from "./home/glowmenu/page";
import Hero from "./home/hero/page";
import MiddleShowcase from "./home/middlesection/page";
import MiddleShowcase2 from "./home/middleshowcase2/page";
import NavBar from "./navbar/page";
import TheCreators from "./home/thecreators/page";
import TopBar from "./topbar/page";
import VisitSanctuary from "./home/visitsanctuary/page";
import VisualPortfolio from "./home/visualportfolio/page";

export const metadata = {
  title: "NK Beauty Salon & Academy | Best Ladies Salon in Burari, Delhi",
  description:
    "Top-rated ladies' beauty salon in Burari. Specializing in Bridal makeup, Hydra facials, and professional hair styling. Trained by VLCC & SS Bollywood Academy.",
  keywords: [
    "beauty salon Burari",
    "hair salon Delhi",
    "NK Beauty Salon",
    "bridal makeup artist Burari",
    "ladies parlor near me",
    "hair smoothing Burari",
  ],
  openGraph: {
    title: "NK Beauty Salon & Academy | Professional Beauty Services in Delhi",
    description:
      "Expert hair, skin, and makeup services at NK Beauty Salon & Academy. Book your appointment today!",
  },
};

export default function Home() {
  return (
    <>
    <main className="min-h-screen">
      <Hero/>
      <MiddleShowcase/>
      <MiddleShowcase2/>
      <GlowMenu/>
      <VisualPortfolio/>
      <ClientStories/>
      <TheCreators/>
      <VisitSanctuary/>
    </main>
    </>
  );
}
