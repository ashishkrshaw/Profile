import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { profile } from '../data';
import styles from './Contact.module.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate sending
        setTimeout(() => {
            setStatus('sent');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <main className={styles.contactPage}>
            <section className={styles.hero}>
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionLabel}>Get In Touch</p>
                    <h1 className={styles.sectionTitle}>Let's Connect</h1>
                    <p className={styles.sectionDesc}>
                        Have a project in mind or want to discuss opportunities? I'd love to hear from you.
                    </p>
                </div>

                <div className={styles.content}>
                    {/* Contact Info */}
                    <motion.div
                        className={styles.infoSection}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Contact Information</h2>

                        <div className={styles.infoItem}>
                            <FaEnvelope className={styles.infoIcon} />
                            <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
                        </div>

                        <div className={styles.infoItem}>
                            <FaPhone className={styles.infoIcon} />
                            <a href={`tel:${profile.contact.phone}`}>{profile.contact.phone}</a>
                        </div>

                        <div className={styles.infoItem}>
                            <FaGithub className={styles.infoIcon} />
                            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
                                ashishkrshaw
                            </a>
                        </div>

                        <div className={styles.infoItem}>
                            <FaLinkedin className={styles.infoIcon} />
                            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
                                asksaw
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className={styles.formSection}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Discussion / Job Opportunity / Collaboration"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Your Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder="Tell me about your project, opportunity, or inquiry..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : (
                                    <>
                                        <FaPaperPlane /> Send Message
                                    </>
                                )}
                            </button>

                            {status === 'sent' && (
                                <p className={styles.successMsg}>Message sent successfully! I'll get back to you soon.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
