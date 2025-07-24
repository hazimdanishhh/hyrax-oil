// Helper function to generate mailto links
const generateMailto = (title) => {
  const subject = `Application for ${title}`;
  const body = `Dear Hyrax Oil HR Team,%0D%0A%0D%0AI am interested in applying for the ${title} position. Please find my CV attached.%0D%0A%0D%0AThank you.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`;
  return `mailto:hr@hyraxoil.com?subject=${encodeURIComponent(
    subject
  )}&body=${body}`;
};

// =====================================================================
// Work Type / Employment Type
// =====================================================================
// Full-time
// Part-time
// Contract
// Temporary
// Internship
// Freelance
// Commission-based

// =====================================================================
// Work Location / Setting
// =====================================================================
// On-site
// Remote
// Hybrid (part remote, part on-site)
// Work from Home (WFH)
// Field Work
// Travel Required

// =====================================================================
// Experience Level / Seniority
// =====================================================================
// Entry Level
// Junior
// Mid Level
// Senior
// Lead
// Manager
// Executive

export const careersList = [
  {
    slug: "sales-executive",
    title: "Sales Executive",
    description:
      "The Sales Executive is responsible for driving the company’s sales efforts by actively seeking out new opportunities, understanding customer needs, and closing deals. This role requires excellent communication skills, a proactive approach, and the ability to work collaboratively with team members.",
    responsibilities: [
      "Identify and pursue new sales opportunities.",
      "Develop and maintain relationships with clients.",
      "Conduct market research to understand customer needs.",
      "Setting up meetings with potential clients and listening to their wishes and concerns",
      "Participate on behalf of the company in exhibitions or conferences",
      "Negotiate/close deals and handle complaints or objections",
      "Gather feedback from customers or prospects and share with internal teams",
      "Collaborate with team members to achieve better results",
    ],
    requirements: [
      "Proven experience as a Sales Executive or similar role",
      "Fresh grads are encouraged to apply",
      "Some knowledge on the Automotive/Industrial Lubricants. Prefer to have a relevant diploma / degree in Business, Marketing, Business/Administration, Management, Industrial/ Chemical Engineering",
      "2-3 years of experience in B2B and B2G sales",
      "A customer-centric approach to business",
      "Good attitude, well-disciplined and great punctuality",
      "Strong sense of responsibility and hardworking individual",
      "Excellent communication and negotiation skills",
      "Ability to work independently and as part of a team",
      "Previous sales experience in the oil or manufacturing industry is a plus",
    ],
    benefits: [
      "Salary Range : RM2,500 – RM4,000 (based on years of experience)",
      "EPF, SOCSO, EIS",
      "5 working days / week",
      "Medical Insurance",
      "Free Company Lubricant Engine Oil every quarter",
    ],
    location: "Kuala Lumpur HQ, Malaysia",
    googleMaps:
      "https://www.google.com/maps/place/Hyrax+Oil+Sdn.+Bhd./data=!4m2!3m1!1s0x0:0x53085859f88dd00d?sa=X&ved=1t:2428&ictx=111",
    employmentType: "Full-time",
    setting: "On-site",
    experience: ["Entry-level", "Mid-level"],
    mailto: generateMailto("Sales Executive"),
  },

  {
    slug: "visual-designer-executive",
    title: "Visual Designer Executive",
    description:
      "The Visual Designer Executive will create compelling visuals and design materials that align with our brand identity and marketing goals. This role requires creativity, proficiency in design software, and collaboration with marketing and product teams.",
    responsibilities: [
      "Design and produce digital and print materials including brochures, social media graphics, and presentations.",
      "Collaborate with marketing and product teams to create visuals that support campaigns and product launches.",
      "Maintain and update brand guidelines to ensure consistency.",
      "Research design trends and recommend new ideas to enhance visual impact.",
      "Manage multiple design projects simultaneously while meeting deadlines.",
    ],
    requirements: [
      "Bachelor’s degree in Graphic Design, Visual Communication, or related field preferred.",
      "Proficient in Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
      "Strong portfolio showcasing creative design skills.",
      "Good understanding of typography, color theory, and layout design.",
      "Attention to detail and ability to work independently and in teams.",
      "Effective communication and time management skills.",
    ],
    benefits: [
      "Competitive salary based on experience",
      "EPF, SOCSO, EIS",
      "Flexible working hours",
      "Opportunity to work on diverse creative projects",
      "Medical Insurance",
    ],
    location: "Kuala Lumpur HQ, Malaysia",
    googleMaps:
      "https://www.google.com/maps/place/Hyrax+Oil+Sdn.+Bhd./data=!4m2!3m1!1s0x0:0x53085859f88dd00d?sa=X&ved=1t:2428&ictx=111",
    tags: ["Full-time", "On-site"],
    employmentType: "Full-time",
    setting: "On-site",
    experience: ["Entry-level", "Mid-level"],
    mailto: generateMailto("Visual Designer Executive"),
  },
];
