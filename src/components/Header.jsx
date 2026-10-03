import './Header.css';

function Header({ darkMode, toggleDark }) {
  return (
    <header className="header">
      <h1>
        Hi, I'm <span>Eduard Ken Gallardo</span> 👋
      </h1>
      <p>Aspiring Web Developer | React Learner</p>
      <button onClick={toggleDark}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}

export default Header;