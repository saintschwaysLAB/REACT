import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        <Header darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;