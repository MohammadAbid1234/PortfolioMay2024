import { useState } from 'react';

export default function Portfolio() {
  // Categories
  const categories = ['All', 'Backend Development', 'Full-Stack Development'];

  // Portfolio data
  const projects = [
    {
      id: 1,
      name: 'Etifaq Computer Store',
      category: 'Backend Development',
      image: '/dashboard.png',
    },
    {
      id: 2,
      name: 'Etifaq Computer Store',
      category: 'Backend Development',
      image: '/purchase.png',
    },
    {
      id: 3,
      name: 'Etifaq Computer Store',
      category: 'Backend Development',
      image: '/sales.png',
    },
    {
      id: 4,
      name: 'Second Computer Store',
      category: 'Full-Stack Development',
      image: '/purchasemy2.PNG',
    },
    {
      id: 5,
      name: 'Second Computer Store',
      category: 'Full-Stack Development',
      image: '/Unit.PNG',
    },
    {
      id: 6,
      name: 'Second Computer Store',
      category: 'Full-Stack Development',
      image: '/ownerpickup.png',
    },
  ];

  // State for filtering
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="bg-black text-white py-16 px-6 md:px-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-400">Portfolio </h2>
      </div>

      {/* Filter Menu */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`hover:bg-blue-600 bg-blue-500 px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === cat ? 'bg-blue-400 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img src={`${project.image}`} alt={project.name} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div className="flex justify-between items-center p-4">
              <span className="text-gray-200 font-medium">{project.name}</span>
              <span className="text-gray-400 text-sm">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
