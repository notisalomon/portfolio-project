import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      icon: <Briefcase className="text-cyan-400" size={24} />,
      type: 'work',
      title: 'DevOps Engineer',
      organization: 'Grösstes Telekom- & IT-Unternehmen der Schweiz',
      period: 'Aktuell',
      description: 'Verantwortlich für CI/CD-Pipelines, Cloud-Infrastruktur und Automatisierung von Deployment-Prozessen.',
    },
    {
      icon: <GraduationCap className="text-blue-400" size={24} />,
      type: 'education',
      title: 'Bachelor Informatik (FH)',
      organization: 'Fachhochschule Zürich',
      period: 'In Bearbeitung',
      description: 'Vertiefung in Software Engineering, Cloud Computing und moderne Entwicklungsmethoden.',
    },
    {
      icon: <GraduationCap className="text-cyan-400" size={24} />,
      type: 'education',
      title: 'HF Wirtschaftsinformatik',
      organization: 'Höhere Fachschule',
      period: '2021',
      description: 'Abschluss mit Fokus auf Business Analysis, Software Development und IT-Management.',
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Werdegang
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {index !== timeline.length - 1 && (
                <div className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
              )}

              <div className="absolute left-0 top-0 p-3 bg-slate-900 border-2 border-cyan-500/50 rounded-full">
                {item.icon}
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 ml-8 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:translate-x-2">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                    <Calendar size={14} className="text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-medium">{item.period}</span>
                  </div>
                </div>
                <p className="text-gray-400 font-medium mb-2">{item.organization}</p>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
