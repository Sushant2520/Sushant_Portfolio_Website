import express from 'express';

const router = express.Router();

const sushantKnowledge = {
  name: "Sushant Tripathi",
  title: "AI Data & Business Analyst",
  email: "sushant.tripathi2000.st@gmail.com",
  phone: "+91-9140631755",
  location: "India",
  education: "B.Tech in Computer Science & Engineering from VIT Bhopal (2021-2025), CGPA: 8.28",
  currentRole: "AI Data & Business Analyst at Infinyty Tech (formerly Infinity Analytics & Consulting) (Oct 2025 - Present)",
  experienceDuration: "1 Year of full-time experience",
  keyProjects: [
    {
      name: "LETZRYD - Vehicle & Partner Operations Platform",
      role: "Data Engineer & Backend Integrator",
      highlights: "Designed multi-tier PostgreSQL relational schema, integrated Rapido REST APIs & webhooks on GCP Cloud Run with Secret Manager, implemented UPSERT workflows for fleet & trip lifecycle data."
    },
    {
      name: "TONA - Marketing & Campaign Analytics",
      role: "BI & Data Analyst",
      highlights: "Built AWS S3 ETL workflows, developed interactive Power BI dashboards, automated BI pipeline reducing report generation time from 2 days to same-day delivery."
    },
    {
      name: "People Verse - AI-Powered Candidate Assessment",
      role: "AI Developer & Automation Specialist",
      highlights: "Architected automated candidate assessment using LLMs (MCQs, competency mapping, subjective evaluation), integrated Google Forms/Drive APIs via OAuth 2.0, reduced manual hiring workflow by 80%."
    },
    {
      name: "Customer Behaviour & Shopping Trend Analytics",
      role: "Data Analyst",
      highlights: "Performed EDA, customer segmentation, retention analysis in Python (Pandas, NumPy, SQL) with interactive Power BI dashboard tracking retention and revenue."
    },
    {
      name: "BlackCoffer Insights Visualization & Analytics",
      role: "BI Specialist",
      highlights: "Developed interactive BI dashboard for global business trends across intensity, likelihood, relevance, and regional metrics."
    }
  ],
  skills: {
    languages: ["Python", "SQL", "C++"],
    dataEngineering: ["ETL Workflows", "Data Integration", "Data Migration", "Data Quality", "AWS S3"],
    databases: ["PostgreSQL", "MariaDB", "MongoDB", "Schema Design", "Query Optimization"],
    businessIntelligence: ["Power BI", "DAX", "Business Analysis", "KPI Dashboarding", "Plotly"],
    apisAndAutomation: ["FastAPI", "REST APIs", "Webhooks", "OAuth 2.0", "Google Workspace APIs", "SMTP"],
    cloudAndTools: ["Google Cloud Run", "Google Cloud Secret Manager", "Git", "Pandas", "NumPy", "Jupyter", "MS Excel"]
  },
  certifications: [
    "SQL (Advanced) - HackerRank",
    "Power BI - Microsoft / Simplilearn",
    "Full Stack Development & GenAI - Udemy (2025)"
  ],
  achievements: [
    "Solved 250+ Data Structures & Algorithms problems across GeeksforGeeks and LeetCode",
    "Co-authored Research Publication: 'The Role of Large Language Models (LLMs) in Healthcare'"
  ]
};

function generateLocalAIResponse(query) {
  const q = query.toLowerCase();
  
  if (q.includes('experience') || q.includes('infinity tech') || q.includes('infinyty tech') || q.includes('work') || q.includes('company') || q.includes('history')) {
    return `Sushant currently works as an **AI Data & Business Analyst at Infinyty Tech** (formerly Infinity Analytics & Consulting, Oct 2025 – Present). He has 1 year of full-time experience driving high-impact projects including **LETZRYD** (fleet DB & Rapido webhook integration), **TONA** (marketing ETL & Power BI dashboarding), and **People Verse** (AI candidate assessment with LLMs).`;
  }
  
  if (q.includes('letzryd') || q.includes('rapido') || q.includes('fleet') || q.includes('fastapi') || q.includes('postgresql')) {
    return `In the **LETZRYD** project at Infinyty Tech, Sushant architected a multi-tier PostgreSQL relational schema for fleet operations. He developed FastAPI REST APIs & webhooks to ingest real-time Rapido events, implemented UPSERT workflows, and deployed the solution securely on Google Cloud Run with Secret Manager.`;
  }
  
  if (q.includes('tona') || q.includes('power bi') || q.includes('marketing') || q.includes('etl') || q.includes('s3')) {
    return `In the **TONA** project, Sushant built end-to-end AWS S3 ETL workflows to transform campaign data into analysis-ready datasets. He built interactive Power BI dashboards for leadership, reducing report delivery time from **2 days to same-day delivery**!`;
  }
  
  if (q.includes('people verse') || q.includes('ai') || q.includes('llm') || q.includes('assessment') || q.includes('hiring')) {
    return `In **People Verse**, Sushant engineered an AI-powered candidate assessment pipeline using LLMs for structured MCQs and subjective evaluations. He integrated Google Workspace APIs and SMTP email automation, reducing manual hiring workflows by **80%**!`;
  }
  
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('python') || q.includes('sql') || q.includes('database')) {
    return `Sushant's technical stack includes:\n- **Languages:** Python, SQL, C++\n- **Business Intelligence:** Power BI, DAX, Plotly, Pandas, NumPy\n- **Databases:** PostgreSQL, MariaDB, MongoDB\n- **Data Engineering:** ETL, AWS S3, Schema Design\n- **APIs & Cloud:** FastAPI, Webhooks, Google Cloud Run, Secret Manager, OAuth 2.0`;
  }
  
  if (q.includes('education') || q.includes('vit') || q.includes('cgpa') || q.includes('college') || q.includes('degree')) {
    return `Sushant completed his **B.Tech in Computer Science & Engineering** from **Vellore Institute of Technology (VIT Bhopal)** with a **CGPA of 8.28** (2021–2025).`;
  }
  
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('whatsapp') || q.includes('reach') || q.includes('hire')) {
    return `You can reach Sushant directly via:\n- **Email:** sushant.tripathi2000.st@gmail.com\n- **Phone / WhatsApp:** +91-9140631755\n- **LinkedIn:** linkedin.com/in/sushant2520\n- **GitHub:** github.com/Sushant2520\nOr use the Contact Form below to send a direct message!`;
  }

  if (q.includes('project') || q.includes('portfolio') || q.includes('blackcoffer') || q.includes('customer')) {
    return `Sushant has led several key projects:\n1. **LETZRYD:** Real-time Rapido API integration & PostgreSQL DB.\n2. **TONA Analytics:** AWS S3 ETL & Power BI campaign dashboards.\n3. **People Verse:** LLM-powered hiring & assessment engine.\n4. **Customer Behaviour Analytics:** Python EDA & Power BI retention tracking.\n5. **BlackCoffer Insights:** Dynamic BI dashboard for global business trends.`;
  }

  if (q.includes('certification') || q.includes('publication') || q.includes('leetcode') || q.includes('dsa') || q.includes('achievement')) {
    return `Sushant's key achievements include:\n- **250+ DSA problems** solved on GeeksforGeeks & LeetCode.\n- **Co-authored Research Publication:** "The Role of Large Language Models (LLMs) in Healthcare".\n- **Certifications:** HackerRank Advanced SQL, Microsoft Power BI, and Udemy Full Stack Development & GenAI.`;
  }

  return `Hi! I am **Sushant AI Assistant**. I can answer anything about Sushant Tripathi's experience as an AI Data & Business Analyst at Infinyty Tech, his projects (LETZRYD, TONA, People Verse), tech stack (Python, SQL, Power BI, PostgreSQL, FastAPI), education at VIT Bhopal, or contact details! How can I assist you?`;
}

router.post('/', async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.status(400).json({ success: false, message: 'Query string is required.' });
    }

    const aiAnswer = generateLocalAIResponse(query);

    return res.status(200).json({
      success: true,
      answer: aiAnswer,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('[AI CHAT ERROR]:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate AI response.'
    });
  }
});

export default router;
