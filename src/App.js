import React, { useEffect } from 'react';
import MatrixRain  from './components/MatrixRain/MatrixRain';
import Navbar      from './components/Navbar/Navbar';
import Hero        from './components/Hero/Hero';
import About       from './components/About/About';
import Skills      from './components/Skills/Skills';
import Projects    from './components/Projects/Projects';
import Education   from './components/Education/Education';
import Services    from './components/Services/Services';
import Contact     from './components/Contact/Contact';
import Footer      from './components/Footer/Footer';

function App() {
  /* Global scroll-reveal watcher */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.13 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach(el => observer.observe(el));
    return () => els.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <>
      <MatrixRain />
      <div className="page">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
