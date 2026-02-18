export interface UpdatedCourse {
  title: string;
  slug: string;
  excerpt: string;
  desc: string;   // 🔥 string kar diya
  content: string;   // 🔥 string kar diya
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
}

export interface ContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote' | 'table' | 'stats' | 'chart' | 'icon-list' | 'bibliography';
  content?: string;
  items?: string[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
  statsData?: {
    value: string;
    label: string;
    icon?: string;
  }[];
  chartData?: {
    title: string;
    data: { name: string; value: number; }[];
  };
}

export const updatedCourses: UpdatedCourse[] = [
  {
    title: "AI-Powered Threat Intelligence",
    slug: "ai-powered-threat-intelligence",
    desc: "Advanced cyber security solutions leverage artificial intelligence...",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",
    content: `
      <h2>AI-Powered Threat Intelligence</h2>
      <p>AI-driven systems analyze large volumes of security data to detect anomalies and predict threats in real time.</p>
      <ul>
        <li>Machine Learning Threat Detection</li>
        <li>Automated Incident Response</li>
        <li>Behavioral Analytics</li>
      </ul>
    `,
  },

  {
    title: "Zero Trust Security Architecture",
    slug: "zero-trust-security-architecture",
    desc: "Zero Trust is a modern security framework...",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
    content: `
      <h2>Zero Trust Security Architecture</h2>
      <p>Zero Trust verifies every user and device before granting access.</p>
      <ul>
        <li>Identity Verification</li>
        <li>Micro-segmentation</li>
        <li>Continuous Monitoring</li>
      </ul>
    `,
  },

  {
    title: "Advanced SOC & Incident Response",
    slug: "advanced-soc-incident-response",
    desc: "Security Operations Centers (SOC) use advanced monitoring tools...",
    imageUrl:
      "https://images.unsplash.com/photo-1581090700227-1e8b7b8c9b45?w=1200",
    content: `
      <h2>Advanced SOC & Incident Response</h2>
      <p>24/7 monitoring using SIEM and threat intelligence platforms.</p>
    `,
  },

  {
    title: "Cloud Security & DevSecOps",
    slug: "cloud-security-devsecops",
    desc: "Modern enterprises secure cloud environments...",
    imageUrl:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1200",
    content: `
      <h2>Cloud Security & DevSecOps</h2>
      <p>Integrating security into the DevOps pipeline for safer deployments.</p>
    `,
  },

  {
    title: "IoT & Critical Infrastructure Protection",
    slug: "iot-critical-infrastructure-protection",
    desc: "Advanced security frameworks protect IoT devices...",
    imageUrl:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200",
    content: `
      <h2>IoT & Infrastructure Protection</h2>
      <p>Protecting connected devices and industrial systems.</p>
    `,
  },

  {
    title: "Ransomware Prevention & Cyber Defense Strategy",
    slug: "ransomware-prevention-cyber-defense",
    desc: "Implement multi-layered security strategies...",
    imageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200",
    content: `
      <h2>Ransomware Prevention Strategy</h2>
      <p>Multi-layered security including backups and behavioral analytics.</p>
    `,
  },
];


