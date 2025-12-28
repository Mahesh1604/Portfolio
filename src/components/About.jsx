import { FaDownload, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import profileImg from '../assets/images/mahesh_image.jpeg';
import resumePdf from '../assets/resume/Mahesh_Parmar.pdf';

const About = () => {
    const highlights = [
        {
            icon: <FaCode />,
            title: 'Clean Code',
            description: 'Writing maintainable and scalable code following best practices'
        },
        {
            icon: <FaLaptopCode />,
            title: 'Responsive Design',
            description: 'Creating pixel-perfect designs that work on all devices'
        },
        {
            icon: <FaRocket />,
            title: 'Performance',
            description: 'Optimizing applications for speed and efficiency'
        }
    ];

    const styles = {
        aboutSection: {
            background: 'transparent',
            padding: '80px 0'
        },
        aboutImageContainer: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        aboutImage: {
            position: 'relative',
            width: '100%',
            maxWidth: '350px',
            aspectRatio: '1/1'
        },
        imagePlaceholder: {
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
            overflow: 'hidden'
        },
        profileImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            background: 'rgba(255, 255, 255, 0.05)'
        },
        imageBorder: {
            position: 'absolute',
            top: '-8px',
            left: '-8px',
            right: '-8px',
            bottom: '-8px',
            borderRadius: '50%',
            border: '3px solid #667eea',
            animation: 'rotate 10s linear infinite',
            zIndex: 1
        },
        aboutContent: {
            padding: '0'
        },
        aboutGreeting: {
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#ffffff'
        },
        gradientText: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        aboutText: {
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: '#b0b0b0',
            marginBottom: '1.5rem'
        },
        highlightsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            margin: '2rem 0'
        },
        highlightItem: {
            display: 'flex',
            gap: '1rem',
            padding: '1.5rem',
            background: 'rgba(102, 126, 234, 0.05)',
            borderLeft: '4px solid #667eea',
            borderRadius: '12px',
            transition: 'all 0.3s ease'
        },
        highlightIcon: {
            fontSize: '2rem',
            color: '#667eea',
            flexShrink: 0
        },
        highlightContent: {
            flex: 1
        },
        highlightTitle: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: '0.5rem'
        },
        highlightDescription: {
            fontSize: '0.95rem',
            color: '#b0b0b0',
            margin: 0
        },
        aboutActions: {
            marginTop: '2rem'
        }
    };

    return (
        <section id="about" style={styles.aboutSection}>
            <div className="container">
                <h2 className="section-title text-center" style={{ marginBottom: '4rem' }}>About Me</h2>

                <div className="row align-items-center g-5">
                    <div className="col-lg-5 order-2 order-lg-1">
                        <div className="about-image-wrapper fade-in-up" style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="about-image-container" style={styles.aboutImage}>
                                <div style={styles.imagePlaceholder}>
                                    <img src={profileImg} alt="Mahesh Parmar" style={styles.profileImage} />
                                </div>
                                <div style={styles.imageBorder}></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 order-1 order-lg-2">
                        <div className="about-content-wrapper fade-in-up" style={styles.aboutContent}>
                            <h3 className="about-greeting" style={styles.aboutGreeting}>
                                Hello! I'm <span style={styles.gradientText}>Mahesh</span>
                            </h3>

                            <div className="about-text-content">
                                <p style={styles.aboutText}>
                                    I'm a passionate <strong style={{ color: '#ffffff', fontWeight: 600 }}>Full Stack Web Developer</strong> with a strong background in
                                    Information Technology. I specialize in building modern, scalable web applications
                                    that deliver exceptional user experiences.
                                </p>

                                <p style={styles.aboutText}>
                                    With expertise in both frontend and backend technologies, I create end-to-end solutions
                                    using <strong style={{ color: '#ffffff', fontWeight: 600 }}>React, Django, Python, and JavaScript</strong>.
                                </p>
                            </div>

                            <div className="highlights-grid" style={styles.highlightsGrid}>
                                {highlights.map((item, index) => (
                                    <div
                                        key={index}
                                        className="highlight-item"
                                        style={styles.highlightItem}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(102, 126, 234, 0.05)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        <div style={styles.highlightIcon}>{item.icon}</div>
                                        <div style={styles.highlightContent}>
                                            <h4 style={styles.highlightTitle}>{item.title}</h4>
                                            <p style={styles.highlightDescription}>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="about-actions" style={styles.aboutActions}>
                                <a
                                    href={resumePdf}
                                    className="btn btn-primary btn-lg px-4"
                                    download="Mahesh_Parmar.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaDownload className="me-2" />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 991px) {
                    .about-greeting {
                        font-size: 2rem !important;
                        text-align: center;
                    }
                    .about-text-content {
                        text-align: center;
                    }
                    .about-actions {
                        display: flex;
                        justify-content: center;
                    }
                    .about-image-container {
                        max-width: 280px !important;
                        margin-top: 2rem;
                    }
                }

                @media (max-width: 576px) {
                    .highlight-item {
                        padding: 1.2rem !important;
                    }
                    .about-actions .btn {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
