import { useState, useEffect } from 'react';
import { FaCode, FaCog, FaFolderOpen, FaAward, FaPaperPlane, FaLinkedin } from 'react-icons/fa';
import LottieSocialIcon from '../LottieSocialIcon';
import styles from './MobileNav.module.css';

interface MobileNavProps {
    scrollTo: (id: string) => void;
}

export default function MobileNav({ scrollTo }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleNavClick = (id: string) => {
        scrollTo(id);
        setIsOpen(false);
    };

    return (
        <>
            {/* Hamburger Button */}
            <button
                className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Backdrop */}
            <div
                className={`${styles.backdrop} ${isOpen ? styles.visible : ''}`}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />

            {/* Slide-in Drawer */}
            <nav
                className={`${styles.drawer} ${isOpen ? styles.open : ''}`}
                role="navigation"
                aria-label="Mobile navigation"
            >
                <div className={styles.navLinks}>
                    <a onClick={() => handleNavClick('about')} tabIndex={isOpen ? 0 : -1}>
                        <FaCode /> About
                    </a>
                    <a onClick={() => handleNavClick('skills')} tabIndex={isOpen ? 0 : -1}>
                        <FaCog /> Skills
                    </a>
                    <a onClick={() => handleNavClick('projects')} tabIndex={isOpen ? 0 : -1}>
                        <FaFolderOpen /> Projects
                    </a>
                    <a onClick={() => handleNavClick('certifications')} tabIndex={isOpen ? 0 : -1}>
                        <FaAward /> Certifications
                    </a>
                    <a onClick={() => handleNavClick('contact')} tabIndex={isOpen ? 0 : -1}>
                        <FaPaperPlane /> Contact
                    </a>
                </div>

                <div className={styles.socialLinks}>
                    <a
                        href="https://linkedin.com/in/asksaw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkedin}
                        tabIndex={isOpen ? 0 : -1}
                        aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/ashishkrshaw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.github}
                        tabIndex={isOpen ? 0 : -1}
                        aria-label="GitHub Profile"
                    >
                        <LottieSocialIcon type="github" size={28} />
                    </a>
                </div>
            </nav>
        </>
    );
}
