"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a192f]/95 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-teal-400">
          Shreya
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">

          <li>
            <a href="#about" className="hover:text-teal-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-teal-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-teal-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#certificates" className="hover:text-teal-400 transition">
              Certificates
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-teal-400 transition">
              Contact
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}