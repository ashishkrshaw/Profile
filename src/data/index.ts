import type { Profile, Project, FloatingTag, FeatureCard } from '../types';

// Skill category type
export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  gradient: string;
  skills: string[];
}

export const profile: Profile = {
  name: "Ashish Kumar Shaw",
  title: "Cloud & Backend Developer",
  subtitle: "AWS | Python | Security",
  bio: [
    "☁️ I'm a Cloud & Backend Developer focused on building secure, scalable applications with Python and AWS.",
    "🔒 Specialized in AWS Security (IAM, Security Groups, S3 Policies) and DevSecOps practices.",
    "🛠️ Proficient in FastAPI, Boto3, PostgreSQL, and Docker for building modern backend services.",
    "💡 Passionate about automation, API security (OWASP Top 10), and cloud infrastructure.",
    "🚀 Looking for opportunities in Cloud Development, Backend Engineering, and Security roles."
  ],
  contact: {
    email: "sawashishkumar327@gmail.com",
    phone: "+91 7482947099",
    github: "https://github.com/ashishkrshaw",
    linkedin: "https://www.linkedin.com/in/asksaw/",
    whatsapp: "https://wa.me/917482947099"
  },
  profileImage: "/images/profile/ashish1.png",
  profileImageFallback: "https://ui-avatars.com/api/?name=Ashish+Kumar+Shaw&size=400&background=667eea&color=ffffff",
  resumeFile: "/Ashish Kumar Shaw.pdf",
  badges: [
    { icon: "FaAws", text: "AWS Cloud", color: "orange" },
    { icon: "FaPython", text: "Python Developer", color: "blue" },
    { icon: "FaShieldAlt", text: "Security Focused", color: "red" }
  ],
  typingTexts: [
    "Backend Developer",
    "Cloud Engineer",
    "Security Enthusiast"
  ]
};

// Updated skills with your actual skillset - organized by category
export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'FaPython',
    color: '#3776AB',
    gradient: 'linear-gradient(135deg, #3776AB, #FFD43B)',
    skills: ['Python', 'FastAPI', 'Boto3', 'RESTful APIs', 'Async Programming', 'Pydantic']
  },
  {
    id: 'database',
    title: 'Databases',
    icon: 'FaDatabase',
    color: '#336791',
    gradient: 'linear-gradient(135deg, #336791, #00758F)',
    skills: ['PostgreSQL', 'MySQL', 'SQLAlchemy', 'ORM', 'SQL']
  },
  {
    id: 'cloud',
    title: 'Cloud & AWS',
    icon: 'FaAws',
    color: '#FF9900',
    gradient: 'linear-gradient(135deg, #FF9900, #232F3E)',
    skills: ['AWS EC2', 'AWS Lambda', 'AWS S3', 'AWS VPC', 'CloudWatch', 'Serverless']
  },
  {
    id: 'security',
    title: 'Cloud Security',
    icon: 'FaShieldAlt',
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #EF4444, #DC2626)',
    skills: ['AWS IAM', 'Security Groups', 'NACLs', 'S3 Bucket Policies', 'OWASP Top 10', 'KMS Encryption']
  },
  {
    id: 'devops',
    title: 'DevOps & Tools',
    icon: 'FaDocker',
    color: '#2496ED',
    gradient: 'linear-gradient(135deg, #2496ED, #0DB7ED)',
    skills: ['Docker', 'Git', 'GitHub Actions', 'Linux CLI', 'Bash/Shell', 'Postman']
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: 'FaCode',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    skills: ['Python', 'JavaScript', 'Java', 'SQL', 'Bash']
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Cloud Fun Fact Generator",
    description: "A serverless AWS app with Perplexity AI integration. Increased user engagement by 60% and delivered 1000+ unique cloud facts.",
    image: "/images/Screenshot 2025-11-17 170323.png",
    imageFallback: "https://placehold.co/800x600/764ba2/ffffff?text=Cloud+Fun+Facts",
    tags: ["AWS", "Serverless", "AI"],
    tagColors: { "AWS": "blue", "Serverless": "cyan", "AI": "indigo" },
    technologies: ["React", "AWS Amplify", "API Gateway", "Lambda (Python)", "DynamoDB", "Perplexity AI"],
    links: {
      github: "https://github.com/ashishkrshaw/Cloud-FunFacts.git",
      demo: "https://staging.d2qhlpatspoxmm.amplifyapp.com/",
      video: "https://youtu.be/KbsVKpe41Hk"
    }
  },
  {
    id: 2,
    title: "Secure S3 File Uploader",
    description: "Engineered a secure file uploader on AWS S3 with encryption, virus scanning, and CloudFront delivery.",
    image: "/images/Screenshot 2025-11-17 172803.png",
    imageFallback: "https://placehold.co/800x600/0ea5e9/ffffff?text=Secure+S3+Uploader",
    tags: ["AWS S3", "Security", "CI/CD", "Automation"],
    tagColors: { "AWS S3": "blue", "Security": "red", "CI/CD": "green", "Automation": "teal" },
    technologies: ["AWS S3", "CloudFront", "Terraform", "Jenkins", "Python"],
    links: {
      demo: "https://d48fldudi0fyu.cloudfront.net/",
      video: "https://youtu.be/047FKrPQBCM",
      github: "https://github.com/ashishkrshaw/secure-file-uploader.git"
    },
    date: "Aug 2025 - Sep 2025"
  },
  {
    id: 3,
    title: "Multi Cloud Management Dashboard",
    description: "Architected a MultiCloud dashboard integrating AWS, Azure, and GCP, enhancing cross-platform visibility by 40%.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&q=80",
    imageFallback: "https://placehold.co/800x600/2563eb/ffffff?text=MultiCloud+Dashboard",
    tags: ["MultiCloud", "Dashboard", "AI", "Automation"],
    tagColors: { "MultiCloud": "blue", "Dashboard": "purple", "AI": "indigo", "Automation": "green" },
    technologies: ["AWS", "Azure", "GCP", "Node.js", "React", "Telegram API", "AI"],
    links: {
      demo: "https://multicloud-management-dashboard.onrender.com/",
      github: "https://github.com/ashishkrshaw/multicloud-management-dashboard"
    }
  },
  {
    id: 4,
    title: "Heart Disease Predictor",
    description: "Architected a predictive ML model achieving 92% accuracy for heart disease risk detection using Amazon SageMaker.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=600&fit=crop&q=80",
    imageFallback: "https://placehold.co/800x600/ef4444/ffffff?text=Heart+Disease+Predictor",
    tags: ["Machine Learning", "Healthcare", "AWS SageMaker"],
    tagColors: { "Machine Learning": "red", "Healthcare": "pink", "AWS SageMaker": "orange" },
    technologies: ["Python", "Amazon SageMaker", "Pandas", "Scikit-learn", "Matplotlib"],
    links: {
      demo: "https://aiml-2ffm.onrender.com/",
      github: "https://github.com/ashishkrshaw/heart-disease-predictor"
    },
    date: "Jun 2025 - Jul 2025"
  },
  {
    id: 5,
    title: "Student Database Management",
    description: "A comprehensive web application for managing student records. Improved data accuracy by 30%.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
    imageFallback: "https://placehold.co/800x600/667eea/ffffff?text=Student+Database+System",
    tags: ["Database", "Web App", "Full Stack"],
    tagColors: { "Database": "blue", "Web App": "pink", "Full Stack": "blue" },
    technologies: ["Node.js", "Express", "MongoDB", "React", "Bootstrap"],
    links: {
      github: "https://github.com/ashishkrshaw/Vidyalaya.git",
      demo: "https://vidyalaya-leu3.onrender.com",
      video: "https://www.youtube.com/watch?v=fBNz5xF-Kx4"
    }
  },
  {
    id: 6,
    title: "Realtime Chat Application",
    description: "Modern chat platform with WebSocket tech. Enabled 99.9% uptime, supported 500+ concurrent users.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop&q=80",
    imageFallback: "https://placehold.co/800x600/10b981/ffffff?text=Realtime+Chat",
    tags: ["WebSocket", "Real-time", "Chat"],
    tagColors: { "WebSocket": "green", "Real-time": "teal", "Chat": "blue" },
    technologies: ["Node.js", "Socket.io", "Express", "MongoDB", "React"],
    links: {
      github: "https://github.com/ashishkrshaw/RtimeChat.git",
      demo: "https://wecord-s3vw.onrender.com",
      video: "https://www.youtube.com/watch?v=jD7FnbI76Hg"
    }
  }
];

export const floatingTags: FloatingTag[] = [
  { icon: "FaAws", label: "AWS" },
  { icon: "FaPython", label: "Python" },
  { icon: "FaDocker", label: "Docker" },
  { icon: "FaDatabase", label: "PostgreSQL" },
  { icon: "FaShieldAlt", label: "Security" },
  { icon: "FaCodeBranch", label: "Git" },
  { icon: "FaServer", label: "FastAPI" },
  { icon: "FaLock", label: "IAM" }
];

export const featureCards: FeatureCard[] = [
  { icon: "🐍", title: "Python Backend", description: "FastAPI, Boto3, async programming for high-performance APIs.", variant: "cool" },
  { icon: "☁️", title: "AWS Cloud", description: "EC2, Lambda, S3, VPC — full cloud infrastructure expertise.", variant: "warm" },
  { icon: "🔐", title: "Security First", description: "IAM policies, OWASP Top 10, encryption, and access control.", variant: "pink" },
  { icon: "🐳", title: "DevOps Ready", description: "Docker, GitHub Actions, CI/CD pipelines, and automation.", variant: "dark" },
  { icon: "🗄️", title: "Database Expert", description: "PostgreSQL, MySQL, SQLAlchemy ORM for data management.", variant: "light" },
  { icon: "⚡", title: "API Development", description: "RESTful APIs, async patterns, Pydantic validation.", variant: "warm" }
];

// Certifications data
export const certificates = [
  { 
    id: 1, 
    title: "Applied Cloud Computing", 
    issuer: "TCS iON", 
    date: "2024", 
    skills: ["Cloud Computing", "AWS", "Azure"],
    link: "https://drive.google.com/file/d/17U_8ECPIvD-4K4L0o2mXJUZdOFDq0gMk/view",
    image: "https://drive.google.com/thumbnail?id=17U_8ECPIvD-4K4L0o2mXJUZdOFDq0gMk&sz=w400"
  },
  { 
    id: 2, 
    title: "Remote Internship - Secure Docker on AWS", 
    issuer: "TCS iON", 
    date: "2024", 
    skills: ["Docker", "AWS Security", "DevSecOps"],
    link: "https://drive.google.com/file/d/17jnV_AjFHyuRf8yyK8_Uuq75Dgqifio_/view",
    image: "https://drive.google.com/thumbnail?id=17jnV_AjFHyuRf8yyK8_Uuq75Dgqifio_&sz=w400"
  },
  { 
    id: 3, 
    title: "Oracle Cloud Infrastructure Foundations", 
    issuer: "Oracle", 
    date: "2024", 
    skills: ["Oracle Cloud", "OCI"],
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A974529C430F672E3FD0FFF4C7124230AFACF7BCF65A176747C729711C994129",
    image: "/images/ORACLE CERTIFIED.png"
  },
  { 
    id: 4, 
    title: "Deloitte Cyber Security Job Simulation", 
    issuer: "Deloitte", 
    date: "2024", 
    skills: ["Cyber Security", "Incident Response"],
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_zREsTjB4R5uLCXQmM_1750912875255_completion_certificate.pdf",
    image: "/images/Deloitte Cyber Job simulation.png"
  }
];

export const badges = [
  { id: 1, title: "AWS Educate Introduction to Cloud 101", issuer: "AWS Educate", link: "https://www.credly.com/earner/earned/badge/5311de36-b46d-4912-9b56-fc6cdbd1e189" },
  { id: 2, title: "AWS Educate Getting Started with Storage", issuer: "AWS Educate", link: "https://www.credly.com/earner/earned/badge/778541ff-bc09-485b-83e6-5b888a2aeb5d" },
  { id: 3, title: "AWS Educate Getting Started with Compute", issuer: "AWS Educate", link: "https://www.credly.com/earner/earned/badge/31c0866c-b3dd-49f0-98b7-d9dd9023eff4" },
  { id: 4, title: "AWS Educate Getting Started with Databases", issuer: "AWS Educate", link: "https://www.credly.com/earner/earned/badge/17529a27-7828-4751-afa2-c89b094c0a4f" },
  { id: 5, title: "AWS Educate Getting Started with Cloud Ops", issuer: "AWS Educate", link: "https://www.credly.com/earner/earned/badge/f53926bd-95d4-48e7-a2ea-390e5bab6f88" },
  { id: 6, title: "Implement Load Balancing on GCP", issuer: "Google Cloud", link: "https://www.credly.com/earner/earned/badge/3f253822-b78c-4fd4-9dd6-3b7835bb489a" }
];
