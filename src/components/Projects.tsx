import { ExternalLink, Github, Rocket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Plattform',
      description: 'Vollständig responsive Online-Shop mit Shopify, inklusive Payment-Integration und Inventory-Management.',
      technologies: ['Shopify', 'JavaScript', 'CSS'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Corporate Website',
      description: 'Moderne Unternehmenswebsite mit Webflow, optimiert für SEO und Performance.',
      technologies: ['Webflow', 'HTML', 'CSS'],
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Web Application',
      description: 'Single Page Application mit Angular und Node.js Backend für Datenmanagement.',
      technologies: ['Angular', 'Node.js', 'MS-SQL'],
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'CI/CD Pipeline',
      description: 'Automatisierte Deployment-Pipeline für Cloud-basierte Microservices-Architektur.',
      technologies: ['Docker', 'Kubernetes', 'CI/CD'],
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Ausgewählte Projekte
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Rocket className="text-cyan-400" size={20} />
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 text-sm font-medium">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm font-medium">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
