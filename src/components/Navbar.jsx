import { useRef, useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function Navbar({ active, isTop, links }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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
      className={`fixed left-1/2 transform -translate-x-1/2 bg-gray-900/90 px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-md z-50 transition-all duration-500 ${
        isTop ? 'top-2' : 'bottom-4'
      } w-auto max-w-full`}>
      <div className="flex items-center gap-2">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`p-2 rounded-full ${
            canScrollLeft ? 'bg-gray-800/80 hover:bg-gray-700 text-white' : 'opacity-40 cursor-not-allowed'
          }`}>
          <FaAngleLeft />
        </button>

        {/* Scrollable Nav */}
        <div className="relative overflow-hidden">
          <ul
            ref={scrollRef}
            className="flex gap-1 whitespace-nowrap overflow-x-auto scroll-smooth h-10 items-center no-scrollbar"
            onScroll={checkScroll}>
            {links.map(link => (
              <li key={link.id} className="flex-shrink-0">
                <a
                  href={`#${link.id}`}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full transition-all duration-300 ml-1 ${
                    active === link.id
                      ? 'bg-purple-600 text-white shadow-[0_0_2px_4px_rgba(147,51,234,0.6)]'
                      : 'hover:bg-purple-400 hover:text-white'
                  }`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Gradient overlays to indicate scrollability */}
          <div
            className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-gray-900/90 to-transparent pointer-events-none opacity-0 transition-opacity duration-300"
            style={{ opacity: canScrollLeft ? 1 : 0 }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-gray-900/90 to-transparent pointer-events-none opacity-0 transition-opacity duration-300"
            style={{ opacity: canScrollRight ? 1 : 0 }}
          />
        </div>

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

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </nav>
  );
}
