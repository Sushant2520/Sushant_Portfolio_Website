# Sushant Tripathi - AI Data & Business Analyst Portfolio

A high-performance, fullstack portfolio website built for **Sushant Tripathi** (AI Data & Business Analyst at Infinyty Tech, formerly Infinity Analytics & Consulting). 

Designed with modern dark cyber glassmorphism, responsive Day/Night theme switcher, particle background canvas grid, interactive client project deep-dives, and an embedded **"Ask Sushant AI" Chatbot**.

---

## ⚡ Key Features

- **Dynamic Theme Switcher (Night & Day Modes)**: 
  - Defaults to Night Mode (Dark Cyber Blue UI with particle canvas grid).
  - Toggles to Day Mode (Multi-tone Metallic Frost Gradient UI with crisp typography).
- **Hero & Dynamic Role Typing**:
  - Highlights experience at **Infinyty Tech** with interactive company links.
  - Role animation cycling through *AI Data Analyst*, *Business Analyst*, and *AI Integration & Automation Pipelines*.
- **Interactive Experience & Client Projects**:
  - Detailed case studies for **LETZRYD**, **AGRIM**, and **PEOPLEVERSE**.
- **GenAI "Ask Sushant AI" Chat Assistant Widget**:
  - Embedded conversational AI assistant trained on Sushant's resume & project background.
- **Multi-Channel Contact Suite**:
  - Functional contact form backed by Express backend API route (`/api/contact`).
  - Direct 1-click **WhatsApp Chat launcher**, direct Call (`tel:`), Email (`mailto:`), LinkedIn, and GitHub.
- **Render Production Ready**:
  - Serves static React build (`client/dist`) via Node/Express backend (`server/index.js`).

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS v4, Lucide Icons, Canvas Particle FX
- **Backend API**: Node.js, Express.js, Nodemailer
- **Deployment Target**: Render / Vercel / Netlify

---

## 🚀 Local Development Setup

### 1. Install Dependencies
```bash
# Install root, server, and client dependencies
npm run install:all
```

### 2. Start Local Servers
```bash
# Run Express backend (Port 5000)
npm run dev:server

# Run Vite React frontend (Port 5173)
npm run dev:client
```

Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

---

## 📦 Render Deployment Instructions

1. Push code to your GitHub repository: `https://github.com/Sushant2520/Sushant_Portfolio_Website`
2. Connect the repository on [Render.com](https://render.com).
3. Set **Build Command**: `npm run build`
4. Set **Start Command**: `npm start`
