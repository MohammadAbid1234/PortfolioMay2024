import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

// --- DATA SECTIONS (Same as before) ---
const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Computer Science',
    school: 'Kabul University',
    year: '2021 - 2025',
    description:
      'Graduated with a 3.8 GPA. Specialized in Software Engineering and Database Management. Capstone project focused on AI-driven inventory systems.',
  },
  {
    id: 2,
    degree: 'TTC Diploma',
    school: 'Tesol Training Center',
    year: '2022 - 2023',
    description:
      'Completed intensive teacher training program focusing on modern pedagogical methodologies and classroom management.',
  },
  {
    id: 3,
    degree: 'High School Diploma',
    school: 'Habibia High School',
    year: '2009 - 2020',
    description:
      "Focus on Mathematics and Physics. Awarded 'Student of the Year' in 2018 for excellence in science competitions.",
  },
];

const experienceData = [
  {
    id: 1,
    role: 'Full Stack Web Developer Intern',
    company: 'Elite Valley',
    year: 'Jan 2024 - Jan 2025',
    description:
      'Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with senior developers to implement new features and optimize performance.',
  },
  {
    id: 2,
    role: 'Database Teacher',
    company: 'AIT (Afghan Institute Technology)',
    year: 'Sep 2025 - Dec 2025',
    description:
      'Instructed students on relational database design, SQL programming, and database administration concepts. Developed course materials and practical exercises.',
  },
];

// --- SUB-COMPONENTS ---

// 1. The individual card showing the details
const TimelineCard = ({ data, index }) => {
  // Determine if the item should be on the left side on large screens
  const isLeft = index % 2 === 0;

  // Layout classes for the container holding the card
  // md:w-1/2 defines the 50% split.
  // We use padding (pr-8 or pl-8) to create space for the connector arm.
  const wrapperClasses = `
    relative flex w-full md:w-1/2 
    ${isLeft ? 'md:justify-end md:pr-10 ' : 'md:justify-start md:pl-10 md:ml-auto'}
    pl-12 md:pl-0 /* Mobile gets left padding, desktop resets it */
    mb-8
  `;

  //   const wrapperClasses = `
  //   relative flex w-full md:w-2/5
  //   ${isLeft ? 'md:justify-end md:pr-10 md:ml-30' : 'md:justify-start md:pl-10 md:ml-160'}
  //   pl-12 md:pl-0 /* Mobile gets left padding, desktop resets it */
  //   mb-8
  // `;
  // Styling for the card box itself
  const cardClasses = `
    relative w-full bg-[#111111] p-6 rounded-lg shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)]
    border-t-4 transition-all duration-300 group hover:-translate-y-1
    ${isLeft ? 'border-blue-500 md:text-right rounded-tr-none' : 'border-purple-500 md:text-left rounded-tl-none'}
  `;

  // The connector arm style (the horizontal line)
  const connectorClass = `hidden md:block absolute top-6 h-[3px] w-10 z-0
    ${
      isLeft
        ? '-right-10 bg-gradient-to-r from-blue-500 to-blue-900/50'
        : '-left-10 bg-gradient-to-l from-purple-500 to-purple-900/50'
    }`;

  return (
    <div className="relative w-full">
      {/* The Central Dot Connector */}
      {/* Positioned absolutely in the center of the parent container */}
      <div
        className={`absolute top-6 w-5 h-5 rounded-full z-20
                      shadow-[0_0_15px_rgba(59,130,246,0.5)] border-[3px] border-[#0a0a0a]
                      left-[11px] md:left-1/2 md:-translate-x-1/2
                      ${isLeft ? 'bg-blue-500' : 'bg-purple-500'}`}></div>

      {/* The Card Container */}
      <div className={wrapperClasses}>
        <div className={cardClasses}>
          {/* THE VISIBLE CONNECTOR ARM (Fills the space) */}
          <div className={connectorClass}></div>

          {/* Year Badge */}
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 border bg-[#1a1a1a]
             ${isLeft ? 'text-blue-400 border-blue-900/50' : 'text-purple-400 border-purple-900/50'}`}>
            {data.year}
          </span>

          {/* Title & Subtitle */}
          <h3 className=" text-xl text-left md:text-2xl font-bold text-gray-100 mb-1 group-hover:text-white">
            {data.degree || data.role}
          </h3>
          <h4 className={` text-lg text-left font-semibold mb-3 ${isLeft ? 'text-blue-400' : 'text-purple-400'}`}>
            {data.school || data.company}
          </h4>

          {/* Description */}
          <p className="md:align-left text-left text-gray-400 leading-relaxed text-sm md:text-base font-medium">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// 2. The Section Container holding the timeline
const TimelineSection = ({ title, icon, data, accentColor,id }) => {
  return (
    <section id={id}>
    <div  className="mb-24 relative">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <div
          className={`p-3 rounded-full bg-${accentColor}-900/20 border border-${accentColor}-900/50 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]`}>
          {icon}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-1 text-blue-400">{title}</h2>
      </div> 

      <div className="relative py-4">
        {/* The Central Spine Line */}
        <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-gray-800/80"></div>

        {/* Render Timeline Items */}
        <div className="flex flex-col w-full">
          {data.map((item, index) => (
            <TimelineCard key={item.id} data={item} index={index} />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

// --- MAIN COMPONENT ---
export default function Resume() {
  return (
    // Using max-w-7xl for a wider, fuller look on large screens
    <section
      className="text-white py-0 px-4 md:px-8 relative overflow-hidden min-h-screen text-blue-400 bg-black py-5 px-6 md:px-20     bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- SECTION 1: ACADEMIC QUALIFICATION --- */}
        <TimelineSection
          title="Education Path"
          icon={<SchoolIcon className="text-blue-400" sx={{ fontSize: 36 }} />}
          data={educationData}
          accentColor="blue"
          id="education"
        />

        {/* --- SECTION 2: Experiences --- */}
        {/* A separator */}
        {/* <div className="w-full max-w-3xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-20"></div> */}

        <TimelineSection
          id="workexperience"
          title="Work History"
          icon={<WorkHistoryIcon className="text-purple-400" sx={{ fontSize: 36 }} />}
          data={experienceData}
          accentColor="purple"
        />
      </div>
    </section>
  );
}
