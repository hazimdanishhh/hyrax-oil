import "./sectionLink.scss";
import background from "/src/assets/about/about.webp"

function SectionLink() {
  return (
    <section className="sectionBackground sectionLinkBackground" style={{ backgroundImage: `url(${background})` }}>
      <a href="/about" className="sectionWrapper">
        <div className="text">
          <h2 className="textRegular textXL">About Us</h2>

          <p className="desc">
            Incorporated in Malaysia in 1991, Hyrax Oil Sdn Bhd &#40;Hyrax
            Oil&#41; has achieved a remarkable growth since its inception.
            <br />
            With {new Date().getFullYear() - 1991} years of experience,
            Hyrax Oil has rapidly grown from its humble beginning as a
            transformer oils trading company to become an established
            manufacturer and a global player in the manufacturing of
            lubricants with a full range of top quality and high-performance
            lubricants; including transformer oils, specialty products and
            other petroleum derivatives.
          </p>
        </div>
        <div className="link-div">
          <span className="link">read more</span>
          <img
            className="link-arrow"
            src="./link-arrow.svg"
            alt="Link Arrow"
          />
        </div>
      </a>
    </section>
  );
}

export default SectionLink;
