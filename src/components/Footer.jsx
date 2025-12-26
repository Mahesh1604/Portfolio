import {
    FaInstagram, FaLinkedin, FaFacebook, FaGithub,
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart
} from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            url: 'https://linkedin.com',
            color: '#0077B5'
        },
        {
            name: 'GitHub',
            icon: <FaGithub />,
            url: 'https://github.com/Mahesh1604',
            color: '#333'
        },
        {
            name: 'Instagram',
            icon: <FaInstagram />,
            url: 'https://instagram.com',
            color: '#E4405F'
        }
    ];

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'mr.maheshparmar084@gmail.com',
            link: 'mailto:mr.maheshparmar084@gmail.com'
        },
        {
            icon: <FaPhone style={{ transform: 'rotate(90deg)' }} />,
            label: 'Phone',
            value: '+91 8103121084',
            link: 'tel:+918103121084'
        },
        {
            icon: <FaMapMarkerAlt />,
            label: 'Location',
            value: 'India',
            link: null
        }
    ];

    const currentYear = new Date().getFullYear();

    const styles = {
        contactSection: {
            background: 'transparent',
            padding: '80px 0'
        },
        contactIntro: {
            fontSize: '1.2rem',
            color: '#b0b0b0',
            marginBottom: '3rem',
            lineHeight: 1.8
        },
        contactInfoGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
        },
        contactInfoItem: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.5rem',
            padding: '2rem',
            background: '#0a0a0a',
            borderRadius: '15px',
            border: '1px solid rgba(102, 126, 234, 0.2)',
            transition: 'all 0.3s ease'
        },
        contactIcon: {
            fontSize: '2rem',
            color: '#667eea',
            flexShrink: 0
        },
        contactDetails: {
            flex: 1
        },
        contactLabel: {
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: '0.5rem'
        },
        contactValue: {
            fontSize: '1rem',
            color: '#b0b0b0',
            margin: 0,
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            wordBreak: 'break-all',
            display: 'inline-block',
            maxWidth: '100%'
        },
        footer: {
            background: 'transparent',
            borderTop: '1px solid rgba(102, 126, 234, 0.2)',
            padding: '3rem 0 1.5rem'
        },
        footerContent: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
            marginBottom: '2rem',
            textAlign: 'center'
        },
        footerBrand: {
            marginBottom: '1rem'
        },
        footerBrandTitle: {
            fontSize: '1.75rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: "'Courier New', monospace",
            marginBottom: '0.5rem'
        },
        footerBrandText: {
            color: '#b0b0b0',
            fontSize: '1rem'
        },
        footerSocial: {
            marginBottom: '1rem'
        },
        footerSocialTitle: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: '1.5rem'
        },
        socialLinks: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
        },
        socialLink: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(102, 126, 234, 0.1)',
            border: '2px solid rgba(102, 126, 234, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '1.5rem',
            transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            textDecoration: 'none'
        },
        footerBottom: {
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
        },
        footerBottomText: {
            color: '#b0b0b0',
            fontSize: '0.95rem',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
        },
        heartIcon: {
            color: '#f5576c',
            animation: 'heartbeat 1.5s infinite'
        }
    };

    return (
        <>
            {/* Contact Section */}
            <section id="contact" style={styles.contactSection}>
                <div className="container">
                    <h2 className="section-title text-center" style={{ width: '100%', marginBottom: '3rem' }}>Get In Touch</h2>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <p className="contact-intro text-center" style={styles.contactIntro}>
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                                Feel free to reach out!
                            </p>

                            <div style={styles.contactInfoGrid}>
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="contact-info-item fade-in-up"
                                        style={{
                                            ...styles.contactInfoItem,
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = '#667eea';
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <div style={styles.contactIcon}>{info.icon}</div>
                                        <div style={styles.contactDetails}>
                                            <h4 style={styles.contactLabel}>{info.label}</h4>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    style={styles.contactValue}
                                                    onMouseEnter={(e) => e.currentTarget.style.color = '#667eea'}
                                                    onMouseLeave={(e) => e.currentTarget.style.color = '#b0b0b0'}
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p style={styles.contactValue}>{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <div className="container">
                    <div style={styles.footerContent}>
                        <div style={styles.footerBrand}>
                            <h3 style={styles.footerBrandTitle}>Mahesh Parmar</h3>
                            <p style={styles.footerBrandText}>Full Stack Web Developer</p>
                        </div>

                        <div style={styles.footerSocial}>
                            <h4 style={styles.footerSocialTitle}>Connect With Me</h4>
                            <div style={styles.socialLinks}>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.socialLink}
                                        title={social.name}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = social.color;
                                            e.currentTarget.style.borderColor = social.color;
                                            e.currentTarget.style.color = 'white';
                                            e.currentTarget.style.transform = 'translateY(-10px) rotate(360deg)';
                                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                                            e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                                            e.currentTarget.style.color = '#ffffff';
                                            e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={styles.footerBottom}>
                        <p style={styles.footerBottomText}>
                            &copy; {currentYear} Mahesh. Made with <FaHeart style={styles.heartIcon} /> using React & Bootstrap
                        </p>
                    </div>
                </div>
            </footer>

            <style>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          10%, 30% {
            transform: scale(1.2);
          }
          20%, 40% {
            transform: scale(1);
          }
        }
        @media (max-width: 768px) {
          .contact-info-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .contact-info-item {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
          }
          .footer-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-bottom p {
            flex-direction: column !important;
            gap: 0.25rem !important;
          }
        }
      `}</style>
        </>
    );
};

export default Footer;
