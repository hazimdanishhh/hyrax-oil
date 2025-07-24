import Hero from "../../../components/hero/Hero";
import MarketMap from "./sections/market-map/MarketMap";
import History from "../../../components/history/History";

import background from "/src/assets/about/theCompany.webp";
import CompanyProfile from "./sections/companyProfile/CompanyProfile";
import VisionMission from "./sections/visionMission/VisionMission";
import GlobalImpact from "./sections/globalImpact/GlobalImpact";
import CorporateVideo from "./sections/corporateVideo/CorporateVideo";
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
          title="The Company"
          desc="The World's No. 1 Top Quality Oils and Lubricants"
        />
        <CompanyProfile />
        <MarketMap />
        <VisionMission />
        <GlobalImpact />
        <History />
        <CorporateVideo />
        <DiscoverNext subheading="Our Leadership" cardData={aboutSections[1]} />
      </main>
    </>
  );
}

export default Page;
