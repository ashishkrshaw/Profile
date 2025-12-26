import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { useState } from 'react';
import { profile } from '../../data';
import styles from './Navbar.module.css';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.navInner}>
                <Link to="/" className={styles.brand} onClick={() => scrollToSection('#home')}>
                    AKS
                </Link>

                <div className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }}
                            className={styles.navLink}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <a
                    href={profile.resumeFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnResume}
                >
                    <FaDownload /> Resume
                </a>

                <button
                    className={styles.mobileBtn}
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {mobileOpen && (
                <div className={styles.mobileNav}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }}
                            className={styles.mobileLink}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
