import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Matter from 'matter-js';
import {
    FaAws, FaDocker, FaGithub, FaLinkedin,
    FaEnvelope, FaExternalLinkAlt, FaTimes, FaWhatsapp, FaArrowDown,
    FaBriefcase, FaCheck, FaSpinner, FaCode, FaServer, FaShieldAlt,
    FaGraduationCap, FaAward, FaGoogle, FaCog, FaFolderOpen,
    FaPaperPlane, FaBook, FaYoutube, FaInfoCircle, FaComments, FaTools, FaCloud
} from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';
import LottieSocialIcon from '../components/LottieSocialIcon';
import styles from './Home.module.css';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzTu9IbuxizIZ5p8IQEkPTli2Sjsf8On_WZoQ-efiTZdGqImukSq-s-rLcWWQF4vUS-/exec';

// Projects with video URLs and alternating positions
const projects = [
    { id: 1, slug: 'cloud-fun-fact-generator', title: 'Cloud Fun Fact Generator', description: 'Serverless AWS app with Perplexity AI. 1000+ cloud facts, 60% user engagement.', tags: ['AWS', 'Lambda', 'DynamoDB'], demo: 'https://staging.d2qhlpatspoxmm.amplifyapp.com/', github: 'https://github.com/ashishkrshaw/Cloud-FunFacts.git', video: 'https://youtu.be/KbsVKpe41Hk', image: '/images/Screenshot 2025-11-17 170323.png', color: '#fc815c' },
    { id: 2, slug: 'secure-s3-file-uploader', title: 'Secure S3 File Uploader', description: 'Encrypted uploads with VirusTotal scanning, CloudFront delivery. 100% secure.', tags: ['S3', 'CloudFront', 'Security'], demo: 'https://d48fldudi0fyu.cloudfront.net/', github: 'https://github.com/ashishkrshaw/secure-file-uploader.git', video: 'https://youtu.be/047FKrPQBCM', image: '/images/Screenshot 2025-11-17 172803.png', color: '#639' },
    { id: 3, slug: 'multi-cloud-management-dashboard', title: 'MultiCloud Dashboard', description: 'AWS, Azure, GCP unified dashboard. 40% efficiency boost, Telegram alerts.', tags: ['AWS', 'Azure', 'GCP'], demo: 'https://multicloud-management-dashboard.onrender.com/', github: 'https://github.com/ashishkrshaw/multicloud-management-dashboard', video: '', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600', color: '#47afa1' },
    { id: 4, slug: 'heart-disease-predictor', title: 'Heart Disease Predictor', description: 'ML model with 92% accuracy on Amazon SageMaker. Early diagnosis support.', tags: ['Python', 'SageMaker', 'ML'], demo: 'https://aiml-2ffm.onrender.com/', github: 'https://github.com/ashishkrshaw/heart-disease-predictor', video: '', image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600', color: '#2694d4' },
];

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
    'Aspiring Cloud & Backend Engineer',
    'Python & AWS Developer',
    'Junior Cloud Developer',
];

function TypeWriter() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const speed = isDeleting ? 50 : 100;

        if (!isDeleting && text === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        if (isDeleting && text === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setText(isDeleting ? currentRole.slice(0, text.length - 1) : currentRole.slice(0, text.length + 1));
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return <span>{text}<span className={styles.cursor}>|</span></span>;
}

function ParticleCanvas() {
    const canvasRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!canvasRef.current) return;
        const { Engine, Render, Runner, Bodies, World, Events, Body, Common } = Matter;
        const width = window.innerWidth, height = window.innerHeight;
        const engine = Engine.create(); engine.world.gravity.y = 0; engine.world.gravity.x = 0;
        const render = Render.create({ element: canvasRef.current, engine, options: { width, height, wireframes: false, background: 'transparent' } });
        const attractiveBody = Bodies.circle(width / 2, height / 2, 0, { isStatic: true, render: { fillStyle: 'transparent' } });
        World.add(engine.world, attractiveBody);
        for (let i = 0; i < 50; i++) {
            const x = Common.random(0, width), y = Common.random(0, height);
            const color = i % 2 === 0 ? '#8b0000' : '#00a8cc';
            World.add(engine.world, Bodies.polygon(x, y, Math.floor(Common.random(3, 6)), Common.random(5, 40), { friction: 0, frictionAir: 0.02, render: { fillStyle: color, strokeStyle: color, lineWidth: 1, opacity: 0.6 } }));
            World.add(engine.world, Bodies.circle(x, y, Common.random(3, 15), { friction: 0, frictionAir: 0.01, render: { fillStyle: color, strokeStyle: color, lineWidth: 1, opacity: 0.8 } }));
        }
        // Track mouse via window, not canvas - allows scroll to work
        const mousePos = { x: width / 2, y: height / 2 };
        const handleMouseMove = (e: MouseEvent) => { mousePos.x = e.clientX; mousePos.y = e.clientY; };
        window.addEventListener('mousemove', handleMouseMove);
        Events.on(engine, 'afterUpdate', () => {
            Body.translate(attractiveBody, { x: (mousePos.x - attractiveBody.position.x) * 0.1, y: (mousePos.y - attractiveBody.position.y) * 0.1 });
            engine.world.bodies.forEach((b: any) => { if (b !== attractiveBody && !b.isStatic) Body.applyForce(b, b.position, { x: (attractiveBody.position.x - b.position.x) * 1e-6, y: (attractiveBody.position.y - b.position.y) * 1e-6 }); }); // eslint-disable-line @typescript-eslint/no-explicit-any
        });
        const runner = Runner.create(); Runner.run(runner, engine); Render.run(render);
        return () => { window.removeEventListener('mousemove', handleMouseMove); Render.stop(render); Runner.stop(runner); World.clear(engine.world, false); Engine.clear(engine); render.canvas?.remove(); };
    }, []);
    return <div ref={canvasRef} className={styles.particleCanvas} />;
}

// YouTube embed helper
function getYouTubeEmbedUrl(url: string): string {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : '';
}

export default function Home() {
    const [contactOpen, setContactOpen] = useState(false);
    const [videoOpen, setVideoOpen] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [aboutExpanded, setAboutExpanded] = useState(false);

    const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    const handleContact = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...formData, timestamp: new Date().toLocaleString() }) });
            setSent(true);
            setTimeout(() => { setContactOpen(false); setSent(false); setFormData({ name: '', email: '', subject: '', message: '' }); }, 2000);
        } catch { alert('Failed to send'); }
        setSending(false);
    };

    return (
        <div className={styles.app}>
            {/* NAVBAR */}
            <nav className={styles.navbar}>
                <a href="#" className={styles.logo} onClick={() => scrollTo('hero')}>AKS</a>
                <div className={styles.navLinks}>

                    <a onClick={() => scrollTo('about')}><FaCode /> <span>About</span></a>
                    <a onClick={() => scrollTo('skills')}><FaCog /> <span>Skills</span></a>
                    <a onClick={() => scrollTo('projects')}><FaFolderOpen /> <span>Projects</span></a>
                    <a onClick={() => scrollTo('certifications')}><FaAward /> <span>Certs</span></a>
                    <a onClick={() => scrollTo('contact')}><FaPaperPlane /> <span>Contact</span></a>
                </div>
                <div className={styles.navSocial}>
                    <a href="https://linkedin.com/in/asksaw" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/ashishkrshaw" target="_blank" rel="noopener noreferrer">
                        <LottieSocialIcon type="github" size={35} />
                    </a>
                </div>
            </nav>

            {/* HERO */}
            <section id="hero" className={styles.hero}>
                <ParticleCanvas />
                <motion.div className={styles.heroContent} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <img src="/images/profile/ashish1.png" alt="Ashish" className={styles.profilePic} onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=AKS&background=1595b6&color=fff&size=200'; }} />
                    <h1>Ashish Kumar Shaw</h1>
                    <p className={styles.role}><TypeWriter /></p>
                    <p className={styles.tagline}>Building secure APIs with Python. Deploying on AWS.</p>
                    <div className={styles.heroBtns}>
                        <a href="/Ashish Kumar Shaw.pdf" target="_blank" className={styles.btnPrimary}>Resume</a>
                        <button onClick={() => setContactOpen(true)} className={styles.btnOutline}>Contact Me</button>
                    </div>
                </motion.div>
                <div className={styles.scrollDown} onClick={() => scrollTo('about')}><FaArrowDown /></div>
            </section>

            {/* ABOUT ME - Europass + Japanese Concept */}
            <section id="about" className={styles.section}>
                <h2>About Me</h2>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutPersonal}>
                        <p>I am a dedicated practitioner of software engineering, specializing in the architecture of <strong>secure, high-performance backend systems</strong> and <strong>robust cloud deployments</strong>. My journey is driven by a desire to master the core foundation of scalable environments where security is the primary directive, not an afterthought.</p>
                        <p>I actively <strong>conduct deep research</strong> in my work projects, leveraging data-driven insights to architect solutions that are both innovative and resilient. I believe that true engineering excellence comes from understanding the "why" behind every line of code, ensuring that every project I touch is optimized for performance and security.</p>

                        <div className={styles.mobileReadMoreContent}>
                            <AnimatePresence>
                                {(aboutExpanded || typeof window !== 'undefined' && window.innerWidth > 768) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <p>Beyond the terminal, I am deeply rooted in linguistic and cultural exploration. From the poetic depth of my native <strong>Hindi</strong> to the professional clarity of <strong>English</strong>, I have expanded my horizons to include <strong>Japanese (N3)</strong> and <strong>German (Elementary)</strong>. I see software development as a craft: it requires the same patience, precision, and discipline as mastering a new language.</p>
                                        <p>I have successfully engineered and deployed <strong>secured cloud infrastructure</strong>, integrating automated CI/CD pipelines with a relentless focus on <strong>OWASP standards</strong> and <strong>clean code</strong>. I am now seeking opportunities to further challenge my architectural capabilities and contribute to high-impact projects as a lifelong learner.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            className={styles.readMoreBtn}
                            onClick={() => setAboutExpanded(!aboutExpanded)}
                        >
                            {aboutExpanded ? 'Read Less' : 'Read More...'}
                        </button>
                    </div>
                    <div className={styles.scrollDownTip}>Scroll down for my skills and my projects <FaArrowDown /></div>
                    <div className={styles.aboutCtas}>
                        <Link to="/research" className={styles.btnOutline}><FaBook /> Academic Assignments & Research</Link>
                    </div>
                </div>
            </section>

            {/* SKILLS - Categorized */}
            <section id="skills" className={styles.section}>
                <h2>Skills & Expertise</h2>
                <div className={styles.skillCategories}>
                    {/* Programming & Backend */}
                    <div className={styles.skillCategory}>
                        <h3><FaCode /> Programming & Backend</h3>
                        <div className={styles.skillTags}>
                            <span>Python</span>
                            <span>SQL</span>
                            <span>Bash/Shell</span>
                            <span>FastAPI</span>
                            <span>RESTful APIs</span>
                            <span>Asynchronous Programming</span>
                            <span>JWT Auth</span>
                        </div>
                    </div>

                    {/* Cloud Infrastructure (AWS) */}
                    <div className={styles.skillCategory}>
                        <h3><FaCloud /> Cloud Infrastructure (AWS)</h3>
                        <div className={styles.skillTags}>
                            <span>Lambda (Serverless)</span>
                            <span>S3</span>
                            <span>EC2</span>
                            <span>VPC</span>
                            <span>Terraform (IaC)</span>
                            <span>CloudWatch</span>
                            <span>Load Balancing</span>
                        </div>
                    </div>

                    {/* Cloud & Application Security */}
                    <div className={styles.skillCategory}>
                        <h3><FaShieldAlt /> Cloud & Application Security</h3>
                        <div className={styles.skillTags}>
                            <span>AWS IAM (Least Privilege)</span>
                            <span>Security Groups/NACLs</span>
                            <span>OWASP Top 10</span>
                            <span>Cryptography</span>
                            <span>Container Security</span>
                            <span>Encryption (Transit/Rest)</span>
                        </div>
                    </div>

                    {/* Tools & DevOps */}
                    <div className={styles.skillCategory}>
                        <h3><FaTools /> Tools & DevOps</h3>
                        <div className={styles.skillTags}>
                            <span>Docker</span>
                            <span>Linux CLI</span>
                            <span>Git</span>
                            <span>GitHub Actions (CI/CD)</span>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className={styles.skillCategory}>
                        <h3><FaComments /> Languages</h3>
                        <div className={styles.langTags}>
                            <span>🇮🇳 Hindi <em>Native</em></span>
                            <span>🇬🇧 English <em>Professional</em></span>
                            <span>🇯🇵 Japanese <em>N3</em></span>
                            <span>🇩🇪 German <em>Elementary</em></span>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE */}
            <section className={styles.section}>
                <h2>Experience</h2>
                <div className={styles.expGrid}>
                    <div className={styles.expCard}>
                        <div className={styles.expIcon}><FaBriefcase /></div>
                        <div>
                            <h3>Cloud Security Intern</h3>
                            <p className={styles.expMeta}>TCS iON • 2024</p>
                            <p>Secured Docker on AWS. IAM policies, Security Groups, Trivy scanning.</p>
                            <Link to="/experience" className={styles.expDetailsBtn}><FaInfoCircle /> Details</Link>
                        </div>
                    </div>
                    <div className={styles.expCard}>
                        <div className={styles.expIcon}><FaServer /></div>
                        <div>
                            <h3>Personal Cloud Infrastructure</h3>
                            <p className={styles.expMeta}>Self-Hosted • 2023-Present</p>
                            <p>Built & managed home lab with AWS, Docker. Deployed serverless apps, CI/CD pipelines.</p>
                            <Link to="/experience" className={styles.expDetailsBtn}><FaInfoCircle /> Details</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS with Video + Details buttons */}
            <section id="projects" className={styles.workSection}>
                <h2>Latest Works</h2>
                <div className={styles.projectsContainer}>
                    <div className={styles.verticalLine} />
                    {projects.map((p, i) => (
                        <motion.div
                            key={p.id}
                            className={`${styles.project} ${i % 2 === 0 ? styles.left : styles.right}`}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* Laptop Mockup */}
                            <div className={styles.laptop}>
                                <div className={styles.laptopScreen}>
                                    <div className={styles.laptopHeader}>
                                        <span className={styles.dots}>
                                            <span style={{ background: '#ff5f56' }} />
                                            <span style={{ background: '#ffbd2e' }} />
                                            <span style={{ background: '#27ca40' }} />
                                        </span>
                                    </div>
                                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                                        <img src={p.image} alt={p.title} onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/191919/666?text=Project'; }} />
                                    </a>
                                </div>
                                <div className={styles.laptopBase} />
                            </div>

                            {/* Project Info */}
                            <div className={styles.projectInfo}>
                                <span className={styles.circleDot} style={{ borderColor: p.color }} />
                                <h3 style={{ color: p.color }}>{p.title}</h3>
                                <p>{p.description}</p>
                                <div className={styles.tags}>{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                                <div className={styles.projectLinks}>
                                    <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ background: p.color }}><FaExternalLinkAlt /> Demo</a>
                                    {p.video && <button onClick={() => setVideoOpen(p.video)} className={styles.videoBtn}><FaYoutube /> Video</button>}
                                    <Link to={`/project/${p.slug}`} className={styles.detailsBtn}><FaInfoCircle /> Details</Link>
                                    <a href={p.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Code</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CERTIFICATIONS */}
            <section id="certifications" className={styles.section}>
                <h2>Certifications</h2>
                <div className={styles.certsGrid}>
                    {certifications.map(c => (
                        <a key={c.id} href={c.link} target="_blank" rel="noopener noreferrer" className={styles.certCard}>
                            <span className={styles.certIcon}>{c.icon}</span>
                            <div><h4>{c.title}</h4><p>{c.issuer}</p></div>
                            <FaExternalLinkAlt className={styles.certLink} />
                        </a>
                    ))}
                </div>
                <div className={styles.ctaCenter}>
                    <Link to="/certifications" className={styles.btnOutline}><FaAward /> View All Certifications & Badges</Link>
                </div>
            </section>

            {/* EDUCATION & TRAINING - Europass Layout */}
            <section id="education" className={styles.section}>
                <h2>Education</h2>
                <div className={styles.academicsList}>
                    {academics.map(a => (
                        <div key={a.degree} className={styles.academicCard}>
                            <FaGraduationCap />
                            <div className={styles.academicInfo}>
                                <h4>{a.degree}</h4>
                                <p className={styles.institution}>{a.institution}</p>
                                <p className={styles.year}>{a.year} • <span className={styles.status}>{a.status}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className={styles.contactSection}>
                <h2>Let's Connect</h2>
                <p>Available for Backend/Cloud roles</p>
                <div className={styles.contactBtns}>
                    <button onClick={() => setContactOpen(true)} className={styles.btnPrimary}><FaEnvelope /> Send Message</button>
                    <a href="https://linkedin.com/in/asksaw" target="_blank" rel="noopener noreferrer" className={`${styles.lottieLink} ${styles.linkedin}`}>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/ashishkrshaw" target="_blank" rel="noopener noreferrer" className={`${styles.lottieLink} ${styles.github}`}>
                        <LottieSocialIcon type="github" size={32} />
                    </a>
                    <a href="mailto:ashishkrshaw5@gmail.com" className={`${styles.lottieLink} ${styles.gmail}`}>
                        <LottieSocialIcon type="gmail" size={32} />
                    </a>
                    <a href="https://wa.me/917482947099" target="_blank" rel="noopener noreferrer" className={`${styles.lottieLink} ${styles.whatsapp}`}>
                        <FaWhatsapp />
                    </a>
                </div>
                <p className={styles.copyright}>© {new Date().getFullYear()} Ashish Kumar Shaw</p>
            </section>

            {/* CONTACT MODAL */}
            <AnimatePresence>
                {contactOpen && (
                    <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setContactOpen(false)}>
                        <motion.div className={styles.modal} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} onClick={e => e.stopPropagation()}>
                            <button className={styles.closeBtn} onClick={() => setContactOpen(false)}><FaTimes /></button>
                            <h3>Send Message</h3>
                            {sent ? <div className={styles.sent}><FaCheck /> Message Sent!</div> : (
                                <form onSubmit={handleContact}>
                                    <input type="text" placeholder="Full Name *" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                    <input type="email" placeholder="Email *" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                    <input type="text" placeholder="Subject *" required value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} />
                                    <textarea placeholder="Message *" rows={4} required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
                                    <button type="submit" disabled={sending}>{sending ? <><FaSpinner className={styles.spin} /> Sending...</> : 'Send'}</button>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
