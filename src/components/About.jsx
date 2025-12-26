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
            width: '350px',
            height: '350px'
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
            objectFit: 'contain',
            objectPosition: 'top center',
            background: 'rgba(255, 255, 255, 0.05)'
        },
        imageBorder: {
            position: 'absolute',
            top: '-10px',
            left: '-10px',
            right: '-10px',
            bottom: '-10px',
            borderRadius: '50%',
            border: '3px solid #667eea',
            animation: 'rotate 10s linear infinite',
            zIndex: 1
        },
        aboutContent: {
            padding: '0 1rem'
        },
        aboutGreeting: {
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
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
            gap: '1.5rem',
            margin: '2.5rem 0'
        },
        highlightItem: {
            display: 'flex',
            gap: '1rem',
            padding: '1.5rem',
            background: 'rgba(102, 126, 234, 0.05)',
            borderLeft: '3px solid #667eea',
            borderRadius: '8px',
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
                <h2 className="section-title text-center" style={{ width: '100%', marginBottom: '3rem' }}>About Me</h2>

                <div className="row align-items-center g-5">
                    <div className="col-lg-5">
                        <div className="about-image-container fade-in-up" style={styles.aboutImageContainer}>
                            <div style={styles.aboutImage}>
                                <div style={styles.imagePlaceholder}>
                                    <img src={profileImg} alt="Mahesh Parmar" style={styles.profileImage} />
                                </div>
                                <div style={styles.imageBorder}>
                                    <div style={{
                                        content: '',
                                        position: 'absolute',
                                        top: '20px',
                                        left: '20px',
                                        right: '20px',
                                        bottom: '20px',
                                        borderRadius: '50%',
                                        border: '2px dashed rgba(102, 126, 234, 0.3)',
                                        animation: 'rotate 15s linear infinite reverse'
                                    }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="about-content fade-in-up" style={styles.aboutContent}>
                            <h3 style={styles.aboutGreeting}>
                                Hello! I'm <span style={styles.gradientText}>Mahesh</span>
                            </h3>

                            <p style={styles.aboutText}>
                                I'm a passionate <strong style={{ color: '#ffffff', fontWeight: 600 }}>Full Stack Web Developer</strong> with a strong background in
                                Information Technology. I specialize in building modern, scalable web applications
                                that deliver exceptional user experiences.
                            </p>

                            <p style={styles.aboutText}>
                                With expertise in both frontend and backend technologies, I create end-to-end solutions
                                using <strong style={{ color: '#ffffff', fontWeight: 600 }}>React, Django, Python, and JavaScript</strong>. My focus is on writing
                                clean, efficient code and implementing best practices to ensure high-quality deliverables.
                            </p>

                            <p style={styles.aboutText}>
                                I'm driven by the challenge of solving complex problems and turning ideas into reality.
                                Whether it's crafting intuitive user interfaces or architecting robust backend systems,
                                I bring dedication and innovation to every project.
                            </p>

                            <div style={styles.highlightsGrid}>
                                {highlights.map((item, index) => (
                                    <div
                                        key={index}
                                        style={styles.highlightItem}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                                            e.currentTarget.style.transform = 'translateX(10px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(102, 126, 234, 0.05)';
                                            e.currentTarget.style.transform = 'translateX(0)';
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

                            <div style={styles.aboutActions}>
                                <a
                                    href={resumePdf}
                                    className="btn btn-primary btn-lg"
                                    download="Mahesh_Parmar.pdf"
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
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @media (max-width: 992px) {
          .about-image {
            width: 300px !important;
            height: 300px !important;
            margin-bottom: 2rem;
          }
        }
        @media (max-width: 768px) {
          .about-image {
            width: 250px !important;
            height: 250px !important;
          }
          .about-greeting {
            font-size: 1.75rem !important;
            text-align: center;
          }
          .about-text {
            font-size: 1rem !important;
            text-align: center;
          }
          .highlight-item {
            flex-direction: column !important;
            text-align: center;
            align-items: center !important;
          }
          .about-actions {
            text-align: center;
          }
          .about-actions .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
