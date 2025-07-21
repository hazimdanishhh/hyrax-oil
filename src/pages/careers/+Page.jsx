import Hero from "../../components/hero/Hero";
import background from "/src/assets/careers/careersBackground.webp";

function Page() {
  return (
    <main>
      <Hero
        image={background}
        crumble="Home"
        crumbleLink="/"
        title="Careers"
        desc="Join our team and be part of something great! Explore our career opportunities and apply today."
      />
      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent">
            <h2 className="textRegular textXXL">We Are Hiring!</h2>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
