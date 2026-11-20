# CareerPath AI 🧭
> *"Discover Your Potential. Choose Your Path. Build Your Future."*

CareerPath AI is a complete, modern, responsive AI-based career recommendation web application designed to help students discover their most suitable career paths based on their interests, technical skills, academic background, favourite subjects, and personal work preferences.

Built with **HTML5, modern CSS3, and vanilla JavaScript**, the platform requires zero paid API keys, operates with complete privacy via browser LocalStorage, and is immediately deployable on Netlify as a static site.

---

## 🌟 Key Features

1. **Transparent Weighted Recommendation Engine**:
   - Uses a deterministic 5-dimension matching algorithm rather than black-box random generation.
   - Calculates genuine 0–100% compatibility scores and outputs a full mathematical breakdown for each recommended career.
2. **15 In-Depth Career Profiles**:
   - Covers Data Analysis, Data Science, AI/ML Engineering, Software Development, Web Development, Cybersecurity, UI/UX Design, Cloud Engineering, Business Analysis, Financial Analysis, Robotics, Electronics Engineering, Digital Marketing, Product Management, and Scientific Research.
3. **India-Relevant Academic Guidance**:
   - Distinguishes between mandatory qualifications, commonly preferred qualifications, and alternative non-traditional pathways.
   - Covers relevant school subjects (10th/12th), suitable undergraduate degrees (B.Tech, BCA, B.Sc, B.Des, B.Com, BBA), postgraduate options (M.Tech, MCA, MBA, MS, M.Des), and admissions routes (JEE, GATE, CAT, CUET, UCEED, etc., correctly clarified as path-dependent rather than universally compulsory).
4. **Adaptive 5-Stage Learning Roadmaps**:
   - Fundamentals, Technical Skills, Practical Projects, Portfolios, and Placement Preparation.
   - Automatically adapts around skills the student already possesses (marked as proficient/completed) and tracks milestone checkboxes in LocalStorage.
5. **Interactive Skill Gap Diagnostics**:
   - Identifies candidate strengths (ratings 4–5) and pinpoints priority skills to bridge for their #1 match.
6. **Side-by-Side Career Comparison**:
   - Direct comparative table for any two careers evaluating degree requirements, daily focus, skill sets, certifications, and career progression ladders.
7. **Print-to-PDF Career Report**:
   - One-click export using clean print stylesheets formatted for official student records and counselor advisories.
8. **Curated Official Learning Resources**:
   - Verified official links to SWAYAM, NPTEL, freeCodeCamp, Microsoft Learn, Cisco Networking Academy, Google Cloud Skills Boost, and Kaggle Learn.

---

## 🧠 Recommendation Algorithm

The recommendation engine evaluates candidate responses across 5 distinct dimensions:

| Dimension | Weight | Explanation |
| :--- | :--- | :--- |
| **Interest Compatibility** | **35%** | Evaluates overlap between student interests and core domains of each career path. |
| **Existing Skill Compatibility** | **30%** | Compares self-assessed skill ratings (1 to 5) against required competency thresholds. |
| **Academic Subject Compatibility** | **15%** | Evaluates synergy between favourite subjects (e.g. Maths, CS, Stats) and career foundations. |
| **Work Preference Compatibility** | **10%** | Measures alignment with preferred daily tasks (e.g. working with data, computers, visual design). |
| **Career Orientation Alignment** | **10%** | Assesses alignment with broad career preference (Technical, Creative, Business, Research, or Flexible). |

$$\text{Match Score} = (0.35 \times I) + (0.30 \times S) + (0.15 \times Subj) + (0.10 \times W) + (0.10 \times C)$$

*All scores are normalized to a 0–100% scale and completely explainable.*

---

## 📁 Project Structure

```
CareerPath.AI/
├── index.html            # Landing page (Hero, Process, Features, Honest Stats, Quick start)
├── assessment.html       # 5-step multi-step assessment wizard
├── results.html          # Recommendation dashboard with score breakdowns & gap analysis
├── careers.html          # Searchable, filterable directory of all 15 careers
├── career.html           # In-depth 17-section career profile with personalized growth advice
├── roadmap.html          # Adaptive 5-stage learning roadmap with interactive task persistence
├── compare.html          # Side-by-side comparison tool for any two career paths
├── resources.html        # Curated official free educational portals (SWAYAM, NPTEL, MS, Cisco, etc.)
├── css/
│   ├── style.css         # Modern light theme, Inter typography, glassmorphism, buttons, cards
│   └── responsive.css    # Responsive breakpoints (1024px, 768px, 480px) and clean print-to-PDF styles
├── js/
│   ├── storage.js        # LocalStorage persistence service (assessment, results, roadmap tasks)
│   ├── careers-data.js   # Comprehensive dataset for all 15 careers
│   ├── recommendation.js # Weighted mathematical recommendation engine
│   ├── assessment.js     # Multi-step assessment controller, validation, and demo autofill
│   ├── results.js        # Results dashboard controller, score visualization, and modal profile editor
│   ├── roadmap.js        # Dynamic adaptive roadmap controller and milestone tracker
│   ├── compare.js        # Dual-career comparative table controller
│   └── main.js           # Navigation bar, mobile drawer, Lucide icon init, active link state
├── netlify.toml          # Netlify static site deployment configuration & security headers
└── README.md             # Project documentation
```

---

## 🚀 How to Run Locally

Because CareerPath AI is built with pure standards-compliant HTML5, CSS3, and JavaScript, **no build step, compiler, or database is required**.

### Option A: Using Python (Recommended)
Open your terminal in the project directory and run:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

### Option B: Using Node.js / npx
```bash
npx serve .
```

### Option C: Direct File Opening
Double-click `index.html` to open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 🌐 Netlify Deployment

This project is 100% Netlify-ready out of the box.

### Deploying via Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=.
```

### Deploying via GitHub / Netlify Web UI:
1. Push this repository to GitHub or GitLab.
2. Log into [Netlify](https://app.netlify.com).
3. Click **"Add new site"** → **"Import an existing project"**.
4. Select your repository.
5. Configuration settings:
   - **Base directory**: Leave blank (root)
   - **Build command**: Leave blank (pure static site)
   - **Publish directory**: `.`
6. Click **"Deploy site"**. Your site will be live worldwide with SSL enabled!

---

## 🔒 Privacy & Performance
- **Zero Tracking / Zero Third-Party Logins**: All assessment responses and roadmap progress are saved exclusively on the user's browser using `localStorage`.
- **Lightweight & Fast**: Zero framework overhead; loads instantly on mobile 4G/5G connections.
- **Accessible & Responsive**: Meets standard contrast ratios and fluid layouts down to 320px mobile screens.

---

## ⚖️ Guidance Disclaimer
*CareerPath AI provides educational exploration and guidance based on weighted heuristic evaluation. It does not guarantee employment, academic admission, or career outcomes. Academic pathways represent typical Indian and international guidelines.*
