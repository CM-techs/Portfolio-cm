import React from 'react';
import { FaCode, FaDatabase, FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiVite, SiPostman } from 'react-icons/si';

const TechBackground = () => {
  console.log("TechBackground mounted");
  return (
    <div className="tech-bg-container">
      {/* Background Illustration */}
      <div className="tech-bg-image"></div>

      {/* Mesh Gradients */}
      <div className="gradient-sphere sphere-1"></div>
      <div className="gradient-sphere sphere-2"></div>
      <div className="gradient-sphere sphere-3"></div>

      {/* Grid Pattern */}
      <div className="tech-grid"></div>

      {/* Floating Icons */}
      <div className="floating-icons">
        <FaReact className="icon icon-1" />
        <FaNodeJs className="icon icon-2" />
        <FaJs className="icon icon-3" />
        <SiMongodb className="icon icon-4" />
        <FaCode className="icon icon-5" />
        <FaDatabase className="icon icon-6" />
        <SiVite className="icon icon-7" />
        <FaGithub className="icon icon-8" />
        <SiPostman className="icon icon-9" />
      </div>

      {/* Floating Code Snippets */}
      <div className="floating-code">
        <span className="code-text text-1">{"<div>"}</span>
        <span className="code-text text-2">{"const [state, setState] = useState()"}</span>
        <span className="code-text text-3">{"npm install react"}</span>
        <span className="code-text text-4">{"git commit -m 'initial'"}</span>
        <span className="code-text text-5">{"export default App;"}</span>
      </div>

      {/* Binary Rain Columns */}
      <div className="binary-rain">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`binary-column col-${i}`} style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 10}s`, animationDuration: `${5 + Math.random() * 7}s` }}>
            {Array.from({ length: 25 }).map((_, j) => (
              <span key={j}>{Math.round(Math.random())}</span>
            ))}
          </div>
        ))}
      </div>

      {/* Abstract Lines */}
      <div className="tech-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
};

export default TechBackground;
