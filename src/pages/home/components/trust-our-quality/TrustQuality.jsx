import React from "react";
import "./trustQuality.scss";
import { Link } from "react-router-dom";

function TrustQuality() {
  return (
    <div className="trust-background">
      <div className="bg-gradient">
        <div className="section-link-wrapper">
          <div className="text">
            <h2 className="title">
              Trust Our <span>Quality</span>
            </h2>

            <p className="desc">
              Our dedication and commitment towards quality has earned us the{" "}
              <span>recognition</span>, <span>key certifications</span> and{" "}
              <span>product approvals</span> which include:
            </p>
            <a
              className="desc-link"
              href="https://www.api.org/"
              target="__blank"
            >
              American Petroleum Institute &#40;“API”&#41;
              <img
                className="link-arrow"
                src="./link-arrow-2.svg"
                alt="Link Arrow"
              />
            </a>
            <a
              className="desc-link"
              href="https://www.acea.auto/"
              target="__blank"
            >
              European Automobile Manufacturers Association &#40;“ACEA”&#41;
              <img
                className="link-arrow"
                src="./link-arrow-2.svg"
                alt="Link Arrow"
              />
            </a>
            <a
              className="desc-link"
              href="https://www.mtu-solutions.com/eu/en.regionselect.html"
              target="__blank"
            >
              MTU Friedrichshafen GmbH &#40;"MTU"&#41;
              <img
                className="link-arrow"
                src="./link-arrow-2.svg"
                alt="Link Arrow"
              />
            </a>
            <a
              className="desc-link"
              href="https://www.doble.com/"
              target="__blank"
            >
              Doble Engineering Company &#40;“DOBLE”&#41;
              <img
                className="link-arrow"
                src="./link-arrow-2.svg"
                alt="Link Arrow"
              />
            </a>
            <img className="api-qr" src="./API-QR.png" alt="API QR Code" />
          </div>

          <Link
            className="link-div"
            target="__blank"
            to="https://engineoil.api.org/Directory/EolcsResultsDetail?accountId=-1&companyId=10166&resultsUrl=%2FDirectory%2FEolcsResults%3FaccountId%3D-1%26companyName%3DHYRAX%2520OIL"
          >
            <span className="link">read more</span>
            <img
              className="link-arrow"
              src="./link-arrow.svg"
              alt="Link Arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrustQuality;
