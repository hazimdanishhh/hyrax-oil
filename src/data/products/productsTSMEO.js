import image1 from "/src/assets/products/two-stroke/Hyrax-Super-2T-Plus.webp";
import image2 from "/src/assets/products/two-stroke/Hyrax-Super-2T.webp";
import image3 from "/src/assets/products/two-stroke/Hyrax-Super-Outboard-TCW-III.webp";
import PDS1 from "/src/assets/products/two-stroke/Hyrax-Super-2T-Plus.pdf";
import PDS2 from "/src/assets/products/two-stroke/Hyrax-Super-2T.pdf";
import PDS3 from "/src/assets/products/two-stroke/Hyrax-Super-Outboard-TCW-III.pdf";

export const productsTSMEO = [
  {
    src: image1,
    alt: "Hyrax Super 2T Plus",
    title: "Hyrax Super 2T Plus",
    link: "#",
    type: "Semi Synthetic",
    description:
      "An extreme performance synthetic blend two-stroke motorcycle oil specially engineered based on racing oil technology for the extreme protection of all modern high revving and extreme performance two-stroke motorcycle engines operating under very severe riding conditions.",
    grades: ["API TC JASO FC"],
    pdsLink: PDS1,
  },
  {
    src: image2,
    alt: "Hyrax Super 2T",
    title: "Hyrax Super 2T",
    link: "#",
    type: "Premium Blend",
    description:
      "A high quality two-stroke motorcycle oil specially formulated for the lubrication all modern high revs, high performance two-stroke motorcycle engines operating under very severe riding conditions both on and off the track.",
    grades: ["API TB JASO FB"],
    pdsLink: PDS2,
  },
  {
    src: image3,
    alt: "Hyrax Super Outboard TCW III",
    title: "Hyrax Super Outboard TCW III",
    link: "#",
    type: "Premium Blend",
    description:
      "A premium performance two-stroke motor oil specially designed for use in water cooled outboard engines (both large and small outputs) running at all fuel to oil ratios specified by the Original Equipment Manufacturers (OEMs).",
    pdsLink: PDS3,
  },
];
