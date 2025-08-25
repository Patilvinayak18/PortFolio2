import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import image1 from './images/ghibli.png';
import image2 from './images/portimg.png';
import image3 from './images/img3.jpg';
import image4 from './images/img4.jpg';
import image5 from './images/img5.jpg';
import image6 from './images/img61.png';
import image7 from './images/img7.jpeg';

import { Github, Linkedin, Mail,Twitter, ExternalLink, User, Code, Laptop, Server, Wrench, Brain, Gauge, Users } from 'lucide-react';

// Blog data
const blogs = [
  {
    title: "Interview Notebook #1: Understanding OOP in Simple Words",
    date: "August 26, 2025",
    preview: "Breaking down Object-Oriented Programming into simple, interview-ready concepts.",
    content: `
      📝 What is OOP?
      Object-Oriented Programming (OOP) is a way of writing code by organizing it into objects, just like how we think of things in the real world. 
      Instead of writing code separately for everything, we create objects (like Car, Student, BankAccount) which hold both data and behavior.

      ---

      🔑 The 4 Pillars of OOP:

      1. Encapsulation  
      - Binding data and methods together into one unit.  
      - Example: A Car object has speed (data) and drive() (method).  
      - Protects data from outside interference.  

      2. Abstraction  
      - Showing only essential details, hiding internal complexity.  
      - Example: When driving, you just use steering and pedals—you don’t care how the engine works internally.  

      3. Inheritance  
      - Reusing features of an existing class into a new one.  
      - Example: SportsCar inherits from Car but can also add features like turboBoost().  
      - Promotes reusability and reduces code duplication.  

      4. Polymorphism  
      - One function, many forms.  
      - Example: brake() works differently in a Bike, Car, and Truck.  
      - Allows flexibility and cleaner code.  

      ---

      🤔 Why Do Interviewers Ask About OOP?  
      - Tests whether you think in terms of design, not just raw coding.  
      - Checks if you can build maintainable and reusable programs.  
      - Ensures you can model real-world problems effectively.  

      ---

      🧩 Quick Interview Questions:  

      Q1: What’s the difference between Abstraction and Encapsulation?  
      - Abstraction → Hides implementation, shows only essentials.  
      - Encapsulation → Wraps data & methods together, protects data.  

      Q2: Can you give a real-life example of Polymorphism?  
      - A “speak()” method: a Dog barks, a Cat meows, a Human talks → same method, different behavior.  

      Q3: Why is Inheritance useful?  
      - It saves time and effort by reusing existing code instead of rewriting it.  

      ---

      🚀 Final Note  
      Understanding these four OOP pillars (Encapsulation, Abstraction, Inheritance, Polymorphism) will help you answer at least 80% of OOP-related interview questions confidently.  

      This was the **first entry** in my Interview Notebook series.  
      Next up → “SQL Basics Every Interviewee Should Know” 🔜
    `,
    readTime: "8 min read",
  },
];


// Skills data
const skills = {
  technical: {
    frontend: [
      { name: "React", proficiency: 80, description: "Component architecture, Hooks, Context API" },
      { name: "JavaScript", proficiency: 75, description: "ES6+, Async/Await, DOM manipulation" },
      { name: "TypeScript", proficiency: 60, description: "Type safety, Interfaces, Generics" },
      { name: "HTML5/CSS3", proficiency: 80, description: "Semantic markup, Flexbox, Grid" },
      { name: "Tailwind CSS", proficiency: 75, description: "Utility-first CSS, Responsive design" },
    ],
    backend: [
      { name: "Node.js", proficiency: 75, description: "Express.js, RESTful APIs, Middleware" },
      { name: "MongoDB", proficiency: 70, description: "Schema design, Aggregation, Indexing" },
      { name: "MySQL", proficiency: 85, description: "Query optimization, Relationships" },
      { name: "Express.js", proficiency: 75, description: "Routing, Authentication, API design" },
    ],
    tools: [
      { name: "Git", proficiency: 80, description: "Version control, Branching strategies" },
      { name: "VS Code", proficiency: 90, description: "Extensions, Debugging, Customization" },
    ],
  },
  soft: [
    { name: "Problem Solving", icon: Brain },
    { name: "Team Collaboration", icon: Users },
    { name: "Performance Optimization", icon: Gauge },
  ],
};

// Main App
function App() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Skill Bar with animation
  const SkillBar = ({ name, proficiency, description }) => (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm text-gray-400">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
      <p className="text-xs text-gray-400 mt-1">{description}</p>
    </motion.div>
  );

  // Skill Category card
  const SkillCategory = ({ title, skills, icon: Icon }) => (
    <motion.div
      className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Icon className="w-6 h-6 text-blue-400" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white font-sans">
      {/* Navbar with glassmorphism */}
      <motion.nav
        className="fixed w-full bg-black/20 backdrop-blur-md z-50 px-6 py-4 border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition"
          >
            Vinayak Patil
          </motion.h1>
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Blogs', 'Contact'].map((section) => (
              <motion.a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="hover:text-blue-400 transition"
                whileHover={{ y: -2 }}
              >
                {section}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero with animated typewriter */}
      <motion.section
        id="hero"
        className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Intro + Typewriter */}
          <motion.div
            className="flex-1 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-sm md:text-lg text-blue-400 mb-2">👋 Hey, I'm</h2>
              <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-4">
                Vinayak Patil
              </h1>
              <div className="text-2xl md:text-4xl font-bold text-blue-400">
                <Typewriter
                  words={['Full Stack Dev', 'Problem Solver', 'AI Enthusiast', 'Code Artist']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={2000}
                />
              </div>
            </motion.div>
            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about building web apps & solving complex problems. 🚀
            </motion.p>
            {/* Buttons */}
            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white relative overflow-hidden hover:scale-105 transition"
              >
                <span className="relative z-10">Let's Connect ✨</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-blue-400 hover:border-purple-500 rounded-lg font-semibold text-blue-400 hover:text-purple-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
          {/* Right: Image with glow */}
          <motion.div
            className="flex-1 relative group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-[-10%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-50 blur-lg animate-rotate"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity }}
              />
              <motion.img
                src={image6}
                alt="Developer workspace"
                className="w-full h-auto transition-transform duration-500 rounded-lg"
                whileHover={{ scale: 1.02 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="flex items-center gap-3 mb-12"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <User className="w-7 h-7 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">About Me</h2>
          </motion.div>
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              className="space-y-6"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate <span className="text-blue-400 font-medium">Full Stack Developer </span> 
                  specializing in modern web technologies. With a keen eye for detail and problem-solving skills, I create seamless, user-friendly applications that enhance digital experiences.
              </p>
              {/* Info boxes */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Frontend", desc: "React, TypeScript, Tailwind" },
                  { title: "Backend", desc: "Node.js, MongoDB" },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    className="p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:scale-105 transition"
                  >
                    <h3 className="font-semibold mb-2 text-xl text-white">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Image */}
            <motion.div
              className="relative flex justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={image1}
                alt="Nature-themed anime illustration"
                className="max-w-[450px] w-full h-auto rounded-lg shadow-lg hover:scale-105 transition"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            className="flex items-center gap-2 mb-12"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Laptop className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Skills & Expertise ⚡</h2>
          </motion.div>
          {/* Skill categories */}
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
              title="Dev Tools"
              skills={skills.technical.tools}
              icon={Wrench}
            />
          </div>
          {/* Soft skills */}
          <motion.div
            className="mt-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Soft Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.soft.map((skill) => (
                <div
                  key={skill.name}
                  className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:scale-105 transition"
                >
                  <skill.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h4 className="text-lg font-medium text-white text-center">{skill.name}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
{/* Main Projects */}
<div className="mb-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Food Delivery Website */}
  <motion.div
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
    whileHover={{ y: -2, boxShadow: "0 0 20px #00D4FF" }}
  >
    <img
      src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      alt="Food Delivery Platform"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-white">Food Delivery Platform</h3>
      <p className="text-gray-300 mb-4">
        Full-stack MERN platform with role-based auth, admin dashboard, Stripe payments.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">React</span>
        <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Node.js</span>
        <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">MongoDB</span>
        <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Stripe</span>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/Patilvinayak18/Food-Delivery-App" className="flex items-center gap-1 text-blue-400 hover:text-blue-200">
          <Github className="w-4 h-4" /> Code
        </a>
      </div>
    </div>
  </motion.div>

  {/* Shortest Path Finder */}
  <motion.div
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
    whileHover={{ y: -2, boxShadow: "0 0 20px #00D4FF" }}
  >
    <img
      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      alt="Shortest Path Finder"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-white">Shortest Path Finder</h3>
      <p className="text-gray-300 mb-4">
        Pathfinding visualizer for Dijkstra’s algorithm with draggable nodes & real-time animations.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">JavaScript</span>
        <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">HTML</span>
        <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">CSS</span>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/Patilvinayak18/ShortestPathFinder" className="flex items-center gap-1 text-blue-400 hover:text-blue-200">
          <Github className="w-4 h-4" /> Code
        </a>
      </div>
    </div>
  </motion.div>

  {/* Self-Driving Car Simulator */}
  <motion.div
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
    whileHover={{ y: -2, boxShadow: "0 0 20px #00D4FF" }}
  >
    <img
      src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      alt="Self Driving Car Simulator"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-white">Self-Driving Car Simulator</h3>
      <p className="text-gray-300 mb-4">
        CNN-based simulator for lane detection, signal recognition & obstacle management.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Python</span>
        <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">CNN</span>
        <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">Unreal Engine</span>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/Patilvinayak18/Self_driving_Car_Simulator" className="flex items-center gap-1 text-blue-400 hover:text-blue-200">
          <Github className="w-4 h-4" /> Code
        </a>
      </div>
    </div>
  </motion.div>
</div>

     

      {/* Blog Section */}
      <motion.section
        id="blogs"
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Blogs</h2>
          </div>
          {selectedBlog ? (
            <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
              <button
                onClick={() => setSelectedBlog(null)}
                className="mb-4 text-blue-400 hover:text-blue-200 flex items-center gap-2"
              >
                ← Back to blogs
              </button>
              <h3 className="text-2xl font-bold mb-2">{selectedBlog.title}</h3>
              <div className="flex items-center text-gray-400 mb-4 text-sm">
                <span>{selectedBlog.date}</span>
                <span className="mx-2">•</span>
                <span>{selectedBlog.readTime}</span>
              </div>
              <p className="text-gray-300">{selectedBlog.content}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.title}
                  className="bg-gray-800 p-6 rounded-xl cursor-pointer hover:scale-105 transition duration-300 hover:shadow-lg hover:shadow-blue-500/10"
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
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Mail className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold">Get in Touch</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:vp464068@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                >
                  <Mail className="w-5 h-5" /> vp464068@gmail.com
                </a>
                <a
                  href="https://github.com/Patilvinayak18"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vinayak-patil-32958b229/"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                >
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                 <a
      href="https://x.com/TechHub2024"
      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Twitter className="w-5 h-5" /> Twitter
    </a>
              </div>
              {/* Contact form */}
              <form className="mt-8 space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/20 mt-12">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Vinayak Patil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
