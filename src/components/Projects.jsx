import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'User Authentication System',
            description: 'Secure authentication system featuring email verification, login, and signup functionality.',
            tech: ['React', 'Django', 'PostgreSQL', 'SMTP'],
            image: 'project1',
            liveUrl: 'https://github.com/Mahesh1604/authentication',
            githubUrl: 'https://github.com/Mahesh1604/authentication',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            id: 2,
            title: 'FoodExpress',
            description: 'A React-based food ordering platform where users can browse menus and place orders easily.',
            tech: ['React', 'JavaScript', 'CSS', 'Vite'],
            image: 'project2',
            liveUrl: 'https://github.com/Mahesh1604/FoodExpress',
            githubUrl: 'https://github.com/Mahesh1604/FoodExpress',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            id: 3,
            title: 'Aaradhhyadharma Foundation',
            description: 'A modern website for a non-profit organization built with React, showcasing their mission and social activities.',
            tech: ['React', 'JavaScript', 'CSS', 'Bootstrap'],
            image: 'project3',
            liveUrl: 'https://github.com/Mahesh1604/AaradhhyadharmaFoundation',
            githubUrl: 'https://github.com/Mahesh1604/AaradhhyadharmaFoundation',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
            id: 4,
            title: 'Photo Studio Website',
            description: 'A Django-based photography studio website featuring a portfolio gallery, service listings, online booking, and an admin panel for content management.',
            tech: ['Python', 'Django', 'SQLite', 'CSS'],
            image: 'project4',
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
            cursor: 'pointer',
            background: '#1a1a1a',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            overflow: 'hidden'
        },
        projectImageContainer: {
            position: 'relative',
            width: '100%',
            height: '250px',
            overflow: 'hidden',
            borderRadius: '15px 15px 0 0'
        },
        projectImage: {
            width: '100%',
            height: '100%',
            transition: 'transform 0.4s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: 'rgba(255, 255, 255, 0.2)',
            fontWeight: 800
        },
        projectOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease'
        },
        projectLinks: {
            display: 'flex',
            gap: '1.5rem'
        },
        projectLink: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(102, 126, 234, 0.2)',
            border: '2px solid #667eea',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.25rem',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
        },
        cardBody: {
            padding: '1.5rem'
        },
        projectTitle: {
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#ffffff'
        },
        projectDescription: {
            color: '#b0b0b0',
            fontSize: '0.95rem',
            marginBottom: '1.5rem',
            lineHeight: 1.6
        },
        techStack: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem'
        },
        techTag: {
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            background: 'rgba(102, 126, 234, 0.1)',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '20px',
            color: '#667eea',
            fontSize: '0.8rem',
            fontWeight: 500,
            transition: 'all 0.3s ease'
        }
    };

    return (
        <section id="projects" style={styles.projectsSection}>
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div
                            className="col-lg-4 col-md-6"
                            key={project.id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div
                                className="project-card card h-100 fade-in-up"
                                style={styles.projectCard}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
                                    e.currentTarget.style.borderColor = '#667eea';
                                    const overlay = e.currentTarget.querySelector('.project-overlay');
                                    if (overlay) overlay.style.opacity = '1';
                                    const img = e.currentTarget.querySelector('.project-image');
                                    if (img) img.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    const overlay = e.currentTarget.querySelector('.project-overlay');
                                    if (overlay) overlay.style.opacity = '0';
                                    const img = e.currentTarget.querySelector('.project-image');
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
                                        <div className="project-overlay" style={styles.projectOverlay}>
                                            <div style={styles.projectLinks}>
                                                <a
                                                    href={project.liveUrl}
                                                    style={styles.projectLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Live Demo"
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = '#667eea';
                                                        e.currentTarget.style.transform = 'translateY(-5px) rotate(360deg)';
                                                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.5)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = 'rgba(102, 126, 234, 0.2)';
                                                        e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    <FaExternalLinkAlt />
                                                </a>
                                                <a
                                                    href={project.githubUrl}
                                                    style={styles.projectLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="GitHub Repo"
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = '#667eea';
                                                        e.currentTarget.style.transform = 'translateY(-5px) rotate(360deg)';
                                                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.5)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = 'rgba(102, 126, 234, 0.2)';
                                                        e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                    }}
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
                                            <span
                                                key={idx}
                                                style={styles.techTag}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.background = 'rgba(102, 126, 234, 0.2)';
                                                    e.currentTarget.style.borderColor = '#667eea';
                                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                                                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                }}
                                            >
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
        </section>
    );
};

export default Projects;
