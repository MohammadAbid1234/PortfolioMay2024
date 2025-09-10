import { useRef, useState, useEffect, useMemo } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function Navbar({ active, isTop ,links}) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

//   const links = useMemo(
//     () => [
//       { id: 'home', label: 'Home' },
//       { id: 'services', label: 'Services' },
//       { id: 'about', label: 'About' },
//       { id: 'portfolio', label: 'Portfolio' },
//       { id: 'contact', label: 'Contact' },
//       // Try commenting out some links ↓ to test shrink behavior
//       { id: 'extra1', label: 'Extra1' },
//       { id: 'extra2', label: 'Extra2' },
//       { id: 'extra3', label: 'Extra3' },
//     ],
//     []
//   );

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = direction => {
    if (!scrollRef.current) return;
    const scrollAmount = 150;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
    setTimeout(checkScroll, 200);
  };

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 bg-gray-900/90 px-3 sm:px-4 py-2 sm:py-3 rounded-full   shadow-md z-50 transition-all duration-500 ${
        isTop ? 'top-2' : 'bottom-4'
      } w-auto max-w-full`}>
      <div className="flex items-center gap-2  ">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`p-2 rounded-full  ${
            canScrollLeft ? 'bg-gray-800/80 hover:bg-gray-700 text-white' : 'opacity-40 cursor-not-allowed'
          }`}>
          <FaAngleLeft />
        </button>

        {/* Scrollable Nav */}
        <ul
          ref={scrollRef}
          className="flex gap-1   whitespace-nowrap overflow-hidden h-10 items-center "
          onScroll={checkScroll}>
          {links.map(link => (
            <li key={link.id} className="flex-shrink-0">
              <a
                href={`#${link.id}`}
                className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full transition-all duration-300 ml-1 ${
                  active === link.id
                    ? 'bg-purple-600 text-white shadow-[0_0_2px_4px_rgba(147,51,234,0.6)] rounded-full'
                    : 'hover:bg-purple-400 hover:text-white'
                }`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`p-2 rounded-full ${
            canScrollRight ? 'bg-gray-800/80 hover:bg-gray-700 text-white' : 'opacity-40 cursor-not-allowed'
          }`}>
          <FaAngleRight />
        </button>
      </div>
    </nav>
  );
}
