import React from 'react';
import { ArrowDown, MapPin, Mail, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl text-cyan-400 font-medium">
                Hello, I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="neon-text">Rainova</span>
                <br />
                <span className="text-gray-300">Rahaniawan</span>
              </h1>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-sm font-medium glass">
                  Informatics Student
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-medium glass">
                  Public Speaker
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-sm font-medium glass">
                  Tech Enthusiast
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A dedicated Informatics student at ITENAS with a passion for technology, leadership, and public speaking. 
              Currently serving as West Java Language Ambassador and actively contributing to various organizations and projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Bandung, West Java</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href="mailto:rainova.rahaniawan@mhs.itenas.ac.id" 
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  rainova.rahaniawan@mhs.itenas.ac.id
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToAbout}
                className="btn-neon px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg"
              >
                Learn More About Me
              </button>
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-lg font-medium text-cyan-400 border border-cyan-400/30 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden animate-glow">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 glass flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">R</span>
                    </div>
                    <p className="text-gray-300 text-sm">Professional Photo</p>
                    <p className="text-gray-400 text-xs">Add your modern portrait here</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;