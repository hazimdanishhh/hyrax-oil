import "./DiscoverNext.scss";
import PageSectionCard from "../PageSectionCard/PageSectionCard";

function DiscoverNext({ subheading, cardData }) {
  return (
    <section className="sectionDark">
      <div className="sectionWrapper discoverNextSectionWrapper">
        <span className="sectionTag textLight textXXS">{subheading}</span>
        <h2 className="textRegular textL">Discover Next</h2>
        <ul className="discoverNextSectionCardLayout">
          <PageSectionCard {...cardData} />
        </ul>
      </div>
    </section>
  );
}

export default DiscoverNext;
