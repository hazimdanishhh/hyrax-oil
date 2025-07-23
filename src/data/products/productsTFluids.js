import image1 from "/src/assets/products/transmission/Hyrax-ATF-SP-4.webp";
import image2 from "/src/assets/products/transmission/Hyrax-MV-ATF.webp";
import image3 from "/src/assets/products/transmission/Hyrax-CVT-Fluid.webp";
import image4 from "/src/assets/products/transmission/Hyrax-ATF-Dexron-III-D.webp";
import image5 from "/src/assets/products/transmission/Hyrax-ATF-Dexron-II-D.webp";
import image6 from "/src/assets/products/Hyrax-Drum.webp";
import PDS1 from "/src/assets/products/transmission/Hyrax-ATF-SP-4.pdf";
import PDS2 from "/src/assets/products/transmission/Hyrax-MV-ATF.pdf";
import PDS3 from "/src/assets/products/transmission/Hyrax-CVT-Fluid.pdf";
import PDS4 from "/src/assets/products/transmission/Hyrax-ATF-Dexron-III-D.pdf";
import PDS5 from "/src/assets/products/transmission/Hyrax-ATF-Dexron-II-D.pdf";
import PDS6 from "/src/assets/products/transmission/Hyrax-Tribol-TO-4.pdf";

export const productsTFluids = [
  {
    src: image1,
    alt: "Hyrax ATF SP-4",
    title: "Hyrax ATF SP-4",
    link: "#",
    type: "Synthetic Blend",
    description:
      "An advanced technology synthetic Automatic Transmission Fluid (ATF) specially engineered for the lubrication of power transmissions and hydraulic systems for passenger cars and trucks.",
    grades: ["ATF SP-4"],
    pdsLink: PDS1,
  },
  {
    src: image2,
    alt: "Hyrax MV ATF",
    title: "Hyrax MV ATF",
    link: "#",
    type: "Synthetic Blend",
    description:
      "An advanced technology synthetic Multi-Vehicle Automatic Transmission Fluid (ATF) specially engineered for the lubrication of power transmissions and hydraulic systems for passenger cars and trucks.",
    grades: ["ATF"],
    pdsLink: PDS2,
  },
  {
    src: image3,
    alt: "Hyrax CVT Fluid",
    title: "Hyrax CVT Fluid",
    link: "#",
    type: "Synthetic Blend",
    description:
      "An advanced technology synthetic Multi-Vehicle Continuous Variable Transmission Fluid specially designed for the lubrication of continuous variable transmissions for passenger cars and trucks.",
    grades: ["CVT Fluid"],
    pdsLink: PDS3,
  },
  {
    src: image4,
    alt: "Hyrax ATF Dexron III D",
    title: "Hyrax ATF Dexron III D",
    link: "#",
    type: "Synthetic Blend",
    description:
      "A modern, synthetic blend high performance transmission fluid primarily intended for use in power transmission and hydraulic system of passenger cars and trucks automatic transmissions, powershift transmissions in off-highway equipment, power steering and hydraulic systems where DEXRON® III or Allison C-4 fluid is specified.",
    grades: ["Dexron III D"],
    pdsLink: PDS4,
  },
  {
    src: image5,
    alt: "Hyrax ATF Dexron II D",
    title: "Hyrax ATF Dexron II D",
    link: "#",
    type: "Premium Blend",
    description:
      "A modern, high performance quality fluid primarily intended for use in automatic transmissions and in many other applications where DEXRON® II fluids are specified.",
    grades: ["Dexron II D"],
    pdsLink: PDS5,
  },
  {
    src: image6,
    alt: "Hyrax Tribol TO-4",
    title: "Hyrax Tribol TO-4",
    link: "#",
    type: "Premium Blend",
    description:
      "A premium quality high performance transmission drive train fluids specially designed for application in powershift transmissions, drive trains and hydraulic system of off-highway equipment where the use of an oil meeting Caterpillar TO-4 is recommended.",
    grades: ["SAE 10W", "SAE 30", "SAE 40", "SAE 50"],
    pdsLink: PDS6,
  },
];
