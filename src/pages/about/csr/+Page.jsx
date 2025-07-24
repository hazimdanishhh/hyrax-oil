import "./Csr.scss";
import Hero from "../../../components/hero/Hero";

import background from "/src/assets/about/csr.webp";
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
          title="CSR & Community Outreach"
          desc="Building stronger, healthier communities through rural empowerment, flood‑relief, school support, orphan care, and environmental‑health awareness projects."
        />

        <DiscoverNext
          subheading="Certified & Compliant"
          cardData={aboutSections[6]}
        />
      </main>
    </>
  );
}

export default Page;
