export const personalInfo = {
  name: "Sushant Tripathi",
  title: "AI Data & Business Analyst",
  subtitle: "Empowering Business Decisions with Data Analytics, Interactive BI Dashboards, ETL Pipelines & GenAI Workflows",
  location: "India",
  email: "sushant.tripathi2000.st@gmail.com",
  phone: "+91-9140631755",
  whatsapp: "919140631755",
  linkedin: "https://www.linkedin.com/in/sushant2520/",
  github: "https://github.com/Sushant2520",
  companyUrl: "https://in.linkedin.com/company/infinity-analytics-consulting",
  cvPath: "/CV_Sushant_Tripathi_Data_Analyst.pdf",
  bio: "Results-driven AI Data & Business Analyst with 1 year of full-time industry experience at Infinyty Tech (formerly Infinity Analytics & Consulting). Proven track record of building executive Power BI dashboards with DAX metrics, reducing report latency from 2 days to same-day delivery, engineering automated AWS S3 ETL pipelines, and automating 80% of candidate evaluation workflows using LLMs, Google Workspace APIs, and Python.",
  stats: [
    { label: "Full-Time Industry Experience", value: "1 Year", highlight: "Infinyty Tech" },
    { label: "Hiring Workflow Automation", value: "80%", highlight: "LLMs + Google APIs" },
    { label: "BI Report Latency Cut", value: "2 Days → Same Day", highlight: "AWS S3 + Power BI" },
    { label: "DSA & Problem Solving", value: "250+", highlight: "LeetCode & GFG" },
    { label: "Academic Excellence", value: "8.28 CGPA", highlight: "VIT Bhopal B.Tech" }
  ]
};

export const experiences = [
  {
    company: "Infinyty Tech",
    companyUrl: "https://in.linkedin.com/company/infinity-analytics-consulting",
    formerName: "formerly Infinity Analytics & Consulting",
    role: "AI Data & Business Analyst",
    period: "Oct 2025 – Present (1 Year Full-Time)",
    location: "India",
    description: "Driving business analytics, Power BI dashboarding, ETL pipelines, API integrations, and GenAI assessment automation systems across major client platforms.",
    projects: [
      {
        id: "letzryd",
        title: "LETZRYD – Vehicle & Partner Operations Platform",
        category: "Data Engineering & API Integration",
        badge: "Production Platform",
        highlights: [
          "Architected a multi-tier relational database schema for fleet and partner operations, guaranteeing referential integrity across drivers, partners, and financial data.",
          "Engineered scalable PostgreSQL data structures supporting real-time onboarding, fleet tracking, and dynamic financial adjustments while maintaining strict data consistency.",
          "Led database schema optimization and migration across environments, significantly improving query performance.",
          "Developed a production REST API and webhook integration with Rapido to ingest real-time Captain and Order Status events into PostgreSQL for trip lifecycle tracking.",
          "Implemented FastAPI-based API authentication, payload validation, status checking, and structured webhook processing for reliable third-party data ingestion.",
          "Designed PostgreSQL UPSERT workflows to maintain incremental order updates while preserving trip fare, cancellation reason, captain earnings, and financial attributes.",
          "Deployed and validated the integration on Google Cloud Run, using Google Cloud Secret Manager for secure API-key and database credential management."
        ],
        techStack: ["PostgreSQL", "FastAPI", "Python", "REST APIs", "Webhooks", "Google Cloud Run", "Secret Manager", "Rapido Integration"]
      },
      {
        id: "tona",
        title: "TONA – Marketing & Campaign Analytics",
        category: "Business Intelligence & Data Pipeline",
        badge: "BI Automation",
        highlights: [
          "Built end-to-end ETL workflows to extract, transform, and prepare large-scale marketing campaign data from AWS S3 into analysis-ready datasets.",
          "Reduced leadership report generation time from 2 days to same-day delivery through automated data pipelines.",
          "Designed interactive Power BI dashboards translating complex campaign data into actionable KPIs for leadership to monitor spending and ROI.",
          "Consolidated fragmented data sources into an automated BI pipeline, eliminating manual reporting effort and improving consistency."
        ],
        techStack: ["Power BI", "AWS S3", "ETL Pipelines", "DAX", "Python", "Plotly", "KPI Dashboarding"]
      },
      {
        id: "peopleverse",
        title: "People Verse – AI-Powered Candidate Assessment",
        category: "GenAI & Automation",
        badge: "GenAI Innovation",
        highlights: [
          "Architected an automated candidate assessment pipeline using LLMs to generate structured MCQs, competency mappings, and subjective evaluations directly from job descriptions.",
          "Integrated Google Forms and Google Drive APIs using OAuth 2.0 to automate assessment generation and distribution.",
          "Converted unstructured LLM outputs into structured Excel reports using Pandas and OpenPyXL.",
          "Implemented SMTP-based email automation for seamless assessment distribution, reducing manual hiring workflow by 80%."
        ],
        techStack: ["LLMs / GenAI", "FastAPI", "Google Workspace APIs", "OAuth 2.0", "OpenPyXL", "Pandas", "SMTP", "Python"]
      }
    ]
  }
];

export const projects = [
  {
    id: "shopping-analytics",
    title: "Customer Behaviour & Shopping Trend Analytics",
    category: "Data Analytics",
    subtitle: "EDA, Customer Segmentation & Power BI Retention Dashboard",
    description: "Executed comprehensive Exploratory Data Analysis (EDA), customer RFM-style segmentation, and retention analysis using Python (Pandas, NumPy, SQL) to identify purchasing behavior drivers. Created an interactive Power BI dashboard tracking retention rate, revenue by customer segment, and product performance KPIs.",
    metrics: ["Multi-Segment Cohorts", "Interactive Power BI", "Automated SQL Pipeline"],
    tech: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "EDA"],
    github: "https://github.com/Sushant2520",
    featured: true
  },
  {
    id: "blackcoffer-insights",
    title: "BlackCoffer Insights Visualization & Analytics",
    category: "Business Intelligence",
    subtitle: "Global Business Trends Analytics Engine",
    description: "Developed an interactive Business Intelligence dashboard analyzing global business trends across key metrics including intensity, likelihood, relevance, and regional dimensions. Implemented dynamic multi-dimensional filters, pivot tables, and analytical visualizations to translate raw unstructured datasets into executive insights.",
    metrics: ["4 Analytical Dimensions", "Dynamic Slicers", "Executive Insights"],
    tech: ["Power BI", "DAX", "Data Modeling", "Business Analysis", "Excel"],
    github: "https://github.com/Sushant2520",
    featured: true
  },
  {
    id: "healthcare-llm",
    title: "The Role of LLMs in Healthcare (Research & Architecture)",
    category: "AI & GenAI",
    subtitle: "Co-Authored Publication & LLM Framework Design",
    description: "Co-authored research paper examining how Large Language Models (LLMs) transform diagnostic accuracy, clinical decision support, and patient care workflows. Built companion prototype architecture for clinical data ingestion and automated structured report extraction.",
    metrics: ["Published Research", "Clinical Data Pipeline", "LLM Fine-tuning Context"],
    tech: ["LLMs", "GenAI", "Python", "Research Publication", "Prompt Engineering"],
    github: "https://github.com/Sushant2520",
    featured: true
  }
];

export const skillCategories = [
  {
    name: "Languages",
    icon: "Code",
    skills: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "SQL", level: 92, icon: "🛢️" },
      { name: "C++", level: 82, icon: "⚡" }
    ]
  },
  {
    name: "Business Intelligence & Analytics",
    icon: "BarChart3",
    skills: [
      { name: "Power BI & DAX", level: 94, icon: "📊" },
      { name: "KPI Dashboarding", level: 92, icon: "📈" },
      { name: "Pandas & NumPy", level: 95, icon: "🐼" },
      { name: "Plotly & Data Viz", level: 88, icon: "🎨" }
    ]
  },
  {
    name: "Data Engineering & Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 92, icon: "🐘" },
      { name: "ETL / Data Pipelines", level: 90, icon: "🔄" },
      { name: "MariaDB & MongoDB", level: 85, icon: "🍃" },
      { name: "AWS S3", level: 88, icon: "☁️" },
      { name: "Schema Design & Optimization", level: 90, icon: "🛠️" }
    ]
  },
  {
    name: "APIs, Cloud & GenAI Automation",
    icon: "Cpu",
    skills: [
      { name: "FastAPI & REST Webhooks", level: 90, icon: "⚡" },
      { name: "Google Cloud Run & Secret Manager", level: 88, icon: "☁️" },
      { name: "LLM / GenAI Integration", level: 88, icon: "🤖" },
      { name: "OAuth 2.0 & Workspace APIs", level: 85, icon: "🔐" }
    ]
  }
];

export const education = {
  institution: "Vellore Institute of Technology (VIT Bhopal)",
  degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
  period: "2021 – 2025",
  cgpa: "8.28 / 10.0",
  location: "Bhopal, India",
  highlights: [
    "Core focus on Data Structures, Algorithms, Relational DBs, and Machine Learning.",
    "Active member of tech clubs & competitive coding community."
  ]
};

export const certifications = [
  {
    title: "SQL (Basics, Intermediate & Advanced)",
    issuer: "HackerRank",
    date: "2024",
    badge: "Verified Certificate"
  },
  {
    title: "Power BI Professional",
    issuer: "Microsoft / Simplilearn",
    date: "2024",
    badge: "BI Specialist"
  },
  {
    title: "Full Stack Web Development with MERN & GenAI",
    issuer: "Udemy",
    date: "2025",
    badge: "Fullstack & AI"
  }
];

export const achievements = [
  {
    title: "250+ DSA Problems Solved",
    description: "Consistent problem solver across GeeksforGeeks and LeetCode, mastering algorithms, data structures, dynamic programming, and queries.",
    icon: "Trophy"
  },
  {
    title: "Co-authored Research Publication",
    description: "Published research paper: 'The Role of Large Language Models (LLMs) in Healthcare', exploring AI in diagnostic transformation.",
    icon: "BookOpen"
  }
];
