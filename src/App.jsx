import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Header darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;