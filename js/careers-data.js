/**
 * CareerPath AI - Comprehensive Careers Dataset
 * 15 In-depth Career Profiles with India-relevant Academic Pathways,
 * Weighted Matching Parameters, 5-Stage Adaptive Roadmaps, and Genuine Industry Guidance.
 */

const CAREERS_DATA = [
    {
        id: "data-analyst",
        name: "Data Analyst",
        category: "Data & Artificial Intelligence",
        icon: "bar-chart-3",
        tagline: "Transform raw organizational data into actionable business intelligence.",
        description: "Data Analysts examine large datasets to identify trends, create visual dashboards, and help organizations make evidence-based business decisions. They bridge raw database metrics and strategic management decisions.",
        dayToDay: "Writing SQL queries to extract data from data warehouses, cleaning anomalies in datasets using Python or Excel, building interactive dashboards in Power BI or Tableau, and communicating analytical findings to non-technical stakeholders.",
        relevantInterests: ["Data Analysis", "Mathematics", "Problem Solving", "Business", "Communication", "Programming"],
        requiredSkills: {
            "SQL": 4,
            "Statistics": 3,
            "Mathematics": 3,
            "Analytical Thinking": 4,
            "Problem Solving": 4,
            "Python": 3,
            "Communication": 3,
            "HTML/CSS": 1,
            "JavaScript": 1,
            "C/C++": 1,
            "Java": 1,
            "Creativity": 2
        },
        relevantSubjects: ["Mathematics", "Statistics", "Computer Science", "Economics", "Accountancy", "Business Studies"],
        workPreferences: ["Working with data", "Working with computers", "Solving technical problems", "Business and management"],
        careerPreference: "Technical",
        academicProfile: {
            mandatory: "No statutory government license required. A recognized bachelor's degree in any quantitative or technical discipline is standard for enterprise hiring.",
            preferred: "Bachelor's degree in Computer Science, Data Science, Statistics, Mathematics, Economics, Information Technology, or B.Com with Business Analytics.",
            alternativeRoutes: "Graduates from any discipline (Arts/Commerce/Engineering) can transition via verified industry certifications (Google Data Analytics, Microsoft Power BI), SQL portfolios, and demonstrated GitHub projects.",
            schoolSubjects: "Class 10/12 with Mathematics or Statistics. Commerce with Maths or Science (PCM/PCMB) stream is ideal.",
            undergraduateDegrees: [
                "B.Tech / B.E. in Computer Science, Data Science or IT",
                "B.Sc. in Statistics, Mathematics, or Data Analytics",
                "BCA (Bachelor of Computer Applications)",
                "B.Com with Analytics / Economics (Hons)"
            ],
            postgraduateOptions: [
                "M.Sc. in Data Science / Statistics / Operational Research",
                "MCA (Master of Computer Applications)",
                "MBA in Business Analytics or Information Systems",
                "M.Tech in Data Engineering"
            ],
            admissionAndExams: [
                "CUET-UG/PG for central universities (DU, BHU, etc.)",
                "State engineering exams or JEE Main for B.Tech routes",
                "NIMCET for national MCA admissions",
                "Note: Entrance exams are specific to institutional admissions, not a mandatory legal prerequisite for practicing as a data analyst."
            ]
        },
        technicalSkills: ["SQL (PostgreSQL/MySQL)", "Python (Pandas, NumPy)", "Microsoft Excel (Advanced/VBA)", "Power BI / Tableau", "Data Wrangling", "Statistical Testing"],
        softSkills: ["Critical Thinking", "Data Storytelling", "Stakeholder Communication", "Attention to Detail", "Business Acumen"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Fundamentals",
                duration: "4 - 6 Weeks",
                skills: ["Advanced Excel", "Descriptive Statistics", "Basic Mathematics"],
                description: "Master VLOOKUP, INDEX-MATCH, Pivot Tables, summary metrics, standard deviation, and probability concepts."
            },
            {
                stage: 2,
                title: "Stage 2: Technical Skills",
                duration: "6 - 8 Weeks",
                skills: ["SQL", "Python", "Data Visualization"],
                description: "Master multi-table JOINs, subqueries, window functions in SQL, followed by Python Pandas, Seaborn, and Matplotlib."
            },
            {
                stage: 3,
                title: "Stage 3: Practical Experience",
                duration: "6 - 8 Weeks",
                skills: ["Power BI / Tableau", "Real-world EDA", "Business Metrics"],
                description: "Build interactive dashboards modeling churn, sales performance, and logistics telemetry using public datasets."
            },
            {
                stage: 4,
                title: "Stage 4: Portfolio",
                duration: "3 - 4 Weeks",
                skills: ["GitHub Documentation", "Case Studies", "Interactive Dashboards"],
                description: "Publish 3 end-to-end analytical case studies with clean README documentation, ER diagrams, and live dashboard links."
            },
            {
                stage: 5,
                title: "Stage 5: Career Preparation",
                duration: "4 Weeks",
                skills: ["SQL Live Coding", "Business Problem-Solving", "Interview Practice"],
                description: "Practice LeetCode database queries, prepare behavioral stories with STAR format, and target entry-level analyst openings."
            }
        ],
        beginnerProjects: [
            { title: "E-Commerce Sales Performance Dashboard", difficulty: "Beginner", description: "Analyze transaction data using SQL and build a Power BI dashboard showing regional revenue, profit margins, and seasonal trends." },
            { title: "Hospital Patient Wait Time Analysis", difficulty: "Intermediate", description: "Use Python (Pandas & Seaborn) to uncover bottleneck hours and patient flow patterns from anonymized hospital records." },
            { title: "Customer Churn Diagnostic Report", difficulty: "Intermediate", description: "Perform exploratory data analysis on telecom customer datasets to pinpoint the statistical drivers of customer cancellations." }
        ],
        certifications: [
            { name: "Google Data Analytics Professional Certificate", provider: "Coursera / Google" },
            { name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)", provider: "Microsoft" },
            { name: "IBM Data Analyst Professional Certificate", provider: "IBM" }
        ],
        internshipOpportunities: "Explore startup internships via Internshala, AngelList (Wellfound), LinkedIn Jobs, and open-data hackathons. Look for entry roles like 'Junior BI Intern' or 'Operations Analyst Intern'.",
        jobRoles: ["Junior Data Analyst", "Business Intelligence Analyst", "Operations Analyst", "Reporting Specialist", "Marketing Analyst"],
        careerProgression: "Junior Data Analyst → Senior Data Analyst → Lead BI Engineer → Analytics Manager → Head of Data & Insights",
        futureOpportunities: "High demand driven by business digitization. Increasing synergy with Generative AI analytics, automated data storytelling, and real-time streaming telemetry."
    },

    {
        id: "data-scientist",
        name: "Data Scientist",
        category: "Data & Artificial Intelligence",
        icon: "brain",
        tagline: "Build predictive models and extract deep mathematical patterns from complex datasets.",
        description: "Data Scientists combine advanced statistics, machine learning algorithms, and domain expertise to build predictive models that forecast future behavior, automate decisions, and uncover hidden structural insights.",
        dayToDay: "Formulating business problems into statistical hypotheses, building and evaluating supervised and unsupervised ML models using Scikit-Learn, performing feature engineering, and deploying model pipelines.",
        relevantInterests: ["Artificial Intelligence", "Mathematics", "Data Analysis", "Research", "Programming", "Problem Solving"],
        requiredSkills: {
            "Python": 4,
            "Statistics": 5,
            "Mathematics": 4,
            "SQL": 4,
            "Analytical Thinking": 5,
            "Problem Solving": 4,
            "Communication": 3,
            "Creativity": 3,
            "C/C++": 2,
            "Java": 2,
            "HTML/CSS": 1,
            "JavaScript": 1
        },
        relevantSubjects: ["Mathematics", "Statistics", "Computer Science", "Physics"],
        workPreferences: ["Working with data", "Research and innovation", "Solving technical problems", "Working with computers"],
        careerPreference: "Research",
        academicProfile: {
            mandatory: "No statutory government licensing required. A solid quantitative bachelor's or master's degree is strongly preferred by top-tier tech companies and research labs.",
            preferred: "B.Tech/M.Tech in CS/AI/Data Science, M.Sc. in Statistics/Applied Mathematics, or master's in quantitative engineering.",
            alternativeRoutes: "Experienced software engineers or data analysts transitioning through rigorous machine learning portfolios, Kaggle competitions, and published research or case studies.",
            schoolSubjects: "Class 10/12 with strong focus on Higher Mathematics and Physics (Science PCM stream).",
            undergraduateDegrees: [
                "B.Tech in Computer Science / Data Science / AI",
                "B.Sc. (Hons) in Mathematics or Statistics",
                "BS-MS Dual Degree in Mathematical Sciences"
            ],
            postgraduateOptions: [
                "M.Tech / MS in Data Science & Machine Learning",
                "M.Sc. in Statistics / Data Analytics (ISI, IITs, CMI)",
                "Ph.D. in Computer Science or Applied Statistics for research tracks"
            ],
            admissionAndExams: [
                "JEE Main & Advanced for IIT/NIT undergraduate programs",
                "GATE (Data Science & AI / CS paper) for M.Tech admissions",
                "ISI Admission Test for M.Stat / M.Math programs",
                "Optional admission routes; private universities and international online programs also offer direct admission."
            ]
        },
        technicalSkills: ["Python (Scikit-Learn, SciPy)", "Advanced Probability & Linear Algebra", "Feature Engineering", "SQL & NoSQL", "Model Evaluation & Cross-Validation", "Git & Docker basics"],
        softSkills: ["Curiosity", "Scientific Rigor", "Hypothesis Formulation", "Cross-functional Collaboration", "Translating Math to Business Value"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Mathematical Foundations",
                duration: "6 Weeks",
                skills: ["Linear Algebra", "Multivariable Calculus", "Probability & Hypothesis Testing"],
                description: "Understand matrix operations, eigenvalues, gradient descent intuition, p-values, confidence intervals, and distributions."
            },
            {
                stage: 2,
                title: "Stage 2: Core Data Science & Python",
                duration: "8 Weeks",
                skills: ["Python", "Pandas", "Scikit-Learn", "SQL"],
                description: "Implement regression, decision trees, random forests, clustering, and cross-validation on messy real datasets."
            },
            {
                stage: 3,
                title: "Stage 3: Advanced Modeling & Kaggle",
                duration: "8 Weeks",
                skills: ["Ensemble Methods (XGBoost/LightGBM)", "Feature Engineering", "Model Optimization"],
                description: "Participate in Kaggle tabular competitions, fine-tune hyper-parameters, and master model explainability (SHAP, LIME)."
            },
            {
                stage: 4,
                title: "Stage 4: End-to-End MLOps & Deployment",
                duration: "4 - 6 Weeks",
                skills: ["FastAPI", "Docker", "MLflow", "Model Serving"],
                description: "Wrap trained models into containerized REST APIs and build interactive demo apps using Streamlit."
            },
            {
                stage: 5,
                title: "Stage 5: Research & Career Entry",
                duration: "4 Weeks",
                skills: ["Technical System Design", "Case Study Interviews", "Research Paper Reading"],
                description: "Prepare machine learning system design case studies, solve statistical modeling problems, and apply for Associate Data Scientist roles."
            }
        ],
        beginnerProjects: [
            { title: "Real Estate Valuation Predictor", difficulty: "Beginner", description: "Build a multivariable regression pipeline with outlier treatment and feature scaling to forecast property pricing." },
            { title: "Credit Card Fraud Detection with Imbalanced Data", difficulty: "Intermediate", description: "Implement SMOTE, precision-recall curve optimizations, and XGBoost to detect anomalous fraudulent transactions." },
            { title: "Customer Lifetime Value (LTV) Segmentation", difficulty: "Intermediate", description: "Combine RFM analysis and unsupervised K-Means clustering to predict customer churn probability and expected revenue." }
        ],
        certifications: [
            { name: "IBM Data Science Professional Certificate", provider: "IBM / Coursera" },
            { name: "TensorFlow Developer Certificate / Machine Learning Specialization", provider: "DeepLearning.AI" },
            { name: "AWS Certified Machine Learning - Specialty", provider: "Amazon Web Services" }
        ],
        internshipOpportunities: "Look for internships on Kaggle, open research positions at university labs, AI startups, and analytics arms of consulting firms.",
        jobRoles: ["Junior Data Scientist", "Machine Learning Associate", "Quantitative Analyst", "Statistical Analyst"],
        careerProgression: "Associate Data Scientist → Data Scientist → Senior Data Scientist → Staff/Principal Data Scientist → Chief Data Scientist",
        futureOpportunities: "Expanding exponentially across healthcare diagnosis, algorithmic finance, personalized consumer platforms, and sustainable energy optimization."
    },

    {
        id: "ai-ml-engineer",
        name: "AI/ML Engineer",
        category: "Data & Artificial Intelligence",
        icon: "brain-circuit",
        tagline: "Architect, optimize, and deploy production-scale deep learning and Generative AI systems.",
        description: "AI/ML Engineers bridge research and scalable software engineering. They train neural networks, fine-tune Large Language Models (LLMs), build computer vision and NLP pipelines, and serve models with low latency in cloud production environments.",
        dayToDay: "Designing neural architectures using PyTorch, fine-tuning open-source LLMs, building Retrieval-Augmented Generation (RAG) pipelines with vector databases, optimizing model inference using ONNX/TensorRT, and integrating models into backend APIs.",
        relevantInterests: ["Artificial Intelligence", "Programming", "Mathematics", "Research", "Problem Solving", "Data Analysis"],
        requiredSkills: {
            "Python": 5,
            "Mathematics": 4,
            "Statistics": 4,
            "Problem Solving": 5,
            "Analytical Thinking": 4,
            "SQL": 3,
            "C/C++": 3,
            "Java": 2,
            "Creativity": 3,
            "Communication": 3,
            "HTML/CSS": 1,
            "JavaScript": 2
        },
        relevantSubjects: ["Computer Science", "Mathematics", "Physics", "Statistics"],
        workPreferences: ["Solving technical problems", "Working with computers", "Research and innovation", "Working with data"],
        careerPreference: "Technical",
        academicProfile: {
            mandatory: "No legal licensing requirement. Strong programming capability, algorithm foundations, and hands-on system building are required.",
            preferred: "B.Tech/B.E. or M.Tech in Computer Science, Artificial Intelligence, or Electrical & Computer Engineering.",
            alternativeRoutes: "Skilled software engineers with strong algorithmic proficiency who build and showcase open-source LLM/deep learning projects on GitHub and Hugging Face.",
            schoolSubjects: "Class 10/12 Science stream (PCM) with Mathematics and Computer Science.",
            undergraduateDegrees: [
                "B.Tech in Artificial Intelligence & Machine Learning",
                "B.Tech in Computer Science and Engineering",
                "B.Sc. in Computer Science with AI specialization"
            ],
            postgraduateOptions: [
                "M.Tech / MS in AI & Robotics or Computer Science",
                "Ph.D. in Deep Learning, Computer Vision, or NLP"
            ],
            admissionAndExams: [
                "JEE Main & JEE Advanced for premier engineering colleges",
                "GATE (CSE / DA paper) for premier M.Tech programs (IITs, IISc)",
                "Admission exams are route-specific; self-taught portfolio builders also secure high-impact roles at AI startups."
            ]
        },
        technicalSkills: ["PyTorch / TensorFlow", "Transformer Architectures & LLMs", "LangChain / LlamaIndex", "Vector Databases (Milvus, Pinecone, Chroma)", "Docker & Kubernetes", "FastAPI / Triton Inference Server"],
        softSkills: ["Algorithmic Intuition", "System Optimization Mindset", "Persistence in Debugging", "Collaborative Code Review"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Code & Math Foundations",
                duration: "6 Weeks",
                skills: ["Advanced Python", "Object-Oriented Design", "Linear Algebra & Vector Calculus"],
                description: "Write clean, performant Python, understand tensor operations, matrix factorizations, and backward gradient computation."
            },
            {
                stage: 2,
                title: "Stage 2: Deep Learning & PyTorch",
                duration: "8 Weeks",
                skills: ["PyTorch", "CNNs", "RNNs/LSTMs", "Optimization Algorithms (Adam, SGD)"],
                description: "Build neural networks from scratch, implement convolutional vision filters, loss functions, and learning rate schedulers."
            },
            {
                stage: 3,
                title: "Stage 3: Transformers & Modern NLP / GenAI",
                duration: "8 Weeks",
                skills: ["Attention Mechanisms", "Hugging Face Ecosystem", "RAG Systems", "Vector Search"],
                description: "Understand Transformer self-attention, build RAG pipelines over proprietary documents, and fine-tune open-weights LLMs (Llama 3/Mistral)."
            },
            {
                stage: 4,
                title: "Stage 4: MLOps & Production Inference",
                duration: "6 Weeks",
                skills: ["Model Quantization (GGUF, AWQ)", "Docker", "Triton / vLLM", "FastAPI"],
                description: "Quantize models for high-throughput inference, package model APIs inside containers, and monitor for model drift."
            },
            {
                stage: 5,
                title: "Stage 5: Portfolio & AI Engineering Practice",
                duration: "4 Weeks",
                skills: ["End-to-End Multimodal Application", "Hugging Face Spaces", "System Design"],
                description: "Deploy a live production AI web application, write technical documentation, and practice distributed training interview questions."
            }
        ],
        beginnerProjects: [
            { title: "Intelligent Document Q&A with Local RAG", difficulty: "Intermediate", description: "Build a document retrieval and answering system using LangChain, ChromaDB, and an open-source LLM with citation tracking." },
            { title: "Real-Time Object Detection & Speed Tracker", difficulty: "Intermediate", description: "Use YOLOv8 and OpenCV to identify vehicles from traffic video streams and calculate their approximate speeds." },
            { title: "Medical X-Ray Pneumonia Classifier", difficulty: "Beginner", description: "Train a ResNet convolutional neural network in PyTorch with data augmentation to categorize chest X-rays with high recall." }
        ],
        certifications: [
            { name: "Deep Learning Specialization", provider: "DeepLearning.AI / Andrew Ng" },
            { name: "AWS Certified Machine Learning - Specialty", provider: "Amazon Web Services" },
            { name: "Google Cloud Professional Machine Learning Engineer", provider: "Google Cloud" }
        ],
        internshipOpportunities: "Target AI research labs (IIT research parks, T-Hub), Hugging Face community bounties, and GenAI product startups.",
        jobRoles: ["Associate AI Engineer", "Machine Learning Engineer", "NLP Engineer", "Computer Vision Specialist", "MLOps Engineer"],
        careerProgression: "Associate ML Engineer → AI/ML Engineer → Senior MLOps/AI Engineer → Lead AI Architect → VP of AI Engineering",
        futureOpportunities: "Exponential growth fueled by LLMs, Autonomous Agents, Edge AI deployment on smartphones and IoT, and Multimodal reasoning."
    },

    {
        id: "software-developer",
        name: "Software Developer",
        category: "Software & Engineering",
        icon: "code-2",
        tagline: "Build robust, scalable software applications and computational infrastructure.",
        description: "Software Developers design, program, test, and maintain software applications, APIs, operating platforms, and distributed systems. They translate operational requirements into clean, scalable, and secure codebases.",
        dayToDay: "Writing feature code in Java, Python, C++, or Go, participating in sprint reviews, writing automated unit and integration tests, reviewing pull requests, and debugging production issues.",
        relevantInterests: ["Programming", "Problem Solving", "Mathematics", "Creativity", "Research"],
        requiredSkills: {
            "Problem Solving": 5,
            "Analytical Thinking": 4,
            "Python": 4,
            "Java": 4,
            "C/C++": 3,
            "SQL": 3,
            "HTML/CSS": 2,
            "JavaScript": 2,
            "Communication": 3,
            "Creativity": 3,
            "Mathematics": 3,
            "Statistics": 2
        },
        relevantSubjects: ["Computer Science", "Mathematics", "Physics"],
        workPreferences: ["Working with computers", "Solving technical problems", "Research and innovation"],
        careerPreference: "Technical",
        academicProfile: {
            mandatory: "No statutory government license. A solid bachelor's degree in engineering, computer applications, or equivalent practical coding capability is widely required.",
            preferred: "B.Tech/B.E. in Computer Science, Information Technology, or MCA.",
            alternativeRoutes: "Graduates with non-CS degrees (BCA, B.Sc., B.Com) who build strong Data Structures & Algorithms proficiency, maintain a clean GitHub profile, and participate in competitive coding.",
            schoolSubjects: "Class 10/12 Science stream with Mathematics and Computer Science or Informatics Practices.",
            undergraduateDegrees: [
                "B.Tech / B.E. in Computer Science & Engineering",
                "BCA (Bachelor of Computer Applications)",
                "B.Sc. in Computer Science / Information Technology"
            ],
            postgraduateOptions: [
                "M.Tech in Software Engineering / Computer Science",
                "MCA (Master of Computer Applications)",
                "MS in Computer Science"
            ],
            admissionAndExams: [
                "JEE Main, JEE Advanced, BITSAT, State CETs (KCET, MHT-CET, WBJEE)",
                "NIMCET for National Institutes of Technology MCA admissions",
                "Non-compulsory for private university programs and open-source hiring pathways."
            ]
        },
        technicalSkills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Version Control (Git & GitHub)", "RESTful APIs & Microservices", "Relational Databases (PostgreSQL, MySQL)", "Unit Testing (JUnit, PyTest)"],
        softSkills: ["Teamwork & Pair Programming", "Time Management", "Code Readability Mindset", "Adaptability to New Tech"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Programming Fundamentals & OOP",
                duration: "6 Weeks",
                skills: ["Core Java or Python or C++", "Object-Oriented Principles", "Memory Management"],
                description: "Master classes, inheritance, polymorphism, encapsulation, file I/O, and exceptions."
            },
            {
                stage: 2,
                title: "Stage 2: Data Structures & Algorithms (DSA)",
                duration: "10 - 12 Weeks",
                skills: ["Arrays & HashMaps", "Trees & Graphs", "Dynamic Programming", "Recursion"],
                description: "Solve 150+ problems on LeetCode/HackerRank covering asymptotic Big-O notation, linked lists, trees, graphs, and two-pointer techniques."
            },
            {
                stage: 3,
                title: "Stage 3: Systems & Backend Engineering",
                duration: "8 Weeks",
                skills: ["Relational Databases & SQL", "REST API Development", "Concurrency & Threads"],
                description: "Build robust backend microservices with authentication, connection pooling, and error handling middleware."
            },
            {
                stage: 4,
                title: "Stage 4: Full Project Development & Version Control",
                duration: "4 - 6 Weeks",
                skills: ["Git Workflows", "CI/CD Pipelines", "Docker Containers"],
                description: "Collaborate on a team project using GitHub Pull Requests, write automated test suites, and containerize the service."
            },
            {
                stage: 5,
                title: "Stage 5: Interview Preparation & Placement",
                duration: "4 Weeks",
                skills: ["System Design Fundamentals", "Mock Technical Interviews", "Resume Optimization"],
                description: "Prepare low-level object-oriented design patterns (Factory, Singleton, Observer), behavioral questions, and live coding rounds."
            }
        ],
        beginnerProjects: [
            { title: "Bank Account Management System with ACID Compliance", difficulty: "Beginner", description: "Design an object-oriented multi-user banking application with transaction concurrency and SQLite data persistence." },
            { title: "Distributed Task Scheduler API", difficulty: "Intermediate", description: "Build a microservice in Spring Boot or FastAPI that enqueues background jobs and processes them with retry backoff." },
            { title: "File Compression Utility (Huffman Coding)", difficulty: "Intermediate", description: "Implement lossless file compression and decompression from scratch using binary min-heaps and tree traversal in C++ or Java." }
        ],
        certifications: [
            { name: "Oracle Certified Professional: Java SE Programmer", provider: "Oracle" },
            { name: "Meta Back-End Developer Professional Certificate", provider: "Coursera / Meta" },
            { name: "AWS Certified Developer - Associate", provider: "Amazon Web Services" }
        ],
        internshipOpportunities: "Apply via campus placement drives, GSoC (Google Summer of Code), hackathons (Smart India Hackathon), and direct outreach on LinkedIn.",
        jobRoles: ["Software Development Engineer I (SDE 1)", "Junior Backend Developer", "Application Programmer", "Systems Engineer"],
        careerProgression: "SDE 1 → SDE 2 → Senior Software Engineer → Technical Lead / Engineering Manager → Principal Engineer / Chief Architect",
        futureOpportunities: "High evergreen global demand across enterprise software, SaaS products, embedded systems, automotive software, and cloud backends."
    },

    {
        id: "web-developer",
        name: "Web Developer",
        category: "Software & Engineering",
        icon: "globe",
        tagline: "Create high-performance, accessible, and responsive web applications.",
        description: "Web Developers create modern websites, web applications, and web services. They master frontend interfaces (HTML/CSS, JavaScript, React) as well as backend server architecture, database integration, and modern web APIs.",
        dayToDay: "Building interactive user interfaces using modern JavaScript frameworks, connecting frontends to backend APIs, ensuring responsive cross-browser compatibility, and optimizing page load speeds.",
        relevantInterests: ["Programming", "Designing", "Creativity", "Problem Solving", "Communication"],
        requiredSkills: {
            "HTML/CSS": 5,
            "JavaScript": 5,
            "Problem Solving": 4,
            "Creativity": 4,
            "SQL": 3,
            "Python": 3,
            "Communication": 3,
            "Analytical Thinking": 3,
            "Java": 2,
            "C/C++": 1,
            "Mathematics": 2,
            "Statistics": 1
        },
        relevantSubjects: ["Computer Science", "Art/Design", "Mathematics", "English"],
        workPreferences: ["Working with computers", "Creating visual designs", "Solving technical problems"],
        careerPreference: "Technical",
        academicProfile: {
            mandatory: "No statutory degree is legally required. A demonstrative portfolio of live websites and production code is the primary hiring criterion in modern web agencies and tech startups.",
            preferred: "B.Tech/B.E., BCA, B.Sc. in Computer Science/IT, or Diploma in Computer Engineering.",
            alternativeRoutes: "Very welcoming to self-taught developers, bootcamp graduates, and career switchers who demonstrate publicly verifiable projects hosted on Netlify, Vercel, or GitHub.",
            schoolSubjects: "Any stream (Science, Commerce, or Arts) with basic computer literacy and analytical curiosity.",
            undergraduateDegrees: [
                "BCA (Bachelor of Computer Applications)",
                "B.Tech in Computer Science / IT",
                "B.Sc. in Computer Science or Web Technologies"
            ],
            postgraduateOptions: [
                "MCA (Master of Computer Applications)",
                "M.Tech / M.Sc. in Software Technology (optional)"
            ],
            admissionAndExams: [
                "Standard engineering or college entrance tests for formal university routes.",
                "Portfolio-based direct hiring is the industry standard for product startups and agencies."
            ]
        },
        technicalSkills: ["Semantic HTML5 & Modern CSS3", "Modern JavaScript (ES6+)", "Frontend Frameworks (React, Vue, or Next.js)", "Node.js & Express.js", "REST & GraphQL APIs", "Tailwind CSS / Responsive Design"],
        softSkills: ["Visual Attention to Detail", "Empathy for User Experience", "Fast Iteration Mindset", "Cross-Device Testing Discipline"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Core Web Foundations",
                duration: "4 - 5 Weeks",
                skills: ["Semantic HTML5", "Modern CSS3 (Flexbox, Grid)", "Responsive Layouts"],
                description: "Master modern CSS styling without frameworks, media queries, accessibility (ARIA), and CSS variables."
            },
            {
                stage: 2,
                title: "Stage 2: JavaScript & DOM Mastery",
                duration: "6 Weeks",
                skills: ["Vanilla JavaScript (ES6+)", "DOM Manipulation", "Async/Await & Fetch API"],
                description: "Understand closures, event bubbling, array methods, promises, and dynamic DOM manipulation without libraries."
            },
            {
                stage: 3,
                title: "Stage 3: Modern Frontend Frameworks",
                duration: "6 - 8 Weeks",
                skills: ["React.js", "Component State & Hooks", "Client-Side Routing"],
                description: "Build single-page applications with reusable components, context API, custom hooks, and Tailwind CSS."
            },
            {
                stage: 4,
                title: "Stage 4: Backend Integration & Fullstack",
                duration: "6 Weeks",
                skills: ["Node.js / Express", "MongoDB / PostgreSQL", "JWT Authentication"],
                description: "Build fullstack applications with user login, protected routes, database CRUD, and environment configuration."
            },
            {
                stage: 5,
                title: "Stage 5: Deployment, Testing & Portfolio",
                duration: "3 - 4 Weeks",
                skills: ["Git & GitHub", "Netlify / Vercel Deployment", "Lighthouse Performance Optimization"],
                description: "Deploy 3 polished web applications, achieve 90+ Google Lighthouse performance scores, and document clean case studies."
            }
        ],
        beginnerProjects: [
            { title: "Responsive SaaS Landing Page & Pricing Calculator", difficulty: "Beginner", description: "Design and code a pixel-perfect, mobile-friendly product page with dark/light theme toggle and interactive slider calculator." },
            { title: "Kanban Task Management Application", difficulty: "Intermediate", description: "Build a drag-and-drop task board with LocalStorage persistence, column reordering, and priority tagging." },
            { title: "Real-Time Collaborative Markdown Editor", difficulty: "Intermediate", description: "Create a live markdown previewer with syntax highlighting, word counters, and instant PDF/HTML export." }
        ],
        certifications: [
            { name: "Meta Front-End Developer Professional Certificate", provider: "Meta / Coursera" },
            { name: "freeCodeCamp Responsive Web Design & JavaScript Certifications", provider: "freeCodeCamp" },
            { name: "OpenJS Node.js Application Developer (JAD)", provider: "Linux Foundation" }
        ],
        internshipOpportunities: "Excellent opportunities for remote freelance projects, Upwork, Fiverr, startup internships on Internshala, and open-source contributions to web libraries.",
        jobRoles: ["Junior Web Developer", "Frontend Developer", "Full Stack Developer", "UI Developer", "WordPress / Jamstack Specialist"],
        careerProgression: "Junior Web Developer → Full Stack Developer → Senior Frontend Architect → Lead Web Engineer → Director of Engineering",
        futureOpportunities: "High ongoing demand with evolution toward Progressive Web Apps (PWAs), Next.js fullstack frameworks, WebAssembly, and AI-assisted web apps."
    },

    {
        id: "cybersecurity-analyst",
        name: "Cybersecurity Analyst",
        category: "Cybersecurity & Infrastructure",
        icon: "shield-check",
        tagline: "Protect enterprise networks, cloud assets, and confidential digital infrastructure.",
        description: "Cybersecurity Analysts monitor computer networks, prevent security breaches, conduct vulnerability assessments, and respond to cyber incidents. They protect sensitive organizational infrastructure and customer data from unauthorized intrusion.",
        dayToDay: "Monitoring Security Information and Event Management (SIEM) consoles, analyzing alert logs, running vulnerability scans, investigating phishing attempts, and hardening network firewall rules.",
        relevantInterests: ["Cybersecurity", "Problem Solving", "Programming", "Research", "Electronics"],
        requiredSkills: {
            "Problem Solving": 5,
            "Analytical Thinking": 5,
            "C/C++": 3,
            "Python": 3,
            "SQL": 3,
            "Communication": 3,
            "Mathematics": 3,
            "JavaScript": 2,
            "HTML/CSS": 2,
            "Java": 2,
            "Creativity": 2,
            "Statistics": 2
        },
        relevantSubjects: ["Computer Science", "Physics", "Mathematics"],
        workPreferences: ["Solving technical problems", "Working with computers", "Research and innovation"],
        careerPreference: "Technical",
        academicProfile: {
            mandatory: "No statutory government license for entry-level positions. Standard bachelor's degrees or recognized industry credentials (CompTIA Security+, CEH) are preferred.",
            preferred: "B.Tech/B.E. in Information Security, Computer Science, or Electronics & Communication, or BCA/B.Sc. IT.",
            alternativeRoutes: "Self-taught ethical hackers who demonstrate skills through platforms like TryHackMe, Hack The Box, and recognized bug-bounty hunting programs (Bugcrowd, HackerOne).",
            schoolSubjects: "Class 10/12 Science stream with Mathematics and Computer Science.",
            undergraduateDegrees: [
                "B.Tech in Cybersecurity / Information Security",
                "B.Tech in Computer Science & Engineering",
                "B.Sc. in Forensic Science & Cybersecurity / BCA"
            ],
            postgraduateOptions: [
                "M.Tech in Information Security / Cyber Defense",
                "M.Sc. in Digital Forensics & Cyber Security (NFSU)"
            ],
            admissionAndExams: [
                "JEE Main / State CETs for B.Tech routes",
                "NFSU National Entrance Test for National Forensic Sciences University programs",
                "Industry certifications often open direct entry-level SOC roles regardless of entrance exam scores."
            ]
        },
        technicalSkills: ["Networking Protocols (TCP/IP, DNS, OSI Model)", "Linux Administration & Bash Scripting", "SIEM Tools (Splunk, Wazuh)", "Wireshark Packet Analysis", "Vulnerability Scanning (Nessus, Nmap)", "Threat Hunting & Incident Response"],
        softSkills: ["Ethical Integrity", "Crisis Calmness", "Adversarial Thinking", "Methodical Documentation", "Communication Under Pressure"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Computer Networks & Operating Systems",
                duration: "6 Weeks",
                skills: ["TCP/IP & Subnetting", "Linux CLI Mastery", "Windows Active Directory Basics"],
                description: "Deep dive into network packets, ports, protocols, firewalls, and Linux command-line permissions."
            },
            {
                stage: 2,
                title: "Stage 2: Security Fundamentals & Defensive Concepts",
                duration: "6 - 8 Weeks",
                skills: ["Cryptography (RSA, AES, Hashing)", "Vulnerability Assessment", "Access Controls (IAM)"],
                description: "Learn public key infrastructure, hashing algorithms, threat vectors (OWASP Top 10), and security policies."
            },
            {
                stage: 3,
                title: "Stage 3: SOC Operations & Threat Analysis",
                duration: "8 Weeks",
                skills: ["Splunk / Wazuh SIEM", "Wireshark", "Log Analysis & Alert Triage"],
                description: "Set up a virtual home lab, generate simulated cyber attacks, and analyze the resulting logs in a SIEM platform."
            },
            {
                stage: 4,
                title: "Stage 4: Practical Labs & Certifications",
                duration: "6 Weeks",
                skills: ["TryHackMe / Hack The Box", "Scripting for Security (Python/Bash)"],
                description: "Attain top ranking on introductory TryHackMe learning pathways and write automation scripts for log parsing."
            },
            {
                stage: 5,
                title: "Stage 5: Incident Response & Career Entry",
                duration: "4 Weeks",
                skills: ["Incident Handling Protocols", "Compliance Standards (ISO 27001, GDPR)", "SOC Interview Prep"],
                description: "Master the NIST incident response lifecycle, practice mock security triage interviews, and target Tier 1 SOC Analyst roles."
            }
        ],
        beginnerProjects: [
            { title: "Virtual SOC Home Lab with Wazuh & Suricata", difficulty: "Intermediate", description: "Set up a virtualized network environment with Ubuntu and Windows agents feeding telemetry into an open-source Wazuh SIEM server." },
            { title: "Automated Port Scanner & Vulnerability Checker", difficulty: "Beginner", description: "Build a multi-threaded Python CLI tool using raw sockets to scan open ports and check for outdated service banners." },
            { title: "Phishing Email Header Analysis & Triage Report", difficulty: "Beginner", description: "Deconstruct real spam/phishing email headers, extract malicious IP routing hops, and produce an incident triage brief." }
        ],
        certifications: [
            { name: "CompTIA Security+ (SY0-701)", provider: "CompTIA" },
            { name: "Google Cybersecurity Professional Certificate", provider: "Google / Coursera" },
            { name: "Certified Ethical Hacker (CEH) / Cisco Certified Support Technician Cybersecurity", provider: "EC-Council / Cisco" }
        ],
        internshipOpportunities: "Target Managed Security Service Providers (MSSPs), bank IT security departments, and cybersecurity consulting teams (Big 4 risk advisory).",
        jobRoles: ["SOC Analyst (Tier 1)", "Junior Cybersecurity Specialist", "Information Security Associate", "Vulnerability Assessment Analyst"],
        careerProgression: "SOC Analyst Tier 1 → SOC Analyst Tier 2 → Incident Response Lead → Security Architect → Chief Information Security Officer (CISO)",
        futureOpportunities: "High strategic priority worldwide due to stringent privacy regulations, cloud migrations, ransomware threats, and AI-driven automated defenses."
    },

    {
        id: "ui-ux-designer",
        name: "UI/UX Designer",
        category: "Design & Creative Tech",
        icon: "palette",
        tagline: "Design intuitive, delightful, and human-centered digital interfaces.",
        description: "UI/UX Designers conduct user research, create user personas, wireframe user journeys, and design polished visual interfaces for websites, mobile apps, and enterprise software. They make complex technology simple and enjoyable to use.",
        dayToDay: "Conducting user interviews, synthesizing journey maps, wireframing workflows in Figma, designing design systems with typography and color tokens, creating interactive prototypes, and testing with end users.",
        relevantInterests: ["Designing", "Creativity", "Communication", "Problem Solving", "Research"],
        requiredSkills: {
            "Creativity": 5,
            "Communication": 4,
            "Problem Solving": 4,
            "Analytical Thinking": 3,
            "HTML/CSS": 3,
            "JavaScript": 1,
            "Python": 1,
            "SQL": 1,
            "C/C++": 1,
            "Java": 1,
            "Mathematics": 1,
            "Statistics": 1
        },
        relevantSubjects: ["Art/Design", "English", "Computer Science", "Psychology", "Business Studies"],
        workPreferences: ["Creating visual designs", "Working with people", "Working with computers", "Solving technical problems"],
        careerPreference: "Creative",
        academicProfile: {
            mandatory: "No statutory government license. A strong design portfolio displaying problem-solving case studies and Figma prototypes is the single most decisive factor for employment.",
            preferred: "B.Des (Bachelor of Design) or M.Des in Interaction Design / Human-Computer Interaction, B.Tech in CS with design inclination, or Fine Arts / Multimedia degrees.",
            alternativeRoutes: "Thriving field for career switchers from engineering, psychology, architecture, or literature who build a structured 3-project UX case study portfolio.",
            schoolSubjects: "Any stream in Class 10/12 (Arts, Commerce, or Science) with an interest in visual arts, design, or human psychology.",
            undergraduateDegrees: [
                "B.Des (Bachelor of Design) in Interaction Design / Industrial Design",
                "B.Tech in Computer Science / IT (with UI/UX specialization)",
                "B.Voc in Multimedia and Web Design",
                "Bachelor of Fine Arts (BFA)"
            ],
            postgraduateOptions: [
                "M.Des in Interaction Design (NID, IIT IDC, IISc)",
                "Master of Human-Computer Interaction (HCI)"
            ],
            admissionAndExams: [
                "UCEED & CEED for premier design schools (IIT Bombay IDC, IIT Guwahati, IIITDM)",
                "NID DAT for National Institute of Design",
                "Private design school tests or direct portfolio interviews; exams are institution-specific, not legally mandatory."
            ]
        },
        technicalSkills: ["Figma & FigJam", "Wireframing & Prototyping", "Design Systems & Component Libraries", "User Research & Usability Testing", "Information Architecture", "Basic HTML/CSS understanding"],
        softSkills: ["Empathetic Listening", "Creative Storytelling", "Receptivity to Critique", "Interpersonal Negotiation", "Cross-Functional Collaboration"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Design Principles & Human Psychology",
                duration: "4 Weeks",
                skills: ["Visual Hierarchy", "Color Theory & Typography", "Gestalt Principles"],
                description: "Study contrast, alignment, typography scales, accessibility guidelines (WCAG), and visual perception psychology."
            },
            {
                stage: 2,
                title: "Stage 2: Tool Mastery (Figma)",
                duration: "4 - 5 Weeks",
                skills: ["Figma Auto-Layout", "Components & Variants", "Interactive Prototyping"],
                description: "Master modern Figma capabilities including auto-layout, nested component properties, design variables, and smooth animations."
            },
            {
                stage: 3,
                title: "Stage 3: UX Research & Information Architecture",
                duration: "6 Weeks",
                skills: ["User Interviews", "Empathy Mapping", "Wireframing & User Flows"],
                description: "Learn how to conduct user research, synthesize findings into actionable personas, and structure clean navigation hierarchies."
            },
            {
                stage: 4,
                title: "Stage 4: Case Study Production",
                duration: "6 Weeks",
                skills: ["Full Product Redesign", "Usability Testing", "Design System Creation"],
                description: "Produce two comprehensive end-to-end product case studies explaining problem discovery, iterations, testing, and final UI."
            },
            {
                stage: 5,
                title: "Stage 5: Portfolio Polish & Design Critique",
                duration: "3 - 4 Weeks",
                skills: ["Behance / Notion Portfolio", "Design Presentation Skills", "Interview Preparation"],
                description: "Publish your portfolio online, rehearse live whiteboard design challenges, and articulate design decisions confidently."
            }
        ],
        beginnerProjects: [
            { title: "Redesign of a Cluttered Government Portal Mobile Experience", difficulty: "Intermediate", description: "Identify friction points in a public service app (e.g. railway booking or electricity bill pay), re-architect user flows, and prototype a clean Figma mobile experience." },
            { title: "Hyperlocal Food Waste Reduction App Concept", difficulty: "Beginner", description: "Design an end-to-end mobile app connecting restaurants with local charities, complete with user persona profiles and high-fidelity mockups." },
            { title: "Comprehensive Design System for an E-Learning Web App", difficulty: "Intermediate", description: "Create a modular design library in Figma with typography tokens, responsive buttons, form controls, and dark/light modes." }
        ],
        certifications: [
            { name: "Google UX Design Professional Certificate", provider: "Google / Coursera" },
            { name: "Interaction Design Foundation (IxDF) Certified UX Designer", provider: "Interaction Design Foundation" },
            { name: "CalArts Graphic Design Specialization", provider: "CalArts / Coursera" }
        ],
        internshipOpportunities: "Design studios, product agencies, tech startups, and e-commerce platforms actively recruit interns through Dribbble, Behance, and LinkedIn portfolios.",
        jobRoles: ["Associate UI/UX Designer", "Product Designer", "Junior Visual Designer", "UX Researcher", "Interaction Designer"],
        careerProgression: "Associate UI/UX Designer → Product Designer → Senior UX Designer → Lead Product Designer → Head of Design / VP of Design",
        futureOpportunities: "High evergreen need across consumer apps, SaaS dashboards, automotive digital cockpits, AR/VR spatial interfaces, and AI agent interface design."
    },

    {
        id: "cloud-engineer",
        name: "Cloud Engineer",
        category: "Cybersecurity & Infrastructure",
        icon: "cloud",
        tagline: "Design, deploy, and automate scalable cloud infrastructure and services.",
        description: "Cloud Engineers build and manage organizational computing, storage, and networking resources on public cloud platforms like AWS, Microsoft Azure, and Google Cloud. They ensure systems are highly available, cost-effective, and secure.",
        dayToDay: "Writing Infrastructure as Code (Terraform) scripts, provisioning cloud virtual machines and Kubernetes clusters, configuring VPC networks and load balancers, and monitoring cloud costs and availability.",
        relevantInterests: ["Cybersecurity", "Programming", "Problem Solving", "Electronics"],
        requiredSkills: {
            "Problem Solving": 4,
            "Analytical Thinking": 4,
            "Python": 3,
            "SQL": 2,
            "C/C++": 2,
            "Java": 2,
            "Communication": 3,
            "HTML/CSS": 1,
            "JavaScript": 2,
            "Mathematics": 2,
            "Statistics": 1,
            "Creativity": 2
        },
        relevantSubjects: ["Computer Science", "Physics", "Mathematics"],
        workPreferences: ["Working with computers", "Solving technical problems", "Working with data"],
        careerPreference: "Technical",
        academicProfile: {
            mandatory: "No statutory government license. Industry cloud certifications (AWS Solutions Architect, Azure Administrator) alongside a technical degree are standard requirements.",
            preferred: "B.Tech/B.E. in Computer Science, Information Technology, or Electronics & Communication, or BCA/MCA.",
            alternativeRoutes: "System administrators, network technicians, and developers transitioning to cloud by earning recognized cloud certifications and building automated Terraform projects on GitHub.",
            schoolSubjects: "Class 10/12 Science stream with Mathematics and Computer Science.",
            undergraduateDegrees: [
                "B.Tech in Computer Science / Cloud Computing",
                "B.Tech in Information Technology",
                "BCA / B.Sc. in Computer Science"
            ],
            postgraduateOptions: [
                "M.Tech in Cloud Computing / Distributed Systems",
                "MCA (Master of Computer Applications)"
            ],
            admissionAndExams: [
                "Standard engineering entrance exams for university routes.",
                "Vendor certifications (AWS/Azure/GCP) serve as primary qualification proof for direct recruitment."
            ]
        },
        technicalSkills: ["Amazon Web Services (AWS) / Azure / GCP", "Infrastructure as Code (Terraform)", "Docker & Containerization", "Kubernetes (K8s)", "Linux Administration & Bash", "CI/CD (GitHub Actions, Jenkins)"],
        softSkills: ["Troubleshooting Mindset", "Cost Consciousness", "Collaboration with Developers", "Disaster Recovery Discipline"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Linux & Networking Fundamentals",
                duration: "5 Weeks",
                skills: ["Linux Shell Scripting", "DNS, VPC, Subnets, Routing", "SSH & Permissions"],
                description: "Master command-line administration, package management, firewall configuration, and IP networking."
            },
            {
                stage: 2,
                title: "Stage 2: Core Cloud Platform (AWS / Azure)",
                duration: "6 - 8 Weeks",
                skills: ["Compute (EC2/VMs)", "Storage (S3/Blob)", "Identity & Access (IAM)", "Networking (VPC)"],
                description: "Deploy virtual servers, configure security groups, storage buckets, and manage least-privilege IAM policies."
            },
            {
                stage: 3,
                title: "Stage 3: Containers & Orchestration",
                duration: "6 Weeks",
                skills: ["Docker", "Kubernetes Architecture", "Helm Charts"],
                description: "Containerize microservices, build multi-stage Dockerfiles, and manage pods, deployments, and services in Kubernetes."
            },
            {
                stage: 4,
                title: "Stage 4: Infrastructure as Code & CI/CD",
                duration: "6 Weeks",
                skills: ["Terraform", "GitHub Actions", "Automated Deployments"],
                description: "Write modular Terraform code to declare cloud infrastructure reproducibly and trigger deployments automatically via Git pushes."
            },
            {
                stage: 5,
                title: "Stage 5: Observability & Cloud Certification",
                duration: "4 Weeks",
                skills: ["Prometheus & Grafana", "CloudWatch / Cloud Monitoring", "Certification Exam Prep"],
                description: "Set up telemetry dashboards and prepare for the AWS Certified Solutions Architect Associate or Azure Administrator exam."
            }
        ],
        beginnerProjects: [
            { title: "Automated Multi-Tier Web Architecture with Terraform", difficulty: "Intermediate", description: "Write reusable Terraform modules that provision a VPC, public/private subnets, an Application Load Balancer, and auto-scaling EC2 instances." },
            { title: "Serverless Image Resizing Pipeline", difficulty: "Beginner", description: "Build an event-driven AWS Lambda function triggered by S3 file uploads to generate responsive image thumbnails in Python." },
            { title: "Kubernetes Microservices Cluster Deployment", difficulty: "Intermediate", description: "Deploy a frontend, backend API, and Redis cache on a managed Kubernetes cluster with Ingress routing and health checks." }
        ],
        certifications: [
            { name: "AWS Certified Solutions Architect - Associate", provider: "Amazon Web Services" },
            { name: "Microsoft Certified: Azure Administrator Associate (AZ-104)", provider: "Microsoft" },
            { name: "Google Cloud Associate Cloud Engineer", provider: "Google Cloud" }
        ],
        internshipOpportunities: "IT services leaders (TCS, Infosys, Wipro, Cognizant), global cloud consulting partners, and SaaS scale-ups have high demand for cloud operations interns.",
        jobRoles: ["Junior Cloud Engineer", "Cloud Support Associate", "DevOps Engineer Trainee", "Site Reliability Engineering (SRE) Intern"],
        careerProgression: "Junior Cloud Engineer → Cloud DevOps Engineer → Senior Cloud Architect → Principal Infrastructure Engineer → Director of Cloud Platform",
        futureOpportunities: "High multi-year expansion driven by enterprise cloud modernization, multi-cloud redundancy, hybrid edge computing, and AI cluster orchestration."
    },

    {
        id: "business-analyst",
        name: "Business Analyst",
        category: "Business & Analytics",
        icon: "line-chart",
        tagline: "Bridge business requirements and technical execution with data-driven clarity.",
        description: "Business Analysts evaluate organizational processes, identify operational inefficiencies, gather stakeholder requirements, and translate business needs into technical specifications that software and product teams can build.",
        dayToDay: "Leading requirement-gathering workshops with department heads, documenting Business Requirement Documents (BRD) and user stories, modeling business workflows with BPMN, and validating acceptance criteria.",
        relevantInterests: ["Business", "Management", "Communication", "Problem Solving", "Data Analysis"],
        requiredSkills: {
            "Communication": 5,
            "Analytical Thinking": 5,
            "Problem Solving": 4,
            "SQL": 3,
            "Creativity": 3,
            "Python": 2,
            "Statistics": 2,
            "Mathematics": 2,
            "HTML/CSS": 1,
            "JavaScript": 1,
            "C/C++": 1,
            "Java": 1
        },
        relevantSubjects: ["Business Studies", "Economics", "Accountancy", "Computer Science", "English", "Mathematics"],
        workPreferences: ["Business and management", "Working with people", "Working with data", "Solving technical problems"],
        careerPreference: "Business",
        academicProfile: {
            mandatory: "No statutory government license. A bachelor's or master's degree in business, engineering, or commerce is standard across IT and corporate sectors.",
            preferred: "B.Tech + MBA, BBA, B.Com, or B.Sc. in Information Systems.",
            alternativeRoutes: "Professionals from customer operations, sales, or quality assurance who transition by developing strong technical writing, Agile/Scrum knowledge, and SQL skills.",
            schoolSubjects: "Commerce or Science stream with Mathematics, Business Studies, Economics, or Computer Science.",
            undergraduateDegrees: [
                "BBA (Bachelor of Business Administration)",
                "B.Tech in any discipline (CSE, IT, ECE, Mechanical)",
                "B.Com with Analytics / Finance",
                "B.Sc. in Information Technology"
            ],
            postgraduateOptions: [
                "MBA in Information Technology / Systems / Business Analytics",
                "M.Sc. in Business Analytics / Operations Research"
            ],
            admissionAndExams: [
                "CAT / XAT / NMAT / CMAT for premier Indian MBA programs (IIMs, XLRI, SPJIMR)",
                "Undergraduate entrance tests (CUET, IPMAT for IIM 5-year integrated programs)",
                "Exams are route-specific; direct entry-level roles exist via campus placement or certification."
            ]
        },
        technicalSkills: ["Requirement Documentation (BRD, FRD, SRS)", "Agile / Scrum Methodologies (Jira, Confluence)", "Process Modeling (BPMN / Visio)", "SQL Querying", "Data Visualization (Tableau/Excel)", "User Story Mapping"],
        softSkills: ["Stakeholder Negotiation", "Active Listening", "Conflict Resolution", "Structured Presentation", "Business Empathy"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Business Fundamentals & Process Analysis",
                duration: "4 Weeks",
                skills: ["Business Models", "Process Flowcharting (BPMN)", "SWOT & GAP Analysis"],
                description: "Learn how companies operate, identify process bottlenecks, and map current-state ('As-Is') vs future-state ('To-Be') workflows."
            },
            {
                stage: 2,
                title: "Stage 2: Requirements Engineering & Agile",
                duration: "6 Weeks",
                skills: ["User Stories & Acceptance Criteria", "Jira & Confluence", "Scrum Framework"],
                description: "Master writing clear user stories using INVEST criteria, prioritizing backlog features, and managing sprint cycles."
            },
            {
                stage: 3,
                title: "Stage 3: Data & Analytical Tools",
                duration: "6 Weeks",
                skills: ["Intermediate SQL", "Advanced Excel (Pivot, Solver)", "Power BI Basics"],
                description: "Query transactional databases to validate business hypotheses and build simple reporting dashboards."
            },
            {
                stage: 4,
                title: "Stage 4: Case Study Production & Documentation",
                duration: "4 Weeks",
                skills: ["BRD & FRD Writing", "Wireframing with Balsamiq/Figma", "Stakeholder Presentation"],
                description: "Produce a full Business Requirement Document for an enterprise digital transformation project."
            },
            {
                stage: 5,
                title: "Stage 5: Industry Preparation & Certification",
                duration: "4 Weeks",
                skills: ["ECBA / CBAP Concepts", "Mock Client Interviews", "Consulting Case Studies"],
                description: "Study BABOK guide fundamentals and practice behavioral case interview scenarios."
            }
        ],
        beginnerProjects: [
            { title: "Retail Inventory Modernization Business Case & BRD", difficulty: "Beginner", description: "Write a comprehensive Business Requirement Document analyzing the shift from offline store ledgers to an automated ERP system." },
            { title: "Fintech Loan Approval Workflow Optimization", difficulty: "Intermediate", description: "Create BPMN process models and Jira user stories to reduce loan processing turnaround time from 4 days to 4 hours." },
            { title: "E-Commerce Return Rate Diagnostic Report", difficulty: "Intermediate", description: "Extract customer return metrics using SQL, analyze the primary return factors, and present solutions to executive stakeholders." }
        ],
        certifications: [
            { name: "Entry Certificate in Business Analysis (ECBA)", provider: "IIBA" },
            { name: "Certified Scrum Product Owner (CSPO) / Professional Scrum Master (PSM I)", provider: "Scrum Alliance / Scrum.org" },
            { name: "Google Project Management Professional Certificate", provider: "Google / Coursera" }
        ],
        internshipOpportunities: "Consulting firms, IT services corporations, fintech startups, and healthcare technology companies frequently offer Business Analyst internships.",
        jobRoles: ["Associate Business Analyst", "Functional Consultant Trainee", "Junior Product Analyst", "Operations Analyst"],
        careerProgression: "Associate Business Analyst → Business Analyst → Senior BA → Lead Enterprise Architect / Product Owner → VP of Strategic Transformation",
        futureOpportunities: "Vital across every industry as enterprises automate workflows, migrate to SaaS ERPs, and adopt AI-driven decision intelligence tools."
    },

    {
        id: "financial-analyst",
        name: "Financial Analyst",
        category: "Business & Analytics",
        icon: "badge-dollar-sign",
        tagline: "Evaluate economic health, forecast financial returns, and guide capital investments.",
        description: "Financial Analysts examine financial statements, evaluate corporate performance, build DCF valuation models, and research macroeconomic trends. They guide investment decisions for corporations, wealth funds, banks, and individual investors.",
        dayToDay: "Building financial forecast models in Excel, analyzing quarterly earnings reports, monitoring equity/bond market fluctuations, calculating valuation multiples, and writing investment memos.",
        relevantInterests: ["Finance", "Mathematics", "Business", "Data Analysis", "Research", "Problem Solving"],
        requiredSkills: {
            "Mathematics": 4,
            "Analytical Thinking": 5,
            "Statistics": 4,
            "Problem Solving": 4,
            "Communication": 3,
            "SQL": 2,
            "Python": 2,
            "Creativity": 1,
            "HTML/CSS": 1,
            "JavaScript": 1,
            "C/C++": 1,
            "Java": 1
        },
        relevantSubjects: ["Accountancy", "Economics", "Business Studies", "Mathematics", "Statistics"],
        workPreferences: ["Working with data", "Business and management", "Solving technical problems", "Working with computers"],
        careerPreference: "Business",
        academicProfile: {
            mandatory: "No general government license for internal corporate analysis. Specialized advisory or equity research in India requires SEBI-registered credentials (NISM certifications).",
            preferred: "B.Com, BBA in Finance, B.Sc. in Finance/Economics, or Chartered Accountancy (CA), followed by CFA or MBA Finance.",
            alternativeRoutes: "Engineering or mathematics graduates who transition into quantitative finance by pursuing CFA Level 1 and mastering financial modeling.",
            schoolSubjects: "Commerce with Mathematics or Science (PCM) with high quantitative aptitude.",
            undergraduateDegrees: [
                "B.Com (Hons) / B.Com in Accounting & Finance",
                "BBA in Finance / Financial Markets",
                "B.A. (Hons) in Economics",
                "B.Tech with minor in Finance / Quantitative Economics"
            ],
            postgraduateOptions: [
                "MBA in Finance (IIMs, FMS, JBIMS)",
                "Chartered Accountancy (ICAI CA qualification)",
                "CFA (Chartered Financial Analyst, CFA Institute USA)",
                "M.Sc. in Finance / Econometrics"
            ],
            admissionAndExams: [
                "CAT, XAT, GMAT for top tier MBA in Finance",
                "CA Foundation / Inter / Final conducted by ICAI",
                "NISM Series Certification exams for capital market compliance",
                "Exams are program-specific, not a universal bar for private corporate finance roles."
            ]
        },
        technicalSkills: ["Financial Modeling in Excel", "Discounted Cash Flow (DCF) Valuation", "Ratio Analysis & Financial Statements", "Python for Financial Analysis", "Bloomberg / FactSet Basics", "SQL for Financial Databases"],
        softSkills: ["Ethical Integrity", "Rigorous Skepticism", "Commercial Awareness", "Presentation Under Scrutiny", "Attention to Regulatory Details"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Financial Accounting & Statement Analysis",
                duration: "6 Weeks",
                skills: ["Balance Sheet, P&L, Cash Flow", "Working Capital Dynamics", "Financial Ratios"],
                description: "Master the three financial statements, understand debit/credit mechanics, liquidity, solvency, and profitability ratios."
            },
            {
                stage: 2,
                title: "Stage 2: Advanced Financial Modeling in Excel",
                duration: "6 Weeks",
                skills: ["3-Statement Forecasting", "DCF Modeling", "Sensitivity Tables"],
                description: "Build clean, audit-ready dynamic Excel models linking operational revenue drivers down to free cash flows."
            },
            {
                stage: 3,
                title: "Stage 3: Corporate Valuation & Equity Research",
                duration: "6 Weeks",
                skills: ["Comparable Company Analysis (Comps)", "Precedent Transactions", "WACC Calculation"],
                description: "Calculate cost of capital (CAPM), enterprise value, equity value, and conduct intrinsic vs relative valuations."
            },
            {
                stage: 4,
                title: "Stage 4: Data & Python for Quantitative Finance",
                duration: "4 - 5 Weeks",
                skills: ["Python (Pandas, yfinance)", "Portfolio Optimization", "SQL Querying"],
                description: "Automate historical stock price analysis, backtest portfolio rebalancing strategies, and calculate Sharpe ratios."
            },
            {
                stage: 5,
                title: "Stage 5: Pitch Books & Industry Interview Prep",
                duration: "4 Weeks",
                skills: ["Investment Memo Writing", "Earnings Call Synthesis", "M&A Case Studies"],
                description: "Write a complete initiating-coverage equity research report on a publicly traded Indian or global company."
            }
        ],
        beginnerProjects: [
            { title: "Three-Statement DCF Valuation Model of an FMCG Company", difficulty: "Intermediate", description: "Build a dynamic Excel model forecasting 5-year financials and calculating the fair intrinsic share price of a listed enterprise." },
            { title: "Comparative Ratio Analysis of Banking Sector", difficulty: "Beginner", description: "Evaluate NPA ratios, Net Interest Margins (NIM), and Return on Equity (ROE) across top private and public Indian banks." },
            { title: "Automated Portfolio Risk and Return Tracker in Python", difficulty: "Intermediate", description: "Write a script fetching live market data to compute portfolio variance, beta, and drawdowns against the NIFTY 50 benchmark." }
        ],
        certifications: [
            { name: "CFA Program (Level 1)", provider: "CFA Institute" },
            { name: "FMVA (Financial Modeling & Valuation Analyst)", provider: "Corporate Finance Institute (CFI)" },
            { name: "NISM Series XV: Research Analyst Certification", provider: "National Institute of Securities Markets (SEBI)" }
        ],
        internshipOpportunities: "Investment banks, private equity firms, mutual fund houses, Big 4 transaction advisory, and corporate finance planning (FP&A) teams.",
        jobRoles: ["Junior Financial Analyst", "Equity Research Associate", "FP&A Analyst", "Credit Risk Analyst", "Investment Banking Analyst"],
        careerProgression: "Financial Analyst → Senior Financial Analyst → Finance Manager / Associate Director → VP of Finance → Chief Financial Officer (CFO)",
        futureOpportunities: "High evergreen status with growing specialization in algorithmic trading, ESG investing, venture capital underwriting, and fintech analytics."
    },

    {
        id: "robotics-engineer",
        name: "Robotics Engineer",
        category: "Core Engineering & Robotics",
        icon: "bot",
        tagline: "Create autonomous machines and robotic systems merging code, circuits, and kinematics.",
        description: "Robotics Engineers design, construct, program, and operate robotic systems and autonomous agents. They combine mechanical kinematics, electronics hardware, sensor fusion, and intelligent computer vision algorithms.",
        dayToDay: "Programming microcontrollers (ROS, C++, Python), simulating robotic kinematic movement in Gazebo, calibrating LiDAR and camera sensors, designing motor driver circuits, and testing prototype physical arms.",
        relevantInterests: ["Electronics", "Programming", "Problem Solving", "Mathematics", "Research", "Artificial Intelligence"],
        requiredSkills: {
            "C/C++": 4,
            "Python": 4,
            "Mathematics": 4,
            "Problem Solving": 5,
            "Analytical Thinking": 4,
            "Creativity": 3,
            "Statistics": 3,
            "Communication": 3,
            "Java": 1,
            "SQL": 1,
            "HTML/CSS": 1,
            "JavaScript": 1
        },
        relevantSubjects: ["Physics", "Mathematics", "Computer Science"],
        workPreferences: ["Solving technical problems", "Working with computers", "Research and innovation"],
        careerPreference: "Technical",
        academicProfile: {
            mandatory: "No statutory government license required for corporate engineering. A professional degree in an engineering discipline is standard across manufacturing and robotics firms.",
            preferred: "B.Tech/B.E. in Robotics, Mechatronics, Mechanical Engineering, Electrical & Electronics, or Computer Science.",
            alternativeRoutes: "Embedded software engineers and hardware enthusiasts who build verified physical robots, participate in international robotics competitions (RoboSub, Robocon), and contribute to ROS packages.",
            schoolSubjects: "Class 10/12 Science stream with high marks in Physics and Mathematics (PCM).",
            undergraduateDegrees: [
                "B.Tech in Robotics & Automation / Mechatronics",
                "B.Tech in Mechanical Engineering",
                "B.Tech in Electrical / Electronics Engineering",
                "B.Tech in Computer Science (Robotics track)"
            ],
            postgraduateOptions: [
                "M.Tech in Robotics / Control Systems (IISc, IITs)",
                "MS in Robotics & Autonomous Systems",
                "Ph.D. in Haptics, Surgical Robotics, or Autonomous Navigation"
            ],
            admissionAndExams: [
                "JEE Main & JEE Advanced for premier IIT/NIT undergraduate programs",
                "GATE (Mechanical, Electrical, or Instrumentation Engineering) for M.Tech programs",
                "Non-compulsory for private university programs and specialized startup hiring."
            ]
        },
        technicalSkills: ["Robot Operating System (ROS / ROS 2)", "C++ & Modern Python", "Kinematics & Dynamics", "Sensor Fusion (LiDAR, IMU, Kalman Filters)", "Embedded Systems (Arduino, STM32, Raspberry Pi)", "CAD Modeling (SolidWorks / Fusion 360)"],
        softSkills: ["Hands-on Mechanical Patience", "Multidisciplinary Teamwork", "Safety Consciousness", "Spatial Reasoning"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Mechanical & Electronic Foundations",
                duration: "6 Weeks",
                skills: ["Circuit Design", "Microcontrollers (Arduino/ESP32)", "Basic CAD Modeling"],
                description: "Understand Ohm's law, motor types (stepper, servo, BLDC), pulse-width modulation (PWM), and 3D CAD design."
            },
            {
                stage: 2,
                title: "Stage 2: Embedded C++ & Control Theory",
                duration: "8 Weeks",
                skills: ["Embedded C++", "PID Controllers", "Sensor Interfacing (I2C, SPI, UART)"],
                description: "Write low-latency microcontroller firmware, read ultrasonic and IMU data, and implement closed-loop PID control."
            },
            {
                stage: 3,
                title: "Stage 3: Robot Operating System (ROS 2)",
                duration: "8 Weeks",
                skills: ["ROS 2 Nodes, Topics & Services", "URDF Modeling", "Gazebo Simulation"],
                description: "Build virtual robot models, set up pub/sub message graphs, and simulate physics and wheel odometry in Gazebo."
            },
            {
                stage: 4,
                title: "Stage 4: Autonomous Navigation & Vision",
                duration: "6 Weeks",
                skills: ["SLAM (Simultaneous Localization and Mapping)", "OpenCV Vision", "Nav2 Stack"],
                description: "Implement 2D LiDAR mapping, path planning algorithms (A*, Dijkstra), and object recognition for grasping."
            },
            {
                stage: 5,
                title: "Stage 5: Physical Build & Portfolio Documentation",
                duration: "6 Weeks",
                skills: ["Physical Prototype", "GitHub Demonstration", "Field Testing"],
                description: "Assemble a functional physical autonomous mobile robot or robotic arm and document the full CAD, circuit, and code repository."
            }
        ],
        beginnerProjects: [
            { title: "Obstacle-Avoiding Autonomous Mobile Robot (AMR)", difficulty: "Beginner", description: "Construct a differential-drive robot using an ESP32, ultrasonic sensors, and motor drivers with an obstacle avoidance algorithm." },
            { title: "3-DOF Robotic Arm with Inverse Kinematics", difficulty: "Intermediate", description: "Design 3D-printed arm joints and write inverse kinematics equations in Python to place objects at precise coordinates." },
            { title: "Indoor 2D SLAM Mapping in ROS 2 Gazebo", difficulty: "Intermediate", description: "Simulate a warehouse robot mapping an unknown room using simulated planar LiDAR and generating a 2D occupancy grid." }
        ],
        certifications: [
            { name: "ROS 2 Basics & Navigation Specialization", provider: "ConstructSim / Coursera" },
            { name: "Control of Mobile Robots", provider: "Georgia Tech / Coursera" },
            { name: "Autodesk Certified Professional in CAD for Mechanical Design", provider: "Autodesk" }
        ],
        internshipOpportunities: "Industrial automation plants, drone startups, defense research laboratories (DRDO labs), e-commerce warehouse robotics hubs (Amazon Robotics, GreyOrange).",
        jobRoles: ["Junior Robotics Engineer", "Embedded Systems Associate", "Robotics Software Engineer", "Automation Trainee"],
        careerProgression: "Junior Robotics Engineer → Robotics Engineer → Senior Autonomous Systems Engineer → Robotics Architect → VP of Hardware & Robotics",
        futureOpportunities: "High acceleration across warehouse logistics automation, robotic surgical assistants, agricultural harvesting drones, and defense surveillance."
    },

    {
        id: "electronics-engineer",
        name: "Electronics Engineer",
        category: "Core Engineering & Robotics",
        icon: "zap",
        tagline: "Design silicon chips, embedded printed circuits, and modern telecommunication systems.",
        description: "Electronics Engineers develop, design, and test electronic components, microprocessors, embedded boards, signal processors, and communication hardware. They bring hardware ideas from schematic diagrams to physical silicon and PCB manufacturing.",
        dayToDay: "Designing schematics and multi-layer PCBs in KiCAD or Altium, testing circuits with oscilloscopes and logic analyzers, writing low-level firmware in C, and testing compliance with electromagnetic standards.",
        relevantInterests: ["Electronics", "Problem Solving", "Mathematics", "Research", "Programming"],
        requiredSkills: {
            "C/C++": 4,
            "Mathematics": 4,
            "Problem Solving": 5,
            "Analytical Thinking": 4,
            "Python": 3,
            "Creativity": 2,
            "Statistics": 2,
            "Communication": 3,
            "Java": 1,
            "SQL": 1,
            "HTML/CSS": 1,
            "JavaScript": 1
        },
        relevantSubjects: ["Physics", "Mathematics", "Computer Science"],
        workPreferences: ["Solving technical problems", "Working with computers", "Research and innovation"],
        careerPreference: "Technical",
        academicProfile: {
            mandatory: "No statutory government license. A formal bachelor's degree in engineering (B.Tech/B.E.) is standard for core semiconductor, hardware, and defense electronics recruitment.",
            preferred: "B.Tech/B.E. in Electronics & Communication Engineering (ECE), Electrical Engineering (EE), or VLSI Design.",
            alternativeRoutes: "Electronics diploma holders who advance through lateral entry into B.Tech, or hardware makers who demonstrate advanced PCB design and open-hardware contributions.",
            schoolSubjects: "Class 10/12 Science stream with strong foundations in Physics and Mathematics (PCM).",
            undergraduateDegrees: [
                "B.Tech / B.E. in Electronics & Communication Engineering (ECE)",
                "B.Tech in Electrical & Electronics Engineering (EEE)",
                "B.Tech in VLSI & Microelectronics",
                "B.Sc. (Hons) in Electronics"
            ],
            postgraduateOptions: [
                "M.Tech in VLSI Design & Embedded Systems (IITs, NITs)",
                "M.Tech in Microelectronics & Semiconductor Technology",
                "MS in Electrical Engineering"
            ],
            admissionAndExams: [
                "JEE Main, JEE Advanced, and State CETs for B.Tech admission",
                "GATE (ECE / EE) for M.Tech admissions and recruitment in premier PSUs (BEL, BHEL, ISRO, DRDO)",
                "Entrance exams are route-dependent, not legally compulsory for private enterprise."
            ]
        },
        technicalSkills: ["PCB Schematic & Layout (KiCad, Altium Designer)", "Embedded C / Assembly", "Microcontroller Architectures (ARM Cortex, RISC-V)", "Digital & Analog Circuit Design", "VLSI Fundamentals (Verilog / VHDL)", "Lab Instrumentation (Oscilloscopes, Spectrum Analyzers)"],
        softSkills: ["Patience in Hardware Debugging", "Precision & Detail Orientation", "Safety Protocol Compliance", "Cross-Disciplinary Teamwork"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Analog & Digital Electronics Foundations",
                duration: "6 Weeks",
                skills: ["Semiconductor Physics (Diodes, Transistors, MOSFETs)", "Op-Amps", "Boolean Logic & Gate Design"],
                description: "Understand transistor switching, amplifier circuits, filtering, logic gates, flip-flops, and timing diagrams."
            },
            {
                stage: 2,
                title: "Stage 2: Microcontrollers & Embedded C",
                duration: "6 - 8 Weeks",
                skills: ["ARM Cortex-M Architecture", "Embedded C Programming", "GPIO, Timers, Interrupts"],
                description: "Write bare-metal register-level drivers for microcontrollers and understand serial communication protocols."
            },
            {
                stage: 3,
                title: "Stage 3: Printed Circuit Board (PCB) Design",
                duration: "6 Weeks",
                skills: ["KiCad / Altium", "Schematic Capture", "PCB Routing & Trace Impedance"],
                description: "Design a 2-to-4 layer printed circuit board, generate Gerber manufacturing files, and practice SMD soldering."
            },
            {
                stage: 4,
                title: "Stage 4: Hardware Description Languages (HDL) & VLSI",
                duration: "6 Weeks",
                skills: ["Verilog / VHDL", "FPGA Programming (Xilinx/Altera)", "RTL Synthesis"],
                description: "Write synthesizable Verilog code, simulate testbenches, and deploy custom logic onto an FPGA development board."
            },
            {
                stage: 5,
                title: "Stage 5: Testing, Compliance & Career Focus",
                duration: "4 Weeks",
                skills: ["EMC/EMI Principles", "Oscilloscope Debugging", "Hardware Interview Prep"],
                description: "Master hardware troubleshooting techniques and prepare for technical interviews at semiconductor and embedded companies."
            }
        ],
        beginnerProjects: [
            { title: "Custom IoT Environmental Monitor with KiCad PCB", difficulty: "Intermediate", description: "Design a custom PCB housing an ESP32, temperature/humidity sensors, and USB-C power delivery with battery charging circuitry." },
            { title: "Bare-Metal Digital Stopwatch on ARM Cortex-M", difficulty: "Beginner", description: "Write pure C code without external libraries to control 7-segment displays using timer interrupts and button debouncing." },
            { title: "Digital Calculator in Verilog on FPGA", difficulty: "Intermediate", description: "Implement an arithmetic logic unit (ALU) in Verilog HDL and verify functionality on an entry-level FPGA board." }
        ],
        certifications: [
            { name: "Semiconductor & VLSI Design Foundations", provider: "NPTEL / IIT Madras" },
            { name: "Embedded Systems - Shape the World", provider: "University of Texas / edX" },
            { name: "IPC PCB Design Fundamentals", provider: "IPC International" }
        ],
        internshipOpportunities: "Semiconductor giants (Intel, Texas Instruments, Qualcomm, MediaTek, AMD), consumer electronics brands, aerospace and defense contractors.",
        jobRoles: ["Graduate Engineer Trainee (GET)", "Junior Embedded Hardware Engineer", "PCB Layout Engineer", "VLSI Verification Engineer", "Test Engineer"],
        careerProgression: "Junior Hardware Engineer → Embedded Systems Engineer → Senior Hardware Architect → Principal Silicon Designer → VP of Hardware Engineering",
        futureOpportunities: "Phenomenal growth driven by India's Semiconductor Mission, 5G/6G wireless networks, EV powertrain electronics, and RISC-V open architecture."
    },

    {
        id: "digital-marketing-specialist",
        name: "Digital Marketing Specialist",
        category: "Design & Creative Tech",
        icon: "share-2",
        tagline: "Drive organic traffic, optimize online ad campaigns, and scale brand engagement.",
        description: "Digital Marketing Specialists design and execute multichannel online acquisition strategies across search engines, social media, paid ads, and email campaigns. They analyze performance data to increase conversions and maximize return on marketing spend.",
        dayToDay: "Managing Google Search and Meta ad campaigns, performing keyword research for SEO, writing engaging copy, analyzing conversion funnels in Google Analytics 4, and running A/B landing page split tests.",
        relevantInterests: ["Communication", "Creativity", "Business", "Data Analysis", "Designing"],
        requiredSkills: {
            "Communication": 5,
            "Creativity": 5,
            "Analytical Thinking": 4,
            "Problem Solving": 3,
            "HTML/CSS": 2,
            "Statistics": 2,
            "Mathematics": 2,
            "SQL": 1,
            "Python": 1,
            "JavaScript": 1,
            "C/C++": 1,
            "Java": 1
        },
        relevantSubjects: ["Business Studies", "English", "Economics", "Art/Design", "Computer Science"],
        workPreferences: ["Business and management", "Creating visual designs", "Working with data", "Working with people"],
        careerPreference: "Creative",
        academicProfile: {
            mandatory: "No statutory licensing required. Demonstrated campaign outcomes, analytical literacy, and verified platform certifications carry substantial weight.",
            preferred: "BBA in Marketing, B.Com, B.A. in Mass Communication / Journalism, or B.Tech with digital marketing interest.",
            alternativeRoutes: "Wide-open field for candidates from any academic background who launch independent websites, run social media growth experiments, and build paid ad portfolios.",
            schoolSubjects: "Any stream in Class 10/12 (Commerce, Arts, or Science) with strong written communication and curiosity about business metrics.",
            undergraduateDegrees: [
                "BBA in Digital Marketing / Marketing Management",
                "B.A. in Journalism & Mass Communication (BJMC)",
                "B.Com with e-Commerce / Advertising",
                "B.Sc. in Visual Communication"
            ],
            postgraduateOptions: [
                "MBA in Marketing / Digital Business",
                "M.A. in Media & Communication",
                "Post Graduate Diploma in Management (PGDM)"
            ],
            admissionAndExams: [
                "Standard college entrance examinations for formal university courses.",
                "Platform certifications (Google Ads, Meta Certified) are accepted for direct agency and startup employment."
            ]
        },
        technicalSkills: ["Search Engine Optimization (SEO & Keyword Research)", "Google Ads (Search, Display, Performance Max)", "Meta Ads Manager (Facebook/Instagram Ads)", "Google Analytics 4 (GA4) & Google Tag Manager", "Email Marketing & Marketing Automation (HubSpot, Mailchimp)", "Basic HTML/CSS & CMS (WordPress, Shopify)"],
        softSkills: ["Persuasive Copywriting", "Consumer Empathy", "Analytical Mindset", "Creative Experimentation", "Budget Discipline"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Marketing Fundamentals & Funnels",
                duration: "4 Weeks",
                skills: ["AIDA Funnel", "Customer Personas", "Value Proposition Design"],
                description: "Learn how modern buyers discover brands, pass through awareness, consideration, and conversion stages."
            },
            {
                stage: 2,
                title: "Stage 2: Content Marketing & Search Engine Optimization (SEO)",
                duration: "6 Weeks",
                skills: ["On-Page SEO", "Technical SEO Basics", "Keyword Research (Ahrefs/SEMrush)"],
                description: "Build search-optimized content, master meta tags, internal linking, site speed metrics, and backlink strategies."
            },
            {
                stage: 3,
                title: "Stage 3: Paid Performance Advertising",
                duration: "6 Weeks",
                skills: ["Google Ads Search Campaigns", "Meta Ads Auction & Bidding", "Retargeting Pixels"],
                description: "Structure ad accounts, write high-converting headlines, set up conversion tracking pixels, and optimize ROAS."
            },
            {
                stage: 4,
                title: "Stage 4: Web Analytics & Conversion Rate Optimization (CRO)",
                duration: "4 Weeks",
                skills: ["Google Analytics 4 (GA4)", "Google Tag Manager", "A/B Testing"],
                description: "Track custom events, analyze drop-off rates in checkout funnels, and test landing page variants."
            },
            {
                stage: 5,
                title: "Stage 5: Portfolio Building & Real Campaign Case Studies",
                duration: "4 Weeks",
                skills: ["Campaign Performance Report", "Agency Pitch Deck", "Certification Exams"],
                description: "Run a live micro-budget campaign, compile a documented ROI case study, and earn Google & Meta certificates."
            }
        ],
        beginnerProjects: [
            { title: "Niche Affiliate Blog with SEO Ranking Strategy", difficulty: "Beginner", description: "Launch a WordPress blog on a specific niche topic, optimize 5 in-depth articles for long-tail keywords, and monitor Google Search Console impressions." },
            { title: "Meta Lead Generation Ad Campaign with A/B Creative Testing", difficulty: "Intermediate", description: "Design two distinct visual ad creatives in Canva, run a targeted campaign with clear conversion goals, and calculate Cost Per Lead (CPL)." },
            { title: "Comprehensive GA4 E-Commerce Audit & Event Tracking Setup", difficulty: "Intermediate", description: "Implement Google Tag Manager custom events to track 'Add to Cart', 'Begin Checkout', and 'Purchase' on a demo store." }
        ],
        certifications: [
            { name: "Google Ads Search Certification", provider: "Google Skillshop" },
            { name: "Google Analytics 4 Certification", provider: "Google Skillshop" },
            { name: "Meta Certified Digital Marketing Associate", provider: "Meta Blueprint" },
            { name: "HubSpot Inbound Marketing Certification", provider: "HubSpot Academy" }
        ],
        internshipOpportunities: "Digital marketing agencies, direct-to-consumer (D2C) e-commerce brands, tech startups, and non-profit organizations actively hire interns.",
        jobRoles: ["Digital Marketing Executive", "SEO Specialist", "PPC / Performance Marketing Associate", "Social Media Strategist", "Content Marketing Associate"],
        careerProgression: "Digital Marketing Executive → Growth Marketing Manager → Performance Marketing Lead → Chief Marketing Officer (CMO)",
        futureOpportunities: "High evergreen evolution with AI-generated copy, predictive ad algorithms, omnichannel customer data platforms, and influencer partnership scaling."
    },

    {
        id: "product-manager",
        name: "Product Manager",
        category: "Business & Product",
        icon: "briefcase",
        tagline: "Define product strategy, guide cross-functional teams, and build products customers love.",
        description: "Product Managers sit at the intersection of business, technology, and user experience. They discover what problems are worth solving, define product roadmaps, prioritize engineering backlogs, and ensure products achieve strong market adoption.",
        dayToDay: "Synthesizing customer feedback, prioritizing the sprint backlog with engineering and design leads, drafting Product Requirement Documents (PRDs), tracking north star metrics, and presenting quarterly roadmaps to leadership.",
        relevantInterests: ["Management", "Business", "Communication", "Problem Solving", "Creativity", "Data Analysis"],
        requiredSkills: {
            "Communication": 5,
            "Problem Solving": 5,
            "Analytical Thinking": 4,
            "Creativity": 4,
            "SQL": 2,
            "Python": 2,
            "HTML/CSS": 2,
            "Statistics": 2,
            "Mathematics": 2,
            "JavaScript": 1,
            "C/C++": 1,
            "Java": 1
        },
        relevantSubjects: ["Business Studies", "Economics", "Computer Science", "English", "Mathematics"],
        workPreferences: ["Business and management", "Working with people", "Solving technical problems", "Research and innovation"],
        careerPreference: "Business",
        academicProfile: {
            mandatory: "No statutory government license. An undergraduate degree followed by demonstrated leadership or an MBA is standard in tier-1 product organizations.",
            preferred: "B.Tech/B.E. in Computer Science or engineering + MBA from a premier institute, or degrees in Design, Business, or Economics.",
            alternativeRoutes: "Associate Product Manager (APM) programs recruit fresh graduates from engineering and business backgrounds who display exceptional problem-solving and product intuition.",
            schoolSubjects: "Any stream with strong analytical, communication, and quantitative aptitude (Science or Commerce with Mathematics).",
            undergraduateDegrees: [
                "B.Tech / B.E. in Computer Science or any engineering branch",
                "BBA / B.Com with product focus",
                "B.Des in Interaction Design"
            ],
            postgraduateOptions: [
                "MBA from premier institutions (IIMs, ISB, global top business schools)",
                "Master in Product Management (MPM)"
            ],
            admissionAndExams: [
                "CAT, GMAT, GRE for premier MBA programs.",
                "Direct APM competitive assessments (e.g. Flipkart, Google, Uber APM programs) based on product design and problem-solving rounds."
            ]
        },
        technicalSkills: ["Product Requirement Documents (PRDs)", "Agile / Scrum (Jira, Linear)", "User Metrics & Analytics (Mixpanel, Amplitude)", "Wireframing & Prototyping (Figma)", "A/B Testing & Experimentation", "Basic SQL for Product Data"],
        softSkills: ["Influence Without Authority", "Customer Empathy", "Strategic Prioritization", "Executive Presentation", "Decisive Judgment Under Ambiguity"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Product Fundamentals & Customer Discovery",
                duration: "4 - 5 Weeks",
                skills: ["Product Thinking", "Customer Discovery Interviews", "Jobs-to-be-Done (JTBD) Framework"],
                description: "Learn how to differentiate between customer wants and underlying core pain points, and define minimum viable products (MVPs)."
            },
            {
                stage: 2,
                title: "Stage 2: Technical & Design Fluency for PMs",
                duration: "5 Weeks",
                skills: ["Basic Architecture & APIs", "Wireframing in Figma", "Agile Sprints"],
                description: "Understand how web and mobile apps communicate with databases and collaborate smoothly with UX designers and software engineers."
            },
            {
                stage: 3,
                title: "Stage 3: Product Metrics & Data-Driven Decision Making",
                duration: "6 Weeks",
                skills: ["North Star Metric", "Retention & Cohort Analysis", "A/B Testing & Funnels"],
                description: "Master user retention curves, churn drivers, and setting up experimentation frameworks using tools like Amplitude and Mixpanel."
            },
            {
                stage: 4,
                title: "Stage 4: Product Teardown & Comprehensive PRD",
                duration: "5 Weeks",
                skills: ["PRD Writing", "Feature Prioritization (RICE Framework)", "Go-to-Market (GTM) Strategy"],
                description: "Write an exhaustive Product Requirement Document solving a real friction point in an existing product (e.g. Swiggy, WhatsApp, Spotify)."
            },
            {
                stage: 5,
                title: "Stage 5: APM Interview Preparation & Case Studies",
                duration: "4 Weeks",
                skills: ["Product Design Questions", "Root Cause Analysis", "Behavioral & Estimation Questions"],
                description: "Practice answering classic PM questions ('Design an ATM for the blind', 'Why is Uber rides volume down 10%?')."
            }
        ],
        beginnerProjects: [
            { title: "In-Depth Product Teardown and Redesign Case Study", difficulty: "Intermediate", description: "Deconstruct an existing mobile app's onboarding flow, identify drop-off barriers, and draft a complete PRD with prioritized feature fixes." },
            { title: "No-Code MVP Product Launch with User Testing", difficulty: "Beginner", description: "Build a functional prototype of a micro-service using tools like Airtable and Softr, acquiring 20 active trial users to gather qualitative feedback." },
            { title: "North Star Metric Dashboard and Funnel Analysis", difficulty: "Intermediate", description: "Synthesize mock app telemetry in Google Sheets or Amplitude to evaluate 30-day cohort retention and identify leading activation indicators." }
        ],
        certifications: [
            { name: "Product Management First Steps & Fundamentals", provider: "LinkedIn Learning" },
            { name: "Google Project Management Professional Certificate", provider: "Google / Coursera" },
            { name: "Certified Scrum Product Owner (CSPO)", provider: "Scrum Alliance" }
        ],
        internshipOpportunities: "Associate Product Manager (APM) internships at product unicorns (Swiggy, Zomato, Razorpay), early-stage venture-funded startups, and tech accelerators.",
        jobRoles: ["Associate Product Manager (APM)", "Junior Product Analyst", "Product Operations Associate", "Product Marketing Trainee"],
        careerProgression: "Associate PM → Product Manager → Senior Product Manager → Group PM / Director of Product → Chief Product Officer (CPO)",
        futureOpportunities: "High strategic organizational demand as companies pivot toward AI-native product experiences, product-led growth (PLG), and specialized API/platform PMs."
    },

    {
        id: "research-scientist",
        name: "Research Scientist",
        category: "Applied Sciences & Research",
        icon: "microscope",
        tagline: "Pioneer new scientific discoveries, mathematical algorithms, and novel technologies.",
        description: "Research Scientists design controlled experimental studies, advance theoretical models, and develop breakthrough innovations across computing, artificial intelligence, biotechnology, physics, and materials science.",
        dayToDay: "Reviewing scientific literature, formulating mathematical proofs or hypotheses, running simulated experiments on high-performance compute clusters, writing research papers for peer-reviewed conferences, and collaborating with academic peers.",
        relevantInterests: ["Research", "Mathematics", "Problem Solving", "Artificial Intelligence", "Programming"],
        requiredSkills: {
            "Analytical Thinking": 5,
            "Problem Solving": 5,
            "Mathematics": 5,
            "Statistics": 5,
            "Python": 4,
            "C/C++": 3,
            "Communication": 4,
            "Creativity": 4,
            "SQL": 2,
            "Java": 2,
            "HTML/CSS": 1,
            "JavaScript": 1
        },
        relevantSubjects: ["Mathematics", "Physics", "Computer Science", "Statistics"],
        workPreferences: ["Research and innovation", "Solving technical problems", "Working with data", "Working with computers"],
        careerPreference: "Research",
        academicProfile: {
            mandatory: "No general government license for private corporate labs. However, an advanced postgraduate degree (M.Tech/M.Sc.) or Ph.D. is universally expected for independent research positions.",
            preferred: "Ph.D. or Master's in Computer Science, Applied Mathematics, Physics, Computational Biology, or related research domain.",
            alternativeRoutes: "Exceptional undergraduate researchers who publish peer-reviewed papers at top conferences (NeurIPS, CVPR, ICML) can enter industry research labs directly as Pre-Doctoral Researchers or Research Associates.",
            schoolSubjects: "Class 10/12 Science stream with strong mastery of Mathematics and Physics.",
            undergraduateDegrees: [
                "B.Tech in Computer Science / Engineering Physics / Electrical",
                "B.Sc. / BS-MS Dual Degree in Mathematics, Physics, or Computer Science (IISc, IISERs, IITs)",
                "Integrated M.Sc. in Data Science or Applied Statistics"
            ],
            postgraduateOptions: [
                "Ph.D. in Computer Science, AI, or Theoretical Physics",
                "M.Tech by Research (IISc, IITs)",
                "MS / Ph.D. at premier international research universities"
            ],
            admissionAndExams: [
                "JEE Advanced for BS / B.Tech programs at IITs / IISc",
                "IAT (IISER Aptitude Test) / NEST for premier science research institutes",
                "GATE or CSIR-UGC NET (JRF) for national research fellowships and Ph.D. admissions in India",
                "Examinations grant access to premier government-funded research programs."
            ]
        },
        technicalSkills: ["Scientific Programming (Python, C++, Julia)", "High Performance Computing & GPU Acceleration", "Experimental Design & Statistical Rigor", "Mathematical Modeling & Simulation", "LaTeX Technical Writing", "Scientific Literature Analysis (ArXiv)"],
        softSkills: ["Intellectual Curiosity", "Perseverance Through Failure", "Clarity in Technical Writing", "Academic Peer Review", "Critical Skepticism"],
        learningRoadmap: [
            {
                stage: 1,
                title: "Stage 1: Advanced Mathematics & Programming",
                duration: "8 Weeks",
                skills: ["Linear Algebra", "Calculus & Differential Equations", "Python (NumPy, SciPy)"],
                description: "Deep dive into rigorous proof-based mathematics, numerical analysis, and vector calculus."
            },
            {
                stage: 2,
                title: "Stage 2: Scientific Research Methodology & Literature Review",
                duration: "6 Weeks",
                skills: ["Literature Synthesis", "LaTeX Typesetting", "Reproducibility in Science"],
                description: "Learn how to dissect ArXiv research papers, replicate published results, and write manuscripts in Overleaf/LaTeX."
            },
            {
                stage: 3,
                title: "Stage 3: Advanced Domain Modeling & Experimentation",
                duration: "10 Weeks",
                skills: ["Algorithm Design", "Simulation Frameworks", "High Performance Computing"],
                description: "Formulate a novel hypothesis, design a controlled benchmark experiment, and run evaluations."
            },
            {
                stage: 4,
                title: "Stage 4: Manuscript Preparation & Conference Submission",
                duration: "8 Weeks",
                skills: ["Academic Writing", "Peer Review Process", "Open-Source Benchmark Release"],
                description: "Author a scientific paper, document open benchmarks on GitHub, and submit to an undergraduate or peer-reviewed workshop."
            },
            {
                stage: 5,
                title: "Stage 5: Research Fellowship & Lab Applications",
                duration: "4 Weeks",
                skills: ["Research Statement Writing", "Academic Presentation Skills", "Grant Writing Basics"],
                description: "Prepare your statement of purpose (SOP), build an academic portfolio, and apply for Pre-Doc or Ph.D. programs."
            }
        ],
        beginnerProjects: [
            { title: "Empirical Replication of a Landmark Deep Learning Paper", difficulty: "Intermediate", description: "Replicate the exact experimental architecture, training hyperparameters, and ablation studies of a recent open-source AI paper." },
            { title: "Monte Carlo Simulation of Complex Physical Systems", difficulty: "Beginner", description: "Implement a statistical Monte Carlo simulation in Python/NumPy to model molecular diffusion or financial option pricing." },
            { title: "Novel Benchmark Evaluation on Open Datasets", difficulty: "Intermediate", description: "Design a standardized stress-test benchmark measuring the robustness of machine learning models against noise." }
        ],
        certifications: [
            { name: "Scientific Computing with Python", provider: "freeCodeCamp" },
            { name: "Mathematics for Machine Learning and Data Science Specialization", provider: "DeepLearning.AI / Coursera" },
            { name: "CSIR-UGC NET Junior Research Fellowship (JRF) Qualified", provider: "NTA / CSIR India" }
        ],
        internshipOpportunities: "Premier corporate labs (Google Research India, Microsoft Research Lab India, IBM Research), academic labs (IISc, IITs, TIFR), and government R&D institutions (ISRO, DRDO).",
        jobRoles: ["Research Assistant", "Pre-Doctoral Fellow", "Research Engineer", "Junior Scientist", "Computational Modeler"],
        careerProgression: "Pre-Doctoral Fellow → Research Scientist → Senior Research Scientist → Principal Scientist / Lab Director → Fellow / Chief Scientist",
        futureOpportunities: "High strategic prestige and impact in Quantum Computing, Neuromorphic AI, Clean Energy Technologies, Synthetic Biology, and Climate Modeling."
    }
];

// Helper functions for accessing careers
const CareersData = {
    getAll() {
        return CAREERS_DATA;
    },

    getById(id) {
        if (!id) return null;
        return CAREERS_DATA.find(c => c.id.toLowerCase() === id.toLowerCase()) || null;
    },

    getCategories() {
        const categories = new Set();
        CAREERS_DATA.forEach(c => categories.add(c.category));
        return Array.from(categories);
    },

    getByCategory(category) {
        if (!category || category === 'All') return CAREERS_DATA;
        return CAREERS_DATA.filter(c => c.category === category);
    },

    search(query) {
        if (!query) return CAREERS_DATA;
        const q = query.toLowerCase().trim();
        return CAREERS_DATA.filter(c => 
            c.name.toLowerCase().includes(q) ||
            c.tagline.toLowerCase().includes(q) ||
            c.description.toLowerCase().includes(q) ||
            c.category.toLowerCase().includes(q) ||
            c.technicalSkills.some(s => s.toLowerCase().includes(q)) ||
            c.relevantInterests.some(i => i.toLowerCase().includes(q))
        );
    }
};

// Export to window
window.CAREERS_DATA = CAREERS_DATA;
window.CareersData = CareersData;
