import { ChevronDown, Code2, Blocks, Cpu, Terminal, Globe, Wrench } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Webseiten', 'Onlineshops', 'Automatisierungen', 'Cloud-Lösungen'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(34, 211, 238, 0.15)';
      ctx.font = '14px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '1' : '0';
        const x = i * 20;
        const y = drops[i] * 20;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentIndex, texts]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 opacity-15 hover:opacity-25 transition-opacity duration-300 animate-float">
          <Code2 size={48} className="text-cyan-400" strokeWidth={1.5} />
        </div>
        <div className="absolute top-20 right-20 opacity-12 hover:opacity-22 transition-opacity duration-300 animate-float-delayed">
          <Blocks size={56} className="text-blue-400" strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-32 left-20 opacity-15 hover:opacity-25 transition-opacity duration-300 animate-float-delayed-2">
          <Cpu size={52} className="text-cyan-400" strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-40 right-32 opacity-12 hover:opacity-22 transition-opacity duration-300 animate-float">
          <Terminal size={48} className="text-blue-400" strokeWidth={1.5} />
        </div>
        <div className="absolute top-1/3 right-10 opacity-15 hover:opacity-25 transition-opacity duration-300 animate-float-delayed">
          <Globe size={52} className="text-cyan-400" strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-20 left-1/3 opacity-12 hover:opacity-22 transition-opacity duration-300 animate-float-delayed-2">
          <Wrench size={48} className="text-blue-400" strokeWidth={1.5} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Hallo, ich bin Labi
          </span>
        </h1>

        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-bold text-white mb-2">
            & ich entwickle für Sie:
          </p>
          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent min-h-[3rem] flex items-center justify-center">
            {displayedText}
            <span className="ml-1 text-cyan-400 animate-blink">|</span>
          </p>
        </div>

        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          DevOps Engineer aus Zürich mit Passion für moderne Web-Technologien und Cloud-Infrastruktur
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Projekte ansehen
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors animate-bounce z-10"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
