import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import ParticlesComponent from './components/ParticlesComponent';

function App() {
  return (
    <>
      {/* Global Styles - Minimal CSS for Bootstrap and global resets */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
          background-color: #0a0a0a;
          color: #ffffff;
          overflow-x: hidden;
          line-height: 1.6;
          width: 100%;
        }

        html {
          scroll-behavior: smooth;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 1.8rem;
            margin-bottom: 2rem;
          }
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        body {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
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

      <div className="App" style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
        <ParticlesComponent />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
