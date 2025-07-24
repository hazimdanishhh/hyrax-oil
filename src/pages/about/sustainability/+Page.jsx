import "./Sustainability.scss";
import Hero from "../../../components/hero/Hero";

import background from "/src/assets/about/sustainability.webp";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../functions/motionUtils";
import DiscoverNext from "../../../components/discoverNextSection/DiscoverNext";
import { aboutSections } from "../../../data/NavAboutSections";

function Page() {
  return (
    <>
      <main>
        <Hero
          image={background}
          crumble="About"
          crumbleLink="/about"
          title="Sustainability & ESG"
          desc="Discover how we lead with responsible innovation, from eco‑friendly lubricants, to community relief and transparent governance, and now as Malaysia’s exclusive distributor of Ergon’s ester-based transformer oils for safer, cleaner power infrastructure."
        />

        <DiscoverNext subheading="Community" cardData={aboutSections[5]} />
      </main>
    </>
  );
}

export default Page;
