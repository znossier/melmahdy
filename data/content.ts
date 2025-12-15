export const personalInfo = {
  name: "Moustafa El Mahdy",
  title: "Data Scientist",
  status: "Available for work",
  location: "Cairo, EG",
  phone: "+20 1000690308",
  email: "moustafa.elmahdy@aucegypt.edu",
  cvGoogleDocId: "1UiWCpxuz0zYJVcg3rlAUngoAHQ_XDohop6_yaX4EFZs",
  socialLinks: {
    github: "https://github.com/moustafaelmahdy",
    linkedin: "https://www.linkedin.com/in/moustafa-elmahdy/",
  },
};

export const about = `I work with data to make it scalable, reliable, and performant, even when things get messy. I've spent time across analytics, machine learning, and data engineering, building pipelines and dashboards that teams depend on, and running distributed ML experiments that became published research. Right now, I'm focused on financial and fintech problems, especially around financial data and modeling, while continuing to publish applied research.`;

export const skills = [
  "Python",
  "R",
  "SQL",
  "C++",
  "TensorFlow",
  "Scikit-Learn",
  "Keras",
  "Hadoop",
  "PySpark",
  "H2O",
  "Power BI",
  "PyDash",
];

// Tech stack with logos for the Tech Stack section (only apps/programs/tools)
export const techStack = [
  { name: "H2O.ai", logo: "h2o" },
  { name: "Power BI", logo: "powerbi" },
  { name: "Hadoop", logo: "hadoop" },
  { name: "Spark", logo: "spark" },
  { name: "Google Analytics", logo: "google-analytics" },
  { name: "Informatica", logo: "informatica" },
  { name: "VSCode", logo: "vscode" },
  { name: "Git", logo: "git" },
  { name: "Jupyter", logo: "jupyter" },
  { name: "Google Colab", logo: "google-colab" },
];

export const experience = [
  {
    company: "Spiralyze",
    position: "Analytics Insights Associate",
    startDate: "Feb 2025",
    endDate: "Present",
    location: "Remote",
    jobType: "Full-time",
    logo: "spiralyze",
    bullets: [
      "Optimized A/B test performance for CRO clients by analyzing experiment data for statistical significance, uplift impact, and behavioral trends to support test decisions",
      "Monitored user flows, experiment engagement, and funnel metrics using Google Analytics and internal dashboards",
      "Built and maintained Conversion Maps and Pre-Flight reports summarizing historical trends, behavioral patterns, and baseline metrics to guide strategic experiment planning",
      "Translated complex datasets into client-ready insights and collaborated with Project Managers to align deliverables with project timelines",
      "Applied down-funnel analysis to diagnose conversion barriers, validate tracking accuracy, and uncover optimization opportunities",
    ],
  },
  {
    company: "valU",
    position: "Data Analytics & Program Management Specialist",
    startDate: "Jun 2024",
    endDate: "Jan 2025",
    location: "Cairo, Egypt",
    jobType: "Full-time",
    logo: "valu",
    bullets: [
      "Extracted, transformed, and analyzed B2B/B2C datasets, ensuring data integrity for strategic reporting",
      "Built Power BI dashboards visualizing B2B/B2C metrics including vendor performance, deal trends, and business growth",
      "Conducted pattern analysis on customer behavior and vendor performance, identifying high-value accounts and providing recommendations for retention strategies",
      "Designed and implemented new data structures to streamline B2B/B2C data tracking, enabling real-time analytics",
      "Collaborated with cross-functional teams to ensure data accuracy and developed insights on vendor acquisition, deal success rates, and client engagement to optimize onboarding and retention",
    ],
  },
  {
    company: "AUC - Dean of Students Office",
    position: "Research Analyst",
    startDate: "Dec 2022",
    endDate: "Feb 2023",
    location: "Cairo, Egypt",
    jobType: "Part-time",
    logo: "auc",
    bullets: [
      "Conducted qualitative and quantitative research and data analysis to enhance co-curricular student programs and mentoring initiatives",
    ],
  },
  {
    company: "Arab African International Bank (AAIB)",
    position: "Data Management Intern",
    startDate: "Jul 2022",
    endDate: "Sep 2023",
    location: "Cairo, Egypt",
    jobType: "Internship",
    logo: "aaib",
    bullets: [
      "Gained hands-on Agile experience through workshops and participated in data process mapping, identifying key data actors and workflow roles",
      "Designed the bank's data model with conceptual and logical diagrams, and established data quality standards for executive dashboards",
      "Built SQL and Power BI dashboards tracking KPIs for executive decision-making, providing real-time banking trend insights",
      "Conducted data quality checks, implemented cleansing rules, and parsed XML files using Python and SQL. Gained exposure to Informatica ETL tools for automated data flow",
    ],
  },
];

export const education = [
  {
    institution: "The American University in Cairo (AUC)",
    degree: "Bachelor of Science in Data Science, Minor in Accounting",
    startDate: "Sep 2020",
    endDate: "Jun 2024",
    logo: "auc",
    bullets: [
      "Key Coursework: Machine Learning, Deep Learning, Big Data Technologies, Data Mining, Time Series Analysis, Statistical Inference, Multivariate Analysis, Applied Regression Methods, Data Visualization, Simulation, Stochastic Processes, Optimization",
    ],
  },
  {
    institution: "Tomorrow's Leaders Gender Scholars Program (TLS)",
    degree: "Full Year Scholarship",
    startDate: "Sep 2023",
    endDate: "Jun 2024",
    logo: "mepi",
    bullets: [
      "Conducted research on gender bias in medical data and led a civic engagement project promoting gender equality in careers",
    ],
  },
  {
    institution: "The International School of Elite Education",
    degree: "IGCSE",
    startDate: "Sep 2017",
    endDate: "Jun 2020",
    logo: "isee",
  },
];

export const publications = [
  {
    title: "Sentiment Analysis on Twitter Dataset Using Apache Spark and H2O Machine Learning Framework: A Comparative Study",
    authors: "Gabriel, K., El Mahdy, M. E., Ghandour, M., Hany, M., & Elghamrawy, S.",
    venue: "2025 International Telecommunications Conference (ITC-Egypt)",
    pages: "pp. 23–29",
    publisher: "IEEE",
    year: "2025",
    link: "https://doi.org/10.1109/ITC-Egypt66095.2025.11186683",
  },
];

export const recognition = [
  {
    title: "Well-rounded AUCian, Professional and Holistic Co-curricular Experiences",
    organization: "AUC Life Mentorship Program",
    year: "2023",
  },
  {
    title: "Academic Committee's Honorable Mention",
    organization: "EMUN",
    year: "2019",
  },
  {
    title: "Health and Safety Winner",
    organization: "EGYPS Youth Engagement Program",
    year: "2019",
  },
  {
    title: "Best Delegate",
    organization: "EMUN and MUN inc.",
    year: "2017",
  },
];

// Section navigation metadata
export const sections = [
  { id: "about", label: "About", icon: "User" },
  { id: "skills", label: "Skills", icon: "Code" },
  { id: "tech-stack", label: "Tech Stack", icon: "Layers" },
  { id: "experience", label: "Experience", icon: "Briefcase" },
  { id: "education", label: "Education", icon: "GraduationCap" },
  { id: "publications", label: "Publications", icon: "BookOpen" },
  { id: "recognition", label: "Recognition", icon: "Award" },
];

// Skill categories
export const skillCategories = {
  Languages: ["Python", "R", "SQL", "C++"],
  "ML Frameworks": ["TensorFlow", "Scikit-Learn", "Keras", "XGBoost"],
  "Big Data": ["Hadoop", "PySpark", "H2O", "Hive"],
  Visualization: ["Power BI", "PyDash", "Tableau", "Google Analytics"],
};

// Tech stack descriptions for tooltips (only for apps/tools/programs)
export const techStackDescriptions: { [key: string]: string } = {
  "H2O.ai": "Open-source machine learning platform for building and deploying ML models",
  "Power BI": "Business analytics tool for data visualization and reporting",
  "Hadoop": "Distributed storage and processing framework for big data",
  "Spark": "Unified analytics engine for large-scale data processing",
  "Google Analytics": "Web analytics service for tracking and reporting website traffic and user behavior",
  "Informatica": "Enterprise data integration and ETL platform for data management and transformation",
  "VSCode": "Lightweight code editor with extensive extensions for development and data science",
  "Git": "Distributed version control system for tracking changes in code and collaborative development",
  "Jupyter": "Open-source web application for creating and sharing interactive notebooks with code, visualizations, and documentation",
  "Google Colab": "Cloud-based Jupyter notebook environment for machine learning and data analysis with free GPU access",
};

