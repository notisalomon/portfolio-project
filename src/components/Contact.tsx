import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(/*'https://formspree.io/f/xkgnazlv'*/'https://ep-aged-darkness-aeatqz41.apirest.c-2.us-east-2.aws.neon.tech/neondb/rest/v1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Neue Nachricht von ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Kontakt
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Lass uns zusammenarbeiten</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Ich bin immer offen für neue Projekte und unterstütze auch Vereine bei ihren Webauftritten. Ob Sie eine Frage haben oder Ihre Idee mit mir teilen wollen. Ich antworte am selben Tag auf Ihre Anfrage. 
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 transition-all duration-300">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">sulejmani.labinot@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 transition-all duration-300">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Standort</p>
                  <p className="text-white font-medium">Zürich, Schweiz</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/labinot-sulejmani/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 group"
              >
                <Linkedin className="text-cyan-400 group-hover:scale-110 transition-transform" size={24} />
              </a>
              <a
                href="https://github.com/notisalomon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 group"
              >
                <Github className="text-cyan-400 group-hover:scale-110 transition-transform" size={24} />
              </a>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="ihre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Ihre Nachricht..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-center text-green-400 font-medium">
                  Nachricht erfolgreich gesendet!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-center text-red-400 font-medium">
                  Fehler beim Senden. Bitte versuchen Sie es erneut.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cyan-500/20 text-center">
          <p className="text-gray-400">
            © 2025 Labi. Designed & built with passion in Zürich.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
