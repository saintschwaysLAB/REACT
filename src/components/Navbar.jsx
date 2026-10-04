function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
      <div className="max-w-3xl mx-auto px-6 py-3 flex justify-between items-center">
        <span className="font-bold text-purple-700 dark:text-purple-300">
          My Portfolio
        </span>
        <div className="flex gap-4 text-sm">
          <a href="#about" className="hover:text-purple-700 dark:hover:text-purple-300">About</a>
          <a href="#skills" className="hover:text-purple-700 dark:hover:text-purple-300">Skills</a>
          <a href="#projects" className="hover:text-purple-700 dark:hover:text-purple-300">Projects</a>
          <a href="#contact" className="hover:text-purple-700 dark:hover:text-purple-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;