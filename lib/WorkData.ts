// Types
import {
  faBriefcase,
  faChartLine,
  faCode,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

export interface Tool {
  group: {
    groupName: string;
    icon: any;
  };
  imgSrc: string;
  heading: string;
  subheading: string;
  buttonText?: string;
  buttonLink?: string;
  linkbuttonText?: string;
  documentLink?: string;
  likeCount?: number;
}

export const groupIcons = {
  'Traders Tools': faChartLine,
  'Management Tools': faBriefcase,
  'Dev Tools': faCode,
  'BD Tools': faHandshake,
};

export type Category =
  | 'all'
  | 'traders'
  | 'bd'
  | 'bo'
  | 'devops'
  | 'management';

export const TABS = [
  { value: 'all' as const, label: 'All' },
  { value: 'traders' as const, label: 'For Traders' },
  { value: 'bd' as const, label: 'For BD' },
  { value: 'bo' as const, label: 'For BO' },
  { value: 'devops' as const, label: 'For DevOps' },
  { value: 'management' as const, label: 'For Management' },
];

// Category mappings for filtering
export const CATEGORY_MAPPINGS: Record<Category, string[]> = {
  all: [], // Will show all tools
  traders: [
    'RMS UI',
    'Charges UI',
    'AG Trades DB',
    'HFT Cloud DB Management',
    'Ag-config Management System',
    'CryptoVerse',
    'Trading Hours',
    'Strategy Monitor',
    'Grafana',
  ],
  bd: [
    'RMS UI',
    'Charges UI',
    'AG Trades DB',
    'Corporate Action as Service',
    'Manual Trades RecordKeeper',
  ],
  bo: [
    'AG Trades DB',
    'Trading Hours',
    'Corporate Action as Service',
    'Holidays',
  ],
  devops: [
    'RMS UI',
    'Alerta',
    'Ag-config Management System',
    'Auto Binary Deployer',
  ],
  management: [
    'Trading Hours',
    'Holidays',
    'Compliance Alpha',
    'MIS Dashboard',
  ],
};

export const toolsData: Tool[] = [
  {
    group: { groupName: 'Dev Tools', icon: faCode },
    imgSrc: '/images/Work/rmsui.svg',
    heading: 'RMS UI',
    subheading: 'A user-friendly interface to manage risk management systems.',
    buttonText: 'Learn More',
    buttonLink: 'http://devops.alpha-grep.com:5000/rms-ui',
    linkbuttonText: 'Redirect',
    documentLink: 'https://alpha-grep.atlassian.net/wiki/spaces/API/pages/139526269/RMS+GUI',
    likeCount: 10,
  },
  {
    group: { groupName: 'Traders Tools', icon: faChartLine },
    imgSrc: '/images/Work/icon-two.svg',
    heading: 'Charges UI',
    subheading: 'Simplify the process of managing and viewing charges.',
    buttonText: 'Learn More',
    buttonLink: 'http://devops.alpha-grep.com:5000/charges-ui',
    linkbuttonText: 'Redirect',
    documentLink: 'https://alpha-grep.atlassian.net/wiki/spaces/API/overview?homepageId=327868',
    likeCount: 10,
  },
  {
    group: { groupName: 'Traders Tools', icon: faChartLine },
    imgSrc: '/images/Work/icon-three.svg',
    heading: 'AG Trades DB',
    subheading: 'Centralized database for managing AG trades efficiently.',
    buttonText: 'Learn More',
    buttonLink: 'http://devops.alpha-grep.com:5000/trades-db',
    linkbuttonText: 'Redirect',
    documentLink: 'https://alpha-grep.atlassian.net/wiki/spaces/API/pages/220627119/AG+Trades+DB+User+Guide',
    likeCount: 10,
  },
  {
    group: { groupName: 'Dev Tools', icon: faCode },
    imgSrc: '/images/Work/icon-four.svg',
    heading: 'HFT Cloud DB Management and Subscriptions',
    subheading: 'Manage high-frequency trading data in the cloud.',
    buttonText: 'Learn More',
    buttonLink: 'http://devops.alpha-grep.com:5000/assets/data-access',
    linkbuttonText: 'Redirect',
    documentLink: '/hft-cloud-db-docs',
    likeCount: 10,
  },
  {
    group: { groupName: 'Dev Tools', icon: faCode },
    imgSrc: '/images/Work/icon-five.svg',
    heading: 'AG-config Management System',
    subheading: 'Tool for managing AG configurations.',
    buttonText: 'Learn More',
    buttonLink: '/ag-config-management',
    linkbuttonText: 'Redirect',
    documentLink: '/ag-config-management-docs',
    likeCount: 10,
  },
  {
    group: { groupName: 'Traders Tools', icon: faChartLine },
    imgSrc: '/images/Work/icon-six.svg',
    heading: 'CryptoVerse',
    subheading: 'Explore and trade cryptocurrencies with ease.',
    buttonText: 'Learn More',
    buttonLink: '/cryptoverse',
    linkbuttonText: 'Redirect',
    documentLink: '/cryptoverse-docs',
    likeCount: 10,
  },
  {
    group: { groupName: 'Management Tools', icon: faBriefcase },
    imgSrc: '/images/Work/icon-seven.svg',
    heading: 'Holidays',
    subheading: 'Plan trades with holiday schedules and updates.',
    buttonText: 'Learn More',
    buttonLink: '/holidays',
    linkbuttonText: 'Redirect',
    documentLink: '/holidays-docs',
    likeCount: 10,
  },
  {
    group: { groupName: 'BD Tools', icon: faHandshake },
    imgSrc: '/images/Work/icon-eight.svg',
    heading: 'Corporate Action as Service',
    subheading: 'Streamline corporate actions through advanced services.',
    buttonText: 'Learn More',
    buttonLink: '/corporate-actions',
    linkbuttonText: 'Redirect',
    documentLink: '/corporate-actions-docs',
    likeCount: 10,
  },
  {
    group: { groupName: 'Management Tools', icon: faBriefcase },
    imgSrc: '/images/Work/icon-nine.svg',
    heading: 'Trading Hours',
    subheading: 'Keep track of trading hours for global markets.',
    buttonText: 'Learn More',
    buttonLink: '/trading-hours',
    linkbuttonText: 'Redirect',
    documentLink: '/trading-hours-docs',
    likeCount: 10,
  },
  {
    group: { groupName: 'Traders Tools', icon: faChartLine },
    imgSrc: '/images/Work/icon-ten.svg',
    heading: 'Strategy Monitor',
    subheading: 'Monitor and optimize trading strategies effectively.',
    buttonText: 'Learn More',
    buttonLink: '/strategy-monitor',
    linkbuttonText: 'Redirect',
    documentLink: '/strategy-monitor-docs',
    likeCount: 10,
  },
  {
    group: { groupName: 'Management Tools', icon: faBriefcase },
    imgSrc: '/images/Work/icon-eleven.svg',
    heading: 'MIS Dashboard',
    subheading: 'Access actionable insights through an advanced dashboard.',
    buttonText: 'Learn More',
    buttonLink: '/mis-dashboard',
    linkbuttonText: 'Redirect',
    documentLink: '/mis-dashboard-docs',
    likeCount: 10,
  },
  {
    group: { groupName: 'Dev Tools', icon: faCode },
    imgSrc: '/images/Work/icon-twelve.svg',
    heading: 'Auto Binary Deployer',
    subheading: 'Automate binary deployments with precision.',
    buttonText: 'Learn More',
    buttonLink: '/auto-binary-deployer',
    linkbuttonText: 'Redirect',
    documentLink: '/auto-binary-deployer-docs',
    likeCount: 10,
  },
  {
    group: { groupName: 'Dev Tools', icon: faCode },
    imgSrc: '/images/Work/icon-thirteen.svg',
    heading: 'Alerta',
    subheading: 'Real-time alert management for efficient monitoring.',
    buttonText: 'Learn More',
    buttonLink: 'http://10.40.1.53/login?redirect=%2Falerts',
    linkbuttonText: 'Redirect',
    documentLink: 'https://alpha-grep.atlassian.net/wiki/spaces/API/pages/59932711/Alerta+Monitoring+System',
    likeCount: 10,
  },
  {
    group: { groupName: 'Traders Tools', icon: faChartLine },
    imgSrc: '/images/Work/icon-fourteen.svg',
    heading: 'Grafana',
    subheading: 'Visualize and analyze data with advanced dashboards.',
    buttonText: 'Learn More',
    buttonLink: '/grafana',
    linkbuttonText: 'Redirect',
    documentLink: '/grafana-docs',
    likeCount: 10,
  },
  {
    group: { groupName: 'Management Tools', icon: faBriefcase },
    imgSrc: '/images/Work/icon-fifteen.svg',
    heading: 'Compliance Alpha',
    subheading: 'Ensure compliance with regulatory requirements effortlessly.',
    buttonText: 'Learn More',
    buttonLink: '/compliance-alpha',
    linkbuttonText: 'Redirect',
    documentLink: '/compliance-alpha-docs',
    likeCount: 10,
  },
  {
    group: { groupName: 'BD Tools', icon: faHandshake },
    imgSrc: '/images/Work/icon-sixteen.svg',
    heading: 'Manual Trades RecordKeeper',
    subheading: 'Easily manage and document manual trades.',
    buttonText: 'Learn More',
    buttonLink: '/manual-trades',
    linkbuttonText: 'Redirect',
    documentLink: '/manual-trades-docs',
    likeCount: 10,
  },
];

// Helper function to filter tools by category
export const getToolsByCategory = (
  category: Category,
  tools: Tool[]
): Tool[] => {
  if (category === 'all') return tools;
  const allowedTools = CATEGORY_MAPPINGS[category];
  return tools.filter((tool) => allowedTools.includes(tool.heading));
};
