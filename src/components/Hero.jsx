import { Link } from 'react-scroll';

const Hero = () => {

    const techStack = [
        'HTML', 'CSS', 'JavaScript', 'jQuery',
        'Bootstrap', 'React', 'Python', 'Django'
    ];

    const styles = {
        heroSection: {
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'transparent'
        },
        heroOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, transparent 0%, rgba(10, 10, 10, 0.4) 100%)',
            zIndex: 2
        },
        heroContent: {
            position: 'relative',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            width: '100%',
        },
        heroText: {
            padding: '2rem 0',
            textAlign: 'center',
            width: '100%',
            maxWidth: '700px'
        },
        heroGreeting: {
            fontSize: '1.5rem',
            fontWeight: 300,
            color: '#b0b0b0',
            marginBottom: '1rem',
            animation: 'fadeIn 1s ease-out'
        },
        heroTitle: {
            fontSize: '4rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            lineHeight: 1.2,
            animation: 'fadeInUp 1s ease-out 0.2s both'
        },
        gradientText: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        heroSubtitle: {
            fontSize: '1.5rem',
            color: '#b0b0b0',
            marginBottom: '2rem',
            animation: 'fadeInUp 1s ease-out 0.4s both'
        },
        techStackContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem'
        },
        techBadge: {
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: 'rgba(102, 126, 234, 0.1)',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '50px',
            color: '#ffffff',
            fontWeight: 500,
            fontSize: '0.95rem',
            transition: 'all 0.3s ease',
            animation: 'fadeInUp 1s ease-out both'
        },
        heroButtons: {
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 1s ease-out 0.6s both'
        }
    };

    return (
        <section id="hero" style={{ direction: 'ltr', ...styles.heroSection }}>
            <div style={styles.heroOverlay}></div>
            <div
                style={{
                    position: 'relative',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    width: '100%',
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 1.5rem',
                    textAlign: 'center'
                }}
            >
                <div className="hero-text" style={styles.heroText}>
                    <p style={styles.heroGreeting}>Hello, I'm</p>
                    <h1 style={styles.heroTitle}>
                        <span style={styles.gradientText}>Full Stack Web Developer</span>
                    </h1>
                    <p style={styles.heroSubtitle}>
                        Crafting scalable web applications with
                    </p>
                    <div style={styles.techStackContainer}>
                        {techStack.map((tech, index) => (
                            <span
                                key={index}
                                style={{
                                    ...styles.techBadge,
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div style={styles.heroButtons}>
                        <Link
                            to="projects"
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="btn btn-primary btn-lg"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="btn btn-outline-primary btn-lg"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
