import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaFileAlt, FaTimes } from 'react-icons/fa';
import { projects } from '../data';
import styles from './Projects.module.css';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <main className={styles.projectsPage}>
            <section className={styles.hero}>
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionLabel}>Featured Work</p>
                    <h1 className={styles.sectionTitle}>Projects</h1>
                    <p className={styles.sectionDesc}>
                        Cloud applications, security tools, and full-stack projects
                    </p>
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={styles.projectCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={styles.imageWrap}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = project.imageFallback;
                                    }}
                                />
                                <div className={styles.imageOverlay}>
                                    <button
                                        className={styles.detailsBtn}
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <FaFileAlt /> View Details
                                    </button>
                                </div>
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.cardTop}>
                                    <span className={styles.projectLabel}>{project.tags[0]}</span>
                                    {project.date && <span className={styles.projectDate}>{project.date}</span>}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className={styles.projectTags}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>

                                <div className={styles.projectLinks}>
                                    {project.links.demo && (
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                    {project.links.video && (
                                        <a href={project.links.video} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                                            <FaPlay /> Video
                                        </a>
                                    )}
                                    <button
                                        className={`${styles.linkBtn} ${styles.docBtn}`}
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <FaFileAlt /> Doc
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className={styles.modal}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.modalClose}
                                onClick={() => setSelectedProject(null)}
                            >
                                <FaTimes />
                            </button>

                            <div className={styles.modalImage}>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = selectedProject.imageFallback;
                                    }}
                                />
                            </div>

                            <div className={styles.modalContent}>
                                <span className={styles.modalLabel}>{selectedProject.tags[0]}</span>
                                <h2>{selectedProject.title}</h2>
                                <p className={styles.modalDesc}>{selectedProject.description}</p>

                                <div className={styles.modalSection}>
                                    <h3>Technologies Used</h3>
                                    <div className={styles.techGrid}>
                                        {selectedProject.technologies.map((tech) => (
                                            <span key={tech} className={styles.techTag}>{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.modalLinks}>
                                    {selectedProject.links.demo && (
                                        <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className={styles.modalBtn}>
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                    {selectedProject.links.github && (
                                        <a href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className={styles.modalBtnOutline}>
                                            <FaGithub /> View Source
                                        </a>
                                    )}
                                    {selectedProject.links.video && (
                                        <a href={selectedProject.links.video} target="_blank" rel="noopener noreferrer" className={styles.modalBtnOutline}>
                                            <FaPlay /> Watch Video
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
