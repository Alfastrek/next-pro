// Types
export interface Tool {
  imgSrc: string;
  heading: string;
  subheading: string;
  buttonText?: string;
  buttonLink?: string;
  linkbuttonText?: string;
  documentLink?: string;
}

export type Category = 
  | "all"
  | "traders"
  | "bd"
  | "bo"
  | "devops"
  | "management";

export const TABS = [
  { value: "all" as const, label: "All" },
  { value: "traders" as const, label: "For Traders" },
  { value: "bd" as const, label: "For BD" },
  { value: "bo" as const, label: "For BO" },
  { value: "devops" as const, label: "For DevOps" },
  { value: "management" as const, label: "For Management" },
];

// Category mappings for filtering
export const CATEGORY_MAPPINGS: Record<Category, string[]> = {
  all: [], // Will show all tools
  traders: [
    "RMS UI",
    "Charges UI",
    "AG Trades DB",
    "HFT Cloud DB Management",
    "Ag-config Management System",
    "CryptoVerse",
    "Trading Hours",
    "Strategy Monitor",
    "Grafana",
  ],
  bd: [
    "RMS UI",
    "Charges UI",
    "AG Trades DB",
    "Corporate Action as Service",
    "Manual Trades RecordKeeper",
  ],
  bo: [
    "AG Trades DB",
    "Trading Hours",
    "Corporate Action as Service",
    "Holidays",
  ],
  devops: [
    "RMS UI",
    "Alerta",
    "Ag-config Management System",
    "Auto Binary Deployer",
  ],
  management: [
    "Trading Hours",
    "Holidays",
    "Compliance Alpha",
    "MIS Dashboard",
  ],
};

export const toolsData: Tool[] = [
  {
    imgSrc: "/images/Work/icon-one.svg",
    heading: "RMS UI",
    subheading: "A user-friendly interface to manage risk management systems.",
    buttonText: "Learn More",
    buttonLink: "/rms-ui",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-two.svg",
    heading: "Charges UI",
    subheading: "Simplify the process of managing and viewing charges.",
    buttonText: "Learn More",
    buttonLink: "/charges-ui",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-three.svg",
    heading: "AG Trades DB",
    subheading: "Centralized database for managing AG trades efficiently.",
    buttonText: "Learn More",
    buttonLink: "/ag-trades-db",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-four.svg",
    heading: "HFT Cloud DB Management",
    subheading: "Manage high-frequency trading data in the cloud.",
    buttonText: "Learn More",
    buttonLink: "/hft-cloud-db",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-five.svg",
    heading: "Ag-config Management System",
    subheading: "Comprehensive tool for managing AG configurations.",
    buttonText: "Learn More",
    buttonLink: "/ag-config-management",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-six.svg",
    heading: "CryptoVerse",
    subheading: "Explore and trade cryptocurrencies with ease.",
    buttonText: "Learn More",
    buttonLink: "/cryptoverse",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-seven.svg",
    heading: "Holidays",
    subheading: "Plan trades with holiday schedules and updates.",
    buttonText: "Learn More",
    buttonLink: "/holidays",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-eight.svg",
    heading: "Corporate Action as Service",
    subheading: "Streamline corporate actions through advanced services.",
    buttonText: "Learn More",
    buttonLink: "/corporate-actions",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-nine.svg",
    heading: "Trading Hours",
    subheading: "Keep track of trading hours for global markets.",
    buttonText: "Learn More",
    buttonLink: "/trading-hours",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-ten.svg",
    heading: "Strategy Monitor",
    subheading: "Monitor and optimize trading strategies effectively.",
    buttonText: "Learn More",
    buttonLink: "/strategy-monitor",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-eleven.svg",
    heading: "MIS Dashboard",
    subheading: "Access actionable insights through an advanced dashboard.",
    buttonText: "Learn More",
    buttonLink: "/mis-dashboard",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-twelve.svg",
    heading: "Auto Binary Deployer",
    subheading: "Automate binary deployments with precision.",
    buttonText: "Learn More",
    buttonLink: "/auto-binary-deployer",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-thirteen.svg",
    heading: "Alerta",
    subheading: "Real-time alert management for efficient monitoring.",
    buttonText: "Learn More",
    buttonLink: "/alerta",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-fourteen.svg",
    heading: "Grafana",
    subheading: "Visualize and analyze data with advanced dashboards.",
    buttonText: "Learn More",
    buttonLink: "/grafana",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-fifteen.svg",
    heading: "Compliance Alpha",
    subheading: "Ensure compliance with regulatory requirements effortlessly.",
    buttonText: "Learn More",
    buttonLink: "/compliance-alpha",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
  {
    imgSrc: "/images/Work/icon-sixteen.svg",
    heading: "Manual Trades RecordKeeper",
    subheading: "Easily manage and document manual trades.",
    buttonText: "Learn More",
    buttonLink: "/manual-trades",
    linkbuttonText: "Redirect",
    documentLink: "/rms-ui-docs",
  },
];

// Helper function to filter tools by category
export const getToolsByCategory = (category: Category, tools: Tool[]): Tool[] => {
  if (category === 'all') return tools;
  const allowedTools = CATEGORY_MAPPINGS[category];
  return tools.filter(tool => allowedTools.includes(tool.heading));
};