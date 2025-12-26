import { FaArrowLeft, FaExternalLinkAlt, FaFlask, FaBook, FaGraduationCap, FaCloud, FaShieldAlt, FaDatabase, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Research.module.css';

// Academic Assignments with icons
const assignments = [
    {
        id: 1,
        title: 'Cloud Security Implementation',
        course: 'Cloud Computing',
        description: 'Implemented security best practices on AWS including IAM policies, Security Groups, VPC configuration, and data encryption at rest and in transit.',
        skills: ['AWS', 'IAM', 'Security Groups', 'VPC', 'Encryption'],
        icon: <FaCloud />,
        color: '#FF9900'
    },
    {
        id: 2,
        title: 'Docker Container Security',
        course: 'DevOps',
        description: 'Secured Docker containers using Trivy vulnerability scanning, non-root users, minimal base images, and network isolation.',
        skills: ['Docker', 'Trivy', 'Container Security', 'Linux'],
        icon: <FaShieldAlt />,
        color: '#2496ED'
    },
    {
        id: 3,
        title: 'RESTful API Development',
        course: 'Web Development',
        description: 'Built secure REST APIs with FastAPI including JWT authentication, input validation, rate limiting, and comprehensive error handling.',
        skills: ['Python', 'FastAPI', 'JWT', 'REST API', 'Pydantic'],
        icon: <FaCode />,
        color: '#009688'
    },
    {
        id: 4,
        title: 'Database Design & Optimization',
        course: 'Database Management',
        description: 'Designed normalized PostgreSQL schema with indexing strategies, query optimization, and backup/recovery procedures.',
        skills: ['PostgreSQL', 'SQL', 'Indexing', 'Normalization', 'Backup'],
        icon: <FaDatabase />,
        color: '#336791'
    },
];

// Research & Projects with links
const research = [
    {
        id: 1,
        title: 'Heart Disease Prediction using ML',
        type: 'Machine Learning',
        description: 'Developed a predictive model achieving 92% accuracy using Random Forest classifier on Amazon SageMaker. Implemented automated data preprocessing and model evaluation pipelines.',
        skills: ['Python', 'SageMaker', 'Pandas', 'Scikit-learn', 'Random Forest'],
        link: 'https://aiml-2ffm.onrender.com/',
        color: '#EF4444'
    },
    {
        id: 2,
        title: 'Serverless Architecture Study',
        type: 'Cloud Computing',
        description: 'Researched and implemented serverless patterns using AWS Lambda, API Gateway, DynamoDB, and Amplify. Achieved 99.9% uptime with zero server management.',
        skills: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Serverless', 'Amplify'],
        link: 'https://staging.d2qhlpatspoxmm.amplifyapp.com/',
        color: '#FF9900'
    },
    {
        id: 3,
        title: 'OWASP Security Analysis',
        type: 'Cybersecurity',
        description: 'Analyzed common web vulnerabilities (OWASP Top 10) including SQL Injection, XSS, CSRF, and implemented comprehensive mitigation strategies.',
        skills: ['OWASP', 'SQL Injection', 'XSS', 'CSRF', 'Security Testing'],
        link: null,
        color: '#DC2626'
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function Research() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Link to="/" className={styles.backBtn}><FaArrowLeft /> Back to Home</Link>
                <div>
                    <h1>Academic Assignments & Research</h1>
                    <p className={styles.subtitle}>B.Sc Computer Science • Cloud Security Specialization</p>
                </div>
            </header>

            {/* Academic Assignments */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <FaBook className={styles.sectionIcon} />
                    <h2>Academic Assignments</h2>
                </div>
                <motion.div className={styles.grid} variants={containerVariants} initial="hidden" animate="visible">
                    {assignments.map(item => (
                        <motion.div key={item.id} className={styles.card} variants={itemVariants} whileHover={{ y: -5 }}>
                            <div className={styles.cardIcon} style={{ background: item.color }}>{item.icon}</div>
                            <div className={styles.cardContent}>
                                <span className={styles.course}>{item.course}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className={styles.skills}>
                                    {item.skills.map(s => <span key={s} style={{ borderColor: item.color, color: item.color }}>{s}</span>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Research */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <FaFlask className={styles.sectionIcon} />
                    <h2>Research & Projects</h2>
                </div>
                <motion.div className={styles.grid} variants={containerVariants} initial="hidden" animate="visible">
                    {research.map(item => (
                        <motion.div key={item.id} className={styles.card} variants={itemVariants} whileHover={{ y: -5 }}>
                            <div className={styles.cardIcon} style={{ background: item.color }}><FaFlask /></div>
                            <div className={styles.cardContent}>
                                <span className={styles.course}>{item.type}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className={styles.skills}>
                                    {item.skills.map(s => <span key={s} style={{ borderColor: item.color, color: item.color }}>{s}</span>)}
                                </div>
                                {item.link && (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.link} style={{ background: item.color }}>
                                        <FaExternalLinkAlt /> View Project
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <div className={styles.footer}>
                <FaGraduationCap className={styles.footerIcon} />
                <p>Jharkhand Rai University • 2022-2025</p>
            </div>
        </div>
    );
}
