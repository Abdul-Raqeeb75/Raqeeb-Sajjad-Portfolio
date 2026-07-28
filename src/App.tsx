/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ExternalLink, 
  Rocket, 
  Users, 
  Layout, 
  Lightbulb, 
  Linkedin, 
  Github,
  GitBranch,
  Terminal,
  Workflow,
  Layers,
  Mail,
  Phone,
  Code,
  Brain,
  Database,
  BarChart3,
  Table,
  Globe,
  PenTool,
  Binary,
  PieChart,
  Smile,
  Server,
  Download
} from 'lucide-react';

// ... Components ...

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <Layout size={20} />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-3">
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Raqeeb_Sajjad_Resume.pdf"
              className="flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
            >
              Resume <Download size={14} />
            </a>
            
            <a 
              href="#footer"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/20 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            className="text-slate-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-background-dark border-b border-slate-100 dark:border-white/5 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-semibold text-slate-900 dark:text-slate-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3">
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Raqeeb_Sajjad_Resume.pdf"
                className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white w-full py-3 rounded-xl font-bold"
              >
                Download Resume <Download size={18} />
              </a>
              <a 
                href="#footer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white w-full py-3 rounded-xl font-bold text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = [
    'Data Scientist',
    'Web Developer',
    'Python Developer',
    'I\'ll make your social presence'
  ];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for projects
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tighter mb-4 dark:text-white">
            Hi, I'm <span className="text-primary">Raqeeb Sajjad</span>
          </h1>
          <div className="text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-10 h-8 flex items-center">
            <span>{text}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
              className="inline-block w-0.5 h-7 bg-primary ml-1"
            ></motion.span>
          </div>
          <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
            <a 
              href="#work"
              className="flex-1 sm:flex-none bg-primary text-white px-4 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-primary/25 text-sm sm:text-base whitespace-nowrap"
            >
              View Work <ArrowRight size={18} />
            </a>
            <a 
              href="#footer"
              className="flex-1 sm:flex-none bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-white/10 dark:text-white transition-colors flex items-center justify-center text-sm sm:text-base whitespace-nowrap"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-center lg:pr-12"
        >
          {/* Stylish Background Elements - Animated Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-[120px] -z-10"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-60"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              x: [0, 40, 0],
              y: [0, -40, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-56 h-56 bg-orange-500/10 rounded-full blur-3xl opacity-40"
          ></motion.div>
          
          {/* Image Container */}
          <div className="relative group">
            {/* Decorative Rings */}
            <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute inset-0 rounded-full border border-primary/10 scale-125 group-hover:scale-150 transition-transform duration-1000 delay-100"></div>
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-[0_0_60px_rgba(236,127,19,0.4)] bg-gradient-to-br from-primary/30 via-background-dark to-primary/10 flex items-center justify-center border-4 border-white/10 backdrop-blur-md">
              <img 
                src="/p.jpg" 
                alt="Professional Portrait"
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-5xl font-black leading-tight dark:text-white">
              A Passion for <span className="text-primary">Purposeful</span> Change
            </h2>
            <div className="h-1.5 w-20 bg-primary rounded-full mx-auto"></div>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a Data Science enthusiast and Full-Stack Web Developer with over 2 years of experience in building modern digital solutions. I have gained strong knowledge of both frontend and backend development, working with technologies like React,java, and Python. My experience includes developing real-world projects that combine programming, problem-solving, and data-driven thinking. I am passionate about creating efficient, scalable, and user-friendly applications. I continuously focus on improving my skills in data science, web development, and data visualization.

            </p>
    
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-5xl font-black text-primary mb-1">2+</h4>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-primary mb-1">10+</h4>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SelectedWork = () => {
  const projects = [
    {
      category: 'UI/UX Design',
      title: 'Ai interior design',
      description: 'A Figma prototype for AI-automated interior design solutions.',
      image: '/Ai.png'
    },
    {
      category: 'Frontend Development',
      title: 'Al-Raheem Construction',
      description: 'This site was Develop to Get more cleint from Society Area.',
      image: '/herosection.png'
    },
    {
      category: 'Full-Stack-web-Application',
      title: 'Library Management System',
      description: 'Whole campus libabry books record.',
      image: '/library.png'
    }
  ];

  return (
    <section id="work" className="py-24 bg-white/50 dark:bg-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-black mb-4 dark:text-white">Selected Work</h2>
            <div className="h-1.5 w-20 bg-primary rounded-full"></div>
          </div>
          <a 
            href="https://github.com/Abdul-Raqeeb75" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary font-bold flex items-center gap-2 hover:underline"
          >
            Explore All <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col gap-4"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 dark:bg-white/5 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-primary text-xs font-bold uppercase tracking-widest">{project.category}</p>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors dark:text-white dark:group-hover:text-primary">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Core Skills');

  const coreSkills = [
    { name: 'Python', icon: <Code size={24} />, category: 'Programming', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50' },
    { name: 'Java', icon: <Code size={24} />, category: 'Programming', color: 'from-orange-600 to-red-600', bg: 'bg-orange-50' },
    { name: 'PHP', icon: <Server size={24} />, category: 'Programming', color: 'from-indigo-500 to-purple-500', bg: 'bg-indigo-50' },
    { name: 'Machine Learning', icon: <Brain size={24} />, category: 'AI & Data', color: 'from-purple-600 to-pink-600', bg: 'bg-purple-50' },
    { name: 'EDA', icon: <BarChart3 size={24} />, category: 'AI & Data', color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-50' },
    { name: 'Pandas', icon: <Table size={24} />, category: 'AI & Data', color: 'from-blue-600 to-indigo-600', bg: 'bg-blue-50' },
    { name: 'NumPy', icon: <Binary size={24} />, category: 'AI & Data', color: 'from-sky-500 to-blue-500', bg: 'bg-sky-50' },
    { name: 'Data Visualization', icon: <PieChart size={24} />, category: 'AI & Data', color: 'from-amber-500 to-orange-500', bg: 'bg-amber-50' },
    { name: 'Sentiment Analysis', icon: <Smile size={24} />, category: 'AI & Data', color: 'from-rose-500 to-pink-500', bg: 'bg-rose-50' },
    { name: 'Web Scraping', icon: <Globe size={24} />, category: 'Web', color: 'from-green-500 to-emerald-500', bg: 'bg-green-50' },
    { name: 'SQL (MySQL)', icon: <Database size={24} />, category: 'Database', sub: 'DDL, DML, CRUD', color: 'from-orange-500 to-yellow-500', bg: 'bg-orange-50' },
    { name: 'Figma', icon: <PenTool size={24} />, category: 'Design', color: 'from-violet-500 to-fuchsia-500', bg: 'bg-violet-50' },
  ];

  const tools = [
    { name: 'VS Code', icon: <Code size={24} />, category: 'Editor', color: 'from-blue-500 to-blue-600' },
    { name: 'Git', icon: <GitBranch size={24} />, category: 'Version Control', color: 'from-orange-500 to-red-500' },
    { name: 'GitHub', icon: <Github size={24} />, category: 'Platform', color: 'from-slate-700 to-slate-900' },
    { name: 'Sublime Text', icon: <Terminal size={24} />, category: 'Editor', color: 'from-orange-400 to-orange-500' },
    { name: 'IntelliJ IDEA', icon: <Code size={24} />, category: 'IDE', color: 'from-purple-500 to-blue-500' },
  ];

  const workflow = [
    { name: 'Agile Approach', icon: <Workflow size={24} />, category: 'Methodology', color: 'from-indigo-500 to-blue-500' },
  ];

  const displaySkills: { name: string; icon: any; category: string; color: string; sub?: string }[] = 
    activeTab === 'Core Skills' ? coreSkills : activeTab === 'Tools' ? tools : workflow;

  return (
    <section id="skills" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50 dark:bg-white/5 -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Expertise</span>
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight dark:text-white">Technical <span className="text-primary">Stack</span></h2>
            <div className="h-2 w-24 bg-gradient-to-r from-primary to-primary/30 rounded-full mx-auto mb-8"></div>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed font-medium mb-12">
              A curated selection of technologies I've mastered to build robust and scalable digital solutions.
            </p>

            <div className="inline-flex p-1 bg-slate-100 dark:bg-white/5 rounded-2xl gap-1 mb-8">
              {['Core Skills', 'Tools', 'Workflow'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeTab === tab 
                      ? 'bg-white dark:bg-white/10 shadow-sm text-primary' 
                      : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="contents"
            >
              {displaySkills.map((skill, idx) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, type: 'spring', stiffness: 100 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] blur-xl -z-10 scale-95"
                       style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }}></div>
                  
                  <div className="bg-white dark:bg-white/5 h-full p-8 rounded-[2rem] border border-slate-100 dark:border-white/10 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${skill.color} transform group-hover:rotate-6 transition-transform duration-300`}>
                      {React.cloneElement(skill.icon as React.ReactElement, { size: 36, strokeWidth: 2.5 })}
                    </div>
                    
                    <div className="space-y-2">
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {skill.category}
                      </span>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{skill.name}</h3>
                      {skill.sub && (
                        <p className="text-xs text-slate-400 dark:text-slate-500 font-bold tracking-wide">{skill.sub}</p>
                      )}
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-50 dark:border-white/5 w-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex justify-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div key={star} className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a 
            href="#footer"
            className="group relative inline-flex items-center gap-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-12 py-6 rounded-2xl font-black text-xl overflow-hidden transition-all hover:pr-16"
          >
            <span className="relative z-10">Start a Project</span>
            <div className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
              <ArrowRight size={24} />
            </div>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    let newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');
    
    if (validate()) {
      setIsLoading(true);
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          const data = await response.json();
          setSubmitError(data.error || 'Something went wrong. Please try again.');
        }
      } catch (error) {
        setSubmitError('Failed to connect to the server. Please check your connection.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <footer id="footer" className="py-24 bg-slate-950 dark:bg-background-dark text-white overflow-hidden relative transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-1.5 rounded-lg text-white">
                  <Layout size={32} />
                </div>
              </div>
              <p className="text-xl text-slate-400 dark:text-slate-400 leading-relaxed max-w-md">
                Have a project in mind? Let's build something amazing together. Reach out through the form or social media.
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-xl font-bold text-white/90">Contact Details</h4>
              <ul className="space-y-6">
                <li className="flex items-center gap-4 text-slate-400 group">
                  <div className="bg-white/5 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500">Email Me</span>
                    <a href="mailto:aabdulraqeeb75@gmail.com" className="text-lg hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary">aabdulraqeeb75@gmail.com</a>
                  </div>
                </li>
                <li className="flex items-center gap-4 text-slate-400 group">
                  <div className="bg-white/5 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <Phone size={22} className="text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500">Call Me</span>
                    <span className="text-lg dark:text-slate-300">+92 3086883922</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white/90">Follow My Journey</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={22} />, href: 'https://www.linkedin.com/in/raqeeb-sajjad-447a8433a/' },
                  { icon: <Github size={22} />, href: 'https://github.com/Abdul-Raqeeb75' }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 hover:bg-primary hover:text-white transition-all text-slate-400 hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/80 dark:bg-background-dark/80 backdrop-blur-sm rounded-[2.5rem]"
                >
                  <div className="text-center p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl">
                    <div className="size-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-500 dark:text-slate-400">I'll get back to you as soon as possible.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 lg:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-md"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-black mb-8">Send a Message</h3>
              {submitError && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-6 text-sm font-bold">
                  {submitError}
                </div>
              )}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Ali"
                    className={`w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-primary/50 transition-all outline-none text-white placeholder:text-slate-600 disabled:opacity-50 ${errors.name ? 'border-red-500/50 ring-2 ring-red-500/20' : ''}`} 
                  />
                  {errors.name && <p className="text-red-400 text-xs font-bold ml-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="abc@example.com"
                    className={`w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-primary/50 transition-all outline-none text-white placeholder:text-slate-600 disabled:opacity-50 ${errors.email ? 'border-red-500/50 ring-2 ring-red-500/20' : ''}`} 
                  />
                  {errors.email && <p className="text-red-400 text-xs font-bold ml-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Your Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Tell me about your project..." 
                    rows={4}
                    className={`w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:ring-2 focus:ring-primary/50 transition-all outline-none text-white placeholder:text-slate-600 resize-none disabled:opacity-50 ${errors.message ? 'border-red-500/50 ring-2 ring-red-500/20' : ''}`}
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-xs font-bold ml-1">{errors.message}</p>}
                </div>
                <button 
                  disabled={isLoading}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </div>
            </motion.form>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <p className="text-slate-500 text-sm font-medium">© 2024 Raqeeb Sajjad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  const phoneNumber = "923086883922";
  const message = "Hi Raqeeb Sajjad, I saw your portfolio and would like to connect!";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -10, 0]
      }}
      transition={{
        scale: { duration: 0.3 },
        opacity: { duration: 0.3 },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)" }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl shadow-[#25D366]/40 flex items-center justify-center group touch-none"
      title="Chat on WhatsApp"
    >
      <svg 
        viewBox="0 0 24 24" 
        className="w-6 h-6 md:w-7 md:h-7 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white dark:bg-background-dark text-slate-900 dark:text-white px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl border border-slate-100 dark:border-white/10">
        Chat with me
      </span>
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <SelectedWork />
        <Skills />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
