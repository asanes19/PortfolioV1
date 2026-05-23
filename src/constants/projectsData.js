// src/constants/projectsData.js

export const projectsData = [
  {
    title: "PSAI – Data & Automation Platform",
    slug: "power-assist",
    description:
      "An internal AI-powered platform built to automate manual real estate operations, eliminate data entry, and surface actionable insights for decision-makers.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779536037/Screenshot_2026-05-23_153015_ssufan.png",
    gallery: [],
    video: null,
    tech: [
      "React",
      "JavaScript",
      "Python",
      "Power BI",
      "Generative AI",
      "Jira",
      "Confluence",
      "UI/UX"
    ],
    caseStudy: {
      problem:
        "Adding a new real estate project to the CRM was a fully manual process — someone had to read through project documents and enter every detail by hand. The L&D team was also manually creating training materials and quizzes for agents every time a new project launched. There was no centralized way to analyze data or interact with internal datasets without going through multiple disconnected tools.",
      built: [
        "Built the front end for an AI-powered file ingestion engine — agents upload project documents and the AI extracts, maps, and inserts all data into the CRM with one click.",
        "Developed an interactive Q&A interface allowing staff to query internal datasets in natural language, replacing manual report requests.",
        "Integrated a learning module where the AI generates training materials and quizzes from the same uploaded project documents — eliminating manual L&D work per launch.",
        "Delivered across multiple phases using Agile and Scrum, maintaining continuous feedback loops with stakeholders.",
      ],
      outcome:
        "Eliminated manual CRM data entry for every new project launch — a process that previously required someone to read and re-enter an entire document by hand. The L&D team stopped creating training materials manually. Decision-makers gained a live, queryable view of internal data without waiting on reports.",
      stats: [],
    },
    pvt: true,
    projectUrl: null,
    order: 1,
    year: 2024,
  },
{
  title: "Emirati Hub – Mini CRM",
  slug: "emirati-hub",
  description:
    "A purpose-built portal for 100 external local agents who needed CRM access without touching PSI's internal systems or sensitive data.",
  mainImage:
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779535674/Login_d8tn1t.svg",
  gallery: [
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779534879/Screenshot_2026-05-23_151237_odjyxl.png",
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779535359/Properties_keqlj9.png",
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779535414/Property_details_h8n9y6.svg",
        "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779535021/Screenshot_2026-05-23_151512_emn5rq.png",

    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779535559/Add_new_lead_dbube7.svg",
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779535610/Calendar_l193ub.svg",
    

  ],
  video: null,
  tech: [
    "React",
    "Tailwind CSS",
    "Material UI",
    "React Query",
    "Axios",
    "React Router",
    "JS-Cookie",
    "Moment.js",
  ],
  caseStudy: {
    problem:
      "PSI launched a new initiative hiring part-time local agents to expand their sales force. These agents needed access to leads and properties but could not be given access to the internal CRM — it was too complex and contained sensitive company data. There was no lightweight alternative, no centralised API, and three separate databases that all needed to be read from simultaneously.",
    built: [
      "Built a simplified CRM portal from scratch in 7 working days, purpose-built for external local agents with no access to internal systems.",
      "Reverse-engineered and integrated three separate CRM APIs with no centralised endpoint — hitting each login API independently on session start and tagging every data response with its source CRM to avoid confusion.",
      "Implemented front-end deduplication logic to handle overlapping data returned from the three databases, ensuring agents never saw duplicate leads or properties.",
      "Built dynamic lead routing so that when an agent submits a lead, it is automatically directed to the correct CRM based on the lead's data rather than requiring manual selection.",
      "Used React Query caching to minimise redundant API calls across three live systems and keep the interface fast despite the complexity underneath.",
    ],
    outcome:
      "Delivered a fully working agent portal in 7 working days supporting 100 local agents. The agents interact with a simple, clean interface while the system silently manages authentication, data merging, and routing across three separate CRMs — none of which were designed to work together.",
    stats: [
      { value: "+100", label: "Local agents onboarded" },
      { value: "7", label: "Working days to deliver" },
      { value: "3", label: "CRMs unified" },
    ],
  },
  pvt: true,
  projectUrl: null,
  order: 2,
  year: 2025,
},
{
  title: "PSI-International Portal – Event & Lead Management System",
  slug: "psi-international-portal",
  description:
    "A unified role-based portal that replaced paper leads, Google Form surveys, and siloed emails across 4 departments managing PSI's international events.",
  mainImage:
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779536260/Login_rdlk6n.svg",
  gallery: [
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779536469/Home_svj6tn.png",
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779536684/Current_Event_popup_oourha.png",
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779536775/Support_i0tjcu.png",
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779536848/Add_New_Event_dbkh2s.png",
  ],
  video: null,
  tech: ["React", "Tailwind CSS", "Material UI", "React Router", "Axios", "Power BI", "FullCalendar"],
  caseStudy: {
    problem:
      "PSI attends international real estate events across multiple countries but had no centralised system to manage them. The business development team handled events in isolation — no other department knew what was happening or when. Agents were writing leads on paper or storing them in personal Excel sheets. Post-event surveys were sent via Google Forms. There was no way to track event outcomes, compare cost versus revenue, or give management visibility without manual reporting.",
    built: [
      "Built a role-based portal serving 4 departments — Business Development, Sales Operations, CRM, and field agents — each with different permissions and functions within the same system.",
      "Replaced paper and Excel lead tracking with a structured lead registration flow tied directly to each event, capturing 700+ leads across international events.",
      "Replaced Google Form post-event surveys with an in-portal survey system, storing responses directly in the database for analysis.",
      "Integrated a Power BI dashboard per event allowing management to track attendance, leads generated, and cost versus revenue outcome.",
      "Built an event calendar using FullCalendar giving all departments visibility into upcoming and past international events for the first time.",
      "Integrated 3 CRM APIs to restructure and route lead data correctly based on event and agent context.",
    ],
    outcome:
      "Four departments that previously operated in silos around international events now work through one system. Over 50 agents across international events no longer rely on paper or personal Excel sheets — 700+ leads are now registered, tracked, and routed across 3 CRMs automatically. Management has live event performance data without waiting on manual reports. Delivered in one week.",
    stats: [
      { value: "50+", label: "Agents supported" },
      { value: "700+", label: "Leads captured" },
      { value: "3", label: "CRMs integrated" },
      { value: "1 week", label: "Delivery time" },
    ],
  },
  pvt: true,
  projectUrl: null,
  order: 3,
  year: 2025,
},
  {
    title: "Hilton Residences Dubai JLT – Luxury Living",
    slug: "hilton-residences-jlt",
    description:
      "A luxury landing page featuring cinematic scroll animations and CRM-integrated lead capture for a major real estate launch.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772784315/Screenshot_2026-03-06_120319_q0rkq3.png",
    gallery: [
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772784259/Screenshot_2026-03-06_120225_nb56at.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772784406/Screenshot_2026-03-06_120427_flgs40.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772784450/Screenshot_2026-03-06_120538_urw07p.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779537163/Screenshot_2026-05-23_155053_hdwwet.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772792407/Screenshot_2026-03-06_141813_jmciqa.png",
    ],
    video: null,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    caseStudy: {
      problem:
        "The launch required a digital presence matching the brand's luxury standards. Standard landing pages were too static, while heavily animated sites suffered from slow load times and janky cross-browser performance, risking lead drop-off.",
      built: [
        "Engineered smooth, scroll-driven animations and parallax effects using Framer Motion to visualize property details and 38-floor scale.",
        "Optimized high-resolution architectural imagery to ensure fast load speeds and strict mobile responsiveness.",
        "Built interactive amenity toggles and dynamic location calculators relative to major Dubai landmarks.",
        "Wired seamless lead capture forms directly into the PSI CRM backend to trigger immediate sales workflows.",
      ],
      outcome:
        "Delivered a performant, atmospheric web experience that successfully handled high-net-worth traffic. Real-time lead capture eliminated manual data entry for the sales team.",
      stats: [],
    },
    pvt: false,
    projectUrl: "https://hiltonresidencesjlt.ae/",
    order: 4,
    year: 2026,
  },
  {
    title: "Mostafa Hamdy - UI/UX Team Lead Portfolio",
    slug: "mostafa-hamdy-portfolio",
    description:
      "A custom professional portfolio showcasing a decade of design work through precise layouts and micro-animations.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772867338/Screenshot_2026-03-07_110649_fqyi1t.png",
    gallery: [
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772867476/Screenshot_2026-03-07_110838_y3d7ld.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772867572/Screenshot_2026-03-07_111025_jhos5w.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772867738/Screenshot_2026-03-07_111153_kv2qey.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772867853/Screenshot_2026-03-07_111529_yjokax.png",
    ],
    video: null,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
    caseStudy: {
      problem:
        "A high-level design lead needed a digital home that matched their aesthetic standards. Off-the-shelf templates could not support the bespoke animations, exact typography, and visual precision required.",
      built: [
        "Translated high-fidelity Figma designs into pixel-perfect React components using Tailwind CSS.",
        "Implemented subtle scroll-reveals and hover states with Framer Motion to enhance the interactive feel.",
        "Optimized image galleries to ensure high-quality design assets loaded instantly across all device sizes.",
      ],
      outcome:
        "Provided a fast, deeply customized digital portfolio that accurately reflects the client's design philosophy and secures new business.",
      stats: [],
    },
    pvt: false,
    projectUrl: "https://mostafahamdy00.netlify.app/",
    order: 5,
    year: 2026,
  },
  {
    title: "SKPS – Tanks & Pipeline Integrity Solutions",
    slug: "skps",
    description:
      "An enterprise industrial portal using 3D rendering to showcase complex engineering solutions and manage product RFQs.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772781964/Screenshot_2026-03-06_112232_dlimp6.png",
    gallery: [
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772868196/Screenshot_2026-03-07_112105_zb15vi.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772868280/Screenshot_2026-03-07_112244_xpufi7.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772868330/Screenshot_2026-03-07_112341_l57vwy.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772868395/Screenshot_2026-03-07_112434_pvgwec.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772868517/Screenshot_2026-03-07_112641_bvj7e0.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772868611/Screenshot_2026-03-07_112817_menkfh.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772868686/Screenshot_2026-03-07_112916_fb5eqh.png",
    ],
    video: null,
    tech: ["Next.js", "React", "Tailwind CSS", "Three.js", "Shadcn UI", "Vercel"],
    caseStudy: {
      problem:
        "The engineering firm struggled to explain nuanced pipeline repair solutions to non-technical prospects. They lacked a centralized, filterable product catalog connected to an automated Request for Quotation (RFQ) system.",
      built: [
        "Integrated interactive Three.js 3D models with clickable hotspots to visually educate users on technical pipeline implementations.",
        "Built a robust product catalog featuring dynamic, industry-based filtering logic utilizing server-side rendering.",
        "Engineered a multi-step RFQ flow that captures precise technical requirements directly from the product listings.",
        "Implemented a seamless hybrid dark/light theme system to segment technical data from marketing copy.",
      ],
      outcome:
        "Transformed technical exploration into a visual, interactive experience. The scalable product catalog and integrated RFQ flow successfully turned a static web presence into an active lead-generation tool.",
      stats: [],
    },
    pvt: false,
    projectUrl: "https://skps.com/",
    order: 6,
    year: 2026,
  },
  {
    title: "Loyalty Program",
    slug: "loyalty-program",
    description:
      "A CRM-connected portal letting real estate clients browse exclusive offers and trigger automated redemptions.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753939918/loyaltymini_b9e0b9b565.png",
    gallery: [
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753940064/loyalty1_138f51648c.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753942429/loyalty2_c91d19858b.png",
    ],
    video: null,
    tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "Axios"],
    caseStudy: {
      problem:
        "Exclusive partner offers for clients were being communicated ineffectively via manual emails. There was no self-serve platform where clients could view deals and actively claim them.",
      built: [
        "Coded a responsive React portal using Axios to dynamically fetch, categorize, and display real-time partner offers.",
        "Wired redemption actions to instantly insert leads into the overarching CRM database.",
        "Triggered automated email confirmation hooks based on successful client interactions.",
      ],
      outcome:
        "Replaced manual email distributions with an interactive portal. Clients can now independently discover and claim rewards, automatically logging their engagement within the CRM.",
      stats: [],
    },
    pvt: false,
    projectUrl: "https://loyalty-program.psinv.net/",
    order: 9,
    year: null,
  },
  {
    title: "DeepSpaceX – Lyria Clone",
    slug: "deepspacex",
    description:
      "A front-end technical clone replicating complex scroll animations, typography effects, and layout structures.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1755257056/Screenshot_2025-08-15_152258_hfjx4m.png",
    gallery: [],
    video: null,
    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "SplitType",
      "Lucide React",
      "React Intersection Observer",
    ],
    caseStudy: {
      problem:
        "Standard web layouts lacked the immersive storytelling capability seen in top-tier promotional sites like DeepMind’s Lyria. I needed an environment to push the boundaries of scroll-driven DOM manipulation and cinematic text reveals.",
      built: [
        "Integrated Lenis for mathematically smooth scroll hijacking while preserving accessibility.",
        "Employed SplitType parsing combined with Intersection Observers to trigger synchronized, character-by-character reveals.",
        "Structured state-driven Framer Motion variants to ensure animations fired accurately independent of scroll direction.",
      ],
      outcome:
        "Created a pixel-perfect, highly animated UI that functions smoothly without sacrificing frame rates, demonstrating advanced control over complex modern web animations.",
      stats: [],
    },
    pvt: false,
    projectUrl: "https://deepspacex.netlify.app/",
    order: 10,
    year: 2025,
  },


  
];
