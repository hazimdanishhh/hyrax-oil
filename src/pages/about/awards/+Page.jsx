import "./Awards.scss";
import Hero from "../../../components/hero/Hero";

import background from "/src/assets/about/awards.webp";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../functions/motionUtils";
import DiscoverNext from "../../../components/discoverNextSection/DiscoverNext";
import { aboutSections } from "../../../data/NavAboutSections";
import AwardCard from "../../../components/awardCard/AwardCard";
import { awardsList } from "../../../data/awardsList";

function Page() {
  return (
    <>
      <main>
        <Hero
          image={background}
          crumble="About"
          crumbleLink="/about"
          title="Awards & Accreditations"
          desc="Explore the prestigious awards, certifications, and global accreditations that reflect Hyrax Oil’s unwavering commitment to quality, performance, and industry leadership."
        />

        <section className="sectionLight">
          <div className="sectionWrapper">
            <div className="sectionContent">
              <motion.ul
                className="awardCardLayout"
                initial="hidden"
                whileInView="visible"
                variants={staggerContainer}
                viewport={{ once: true }}
              >
                {[...awardsList].reverse().map((award, index) => (
                  <AwardCard
                    key={index}
                    image={award.image}
                    title={award.title}
                    year={award.year}
                    desc={award.desc}
                    alt={award.alt}
                  />
                ))}
              </motion.ul>
            </div>
          </div>
        </section>

        <DiscoverNext
          subheading="Lube Oil Blending Plants"
          cardData={aboutSections[3]}
        />
      </main>
    </>
  );
}

export default Page;
