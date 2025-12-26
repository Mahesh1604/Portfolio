import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
    FaPython, FaDatabase, FaGitAlt
} from 'react-icons/fa';
import { SiDjango, SiJquery, SiCplusplus, SiC } from 'react-icons/si';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Frontend Development',
            skills: [
                { name: 'HTML5', level: 95, icon: <FaHtml5 />, color: '#E34F26' },
                { name: 'CSS3', level: 90, icon: <FaCss3Alt />, color: '#1572B6' },
                { name: 'JavaScript', level: 88, icon: <FaJs />, color: '#F7DF1E' },
                { name: 'React', level: 85, icon: <FaReact />, color: '#61DAFB' },
                { name: 'Bootstrap', level: 92, icon: <FaBootstrap />, color: '#7952B3' },
                { name: 'jQuery', level: 80, icon: <SiJquery />, color: '#0769AD' }
            ]
        },
        {
            category: 'Backend Development',
            skills: [
                { name: 'Python', level: 90, icon: <FaPython />, color: '#3776AB' },
                { name: 'Django', level: 85, icon: <SiDjango />, color: '#092E20' },
                { name: 'C', level: 82, icon: <SiC />, color: '#A8B9CC' },
                { name: 'C++', level: 80, icon: <SiCplusplus />, color: '#00599C' },
                { name: 'Database', level: 82, icon: <FaDatabase />, color: '#4479A1' },
                { name: 'Git', level: 88, icon: <FaGitAlt />, color: '#F05032' }
            ]
        }
    ];

    const styles = {
        skillsSection: {
            background: 'transparent',
            padding: '80px 0'
        },
        skillCategoryCard: {
            height: '100%',
            background: '#0a0a0a',
            border: '1px solid rgba(102, 126, 234, 0.2)',
            borderRadius: '15px',
            transition: 'all 0.3s ease',
            overflow: 'hidden'
        },
        cardBody: {
            padding: '1.5rem'
        },
        categoryTitle: {
            fontSize: '1.75rem',
            fontWeight: 700,
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        },
        skillsList: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
        },
        skillItem: {
            animation: 'fadeInUp 0.6s ease-out both'
        },
        skillHeader: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem'
        },
        skillName: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontWeight: 600,
            color: '#ffffff',
            fontSize: '1.1rem'
        },
        skillIcon: {
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center'
        },
        skillPercentage: {
            fontWeight: 700,
            color: '#667eea',
            fontSize: '1rem'
        },
        progressBarContainer: {
            width: '100%',
            height: '10px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative'
        },
        progressBarFill: {
            height: '100%',
            borderRadius: '10px',
            position: 'relative',
            animation: 'progressAnimation 1.5s ease-out both',
            boxShadow: '0 0 10px currentColor'
        },
        additionalSkills: {
            marginTop: '4rem',
            padding: '2rem',
            background: 'rgba(102, 126, 234, 0.05)',
            borderRadius: '15px',
            border: '1px solid rgba(102, 126, 234, 0.1)'
        },
        skillsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1rem',
            justifyItems: 'center'
        },
        skillBadge: {
            padding: '0.75rem 1.5rem',
            background: '#0a0a0a',
            border: '1px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '50px',
            color: '#ffffff',
            fontWeight: 600,
            textAlign: 'center',
            transition: 'all 0.3s ease',
            animation: 'fadeInUp 0.6s ease-out both',
            width: '100%',
            maxWidth: '150px'
        }
    };

    return (
        <section id="skills" style={styles.skillsSection}>
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="row g-4">
                    {skillCategories.map((category, catIndex) => (
                        <div className="col-lg-6" key={catIndex}>
                            <div
                                className="skill-category-card card fade-in-up"
                                style={{
                                    ...styles.skillCategoryCard,
                                    animationDelay: `${catIndex * 0.2}s`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#667eea';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.2)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={styles.cardBody}>
                                    <h3 style={styles.categoryTitle}>{category.category}</h3>

                                    <div style={styles.skillsList}>
                                        {category.skills.map((skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                style={{
                                                    ...styles.skillItem,
                                                    animationDelay: `${(catIndex * 0.2) + (skillIndex * 0.1)}s`
                                                }}
                                            >
                                                <div style={styles.skillHeader}>
                                                    <div style={styles.skillName}>
                                                        <span style={{ ...styles.skillIcon, color: skill.color }}>
                                                            {skill.icon}
                                                        </span>
                                                        <span>{skill.name}</span>
                                                    </div>
                                                    <span style={styles.skillPercentage}>{skill.level}%</span>
                                                </div>

                                                <div style={styles.progressBarContainer}>
                                                    <div
                                                        style={{
                                                            ...styles.progressBarFill,
                                                            width: `${skill.level}%`,
                                                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                                                            animationDelay: `${(catIndex * 0.2) + (skillIndex * 0.1)}s`
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={styles.additionalSkills}>
                    <h3 className="text-center mb-4 gradient-text">Other Technologies</h3>
                    <div style={styles.skillsGrid}>
                        {['REST API', 'PostgreSQL', 'MySQL', 'MongoDB', 'AWS', 'Docker', 'Redis', 'Webpack'].map((tech, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.skillBadge,
                                    animationDelay: `${index * 0.05}s`
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#0a0a0a';
                                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes progressAnimation {
          from {
            width: 0 !important;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
};

export default Skills;
