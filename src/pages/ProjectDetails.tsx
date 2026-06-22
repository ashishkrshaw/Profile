import { useParams, Link } from 'react-router-dom';
import {
    FaArrowLeft, FaGithub, FaYoutube, FaExternalLinkAlt,
    FaKey, FaCloud, FaLock, FaUnlock, FaUserShield,
    FaHandPaper, FaChartLine, FaShieldAlt, FaBolt,
    FaCogs, FaRedo, FaHtml5, FaBrain
} from 'react-icons/fa';
import {
    SiRedis, SiAwslambda, SiAmazonapigateway
} from 'react-icons/si';
import { useEffect } from 'react';
import styles from './ProjectDetails.module.css';

// Icon Mapping
const iconMap: Record<string, React.ReactNode> = {
    'FaKey': <FaKey />,
    'FaCloud': <FaCloud />,
    'FaLock': <FaLock />,
    'SiRedis': <SiRedis />,
    'FaUnlock': <FaUnlock />,
    'FaUserShield': <FaUserShield />,
    'FaHandPaper': <FaHandPaper />,
    'FaChartLine': <FaChartLine />,
    'FaShieldAlt': <FaShieldAlt />,
    'FaBolt': <FaBolt />,
    'FaCogs': <FaCogs />,
    'FaRedo': <FaRedo />,
    'FaHtml5': <FaHtml5 />,
    'SiAmazonapigateway': <SiAmazonapigateway />,
    'SiAwslambda': <SiAwslambda />,
    'FaBrain': <FaBrain />
};

const projectsData: Record<string, {
    title: string; tagline: string; image: string; demo: string | null; github: string; video?: string;
    whyItMatters: string; highlights: string[]; stack: { name: string; color: string }[];
    stats: { label: string; value: string; desc: string }[];
    architecture: { title: string; desc: string; iconKey: string }[];
    impact: { label: string; value: string; color: string }[];
    documentation?: string;
}> = {
    'kavro': {
        title: 'Kavro',
        tagline: 'End-to-End Encrypted Messaging API',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&auto=format&fit=crop',
        demo: 'https://kavro.duckdns.org/docs',
        github: 'https://github.com/ashishkrshaw/kavro.git',
        video: undefined,
        whyItMatters: 'A messaging API where messages are encrypted client-side before reaching the server. Built to learn cryptography concepts using NaCl library and Redis for temporary message storage.',
        highlights: [
            'NaCl Encryption Library',
            'Redis Message Storage',
            'FastAPI REST API',
            'Docker Deployment'
        ],
        stack: [
            { name: 'Python', color: 'var(--accent)' },
            { name: 'FastAPI', color: '#009688' },
            { name: 'NaCl', color: '#eab308' },
            { name: 'Redis', color: '#dc2626' },
            { name: 'Docker', color: '#2496ed' }
        ],
        stats: [
            { label: 'Type', value: 'Backend', desc: 'REST API' },
            { label: 'Encryption', value: 'NaCl', desc: 'TweetNaCl' },
            { label: 'Storage', value: 'Redis', desc: 'Temporary' },
            { label: 'Deploy', value: 'Docker', desc: 'Containerized' }
        ],
        architecture: [
            { title: 'Client', desc: 'Key Gen', iconKey: 'FaKey' },
            { title: 'API', desc: 'FastAPI', iconKey: 'FaCloud' },
            { title: 'Encrypt', desc: 'NaCl', iconKey: 'FaLock' },
            { title: 'Store', desc: 'Redis', iconKey: 'SiRedis' }
        ],
        impact: [
            { label: 'Learning', value: 'Cryptography', color: 'var(--accent)' },
            { label: 'Type', value: 'Backend API', color: 'var(--accent-light)' },
            { label: 'Status', value: 'Deployed', color: 'var(--accent-light)' }
        ]
    },
    'session-guard': {
        title: 'Session Guard',
        tagline: 'Session Security Middleware',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&auto=format&fit=crop',
        demo: null,
        github: 'https://github.com/ashishkrshaw/session-guard.git',
        video: undefined,
        whyItMatters: 'A FastAPI middleware that adds extra security checks to user sessions. Validates IP address and browser fingerprint on each request to detect suspicious activity.',
        highlights: [
            'IP Address Validation',
            'Browser Fingerprinting',
            'FastAPI Middleware',
            'JWT Token Handling'
        ],
        stack: [
            { name: 'Python', color: 'var(--accent)' },
            { name: 'FastAPI', color: '#009688' },
            { name: 'Redis', color: '#dc2626' },
            { name: 'JWT', color: '#2496ed' }
        ],
        stats: [
            { label: 'Type', value: 'Middleware', desc: 'Security layer' },
            { label: 'Auth', value: 'JWT', desc: 'Token-based' },
            { label: 'Cache', value: 'Redis', desc: 'Session store' },
            { label: 'Status', value: 'No Demo', desc: 'Code only' }
        ],
        architecture: [
            { title: 'Login', desc: 'JWT Token', iconKey: 'FaUserShield' },
            { title: 'Middleware', desc: 'Check IP', iconKey: 'FaHandPaper' },
            { title: 'Validate', desc: 'Fingerprint', iconKey: 'FaChartLine' },
            { title: 'Action', desc: 'Allow/Block', iconKey: 'FaShieldAlt' }
        ],
        impact: [
            { label: 'Learning', value: 'Security', color: 'var(--accent)' },
            { label: 'Type', value: 'Backend', color: 'var(--accent-light)' },
            { label: 'Demo', value: 'Code Only', color: 'var(--accent-light)' }
        ]
    },
    'event-flow': {
        title: 'EventFlow',
        tagline: 'Background Task Queue System',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop',
        demo: 'https://eventdriven.duckdns.org/docs',
        github: 'https://github.com/ashishkrshaw/Event_Driven.git',
        whyItMatters: 'A background task processing system using Redis as a message queue. API endpoints push tasks to Redis, and worker processes pick them up for execution.',
        highlights: [
            'Redis Message Queue',
            'Worker Process Pattern',
            'FastAPI Endpoints',
            'Docker Compose Setup'
        ],
        stack: [
            { name: 'FastAPI', color: '#009688' },
            { name: 'Redis', color: '#dc2626' },
            { name: 'Python', color: 'var(--accent)' },
            { name: 'Docker', color: '#2496ed' }
        ],
        stats: [
            { label: 'Type', value: 'Backend', desc: 'Task queue' },
            { label: 'Broker', value: 'Redis', desc: 'Message queue' },
            { label: 'Workers', value: 'Python', desc: 'Background jobs' },
            { label: 'Deploy', value: 'Docker', desc: 'Compose' }
        ],
        architecture: [
            { title: 'API', desc: 'Enqueue', iconKey: 'FaBolt' },
            { title: 'Broker', desc: 'Redis', iconKey: 'SiRedis' },
            { title: 'Worker', desc: 'Process', iconKey: 'FaCogs' },
            { title: 'Retry', desc: 'On Fail', iconKey: 'FaRedo' }
        ],
        impact: [
            { label: 'Learning', value: 'Queues', color: 'var(--accent)' },
            { label: 'Pattern', value: 'Producer-Consumer', color: 'var(--accent-light)' },
            { label: 'Status', value: 'Deployed', color: 'var(--accent-light)' }
        ]
    },
    'cloud-fun-fact-generator': {
        title: 'Cloud Fun Fact Generator',
        tagline: 'AI-Powered Cloud Knowledge Platform',
        image: '/images/Screenshot 2025-11-17 170323.png',
        demo: null,
        github: 'https://github.com/ashishkrshaw/Cloud-FunFacts.git',
        video: 'https://youtu.be/KbsVKpe41Hk',
        whyItMatters: 'Cloud computing concepts can feel dry when buried in documentation. This project tackles that by turning cloud knowledge into bite-sized, engaging facts generated on demand using AI. The idea was simple — what if learning about AWS, containers, or serverless could feel like scrolling through fun trivia instead of reading whitepapers?\n\nOn the backend, I built a RESTful API using Node.js and Express that handles incoming requests, forwards them to the Perplexity AI API for intelligent fact generation, and persists every generated fact in a MongoDB database so users can browse previously generated content. The Express server manages rate limiting, error handling, and clean JSON responses.\n\nThe frontend is a lightweight vanilla JavaScript interface that calls the API endpoint, displays facts with smooth transitions, and lets users save their favorites. MongoDB Atlas handles cloud-hosted persistence, which means the fact library grows organically over time.\n\nThis project taught me practical API integration patterns — handling third-party API keys securely, managing async request chains, structuring a Node.js project for maintainability, and deploying a full-stack app with environment-based configuration. It also reinforced my understanding of NoSQL data modeling, since each fact document stores metadata like category, generation timestamp, and source context.',
        highlights: [
            'Perplexity AI API integration for intelligent content generation',
            'RESTful API design with Express.js and proper error handling',
            'MongoDB Atlas for cloud-hosted NoSQL data persistence',
            'End-to-end deployment with environment-based configuration'
        ],
        stack: [
            { name: 'Node.js', color: '#339933' },
            { name: 'Express', color: '#000000' },
            { name: 'MongoDB', color: '#47A248' },
            { name: 'JavaScript', color: '#F7DF1E' },
            { name: 'Perplexity AI', color: '#8b5cf6' }
        ],
        stats: [
            { label: 'Type', value: 'Full-Stack', desc: 'Node.js + MongoDB' },
            { label: 'AI Engine', value: 'Perplexity', desc: 'LLM-powered generation' },
            { label: 'Database', value: 'MongoDB', desc: 'Atlas cloud-hosted' },
            { label: 'API Style', value: 'REST', desc: 'Express.js endpoints' }
        ],
        architecture: [
            { title: 'Frontend', desc: 'HTML/JS', iconKey: 'FaHtml5' },
            { title: 'API', desc: 'Express.js', iconKey: 'FaCogs' },
            { title: 'AI Engine', desc: 'Perplexity', iconKey: 'FaBrain' },
            { title: 'Database', desc: 'MongoDB', iconKey: 'SiRedis' }
        ],
        impact: [
            { label: 'Key Learning', value: 'AI API Integration', color: 'var(--accent)' },
            { label: 'Architecture', value: 'Full-Stack REST', color: 'var(--accent-light)' },
            { label: 'Data Layer', value: 'NoSQL Modeling', color: 'var(--accent-light)' }
        ]
    },
    'aws-portfolio-hosting': {
        title: 'AWS Cloud Portfolio',
        tagline: 'Static Site Hosting on AWS',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop',
        demo: null,
        github: '',
        video: undefined,
        documentation: 'https://docs.google.com/document/d/1t4u7Gt1bdUH-cHazerUBN6VjV0-UMhILLKlmDBY-xwM/edit?usp=sharing',
        whyItMatters: 'My portfolio website hosted on AWS using S3 for storage, CloudFront for CDN, and GitHub Actions for automated deployment. Configured with HTTPS and custom domain.',
        highlights: [
            'S3 Static Hosting',
            'CloudFront CDN',
            'GitHub Actions CI/CD',
            'HTTPS with ACM'
        ],
        stack: [
            { name: 'S3', color: '#569A31' },
            { name: 'CloudFront', color: '#8C4FFF' },
            { name: 'Route 53', color: '#8C4FFF' },
            { name: 'GitHub Actions', color: '#2088FF' }
        ],
        stats: [
            { label: 'Type', value: 'Static', desc: 'HTML/CSS/JS' },
            { label: 'CDN', value: 'CloudFront', desc: 'Global cache' },
            { label: 'Deploy', value: 'Auto', desc: 'On git push' },
            { label: 'SSL', value: 'ACM', desc: 'Free HTTPS' }
        ],
        architecture: [
            { title: 'Code', desc: 'GitHub', iconKey: 'FaBolt' },
            { title: 'Storage', desc: 'S3', iconKey: 'FaCloud' },
            { title: 'CDN', desc: 'CloudFront', iconKey: 'FaShieldAlt' },
            { title: 'DNS', desc: 'Route 53', iconKey: 'FaCogs' }
        ],
        impact: [
            { label: 'Learning', value: 'AWS', color: '#FF9900' },
            { label: 'Type', value: 'DevOps', color: 'var(--accent-light)' },
            { label: 'Cost', value: 'Low', color: 'var(--accent-light)' }
        ]
    },
    'ai-weather-forecasting': {
        title: 'AI Weather Forecasting',
        tagline: 'Real-Time Weather App',
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&auto=format&fit=crop',
        demo: 'https://sd-sb8h.onrender.com',
        github: 'https://github.com/ashishkrshaw/Ai-powered-Weather.git',
        video: 'https://www.youtube.com/watch?v=MIYQR-Ybrn4',
        whyItMatters: 'A clean weather application that fetches live data from OpenWeather API. Built to practice API integration, DOM manipulation, and responsive design.',
        highlights: [
            'OpenWeather API Integration',
            'City Search Functionality',
            'Responsive Design',
            'Clean UI/UX'
        ],
        stack: [
            { name: 'JavaScript', color: '#F7DF1E' },
            { name: 'HTML5', color: '#E34F26' },
            { name: 'CSS3', color: '#1572B6' },
            { name: 'OpenWeather API', color: '#EB6E4B' }
        ],
        stats: [
            { label: 'Type', value: 'Frontend', desc: 'Client-side app' },
            { label: 'API', value: 'REST', desc: 'OpenWeather' },
            { label: 'Hosting', value: 'Render', desc: 'Free tier' },
            { label: 'Design', value: 'Responsive', desc: 'Mobile-friendly' }
        ],
        architecture: [
            { title: 'UI', desc: 'HTML/CSS', iconKey: 'FaHtml5' },
            { title: 'Logic', desc: 'JavaScript', iconKey: 'FaCogs' },
            { title: 'Data', desc: 'OpenWeather', iconKey: 'FaCloud' }
        ],
        impact: [
            { label: 'Learning', value: 'API Skills', color: '#f59e0b' },
            { label: 'Type', value: 'Frontend', color: 'var(--accent-light)' },
            { label: 'Status', value: 'Deployed', color: 'var(--accent-light)' }
        ]
    },
    'multi-cloud-dashboard': {
        title: 'Multi-Cloud Dashboard',
        tagline: 'Cloud Monitoring Dashboard',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop',
        demo: 'https://multicloud-management-dashboard.onrender.com/',
        github: 'https://github.com/ashishkrshaw/multicloud-management-dashboard',
        video: undefined,
        whyItMatters: 'A dashboard UI for visualizing cloud metrics from AWS, Azure, and GCP. Built to learn React, Node.js, and MongoDB — showcasing MERN stack capabilities.',
        highlights: [
            'React Frontend',
            'Node.js API',
            'MongoDB Database',
            'Multi-Cloud UI'
        ],
        stack: [
            { name: 'React', color: '#61DAFB' },
            { name: 'Node.js', color: '#339933' },
            { name: 'MongoDB', color: '#47A248' },
            { name: 'Express', color: '#000000' }
        ],
        stats: [
            { label: 'Stack', value: 'MERN', desc: 'Full-stack' },
            { label: 'Clouds', value: '3', desc: 'AWS, Azure, GCP' },
            { label: 'Hosting', value: 'Render', desc: 'Free tier' },
            { label: 'Type', value: 'Dashboard', desc: 'Monitoring UI' }
        ],
        architecture: [
            { title: 'Frontend', desc: 'React', iconKey: 'FaHtml5' },
            { title: 'API', desc: 'Node.js', iconKey: 'FaCogs' },
            { title: 'Database', desc: 'MongoDB', iconKey: 'SiRedis' },
            { title: 'Deploy', desc: 'Render', iconKey: 'FaCloud' }
        ],
        impact: [
            { label: 'Stack', value: 'MERN', color: '#2563eb' },
            { label: 'Type', value: 'Full-Stack', color: 'var(--accent-light)' },
            { label: 'Status', value: 'Deployed', color: 'var(--accent-light)' }
        ]
    }
};

export default function ProjectDetails() {
    const { slug } = useParams<{ slug: string }>();
    const project = slug ? projectsData[slug] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className={styles.page}>
                <div className={styles.notFound}>
                    <h1>Project Not Found</h1>
                    <Link to="/" className={styles.backBtn}><FaArrowLeft /> Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Link to="/" className={styles.backBtn}><FaArrowLeft /> Back</Link>
                <h1>{project.title}</h1>
            </header>

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroImage}>
                        <img src={project.image} alt={project.title} onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/191919/666?text=Project'; }} />
                    </div>
                    <div className={styles.heroInfo}>
                        <p className={styles.tagline}>{project.tagline}</p>
                        <div className={styles.links}>
                            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.demoBtn}><FaExternalLinkAlt /> Live Demo</a>}
                            {project.video && <a href={project.video} target="_blank" rel="noopener noreferrer" className={styles.videoBtn}><FaYoutube /> Video</a>}
                            {project.documentation && <a href={project.documentation} target="_blank" rel="noopener noreferrer" className={styles.demoBtn}><FaExternalLinkAlt /> Read Documentation</a>}
                            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}><FaGithub /> Source</a>}
                        </div>
                    </div>
                </section>

                {/* Why It Matters */}
                <section className={styles.section}>
                    <h2>Why It Matters</h2>
                    <p>{project.whyItMatters}</p>
                    <ul className={styles.highlights}>
                        {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                </section>

                {/* Stats Grid */}
                <section className={styles.section}>
                    <h2>Key Metrics</h2>
                    <div className={styles.statsGrid}>
                        {project.stats.map((s, i) => (
                            <div key={i} className={styles.statCard}>
                                <span className={styles.statValue}>{s.value}</span>
                                <span className={styles.statLabel}>{s.label}</span>
                                <span className={styles.statDesc}>{s.desc}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Architecture */}
                <section className={styles.section}>
                    <h2>System Architecture</h2>
                    <div className={styles.archFlow}>
                        {project.architecture.map((step, index) => (
                            <div key={index} className={styles.archCard}>
                                <div className={styles.archIcon}>
                                    {iconMap[step.iconKey] || step.iconKey}
                                </div>
                                <span className={styles.archTitle}>{step.title}</span>
                                <span className={styles.archDesc}>{step.desc}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stack */}
                <section className={styles.section}>
                    <h2>Technology Stack</h2>
                    <div className={styles.stackGrid}>
                        {project.stack.map((s, i) => (
                            <span key={i} className={styles.stackTag} style={{ borderColor: s.color, color: s.color }}>{s.name}</span>
                        ))}
                    </div>
                </section>

                {/* Impact */}
                <section className={styles.section}>
                    <h2>Impact Metrics</h2>
                    <div className={styles.impactGrid}>
                        {project.impact.map((im, i) => (
                            <div key={i} className={styles.impactCard}>
                                <span className={styles.impactValue} style={{ color: im.color }}>{im.value}</span>
                                <span className={styles.impactLabel}>{im.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Documentation */}
                {project.documentation && (
                    <section className={styles.section}>
                        <h2>Documentation</h2>
                        <div className={styles.docEmbed}>
                            <iframe src={project.documentation} title="Documentation" allowFullScreen />
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
