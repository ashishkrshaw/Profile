import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { profile } from '../../data';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <span className={styles.brand}>AKS</span>
                <div className={styles.social}>
                    <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href={profile.contact.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href={`mailto:${profile.contact.email}`}><FaEnvelope /></a>
                </div>
                <p className={styles.copy}>© {new Date().getFullYear()} {profile.name}</p>
            </div>
        </footer>
    );
}
