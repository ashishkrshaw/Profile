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
        tagline: 'End-to-End Encrypted Messaging Protocol',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&auto=format&fit=crop',
        demo: 'https://kavro.duckdns.org/docs',
        github: 'https://github.com/ashishkrshaw/kavro.git',
        video: undefined,
        whyItMatters: 'Demonstrates a secure messaging architecture where the server acts solely as a blind relay. Messages are encrypted on the client using NaCl (TweetNaCl) before transmission, ensuring the server never possesses the decryption keys.',
        highlights: [
            'Client-side Key Generation (NaCl)',
            'Blind Relay Server Architecture',
            'Ephemeral Redis Storage',
            'Dockerized Deployment'
        ],
        stack: [
            { name: 'Python', color: 'var(--accent)' },
            { name: 'FastAPI', color: '#009688' },
            { name: 'NaCl', color: '#eab308' },
            { name: 'Redis', color: '#dc2626' },
            { name: 'Docker', color: '#2496ed' }
        ],
        stats: [
            { label: 'Latency', value: '<50ms', desc: 'Message delivery' },
            { label: 'Server Access', value: 'Blob', desc: 'Encrypted data only' },
            { label: 'Test Coverage', value: '85%', desc: 'Unit & Integration' },
            { label: 'Deployment', value: 'Container', desc: 'Docker Compose' }
        ],
        architecture: [
            { title: 'Client', desc: 'Key Gen', iconKey: 'FaKey' },
            { title: 'API', desc: 'Relay', iconKey: 'FaCloud' },
            { title: 'Sender', desc: 'Encrypt', iconKey: 'FaLock' },
            { title: 'Store', desc: 'Redis TTL', iconKey: 'SiRedis' },
            { title: 'Receiver', desc: 'Decrypt', iconKey: 'FaUnlock' }
        ],
        impact: [
            { label: 'Security Model', value: 'E2EE', color: 'var(--accent)' },
            { label: 'Storage', value: 'Ephemeral', color: 'var(--accent-light)' },
            { label: 'Cryptography', value: 'NaCl', color: 'var(--accent-light)' }
        ]
    },
    'session-guard': {
        title: 'Session Guard',
        tagline: 'Context-Aware Authentication Middleware',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&auto=format&fit=crop',
        demo: null,
        github: 'https://github.com/ashishkrshaw/session-guard.git',
        video: undefined,
        whyItMatters: 'Enhances standard session management by validating request context (IP subnet, User-Agent) on every call. If the context changes drastically during an active session, it challenges or invalidates the token to prevent session hijacking.',
        highlights: [
            'Heuristic Anomaly Detection',
            'Context-Aware Middleware',
            'Request Fingerprinting',
            'Automated Token Revocation'
        ],
        stack: [
            { name: 'Python', color: 'var(--accent)' },
            { name: 'FastAPI', color: '#009688' },
            { name: 'Redis', color: '#dc2626' },
            { name: 'JWT', color: '#2496ed' }
        ],
        stats: [
            { label: 'Overhead', value: '<5ms', desc: 'Per request check' },
            { label: 'False Positives', value: 'Low', desc: 'Tunable heuristics' },
            { label: 'Detection', value: 'Real-time', desc: 'On request' },
            { label: 'Scope', value: 'Global', desc: 'All protected routes' }
        ],
        architecture: [
            { title: 'Login', desc: 'Issue Token', iconKey: 'FaUserShield' },
            { title: 'Middleware', desc: 'Inspect', iconKey: 'FaHandPaper' },
            { title: 'Logic', desc: 'Validate', iconKey: 'FaChartLine' },
            { title: 'Action', desc: 'Allow/401', iconKey: 'FaShieldAlt' }
        ],
        impact: [
            { label: 'Security', value: 'Improved', color: 'var(--accent)' },
            { label: 'UX Impact', value: 'Minimal', color: 'var(--accent-light)' },
            { label: 'Integration', value: 'Middleware', color: 'var(--accent-light)' }
        ]
    },
    'event-flow': {
        title: 'EventFlow',
        tagline: 'Asynchronous Task Processing System',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop',
        demo: 'https://eventdriven.duckdns.org/docs',
        github: 'https://github.com/ashishkrshaw/Event_Driven.git',
        whyItMatters: 'Decouples high-latency operations (like email sending or report generation) from the main API response loop interactively. Uses a Redis List as a message broker to queue tasks for background workers.',
        highlights: [
            'Producer-Consumer Pattern',
            'Redis List as Message Queue',
            'Dead Letter Queue (DLQ)',
            'Worker Process Isolation'
        ],
        stack: [
            { name: 'FastAPI', color: '#009688' },
            { name: 'Redis', color: '#dc2626' },
            { name: 'Python', color: 'var(--accent)' },
            { name: 'Docker', color: '#2496ed' }
        ],
        stats: [
            { label: 'API Latency', value: '<20ms', desc: 'Task enqueue only' },
            { label: 'Throughput', value: 'Scalable', desc: 'Horizontal workers' },
            { label: 'Reliability', value: 'Retry', desc: 'On worker failure' },
            { label: 'Monitoring', value: 'Basic', desc: 'Queue depth' }
        ],
        architecture: [
            { title: 'API', desc: 'Enqueue', iconKey: 'FaBolt' },
            { title: 'Broker', desc: 'Redis List', iconKey: 'SiRedis' },
            { title: 'Worker', desc: 'Dequeue', iconKey: 'FaCogs' },
            { title: 'DLQ', desc: 'Failures', iconKey: 'FaRedo' }
        ],
        impact: [
            { label: 'Responsiveness', value: 'High', color: 'var(--accent)' },
            { label: 'Coupling', value: 'Loose', color: 'var(--accent-light)' },
            { label: 'Resilience', value: 'Robust', color: 'var(--accent-light)' }
        ]
    },
    'cloud-fun-fact-generator': {
        title: 'Cloud Fun Fact Generator',
        tagline: 'Serverless Application with AI Integration',
        image: '/images/Screenshot 2025-11-17 170323.png',
        demo: 'https://staging.d2qhlpatspoxmm.amplifyapp.com/',
        github: 'https://github.com/ashishkrshaw/Cloud-FunFacts.git',
        video: 'https://youtu.be/KbsVKpe41Hk',
        whyItMatters: 'A serverless playground to explore AWS primitives. Connects a static frontend hosted on S3/Amplify to a Lambda function via API Gateway, which queries a text-gen AI (Perplexity) and caches results in DynamoDB.',
        highlights: [
            'API Gateway + Lambda Integration',
            'DynamoDB for Caching/Storage',
            'Perplexity API for Content',
            'Infrastructure as Code (SAM/CDK)'
        ],
        stack: [
            { name: 'HTML5', color: '#E34F26' },
            { name: 'CSS3', color: '#1572B6' },
            { name: 'JavaScript', color: '#F7DF1E' },
            { name: 'AWS Lambda', color: '#FF9900' },
            { name: 'DynamoDB', color: '#4053D6' }
        ],
        stats: [
            { label: 'Architecture', value: 'Serverless', desc: 'Pay-per-use' },
            { label: 'Availability', value: 'High', desc: 'AWS Managed' },
            { label: 'Latency', value: 'Variable', desc: 'Cold starts possible' },
            { label: 'Maintainability', value: 'High', desc: 'No servers' }
        ],
        architecture: [
            { title: 'UI', desc: 'Amplify', iconKey: 'FaHtml5' },
            { title: 'Gateway', desc: 'REST API', iconKey: 'SiAmazonapigateway' },
            { title: 'Function', desc: 'Lambda', iconKey: 'SiAwslambda' },
            { title: 'AI', desc: 'External', iconKey: 'FaBrain' }
        ],
        impact: [
            { label: 'Ops', value: 'Zero', color: 'var(--accent)' },
            { label: 'Cost', value: 'Micro', color: 'var(--accent-light)' },
            { label: 'Scale', value: 'Auto', color: 'var(--accent-light)' }
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
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}><FaGithub /> Source</a>
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
