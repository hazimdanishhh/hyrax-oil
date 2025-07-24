import "./Media.scss";

import background from "/src/assets/media/media.webp";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../../components/hero/Hero";
import TikTokEmbed from "../../components/tiktokEmbed/TikTokEmbed";
import ButtonRouter from "../../components/buttons/ButtonRouter";

function Page() {
  const videoIds = [
    "7527878050604649735",
    "7517874391342927111",
    "7432852797915286801",
  ];

  return (
    <main>
      <Hero
        image={background}
        crumble="Home"
        crumbleLink="/"
        title="Media"
        desc="Explore our latest videos, media features, and stories highlighting Hyrax Oil’s innovation, impact, and presence across the globe."
      />

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <div className="mediaSectionHeading">
              <span className="sectionTag textLight textXXS">Events</span>
              <h2 className="textRegular textL">Our Featured Events</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <div className="mediaSectionHeading">
              <span className="sectionTag textLight textXXS">Motorsports</span>
              <h2 className="textRegular textL">Our Motorsports Activities</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <div className="mediaSectionHeading">
              <span className="sectionTag textLight textXXS">Instagram</span>
              <h2 className="textRegular textL">
                Our Featured Instagram Posts
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent tikTokEmbedContent">
            <div className="mediaSectionHeading">
              <span className="sectionTag textLight textXXS">TikTok</span>
              <h2 className="textRegular textL">Our Featured TikTok Videos</h2>
            </div>

            <div className="tiktokEmbedLayout">
              {videoIds.map((id) => (
                <TikTokEmbed key={id} videoId={id} />
              ))}
            </div>

            <ButtonRouter
              name="View More on TikTok"
              link="https://www.tiktok.com/@hyraxoilofficial"
              type="button-type-2"
              target="_blank"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
