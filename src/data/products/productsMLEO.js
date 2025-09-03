import image1 from "/src/assets/products/Hyrax-Drum.webp";
import PDS1 from "/src/assets/products/marine/Hyrax-Admiral.pdf";
import PDS2 from "/src/assets/products/marine/Hyrax-TOP-DEO.pdf";
import PDS3 from "/src/assets/products/marine/Hyrax-Samudra-RF-Series.pdf";
import PDS4 from "/src/assets/products/marine/Hyrax-Samudra-DF-Series.pdf";
import PDS5 from "/src/assets/products/marine/Hyrax-Samudra-CL-570.pdf";
import PDS6 from "/src/assets/products/marine/Hyrax-Samudra-CL-540.pdf";
import PDS7 from "/src/assets/products/marine/Hyrax-Samudra-SO-306.pdf";
import PDS8 from "/src/assets/products/marine/Hyrax-Locomotive-Oil.pdf";

export const productsMLEO = [
  {
    src: image1,
    alt: "Hyrax Admiral",
    title: "Hyrax Admiral",
    link: "#",
    description:
      "A super high performance heavy duty diesel engine oil (SHPD) exclusively developed for extended drain diesel engines in marine application especially for those of MTU engines.",
    grades: ["15W-40"],
    pdsLink: PDS1,
    shortDesc:
      "Super high-performance SHPD diesel oil for marine engines, delivering extended drain capability and durability for MTU engines.",
    cardDesc: "Marine-grade power and endurance.",
  },
  {
    src: image1,
    alt: "Hyrax TOP DEO",
    title: "Hyrax TOP DEO",
    link: "#",
    description:
      "A superior performance monograde diesel engine oil specially designed for marine applications operating under severe condition using diesel fuels with low to moderate sulfur content.",
    grades: ["SAE 40", "SAE 50"],
    pdsLink: PDS2,
    shortDesc:
      "Superior monograde diesel oil for marine applications, ensuring protection under severe operating conditions with low sulfur fuels.",
    cardDesc: "Tough oil for tough seas.",
  },
  {
    src: image1,
    alt: "Hyrax Samudra RF Series",
    title: "Hyrax Samudra RF Series",
    link: "#",
    description:
      "A series of premium quality cylinder and crankcase oils (20 TBN to 50 TBN) specially formulated for use in high output highly-rated medium speed trunk-piston marine diesel engines which are designed to operate on heavy residual fuel with sulfur content between 2.0% to 3.5% by weight operating under very severe working conditions.",
    grades: [
      "RF20 320",
      "RF20 420",
      "RF30 330",
      "RF30 430",
      "RF40 340",
      "RF40 440",
      "RF50 350",
      "RF50 450",
    ],
    pdsLink: PDS3,
    shortDesc:
      "Premium cylinder and crankcase oils for medium-speed marine diesel engines running on heavy residual fuels under severe conditions.",
    cardDesc: "Powerful protection for trunk-piston engines.",
  },
  {
    src: image1,
    alt: "Hyrax Samudra DF Series",
    title: "Hyrax Samudra DF Series",
    link: "#",
    description:
      "A series of premium quality cylinder and crankcase oil specially formulated for use in highly rated medium speed trunk-piston marine diesel engines (marine or stationary service) which are designed to operate on distillate fuels or light fuel blends with sulphur content up to 1.0 % by weight operating under severe working conditions.",
    grades: ["DF12 312", "DF12 412", "DF15 315", "DF15 415"],
    pdsLink: PDS4,
    shortDesc:
      "Premium marine diesel oil tailored for engines running on distillate or light fuel blends with low sulfur content.",
    cardDesc: "Reliable oil for clean marine engines.",
  },
  {
    src: image1,
    alt: "Hyrax Samudra CL 570",
    title: "Hyrax Samudra CL 570",
    link: "#",
    description:
      "A premium quality cylinder oil specially formulated using high quality base stocks and specially selected additive technology intended for the cylinder lubrication of today’s longer piston stroke modern slow speed crosshead marine engines burning heavy residual fuels with sulfur content between 2.5% to 3.5% by weight operating under the very severe conditions in marine vessels or stationery power generation services.",
    grades: ["SAE 50"],
    pdsLink: PDS5,
    shortDesc:
      "High-quality cylinder oil designed for modern slow-speed crosshead engines burning heavy residual fuels under harsh conditions.",
    cardDesc: "Strong cylinder protection at sea.",
  },
  {
    src: image1,
    alt: "Hyrax Samudra CL 540",
    title: "Hyrax Samudra CL 540",
    link: "#",
    description:
      "A high performance 40 TBN SAE 50 cylinder oil designed for the cylinder lubrication of modern slow speed crosshead marine engines burning distillate fuels with sulfur content up to 0.5% by weight operating under severe conditions in marine vessels.",
    grades: ["SAE 50"],
    pdsLink: PDS6,
    shortDesc:
      "High-performance SAE 50 cylinder oil for slow-speed marine engines using low-sulfur fuels under demanding conditions.",
    cardDesc: "Trusted cylinder oil for modern vessels.",
  },
  {
    src: image1,
    alt: "Hyrax Samudra SO 306",
    title: "Hyrax Samudra SO 306",
    link: "#",
    description:
      "A high performance multipurpose 6 TBN crankcase marine diesel engine oil designed primarily as system oil for large low speed crosshead marine engine in both marine and stationary applications.",
    grades: ["SAE 30"],
    pdsLink: PDS7,
    shortDesc:
      "Multipurpose crankcase system oil for large low-speed crosshead marine engines in both marine and stationary use.",
    cardDesc: "System oil built for reliability.",
  },
  {
    src: image1,
    alt: "Hyrax Locomotive Oil",
    title: "Hyrax Locomotive Oil",
    link: "#",
    description:
      "A series of premium quality “zinc-free” LMOA Generation 5, API CF/CF-2 diesel engine oils for use in high and medium speed heavy-duty automotive and high output railroad diesel engines fitted with silver bearings burning distillate fuel with 0.7% weight sulphur content maximum.",
    grades: ["SAE 40", "20W-40"],
    pdsLink: PDS8,
    shortDesc:
      "Premium zinc-free locomotive oil for high-output railroad and heavy-duty diesel engines with silver bearings.",
    cardDesc: "Engineered strength for locomotives.",
  },
];
