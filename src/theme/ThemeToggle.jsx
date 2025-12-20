import { useTheme } from '../context/ThemeContext'; // Adjust the path as needed
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-2xl z-50 
                 transition-all duration-500 transform hover:scale-110
                 bg-accent text-white dark:bg-white dark:text-gray-900"
      aria-label="Toggle Theme">
      {theme == 'dark' ? (
        <FaMoon className="text-xl animate-in fade-in zoom-in duration-300" />
      ) : (
        <FaSun className="text-xl animate-in fade-in zoom-in duration-300" />
      )}
    </button>
  );
}
