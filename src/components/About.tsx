import { MapPin, GraduationCap, Briefcase, BookOpen } from 'lucide-react';

const About = () => {
  const facts = [
    {
      icon: <MapPin className="text-cyan-400" size={24} />,
      label: 'Standort',
      value: 'Zürich, Schweiz',
    },
    {
      icon: <Briefcase className="text-cyan-400" size={24} />,
      label: 'Alter',
      value: '30 Jahre',
    },
    {
      icon: <GraduationCap className="text-cyan-400" size={24} />,
      label: 'Abschluss',
      value: 'HF Wirtschaftsinformatik (2021)',
    },
    {
      icon: <BookOpen className="text-cyan-400" size={24} />,
      label: 'Studium',
      value: 'Bachelor Informatik (FH)',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Über mich
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Als DevOps Engineer beim grössten Telekommunikations- und IT-Unternehmen der Schweiz verbinde ich
              technisches Know-how mit strategischem Denken.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Mit meinem Abschluss in Wirtschaftsinformatik (HF) und dem laufenden Bachelor-Studium in Informatik
              bringe ich eine solide akademische Grundlage und praktische Erfahrung mit modernen Entwicklungs- und
              CMS-Tools mit.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Meine Leidenschaft liegt in der Automatisierung, Cloud-Infrastruktur und der Entwicklung skalierbarer
              Web-Lösungen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    {fact.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{fact.label}</p>
                    <p className="text-white font-semibold">{fact.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
