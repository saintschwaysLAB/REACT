function Header({ darkMode, toggleDark }) {
  return (
    <header className="bg-gradient-to-br from-white-500 to-blue-300 text-center px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        Hi, I'm <span className="text-black-800">Eduard Ken Gallardo</span> 👋
      </h1>
      <p className="opacity-90 mb-6">Aspiring Web Developer | React Learner</p>

    </header>
  );
}

export default Header;
