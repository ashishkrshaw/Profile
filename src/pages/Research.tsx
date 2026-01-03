import { FaArrowLeft, FaGraduationCap, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Research.module.css';

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

            {/* Coming Soon Placeholder */}
            <section className={styles.section} style={{ textAlign: 'center', paddingTop: '80px', paddingBottom: '80px' }}>
                <FaClock style={{ fontSize: '4em', color: 'var(--accent-light)', marginBottom: '20px', opacity: 0.6 }} />
                <h2 style={{ marginBottom: '16px' }}>Coming Soon</h2>
                <p style={{ color: 'var(--muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
                    I'm currently updating this section with my academic assignments, research papers, and projects. Please check back shortly!
                </p>
            </section>

            <div className={styles.footer}>
                <FaGraduationCap className={styles.footerIcon} />
                <p>Amity University Online, Noida • 2023-2026</p>
            </div>
        </div>
    );
}
