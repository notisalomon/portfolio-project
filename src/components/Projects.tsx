import { ExternalLink, Github, Rocket } from 'lucide-react';

const Projects = () => {
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

        <div className="text-center">
          <p className="text-xl text-gray-400 font-medium">Folgt in kürze</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
