import React, { useEffect, useRef, useState } from 'react';
import { Code, Mic, Users, Award, Database, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming & Development',
      color: 'from-blue-400 to-purple-600',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'PHP', level: 80 },
        { name: 'Laravel', level: 78 },
        { name: 'Spring Boot', level: 75 }
      ]
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      color: 'from-cyan-400 to-teal-600',
      skills: [
        { name: 'Web Programming', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 82 },
        { name: 'REST API', level: 80 }
      ]
    },
    {
      icon: Database,
      title: 'Data & Systems',
      color: 'from-green-400 to-blue-600',
      skills: [
        { name: 'Data Management', level: 85 },
        { name: 'HRIS', level: 75 },
        { name: 'Artificial Intelligence', level: 70 },
        { name: 'Prompt Engineering', level: 80 }
      ]
    },
    {
      icon: Mic,
      title: 'Communication & Leadership',
      color: 'from-purple-400 to-pink-600',
      skills: [
        { name: 'Public Speaking', level: 95 },
        { name: 'Master of Ceremony', level: 92 },
        { name: 'Moderator', level: 90 },
        { name: 'Debate', level: 88 },
        { name: 'Leadership', level: 90 }
      ]
    },
    {
      icon: Users,
      title: 'Professional Skills',
      color: 'from-yellow-400 to-red-600',
      skills: [
        { name: 'Microsoft Office', level: 90 },
        { name: 'Policy Management', level: 85 },
        { name: 'Ethics & Professionalism', level: 95 },
        { name: 'Detail Oriented', level: 88 }
      ]
    },
    {
      icon: Award,
      title: 'Specialized Skills',
      color: 'from-indigo-400 to-purple-600',
      skills: [
        { name: 'Generate Ideas', level: 90 },
        { name: 'Arithmetic', level: 85 },
        { name: 'Language', level: 88 },
        { name: 'Chess', level: 75 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Competencies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive skill set spanning technology, leadership, and communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={categoryIndex}
                className="glass bg-slate-800/30 p-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className={`skill-bar h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out ${
                            isVisible ? 'animate' : ''
                          }`}
                          style={{ '--skill-width': `${skill.level}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Team Leadership', 'Project Management', 'Creative Problem Solving', 
              'Cross-cultural Communication', 'Event Organization', 'Social Media Management',
              'Research & Development', 'Academic Writing', 'Presentation Skills', 'Networking'
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 glass bg-slate-800/30 text-gray-300 rounded-full text-sm hover:bg-slate-800/50 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;