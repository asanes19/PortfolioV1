// src/constants/projectsData.js

export const projectsData = [
  {
    title: "PSAI – Data & Automation Platform",
    slug: "power-assist",
    description:
      "An internal platform for PSI's real estate teams that turns project documents into reviewed CRM records, queryable datasets, and generated training assessments.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779536037/Screenshot_2026-05-23_153015_ssufan.png",
    gallery: [],
    video: null,
    tech: [
      "React",
      "React Router",
      "Axios",
      "Leaflet",
      "Framer Motion",
      "Tailwind CSS",
      "js-cookie",
      "Generative AI",
    ],
    caseStudy: {
      problem:
        "Every new project launch meant someone reading a developer's brochure and retyping dozens of fields into the CRM by hand, then rebuilding training material for agents from the same document. Nobody could query those documents directly. An extraction service existed, but its output could not be trusted straight into the CRM: values arrive as display text where the CRM stores numeric IDs, fields come back missing, and the same project is often already there under a slightly different name.",
      built: [
        "Designed the write path so no extracted value reaches the CRM unreviewed: every field renders as an editable control, and nulls are stripped from the payload so a partial extraction can't overwrite existing CRM data.",
        "Fetched the property's current CRM record alongside each extraction so reviewers compare AI output against the live value field by field, and can copy the CRM value rather than retype it.",
        "Built the mapping layer between the two shapes: reverse lookups resolve extracted display names to the CRM's numeric IDs, and column-oriented response arrays are zipped into rows for review and unzipped on insert.",
        "Isolated each extraction call behind its own catch and fetched the remaining sections concurrently once the first resolved, so one failing section degrades to a missing card rather than an empty screen.",
        "Gated the pipeline behind a similarity-scored duplicate check whose outcome becomes the record identity every later stage reads, so one reviewer decision switches the whole flow between insert and update.",
        "Rendered each answer through a progressive reveal before swapping to markdown, trading true streaming — which the single-response endpoint doesn't support — for immediate feedback on slow answers.",
      ],
      outcome:
        "Adding a project to the CRM became a review pass instead of a retyping job: values arrive pre-filled and already matched against the existing record, so the reviewer edits or rejects rather than types. L&D generated assessments from the same uploaded documents instead of writing them per launch. Staff queried project documents directly rather than requesting a report.",
      stats: [
        { value: "3–5", label: "Project launches per month" },
        { value: "5", label: "Review stages before write" },
        { value: "36", label: "CRM fields mapped and editable" },
      ],
    },
    pvt: true,
    projectUrl: null,
    order: 4,
    year: 2024,
  },
{
  title: "Emirati Hub",
  slug: "emirati-hub",
  description:
    "A lead and inventory portal for 100 external agents, authenticating against three unrelated CRM instances simultaneously and merging their leads, properties and units behind one interface.",
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
    "React Query",
    "React Router",
    "Axios",
    "Material UI",
    "Tailwind CSS",
    "js-cookie",
  ],
  caseStudy: {
    problem:
      "PSI hired 100 part-time local agents to extend its sales force. They needed leads, inventory and their own pipeline, but could not be given internal CRM access — too complex, and it exposed sensitive company data. Those records lived in three unrelated CRM instances, each with its own login, its own user identity for the same person, and no shared ID space or aggregating endpoint. Nothing sat between the agents and those systems, and delivery was seven working days.",
    built: [
      "Modelled the source CRM as a required field on every record, since IDs are only valid inside the instance that issued them — making provenance rather than a shared key the routing input for every subsequent call.",
      "Authenticated one credential pair against three independent login endpoints on sign-in, and failed the whole login unless the agent's role existed in all three, rather than admitting a partly-provisioned user into a half-working portal.",
      "Split failure handling by cause on every fan-out: an unreachable CRM degraded the result set through settled promises, while a single 401 cleared all three sessions and forced re-login.",
      "Routed each new lead to one destination CRM, inherited from the selected unit's source or chosen explicitly, and scoped the form's property search to that instance so every ID in the payload was valid where the lead landed.",
      "Reconciled overlapping property records on name identity — the only attribute the three instances shared — after establishing that no other key was common across the systems.",
      "Tuned cache lifetimes per data type, an hour for inventory and five minutes for an agent's own leads, because one uncached page load cost up to six upstream calls across three systems.",
    ],
    outcome:
      "Shipped in seven working days and put 100 local agents on it. Each sign-in opened three authenticated sessions; each list page fanned out to as many as six upstream calls and returned one merged, source-tagged view; each submitted lead landed in exactly one CRM with IDs valid there. With no service layer available to sit between the agents and the three CRMs, the session, aggregation and routing logic was designed to run client-side without leaking the complexity into the interface.",
    stats: [
      { value: "+100", label: "Local agents onboarded" },
      { value: "7", label: "Working days to deliver" },
      { value: "3", label: "CRMs unified" },
    ],
  },
  pvt: true,
  projectUrl: null,
  order: 1,
  year: 2025,
},
  {
    title: "Raqeem – Multi-Tenant Dealership Platform",
    slug: "raqeem",
    description:
      "Inventory, expense and profit tracking for UAE used-car dealerships, where each car's true profit is derived from its purchase price and running costs rather than tracked by hand.",
    mainImage:
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1785776421/ChatGPT_Image_Aug_3_2026_08_58_14_PM_ss2s34.png",
    gallery: [
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1785777676/Screenshot_2026-08-03_211741_apy8jj.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1785777676/Screenshot_2026-08-03_211814_lqffsp.png",
      "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1785777676/Screenshot_2026-08-03_211930_yioopg.png",
    ],
    video: null,
    tech: [
      "PostgreSQL",
      "Row Level Security",
      "Supabase",
      "Next.js 16",
      "TypeScript",
      "Turborepo",
      "Playwright",
      "next-intl",
    ],
    caseStudy: {
      stats: [
        { value: "3", label: "Authorization layers" },
        { value: "2", label: "Languages, full RTL" },
        { value: "RLS", label: "Isolation enforced in Postgres" },
      ],
      problem:
        "A used-car dealership's profit exists only per car: a purchase price, then months of running costs — registration, garage work, parts, commission — booked against that vehicle before it sells. Owners need that number per car, per brand and per price band. Staff need to do the daily work without being able to destroy records or change who they are. Several dealerships share one system and none may see another's cars. All of it works in Arabic and English.",
      built: [
        "Modelled per-car profit as a derived database view instead of a stored total, because a stored figure drifts the moment an expense is edited — and a generated column cannot reference the separate expense table it depends on.",
        "Enforced tenant isolation in row-level database policies rather than in application code, so a request that skips the app entirely and calls the auto-generated REST API directly is still scoped to a single dealership.",
        "Closed a privilege-escalation path with column-level UPDATE grants after finding that row-level policies cannot compare a row's old and new values, which left no way to express \"this column is immutable\" as a policy.",
        "Designed the analytics layer as SQL functions running with the caller's privileges rather than the definer's, so pushing aggregation into the database did not turn the reporting layer into the one place tenant isolation leaked.",
        "Passed the aging threshold, carrying-cost rate and price-band boundaries into those functions as parameters instead of hardcoding them in SQL, keeping one source of truth shared by the queries and the labels that describe them.",
        "Built a standalone stand-in for the hosted auth and REST APIs so the browser suite runs deterministically offline, including a test that captures an owner's delete request and replays it from a staff session.",
      ],
      outcome:
        "Shipped as a working monorepo covering the full car lifecycle, an expense ledger, per-showroom expense categories and an owner analytics dashboard whose every figure is aggregated in SQL rather than computed in the browser. Covered by a browser test suite that includes requests forged to bypass the interface's permission checks entirely. Not deployed: built to production standards, not to a launch date.",
    },
    pvt: false,
    projectUrl: null,
    order: 2,
    year: 2026,
  },
{
  title: "PSI-International Portal – Event & Lead Management System",
  slug: "psi-international-portal",
  description:
    "A role-based events portal where four departments hold different permissions over the same international event records, replacing paper lead sheets, personal Excel files and Google Form surveys.",
  mainImage:
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779536260/Login_rdlk6n.svg",
  gallery: [
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779536469/Home_svj6tn.png",
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779536684/Current_Event_popup_oourha.png",
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779536775/Support_i0tjcu.png",
    "https://res.cloudinary.com/dkzx3gz4z/image/upload/v1779536848/Add_New_Event_dbkh2s.png",
  ],
  video: null,
  tech: ["React", "React Router", "Axios", "React Query", "FullCalendar", "Material UI", "Tailwind CSS", "js-cookie"],
  caseStudy: {
    problem:
      "PSI attends international real estate events across several countries. Business development ran them alone; no other department knew which events existed or who was attending. Agents recorded leads on paper or in personal Excel files, so lead ownership and event attribution were lost before the data reached any CRM — and PSI runs three separate CRM instances with separate logins. Post-event feedback arrived through Google Forms, disconnected from the events. Nobody could compare an event's cost against what it returned.",
    built: [
      "Modelled permissions as server-issued role flags fetched at login rather than separate per-department screens, so all four departments share one event view and every action is gated by role combined with the event's date.",
      "Enforced those rules at the component and CRM-token boundary rather than in route guards — a deliberate scoping call given no portal-side backend to enforce against, and the first thing I'd move server-side given one.",
      "Derived lead routing from which of three CRM instances an agent's credentials authenticated against, rather than a mapping table, then stamped each lead with the event as its media source and the agent as owner.",
      "Flattened a single lead form into each CRM's create-lead contract — splitting names, wrapping scalars into arrays, and substituting a sentinel email when agents left it blank so CRM deduplication wouldn't merge unrelated contacts.",
      "Handled CRM write failures by separating expired sessions, which clear tokens and bounce to login, from transient errors the agent retries by hand; the form keeps its state, but there is no offline queue.",
      "Replaced the Google Form survey with six in-portal sections that flatten to one 40-column record per agent per event, keyed to event and agent so responses join back to the event they describe.",
    ],
    outcome:
      "Four departments worked from one event record instead of separate spreadsheets and inboxes. Over 50 agents registered 700+ leads at international events, each written into the CRM that owned the agent and tagged to its event. Management read attendance, lead volume and cost-versus-revenue from a shared calendar and embedded Power BI reports. First working version shipped in a week, with features added over the following months.",
    stats: [
      { value: "50+", label: "Agents supported" },
      { value: "700+", label: "Leads captured" },
      { value: "3", label: "CRMs integrated" },
      { value: "1 week", label: "To first working version" },
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


  
];
