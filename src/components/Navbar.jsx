import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: use Heroicons or Lucide for hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="py-3 flex justify-between items-center relative">
        {/* Brand */}
        <div className="text-2xl font-bold">Shahina</div>

        {/* Hamburger icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="space-x-6 hidden md:flex items-center">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          
        </div>

        <div className="space-x-6 hidden md:flex items-center">
          <a href="#contact">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105">
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4">
          <a href="#home" className="hover:text-gray-400" onClick={toggleMenu}>Home</a>
          <a href="#about" className="hover:text-gray-400" onClick={toggleMenu}>About Me</a>
          <a href="#service" className="hover:text-gray-400" onClick={toggleMenu}>Services</a>
          <a href="#project" className="hover:text-gray-400" onClick={toggleMenu}>Projects</a>
          <a href="#contact" className="hover:text-gray-400" onClick={toggleMenu}>Contact</a>
          <a href="#contact">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105 w-full">
              Contact Me
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
