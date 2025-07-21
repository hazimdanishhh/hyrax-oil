import "./OverviewText.scss";

function OverviewText({ title, desc }) {
  return (
    <section className="sectionLight">
      <div className="sectionWrapper">
        <div className="sectionContent aboutUsOverviewText">
          <h2 className="textRegular textXL">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </section>
  );
}

export default OverviewText;
