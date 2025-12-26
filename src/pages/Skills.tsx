import { motion } from 'framer-motion';
import {
    FaPython, FaAws, FaShieldAlt, FaDocker, FaDatabase, FaCode,
    FaServer, FaLock, FaTerminal, FaGithub
} from 'react-icons/fa';
import { SiPostgresql, SiFastapi, SiMysql } from 'react-icons/si';
import { skillCategories } from '../data';
import styles from './Skills.module.css';

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
    'FaPython': <FaPython />,
    'FaAws': <FaAws />,
    'FaShieldAlt': <FaShieldAlt />,
    'FaDocker': <FaDocker />,
    'FaDatabase': <FaDatabase />,
    'FaCode': <FaCode />,
};

// Individual skill icons
const skillIconMap: Record<string, React.ReactNode> = {
    'Python': <FaPython />,
    'FastAPI': <SiFastapi />,
    'PostgreSQL': <SiPostgresql />,
    'MySQL': <SiMysql />,
    'AWS EC2': <FaServer />,
    'AWS Lambda': <FaAws />,
    'AWS S3': <FaAws />,
    'Docker': <FaDocker />,
    'Git': <FaGithub />,
    'AWS IAM': <FaLock />,
    'Linux CLI': <FaTerminal />,
    'Bash/Shell': <FaTerminal />,
};

export default function Skills() {
    return (
        <main className={styles.skillsPage}>
            <section className={styles.hero}>
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionLabel}>Technical Expertise</p>
                    <h1 className={styles.sectionTitle}>Skills & Technologies</h1>
                    <p className={styles.sectionDesc}>
                        Backend development, cloud infrastructure, and security expertise
                    </p>
                </div>

                <div className={styles.categoriesGrid}>
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.id}
                            className={styles.categoryCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className={styles.categoryHeader}
                                style={{ background: category.gradient }}
                            >
                                <span className={styles.categoryIcon}>
                                    {iconMap[category.icon] || <FaCode />}
                                </span>
                                <h2>{category.title}</h2>
                            </div>

                            <div className={styles.skillsGrid}>
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill}
                                        className={styles.skillChip}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        <span className={styles.skillIcon} style={{ color: category.color }}>
                                            {skillIconMap[skill] || <FaCode />}
                                        </span>
                                        <span>{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
