# 🚀 Sushant Tripathi — AI Data & Business Analyst Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-Render-a3e635?style=for-the-badge&logo=render&logoColor=black)](https://github.com/Sushant2520/Sushant_Portfolio_Website)
[![GitHub](https://img.shields.io/badge/GitHub-Sushant2520-white?style=for-the-badge&logo=github&logoColor=black)](https://github.com/Sushant2520)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sushant2520-0077b5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sushant2520)
[![Tech Stack](https://img.shields.io/badge/Stack-React_•_Tailwind_v4_•_Node_•_Express-050505?style=for-the-badge&logo=react)](https://react.dev)

A modern, high-performance full-stack personal portfolio engineered for **Sushant Tripathi** (AI Data & Business Analyst at **Infinyty Tech**, formerly *Infinity Analytics & Consulting*). 

Crafted with an elite **Midnight Black + Pure White + Electric Lime Green** aesthetic inspired by modern SaaS developer interfaces, responsive Day/Night mode, real-time particle grid canvas, interactive client project deep-dives, analytics case studies, and an embedded conversational **"Ask Sushant AI"** assistant.

---

## ⚡ Key Highlights & Features

### 🎨 1. Bespoke Midnight Black & Lime Green UI
- **Obsidian Dark Canvas (`#050505`)**: Clean, distraction-free obsidian background with subtle electric lime radial glows (`rgba(163, 230, 53, 0.15)`).
- **Punchy Contrast**: Pure white bold headlines paired with electric lime action buttons and tags.
- **Dynamic Particle Grid**: Interactive HTML5 Canvas network reacting to cursor movement with lime particles and connective filaments.
- **Adaptive Day / Night Switcher**: Toggles seamlessly between dark cyber obsidian and a multi-tone metallic frost Day Mode.

### 💼 2. Enterprise Experience & Client Case Studies
Interactive tabbed deep-dive showcasing full-time impact at **Infinyty Tech** across 4 major production platforms:
- **LETZRYD (Fleet Operations & Mobility Platform)**:
  - Walk-in desk, Partner Onboarding, Vehicle Allocation & Expenses architecture.
  - Automated Karnataka One Traffic-Challan fine extraction pipeline from 38-tab Google Sheets into PostgreSQL `core_challans` Single Source of Truth.
  - Production Rapido API & Webhook integration for real-time order/captain status updates.
- **AGRIM (B2B Agri-Commerce Platform)**:
  - High-concurrency PostgreSQL relational database migration & schema design.
  - Automated Python ETL pipelines for daily catalog ingestion and sales data staging.
- **TONA (Marketing & Campaign Analytics)**:
  - AWS S3 automated ETL workflows powering executive Power BI dashboards with DAX metrics.
  - Slashed stakeholder reporting latency from 2 days down to same-day delivery.
- **People Verse (AI-Powered Candidate Assessment & LExReport)**:
  - Generative AI pipeline utilizing LLMs for automated MCQ and subjective candidate question generation.
  - Google Workspace API integration (Forms, Sheets, Drive) and automated candidate evaluation reports cutting manual HR workload by 80%.

### 📊 3. Featured Analytics Projects & GitHub Integrations
- **Customer Behaviour & Shopping Trend Analytics**:
  - Exploratory Data Analysis (EDA), RFM-style segmentation, and customer retention modeling in Python & SQL with interactive Power BI dashboards.
- **BlackCoffer Insights Visualization & Analytics**:
  - Global Business Trends analytics engine with multi-dimensional DAX KPIs, visual drill-downs, and impact matrix reporting.
- **T20 World Cup Cricket Analytics & Best Final 11**:
  - End-to-end sports analytics pipeline; web-scraped match data from ESPNcricinfo, cleaned and modeled parameters in Pandas, with Power BI executive squad selection dashboard.

### 🤖 4. "Ask Sushant AI" Assistant Widget
- Embedded conversational chatbot assistant pre-prompted on Sushant's resume, client projects, technical competencies, and contact information with quick-suggestion chips.

### 📬 5. Multi-Channel Contact Hub
- **Live Contact Form**: Seamless, client-side email dispatch powered by **Web3Forms API**, delivering visitor inquiries straight to `sushant.tripathi2000.st@gmail.com`.
- **Instant WhatsApp Connect**: 1-click launcher with pre-filled inquiry parameters.
- **Direct Channels**: One-click links for direct Call (`tel:`), Email (`mailto:`), LinkedIn, and GitHub.
- **Live Footer Status**: Real-time IST clock and active pulsing 🟢 **"Available for Opportunities"** status indicator.

---

## 🛠️ Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) with [Vite](https://vitejs.dev/) |
| **Styling & Effects** | [Tailwind CSS v4](https://tailwindcss.com/), Glassmorphism, CSS Custom Properties |
| **Icons & Media** | [Lucide React](https://lucide.dev/), Custom SVGs |
| **Canvas Graphics** | Native HTML5 Canvas Particle Engine |
| **Backend API** | [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/) |
| **Form Service** | Web3Forms REST API |
| **Deployment Target** | [Render](https://render.com/) (Web Service with unified client build) |

---

## 📁 Repository Structure

```plaintext
Sushant_Portfolio_Website/
├── client/                           # React + Vite Frontend Application
│   ├── public/
│   │   ├── Sushant_Tripathi_Resume_Oct.pdf   # Active Resume / CV Download
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/                   # Static images and icons
│   │   ├── components/               # Modular UI Components
│   │   │   ├── About.jsx             # Background, Core Pillars & Stats
│   │   │   ├── AIChatWidget.jsx      # "Ask Sushant AI" Modal Chatbot
│   │   │   ├── CertificationsAchievements.jsx # Academics, Publications & DSA
│   │   │   ├── Contact.jsx           # Multi-Channel Contact & Web3Forms
│   │   │   ├── Experience.jsx        # 4 Client Project Deep Dives
│   │   │   ├── Footer.jsx            # Opportunities Badge, Time & Copyright
│   │   │   ├── Hero.jsx              # Hero Headline, Typing FX & CTAs
│   │   │   ├── Navbar.jsx            # Responsive Header & Theme Switcher
│   │   │   ├── ParticleBackground.jsx# Canvas Lime Particle Network
│   │   │   └── Projects.jsx          # 3 Analytics Case Studies & Modals
│   │   ├── data/
│   │   │   └── portfolioData.js      # Centralized Portfolio Data Source
│   │   ├── styles/
│   │   │   └── index.css             # Theme tokens, custom glass & scrollbar
│   │   ├── App.jsx                   # Application Layout Orchestrator
│   │   ├── main.jsx                  # React Root Entry Point
│   │   └── index.css                 # Base stylesheet import
│   ├── vite.config.js                # Vite Bundler & Dev Proxy Configuration
│   └── package.json                  # Frontend Dependencies
│
├── server/                           # Node.js + Express API Backend
│   ├── routes/
│   │   ├── contact.js                # Contact Mailer Fallback Route
│   │   └── aiChat.js                 # AI Knowledge Engine Route
│   ├── index.js                      # Express App & Static Client Server
│   └── package.json                  # Backend Dependencies
│
├── package.json                      # Root Orchestrator (Unified Build & Start)
├── .gitignore                        # Git Exclusion Rules
└── README.md                         # Project Documentation
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node)

### 2. Clone the Repository
```bash
git clone https://github.com/Sushant2520/Sushant_Portfolio_Website.git
cd Sushant_Portfolio_Website
```

### 3. Install All Dependencies
Installs dependencies across root, server, and client:
```bash
npm run install:all
```

### 4. Run Locally
Run both the backend API and frontend dev server:
```bash
# Terminal 1: Run Express Server (Port 5000)
npm run dev:server

# Terminal 2: Run Vite Frontend (Port 5173)
npm run dev:client
```
Open your browser at **[http://localhost:5173/](http://localhost:5173/)**.

---

## 🌐 Production Deployment on Render

This project is pre-configured with unified scripts to build the React frontend and serve it directly via Express:

1. Connect your repository on **[Render.com](https://dashboard.render.com/)**.
2. Create a new **Web Service**.
3. Select **`Sushant2520/Sushant_Portfolio_Website`**.
4. Configure the build parameters:
   - **Environment**: `Node`
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
5. Click **Deploy Web Service**.

---

## 👤 Author & Contact

**Sushant Tripathi**  
*AI Data & Business Analyst — Infinyty Tech*

- 🌐 **Portfolio**: [https://github.com/Sushant2520/Sushant_Portfolio_Website](https://github.com/Sushant2520/Sushant_Portfolio_Website)
- 💼 **LinkedIn**: [linkedin.com/in/sushant2520](https://linkedin.com/in/sushant2520)
- 🐙 **GitHub**: [@Sushant2520](https://github.com/Sushant2520)
- ✉️ **Email**: [sushant.tripathi2000.st@gmail.com](mailto:sushant.tripathi2000.st@gmail.com)
- 💬 **WhatsApp**: [+91-9140631755](https://wa.me/919140631755)
