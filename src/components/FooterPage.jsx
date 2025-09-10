import { FaInstagram, FaLinkedin, FaDribbble, FaBehance, FaEnvelope, FaPhone, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-12 px-6 ">
      <div className=" flex space-around max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-c">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Mohammad Abid</h2>
          <p className="text-gray-400 mt-2 text-sm">Full-Stack Developer | Backend, Frontend & Database Design</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get In Touch</h3>
          <p className="flex items-center justify-center  gap-2 text-gray-400 text-sm ">
            <FaEnvelope className="text-blue-400" /> mohammadabid99@gmail.com
          </p>
          <p className="flex items-center justify-center  gap-2 text-gray-400 text-sm mt-2">
            <FaPhone className="text-blue-400" /> +93 79 467 3359
          </p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex justify-center  gap-4 text-lg">
            <a href="https://www.instagram.com/mohammadabid8980" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-abid-formuli-b4898a2a0/" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a
              href="https://m.facebook.com/mohammadabed.frmuly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 cursor-pointer">
              <FaFacebookF />
            </a>
            {/* <a href="#" className="hover:text-sky-400">
              <FaBehance />
            </a> */}
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mb-8">
        <p>
          © 2024 Designed & Developed by <span className="text-blue-400 font-semibold">Mohammad Abid</span>
        </p>
        <p className="mt-1">All Rights Reserved | v1.0.0</p>
      </div>
    </footer>
  );
}
