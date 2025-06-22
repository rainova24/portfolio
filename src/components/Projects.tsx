import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AngklungineX',
      period: '2025 – Present',
      description: 'Advanced cultural instrument digitization project combining traditional Indonesian angklung with modern technology.',
      technologies: ['IoT', 'Mobile Development', 'Cultural Technology'],
      status: 'In Development',
      category: 'Cultural Tech',
      color: 'from-purple-500 to-pink-600',
      highlights: ['Traditional meets Digital', 'Cultural Preservation', 'Innovation'],
      detailLink: 'https://www.instagram.com/reel/DItUXEtJkpO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' // Tautan AngklungineX
    },
    {
      title: 'Warung Nene Rizky Electronic Transaction System',
      period: '2025',
      description: 'Secure electronic transaction website with guaranteed security features for local business digitization.',
      technologies: ['Web Security', 'Payment Gateway', 'Database Management'],
      status: 'Completed',
      category: 'E-Commerce',
      color: 'from-green-500 to-teal-600',
      highlights: ['Multi-layered Security', 'Local Business Support', 'Payment Integration'],
      detailLink: '#' // Ganti dengan tautan yang relevan jika ada
    },
    {
      title: 'Book Recommendation Chatbot',
      period: '2025',
      description: 'AI-powered chatbot using Natural Language Processing to provide personalized book recommendations.',
      technologies: ['NLP', 'Machine Learning', 'Python', 'AI'],
      status: 'Completed',
      category: 'AI/ML',
      color: 'from-blue-500 to-purple-600',
      highlights: ['NLP Implementation', 'Personalization', 'User Experience'],
      detailLink: 'https://github.com/RakhaDwiPradifa/Chatbot-Recomendations-Book-NLP.git' // Tautan Book Recommendation Chatbot
    },
    {
      title: 'EcoGuard Website',
      period: '2025',
      description: 'Environmental monitoring platform built with React/Vite and Firebase, featuring multi-layered security.',
      technologies: ['React', 'Vite', 'Firebase', 'Environmental Tech'],
      status: 'Completed',
      category: 'Environmental',
      color: 'from-green-400 to-blue-500',
      highlights: ['Environmental Focus', 'Real-time Monitoring', 'Cloud Integration'],
      detailLink: 'https://ecoguard-eight.vercel.app/' // Tautan EcoGuard
    },
    {
      title: 'Itenas Youth Innovation Platform',
      period: '2025',
      description: 'Comprehensive platform using Spring Boot, React, and REST API for youth innovation initiatives.',
      technologies: ['Spring Boot', 'React', 'REST API', 'Java'],
      status: 'Completed',
      category: 'Platform',
      color: 'from-cyan-500 to-blue-600',
      highlights: ['Full-stack Development', 'API Architecture', 'Youth Empowerment'],
      detailLink: 'https://github.com/rainova24/iyip-platform.git' // Tautan Itenas Youth Innovation Platform
    },
    {
      title: 'KainVision: Fabric Classification System',
      period: '2025',
      description: 'Computer vision system for fabric type classification based on image texture analysis.',
      technologies: ['Computer Vision', 'Image Processing', 'Machine Learning'],
      status: 'Completed',
      category: 'Computer Vision',
      color: 'from-orange-500 to-red-600',
      highlights: ['Texture Analysis', 'Classification AI', 'Industrial Application'],
      detailLink: 'https://github.com/hasbyas1/KainVision.git' // Tautan KainVision
    },
    {
      title: 'IoT Water Level Monitoring',
      period: '2024',
      description: 'Real-time water level monitoring system using IoT sensors with smartphone integration.',
      technologies: ['IoT', 'Sensors', 'Mobile App', 'Real-time Systems'],
      status: 'Completed',
      category: 'IoT',
      color: 'from-blue-400 to-indigo-600',
      highlights: ['IoT Integration', 'Real-time Data', 'Mobile Compatibility'],
      detailLink: 'https://l.instagram.com/?u=https%3A%2F%2Flib.itenas.ac.id%2Femag%2FIWillCatalog2024%2Findex.html%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAad4Ng9_DfI4H0sn8j1710JC5TDaBzc_qdEfWcnJ1yC-hMRwpszqx3-cGZZigg_aem_0CPOT1Osw5pVZdzKCwFnRg&e=AT0NLNWEwsJI0UwmKItgS6sOlK9Hq0mtQWa4YRjI3ee9QzgK2geKd9kbQ8e_RbTPewQmyrZsPnERjnp1NLzCO1IzUCVzmr8QzNF2w' // Tautan IoT Water Level Monitoring
    },
    {
      title: 'BankSampah CRUD Website',
      period: '2024',
      description: 'Waste bank management system with full CRUD functionality built using Laravel framework.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Web Development'],
      status: 'Completed',
      category: 'Web Application',
      color: 'from-yellow-500 to-orange-600',
      highlights: ['Waste Management', 'CRUD Operations', 'Community Impact'],
      detailLink: '#' // Ganti dengan tautan yang relevan jika ada
    },
    {
      title: 'Facial Recognition AI System',
      period: '2024',
      description: 'Artificial Intelligence system for facial recognition with comprehensive train and test functionalities.',
      technologies: ['AI', 'Computer Vision', 'Python', 'Machine Learning'],
      status: 'Completed',
      category: 'AI/ML',
      color: 'from-indigo-500 to-purple-600',
      highlights: ['Facial Recognition', 'AI Training', 'Security Application'],
      detailLink: '#' // Ganti dengan tautan yang relevan jika ada
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-300';
      case 'In Development': return 'bg-yellow-500/20 text-yellow-300';
      case 'Planning': return 'bg-blue-500/20 text-blue-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Cultural Tech': 'bg-purple-500/20 text-purple-300',
      'E-Commerce': 'bg-green-500/20 text-green-300',
      'AI/ML': 'bg-blue-500/20 text-blue-300',
      'Environmental': 'bg-emerald-500/20 text-emerald-300',
      'Platform': 'bg-cyan-500/20 text-cyan-300',
      'Computer Vision': 'bg-orange-500/20 text-orange-300',
      'IoT': 'bg-indigo-500/20 text-indigo-300',
      'Web Application': 'bg-yellow-500/20 text-yellow-300'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-300';
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Innovations</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative projects spanning AI, web development, IoT, and cultural technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass bg-slate-800/30 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-xl font-bold text-white">
                    {project.title[0]}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {project.period}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Status and Category */}
              <div className="flex gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-400">Technologies</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                <div className="space-y-1">
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-3">
                {/* Menggunakan tautan detailLink dari objek proyek */}
                <a
                  href={project.detailLink}
                  target="_blank" // Membuka di tab baru
                  rel="noopener noreferrer" // Praktik keamanan yang baik
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </a>
                <button className="px-4 py-2 bg-slate-700/50 text-gray-400 rounded-lg hover:bg-slate-700/70 hover:text-white transition-all duration-300">
                  <Github className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2">
              9+
            </div>
            <div className="text-gray-400 text-sm">Completed Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-2">
              8
            </div>
            <div className="text-gray-400 text-sm">Technology Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
              20+
            </div>
            <div className="text-gray-400 text-sm">Technologies Used</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mb-2">
              2+
            </div>
            <div className="text-gray-400 text-sm">Years of Development</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center glass bg-slate-800/30 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4">
            Interested in Collaboration?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, innovative ideas, and opportunities to create
            impactful technology solutions. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-neon px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg"
            >
              Start a Conversation
            </a>
            <a
              href="https://github.com/rainova24"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-medium text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;