import React, { useState } from 'react';
import image1 from './images/img.jpg'
import image2 from './images/portimg.png'
import image3 from './images/img3.jpg'
import image4 from './images/img4.jpg'
import image5 from './images/img5.jpg'
import image6 from './images/img6.jpg'
import image7 from './images/img7.jpeg'


import { Github, Linkedin, Mail, ExternalLink, User, Code, Laptop, Server, Wrench, Brain, Gauge, Users } from 'lucide-react';

// Blog data
const blogs = [
  {
    title: "Building Scalable Web Applications",
    date: "March 15, 2024",
    preview: "Learn about the best practices for building scalable and maintainable web applications.",
    content: "In modern web development, scalability is crucial for long-term success...",
    readTime: "5 min read"
  },
  {
    title: "The Power of React Hooks",
    date: "March 10, 2024",
    preview: "Deep dive into React Hooks and how they revolutionize state management.",
    content: "React Hooks have transformed how we write React components...",
    readTime: "7 min read"
  },
  {
    title: "Mastering TypeScript",
    date: "March 5, 2024",
    preview: "Essential TypeScript features every developer should know.",
    content: "TypeScript has become the go-to choice for large-scale JavaScript applications...",
    readTime: "6 min read"
  }
];

// Skills data with categories, proficiency, and descriptions
const skills = {
  technical: {
    frontend: [
      { name: "React", proficiency: 80, description: "Component architecture, Hooks, Context API" },
      { name: "JavaScript", proficiency: 75, description: "ES6+, Async/Await, DOM manipulation" },
      { name: "TypeScript", proficiency: 70, description: "Type safety, Interfaces, Generics" },
      { name: "HTML5/CSS3", proficiency: 80, description: "Semantic markup, Flexbox, Grid" },
      { name: "Tailwind CSS", proficiency: 75, description: "Utility-first CSS, Responsive design" }
    ],
    backend: [
      { name: "Node.js", proficiency: 75, description: "Express.js, RESTful APIs, Middleware" },
      { name: "MongoDB", proficiency: 70, description: "Schema design, Aggregation, Indexing" },
      { name: "MySQL", proficiency: 85, description: "Query optimization, Relationships" },
      { name: "Express.js", proficiency: 75, description: "Routing, Authentication, API design" }
    ],
    tools: [
      { name: "Git", proficiency: 90, description: "Version control, Branching strategies" },
      { name: "VS Code", proficiency: 95, description: "Extensions, Debugging, Customization" },
    ]
  },
  soft: [
    { name: "Problem Solving", icon: Brain },
    { name: "Team Collaboration", icon: Users },
    { name: "Performance Optimization", icon: Gauge }
  ]
};

function App() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Skill progress bar component
  const SkillBar = ({ name, proficiency, description }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm text-gray-400">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-400 mt-1">{description}</p>
    </div>
  );

  // Skill category section component
  const SkillCategory = ({ title, skills, icon: Icon }) => (
    <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
      <div className="flex items-center gap-2 mb-6">
        <Icon className="w-6 h-6 text-blue-400" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            proficiency={skill.proficiency}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );

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
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#blogs" className="hover:text-blue-400 transition-colors">Blogs</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
      <section className="pt-32 pb-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    {/* Left Text Content */}
    <div className="flex-1 space-y-6">
      <h2 className="text-4xl md:text-6xl font-bold leading-tight">
        Full Stack Developer &amp;
        <span className="block text-blue-400">Software Enthusiast</span>
      </h2>
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
        Passionate about building exceptional web applications and solving complex problems through elegant solutions.
      </p>
      <div className="flex gap-4">
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          className="px-6 py-3 border border-gray-600 hover:border-blue-400 rounded-lg font-semibold transition-all hover:text-blue-400"
        >
          View Projects
        </a>
      </div>
    </div>

    {/* Right Image Container with Shadow and Glow */}
    <div className="flex-1 relative group">
      {/* Shadow on the outer container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/40">
        {/* Glow Layer (Clipped by overflow-hidden) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>

        {/* The Image itself */}
        <img
          src={image6}
          alt="Developer workspace"
          className="relative w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
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
            <div className="relative flex justify-center items-center group">
            <img 
            src={image1}
            alt="Coding setup"
            className="max-w-[350px] w-full h-auto rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-blue-500/40"
             />
             </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Laptop className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <SkillCategory
              title="Frontend Development"
              skills={skills.technical.frontend}
              icon={Laptop}
            />
            <SkillCategory
              title="Backend Development"
              skills={skills.technical.backend}
              icon={Server}
            />
            <SkillCategory
              title="Development Tools"
              skills={skills.technical.tools}
              icon={Wrench}
            />
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Soft Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.soft.map((skill) => (
                <div
                  key={skill.name}
                  className="p-6 bg-gray-800 rounded-xl shadow-md text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <skill.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                </div>
              ))}
            </div>
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

          {/* Main Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Food Delivery Website"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Food Delivery Website</h3>
                  <p className="text-gray-300 mb-4">A MERN-based food delivery platform with user authentication, dynamic cart, and an admin panel with simulated Stripe payments.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">MongoDB</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Stripe</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/Patilvinayak18/Food-Delivery-App" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <img 
                  src="https://www.fivestars.blog/assets/posts/dijkstra-algorithm-swift/facebook.png"
                  alt="Path Finding Algo Visualizer"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Path Finding Algo Visualizer</h3>
                  <p className="text-gray-300 mb-4">An interactive tool to visualize how algorithms like Dijkstra’s, A*, BFS, and DFS find the shortest path in a grid.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">React</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Socket.io</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Express</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">PostgreSQL</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/yourusername/task-manager" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <img 
                  src={image2}
                  alt="PortFolio Website"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">PortFolio Website</h3>
                  <p className="text-gray-300 mb-4">Modern chat interface with AI integration, voice commands, and multi-language support.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Next.js</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">OpenAI API</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">WebSocket</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">TailwindCSS</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/yourusername/ai-chat" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">Practice Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Practice Project 1 */}
              <div className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Live Code Editor</h3>
                  <p className="text-gray-300 mb-4">A real-time code editor supporting HTML, CSS, and JavaScript with local storage for code persistence.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">React</span>
                    </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/Patilvinayak18/code-pen" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Practice Project 2 */}
              <div className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Drowsiness Detection System</h3>
                  <p className="text-gray-300 mb-4">A fatigue detection system using facial recognition and eye-tracking with OpenCV and Dlib for real-time performance.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Python</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">OpenCV</span>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/Patilvinayak18/DrawSiness-Detector-using-OpenCV" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Blog</h2>
          </div>
          
          {selectedBlog ? (
            <div className="max-w-3xl mx-auto">
              <button
                onClick={() => setSelectedBlog(null)}
                className="mb-6 text-blue-400 hover:text-blue-300 flex items-center gap-2"
              >
                ← Back to blogs
              </button>
              <article className="bg-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-2">{selectedBlog.title}</h3>
                <div className="flex items-center text-gray-400 mb-4">
                  <span>{selectedBlog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedBlog.readTime}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{selectedBlog.content}</p>
              </article>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.title}
                  className="bg-gray-800 rounded-xl p-6 cursor-pointer hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-300 mb-4">{blog.preview}</p>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
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
                <a href="mailto:vp464068@gmail.com" 
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  vp464068@gmail.com
                </a>
                <a href="https://github.com/Patilvinayak18" 
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/vinayak-patil-32958b229/" 
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