import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBriefcase, FaServer, FaCloud, FaDocker, FaCheckCircle } from 'react-icons/fa';
import styles from './Experience.module.css';

const experiences = [
    {
        id: 1,
        title: 'Cloud Security Intern',
        company: 'TCS iON',
        period: 'June 2024 - August 2024',
        type: 'Internship',
        icon: <FaBriefcase />,
        color: '#FF9900',
        description: 'Worked on securing containerized applications deployed on AWS infrastructure. Implemented security best practices for Docker containers and cloud resources.',
        responsibilities: [
            'Configured IAM policies and Security Groups for AWS resources',
            'Performed vulnerability scanning using Trivy on Docker containers',
            'Implemented network security controls and monitoring',
            'Documented security procedures and compliance requirements',
            'Collaborated with team on incident response protocols'
        ],
        skills: ['AWS', 'Docker', 'IAM', 'Security Groups', 'Trivy', 'OWASP'],
        achievements: [
            'Reduced container vulnerabilities by 40%',
            'Improved security posture across 5+ microservices',
            'Created automated security scanning pipeline'
        ]
    },
    {
        id: 2,
        title: 'Personal Cloud Infrastructure',
        company: 'Self-Hosted Home Lab',
        period: '2023 - Present',
        type: 'Personal Project',
        icon: <FaServer />,
        color: '#10B981',
        description: 'Built and maintain a personal cloud infrastructure for learning and hosting personal projects. Focus on AWS services, containerization, and DevOps practices.',
        responsibilities: [
            'Designed and deployed serverless applications on AWS Lambda',
            'Managed S3 buckets with proper access controls and lifecycle policies',
            'Implemented CI/CD pipelines using GitHub Actions',
            'Configured VPC, subnets, and security groups',
            'Monitored infrastructure with CloudWatch'
        ],
        skills: ['AWS Lambda', 'S3', 'EC2', 'Docker', 'GitHub Actions', 'Python'],
        achievements: [
            '4+ live projects deployed and maintained',
            '1000+ users served through serverless APIs',
            '99.9% uptime achieved across all services'
        ]
    }
];

export default function Experience() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Link to="/" className={styles.backBtn}><FaArrowLeft /> Back to Home</Link>
                <h1><FaBriefcase /> Experience</h1>
                <p className={styles.subtitle}>My professional journey and hands-on experience</p>
            </header>

            <main className={styles.main}>
                {experiences.map(exp => (
                    <section key={exp.id} className={styles.expSection}>
                        <div className={styles.expHeader} style={{ borderColor: exp.color }}>
                            <div className={styles.expIcon} style={{ background: exp.color }}>{exp.icon}</div>
                            <div>
                                <h2>{exp.title}</h2>
                                <p className={styles.company}>{exp.company}</p>
                                <p className={styles.period}>{exp.period} • {exp.type}</p>
                            </div>
                        </div>

                        <p className={styles.description}>{exp.description}</p>

                        <div className={styles.details}>
                            <div className={styles.column}>
                                <h3><FaCheckCircle /> Responsibilities</h3>
                                <ul>
                                    {exp.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                                </ul>
                            </div>
                            <div className={styles.column}>
                                <h3><FaCloud /> Achievements</h3>
                                <ul className={styles.achievements}>
                                    {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
                                </ul>
                                <h3><FaDocker /> Skills Used</h3>
                                <div className={styles.skills}>
                                    {exp.skills.map(s => <span key={s} style={{ borderColor: exp.color, color: exp.color }}>{s}</span>)}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}
