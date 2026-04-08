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
