import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

ArrowRightIcon;

function ServicesSectionCard({ image, alt, title, description }) {
  return (
    <li className="servicesSectionCard textRegular textXS">
      <a href="/contact#contactForm" className="servicesSectionCardLink">
        {image && (
          <div className="servicesSectionImage">
            <img src={image} alt={alt || title} />
          </div>
        )}
        <h3 className="textRegular textS">{title}</h3>
        {description && <p className="textLight">{description}</p>}
        <div className="servicesSectionButton">
          Contact Us
          <ArrowRightIcon className="servicesSectionButtonIcon" />
        </div>
      </a>
    </li>
  );
}

export default ServicesSectionCard;
