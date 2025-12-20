import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-0 right-6 p-3 rounded-full shadow-2xl z-50 
                 transition-all duration-500 transform hover:scale-110
                 theme-toggle ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
      aria-label="Toggle Theme">
      {theme === 'dark' ? (
        <FaMoon className="text-xl text-yellow-500 animate-in fade-in zoom-in duration-300" />
      ) : (
        <FaSun className="text-xl text-yellow-400 animate-in fade-in zoom-in duration-300" />
      )}
    </button>
  );
}