import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Set scrolled state for background changes
            setScrolled(currentScrollY > 20);

            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const navItems = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Projects', to: 'projects' },
        { name: 'Skills', to: 'skills' },
        { name: 'Contact', to: 'contact' }
    ];

    const styles = {
        navWrapper: {
            position: 'fixed',
            top: isVisible ? (scrolled ? '25px' : '35px') : '-100px', // Shifted down a bit
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            width: 'calc(100% - 40px)',
            maxWidth: '600px',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: isVisible ? 1 : 0,
        },
        navbar: {
            background: 'rgba(26, 26, 26, 0.5)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '100px',
            padding: scrolled ? '0.5rem 1.2rem' : '0.6rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            width: '100%',
            transition: 'all 0.4s ease',
        },
        scrolledNavbar: {
            background: 'rgba(10, 10, 10, 0.9)',
            borderColor: 'rgba(102, 126, 234, 0.2)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
        },
        navList: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            width: '100%',
        },
        navLink: {
            color: '#ffffff',
            fontWeight: 500,
            padding: '0.5rem 1.2rem',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
        },
        mobileMenu: {
            position: 'absolute',
            top: '70px',
            left: '0',
            right: '0',
            background: 'rgba(26, 26, 26, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            display: isOpen ? 'flex' : 'none',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            animation: 'slideDown 0.3s ease-out',
        },
        toggler: {
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
        }
    };

    return (
        <div style={styles.navWrapper}>
            <nav style={{
                ...styles.navbar,
                ...(scrolled ? styles.scrolledNavbar : {})
            }}>
                {/* Desktop Nav */}
                <ul className="d-none d-md-flex" style={styles.navList}>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                className="nav-link"
                                to={item.to}
                                spy={false}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                style={styles.navLink}
                                onClick={closeMenu}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'none';
                                }}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggler */}
                <button
                    className="d-md-none"
                    onClick={toggleMenu}
                    style={styles.toggler}
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Mobile Menu */}
                <div className="d-md-none" style={styles.mobileMenu}>
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.to}
                            spy={false}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            style={{ ...styles.navLink, textAlign: 'center' }}
                            onClick={closeMenu}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>

            <style>{`
                @keyframes slideDown {
                    from { transform: translateY(-20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }

                @media (max-width: 768px) {
                    .d-md-none { display: block !important; }
                    .d-md-flex { display: none !important; }
                }
            `}</style>
        </div>
    );
};

export default Navbar;
