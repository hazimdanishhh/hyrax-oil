import "./Certifications.scss";
import Hero from "../../../components/hero/Hero";

import background from "/src/assets/about/certifications.webp";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../functions/motionUtils";
import DiscoverNext from "../../../components/discoverNextSection/DiscoverNext";
import { servicesSections } from "../../../data/NavServicesSections";

function Page() {
  return (
    <>
      <main>
        <Hero
          image={background}
          crumble="About"
          crumbleLink="/about"
          title="Certifications & Compliance"
          desc="Explore Hyrax Oil’s certified quality credentials, from ISO 9001:2015 standards and API approvals to ACEA, OEM endorsements, and the trusted National Mark of Malaysian Brand."
        />

        <DiscoverNext
          subheading="Our Services"
          cardData={servicesSections[0]}
        />
      </main>
    </>
  );
}

export default Page;
