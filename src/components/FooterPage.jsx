import { FaInstagram, FaLinkedin, FaDribbble, FaBehance, FaEnvelope, FaPhone, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer  className=" bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-12 px-6 ">
      <div className="dark:text-red-400 flex space-around max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-c">
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





















// import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaFacebookF, FaGithub } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden py-16 px-6 
//                       dark:bg-gradient-to-r dark:from-gray-900 dark:via-black dark:to-gray-900
//                       light:bg-gradient-to-br light:from-slate-50 light:via-white light:to-blue-50/50
//                       dark:text-gray-300 light:text-slate-600
//                       border-t dark:border-gray-800 light:border-slate-200/80">
      
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 light:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent pointer-events-none"></div>
      
//       <div className="relative max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
//         {/* Brand Section */}
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
//             Mohammad Abid
//           </h2>
//           <p className="text-sm dark:text-gray-400 light:text-slate-500 leading-relaxed max-w-xs mx-auto md:mx-0">
//             Crafting digital experiences with clean code and modern design. 
//             Full-Stack Developer specializing in performant web applications.
//           </p>
//           <div className="pt-2">
//             <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-800 light:bg-white light:border light:border-slate-200 light:shadow-sm">
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//               Available for freelance
//             </span>
//           </div>
//         </div>

//         {/* Contact Info */}
//         <div className="space-y-6">
//           <h3 className="text-lg font-semibold dark:text-white light:text-slate-800 flex items-center justify-center md:justify-start gap-2">
//             <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded"></div>
//             Get In Touch
//           </h3>
//           <div className="space-y-3">
//             <a href="mailto:mohammadabid99@gmail.com" 
//                className="flex items-center justify-center md:justify-start gap-3 group transition-all duration-300 hover:translate-x-1">
//               <div className="p-2 rounded-lg dark:bg-gray-800 light:bg-white light:shadow-sm group-hover:shadow-md transition-shadow">
//                 <FaEnvelope className="text-blue-500 dark:text-blue-400 light:text-blue-600" />
//               </div>
//               <span className="dark:text-gray-400 light:text-slate-600 group-hover:text-blue-600 transition-colors">
//                 mohammadabid99@gmail.com
//               </span>
//             </a>
//             <a href="tel:+93794673359" 
//                className="flex items-center justify-center md:justify-start gap-3 group transition-all duration-300 hover:translate-x-1">
//               <div className="p-2 rounded-lg dark:bg-gray-800 light:bg-white light:shadow-sm group-hover:shadow-md transition-shadow">
//                 <FaPhone className="text-green-500 dark:text-green-400 light:text-green-600" />
//               </div>
//               <span className="dark:text-gray-400 light:text-slate-600 group-hover:text-green-600 transition-colors">
//                 +93 79 467 3359
//               </span>
//             </a>
//           </div>
//         </div>

//         {/* Socials */}
//         <div className="space-y-6">
//           <h3 className="text-lg font-semibold dark:text-white light:text-slate-800 flex items-center justify-center md:justify-start gap-2">
//             <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></div>
//             Connect With Me
//           </h3>
//           <div className="flex justify-center md:justify-start gap-4 text-lg">
//             {[
//               { icon: FaInstagram, href: 'https://www.instagram.com/mohammadabid8980', color: 'hover:text-pink-500 light:hover:text-pink-600' },
//               { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mohammad-abid-formuli-b4898a2a0/', color: 'hover:text-blue-500 light:hover:text-blue-600' },
//               { icon: FaFacebookF, href: 'https://m.facebook.com/mohammadabed.frmuly', color: 'hover:text-blue-400 light:hover:text-blue-500' },
//               { icon: FaGithub, href: '#', color: 'hover:text-gray-700 light:hover:text-slate-800' },
//             ].map((social, idx) => (
//               <a 
//                 key={idx}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`p-3 rounded-xl dark:bg-gray-800 light:bg-white light:shadow-sm 
//                           ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-md
//                           dark:hover:shadow-lg light:hover:shadow-lg`}
//               >
//                 <social.icon className="text-xl" />
//               </a>
//             ))}
//           </div>
//           <p className="text-xs dark:text-gray-500 light:text-slate-400 pt-4">
//             Typically respond within 24 hours
//           </p>
//         </div>
//       </div>

//       <div className="relative max-w-8xl mx-auto">
//         <hr className="my-8 dark:border-gray-800 light:border-slate-300/50" />
        
//         {/* Bottom Bar */}
//         <div className="text-center space-y-3">
//           <p className="text-sm dark:text-gray-500 light:text-slate-500">
//             © 2024 Designed & Developed with ❤️ by{' '}
//             <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
//               Mohammad Abid
//             </span>
//           </p>
//           <p className="text-xs dark:text-gray-600 light:text-slate-400 flex items-center justify-center gap-2">
//             <span className="animate-pulse">⚡</span>
//             Built with React & Tailwind CSS
//             <span className="animate-pulse">⚡</span>
//           </p>
//           <div className="flex items-center justify-center gap-4 text-xs dark:text-gray-600 light:text-slate-400 mt-4">
//             <span>All Rights Reserved</span>
//             <span className="w-1 h-1 rounded-full dark:bg-gray-700 light:bg-slate-300"></span>
//             <span>Version 1.0.0</span>
//             <span className="w-1 h-1 rounded-full dark:bg-gray-700 light:bg-slate-300"></span>
//             <span className="flex items-center gap-1">
//               <span className="w-2 h-2 rounded-full bg-green-500"></span>
//               Status: Active
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }