import Hero from "../../../components/hero/Hero";
import MarketMap from "./sections/market-map/MarketMap";
import History from "../../../components/history/History";

import background from "/src/assets/about/the-company-background.webp";
import CompanyProfile from "./sections/companyProfile/CompanyProfile";
import VisionMission from "./sections/visionMission/VisionMission";
import GlobalImpact from "./sections/globalImpact/GlobalImpact";
import CorporateVideo from "./sections/corporateVideo/CorporateVideo";

function Page() {
  return (
    <>
      <main>
        <Hero
          image={`url(${background})`}
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
      </main>
    </>
  );
}

export default Page;
