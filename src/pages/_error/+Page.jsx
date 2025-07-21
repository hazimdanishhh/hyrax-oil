import Hero from "../../components/hero/Hero";
import "./Error.scss";
import background from "/src/assets/404.webp";

function Page({ is404 }) {
  return (
    <main>
      <Hero
        image={background}
        crumble="Home"
        crumbleLink="/"
        title={is404 ? "404 - Page Not Found" : "Something went wrong"}
        desc={
          is404
            ? "Sorry, we couldn’t find that page."
            : "An unexpected error occurred."
        }
      />
    </main>
  );
}

export default Page;
