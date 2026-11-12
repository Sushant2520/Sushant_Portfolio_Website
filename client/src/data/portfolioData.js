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
  cvPath: "/Sushant_Tripathi_Resume_Oct.pdf",
  web3formsAccessKey: "c2afee32-69de-4012-9f31-ed81f317999a",
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
        title: "LETZRYD – Fleet Operations & Mobility Platform",
        category: "Data Engineering & API Integration",
        badge: "Production Platform",
        categoryTheme: "cyan",
        metrics: [
          "⚡ Automated Karnataka One Fine Extraction & Challan Pipeline",
          "⚡ Real-Time Rapido Webhook & UPSERT Ingestion",
          "⚡ Consolidated OLA, Uber & Rapido MIS Tracking"
        ],
        highlights: [
          "Contributed to LetzRyd Operations Management Portal (portaljuly) supporting Walk-in, Partner Onboarding, Vehicle Allocation, Adjustments, and Expenses desks.",
          "Architected Vehicle Onboarding & PDI System with PostgreSQL vehicle_onboarding schema capturing registration, RTO/permit/insurance compliance, CNG info, and photographic evidence.",
          "Implemented Driver & Partner Onboarding application (driver-onboarding) with PostgreSQL driver_onboarding table capturing partner master info, KYC documents, Aadhaar/PAN, and licence details.",
          "Engineered Automated Traffic-Challan Fine Pipeline: Consolidated 38-tab Google Sheet challan records + automated Karnataka One fine extraction into public.core_challans Single Source of Truth.",
          "Developed production Rapido API & Webhook Integration to ingest real-time Captain and Order status events into PostgreSQL with UPSERT workflows preserving trip fares & earnings.",
          "Created LetzRyd MIS Dashboard in Google Looker Studio providing management with consolidated platform-wise KPI aggregation across OLA, Uber, and Rapido fleet utilization."
        ],
        techStack: ["PostgreSQL", "FastAPI", "Python", "REST APIs", "Webhooks", "Google Cloud Run", "Secret Manager", "Looker Studio", "Rapido Integration"]
      },
      {
        id: "agrim",
        title: "AGRIM – B2B Agri-Commerce Data Engineering & DB Migration",
        category: "Data Engineering & ETL Migration",
        badge: "Data Infrastructure",
        categoryTheme: "purple",
        metrics: [
          "⚡ Zero-Data-Loss Incremental ETL Strategy",
          "⚡ Legacy MariaDB → Normalized PostgreSQL Migration",
          "⚡ Automated S3 Multi-Sheet Unpivoting & Mapping"
        ],
        highlights: [
          "Executed comprehensive CMS Schema Analysis & Mapping: Analyzed legacy SKU/product structures and mapped them into normalized destination CMS database architecture.",
          "Engineered AWS S3 to PostgreSQL ETL Pipelines: Extracted raw S3 datasets, unpivoted summary sheets, resolved business codes to database IDs, and populated mapping tables for Variety & Sub-category modules.",
          "Developed MariaDB to PostgreSQL Database Migration: Mapped and migrated supply entities between MariaDB (dl_supply) and PostgreSQL supply database.",
          "Implemented Incremental Migration Strategy: Integrated is_migrated flag tracking across target CMS tables to ensure safe, zero-loss incremental data movement instead of full-table truncation."
        ],
        techStack: ["Python", "Pandas", "PostgreSQL", "MariaDB", "AWS S3", "ETL Pipelines", "Schema Migration", "SQL"]
      },
      {
        id: "tona",
        title: "TONA – Marketing & Campaign Analytics",
        category: "Business Intelligence & Data Pipeline",
        badge: "BI Automation",
        categoryTheme: "amber",
        metrics: [
          "⚡ 2 Days → Same-Day Leadership Report Delivery",
          "⚡ Multi-Channel Campaign ROI & Spend KPI Dashboard",
          "⚡ 100% Elimination of Manual Reporting Effort"
        ],
        highlights: [
          "Built end-to-end ETL workflows to extract, transform, and prepare large-scale marketing campaign datasets from AWS S3 into analysis-ready data structures.",
          "Reduced leadership report generation time from 2 days to same-day delivery through automated BI pipelines.",
          "Designed interactive Power BI dashboards translating complex campaign data into actionable KPIs for leadership to monitor spend and campaign ROI.",
          "Consolidated fragmented multi-channel data sources into an automated BI pipeline, eliminating manual reporting effort."
        ],
        techStack: ["Power BI", "AWS S3", "ETL Pipelines", "DAX", "Python", "Plotly", "KPI Dashboarding"]
      },
      {
        id: "peopleverse",
        title: "People Verse – AI-Powered Candidate Assessment & LeXReport",
        category: "GenAI & HR Automation",
        badge: "GenAI Innovation",
        categoryTheme: "emerald",
        metrics: [
          "⚡ 80% Reduction in Manual Candidate Evaluation Workflow",
          "⚡ Gemini LLM Automated Assessment & Competency Generator",
          "⚡ Zero-Touch LeXReport Excel & SMTP Distribution"
        ],
        highlights: [
          "Architected LexTool AI Assessment Generator using LLMs (Gemini) to generate structured MCQs, competency mappings, and open-ended evaluations from Job Descriptions & Org Values.",
          "Integrated Google Forms and Google Drive APIs via OAuth 2.0 to automate candidate assessment form generation, distribution, and response capture.",
          "Engineered LeXReport Automation pipeline converting unstructured LLM candidate evaluation outputs into structured executive Excel reports using Pandas and OpenPyXL.",
          "Implemented automated SMTP email distribution system, reducing manual candidate evaluation and hiring workflow by 80%."
        ],
        techStack: ["LLMs (Gemini)", "Python", "Pandas", "OpenPyXL", "Google Workspace APIs", "OAuth 2.0", "SMTP Automation", "FastAPI"]
      }
    ]
  }
];

export const projects = [
  {
    id: "shopping-analytics",
    title: "Customer Behaviour & Shopping Trend Analytics",
    category: "Data Analytics",
    categoryTheme: "cyan",
    subtitle: "EDA, Customer Segmentation & Power BI Retention Dashboard",
    description: "Executed Exploratory Data Analysis (EDA), customer RFM-style segmentation, and retention modeling in Python & SQL. Built an interactive Power BI dashboard tracking cohort churn, customer segment revenue, and purchase frequency drivers.",
    metrics: ["Multi-Segment Cohorts", "Interactive Power BI", "Automated SQL Pipeline"],
    tech: ["Python", "Pandas", "NumPy", "SQL", "Power BI", "EDA"],
    github: "https://github.com/Sushant2520/Customer-Behaviour-Shopping-Trend-Analytics",
    featured: true,
    details: {
      overview: "Analyzed multi-category retail transactions to decode customer shopping patterns, churn indicators, and demographic spending habits.",
      methodology: "Data cleaning and outlier treatment in Python Pandas; cohort and RFM segmentation using SQL; interactive data modeling and dynamic KPI slicing in Power BI.",
      keyOutcome: "Delivered actionable retention strategies and visualized customer segment profitability with dynamic DAX metrics."
    }
  },
  {
    id: "blackcoffer-insights",
    title: "BlackCoffer Insights Visualization & Analytics",
    category: "Business Intelligence",
    categoryTheme: "amber",
    subtitle: "Global Business Trends Analytics Engine & Multi-Dimensional DAX KPIs",
    description: "Developed an interactive BI analytics dashboard evaluating global business trends across intensity, likelihood, and relevance. Designed dynamic multi-dimensional slicers, pivot matrices, and visual drill-downs to extract executive market insights.",
    metrics: ["4 Analytical Dimensions", "Dynamic Slicers", "Executive Insights"],
    tech: ["Power BI", "DAX", "Data Modeling", "Business Analysis", "Excel", "KPIs"],
    github: "https://github.com/Sushant2520/BlackCoffer-Insights-Visualization-Analytics",
    featured: true,
    details: {
      overview: "Explored global socio-economic and industrial trend datasets to build a strategic intelligence dashboard for executive decision-making.",
      methodology: "Engineered complex DAX measures to calculate composite intensity and relevance scores; created multi-level drill-down reports across countries, sectors, and topics.",
      keyOutcome: "Enabled leadership to simulate future market trends and identify high-impact risk/growth factors across diverse global regions."
    }
  },
  {
    id: "t20-worldcup-analytics",
    title: "T20 World Cup Cricket Analytics & Best Final 11",
    category: "Data Analytics",
    categoryTheme: "cyan",
    subtitle: "Web Scraping, Data Modeling & Power BI Decision Dashboard",
    description: "Engineered an end-to-end sports analytics pipeline to evaluate match data across T20 World Cup editions and select the ultimate 'Best Final 11' team. Scraped match data from ESPNcricinfo, transformed metrics in Pandas, and modeled player parameters in Power BI.",
    metrics: ["ESPNcricinfo Web Scraping", "Best Final 11 Selection", "Power BI & DAX Modeling"],
    tech: ["Python", "Pandas", "Power BI", "DAX", "Power Query", "Web Scraping"],
    github: "https://github.com/Sushant2520/Data-Analyst-Projects",
    featured: true,
    details: {
      overview: "Built a data-driven squad selector to solve the core problem statement: assemble an optimal 11 capable of scoring at least 180 runs on average and defending 150 runs on average.",
      methodology: "Scraped player and match statistics from ESPNcricinfo across multiple World Cup editions; cleaned and structured data using Python Pandas and Power Query; built custom DAX measures for strike rate, boundary %, and death-over economy.",
      keyOutcome: "Delivered an interactive Power BI dashboard with category-wise drilldowns (Openers, Middle Order, Finishers, All-Rounders, Fast Bowlers) to assemble the highest-probability winning team."
    }
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
