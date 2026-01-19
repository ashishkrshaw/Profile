import { FaArrowLeft, FaGraduationCap, FaServer, FaShieldAlt, FaExternalLinkAlt, FaCloud, FaBrain } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Research.module.css';

const assignments = [
    {
        id: 1,
        title: 'Cloud Compute Solution',
        course: 'BCA Cloud & Security • TCS iON',
        description: 'Comparative deployment of a portfolio using EC2 Direct Hosting, Docker Containers, and AWS Lambda Serverless.',
        date: 'Oct 2025',
        icon: <FaCloud />,
        link: 'https://docs.google.com/document/d/1dpvIXbkLinuFM9HmpdwrYZ3L7dKDljn87VCaHlI3B0w/edit?usp=sharing'
    },
    {
        id: 2,
        title: 'Cloud Storage & Databases',
        course: 'BCA Cloud & Security • TCS iON',
        description: 'Data management system using AWS S3 and DynamoDB for storage and database operations.',
        date: 'Nov 2025',
        icon: <FaServer />,
        link: 'https://docs.google.com/document/d/1Gtg3pvnbflNaZn8ANywg2w1qSHNNtLn1kB4l3HyVxfw/edit?usp=sharing'
    },
    {
        id: 3,
        title: 'Cloud Security Strategy',
        course: 'BCA Cloud & Security • TCS iON',
        description: 'Multi-layered security implementation applying the AWS Shared Responsibility Model.',
        date: 'Nov 2025',
        icon: <FaShieldAlt />,
        link: 'https://docs.google.com/document/d/1vUFwHWiS4VcbgbffzbJkiAmckIknOuc26TRCttUfbF4/edit?usp=sharing'
    },
    {
        id: 4,
        title: 'Cloud AI/ML Pipeline',
        course: 'BCA Cloud & Security • TCS iON',
        description: 'End-to-end ML pipeline using AWS SageMaker for training, deployment, and monitoring.',
        date: 'Dec 2025',
        icon: <FaBrain />,
        link: 'https://docs.google.com/document/d/1WfqUq-BmLhB3z-ON38wTVDJp9mswczW8Mgv6vY2nJfg/edit?usp=sharing'
    },
    {
        id: 5,
        title: 'Healthcare Cybersecurity Assessment',
        course: 'BCA Cloud & Security • TCS iON',
        description: 'Risk assessment of Vaidya Family Health Clinic covering threat analysis, vulnerabilities, and security recommendations.',
        date: 'Dec 2025',
        icon: <FaShieldAlt />,
        link: 'https://docs.google.com/document/d/1ysDgNE4sSV5yootfFHuriPgLcSEkKbxpnH7FmgE7-5E/edit?usp=sharing'
    }
];

export default function Research() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Link to="/" className={styles.backBtn}><FaArrowLeft /> Back to Home</Link>
                <div>
                    <h1>Academic & Research</h1>
                    <p className={styles.subtitle}>Curated assignments and case studies from my BCA journey</p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.grid}>
                    {assignments.map((item, index) => (
                        <motion.a
                            key={item.id}
                            href={item.link}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardTop}>
                                <div className={styles.cardIcon}>{item.icon}</div>
                                <div className={styles.cardContent}>
                                    <span className={styles.course}>{item.course}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div className={styles.cardActions}>
                                <span className={styles.date}>{item.date}</span>
                                <span className={styles.link}>Read Document <FaExternalLinkAlt style={{ fontSize: '0.7em' }} /></span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            <div className={styles.footer}>
                <FaGraduationCap className={styles.footerIcon} />
                <p>Amity University Online • Bachelor of Computer Applications (Cloud & Security)</p>
                <p style={{ opacity: 0.6, fontSize: '0.85em' }}>2023 - 2026</p>
            </div>
        </div>
    );
}
