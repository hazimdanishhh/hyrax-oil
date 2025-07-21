import "./Contact.scss";
import background from "/src/assets/contact/contact-us-background.webp";
import Hero from "../../components/hero/Hero";

function Page() {
  return (
    <main>
      <Hero
        image={background}
        crumble="Home"
        crumbleLink="/"
        title="Contact Us"
        desc="Stay connected, stay ahead. Get in touch with us!"
      />
    </main>
  );
}

export default Page;
