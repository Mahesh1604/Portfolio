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
            top: isVisible ? (scrolled ? '15px' : '25px') : '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            width: 'calc(100% - 20px)',
            maxWidth: 'fit-content',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: isVisible ? 1 : 0,
        },
        navbar: {
            background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'rgba(26, 26, 26, 0.4)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '100px',
            padding: '0.4rem 0.6rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.4s ease',
        },
        navList: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.1rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
        },
        navLink: {
            color: '#ffffff',
            fontWeight: 500,
            padding: '0.5rem 0.8rem',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            fontSize: '0.85rem',
            whiteSpace: 'nowrap',
        }
    };

    return (
        <div style={styles.navWrapper}>
            <nav style={styles.navbar}>
                <ul style={styles.navList}>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                className="nav-link-item"
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                style={styles.navLink}
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
            </nav>

            <style>{`
                @media (max-width: 480px) {
                    .nav-link-item {
                        padding: 0.4rem 0.6rem !important;
                        font-size: 0.75rem !important;
                    }
                    div[style*="navWrapper"] {
                        width: calc(100% - 10px) !important;
                    }
                }
                
                /* Active link styling */
                .nav-link-item.active {
                    background: rgba(102, 126, 234, 0.2) !important;
                    color: #667eea !important;
                }
            `}</style>
        </div>
    );
};

export default Navbar;
