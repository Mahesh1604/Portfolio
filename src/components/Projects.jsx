import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import authImg from '../assets/images/authentication.jpeg';
import foodImg from '../assets/images/foodexpress.jpeg';
import foundationImg from '../assets/images/aaradhyadharma oundation.jpeg';
import studioImg from '../assets/images/photo studio.jpeg';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'User Authentication System',
            description: 'Secure authentication system featuring email verification, login, and signup functionality.',
            tech: ['React', 'Django', 'PostgreSQL', 'SMTP'],
            image: authImg,
            liveUrl: 'https://github.com/Mahesh1604/authentication',
            githubUrl: 'https://github.com/Mahesh1604/authentication',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            id: 2,
            title: 'FoodExpress',
            description: 'A React-based food ordering platform where users can browse menus and place orders easily.',
            tech: ['React', 'JavaScript', 'CSS', 'Vite'],
            image: foodImg,
            liveUrl: 'https://github.com/Mahesh1604/FoodExpress',
            githubUrl: 'https://github.com/Mahesh1604/FoodExpress',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            id: 3,
            title: 'Aaradhhyadharma Foundation',
            description: 'A modern website for a non-profit organization built with React, showcasing their mission and social activities.',
            tech: ['React', 'JavaScript', 'CSS', 'Bootstrap'],
            image: foundationImg,
            liveUrl: 'https://github.com/Mahesh1604/AaradhhyadharmaFoundation',
            githubUrl: 'https://github.com/Mahesh1604/AaradhhyadharmaFoundation',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
            id: 4,
            title: 'Photo Studio Website',
            description: 'A Django-based photography studio website featuring a portfolio gallery, service listings, online booking, and an admin panel for content management.',
            tech: ['Python', 'Django', 'SQLite', 'CSS'],
            image: studioImg,
            liveUrl: 'https://github.com/Mahesh1604/photostudiowebsite',
            githubUrl: 'https://github.com/Mahesh1604/photostudiowebsite',
            gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        }
    ];

    const styles = {
        projectsSection: {
            background: 'transparent',
            padding: '80px 0'
        },
        projectCard: {
            height: '100%',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            background: '#1a1a1a',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
        },
        projectImageContainer: {
            position: 'relative',
            width: '100%',
            height: '220px',
            overflow: 'hidden',
        },
        projectImage: {
            width: '100%',
            height: '100%',
            transition: 'transform 0.4s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
        },
        projectOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(10, 10, 10, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            zIndex: 2
        },
        projectLinks: {
            display: 'flex',
            gap: '1.2rem',
            transform: 'translateY(20px)',
            transition: 'all 0.4s ease'
        },
        projectLink: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'rgba(102, 126, 234, 0.2)',
            border: '2px solid #667eea',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
        },
        cardBody: {
            padding: '1.5rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
        },
        projectTitle: {
            fontSize: '1.4rem',
            fontWeight: 700,
            marginBottom: '0.8rem',
            color: '#ffffff'
        },
        projectDescription: {
            color: '#b0b0b0',
            fontSize: '0.95rem',
            marginBottom: '1.5rem',
            lineHeight: 1.6,
            flex: 1
        },
        techStack: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: 'auto'
        },
        techTag: {
            display: 'inline-block',
            padding: '0.2rem 0.8rem',
            background: 'rgba(102, 126, 234, 0.1)',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '20px',
            color: '#667eea',
            fontSize: '0.75rem',
            fontWeight: 600
        }
    };

    return (
        <section id="projects" style={styles.projectsSection}>
            <div className="container">
                <h2 className="section-title text-center" style={{ marginBottom: '4rem' }}>Featured Projects</h2>

                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div
                            className="col-lg-4 col-md-6"
                            key={project.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div
                                className="project-card fade-in-up"
                                style={styles.projectCard}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.borderColor = '#667eea';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.2)';
                                    const overlay = e.currentTarget.querySelector('.project-overlay');
                                    const links = e.currentTarget.querySelector('.project-links');
                                    const img = e.currentTarget.querySelector('.main-project-img');
                                    if (overlay) overlay.style.opacity = '1';
                                    if (links) links.style.transform = 'translateY(0)';
                                    if (img) img.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    const overlay = e.currentTarget.querySelector('.project-overlay');
                                    const links = e.currentTarget.querySelector('.project-links');
                                    const img = e.currentTarget.querySelector('.main-project-img');
                                    if (overlay) overlay.style.opacity = '0';
                                    if (links) links.style.transform = 'translateY(20px)';
                                    if (img) img.style.transform = 'scale(1)';
                                }}
                            >
                                <div style={styles.projectImageContainer}>
                                    <div
                                        className="project-image"
                                        style={{
                                            ...styles.projectImage,
                                            background: project.gradient
                                        }}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.4s ease'
                                            }}
                                            className="main-project-img"
                                        />
                                        <div className="project-overlay" style={styles.projectOverlay}>
                                            <div className="project-links" style={styles.projectLinks}>
                                                <a
                                                    href={project.liveUrl}
                                                    style={styles.projectLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaExternalLinkAlt />
                                                </a>
                                                <a
                                                    href={project.githubUrl}
                                                    style={styles.projectLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaGithub />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div style={styles.cardBody}>
                                    <h3 style={styles.projectTitle}>{project.title}</h3>
                                    <p style={styles.projectDescription}>{project.description}</p>

                                    <div style={styles.techStack}>
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} style={styles.techTag}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .project-card {
                        margin-bottom: 1rem;
                    }
                    .project-overlay {
                        opacity: 1 !important;
                        background: rgba(10, 10, 10, 0.4) !important;
                        align-items: flex-end !important;
                        padding: 1rem !important;
                        justify-content: flex-end !important;
                    }
                    .project-links {
                        transform: translateY(0) !important;
                        gap: 0.8rem !important;
                    }
                    .project-link {
                        width: 40px !important;
                        height: 40px !important;
                        font-size: 1rem !important;
                        background: rgba(10, 10, 10, 0.8) !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
