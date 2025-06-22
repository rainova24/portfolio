import React from 'react';
import { GraduationCap, Award, Trophy, Star } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      institution: 'Bandung National Institute of Technology (ITENAS)',
      degree: 'S1 Informatics (IT)',
      period: '2023 – Present',
      gpa: '3.82',
      status: 'Current Student',
      color: 'from-blue-500 to-purple-600',
      achievements: [
        'LKTIM Pikir 2025 Waiting List Finalists',
        'Top 7 Essays from 50 Finalists at Beyondinspire 2025',
        'PKM-RSH National 2025 (results pending)',
        'Winner of 2024 PKM-RSH Prokimnas Grant',
        'Best Speaker & 1st Place Debate Competition at Kemahasiswaan Awards 2024',
        'Judge for 2024 Sekolah Kuntum Cemerlang Eduventure Debate Competition',
        'Rank 13 KDMI LLDIKTI IV 2024',
        'Top 8 IDN Times Debate 2024',
        '2nd Place Duta Bahasa Jawa Barat 2024',
        '3rd Place National Newsanchor Competition at Majalengka University 2023'
      ]
    },
    {
      institution: 'SMAN 2 Majalengka',
      degree: 'Science Major',
      period: '2020 - 2023',
      gpa: '96.03',
      status: 'Graduate',
      color: 'from-green-500 to-teal-600',
      achievements: [
        '2nd Place Siliwangi Wangsit Competition 2022 (Regency Level)',
        '2nd Place Siliwangi Wangsit Competition 2021 (Regency Level)',
        'National Gold Medal in Indonesian Student Olympic League - Mathematics',
        '1st Place Al-Qur\'an Recitation Competition',
        'Dramatic Class Ranking Improvement (20th to 2nd position)'
      ]
    },
    {
      institution: 'MTs Darul Falah Cijati Majalengka',
      degree: 'Islamic Junior High School',
      period: '2017 - 2020',
      gpa: 'Top Rank',
      status: 'Graduate',
      color: 'from-purple-500 to-pink-600',
      achievements: [
        'First rank consecutively for 5 semesters',
        'Deputy Chair of Student Council 2017-2018',
        'Active in OSIS, Scouts, and Marching Band'
      ]
    },
    {
      institution: 'SDN Babakanjawa 1',
      degree: 'Elementary School',
      period: '2012 – 2017',
      gpa: 'Highest Score',
      status: 'Graduate',
      color: 'from-yellow-500 to-orange-600',
      achievements: [
        'Highest National Examination score in school',
        'Top 3 rankings from grades 1-6',
        '2nd Place Chess Competition at District Level 2016'
      ]
    }
  ];

  const additionalEducation = [
    {
      name: 'Online Scholarship Competition (OSC)',
      type: 'Scholarship Program',
      period: '2022 – Present',
      description: 'Awardee of OSC Medcom.id scholarship program'
    },
    {
      name: 'MDTA Al-Furqan Muminun',
      type: 'Islamic Education',
      period: '2014 – 2017',
      description: 'Consistently ranked first in Islamic studies'
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A consistent track record of academic excellence and leadership development
          </p>
        </div>

        {/* Main Education Timeline */}
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 transform md:-translate-x-1/2"></div>

          {educationData.map((edu, index) => (
            <div 
              key={index}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glass bg-slate-800/30 p-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${edu.color} flex items-center justify-center`}>
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-400">{edu.period}</span>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm font-semibold text-yellow-400">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Institution Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                    <p className="text-cyan-400 font-medium mb-2">{edu.degree}</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Current Student' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {edu.achievements.slice(0, 5).map((achievement, aIndex) => (
                        <div key={aIndex} className="flex items-start gap-2 text-sm text-gray-300">
                          <Trophy className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                      {edu.achievements.length > 5 && (
                        <div className="text-xs text-gray-400 mt-2">
                          +{edu.achievements.length - 5} more achievements
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Additional Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalEducation.map((edu, index) => (
              <div key={index} className="glass bg-slate-800/30 p-6 rounded-xl hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{edu.name}</h4>
                    <p className="text-sm text-gray-400">{edu.period}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 mb-3 inline-block">
                  {edu.type}
                </span>
                <p className="text-gray-300 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Summary */}
        <div className="mt-16 glass bg-slate-800/30 p-8 rounded-xl text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Academic Excellence Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mb-1">
                15+
              </div>
              <div className="text-gray-400 text-sm">Years of Education</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-1">
                25+
              </div>
              <div className="text-gray-400 text-sm">Academic Awards</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-1">
                3.82
              </div>
              <div className="text-gray-400 text-sm">Current GPA</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-1">
                Top 10
              </div>
              <div className="text-gray-400 text-sm">Consistent Rankings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;