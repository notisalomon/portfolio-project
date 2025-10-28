import { Code2, Blocks, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="text-cyan-400" size={32} />,
      title: 'Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js', 'MS-SQL'],
    },
    {
      icon: <Blocks className="text-blue-400" size={32} />,
      title: 'CMS Tools',
      skills: ['WordPress', 'Webflow', 'Shopify'],
    },
    {
      icon: <Database className="text-cyan-400" size={32} />,
      title: 'DevOps',
      skills: ['CI/CD', 'Docker', 'Kubernetes', 'Cloud Infrastructure'],
    },
    {
      icon: <Wrench className="text-blue-400" size={32} />,
      title: 'Tools & Methoden',
      skills: ['Git', 'Agile', 'Automation', 'Monitoring'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Technologien
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="mb-6 p-4 bg-cyan-500/10 rounded-lg w-fit group-hover:bg-cyan-500/20 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
