import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Briefcase, GraduationCap, Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header/Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 px-6 py-4 border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Vinayak Patil
          </h1>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Full Stack Developer &
              <span className="block text-blue-400">Software Engineer</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
              Passionate about building exceptional web applications and solving complex problems through elegant solutions.
            </p>
            <div className="flex gap-4">
              <a href="#contact" 
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Get in Touch
              </a>
              <a href="#projects"
                className="px-6 py-3 border border-gray-600 hover:border-blue-400 rounded-lg font-semibold transition-all hover:text-blue-400">
                View Projects
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?auto=format&fit=crop&w=500"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <User className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies.
                My journey in software development has equipped me with strong problem-solving skills
                and a keen eye for creating user-friendly applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <p className="text-gray-300 text-sm">React, TypeScript, Tailwind CSS</p>
                </div>
                <div className="p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <p className="text-gray-300 text-sm">Node.js, Express, MongoDB</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500"
                alt="Coding setup"
                className="rounded-lg shadow-xl group-hover:shadow-blue-500/20 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            <div className="p-6 bg-gray-800 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Software Engineer</h3>
                  <p className="text-gray-400">Company Name</p>
                </div>
                <span className="text-sm text-gray-400">2022 - Present</span>
              </div>
              <p className="text-gray-300">
                Led development of multiple web applications using React and Node.js.
                Implemented responsive designs and optimized application performance.
              </p>
            </div>
            {/* Add more experience items as needed */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500"
                alt="Project preview"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project Name</h3>
                <p className="text-gray-300 mb-4">Description of the project and technologies used.</p>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Mail className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                I'm always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <div className="flex flex-col gap-4">
                <a href="mailto:your.email@example.com" 
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  your.email@example.com
                </a>
                <a href="https://github.com/yourusername" 
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" 
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Vinayak Patil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;