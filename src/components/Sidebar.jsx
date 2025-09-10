import React, { useState } from 'react';
import { FaHome, FaUser, FaEnvelope, FaBriefcase, FaCode, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items
  const navItems = [
    { name: 'Home', icon: <FaHome />, href: '#home' },
    { name: 'About', icon: <FaUser />, href: '#about' },
    { name: 'Skills', icon: <FaCode />, href: '#skills' },
    { name: 'Portfolio', icon: <FaBriefcase />, href: '#portfolio' },
    { name: 'Contact', icon: <FaEnvelope />, href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-all duration-300 md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* The Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 
        bg-gradient-to-b from-indigo-900 to-purple-800 
        text-white shadow-2xl
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        
        {/* Profile Section */}
        <div className="p-6 border-b border-indigo-700 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-indigo-600 mb-4 overflow-hidden border-4 border-white shadow-lg">
            {/* Placeholder for your image. Replace with an <img> tag */}
            <div className="w-full h-full flex items-center justify-center text-3xl">JP</div>
          </div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-indigo-200 text-sm">Full Stack Developer</p>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Close sidebar on mobile after clicking a link
                  className="flex items-center p-3 rounded-lg hover:bg-indigo-700 hover:translate-x-2 transition-all duration-200 group"
                >
                  <span className="mr-4 text-lg group-hover:text-indigo-300">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer/Copyright at the bottom of the sidebar */}
        <div className="absolute bottom-0 w-full p-4 text-center text-indigo-300 text-xs border-t border-indigo-700">
          <p>© {new Date().getFullYear()} John Doe</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;