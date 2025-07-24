import "./BlendingPlants.scss";
import Hero from "../../../components/hero/Hero";

import background from "/src/assets/about/blendingPlants.webp";
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
          title="Lube Oil Blending Plants"
          desc="Experience Hyrax Oil’s cutting-edge blending plants in Malaysia, Sri Lanka, and South Africa, where innovation meets reliability in every drop."
        />

        <DiscoverNext
          subheading="Sustainability Efforts"
          cardData={aboutSections[4]}
        />
      </main>
    </>
  );
}

export default Page;
