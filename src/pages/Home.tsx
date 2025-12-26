import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Matter from 'matter-js';
import {
    FaAws, FaDocker, FaShieldAlt, FaGithub, FaLinkedin,
    FaEnvelope, FaExternalLinkAlt, FaTimes, FaWhatsapp, FaArrowDown,
    FaBriefcase, FaServer, FaCode, FaUsers, FaComments, FaCheck, FaSpinner,
    FaGraduationCap, FaAward, FaGoogle, FaHome, FaCog, FaFolderOpen,
    FaPaperPlane, FaBook, FaYoutube, FaInfoCircle
} from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';
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
            World.add(engine.world, Bodies.polygon(x, y, Math.floor(Common.random(3, 6)), Common.random(5, 40), { friction: 0, frictionAir: 0.02, render: { fillStyle: '#222', strokeStyle: '#333', lineWidth: 1 } }));
            World.add(engine.world, Bodies.circle(x, y, Common.random(3, 15), { friction: 0, frictionAir: 0.01, render: { fillStyle: '#27292d', strokeStyle: '#111', lineWidth: 1 } }));
        }
        // Track mouse via window, not canvas - allows scroll to work
        const mousePos = { x: width / 2, y: height / 2 };
        const handleMouseMove = (e: MouseEvent) => { mousePos.x = e.clientX; mousePos.y = e.clientY; };
        window.addEventListener('mousemove', handleMouseMove);
        Events.on(engine, 'afterUpdate', () => {
            Body.translate(attractiveBody, { x: (mousePos.x - attractiveBody.position.x) * 0.1, y: (mousePos.y - attractiveBody.position.y) * 0.1 });
            engine.world.bodies.forEach((b: any) => { if (b !== attractiveBody && !b.isStatic) Body.applyForce(b, b.position, { x: (attractiveBody.position.x - b.position.x) * 1e-6, y: (attractiveBody.position.y - b.position.y) * 1e-6 }); });
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
                    <a onClick={() => scrollTo('hero')}><FaHome /> <span>Home</span></a>
                    <a onClick={() => scrollTo('about')}><FaCode /> <span>About</span></a>
                    <a onClick={() => scrollTo('skills')}><FaCog /> <span>Skills</span></a>
                    <a onClick={() => scrollTo('projects')}><FaFolderOpen /> <span>Projects</span></a>
                    <a onClick={() => scrollTo('certifications')}><FaAward /> <span>Certs</span></a>
                    <a onClick={() => scrollTo('contact')}><FaPaperPlane /> <span>Contact</span></a>
                </div>
                <div className={styles.navSocial}>
                    <a href="https://linkedin.com/in/asksaw" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/ashishkrshaw" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </div>
            </nav>

            {/* HERO */}
            <section id="hero" className={styles.hero}>
                <ParticleCanvas />
                <motion.div className={styles.heroContent} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <img src="/images/profile/ashish1.png" alt="Ashish" className={styles.profilePic} onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=AKS&background=1595b6&color=fff&size=200'; }} />
                    <h1>Ashish Kumar Shaw</h1>
                    <p className={styles.role}>Cloud & Backend Developer</p>
                    <p className={styles.tagline}>Building secure APIs with Python. Deploying on AWS.</p>
                    <div className={styles.heroBtns}>
                        <a href="/Ashish Kumar Shaw.pdf" target="_blank" className={styles.btnPrimary}>Resume</a>
                        <button onClick={() => setContactOpen(true)} className={styles.btnOutline}>Contact Me</button>
                    </div>
                </motion.div>
                <div className={styles.scrollDown} onClick={() => scrollTo('about')}><FaArrowDown /></div>
            </section>

            {/* ABOUT ME - Europass Style */}
            <section id="about" className={styles.section}>
                <h2>About Me</h2>
                <div className={styles.aboutContent}>
                    <p>I'm a <strong>BCA student specializing in Cloud Computing & Security</strong> at Amity University Online (2023-2026). Passionate about building secure, scalable backend systems.</p>
                    <p>I develop <strong>REST APIs with Python/FastAPI</strong>, deploy serverless applications on <strong>AWS</strong>, and follow <strong>OWASP security guidelines</strong>. Strong believer in clean code, automation, and collaborative teamwork.</p>
                    <p><strong>Multilingual:</strong> Hindi (Native), English (Professional), Japanese (N3), German (Elementary). Open to international opportunities.</p>
                    <div className={styles.aboutCtas}>
                        <Link to="/research" className={styles.btnOutline}><FaBook /> Academic Assignments & Research</Link>
                    </div>
                </div>
            </section>

            {/* SKILLS - Categorized */}
            <section id="skills" className={styles.section}>
                <h2>Skills & Expertise</h2>
                <div className={styles.skillCategories}>
                    {/* Programming Languages */}
                    <div className={styles.skillCategory}>
                        <h3><FaCode /> Programming</h3>
                        <div className={styles.skillTags}>
                            <span>Python</span>
                            <span>SQL</span>
                        </div>
                    </div>

                    {/* Backend */}
                    <div className={styles.skillCategory}>
                        <h3><FaServer /> Backend</h3>
                        <div className={styles.skillTags}>
                            <span>FastAPI</span>
                            <span>REST APIs</span>
                            <span>Microservices</span>
                            <span>Monolithic</span>
                            <span>JWT Auth</span>
                        </div>
                    </div>

                    {/* Cloud Technologies */}
                    <div className={styles.skillCategory}>
                        <h3><FaAws /> Cloud (AWS)</h3>
                        <div className={styles.skillTags}>
                            <span>EC2</span>
                            <span>Lambda</span>
                            <span>S3</span>
                            <span>API Gateway</span>
                            <span>IAM</span>
                            <span>VPC</span>
                            <span>Security Groups</span>
                            <span>Load Balancing</span>
                            <span>CloudWatch</span>
                        </div>
                    </div>

                    {/* Security */}
                    <div className={styles.skillCategory}>
                        <h3><FaShieldAlt /> Security</h3>
                        <div className={styles.skillTags}>
                            <span>OWASP</span>
                            <span>Risk Assessment</span>
                            <span>Compliance</span>
                            <span>Encryption (Transit/Rest)</span>
                            <span>Cryptography</span>
                        </div>
                    </div>

                    {/* DevOps & Tools */}
                    <div className={styles.skillCategory}>
                        <h3><FaDocker />Tools</h3>
                        <div className={styles.skillTags}>
                            <span>Git</span>
                            <span>GitHub Actions</span>
                            <span>Linux</span>
                            <span>Docker</span>
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className={styles.skillCategory}>
                        <h3><FaUsers /> Soft Skills</h3>
                        <div className={styles.skillTags}>
                            <span>Team Work</span>
                            <span>Communication</span>
                            <span>Problem Solving</span>
                            <span>Analytical Thinking</span>
                            <span>Open-Minded</span>
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

            {/* EDUCATION */}
            <section className={styles.section}>
                <h2>Education</h2>
                <div className={styles.academicsList}>{academics.map(a => <div key={a.degree} className={styles.academicCard}><FaGraduationCap /><div><h4>{a.degree}</h4><p>{a.institution} • {a.year} • {a.status}</p></div></div>)}</div>
            </section>

            {/* CONTACT */}
            <section id="contact" className={styles.contactSection}>
                <h2>Let's Connect</h2>
                <p>Available for Backend/Cloud roles</p>
                <div className={styles.contactBtns}>
                    <button onClick={() => setContactOpen(true)} className={styles.btnPrimary}><FaEnvelope /> Send Message</button>
                    <a href="https://linkedin.com/in/asksaw" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/ashishkrshaw" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://wa.me/917482947099" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
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
