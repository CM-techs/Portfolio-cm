import React from "react";
import { motion } from "framer-motion";


const skills = [
  { name: "MongoDB", icon: "🍃" },
  { name: "Express", icon: "🚄" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Tailwind", icon: "🌊" }
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured MERN stack shop with Stripe integration and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    link: "#"
  },
  {
    title: "AI Image SaaS",
    description: "Generative AI platform using OpenAI API and MERN stack for user management.",
    tech: ["Next.js", "Tailwind", "OpenAI", "Prisma"],
    link: "#"
  },
  {
    title: "Real-time Chat App",
    description: "Secure messaging with Socket.io and group chat functionality.",
    tech: ["React", "Express", "Socket.io", "Firebase"],
    link: "#"
  }
];

export default function Home() {
  return (
    <div className="portfolio-wrapper">
      {/* Hero Section */}
      <section className="section hero-section container text-center d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge rounded-pill px-3 py-2 mb-4 glass text-primary fw-600">Available for Hire</span>
          <h1 className="mb-4">
            Building Digital <span className="gradient-text">Experiences</span>
          </h1>
          <p className="mx-auto mb-5 text-secondary" style={{ maxWidth: '600px' }}>
            I'm a <span className="text-primary fw-bold">MERN Stack Developer</span> specializing in building high-performance, 
            beautiful, and scalable web applications from scratch.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <a href="#projects" className="btn btn-primary shadow-lg px-5 py-3">View My Work</a>
            <a href="#contact" className="btn btn-outline-light px-5 py-3 glass">Get in Touch</a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <motion.div 
              className="glass p-5 h-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4">About Me</h2>
              <p className="mb-4">
                I am a passionate Full Stack Developer with a deep interest in modern web technologies. 
                My journey started with a curiosity for how things work on the internet, which quickly 
                evolved into a career building complex systems.
              </p>
              <p>
                I thrive in environments that challenge me to solve difficult problems and 
                allow me to learn something new every day.
              </p>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <div className="row g-4">
              {skills.map((skill, index) => (
                <div className="col-6 col-md-4" key={skill.name}>
                  <motion.div 
                    className="glass p-4 text-center h-100 d-flex flex-column align-items-center justify-content-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span style={{ fontSize: '2rem' }}>{skill.icon}</span>
                    <span className="mt-2 fw-bold text-primary">{skill.name}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section container">
        <div className="text-center mb-5">
          <h2 className="mb-3">Selected <span className="gradient-text">Projects</span></h2>
          <p className="mx-auto text-secondary">A glimpse into some of my recent work and technical experiments.</p>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={project.title}>
              <motion.div 
                className="glass p-4 h-100 d-flex flex-column"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-3 rounded-3 overflow-hidden" style={{ background: 'var(--bg-secondary)', height: '200px', display: 'grid', placeItems: 'center' }}>
                    <span className="text-secondary opacity-50">Project Preview</span>
                </div>
                <h3 className="h4 mb-3">{project.title}</h3>
                <p className="small text-secondary mb-4 flex-grow-1">{project.description}</p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="badge bg-secondary-subtle text-primary border border-secondary-subtle px-2 py-1" style={{ fontSize: '0.75rem' }}>{t}</span>
                  ))}
                </div>
                <a href={project.link} className="text-primary fw-bold text-decoration-none d-flex align-items-center gap-2">
                  Learn More <span>→</span>
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section container text-center mb-5">
        <motion.div 
          className="glass p-5 mx-auto" 
          style={{ maxWidth: '800px' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4">Let's Work <span className="gradient-text">Together</span></h2>
          <p className="mx-auto mb-5 text-secondary">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          <a href="mailto:yourmail@gmail.com" className="btn btn-primary px-5 py-3 mb-4">Send an Email</a>
          <div className="d-flex justify-content-center gap-4 mt-4">
            <a href="#" className="text-secondary text-decoration-none hover-primary">GitHub</a>
            <a href="#" className="text-secondary text-decoration-none hover-primary">LinkedIn</a>
            <a href="#" className="text-secondary text-decoration-none hover-primary">Twitter</a>
          </div>
        </motion.div>
      </section>

      <footer className="py-5 text-center text-secondary border-top border-secondary-subtle mt-5">
        <p className="small">© {new Date().getFullYear()} Chellamani. Built with React & Framer Motion.</p>
      </footer>
    </div>
  );
}
