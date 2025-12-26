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
        }

        html {
          scroll-behavior: smooth;
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
