import React from 'react';
import { Award, Users, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Current GPA: 3.82 in Informatics Engineering at ITENAS',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'West Java Language Ambassador and multiple organizational roles',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Multiple tech projects and PKM research grants recipient',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Target,
      title: 'Public Speaking',
      description: 'Professional MC, moderator, and debate champion',
      color: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about technology, leadership, and making meaningful contributions to society
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="glass bg-slate-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">My Philosophy</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I believe that campus is not just a place to study, but a field to shape character, forge integrity, 
                and build the courage to serve. Therefore, I accept every mandate, I seize every opportunity, 
                and I face every challenge with perseverance that knows no surrender.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Since sitting in elementary school until becoming an active student at Itenas, I have involved 
                myself in various areas of contribution: from being a sub-district chess champion, winning a 
                national gold medal in the Indonesian Student Olympiad League in mathematics, to becoming an 
                orator at the evening of the association's graduation and an international presenter in a 
                scientific forum.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe that outstanding students are not a title that is measured by the number of awards 
                alone, but by how much influence we bring to those around us. For me, leadership is the 
                willingness to put oneself at the forefront of service.
              </p>
            </div>

            <div className="glass bg-slate-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-4">Current Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                As a candidate for Itenas Outstanding Student 2025, I'm dedicated to proving that this campus 
                has produced a generation ready to answer the challenges of the times with reason, morals, and 
                real action. My focus remains on contributing meaningfully through technology, leadership, and 
                public service.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div 
                  key={index} 
                  className="glass bg-slate-800/30 p-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${highlight.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-2">
              3.82
            </div>
            <div className="text-gray-400 text-sm">Current GPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
              50+
            </div>
            <div className="text-gray-400 text-sm">Events & Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-2">
              10+
            </div>
            <div className="text-gray-400 text-sm">Organizations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mb-2">
              25+
            </div>
            <div className="text-gray-400 text-sm">Awards & Achievements</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;