import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
    FaAws, FaDocker, FaGithub, FaLinkedin,
    FaEnvelope, FaExternalLinkAlt, FaTimes, FaArrowDown,
    FaCheck, FaSpinner, FaCode, FaShieldAlt,
    FaGraduationCap, FaAward, FaGoogle, FaCog, FaFolderOpen,
    FaPaperPlane, FaBook, FaComments,
    FaPython, FaLinux, FaCloud, FaBrain, FaServer
} from 'react-icons/fa';
import { SiOracle, SiFastapi, SiMysql, SiRedis, SiTerraform, SiMongodb, SiJavascript, SiReact } from 'react-icons/si';
import LottieSocialIcon from '../components/LottieSocialIcon';
import MobileNav from '../components/layout/MobileNav';
import CursorGlow from '../components/CursorGlow';
import CloudArchitecture3D from '../components/CloudArchitecture3D';
import HeroKeyboardPortal from '../components/HeroKeyboardPortal';
import SectionConnector from '../components/SectionConnector';
import styles from './Home.module.css';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzTu9IbuxizIZ5p8IQEkPTli2Sjsf8On_WZoQ-efiTZdGqImukSq-s-rLcWWQF4vUS-/exec';



const certifications = [
    { id: 1, title: 'Applied Cloud Computing', issuer: 'TCS iON', icon: <FaAws />, link: 'https://drive.google.com/file/d/17U_8ECPIvD-4K4L0o2mXJUZdOFDq0gMk/view' },
    { id: 2, title: 'Secure Docker on AWS', issuer: 'TCS iON', icon: <FaDocker />, link: 'https://drive.google.com/file/d/17jnV_AjFHyuRf8yyK8_Uuq75Dgqifio_/view' },
    { id: 3, title: 'Oracle Cloud Foundations', issuer: 'Oracle', icon: <SiOracle />, link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=A974529C430F672E3FD0FFF4C7124230AFACF7BCF65A176747C729711C994129' },
    { id: 4, title: 'GCP Load Balancing', issuer: 'Google Cloud', icon: <FaGoogle />, link: 'https://www.credly.com/earner/earned/badge/3f253822-b78c-4fd4-9dd6-3b7835bb489a' },
];

const academics = [
    { degree: 'BCA (Cloud & Security)', institution: 'Amity University Online', year: '2023-2026', status: 'Pursuing' },
    { degree: 'Higher Secondary (12th)', institution: 'Model School Dhanwar • JAC Board', year: '2023', status: 'Completed' },
    { degree: 'Secondary (10th)', institution: 'High School Baddiha Jamua • JAC Board', year: '2021', status: 'Completed' },
];

// TypeWriter Component for animated role text
const roles = [
    'Final Year BCA Student',
    'Tech Enthusiast & Problem Solver',
    'Full Stack Developer in Making',
    'Cloud & DevOps Learner',
];

const skillsData = [
    {
        name: 'Python',
        icon: <FaPython />,
        color: '#3776AB',
        details: ['REST API development (Kavro, EventFlow)', 'Async programming & background workers', 'Data validation with Pydantic models', 'Clean code with type hints & OOP']
    },
    {
        name: 'AWS',
        icon: <FaAws />,
        color: '#FF9900',
        details: ['EC2 instance setup & management', 'S3 + CloudFront CDN deployment', 'IAM roles & security policies', 'CI/CD pipelines with GitHub Actions']
    },
    {
        name: 'FastAPI',
        icon: <SiFastapi />,
        color: '#009688',
        details: ['RESTful API design & development', 'Authentication & middleware layers', 'Request validation & error handling', 'Auto-generated Swagger/OpenAPI docs']
    },
    {
        name: 'Linux',
        icon: <FaLinux />,
        color: '#FCC624',
        details: ['Server administration (Ubuntu)', 'Nginx reverse proxy configuration', 'Process management with Systemd', 'Shell scripting & SSH access']
    },
    {
        name: 'GitHub',
        icon: <FaGithub />,
        color: '#ffffff',
        details: ['Git version control & branching', 'CI/CD with GitHub Actions', 'Pull requests & code reviews', 'Automated build & deploy workflows']
    },
    {
        name: 'MySQL',
        icon: <SiMysql />,
        color: '#4479A1',
        details: ['Database schema design', 'Complex queries & joins', 'Indexing for query optimization', 'Transaction management & ACID']
    },
    {
        name: 'Docker',
        icon: <FaDocker />,
        color: '#2496ED',
        details: ['Containerization of microservices', 'Docker Compose multi-container apps', 'Multi-stage builds for optimization', 'Volume & network management']
    },
    {
        name: 'Redis',
        icon: <SiRedis />,
        color: '#DC382D',
        details: ['Caching for API performance', 'Message queues & job processing', 'Session storage with TTL expiry', 'Pub/Sub real-time messaging']
    },
    {
        name: 'Terraform',
        icon: <SiTerraform />,
        color: '#7B42BC',
        details: ['Infrastructure as Code (IaC)', 'AWS resource provisioning', 'State management & modules', 'Environment configuration']
    },
    {
        name: 'Cybersecurity',
        icon: <FaShieldAlt />,
        color: '#00D1FF',
        details: ['End-to-end encryption (NaCl)', 'OWASP Top 10 security practices', 'JWT auth & session management', 'Input validation & threat prevention']
    },

    {
        name: 'JavaScript',
        icon: <SiJavascript />,
        color: '#F7DF1E',
        details: ['ES6+ modern syntax & features', 'DOM manipulation & event handling', 'Async/Await & Fetch API', 'Frontend-backend integration']
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb />,
        color: '#47A248',
        details: ['NoSQL schema design', 'CRUD operations & aggregation', 'Mongoose ODM integration', 'Cloud hosting with Atlas']
    },
    {
        name: 'React.js',
        icon: <SiReact />,
        color: '#61DAFB',
        details: ['Component-based architecture', 'Hooks, Context & state management', 'React Router for SPA navigation', 'Responsive UI development']
    }
];

// Projects: Kavro, Session Guard, EventFlow, Cloud Fun Facts, AWS Portfolio
const projects = [
    {
        id: 1,
        slug: 'kavro',
        title: 'Kavro',
        tagline: 'Encrypted Messaging API',
        description: 'Ever wondered how WhatsApp keeps your chats private? This API encrypts messages BEFORE they leave your device — even the server can\'t read them.',
        tags: ['FastAPI: API', 'NaCl: Encryption', 'Redis: Storage', 'Docker: Deploy'],
        demo: 'https://kavro.duckdns.org/docs',
        github: 'https://github.com/ashishkrshaw/kavro.git',
        video: null,
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&auto=format&fit=crop',
        color: '#10b981'
    },
    {
        id: 2,
        slug: 'session-guard',
        title: 'Session Guard',
        tagline: 'Session Security Middleware',
        description: 'What if someone steals your login session? This middleware detects suspicious activity by checking IP changes and browser fingerprints on every request.',
        tags: ['Python: Logic', 'FastAPI: Middleware', 'JWT: Auth', 'Redis: Cache'],
        demo: null,
        github: 'https://github.com/ashishkrshaw/session-guard.git',
        video: null,
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop',
        color: '#f43f5e'
    },
    {
        id: 3,
        slug: 'event-flow',
        title: 'EventFlow',
        tagline: 'Background Task Queue',
        description: 'Why make users wait for slow operations? This system handles heavy tasks (emails, reports) in the background using Redis queues and worker processes.',
        tags: ['FastAPI: API', 'Redis: Queue', 'Python: Workers', 'Docker: Deploy'],
        demo: 'https://eventdriven.duckdns.org/docs',
        github: 'https://github.com/ashishkrshaw/Event_Driven.git',
        video: null,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop',
        color: '#3b82f6'
    },
    {
        id: 4,
        slug: 'cloud-fun-fact-generator',
        title: 'Cloud Fun Fact Generator',
        tagline: 'AI-Powered Cloud Knowledge Platform',
        description: 'Turns dense cloud computing concepts into engaging, AI-generated trivia. Built with Node.js, Express, and MongoDB — uses the Perplexity AI API to generate and persist facts on demand.',
        tags: ['Node.js: Backend', 'Express: API', 'MongoDB: Database', 'Perplexity: AI'],
        demo: null,
        github: 'https://github.com/ashishkrshaw/Cloud-FunFacts.git',
        video: 'https://youtu.be/KbsVKpe41Hk',
        image: '/images/Screenshot 2025-11-17 170323.png',
        color: '#8b5cf6'
    },

    {
        id: 7,
        slug: 'multi-cloud-dashboard',
        title: 'Multi-Cloud Dashboard',
        tagline: 'MERN Stack Dashboard',
        description: 'Managing AWS, Azure, AND GCP? This dashboard brings all your cloud metrics into one place. Full-stack MERN app with a clean interface.',
        tags: ['React: Frontend', 'Node.js: Backend', 'MongoDB: Database', 'Express: API'],
        demo: 'https://multicloud-management-dashboard.onrender.com/',
        github: 'https://github.com/ashishkrshaw/multicloud-management-dashboard',
        video: null,
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop',
        color: '#2563eb'
    },
    {
        id: 5,
        slug: 'aws-portfolio-hosting',
        title: 'AWS Cloud Portfolio',
        tagline: 'Static Site on AWS',
        description: 'This very portfolio! Hosted on S3, delivered globally via CloudFront CDN, auto-deploys on every git push. Yes, I built the infra too.',
        tags: ['S3: Storage', 'CloudFront: CDN', 'GitHub Actions: Deploy', 'Route 53: DNS'],
        demo: null,
        github: null,
        video: null,
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop',
        color: '#FF9900',
        docsLink: 'https://docs.google.com/document/d/1t4u7Gt1bdUH-cHazerUBN6VjV0-UMhILLKlmDBY-xwM/edit?usp=sharing'
    }
];

function TypeWriter() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState(roles[0]); // Start with full first role visible
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(true); // Start paused to show first role

    useEffect(() => {
        const currentRole = roles[roleIndex];

        // Faster deletion, smoother typing
        const typingSpeed = isDeleting ? 35 : 70;

        // Handle pause after completing a word
        if (isPaused) {
            const pauseTimeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, 2500); // Show complete text for 2.5 seconds
            return () => clearTimeout(pauseTimeout);
        }

        // Finished deleting - move to next role
        if (isDeleting && text === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        // Finished typing - pause
        if (!isDeleting && text === currentRole) {
            setIsPaused(true);
            return;
        }

        // Type or delete characters
        const timeout = setTimeout(() => {
            setText(isDeleting
                ? currentRole.slice(0, text.length - 1)
                : currentRole.slice(0, text.length + 1)
            );
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex, isPaused]);

    return <span>{text}<span className={styles.cursor}>|</span></span>;
}



// YouTube embed helper
function getYouTubeEmbedUrl(url: string): string {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : '';
}

export default function Home() {
    const [videoOpen, setVideoOpen] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    const handleContact = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, timestamp: new Date().toLocaleString() }) });
            setSent(true);
            setTimeout(() => { setSent(false); setFormData({ name: '', email: '', subject: '', message: '' }); }, 2000);
        } catch { alert('Failed to send'); }
        setSending(false);
    };

    return (
        <div className={styles.app}>
            {/* Cursor Glow Effect */}
            <CursorGlow />

            {/* NAVBAR */}
            <motion.nav 
                className={styles.navbar}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
                <a href="#" className={styles.logo} onClick={() => scrollTo('hero')}>AKS</a>
                <div className={styles.navLinks}>
                    <a onClick={() => scrollTo('about')}><FaCode /> <span>About</span></a>
                    <a onClick={() => scrollTo('skills')}><FaCog /> <span>Skills</span></a>
                    <a onClick={() => scrollTo('projects')}><FaFolderOpen /> <span>Projects</span></a>
                    <a onClick={() => scrollTo('certifications')}><FaAward /> <span>Certs</span></a>
                    <a onClick={() => scrollTo('contact')}><FaPaperPlane /> <span>Contact</span></a>
                </div>
                <div className={styles.navSocial}>
                    <a href="https://linkedin.com/in/asksaw" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/ashishkrshaw" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <LottieSocialIcon type="github" size={35} />
                    </a>
                </div>
                {/* Mobile Navigation */}
                <MobileNav scrollTo={scrollTo} />
            </motion.nav>

            {/* HERO - Professional Cloud/Backend Focus */}
            <section id="hero" className={styles.heroBackground}>
                {/* Background image */}
                <div className={styles.heroBgImage}>
                    <motion.img
                        src="https://images.unsplash.com/photo-1558494949-ef2e0fd8c3bc?q=80&w=1920&auto=format&fit=crop"
                        alt="Server Room Background"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3) contrast(1.2)' }}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    />
                    <div className={styles.heroBgOverlay} style={{
                        background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.95))',
                    }}></div>
                </div>

                {/* Two-column hero layout */}
                <div className={styles.heroTwoCol}>

                    {/* LEFT: Profile + text content */}
                    <motion.div
                        className={styles.heroOverlayContent}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        {/* Profile Picture with ring-burst pop */}
                        <motion.div
                            className={styles.heroAvatar}
                            initial={{ y: 250, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8, type: 'spring', stiffness: 150, damping: 12 }}
                            style={{ position: 'relative' }}
                        >
                            <motion.span
                                className={styles.aksBg}
                                animate={{ opacity: [0.1, 0.2, 0.1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                AKS
                            </motion.span>
                            <motion.img
                                src="/images/profile/ashish1.png"
                                alt="Ashish Kumar Shaw - Cloud and Backend Developer"
                                className={styles.profilePic}
                                onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=AKS&background=1595b6&color=fff&size=200'; }}
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{ scale: 1.08, filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.7))" }}
                            />
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Ashish Kumar Shaw
                        </motion.h1>

                        {/* TypeWriter Role */}
                        <motion.p
                            className={styles.role}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <TypeWriter />
                        </motion.p>

                        {/* Subtitle */}
                        <motion.p
                            className={styles.heroSubtitle}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            Building secure APIs &amp; scalable cloud solutions — Ashish Kumar Shaw
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className={styles.heroBtns}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <motion.a
                                href="/Ashish Kumar Shaw.pdf"
                                target="_blank"
                                className={styles.btnPrimary}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaAward /> View Resume
                            </motion.a>
                            <motion.button
                                onClick={() => scrollTo('contact')}
                                className={styles.btnOutline}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaComments /> Let's Talk
                            </motion.button>
                        </motion.div>

                        {/* Tech Stack Pills */}
                        <motion.div
                            className={styles.heroTechStack}
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { delayChildren: 0.8, staggerChildren: 0.1 }
                                }
                            }}
                        >
                            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -5, backgroundColor: "rgba(255, 153, 0, 0.15)", color: "#FF9900" }}><FaAws /> AWS</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -5, backgroundColor: "rgba(55, 118, 171, 0.15)", color: "#3776AB" }}><FaCode /> Python</motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -5, backgroundColor: "rgba(36, 150, 237, 0.15)", color: "#2496ED" }}>
                                <motion.span style={{ display: 'inline-flex' }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}><FaDocker /></motion.span> Docker
                            </motion.span>
                            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ y: -5, backgroundColor: "rgba(0, 209, 255, 0.15)", color: "#00D1FF" }}><FaShieldAlt /> Security</motion.span>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT: 3D Keyboard Portal */}
                    <motion.div
                        className={styles.heroKeyboardPanel}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0, duration: 0.8, ease: 'easeOut' }}
                    >
                        <HeroKeyboardPortal />
                    </motion.div>

                </div>

                {/* Scroll Down */}
                <motion.div
                    className={styles.scrollDown}
                    onClick={() => scrollTo('about')}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 1.5, duration: 0.6 },
                        y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.2, color: "#60a5fa" }}
                >
                    <FaArrowDown />
                </motion.div>
            </section>


            {/* ABOUT ME - Concise Summary with 3D Animation */}
            <section id="about" className={styles.section}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3em', alignItems: 'center' }}>
                    <motion.div 
                        className={styles.aboutContent}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ margin: 0 }}
                    >
                        <div className={styles.aboutPersonal}>
                            <p>Final year <strong>BCA Cloud & Security</strong> student who doesn't just study cloud — I <strong>build on it</strong>. Deployed apps on <strong>AWS (S3, CloudFront, Lambda)</strong>, containerized with <strong>Docker</strong>, and automated with <strong>GitHub Actions CI/CD</strong>.</p>
                            <p><strong>6 live projects</strong> including encrypted messaging APIs, multi-cloud dashboards, and AI-powered apps. Comfortable with <strong>Python, FastAPI, React, and MongoDB</strong>. Ready to contribute real code from day one.</p>
                        </div>
                        <div className={styles.aboutCtas} style={{ justifyContent: 'flex-start' }}>
                            <Link to="/research" className={styles.btnOutline}><FaBook /> View My Assignments</Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <CloudArchitecture3D />
                    </motion.div>
                </div>
            </section>


            <section id="skills" className={styles.section}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    Skills & Expertise
                </motion.h2>
                <div className={styles.skillsGrid}>
                    {skillsData.map((skill, i) => (
                        <motion.div 
                            key={skill.name} 
                            className={styles.skillCard} 
                            style={{ '--skill-color': skill.color } as React.CSSProperties}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                            <div className={styles.skillIcon}>
                                {skill.icon}
                            </div>
                            <h3>{skill.name}</h3>

                            {/* Hover Overlay */}
                            <div className={styles.skillOverlay}>
                                <div className={styles.skillOverlayContent}>
                                    <ul>
                                        {skill.details.map((detail, j) => (
                                            <li key={j}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>





            {/* PROJECTS - Creative IDE Gallery */}
            <section id="projects" className={styles.workSection}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    Latest Works
                </motion.h2>
                <div className={styles.projectsContainer}>
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            className={styles.project}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            {/* IDE Window Header */}
                            <div className={styles.laptopHeader}>
                                <div className={styles.dots}>
                                    <span style={{ background: '#ff5f56' }} />
                                    <span style={{ background: '#ffbd2e' }} />
                                    <span style={{ background: '#27ca40' }} />
                                </div>
                                <span className={styles.projectTitleSmall}>
                                    {p.title.toLowerCase().replace(/\s+/g, '-')}
                                </span>
                            </div>

                            {/* Project Image */}
                            <div className={styles.laptopScreen}>
                                <img src={p.image} alt={p.title} onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/0f172a/cbd5e1?text=Project'; }} />
                            </div>

                            {/* Content Panel */}
                            <div className={styles.projectInfo}>
                                <div>
                                    <h3>{p.title}</h3>
                                    <p className={styles.projectTagline} style={{ color: p.color, fontSize: '0.9em', marginBottom: '10px', fontWeight: 600 }}>{p.tagline}</p>
                                    <div className={styles.tags}>
                                        {p.tags.map(t => {
                                            const [tech, use] = t.split(':');
                                            return (
                                                <span key={t} style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                                                    <strong>{tech}</strong>{use && <span style={{ opacity: 0.7 }}>: {use}</span>}
                                                </span>
                                            );
                                        })}
                                    </div>
                                    <p>{p.description}</p>
                                </div>
                                <div className={styles.projectLinks}>
                                    {/* Handle External Docs Link vs Internal Project Page */}
                                    {(p as any).docsLink ? (
                                        <a href={(p as any).docsLink} target="_blank" rel="noopener noreferrer"><FaCode /> View Solution</a>
                                    ) : (
                                        <Link to={`/project/${p.slug}`}><FaCode /> Details</Link>
                                    )}
                                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Source</a>}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION CONNECTOR: Projects → Academic Work */}
            <SectionConnector fromLabel="Projects" toLabel="Academic Work" color="#3b82f6" />

            {/* ACADEMIC WORK — Industry-Weighted Assignments */}
            <section id="academic-work" className={styles.section}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    Academic Work
                </motion.h2>
                <motion.p 
                    className={styles.academicIntro}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Hands-on assignments completed under TCS iON's industry-aligned curriculum — each one solving real cloud infrastructure and security challenges.
                </motion.p>
                <div className={styles.academicGrid}>
                    <motion.a 
                        href="https://docs.google.com/document/d/1dpvIXbkLinuFM9HmpdwrYZ3L7dKDljn87VCaHlI3B0w/edit?usp=sharing" 
                        target="_blank" rel="noopener noreferrer" className={styles.academicCard2}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <div className={styles.academicCardIcon}><FaCloud /></div>
                        <div className={styles.academicCardBody}>
                            <span className={styles.academicTag}>BCA Cloud & Security • TCS iON</span>
                            <h4>Cloud Compute Solution</h4>
                            <p>Comparative deployment of a portfolio across three architectures — EC2 direct hosting, Docker containers, and AWS Lambda serverless — analyzing cost, scalability, and performance tradeoffs.</p>
                        </div>
                        <FaExternalLinkAlt className={styles.academicLinkIcon} />
                    </motion.a>
                    <motion.a 
                        href="https://docs.google.com/document/d/1vUFwHWiS4VcbgbffzbJkiAmckIknOuc26TRCttUfbF4/edit?usp=sharing" 
                        target="_blank" rel="noopener noreferrer" className={styles.academicCard2}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <div className={styles.academicCardIcon}><FaShieldAlt /></div>
                        <div className={styles.academicCardBody}>
                            <span className={styles.academicTag}>BCA Cloud & Security • TCS iON</span>
                            <h4>Cloud Security Strategy</h4>
                            <p>Multi-layered security implementation applying the AWS Shared Responsibility Model — covering IAM policies, VPC network isolation, encryption at rest, and security group configurations.</p>
                        </div>
                        <FaExternalLinkAlt className={styles.academicLinkIcon} />
                    </motion.a>
                    <motion.a 
                        href="https://docs.google.com/document/d/1ysDgNE4sSV5yootfFHuriPgLcSEkKbxpnH7FmgE7-5E/edit?usp=sharing" 
                        target="_blank" rel="noopener noreferrer" className={styles.academicCard2}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <div className={styles.academicCardIcon}><FaShieldAlt /></div>
                        <div className={styles.academicCardBody}>
                            <span className={styles.academicTag}>BCA Cloud & Security • TCS iON</span>
                            <h4>Healthcare Cybersecurity Assessment</h4>
                            <p>Risk assessment of a healthcare clinic covering threat analysis, vulnerability identification, incident response planning, and security recommendations aligned with industry standards.</p>
                        </div>
                        <FaExternalLinkAlt className={styles.academicLinkIcon} />
                    </motion.a>
                    <motion.a 
                        href="https://docs.google.com/document/d/1WfqUq-BmLhB3z-ON38wTVDJp9mswczW8Mgv6vY2nJfg/edit?usp=sharing" 
                        target="_blank" rel="noopener noreferrer" className={styles.academicCard2}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        <div className={styles.academicCardIcon}><FaBrain /></div>
                        <div className={styles.academicCardBody}>
                            <span className={styles.academicTag}>BCA Cloud & Security • TCS iON</span>
                            <h4>Cloud AI/ML Pipeline</h4>
                            <p>End-to-end ML pipeline using AWS SageMaker — from data preprocessing and model training to deployment and real-time inference monitoring in production.</p>
                        </div>
                        <FaExternalLinkAlt className={styles.academicLinkIcon} />
                    </motion.a>
                    <motion.a 
                        href="https://docs.google.com/document/d/1Gtg3pvnbflNaZn8ANywg2w1qSHNNtLn1kB4l3HyVxfw/edit?usp=sharing" 
                        target="_blank" rel="noopener noreferrer" className={styles.academicCard2}
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        <div className={styles.academicCardIcon}><FaServer /></div>
                        <div className={styles.academicCardBody}>
                            <span className={styles.academicTag}>BCA Cloud & Security • TCS iON</span>
                            <h4>Cloud Storage & Databases</h4>
                            <p>Data management system using AWS S3 for object storage and DynamoDB for NoSQL database operations — implementing CRUD workflows and access control policies.</p>
                        </div>
                        <FaExternalLinkAlt className={styles.academicLinkIcon} />
                    </motion.a>
                </div>
                <div className={styles.ctaCenter}>
                    <Link to="/research" className={styles.btnOutline}><FaBook /> View All Assignments</Link>
                </div>
            </section>

            {/* SECTION CONNECTOR: Academic Work → Certifications */}
            <SectionConnector fromLabel="Academic Work" toLabel="Certifications" color="#a78bfa" />

            {/* CERTIFICATIONS - Creative Redesign */}
            <section id="certifications" className={styles.section}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    Certifications
                </motion.h2>
                <div className={styles.certGrid}>
                    {certifications.map((c, i) => (
                        <motion.a 
                            key={c.id} 
                            href={c.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.certItem}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <div className={styles.certIconBg}>{c.icon}</div>
                            <div className={styles.certContent}>
                                <h4>{c.title}</h4>
                                <p>{c.issuer}</p>
                            </div>
                            <div className={styles.certGlow}></div>
                            <FaExternalLinkAlt className={styles.certArrow} />
                        </motion.a>
                    ))}
                </div>
                <div className={styles.ctaCenter}>
                    <Link to="/certifications" className={styles.btnOutline}><FaAward /> View All Credentials</Link>
                </div>
            </section>

            {/* EDUCATION — Animated Vertical Timeline */}
            <section id="education" className={styles.section}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    Education
                </motion.h2>

                <div className={styles.eduTimeline}>
                    {/* Vertical glowing track */}
                    <div className={styles.eduTrack}>
                        <motion.div
                            className={styles.eduTrackFill}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                        />
                    </div>

                    {academics.map((a, i) => (
                        <motion.div
                            key={a.degree}
                            className={styles.eduItem}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            {/* Glowing dot on the track — outer: spring entrance, inner: tween glow */}
                            <motion.div
                                className={styles.eduDot}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.15 + 0.3, type: 'spring', stiffness: 260 }}
                            >
                                <motion.div
                                    style={{ display: 'contents' }}
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
                                >
                                    <FaGraduationCap size={14} />
                                </motion.div>
                            </motion.div>

                            {/* Card */}
                            <div className={styles.eduCard}>
                                <div className={styles.eduYear}>{a.year}</div>
                                <h4>{a.degree}</h4>
                                <p>{a.institution}</p>
                                <span className={`${styles.status} ${a.status === 'Pursuing' ? styles.statusActive : ''}`}>
                                    {a.status === 'Pursuing' ? '● Pursuing' : '✓ Completed'}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CONTACT - Creative Redesign */}
            <section id="contact" className={styles.contactSection}>
                <motion.div 
                    className={styles.contactContent}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Ready to Scale?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Let's build secure, high-performance cloud solutions together.
                        <br />Currently available for backend & cloud engineering roles.
                    </motion.p>

                    <div className={styles.contactCardWrapper}>
                        {/* Email Card to sawashishkumar327@gmail.com */}
                        <motion.a 
                            href="mailto:sawashishkumar327@gmail.com" 
                            className={styles.contactCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <div className={styles.contactIconBox}><FaEnvelope /></div>
                            <h3>Email Me</h3>
                            <span>sawashishkumar327@gmail.com</span>
                        </motion.a>

                        {/* LinkedIn Card */}
                        <motion.a 
                            href="https://linkedin.com/in/asksaw" 
                            target="_blank" rel="noopener noreferrer" 
                            className={styles.contactCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <div className={styles.contactIconBox}><FaLinkedin /></div>
                            <h3>LinkedIn</h3>
                            <span>Let's connect & chat</span>
                        </motion.a>

                        {/* GitHub Card */}
                        <motion.a 
                            href="https://github.com/ashishkrshaw" 
                            target="_blank" rel="noopener noreferrer" 
                            className={styles.contactCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <div className={styles.contactIconBox}><FaGithub /></div>
                            <h3>GitHub</h3>
                            <span>View my code repositories</span>
                        </motion.a>
                    </div>

                    {/* Embedded Contact Form */}
                    <motion.div 
                        className={styles.contactFormEmbedded}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {sent ? (
                            <div className={styles.sent}><FaCheck /> Message Sent! Thank you.</div>
                        ) : (
                            <form onSubmit={handleContact}>
                                <input type="text" placeholder="Full Name" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                <input type="email" placeholder="Email Address" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                <input type="text" placeholder="Subject" required value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} />
                                <textarea placeholder="Your Message..." rows={5} required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                                <button type="submit" disabled={sending}>
                                    {sending ? <><FaSpinner className={styles.spin} /> Sending...</> : <><FaPaperPlane /> Send Message</>}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    <p className={styles.copyright} style={{ marginTop: '3em' }}>
                        © {new Date().getFullYear()} Ashish Kumar Shaw. Built with React & AWS.
                    </p>
                </motion.div>
            </section>



            {/* VIDEO MODAL */}
            <AnimatePresence>
                {videoOpen && (
                    <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setVideoOpen(null)}>
                        <motion.div className={styles.videoModal} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} onClick={e => e.stopPropagation()}>
                            <button className={styles.closeBtn} onClick={() => setVideoOpen(null)}><FaTimes /></button>
                            <div className={styles.videoWrapper}>
                                <iframe src={getYouTubeEmbedUrl(videoOpen)} title="Project Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
