import image1 from "/src/assets/products/Hyrax-Drum.webp";
import image2 from "/src/assets/products/gear/Hyrax-HPGO-GL-5.webp";
import image3 from "/src/assets/products/gear/Hyrax-HPGO-GL-4.webp";
import PDS1 from "/src/assets/products/gear/Hyrax-LSGO-GL-5.pdf";
import PDS2 from "/src/assets/products/gear/Hyrax-MTF.pdf";
import PDS3 from "/src/assets/products/gear/Hyrax-HPGO-GL-5.pdf";
import PDS4 from "/src/assets/products/gear/Hyrax-HPGO-GL-4.pdf";
import PDS5 from "/src/assets/products/gear/Hyrax-EP-Syngear-Lube-Series.pdf";
import PDS6 from "/src/assets/products/gear/Hyrax-EP-Gear-Lube-Series.pdf";

export const productsGO = [
  {
    src: image1,
    alt: "Hyrax LSGO GL-5",
    title: "Hyrax LSGO GL-5",
    link: "#",
    description:
      "A premium quality high performance multi-service, non-corrosive limited slip type hypoid automotive gear oil that is formulated from high quality base oils and exclusively selected additives technology designed for limited slip rear drive differentials and exceed the severe requirements of API GL-5 performance standard.",
    grades: ["SAE 90", "75W-90", "80W-90", "85W-140"],
    pdsLink: PDS1,
    shortDesc:
      "Premium high-performance gear oil for limited slip differentials, engineered with advanced additives to meet API GL-5 standards.",
    cardDesc: "Strong protection for limited slip gears.",
  },
  {
    src: image1,
    alt: "Hyrax MTF",
    title: "Hyrax MTF",
    link: "#",
    description:
      "A multi-service, non-corrosive type hypoid gear lubricants suitable for API service GL-5 applications. It is made from selected, highly refined base oils and blended with field proven additive system to impart excellent chemical and thermal stability over a wide range of temperature.",
    grades: ["80W-90", "85W-140"],
    pdsLink: PDS2,
    shortDesc:
      "Durable multi-service gear lubricant for API GL-5 applications, delivering stability across a wide temperature range.",
    cardDesc: "Reliable gear oil for everyday use.",
  },
  {
    src: image2,
    alt: "Hyrax HPGO GL-5",
    title: "Hyrax HPGO GL-5",
    link: "#",
    type: "Premium Blend",
    description:
      "An extreme pressure (EP) automotive gear oil formulated from solvent refined mineral base oils and containing special sulfur phosphorus additives to produce a superior gear lubricant with extreme pressure characteristic and thermal stability for automotive applications over a wide range of temperatures.",
    grades: ["SAE 90", "SAE 140"],
    pdsLink: PDS3,
    shortDesc:
      "Extreme pressure automotive gear oil with sulfur-phosphorus additives for superior load-carrying and thermal stability.",
    cardDesc: "Tough oil for tough gears.",
  },
  {
    src: image3,
    alt: "Hyrax HPGO GL-4",
    title: "Hyrax HPGO GL-4",
    link: "#",
    type: "Fully Synthetic",
    description:
      "An extreme pressure (EP) automotive gear oil formulated from solvent refined mineral base oils and containing special sulphur phosphorus additives to produce a superior gear lubricant with extreme pressure characteristic and thermal stability for automotive applications over a wide range of temperatures.",
    grades: ["SAE 90", "SAE 140", "75W-90", "80W-90", "85W-140"],
    pdsLink: PDS4,
    shortDesc:
      "High-performance EP gear oil designed for automotive gear systems requiring API GL-4 protection and stability.",
    cardDesc: "Smooth shifting, reliable protection.",
  },
  {
    src: image1,
    alt: "Hyrax EP Syngear Lube Series",
    title: "Hyrax EP Syngear Lube Series",
    link: "#",
    description:
      "A series of fully-synthetic Poly Alpha Olefin (PAO) based gear lubricants specially formulated using the latest advanced additives technology particularly suited to gear applications in which extreme service condition are expected.",
    grades: [
      "ISO VG 150",
      "ISO VG 220",
      "ISO VG 320",
      "ISO VG 460",
      "ISO VG 680",
      "ISO VG 1000",
    ],
    pdsLink: PDS5,
    shortDesc:
      "Fully synthetic PAO-based industrial gear lubricants for extreme service conditions and maximum durability.",
    cardDesc: "Synthetic strength for extreme gears.",
  },
  {
    src: image1,
    alt: "Hyrax EP Gear Lube Series",
    title: "Hyrax EP Gear Lube Series",
    link: "#",
    description:
      "A series of premium quality heavy-duty industrial gear oils specially manufactured from high quality base stocks and fortified with extreme pressure, anti-foam, anti-rust and anti-oxidant additives for excellent oxidation resistance and thermal stability.",
    grades: [
      "ISO VG 68",
      "ISO VG 100",
      "ISO VG 150",
      "ISO VG 220",
      "ISO VG 320",
      "ISO VG 460",
      "ISO VG 680",
    ],
    pdsLink: PDS6,
    shortDesc:
      "Heavy-duty industrial gear oils fortified with EP, anti-rust, and anti-oxidant additives for long-lasting reliability.",
    cardDesc: "Heavy-duty gear oil for industry.",
  },
];
