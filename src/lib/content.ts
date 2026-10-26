export const NAV_LINKS = [
  { label: "Our Delusion", href: "#delusion" },
  { label: "Products", href: "#products" },
  { label: "Traction", href: "#traction" },
  { label: "Founder", href: "#founder" },
  { label: "Survival Test", href: "#survival" },
] as const;

export type Metric = {
  id: string;
  label: string;
  value?: number;
  prefix?: string;
  display?: string;
  note: string;
  meta: string;
  featured?: boolean;
  pending?: boolean;
  bars: number[];
};

export const METRICS: Metric[] = [
  {
    id: "mrr",
    label: "Monthly recurring revenue",
    value: 0,
    prefix: "₹",
    note: "A perfect zero. Untouched by commerce.",
    meta: "Monthly / INR",
    featured: true,
    bars: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  {
    id: "ideas",
    label: "Ideas abandoned",
    value: 47,
    note: "Each one was going to change everything.",
    meta: "All time",
    bars: [10, 25, 18, 38, 30, 44, 52, 60, 58, 72, 78, 86],
  },
  {
    id: "domains",
    label: "Domains purchased",
    value: 23,
    note: "Eleven redirect to the same Notion page.",
    meta: "Since inception",
    bars: [8, 14, 20, 18, 36, 40, 34, 52, 48, 62, 70, 74],
  },
  {
    id: "products",
    label: "Products launched",
    value: 3,
    note: "All currently in private beta with nobody.",
    meta: "Status: live-ish",
    bars: [0, 0, 0, 0, 35, 35, 35, 35, 68, 68, 68, 68],
  },
  {
    id: "customers",
    label: "Paying customers",
    display: "Mom",
    note: "Payment expected after Sunday lunch.",
    meta: "Pending",
    pending: true,
    bars: [0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10],
  },
  {
    id: "pivots",
    label: "Times we've pivoted",
    value: 19,
    note: "The vision has never been clearer.",
    meta: "Year to date",
    bars: [12, 20, 15, 30, 44, 38, 54, 48, 65, 58, 76, 88],
  },
];

export type ProductId = "pivotgpt" | "fundmydelusion" | "linkedinify" | "prayer";

export type Product = {
  id: ProductId;
  number: string;
  name: string;
  category: string;
  description: string;
  cta: string;
  bullets?: string[];
  example?: { label: string; text: string }[];
  detailLabel: string;
  footnote: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "pivotgpt",
    number: "01",
    name: "PivotGPT™",
    category: "AI-powered narrative infrastructure",
    description:
      "An AI-powered platform that explains why your startup failed without hurting your feelings.",
    cta: "Understand Our Failure",
    detailLabel: "Pre-approved explanations",
    bullets: [
      "The market wasn't ready.",
      "We were too early.",
      "We're pivoting to AI.",
      "Actually, we're building an AI agent now.",
    ],
    footnote: "99.9% uptime. 0% accountability.",
  },
  {
    id: "fundmydelusion",
    number: "02",
    name: "FundMyDelusion™",
    category: "Capital markets, but faster",
    description: "Generate a pitch deck for any idea in 30 seconds.",
    cta: "Pitch Your Delusion",
    detailLabel: "Example output",
    example: [
      { label: "Input", text: "Uber, but for chai." },
      {
        label: "Output",
        text: "A 47-slide presentation requesting ₹5 crore at a ₹50 crore valuation.",
      },
    ],
    footnote: "Investor replies not included. Or guaranteed.",
  },
  {
    id: "linkedinify",
    number: "03",
    name: "LinkedInify™",
    category: "Founder reality translation layer",
    description: "Transform everyday failures into inspirational founder stories.",
    cta: "Rewrite My Reality",
    detailLabel: "Live translation",
    example: [
      { label: "Reality", text: "Three customers left." },
      {
        label: "LinkedIn version",
        text: "“After an incredible journey serving our first three customers, we're making the difficult decision to focus on our next chapter.”",
      },
    ],
    footnote: "Now with 40% more vulnerability.",
  },
  {
    id: "prayer",
    number: "04",
    name: "Prayer-as-a-Service™",
    category: "Spiritual uptime for founders",
    description:
      "Automated spiritual support for founders facing their most challenging business moments.",
    cta: "Request Divine Intervention",
    detailLabel: "Supported use cases",
    bullets: [
      "Waiting for a client to pay.",
      "Preparing for an investor meeting.",
      "Watching the AWS bill increase.",
      "Waiting for a cofounder to reply.",
      "Surviving another month without revenue.",
    ],
    footnote: "No divine SLA is implied.",
  },
];

export const REALITY_PAIRS = [
  { reality: "Three customers stopped responding.", linkedin: "“We're doubling down on customer discovery.”" },
  { reality: "The cofounder wants to discuss something.", linkedin: "“We're restructuring our leadership alignment.”" },
  { reality: "The server bill is due.", linkedin: "“We're optimizing our infrastructure economics.”" },
  { reality: "The startup has pivoted again.", linkedin: "“We're strategically repositioning.”" },
  { reality: "The founder has opened another GitHub repository.", linkedin: "“We're exploring an exciting new opportunity.”" },
];

export type Investor = {
  investor: string;
  contribution: string;
  status: string;
};

export const INVESTORS: Investor[] = [
  { investor: "Mom", contribution: "One plate of poha", status: "Received" },
  { investor: "Dad", contribution: "“Get a real job.”", status: "Recurring" },
  { investor: "Best friend", contribution: "₹500 (never repaid)", status: "Outstanding" },
  { investor: "Local chaiwala", contribution: "Credit facility (revoked)", status: "Revoked" },
  { investor: "Bhagwan", contribution: "Awaiting approval", status: "Pending" },
];

export type RoadmapStatus = "completed" | "in-progress" | "planned";

export const ROADMAP = [
  {
    period: "Q1",
    title: "Ideation",
    status: "completed" as RoadmapStatus,
    statusLabel: "Completed",
    note: "We had an idea.",
    detail: "It was going to change everything. Then Q2 happened.",
  },
  {
    period: "Q2",
    title: "MVP",
    status: "completed" as RoadmapStatus,
    statusLabel: "Completed",
    note: "We built something.",
    detail: "It worked on localhost. A historic milestone.",
  },
  {
    period: "Q3",
    title: "Product-market fit",
    status: "in-progress" as RoadmapStatus,
    statusLabel: "In progress",
    note: "We changed the product.",
    detail: "The market has not yet been informed.",
  },
  {
    period: "Q4",
    title: "Growth",
    status: "in-progress" as RoadmapStatus,
    statusLabel: "In progress",
    note: "We're posting on LinkedIn.",
    detail: "Impressions are up. Revenue remains untouched.",
  },
  {
    period: "2027",
    title: "IPO",
    status: "planned" as RoadmapStatus,
    statusLabel: "Planned",
    note: "Subject to divine intervention.",
    detail: "We have reserved the ticker. That is the update.",
  },
];

export const FOUNDER_STATUS = [
  "Building in public.",
  "Crying in private.",
  "Pivoting on weekends.",
  "Updating the README instead of doing sales.",
];
