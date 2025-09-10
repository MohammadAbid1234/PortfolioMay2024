import { useEffect, useMemo, useState } from 'react';
import { FaDownload, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import AbidImage from '/abid2.png';

export default function BottomNav() {
  const [active, setActive] = useState('home');
  const [isTop, setIsTop] = useState(true);

  const links = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'about', label: 'About' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2; // middle of screen
      links.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            setActive(link.id);
          }
        }
      });

      setIsTop(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    // const handleScroll = () => {
    //   setIsTop(window.scrollY < 100);
    // };
    // window.addEventListener("scroll", handleScroll);

    // Scroll spy
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    // threshold: window.innerWidth < 768 ? 0.2 : 0.5, // lower threshold for mobile

    links.forEach(link => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [links]);

  return (
    <section
      id="home"
      className=" pt-10 md:pt-0  bg-gradient-to-r from-gray-900 via-black to-gray-900  bg-black text-white min-h-screen flex flex-col justify-center px-8 ">
      <nav
        className={` fixed left-1/2 transform -translate-x-1/2 bg-gray-900/90 px-4 py-4 rounded-full shadow-md z-50 transition-all duration-500 ${
          isTop ? 'top-2' : 'bottom-4 '
        }`}>
        <ul className="flex gap-3 sm:gap-4 md:gap-6 text-gray-300 font-medium text-sm sm:text-base">
          {links.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full transition-all duration-300 
                ${
                  active === link.id
                    ? 'bg-purple-600 text-white shadow-[0_0_12px_3px_rgba(147,51,234,0.6)]'
                    : 'hover:bg-purple-400 hover:text-white'
                }`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* <p>abid</p> */}
      {/* Hero content */}
      <div className="   flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 py-12 ">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-gray-400">Hi I am</p>
          <h2 className="text-2xl font-semibold mt-2">Mohammad Abid</h2>
          <h1 className="text-5xl font-bold text-blue-400 mt-4">Full-Stack Developer</h1>
          <div className="flex gap-4 mt-6 text-gray-400">
            <a
              href="https://m.facebook.com/mohammadabed.frmuly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 cursor-pointer">
              <FaFacebookF />
            </a>
            <a
              // href="https://m.facebook.com/mohammadabed.frmuly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 cursor-pointer">
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/mohammadabid8980"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 cursor-pointer">
              <FaInstagram className="hover:text-blue-400 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-abid-formuli-b4898a2a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 cursor-pointer">
              <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            </a>
          </div>
          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className=" bg-blue-500 rounded-lg font-medium hover:bg-blue-600">
              <a
                href="mailto:mohammadabid99@gmail.com"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-medium">
                Hire Me
              </a>
            </button>
            <button>
              <a
                href={`Abid_CV.pdf`}
                target="_blank"
                rel="noreferrer"
                download={`${import.meta.env.BASE_URL}/Abid_CV.pdf`} // optional, defines the downloaded filename
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-medium">
                <FaDownload /> Download CV
              </a>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="bg-gray-900 px-6 py-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-blue-400">1+</h3>
              <p className="text-sm text-gray-400">Experiences</p>
            </div>
            <div className="bg-gray-900 px-6 py-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-blue-400">3+</h3>
              <p className="text-sm text-gray-400">Projects done</p>
            </div>
            <div className="bg-gray-900 px-6 py-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-blue-400">10+</h3>
              <p className="text-sm text-gray-400">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        {/* add and flex-1 in belw */}
        <div className=" flex justify-center  mt-30 md:mt-0 ">
          <div className="w-72 h-72 md:w-96 md:h-96 sm:my-20 rounded-full bg-gradient-to-tr from-blue-500/70 to-transparent flex items-center justify-center relative overflow-visible  shadow-[0_0_50px_20px_rgba(59,130,246,0.5)] ">
            <img
              src={AbidImage}
              alt="Example"
              className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 -translate-y-1/20 w-[120%] h-[120%] object-cover rounded-full  "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
