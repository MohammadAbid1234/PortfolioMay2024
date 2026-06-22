import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Portfolio() {
  // State for filtering
  const [activeCategory, setActiveCategory] = useState('All');
  
  // State for Popup
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Categories
  const categories = ['All', 'Backend Development', 'Full-Stack Development'];

  // Portfolio data (Enhanced with details and gallery)
  const projects = [
    {
      id: 1,
      name: 'Etifaq Computer Store',
      category: 'Backend Development',
      image: 'dashboard.png', // The main thumbnail for the grid
      Tech: ['Vue js', 'MySql', 'Laravel'],
      // Detailed data for the popup
      details: {
        client: 'Etifaq Computer Store',
        duration: '3 Months',
        role: 'Backend Developer',
        description: 'A comprehensive inventory management system designed for a large-scale computer store. This system handles stock tracking, sales reporting, and automated reordering. Ideally suited for high-volume retail environments.',
        gallery: ['dashboard.png', 'purchase.png', 'sales.png','etifaqpuchasesdari.png' ,'etifaqprofitandloss.png' , 'etifaqcustomerreport.png'] // All images for this project
      }
    },
    {
      id: 2,
      name: 'SmartBook',
      category: 'Full-Stack Development',
      image: 'smartbookdashboard.png',
      Tech: ['React js', 'MySql', 'Laravel'],
      details: {
        client: 'Retailers',
        duration: '3 Months',
        role: 'Full Stack Developer',  
        description: 'A full-featured retail ERP system designed for computer stores but adaptable to various retail environments. Combines inventory management, sales processing, customer relations, and financial tracking with automated profit margin calculation and multi-currency support for complete business management.',
        gallery: ['smartbookdashboard.png', 'purchasemy.png', 'smartbookcreateunit.png','smartbookcurrency.png' ,'smartbookproducts.png' ,'ownerpickup.png']
      }
    },
    {
      id: 3,
      name: 'Inventory System',
      category: 'Full-Stack Development',
      image: 'adminlte.png',
      Tech: ['PHP', 'JavaScript', 'HTML', 'CSS'],
      details: {
        client: 'Mini Project',
        duration: '4 days',
        role: 'Backend Developer',
        description: 'A simple mini e-commerce application built using PHP and the AdminLTE template, designed to manage products, orders, and customers through a clean and user-friendly admin interface.',
        gallery: ['adminlte.png', 'adminltecreateorder.png']
      }
    },
    {
      id: 4,
      name: 'Dice Game',
      category: 'Mini Project',
      image: 'dicegame.PNG',
      Tech: ['JavaScript', 'HTML', 'CSS'],
      details: {
        client: 'TechWorld Inc',
        duration: '1 day',
        role: 'Frontend Developer',
        description: 'A two-player dice game built with HTML, CSS, and JavaScript, featuring random dice rolls, score tracking, turn-based gameplay, and a responsive user interface with a reset/new game option.',
        gallery: ['dicegame.PNG', 'dicegamesecond.PNG']
      }
    },
    {
      id: 5,
      name: 'Barger Mini Project',
      category: 'Mini Project',

      image: 'bargarone.png',
      Tech: ['HTML', 'CSS', 'JavaScript'],
      details: {
        client: 'Public',
        duration: '2 days',
        role: 'Frontend Developer',
        description: 'a basic burger restaurant website showcasing menu items, special offers, and payment with a responsive design for various devices.',
        gallery: ['bargarone.png', 'bargarsecond.png', 'bargarthird.png','bargarfourth.png']
      }
    },
    {
      id: 6,
      name: 'Basketball Scoreboard',
      category: 'Mini Project',
      image: 'basketballone.png',
      Tech: ['JavaScript', 'HTML', 'CSS'],
      details: {
        client: 'Public',
        duration: '1 day',
        role: 'Frontend Developer',
        description: ' A digital basketball scoreboard application that tracks team scores, featuring interactive buttons for score adjustments and a responsive design for various devices.',
        gallery: ['basketballone.png', 'basketballsecond.png', 'basketballphone.png']
      }
    },
  ];

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  // -- Handlers --

  const handleOpenPopup = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset carousel to first image
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.details.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.details.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="bg-black text-white py-16 px-6 md:px-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 min-h-screen">
      
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-400">Portfolio </h2>
        <h2 className="text-2xl  text-center mb-1 text-blue-500"> +6 Projects</h2>
      </div>

      {/* Filter Menu */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              activeCategory === cat ? 'bg-blue-400 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <button 
            key={project.id}
            onClick={() => handleOpenPopup(project)} 
            className="text-left w-full group focus:outline-none"
          >
            <div className="bg-black rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform border border-gray-800">
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
              </div>

              {/* Info */}
              <div className="flex justify-between items-center p-4">
                <span className="text-gray-200 font-medium truncate pr-2">{project.name}</span>
              </div>
              
              <div className="flex flex-wrap gap-1 px-4 pb-4">
                {project.Tech.map((t, index) => (
                  <Chip
                    key={index}
                    label={t}
                    size="small"
                    color="info"
                    variant="outlined"
                    sx={{ color: '#60a5fa', borderColor: '#60a5fa' }} 
                  />
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* POPUP MODAL (The new part) */}
      {selectedProject && (
        <Dialog
          open={Boolean(selectedProject)}
          onClose={handleClosePopup}
          maxWidth="xl"
          fullWidth
          PaperProps={{
            style: {
              backgroundColor: '#111827', // Dark gray/black background
              color: 'white',
              borderRadius: '16px',
              overflow: 'hidden'
            },
          }}
        >
          {/* Close Button */}
          <div className="absolute top-4 right-4 z-50">
             <IconButton onClick={handleClosePopup} sx={{ color: 'white', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' } }}>
               <CloseIcon />
             </IconButton>
          </div>

          <DialogContent className="p-0 m-0">
            <div className="flex flex-col lg:flex-row h-full">
              
              {/* LEFT: Image Carousel */}
              <div className="w-full lg:w-2/3 bg-black relative flex flex-col justify-center items-center p-4 lg:p-8 min-h-[400px] lg:min-h-[600px]">
                
                {/* Main Image */}
                <div className="relative w-full h-[300px] lg:h-[500px] flex items-center justify-center">
                   <img 
                     src={`${import.meta.env.BASE_URL}${selectedProject.details.gallery[currentImageIndex]}`} 
                     alt="Gallery" 
                     className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                   />
                   
                   {/* Arrows */}
                   <button onClick={(e) => {e.stopPropagation(); prevImage()}} className="absolute left-0 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all">
                     <ArrowBackIosNewIcon />
                   </button>
                   <button onClick={(e) => {e.stopPropagation(); nextImage()}} className="absolute right-0 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-all">
                     <ArrowForwardIosIcon />
                   </button>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 mt-6 overflow-x-auto w-full justify-center py-2">
                  {selectedProject.details.gallery.map((img, idx) => (
                    <img
                      key={idx}
                      src={`${import.meta.env.BASE_URL}${img}`} 
                      alt="thumb"
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-16 w-24 object-cover rounded-md cursor-pointer transition-all border-2 ${
                        currentImageIndex === idx ? 'border-blue-500 opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT: Project Details */}
              <div className="w-full lg:w-1/3 p-8 bg-gray-900 overflow-y-auto max-h-[80vh]">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.name}</h3>
                <p className="text-blue-400 font-medium mb-6">{selectedProject.category}</p>

                <div className="space-y-6">
                  {/* Overview */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">Project Overview</h4>
                    <p className="text-gray-400 leading-relaxed">
                      {selectedProject.details.description}
                    </p>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-500 uppercase">Client</h5>
                      <p className="text-white">{selectedProject.details.client}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-500 uppercase">Duration</h5>
                      <p className="text-white">{selectedProject.details.duration}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-500 uppercase">My Role</h5>
                      <p className="text-white">{selectedProject.details.role}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.Tech.map((tech, i) => (
                         <span key={i} className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-blue-300">
                           {tech}
                         </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
