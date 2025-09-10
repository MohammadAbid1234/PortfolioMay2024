import { FaReact, FaDatabase, FaDocker, FaMobileAlt } from "react-icons/fa";
import { SiLaravel, SiTensorflow } from "react-icons/si"; // Use SiTensorflow instead of SiMachinelearning

export default function ServicesGrid() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive web interfaces using React, Tailwind, and modern JavaScript frameworks.",
      icon: <FaReact size={40} />,
    },
    {
      title: "Backend Development",
      description:
        "Creating robust backend systems, RESTful APIs, and server-side logic with Laravel and Node.js.",
      icon: <SiLaravel size={40} />,
    },
    {
      title: "Database Design & Management",
      description:
        "Designing efficient, scalable, and secure databases for web and mobile applications.",
      icon: <FaDatabase size={40} />,
    },
    {
      title: "Docker & Deployment",
      description:
        "Containerizing applications and managing deployment workflows using Docker for smooth production delivery.",
      icon: <FaDocker size={40} />,
    },
    {
      title: "Mobile App Prototyping",
      description:
        "Developing basic mobile applications using Flutter to complement web projects or MVPs.",
      icon: <FaMobileAlt size={40} />,
    },
    {
      title: "Data Analysis & Mining",
      description:
        "Applying basic machine learning, data mining, and analytical techniques to extract insights from data.",
      icon: <SiTensorflow size={40} />,
    },
  ];

  return (
    <section id="services" className="bg-black text-white flex flex-col justify-center px-8  bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div>
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-400">
          My Services
        </h2>
        <p className="text-gray-400 text-center">
          I offer a wide range of services to help you achieve your goals.
        </p>
      </div>

      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className=" bg-gray-800 p-3 md:p-8 rounded-xl shadow-md hover:shadow-blue-500/40 hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="text-blue-400 mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm ">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
