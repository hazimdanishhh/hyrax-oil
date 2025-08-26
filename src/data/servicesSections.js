import servicesBackground1 from "/src/assets/services/oilAnalysis.webp";
import servicesBackground2 from "/src/assets/services/labTesting.webp";
import servicesBackground3 from "/src/assets/services/training.webp";
import servicesBackground4 from "/src/assets/services/contractManufacturing.webp";
import servicesBackground5 from "/src/assets/services/consultancy.webp";

// Service 1 images
import service1Image1 from "/src/assets/services/icons/oil-leak.png";
import service1Image2 from "/src/assets/services/icons/machine-health.png";
import service1Image3 from "/src/assets/services/icons/maintenance.png";
import service1Image4 from "/src/assets/services/icons/testing-kit.png";

// Service 2 images
import service2Image1 from "/src/assets/services/icons/iso.png";
import service2Image2 from "/src/assets/services/icons/analysis.png";
import service2Image3 from "/src/assets/services/icons/innovation.png";
import service2Image4 from "/src/assets/services/icons/trusted.png";

// Service 3 images
import service3Image1 from "/src/assets/services/icons/lubrication.png";
import service3Image2 from "/src/assets/services/icons/oil-selection.png";
import service3Image3 from "/src/assets/services/icons/storage.png";
import service3Image4 from "/src/assets/services/icons/maintenance-training.png";

// Service 4 images
import service4Image1 from "/src/assets/services/icons/blending.png";
import service4Image2 from "/src/assets/services/icons/packaging.png";
import service4Image3 from "/src/assets/services/icons/label-design.png";
import service4Image4 from "/src/assets/services/icons/consultation.png";

// Service 5 images
import service5Image1 from "/src/assets/services/icons/optimization.png";
import service5Image2 from "/src/assets/services/icons/efficiency.png";
import service5Image3 from "/src/assets/services/icons/sourcing.png";
import service5Image4 from "/src/assets/services/icons/excellence.png";

const servicesSectionsList = [
  {
    id: "oil-analysis-and-on-site-services",
    title: "Oil Analysis & On-Site Services",
    description:
      "Through our advanced Oil Analysis and On-Site Testing, we help clients detect early signs of contamination, lubricant degradation, or mechanical wear. With accurate lab-backed diagnostics and immediate on-site insights, you can make faster, more cost-effective decisions.",
    background: servicesBackground1,
    cards: [
      {
        image: service1Image1,
        alt: "Oil Leak",
        title: "Early detection of contaminants and leaks",
        description: "Identify issues before they become costly breakdowns.",
      },
      {
        image: service1Image2,
        alt: "Machine Monitoring",
        title: "Machine condition monitoring through oil sampling",
        description: "Gain clear insights into your equipment’s health.",
      },
      {
        image: service1Image3,
        alt: "Downtime Prevention",
        title: "Reduced downtime and maintenance costs",
        description:
          "Prevent unexpected failures and keep operations running smoothly.",
      },
      {
        image: service1Image4,
        alt: "Testing Kit",
        title: "Immediate results with on-site testing kits and tools",
        description:
          "Make informed decisions instantly without waiting for lab turnaround.",
      },
    ],
  },
  {
    id: "lab-testing",
    title: "Lab Testing",
    description:
      "Our state-of-the-art lubricant laboratory is equipped with modern instruments and managed by experienced scientists. Whether you need product validation, R&D support, or quality assurance, our lab ensures your lubricants meet global standards for performance and safety.",
    background: servicesBackground2,
    cards: [
      {
        image: service2Image1,
        alt: "ISO Certification",
        title: "ISO-standard procedures and SIRIM-certified testing",
        description:
          "Reliable testing that meets the highest industry standards.",
      },
      {
        image: service2Image2,
        alt: "Independent Analysis",
        title: "Independent, impartial analysis for product development",
        description:
          "Trustworthy results to support your innovation and compliance needs.",
      },
      {
        image: service2Image3,
        alt: "R&D Innovation",
        title: "R&D-backed innovations tailored to your needs",
        description:
          "Leverage our expertise to create high-performance lubricant solutions.",
      },
      {
        image: service2Image4,
        alt: "Trusted Clients",
        title: "Trusted by local and international clients",
        description:
          "A proven track record of delivering confidence across markets.",
      },
    ],
  },
  {
    id: "industrial-and-technical-training",
    title: "Industrial & Technical Training",
    description:
      "We believe that empowering clients with technical expertise is just as important as delivering quality lubricants. Our Industrial & Technical Training programs are designed to upskill your teams, whether you manage a single outlet or an international dealership network.",
    background: servicesBackground3,
    cards: [
      {
        image: service3Image1,
        alt: "Lubrication Principles",
        title: "Principles of lubrication & application",
        description: "Understand the science behind effective lubrication.",
      },
      {
        image: service3Image2,
        alt: "Oil Selection",
        title: "Correct selection of engine oils & lubricants",
        description:
          "Choose the right products for maximum efficiency and protection.",
      },
      {
        image: service3Image3,
        alt: "Lubricant Storage",
        title: "Lubricant storage, handling, and safety",
        description:
          "Ensure compliance and extend lubricant shelf life with best practices.",
      },
      {
        image: service3Image4,
        alt: "Maintenance Training",
        title: "Maintenance best practices",
        description:
          "Improve equipment reliability with proven maintenance techniques.",
      },
    ],
  },
  {
    id: "contract-manufacturing-services",
    title: "Contract Manufacturing Services",
    description:
      "Expand your market presence with Hyrax Oil’s contract manufacturing solutions. From blending petroleum-based lubricants to customized packaging and private label designs, we provide a seamless, end-to-end service that lets you focus on growing your business.",
    background: servicesBackground4,
    cards: [
      {
        image: service4Image1,
        alt: "Blending Facility",
        title: "Fully managed lubricant blending facilities",
        description: "High-quality production handled by expert blenders.",
      },
      {
        image: service4Image2,
        alt: "Packaging Lines",
        title: "Multiple packaging lines (small packs to drums)",
        description: "Versatile solutions to fit every market demand.",
      },
      {
        image: service4Image3,
        alt: "Label Design",
        title: "Customized label design and branding support",
        description:
          "Make your product stand out with unique packaging and branding.",
      },
      {
        image: service4Image4,
        alt: "Consultation",
        title: "Hands-on technical and packaging consultation",
        description:
          "Work side by side with our experts to ensure smooth production and delivery.",
      },
    ],
  },
  {
    id: "consultancy-services",
    title: "Consultancy Services",
    description:
      "Running a lubricant manufacturing plant requires more than machines — it needs strategy, optimization, and expertise. Our consultancy team, with decades of experience in both local and international markets, helps clients improve efficiency, cut costs, and optimize supply chains.",
    background: servicesBackground5,
    cards: [
      {
        image: service5Image1,
        alt: "Optimization",
        title: "Lubricant plant optimization",
        description:
          "Enhance productivity and reduce waste through tailored strategies.",
      },
      {
        image: service5Image2,
        alt: "Efficiency",
        title: "Operational efficiency improvements",
        description: "Streamline processes to cut costs and boost performance.",
      },
      {
        image: service5Image3,
        alt: "Sourcing",
        title: "Raw material sourcing and supplier collaboration",
        description:
          "Secure reliable supply chains with our industry expertise.",
      },
      {
        image: service5Image4,
        alt: "Business Excellence",
        title: "Business excellence frameworks",
        description:
          "Implement proven methodologies to drive sustainable growth.",
      },
    ],
  },
];

export default servicesSectionsList;
