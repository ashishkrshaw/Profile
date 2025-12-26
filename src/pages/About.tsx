import { motion } from 'framer-motion';
import { profile } from '../data';
import styles from './About.module.css';

export default function About() {
    return (
        <main className={styles.aboutPage}>
            <section className={styles.hero}>
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionLabel}>About Me</p>
                    <h1 className={styles.sectionTitle}>Discover My Journey</h1>
                </div>

                <div className={styles.content}>
                    <motion.div
                        className={styles.imageSection}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src={profile.profileImage}
                            alt={profile.name}
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = profile.profileImageFallback;
                            }}
                            className={styles.profileImage}
                        />
                    </motion.div>

                    <motion.div
                        className={styles.bioSection}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className={styles.name}>{profile.name}</h2>
                        <p className={styles.title}>{profile.title}</p>

                        <div className={styles.bio}>
                            {profile.bio.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className={styles.badges}>
                            {profile.badges.map((badge, index) => (
                                <span key={index} className={styles.badge}>
                                    {badge.text}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
