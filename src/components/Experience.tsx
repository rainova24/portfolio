import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      organization: 'BE-KM Itenas',
      position: 'Menteri Penelitian dan Pengembangan',
      period: 'May 2025 – Present',
      location: 'Bandung, Indonesia',
      type: 'Government',
      description: 'Leading research and development initiatives. TA Mastery program development (Coming Soon).',
      highlights: ['Research Leadership', 'Program Development', 'Academic Innovation'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      organization: 'Balai Bahasa Jawa Barat',
      position: 'Duta Bahasa Jawa Barat',
      period: 'May 2024 – Present',
      location: 'West Java, Indonesia',
      type: 'Cultural Ambassador',
      description: 'Serving as West Java Language Ambassador, promoting Indonesian language and culture.',
      highlights: [
        'Moderator at Online Briefing Dubas Jabar 2025',
        'Director 2 Short and Long Content Creation',
        'Best Scientific Paper Writer in West Java Ambassador 2024',
        'MC at various cultural events'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      organization: 'Itenas',
      position: 'Student & Active Contributor',
      period: '2023 – Present',
      location: 'Bandung, Indonesia',
      type: 'Academic',
      description: 'Active student pursuing Informatics degree while contributing to various campus activities.',
      highlights: [
        'Master of Ceremony for multiple events (Job Fair, Graduation, Dies Natalis)',
        'Quran Recitation at Senate Dies Natalis Session',
        'International Conference on Green Technology and Design (ICGTD) 2024 MC',
        'Participated in French and RI Joint Working Group in Surabaya'
      ],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      organization: 'Marketing Squad Itenas',
      position: 'Promotion Team Member',
      period: 'November 2023 – Present',
      location: 'Bandung, Indonesia',
      type: 'Marketing',
      description: 'Promoting Itenas through various educational fairs and socialization programs.',
      highlights: [
        'Participated in 15+ Educational Fairs',
        'Campus promotion at multiple high schools',
        'Alumni Association International Campus Exhibition',
        'National Education Day at Ganesha ITB participation'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      organization: 'ITENAS Student English Forum (ISEF)',
      position: 'Vice President (2025) / Staff Internal Affairs (2023)',
      period: 'November 2023 – Present',
      location: 'Bandung, Indonesia',
      type: 'Student Organization',
      description: 'Leading English development programs and international communication initiatives.',
      highlights: ['English Hour Committee', 'Leadership Development', 'International Programs'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      organization: 'Himpunan Mahasiswa Informatika ITENAS (HMIF)',
      position: 'Active Member & Executive Board',
      period: 'September 2023 – Present',
      location: 'Bandung, Indonesia',
      type: 'Student Organization',
      description: 'Contributing to informatics student community through various roles and events.',
      highlights: [
        'IDTC 2025 Event Division',
        'MC at 2024 Interactive Informatics Seminar',
        'Executive Board in Educational and PSDM Division',
        'Opening Orator at 2023 Graduation Ceremony'
      ],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Government': return 'bg-blue-500/20 text-blue-300';
      case 'Cultural Ambassador': return 'bg-green-500/20 text-green-300';
      case 'Academic': return 'bg-cyan-500/20 text-cyan-300';
      case 'Marketing': return 'bg-orange-500/20 text-orange-300';
      case 'Student Organization': return 'bg-purple-500/20 text-purple-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey of leadership, innovation, and meaningful contributions across various organizations
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass bg-slate-800/30 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="grid md:grid-cols-4 gap-6">
                {/* Organization & Type */}
                <div className="md:col-span-1">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center mb-4`}>
                    <span className="text-2xl font-bold text-white">
                      {exp.organization.split(' ')[0][0]}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                    {exp.type}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                    <p className="text-lg text-cyan-400 font-medium mb-2">{exp.organization}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">Key Highlights:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experience Note */}
        <div className="mt-16 text-center glass bg-slate-800/30 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4">
            Extensive Leadership Background
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Beyond these primary roles, I have extensive experience in various capacities including:
            Student Council leadership at SMAN 2 Majalengka, Scouts coordination, English Club debate activities,
            Islamic organizations, and numerous committee roles spanning from elementary through university levels.
            Each experience has contributed to my comprehensive understanding of leadership, teamwork, and community service.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">Complete experience details available upon request</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;