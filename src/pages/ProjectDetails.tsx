import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaYoutube } from 'react-icons/fa';
import styles from './ProjectDetails.module.css';

// Full project data with details
const projectsData: Record<string, {
    title: string; tagline: string; image: string; demo: string; github: string; video: string;
    whyItMatters: string; highlights: string[]; stack: { name: string; color: string }[];
    stats: { label: string; value: string; desc: string }[];
    architecture: { title: string; desc: string; icon: string }[];
    impact: { label: string; value: string; color: string }[];
    documentation?: string;
}> = {
    'cloud-fun-fact-generator': {
        title: 'Cloud Fun Fact Generator',
        tagline: 'Serverless AWS app with Perplexity AI integration for fun cloud facts.',
        image: '/images/Screenshot 2025-11-17 170323.png',
        demo: 'https://staging.d2qhlpatspoxmm.amplifyapp.com/',
        github: 'https://github.com/ashishkrshaw/Cloud-FunFacts.git',
        video: 'https://youtu.be/KbsVKpe41Hk',
        whyItMatters: 'Generates unique cloud computing facts using AI. Built entirely serverless on AWS with React frontend.',
        highlights: [
            'Perplexity AI integration for unique fact generation',
            '1000+ unique cloud facts delivered',
            '60% increase in user engagement',
            '90% reduction in manual content effort'
        ],
        stack: [
            { name: 'React', color: '#61DAFB' },
            { name: 'AWS Amplify', color: '#FF9900' },
            { name: 'API Gateway', color: '#FF9900' },
            { name: 'Lambda', color: '#FF9900' },
            { name: 'DynamoDB', color: '#4053D6' },
            { name: 'Perplexity AI', color: '#7C3AED' }
        ],
        stats: [
            { label: 'Facts Generated', value: '1000+', desc: 'Unique cloud facts' },
            { label: 'User Engagement', value: '+60%', desc: 'Increase vs static content' },
            { label: 'Latency', value: '<2s', desc: 'Average response time' },
            { label: 'Uptime', value: '99.9%', desc: 'Serverless reliability' }
        ],
        architecture: [
            { title: 'User Interface', desc: 'React / AWS Amplify', icon: '🖥️' },
            { title: 'API Gateway', desc: 'REST Endpoint', icon: '🔗' },
            { title: 'Lambda', desc: 'Python Handler', icon: '⚡' },
            { title: 'Perplexity AI', desc: 'Fact Generation', icon: '🤖' },
            { title: 'DynamoDB', desc: 'Facts Storage', icon: '💾' }
        ],
        impact: [
            { label: 'Manual Effort Saved', value: '90%', color: '#10B981' },
            { label: 'Content Freshness', value: 'Daily', color: '#3B82F6' },
            { label: 'Cost per Request', value: '$0.0001', color: '#8B5CF6' }
        ]
    },
    'secure-s3-file-uploader': {
        title: 'Secure S3 File Uploader',
        tagline: 'Serverless malware scanner that blocks unsafe uploads before S3.',
        image: '/images/Screenshot 2025-11-17 172803.png',
        demo: 'https://d48fldudi0fyu.cloudfront.net/',
        github: 'https://github.com/ashishkrshaw/secure-file-uploader.git',
        video: 'https://youtu.be/047FKrPQBCM',
        whyItMatters: 'Every upload is treated as hostile. Files are hashed, scanned by 56+ engines, and only delivered via CloudFront if CLEAN.',
        highlights: [
            'Zero-trust: scan → verdict → upload → signed delivery',
            'SHA256 fingerprinting prevents duplicate reviews',
            'Per-user daily caps via localStorage + DynamoDB',
            'JSON scan reports with 56-engine summaries'
        ],
        stack: [
            { name: 'AWS S3', color: '#569A31' },
            { name: 'Lambda', color: '#FF9900' },
            { name: 'VirusTotal API', color: '#DC2626' },
            { name: 'CloudFront', color: '#FF9900' },
            { name: 'Terraform', color: '#7B42BC' },
            { name: 'Jenkins CI/CD', color: '#D33833' }
        ],
        stats: [
            { label: 'Files Scanned/Day', value: '500', desc: 'Front-end rate limiting' },
            { label: 'Threats Blocked', value: '37', desc: 'Auto-reject + audit trail' },
            { label: 'Avg Scan Time', value: '3.2s', desc: 'Parallel VirusTotal lookups' },
            { label: 'Delivery SLA', value: '99.95%', desc: 'CloudFront edge caching' }
        ],
        architecture: [
            { title: 'User Interface', desc: 'HTML / JS / Drag & Drop', icon: '🖥️' },
            { title: 'localStorage', desc: 'Rate Limit (15/day)', icon: '📦' },
            { title: 'API Gateway', desc: 'Receives File + Metadata', icon: '🔗' },
            { title: 'Lambda', desc: 'Python File Scanner', icon: '⚡' },
            { title: 'VirusTotal', desc: '56+ Engine Scan', icon: '🛡️' },
            { title: 'S3 + CloudFront', desc: 'Clean Files Only', icon: '☁️' }
        ],
        impact: [
            { label: 'Breach Attempts Stopped', value: '18', color: '#10B981' },
            { label: 'Manual Review Reduced', value: '-80%', color: '#06B6D4' },
            { label: 'Compliance Ready', value: '100%', color: '#8B5CF6' }
        ],
        documentation: 'https://docs.google.com/presentation/d/1IIfr6lcu3sIxv53Zau9pIhEbGrj-O4OyULdqnui3PiA/embed'
    },
    'multi-cloud-management-dashboard': {
        title: 'MultiCloud Dashboard',
        tagline: 'Unified AWS, Azure, GCP dashboard with AI insights and Telegram alerts.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600',
        demo: 'https://multicloud-management-dashboard.onrender.com/',
        github: 'https://github.com/ashishkrshaw/multicloud-management-dashboard',
        video: '',
        whyItMatters: 'Single pane of glass for multi-cloud operations. Telegram notifications and AI-driven insights for resource optimization.',
        highlights: [
            'AWS, Azure, GCP integration in one dashboard',
            '40% operational efficiency boost',
            'Telegram alerts for critical events',
            '25% cost savings through optimization'
        ],
        stack: [
            { name: 'Node.js', color: '#339933' },
            { name: 'React', color: '#61DAFB' },
            { name: 'AWS SDK', color: '#FF9900' },
            { name: 'Azure SDK', color: '#0078D4' },
            { name: 'GCP SDK', color: '#4285F4' },
            { name: 'Telegram API', color: '#26A5E4' }
        ],
        stats: [
            { label: 'Cloud Providers', value: '3', desc: 'AWS, Azure, GCP' },
            { label: 'Efficiency Boost', value: '+40%', desc: 'Cross-platform visibility' },
            { label: 'Cost Savings', value: '25%', desc: 'Resource optimization' },
            { label: 'Alert Latency', value: '<5s', desc: 'Real-time Telegram' }
        ],
        architecture: [
            { title: 'React Dashboard', desc: 'Unified UI', icon: '📊' },
            { title: 'Node.js API', desc: 'Backend Aggregator', icon: '🔧' },
            { title: 'AWS / Azure / GCP', desc: 'SDK Integration', icon: '☁️' },
            { title: 'Telegram Bot', desc: 'Alert Notifications', icon: '📱' }
        ],
        impact: [
            { label: 'Manual Monitoring Reduced', value: '-80%', color: '#10B981' },
            { label: 'Decision Speed', value: '+50%', color: '#3B82F6' },
            { label: 'Cost Visibility', value: '100%', color: '#8B5CF6' }
        ]
    },
    'heart-disease-predictor': {
        title: 'Heart Disease Predictor',
        tagline: 'ML model achieving 92% accuracy for heart disease risk detection.',
        image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600',
        demo: 'https://aiml-2ffm.onrender.com/',
        github: 'https://github.com/ashishkrshaw/heart-disease-predictor',
        video: '',
        whyItMatters: 'Predictive ML model for heart disease risk. Built on Amazon SageMaker with automated data preprocessing.',
        highlights: [
            '92% prediction accuracy',
            'Amazon SageMaker deployment',
            'Automated data preprocessing pipeline',
            'Early diagnosis support system'
        ],
        stack: [
            { name: 'Python', color: '#3776AB' },
            { name: 'Amazon SageMaker', color: '#FF9900' },
            { name: 'Pandas', color: '#150458' },
            { name: 'Scikit-learn', color: '#F7931E' },
            { name: 'Matplotlib', color: '#11557C' }
        ],
        stats: [
            { label: 'Prediction Accuracy', value: '92%', desc: 'Random Forest model' },
            { label: 'Features Analyzed', value: '13', desc: 'Medical indicators' },
            { label: 'Training Time', value: '<5min', desc: 'SageMaker optimized' },
            { label: 'Inference Latency', value: '<1s', desc: 'Real-time prediction' }
        ],
        architecture: [
            { title: 'Data Input', desc: 'Patient Records', icon: '📋' },
            { title: 'Preprocessing', desc: 'Pandas Pipeline', icon: '🔄' },
            { title: 'SageMaker', desc: 'Model Training', icon: '🧠' },
            { title: 'Inference', desc: 'Risk Prediction', icon: '💓' }
        ],
        impact: [
            { label: 'Early Detection Rate', value: '+35%', color: '#10B981' },
            { label: 'Diagnosis Time Saved', value: '60%', color: '#06B6D4' },
            { label: 'False Positives', value: '<8%', color: '#8B5CF6' }
        ]
    }
};

export default function ProjectDetails() {
    const { slug } = useParams<{ slug: string }>();
    const project = slug ? projectsData[slug] : null;

    if (!project) {
        return (
            <div className={styles.page}>
                <div className={styles.notFound}>
                    <h1>Project Not Found</h1>
                    <Link to="/" className={styles.backBtn}><FaArrowLeft /> Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Link to="/" className={styles.backBtn}><FaArrowLeft /> Back</Link>
                <h1>{project.title}</h1>
            </header>

            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroImage}>
                        <img src={project.image} alt={project.title} onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/191919/666?text=Project'; }} />
                    </div>
                    <div className={styles.heroInfo}>
                        <p className={styles.tagline}>{project.tagline}</p>
                        <div className={styles.links}>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.demoBtn}><FaExternalLinkAlt /> Live Demo</a>
                            {project.video && <a href={project.video} target="_blank" rel="noopener noreferrer" className={styles.videoBtn}><FaYoutube /> Video</a>}
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}><FaGithub /> Source</a>
                        </div>
                    </div>
                </section>

                {/* Why It Matters */}
                <section className={styles.section}>
                    <h2>Why It Matters</h2>
                    <p>{project.whyItMatters}</p>
                    <ul className={styles.highlights}>
                        {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                </section>

                {/* Stats Grid */}
                <section className={styles.section}>
                    <h2>Key Metrics</h2>
                    <div className={styles.statsGrid}>
                        {project.stats.map((s, i) => (
                            <div key={i} className={styles.statCard}>
                                <span className={styles.statValue}>{s.value}</span>
                                <span className={styles.statLabel}>{s.label}</span>
                                <span className={styles.statDesc}>{s.desc}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Architecture */}
                <section className={styles.section}>
                    <h2>System Architecture</h2>
                    <div className={styles.archFlow}>
                        {project.architecture.map((a, i) => (
                            <div key={i} className={styles.archCard}>
                                <span className={styles.archIcon}>{a.icon}</span>
                                <span className={styles.archTitle}>{a.title}</span>
                                <span className={styles.archDesc}>{a.desc}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stack */}
                <section className={styles.section}>
                    <h2>Technology Stack</h2>
                    <div className={styles.stackGrid}>
                        {project.stack.map((s, i) => (
                            <span key={i} className={styles.stackTag} style={{ borderColor: s.color, color: s.color }}>{s.name}</span>
                        ))}
                    </div>
                </section>

                {/* Impact */}
                <section className={styles.section}>
                    <h2>Impact Metrics</h2>
                    <div className={styles.impactGrid}>
                        {project.impact.map((im, i) => (
                            <div key={i} className={styles.impactCard}>
                                <span className={styles.impactValue} style={{ color: im.color }}>{im.value}</span>
                                <span className={styles.impactLabel}>{im.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Documentation */}
                {project.documentation && (
                    <section className={styles.section}>
                        <h2>Documentation</h2>
                        <div className={styles.docEmbed}>
                            <iframe src={project.documentation} title="Documentation" allowFullScreen />
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
