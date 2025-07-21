import "./Services.scss";
import Hero from "../../components/hero/Hero";
import background from "/src/assets/about/aboutBackground.webp";
import OverviewText from "../../components/overviewText/OverviewText";

function Page() {
  return (
    <main>
      <Hero
        image={background}
        crumble={"Home"}
        crumbleLink={"/"}
        title="Our Services"
        desc="Explore our comprehensive range of services designed to meet your lubrication needs."
      />
      <OverviewText
        title="Overview"
        desc="At Hyrax Oil, we offer a wide range of services tailored to meet the diverse needs of our clients. From high-performance lubricants to specialized petroleum products, our services are designed to enhance operational efficiency and ensure optimal performance in various industries. With a commitment to quality and innovation, we strive to deliver solutions that exceed expectations and drive success for our partners."
      />

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <h2>Our Services Sections</h2>
            <ul>
              <li>
                <a href="/about/the-company">About - The Company</a>
              </li>
              <li>
                <a href="/about/our-leaders">About - Our Leaders</a>
              </li>
              <li>
                <a href="/about/awards">About - Awards & Accreditations</a>
              </li>
              <li>
                <a href="/about/blending-plants">About - Blending Plants</a>
              </li>
              <li>
                <a href="/about/sustainability">About - Sustainability & ESG</a>
              </li>
              <li>
                <a href="/about/csr">About - CSR & Community Outreach</a>
              </li>
              <li>
                <a href="/about/certifications">
                  About - Certifications & Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
