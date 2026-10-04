function Header({ darkMode, toggleDark }) {
  return (
    <header className="bg-gradient-to-br from-indigo-500 to-purple-700 text-white text-center px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        Hi, I'm <span className="text-yellow-300">Your Name</span> 👋
      </h1>
      <p className="opacity-90 mb-6">Aspiring Web Developer | React Learner</p>
      <button
        onClick={toggleDark}
        className="bg-white text-gray-800 font-semibold px-6 py-2.5 rounded-full hover:scale-105 transition-transform"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}

export default Header;