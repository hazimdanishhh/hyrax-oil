import image1 from "/src/assets/products/passenger/Hyrax-Platineum-HS.webp";
import image2 from "/src/assets/products/passenger/Hyrax-Platineum.webp";
import image3 from "/src/assets/products/passenger/Hyrax-Aureus.webp";
import image4 from "/src/assets/products/passenger/Hyrax-Elite-Ultra.webp";
import image5 from "/src/assets/products/passenger/Hyrax-Ultra-Novo.webp";
import PDS1 from "/src/assets/products/passenger/Hyrax-Platineum-HS.pdf";
import PDS2 from "/src/assets/products/passenger/Hyrax-Platineum.pdf";
import PDS3 from "/src/assets/products/passenger/Hyrax-Aureus.pdf";
import PDS4 from "/src/assets/products/passenger/Hyrax-Elite-Ultra.pdf";
import PDS5 from "/src/assets/products/passenger/Hyrax-Ultra-Novo.pdf";

export const productsPCMO = [
  {
    src: image1,
    alt: "Hyrax Platineum HS",
    title: "Hyrax Platineum HS",
    link: "#",
    type: "Fully Synthetic",
    description:
      "An ultimate-performance, environmentally friendly, fully synthetic, multigrade motor oil that is specially engineered for those who demand the absolute best in motor oil lubrication technology that exceeds OEMs requirements and the latest API SN specification.",
    grades: ["0W-20"],
    pdsLink: PDS1,
    shortDesc:
      "Eco-friendly fully synthetic oil engineered for ultimate performance and superior engine protection.",
    cardDesc: "Ultimate performance and superior engine protection.",
  },
  {
    src: image2,
    alt: "Hyrax Platineum",
    title: "Hyrax Platineum",
    link: "#",
    type: "Fully Synthetic",
    description:
      "An ultimate-performance, fully synthetic, multigrade motor oil that is specially engineered for those who demand the absolute best in motor oil lubrication technology that exceed OEMs requirements and the latest API SN Plus / ILSAC GF-5 Plus specifications (depending on viscosity grade).",
    grades: ["0W-30", "5W-40"],
    pdsLink: PDS2,
    shortDesc:
      "Premium fully synthetic oil delivering maximum performance and advanced protection for modern engines.",
    cardDesc: "Maximum performance and advanced protection.",
  },
  {
    src: image3,
    alt: "Hyrax Aureus",
    title: "Hyrax Aureus",
    link: "#",
    type: "Fully Synthetic",
    description:
      "An extreme performance API SN fully synthetic motor oil that is exclusively designed to provide excellent engine protection and performance for current and future high performance engines.",
    grades: ["5W-40"],
    pdsLink: PDS3,
    shortDesc:
      "High-performance fully synthetic oil built for power, protection, and next-gen engine demands.",
    cardDesc: "Built for power, protection, and next-gen engine demands.",
  },
  {
    src: image4,
    alt: "Hyrax Elite Ultra",
    title: "Hyrax Elite Ultra",
    link: "#",
    type: "Semi Synthetic",
    description:
      "A high performance API SN synthetic blend multigrade motor oil which is exclusively formulated with premium quality base oils and advanced technology additive system that cleanses and locks away harmful dirt and deposits.",
    grades: ["5W-30", "10W-40"],
    pdsLink: PDS4,
    shortDesc:
      "Semi-synthetic motor oil with advanced cleaning technology for lasting engine performance.",
    cardDesc: "Advanced cleaning tech for lasting engine performance.",
  },
  {
    src: image5,
    alt: "Hyrax Ultra Novo",
    title: "Hyrax Ultra Novo",
    link: "#",
    type: "Premium Blend",
    description:
      "A premium quality multigrade motor oil designed for use in modern passenger cars and light trucks.",
    grades: ["10W-30", "20W-50"],
    pdsLink: PDS5,
    shortDesc:
      "Reliable premium blend oil for smooth performance in passenger cars and light trucks.",
    cardDesc: "Smooth performance in passenger cars and light trucks.",
  },
];
