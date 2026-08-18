// ================================================================
//  resumeData.js  —  Edit this file to update your entire portfolio
// ================================================================

export const personalInfo = {
  name:       "Nafees Ahemad",
  fullName:   "Nafees Ahemad Mohammad Idrees",
  title:      "Full Stack Developer & Web Designer",
  initials:   "NA",
  email:      "nafeesahemad999@gmail.com",
  phone:      "+91-9021077731",
  location:   " Pune, Maharashtra",
  github:     "https://github.com/nafeesahemad999-sys",       
  linkedin:   "https://www.linkedin.com/in/nafees-ahemad-17057b2a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",      
  resumePdf:  "/Nafees_Resume.pdf",         
  bio: `A dedicated BCA graduate with a strong foundation in web development
        and a passion for technology. Skilled in HTML, CSS, JavaScript, React.js,
        MongoDB, PHP, Python, and more — building dynamic, responsive platforms
        that solve real problems.`,
  aboutParagraphs: [
    `I'm <strong>Nafees Ahemad Mohammad Idrees</strong>, a BCA graduate from
     G.H. Raisoni Institute of Engineering & Business Management, Jalgaon,
     with a CGPA of 6.98.`,
    `I specialize in building responsive, user-friendly web applications using
     modern technologies. From e-commerce platforms and music apps to pharmacy
     management systems, I've shipped full-stack projects end-to-end.`,
    `Beyond coding, I hold certifications in Google Analytics, Ethical Hacking (Linux),
     Machine Learning & Data Science with Python, and a Tinder Clone certificate
     from GDSC KIIT — always expanding my skill set.`,
  ],
  stats: [
    { id: "projects", label: "Projects Built",   target: 4,  suffix: ""  },
    { id: "certs",    label: "Certifications",   target: 4,  suffix: ""  },
    { id: "stack",    label: "Tech Stack Items", target: 12, suffix: "+" },
    { id: "BCA",      label: "BCA CGPA",         target: 6.98, suffix: "" },
  ],
};

export const typingPhrases = [
  "HTML5 & CSS3 Developer",
  "React.js Builder",
  "Full-Stack Engineer",
  "MongoDB Developer",
  "UI/UX Designer",
  "Ethical Hacking Enthusiast",
  "Python & ML Explorer",
];

export const skillCategories = [
  {
    title: "⚡ Frontend",
    skills: [
      { name: "HTML5",       pct: 90 },
      { name: "CSS3",        pct: 85 },
      { name: "JavaScript",  pct: 80 },
      { name: "React.js",    pct: 75 },
    ],
  },
  {
    title: "🔧 Backend",
    skills: [
      { name: "PHP",      pct: 75 },
      { name: "Python",   pct: 65 },
      { name: "Java",     pct: 60 },
      { name: "Apache2",  pct: 60 },
    ],
  },
  {
    title: "🗄️ Database",
    skills: [
      { name: "MongoDB", pct: 75 },
      { name: "MySQL",   pct: 70 },
    ],
  },
  {
    title: "🛠️ Tools & Other",
    skills: [
      { name: "MS Office Suite",         pct: 85 },
      { name: "Graphic Design",          pct: 70 },
      { name: "Linux / Ethical Hacking", pct: 60 },
      { name: "Google Analytics",        pct: 70 },
    ],
  },
];

export const projects = [
  {
    id:     "01",
    period: "JAN 2023 – MAY 2023",
    title:  "Online Mini Mall",
    desc:   `A user-friendly e-commerce website designed for daily household needs,
             targeting housewives. Fully dynamic and responsive platform with
             product listings, cart, and checkout flow.`,
    tags:   ["React.js", "MongoDB", "JavaScript", "HTML/CSS"],
    github: "https://github.com/nafeesahemad999-sys",  // ← replace
    demo:   "#",                    // ← replace
  },
  {
    id:     "02",
    period: "JUN 2023 – NOV 2023",
    title:  "Music Application",
    desc:   `Full-stack music streaming application with a rich frontend and robust
             backend. Features include song browsing, playback, and user management
             backed by a MySQL database.`,
    tags:   ["Java", "MySQL", "PHP", "Apache2", "HTML/CSS/JS"],
    github: "https://github.com/nafeesahemad999-sys",
    demo:   "#",
  },
  {
    id:     "03",
    period: "JAN 2022 – MAY 2022",
    title:  "Online Fruit Shop",
    desc:   `Responsive e-commerce website for purchasing fruits, designed to provide
             a seamless shopping experience with a clean UI and dynamic product
             management backend.`,
    tags:   ["HTML/CSS", "JavaScript", "PHP"],
    github: "https://github.com/nafeesahemad999-sys",
    demo:   "#",
  },
  {
    id:     "04",
    period: "JUN 2022 – NOV 2022",
    title:  "Pharmacy Management System",
    desc:   `Web-based system to streamline pharmacy operations including inventory
             management, prescription tracking, and reporting using multiple
             server-side technologies.`,
    tags:   ["PHP", "Python", "Java", ".NET", "HTML/CSS/JS"],
    github: "https://github.com/nafeesahemad999-sys",
    demo:   "#",
  },
];

export const educationTimeline = [
  {
    type:   "edu",
    period: "2021 – 2024",
    title:  "Bachelor of Computer Applications (BCA)",
    sub:    "G.H. Raisoni Institute of Engineering & Business Management, Jalgaon",
    detail: "CGPA: 69.87 | Specialized in web development, programming, and software engineering fundamentals.",
  },
  {
    type:   "edu",
    period: "2019 – 2021",
    title:  "Higher Secondary Certificate (HSC)",
    sub:    "Ali Allana Urdu High School and Science Junior College, Malkapur",
    detail: "Percentage: 84.85% — Strong foundation in Science and Mathematics.",
  },
  {
    type:   "edu",
    period: "2019",
    title:  "Secondary School Certificate (SSC)",
    sub:    "Z.A. Urdu High School & Junior College, Malkapur",
    detail: "Percentage: 66.68%",
  },
  {
    type:   "cert",
    period: "CERTIFICATION",
    title:  "Tinder Clone — GDSC KIIT Chapter",
    sub:    "HTML, CSS & JavaScript",
    detail: "Built and deployed a Tinder-like swipe UI as part of a GDSC challenge project.",
  },
  {
    type:   "cert",
    period: "CERTIFICATION",
    title:  "Advanced Google Analytics",
    sub:    "Google Analytics Academy",
    detail: "Certified in advanced tracking, reporting, goals, and conversion analytics on Google's platform.",
  },
  {
    type:   "cert",
    period: "CERTIFICATION",
    title:  "Introduction to Ethical Hacking",
    sub:    "Great Learning Academy — Linux OS",
    detail: "Penetration testing fundamentals, vulnerability assessment, and ethical hacking using Linux.",
  },
  {
    type:   "cert",
    period: "CERTIFICATION",
    title:  "Machine Learning & Data Science with Python",
    sub:    "PHN Technology — Online Workshop",
    detail: "Hands-on workshop covering ML algorithms, data preprocessing, visualization, and model building in Python.",
  },
];

export const services = [
  { icon: "⚡", title: "Frontend Development",  desc: "Pixel-perfect, responsive UIs using HTML5, CSS3, JavaScript, and React.js with smooth animations." },
  { icon: "⚛",  title: "React Development",      desc: "Component-driven apps with React.js, hooks, state management, and MongoDB integration." },
  { icon: "🌐", title: "Full-Stack Websites",    desc: "End-to-end web apps from database design to frontend, using PHP, Java, MySQL, and MongoDB." },
  { icon: "🎨", title: "UI/UX Design",           desc: "Clean, modern interface design with a focus on usability, responsiveness, and user experience." },
  { icon: "🛒", title: "E-Commerce Platforms",   desc: "Custom online stores — from product listings to cart and checkout flows." },
  { icon: "📊", title: "Web Analytics Setup",    desc: "Google Analytics integration, goal tracking, and conversion funnel setup for data-driven decisions." },
];

