import { useEffect, useState, useRef } from 'react';
import { FaDownload, FaFigma } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiAdobexd } from 'react-icons/si';

import { FaReact, FaDatabase, FaDocker, FaMobileAlt } from 'react-icons/fa';
import { SiLaravel, SiTensorflow } from 'react-icons/si'; // Use SiTensorflow instead of SiMachinelearning
import aboutImage from '/abid6.png';

export default function AboutMe() {
  const skills = [
    { name: 'Backend Development', icon: <SiLaravel size={36} />, percent: 90 },
    { name: 'Database Design', icon: <FaDatabase size={36} />, percent: 90 },
    { name: 'Frontend Development', icon: <FaReact size={36} />, percent: 80 },
    { name: 'Mobile Development', icon: <FaMobileAlt size={36} />, percent: 60 },
    { name: 'Machine Learning', icon: <SiTensorflow size={36} />, percent: 70 },
  ];

  const [progress, setProgress] = useState(skills.map(() => 0));
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.3 } // section is 30% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 3000; // ms
    const start = performance.now();

    const animate = time => {
      const elapsed = time - start;
      const newProgress = skills.map(skill => Math.min(skill.percent, (elapsed / duration) * skill.percent));
      setProgress(newProgress);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="text-blue-400 bg-black py-16 px-6 md:px-20  bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-gray-400 mt-2">Full-Stack Developer | Backend, Frontend & Database Design</p>
      </div>

      {/* Profile and Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div
          className="h-[80%] w-[70%] relative overflow-visible p-2"
          style={{
            backgroundColor: '#222121',
            borderTopRightRadius: '50%',
            borderTopLeftRadius: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          <img src={aboutImage} alt="Profile" className="object-contain scale-100 -translate-y-1/5" />
        </div>

        <div>
          <p className="text-gray-300 leading-relaxed mb-6 text-justify text-xl">
            I am a Full-Stack Developer and Database Designer, specializing in creating robust backend systems with
            Laravel, dynamic frontends with React, and efficient database architectures. In addition to my core
            expertise, I have experience with mobile development using Flutter and have explored machine learning and
            data mining concepts. While these are supplementary skills, I can contribute to projects requiring a broader
            technical perspective.
          </p>

          <button>
            <a
              href={`${import.meta.env.BASE_URL}Abid_CV.pdf`}
              download="Abid_CV.pdf" // optional, defines the downloaded filename
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-medium">
              <FaDownload /> Download CV
            </a>
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16 text-center">
        {skills.map((skill, index) => {
          const radius = 42;
          const circumference = 2 * Math.PI * radius;
          const dashOffset = circumference - (progress[index] / 100) * circumference;

          return (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24 -rotate-90">
                  <circle cx="48" cy="48" r={radius} stroke="gray" strokeWidth="6" fill="none" />
                  <circle
                    cx="48"
                    cy="48"
                    r={radius}
                    stroke="url(#blueGradient)"
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                    fill="none"
                  />

                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#60a5fa" /> {/* blue-400 */}
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="mt-0 text-blue-400">{skill.icon}</div>
                </div>
              </div>

              <span className="text-blue-400 font-bold">{Math.round(progress[index])}%</span>
              <p className="text-gray-300 mt-1">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// import { FaDownload, FaFigma } from 'react-icons/fa';
// import { SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiAdobexd } from 'react-icons/si';

// export default function AboutMe() {
//   // Skills data (easy to update or extend later)
//   const skills = [
//     { name: 'Figma', icon: <FaFigma size={36} />, percent: 100 },
//     { name: 'Adobe XD', icon: <SiAdobexd size={36} />, percent: 100 },
//     {
//       name: 'Adobe Photoshop',
//       icon: <SiAdobephotoshop size={36} />,
//       percent: 85,
//     },
//     {
//       name: 'Adobe Illustrator',
//       icon: <SiAdobeillustrator size={36} />,
//       percent: 60,
//     },
//     {
//       name: 'Adobe Premiere',
//       icon: <SiAdobepremierepro size={36} />,
//       percent: 70,
//     },
//   ];

//   return (
//     <section id="about" className=" text-blue-400 bg-black  py-16 px-6 md:px-20">
//       {/* Title */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold">About Me</h2>
//         <p className="text-gray-400 mt-2">Full-Stack Developer | Backend, Frontend & Database Design</p>
//       </div>

//       {/* Profile and Description */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
//         {/* Profile Image */}
//         {/* <div className="flex justify-center"> */}
//         <div
//           className="h-[80%] w-[70%] relative bg-95959-900 overflow-visible p-2  "
//           style={{
//             backgroundColor: '#222121', // Applying the color here
//             borderTopRightRadius: '50%',
//             borderTopLeftRadius: '50%',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//           }}>
//           {/* <div className="relative bg-gray-800 rounded-full overflow-hidden p-4 scale-75 "> */}
//           <img src="/abid6.png" alt="Profile" className=" object-contain scale-100 -translate-y-1/5  " />
//           {/* </div> */}
//         </div>

//         {/* Text */}
//         <div>
//           {/* <p className="text-gray-300 leading-relaxed mb-6 text-lg md:text-xl scale-130"> */}

//           <p className="text-gray-300 leading-relaxed mb-6 text-justify  text-xl ">
//             I am a Full-Stack Developer and Database Designer, specializing in creating robust backend systems with
//             Laravel, dynamic frontends with React, and efficient database architectures. In addition to my core
//             expertise, I have experience with mobile development using Flutter and have explored machine learning and
//             data mining concepts. While these are supplementary skills, I can contribute to projects requiring a broader
//             technical perspective.
//           </p>

//           <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md font-medium">
//             <FaDownload /> Download CV
//           </button>
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16 text-center">
//         {skills.map((skill, index) => (
//           <div key={index} className="flex flex-col items-center">
//             {/* Circular Progress */}
//             <div className="relative w-24 h-24">
//               <svg className="w-24 h-24 -rotate-90">
//                 <circle cx="48" cy="48" r="42" stroke="gray" strokeWidth="6" fill="none" />
//                 <circle
//                   cx="48"
//                   cy="48"
//                   r="42"
//                   stroke="url(#blueGradient)"
//                   strokeWidth="6"
//                   strokeDasharray={2 * Math.PI * 42}
//                   strokeDashoffset={2 * Math.PI * 42 * (1 - skill.percent / 100)}
//                   strokeLinecap="round"
//                   fill="none"
//                 />
//                 <defs>
//                   <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
//                     <stop offset="0%" stopColor="#6366f1" /> {/* blue-500 */}
//                     <stop offset="100%" stopColor="#6366f1" /> {/* indigo-500 */}
//                   </linearGradient>
//                 </defs>
//               </svg>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="mt-0 text-blue-400">{skill.icon}</div>
//               </div>
//             </div>

//             {/* Icon */}
//             <span className="text-blue-400 font-bold">{skill.percent}%</span>

//             {/* Name */}
//             <p className="text-gray-300 mt-1">{skill.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
