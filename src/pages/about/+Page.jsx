import "./About.scss";
import Hero from "../../components/hero/Hero";
import background from "/src/assets/about/the-company-background.webp";

function Page() {
  return (
    <main>
      <Hero
        image={`url(${background})`}
        title="About Us"
        desc="The World's No. 1 Top Quality Oils and Lubricants"
      />
      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <h2>About Us Overview</h2>
          </div>
        </div>
      </section>

      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <h2>About Us Sections</h2>
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
