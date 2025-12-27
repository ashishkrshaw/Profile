import { FaAws, FaDocker, FaShieldAlt, FaLock, FaArrowLeft, FaExternalLinkAlt, FaCertificate, FaCloud, FaMedal } from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Certifications.module.css';

// All certifications with links
const certifications = [
    { id: 1, title: 'Applied Cloud Computing', issuer: 'TCS iON', year: '2024', icon: <FaAws />, link: 'https://drive.google.com/file/d/17U_8ECPIvD-4K4L0o2mXJUZdOFDq0gMk/view', image: 'https://drive.google.com/thumbnail?id=17U_8ECPIvD-4K4L0o2mXJUZdOFDq0gMk&sz=w1000', skills: ['Cloud Computing', 'AWS', 'Azure'], color: '#FF9900' },
    { id: 2, title: 'Secure Docker on AWS', issuer: 'TCS iON', year: '2024', icon: <FaDocker />, link: 'https://drive.google.com/file/d/17jnV_AjFHyuRf8yyK8_Uuq75Dgqifio_/view', image: 'https://drive.google.com/thumbnail?id=17jnV_AjFHyuRf8yyK8_Uuq75Dgqifio_&sz=w1000', skills: ['Docker', 'AWS Security', 'Nmap', 'Metasploit'], color: '#2496ED' },
    { id: 3, title: 'Information Security', issuer: 'TCS iON', year: '2024', icon: <FaShieldAlt />, link: 'https://drive.google.com/file/d/17UAn7hyI0mCGw-kLaQH0UPxFxtNwyPAg/view', image: 'https://drive.google.com/thumbnail?id=17UAn7hyI0mCGw-kLaQH0UPxFxtNwyPAg&sz=w1000', skills: ['Information Security', 'Cyber Security'], color: '#DC2626' },
    { id: 4, title: 'Data Mining & Analytics', issuer: 'TCS iON', year: '2024', icon: <FaCertificate />, link: 'https://drive.google.com/file/d/17U-DmjnRIFM3R35PiYh_IunXBEeGHyLq/view', image: 'https://drive.google.com/thumbnail?id=17U-DmjnRIFM3R35PiYh_IunXBEeGHyLq&sz=w1000', skills: ['Data Mining', 'Python', 'ML'], color: '#8B5CF6' },
    { id: 5, title: 'Oracle Cloud Foundations', issuer: 'Oracle', year: '2024', icon: <SiOracle />, link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=A974529C430F672E3FD0FFF4C7124230AFACF7BCF65A176747C729711C994129', image: '/images/ORACLE CERTIFIED.png', skills: ['Oracle Cloud', 'OCI'], color: '#F80000' },
    { id: 6, title: 'Cyber Security Simulation', issuer: 'Deloitte', year: '2024', icon: <FaLock />, link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_zREsTjB4R5uLCXQmM_1750912875255_completion_certificate.pdf', image: '/images/Deloitte Cyber Job simulation.png', skills: ['Cyber Security', 'Incident Response'], color: '#86BC25' },
    { id: 7, title: 'Cybersecurity', issuer: 'Tech Mahindra', year: '2024', icon: <FaShieldAlt />, link: 'https://courses.skillindiadigital.gov.in/api/custom_api/view_certificate/c03e452b513f475cb5c4c86c7007255c', image: 'https://courses.skillindiadigital.gov.in/api/custom_api/view_certificate/c03e452b513f475cb5c4c86c7007255c', skills: ['Cybersecurity', 'Risk Management'], color: '#0067B9' },
    { id: 8, title: 'Basics of AI', issuer: 'Amity University', year: '2024', icon: <FaCertificate />, link: '/images/certifications/Basics of Ai.pdf', image: '/images/certifications/AI cert.png', skills: ['AI', 'Responsible AI'], color: '#7C3AED' },
    { id: 9, title: 'Professional & Life Skills', issuer: 'Amity University', year: '2024', icon: <FaCertificate />, link: '/images/certifications/proffessional and life skills.pdf', image: '/images/certifications/Proffessional skills.png', skills: ['Communication', 'Leadership'], color: '#059669' },
];

// All badges with Credly links
const badges = [
    { id: 1, title: 'AWS Cloud 101', issuer: 'AWS Educate', link: 'https://www.credly.com/earner/earned/badge/5311de36-b46d-4912-9b56-fc6cdbd1e189', skills: ['AWS', 'Cloud Fundamentals'], color: '#FF9900' },
    { id: 2, title: 'AWS Storage', issuer: 'AWS Educate', link: 'https://www.credly.com/earner/earned/badge/778541ff-bc09-485b-83e6-5b888a2aeb5d', skills: ['S3', 'EBS'], color: '#FF9900' },
    { id: 3, title: 'AWS Compute', issuer: 'AWS Educate', link: 'https://www.credly.com/earner/earned/badge/31c0866c-b3dd-49f0-98b7-d9dd9023eff4', skills: ['EC2', 'Lambda'], color: '#FF9900' },
    { id: 4, title: 'AWS Databases', issuer: 'AWS Educate', link: 'https://www.credly.com/earner/earned/badge/17529a27-7828-4751-afa2-c89b094c0a4f', skills: ['RDS', 'DynamoDB'], color: '#FF9900' },
    { id: 5, title: 'AWS Cloud Ops', issuer: 'AWS Educate', link: 'https://www.credly.com/earner/earned/badge/f53926bd-95d4-48e7-a2ea-390e5bab6f88', skills: ['DevOps', 'Monitoring'], color: '#FF9900' },
    { id: 6, title: 'AWS Serverless', issuer: 'AWS Educate', link: 'https://www.credly.com/earner/earned/badge/72aa33c9-9909-44f7-aa71-fcc66ffec4eb', skills: ['Lambda', 'API Gateway'], color: '#FF9900' },
    { id: 7, title: 'GCP Load Balancing', issuer: 'Google Cloud', link: 'https://www.credly.com/earner/earned/badge/3f253822-b78c-4fd4-9dd6-3b7835bb489a', skills: ['GCP', 'Compute Engine'], color: '#4285F4' },
    { id: 8, title: 'GCP Security Principles', issuer: 'Google Cloud', link: 'https://www.cloudskillsboost.google/public_profiles/fbe69bba-d72c-48aa-8529-741efa14b390/badges/17298473', skills: ['Cloud Security'], color: '#4285F4' },
    { id: 9, title: 'Advanced Webhooks', issuer: 'Google Cloud', link: 'https://www.cloudskillsboost.google/public_profiles/fbe69bba-d72c-48aa-8529-741efa14b390/badges/13019364', skills: ['Webhooks', 'API Integration'], color: '#4285F4' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
};

export default function Certifications() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Link to="/" className={styles.backBtn}><FaArrowLeft /> Back to Home</Link>
                <div>
                    <h1><FaMedal /> Certifications & Badges</h1>
                    <p className={styles.subtitle}>{certifications.length} Certifications • {badges.length} Badges</p>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <FaCertificate className={styles.icon} />
                    <h2>Certifications</h2>
                </div>
                <motion.div className={styles.certsGrid} variants={containerVariants} initial="hidden" animate="visible">
                    {certifications.map(cert => (
                        <motion.a key={cert.id} href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certCard} variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }}>
                            <div className={styles.certImage}>
                                <img src={cert.image} alt={cert.title} onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x300/151515/666?text=Certificate'; }} />
                                <div className={styles.overlay}>
                                    <FaExternalLinkAlt /> View Certificate
                                </div>
                            </div>
                            <div className={styles.certInfo}>
                                <span className={styles.certIcon}>{cert.icon}</span>
                                <div>
                                    <h3>{cert.title}</h3>
                                    <p>{cert.issuer} • {cert.year}</p>
                                    <div className={styles.skills}>{cert.skills.map(s => <span key={s} style={{ borderColor: cert.color, color: cert.color }}>{s}</span>)}</div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <FaCloud className={styles.icon} />
                    <h2>Cloud Badges</h2>
                </div>
                <motion.div className={styles.badgesGrid} variants={containerVariants} initial="hidden" animate="visible">
                    {badges.map(badge => (
                        <motion.a key={badge.id} href={badge.link} target="_blank" rel="noopener noreferrer" className={styles.badgeCard} variants={itemVariants} whileHover={{ y: -4 }}>
                            <div className={styles.badgeIcon}><FaAws /></div>
                            <div className={styles.badgeInfo}>
                                <h4>{badge.title}</h4>
                                <p>{badge.issuer}</p>
                                <div className={styles.skills}>{badge.skills.map(s => <span key={s} style={{ color: badge.color }}>{s}</span>)}</div>
                            </div>
                            <FaExternalLinkAlt className={styles.linkIcon} />
                        </motion.a>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}
