// src/constants/projectsData.js

export const projectsData = [
  {
    title: "Power Assist – Data & Automation Platform",
    slug: "power-assist",
    description:
      "An internal AI-powered platform built to automate manual real estate operations, eliminate data entry, and surface actionable insights for decision-makers.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1755176906/Latest_Products_2_evmrqv.png",
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
    ],
    caseStudy: {
      problem:
        "Adding a new real estate project to the CRM was a fully manual process — someone had to read through project documents and enter every detail by hand. The L&D team was also manually creating training materials and quizzes for agents every time a new project launched. There was no centralized way to analyze data or interact with internal datasets without going through multiple disconnected tools.",
      built: [
        "Built the front end for an AI-powered file ingestion engine — agents upload project documents and the AI extracts, maps, and inserts all data into the CRM with one click.",
        "Developed an interactive Q&A interface allowing staff to query internal datasets in natural language, replacing manual report requests.",
        "Integrated a learning module where the AI generates training materials and quizzes from the same uploaded project documents — eliminating manual L&D work per launch.",
        "Built analytics dashboards for trend discovery, KPI tracking, and performance insights across teams.",
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
      "An internal operations portal replacing scattered tools with a single interface for agents to manage leads, properties, and calendars.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1755171857/Latest_Products_1_apetoz.png",
    gallery: [],
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
        "Agents were managing their daily operations across multiple disjointed backend systems. Lead creation, property search, and activity tracking were fragmented, causing data duplication and slow response times.",
      built: [
        "Architected a unified React-based dashboard integrating multiple distinct backend APIs into a single user experience.",
        "Implemented secure token management and role-based access control to validate credentials dynamically across different systems.",
        "Engineered custom data-merging logic to eliminate duplicate listings and leads coming from disparate API sources.",
        "Introduced React Query to aggressively cache responses, minimizing redundant requests and drastically improving page load speeds.",
      ],
      outcome:
        "Delivered a fully functional agent portal consolidating eight modules into one interface. The system runs concurrent API requests in parallel, providing a real-time dashboard while significantly cutting down manual data entry for the sales team.",
      stats: [],
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
      "An event management and lead routing platform built for international real estate exhibitions and roadshows.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1755242339/Latest_Products_3_znag70.png",
    gallery: [],
    video: null,
    tech: ["React", "Tailwind CSS", "Material UI", "React Router", "Axios"],
    caseStudy: {
      problem:
        "International sales events lacked a cohesive digital system for tracking leads and generating proposals on the fly. Sales agents and operations teams struggled with manual data entry and fragmented CRM visibility during critical high-traffic roadshows.",
      built: [
        "Built a multi-module React portal with full CRUD capabilities for managing exhibition calendars, properties, and lead flows.",
        "Coded dynamic lead routing and scoring logic that adapts instantly based on user input and event configurations.",
        "Integrated the frontend directly with CRM APIs for real-time lead registration and automated proposal generation.",
        "Developed a robust permission hierarchy to securely segment content visibility between admins, sales agents, and business development.",
      ],
      outcome:
        "Replaced manual event tracking with a live portal used globally by multiple departments. Registration workflows are now automated, and stakeholders have immediate visibility into event performance without manual reporting.",
      stats: [],
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
    projectUrl: "https://skps.vercel.app/",
    order: 6,
    year: 2026,
  },
  {
    title: "Al Raha Beach - Landing Page",
    slug: "al-raha-beach-landing-page",
    description:
      "A fast, map-integrated landing page presenting luxury waterfront properties for lead generation.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772868889/Screenshot_2026-03-07_113239_xtv9m4.png",
    gallery: [
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772870393/Screenshot_2026-03-07_115802_yaxuyg.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772870494/Screenshot_2026-03-07_115925_wnbtbr.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772870548/Screenshot_2026-03-07_120033_mlyjib.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1772870668/Screenshot_2026-03-07_120245_oct1vx.png",
    ],
    video: null,
    tech: ["React", "Tailwind CSS", "Motion", "Swiper", "Leaflet"],
    caseStudy: {
      problem:
        "Marketing teams needed a dedicated, standalone asset to quickly capture leads for a specific high-end neighborhood without routing traffic through the cluttered main corporate portal.",
      built: [
        "Architected a responsive interface using Tailwind CSS and Framer Motion for premium visual feedback.",
        "Integrated Leaflet to provide an interactive, visual geographic layout of available amenities and units.",
        "Configured a robust lead-capture web form connected directly to backend services.",
      ],
      outcome:
        "Provided a focused, conversion-optimized digital asset that successfully isolated marketing traffic and streamlined data collection.",
      stats: [],
    },
    pvt: false,
    projectUrl: "https://psinv.net/services/RahaBeach/",
    order: 7,
    year: null,
  },
  {
    title: "Saadiyat Island - Landing Page",
    slug: "saadiyat-island-landing-page",
    description:
      "A responsive, map-enabled property showcase built to convert high-net-worth real estate traffic.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753882856/Screenshot_2025_07_30_173954_2b184b3c8b.png",
    gallery: [
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753882765/saadiyatmini_0263ca2294.png",
    ],
    video: null,
    tech: ["React", "Tailwind CSS", "react-hook-form", "swiper"],
    caseStudy: {
      problem:
        "The sales team required a targeted digital campaign destination that could elegantly present premium waterfront properties while ensuring reliable form submissions under heavy ad traffic.",
      built: [
        "Constructed a modular React architecture optimizing image sliders and interactive maps for rigorous performance standards.",
        "Implemented react-hook-form to rigidly control state and validation for the primary contact forms.",
        "Applied precise Tailwind utility classes to ensure a seamless layout transition across all mobile formats.",
      ],
      outcome:
        "Delivered a lightweight, highly responsive landing page that served as the reliable endpoint for expensive ad campaigns, ensuring no leads were lost to poor client-side performance.",
      stats: [],
    },
    pvt: false,
    projectUrl: "https://psinv.net/services/SaadiyatislandLP/",
    order: 8,
    year: null,
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
  {
    title: "Noxe - Movies App",
    slug: "noxe-movies-app",
    description:
      "A dynamic movie database explorer combining third-party data-fetching with secure user authentication.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753336736/noxe_f38a71bdce.png",
    gallery: [
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753337127/Noxe1_130f252d2f.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753336990/Noxe3_e8ed49dcdb.png",
    ],
    video:
      "https://res.cloudinary.com/dkzx3gz4z/video/upload/v1753339042/2025_07_24_10_35_21_a878af3322.mp4",
    tech: ["React", "Tailwind CSS", "JavaScript", "APIs"],
    caseStudy: {
      problem:
        "There was a need to orchestrate complex async operations—fetching massive external datasets while concurrently handling secure, stateful user sessions.",
      built: [
        "Engineered reliable API integration layers to pull, parse, and render live cinematic metadata.",
        "Implemented authentication flows to manage user sign-ups, logins, and private route protections.",
        "Built responsive grid layouts with Tailwind CSS to handle unpredictable image sizes gracefully.",
      ],
      outcome:
        "Delivered a fully interactive SPA that reliably handles asynchronous data loads and restricts data access based on authentication state.",
      stats: [],
    },
    pvt: false,
    projectUrl: "",
    order: 11,
    year: null,
  },
  {
    title: "Bait Albahar - Landing Page",
    slug: "bait-albahar-landing-page",
    description:
      "A lightweight, framework-free landing page demonstrating strict foundational web performance.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753339853/bait_03b23b7919.png",
    gallery: [
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753339975/bait1_b839912b15.png",
    ],
    video: null,
    tech: ["HTML", "CSS", "JavaScript"],
    caseStudy: {
      problem:
        "Traditional heavy frameworks were causing unnecessary overhead for an otherwise entirely static informational company page. The goal was to eliminate dependencies entirely.",
      built: [
        "Authored semantic HTML5 syntax to ensure high accessibility scores.",
        "Coded bespoke CSS media queries to handle complex responsive restructuring without bulky grid libraries.",
        "Wrote vanilla JavaScript DOM manipulations to handle user interactions directly.",
      ],
      outcome:
        "Shipped an ultra-fast, zero-dependency informational site that loads instantly and serves as a highly performant corporate touchpoint.",
      stats: [],
    },
    pvt: false,
    projectUrl: "https://asanes19.github.io/BaitAlbahar/",
    order: 12,
    year: null,
  },
  {
    title: "Product Builder - CRUD App",
    slug: "product-builder-crud-app",
    description:
      "An internal administrative tool engineered to manage product inventory via comprehensive CRUD commands.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1755011840/Latest_Products_ziv1iv.png",
    gallery: [
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753362984/Products1_2172df589b.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753363034/Products2_5cb1e1368e.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753363069/Products3_da3d3389cb.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753363095/Products4_674b585ecc.png",
    ],
    video: "2025-07-24-17-25-09.mp4",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    caseStudy: {
      problem:
        "Product management was disorganized. There was no interface connecting non-technical staff to the underlying data architecture for daily inventory adjustments.",
      built: [
        "Constructed form architectures to rigidly capture distinct data types (pricing, category, hex colors).",
        "Encoded state management to immediately reflect granular file edits and deletions without full-page reloads.",
        "Designed clear visual feedback loops indicating successful save operations and error states.",
      ],
      outcome:
        "Produced a robust, stable internal dashboard that safely exposes database management tasks to administrative users, minimizing direct data mishandling.",
      stats: [],
    },
    pvt: false,
    projectUrl: "https://productsbuilder.netlify.app/",
    order: 13,
    year: null,
  },
  {
    title: "To Do App",
    slug: "to-do-app",
    description:
      "A stateless browser-based utility application leveraging local storage for data persistence.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753847613/Screenshot_2025_07_30_075053_12914b7491.png",
    gallery: [
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1753847724/todo1_cd9e3afc5b.png",
    ],
    video: null,
    tech: ["HTML", "CSS", "JavaScript"],
    caseStudy: {
      problem:
        "During initial architectural studies, a reliable mechanism was needed to persist input data securely across session refreshes without relying on an external backend.",
      built: [
        "Programmed standard CRUD task functions to directly interface with the browser's localStorage API.",
        "Built dynamic DOM injection scripts to immediately reflect the persistent memory state upon initialization.",
        "Handcoded strict CSS styling to ensure the interactive elements remained functional and legible across viewports.",
      ],
      outcome:
        "Shipped a functional, persistent utility tool entirely scoped to client-side technologies, demonstrating fundamental data state persistence techniques.",
      stats: [],
    },
    pvt: false,
    projectUrl: "https://asanes19.github.io/To-Do-App/",
    order: 14,
    year: null,
  },
];
