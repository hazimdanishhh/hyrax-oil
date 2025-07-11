import image1 from "/src/assets/products/Hyrax-Drum.webp";
import PDS1 from "/src/assets/products/transformer/Hyrax-Transtherm-HT.pdf";
import PDS2 from "/src/assets/products/transformer/Hyrax-Pneumatic-Tools-Lubricant.pdf";
import PDS3 from "/src/assets/products/transformer/Hyrax-Hypertrans-HR.pdf";
import PDS4 from "/src/assets/products/transformer/Hyrax-Hypertrans.pdf";
import PDS5 from "/src/assets/products/transformer/Hyrax-Elektrans-II.pdf";
import PDS6 from "/src/assets/products/transformer/Hyrax-Elektrans-I.pdf";
import PDS7 from "/src/assets/products/transformer/Hyrax-Maltrans-SPX.pdf";
import PDS8 from "/src/assets/products/transformer/Hyrax-Maltrans-SP.pdf";
import PDS9 from "/src/assets/products/transformer/Hyrax-Cable-Oil.pdf";

export const productsTEO = [
  {
    src: image1,
    alt: "Hyrax Transtherm HT",
    title: "Hyrax Transtherm HT",
    link: "#",
    description:
      "A specially selected low viscosity mineral based heat transfer fluid formulated for use in closed, oil sealed, heat transfer systems.",
    grades: ["ISO VG 32", "ISO VG 46"],
    pdsLink: PDS1,
  },
  {
    src: image1,
    alt: "Hyrax Pneumatic Tools Lubricant",
    title: "Hyrax Pneumatic Tools Lubricant",
    link: "#",
    description:
      "Specially formulated with highly refined paraffinic base oils and advanced additive system to provide maximum protection of percussion rock drills.",
    grades: ["ISO VG 100", "ISO VG 150"],
    pdsLink: PDS2,
  },
  {
    src: image1,
    alt: "Hyrax Hypertrans HR",
    title: "Hyrax Hypertrans HR",
    link: "#",
    type: "Inhibited",
    description:
      "A premium inhibited mineral insulating oil made from a severely hydrotreated wax-free naphthenic oil which is good as a dielectric and coolant.",
    pdsLink: PDS3,
  },
  {
    src: image1,
    alt: "Hyrax Hypertrans",
    title: "Hyrax Hypertrans",
    link: "#",
    type: "Uninhibited",
    description:
      "A premium uninhibited mineral insulating oil made from a severely hydrotreated wax-free naphthenic oil which is good as a dielectric and coolant.",
    pdsLink: PDS4,
  },
  {
    src: image1,
    alt: "Hyrax Elektrans II",
    title: "Hyrax Elektrans II",
    link: "#",
    type: "Inhibited",
    description:
      "A premium inhibited mineral insulating oil made from a severely hydrotreated wax-free naphthenic oil which is good as a dielectric and coolant.",
    pdsLink: PDS5,
  },
  {
    src: image1,
    alt: "Hyrax Elektrans I",
    title: "Hyrax Elektrans I",
    link: "#",
    type: "Uninhibited",
    description:
      "A premium uninhibited mineral insulating oil made from a severely hydrotreated wax-free naphthenic oil which is good as a dielectric and coolant.",
    pdsLink: PDS6,
  },
  {
    src: image1,
    alt: "Hyrax Maltrans SPX",
    title: "Hyrax Maltrans SPX",
    link: "#",
    type: "Inhibited",
    description:
      "A premium type of inhibited mineral insulating oil (transformer oil) made from severely hydrotreated base oil.",
    pdsLink: PDS7,
  },
  {
    src: image1,
    alt: "Hyrax Maltrans SP",
    title: "Hyrax Maltrans SP",
    link: "#",
    type: "Uninhibited",
    description:
      "A standard uninhibited mineral insulating oil made from a severely hydroprocessed base oil which is good as a dielectric and coolant.",
    pdsLink: PDS8,
  },
  {
    src: image1,
    alt: "Hyrax Cable Oil",
    title: "Hyrax Cable Oil",
    link: "#",
    description:
      "A premium cable fluid prepared from a high quality base stock to provide optimum protection for electrical cable system.",
    pdsLink: PDS9,
  },
];
