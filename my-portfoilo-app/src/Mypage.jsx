import { FaReact,FaNodeJs,FaHtml5,FaCss3,FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Mypage() {
   const projects = [
  {
    title: "E-Commerce Website",
    desc: "Full stack app using React, Node.js & MongoDB",
    img: "/mithra.png",
    live: "https://your-ecommerce.vercel.app",
    github: "https://github.com/CM-techs/Mithran-front"
  },
  {
    title: "Todo App",
    desc: "Task management app built with React",
    img: "/Todo.png",
    live: "https://your-todo.vercel.app",
    github: "https://github.com/CM-techs/To-do"
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built using React",
    img: "/CMporfo.png",
    live: "https://your-portfolio.vercel.app",
    github: "https://github.com/CM-techs/Pmcube"
  }
];
   
   
    return (
        <>
      <div className="container">
  <div className="text-box">
    <h1 className="name">Chellamani . J</h1>
    <p className="role">Full Stack Developer</p>
    <p className="tagline">
  Fresher passionate about building scalable web apps | Open for Freelance Opportunities
</p> 
<div className="button-group">
<button className="visit-btn" onClick={() => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}}>Visit my works</button>
<button className="visit-btn"
  onClick={() =>
    window.location.href =
      "mailto:cchellamani12@gmail.com?subject=Project Inquiry&body=Hello , I want work with you"
  }
>
  Email
</button></div>
<div className="social-links">
  <h3>Connect with me </h3>
  <a href="https://github.com/CM-techs"><i className="fab fa-github"></i><FaGithub/></a>
  <a href="https://www.linkedin.com/in/chellamani-j-432762298"><i className="fab fa-linkedin-in"></i><FaLinkedin/></a>
  <a href="#"><i className="fab fa-twitter"></i><FaTwitter/></a>
  <a href="#"><i className="fab fa-instagram"></i><FaInstagram/></a>
</div>
  </div>
  
</div>
<section className="skills-section" id="skills">
  <h2 className="skills-title">My Skills</h2>

  <div className="skills-container">
    
    <div className="skill-card">
      <h3>Frontend</h3>
      <p>HTML, CSS, JavaScript, React, Bootstrap</p>
    </div>

    <div className="skill-card">
      <h3>Backend</h3>
      <p>Node.js, Express.js</p>
    </div>

    <div className="skill-card">
      <h3>Database</h3>
      <p>MySQL, MongoDB</p>
    </div>

    <div className="skill-card">
      <h3>Tools</h3>
      <p>Git, GitHub, Postman, VS Code</p>
    </div>

  </div>
</section>

<section className="about-section">
  <h2 className="about-title">Who Am I ?</h2>

  <p className="about-text">
    I’m a passionate Full Stack Developer fresher with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into real-world digital solutions using clean and efficient code.
  </p>

  <p className="about-text">
    I have hands-on experience in technologies like HTML, CSS, JavaScript, React, Node.js, Express, and databases such as MySQL and MongoDB. I continuously work on improving my skills by building projects and learning new tools in the web development ecosystem.
  </p>

  <p className="about-text">
    I’m currently seeking opportunities to start my professional career and also open to freelance projects where I can contribute, gain experience, and deliver high-quality work.
  </p>

  <p className="about-text">
    My goal is to grow as a developer, collaborate with teams, and create impactful applications that provide real value to users.
  </p>
</section>
<section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((item, index) => (
          <div className="project-card" key={index}>
            <img src={item.img} alt={item.title} />

            <div className="project-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
                <p className="tags">React • Node • MongoDB</p>
              <div className="project-buttons">
                {/* <a  display="block" href={item.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a> */}
                <a href={item.github} target="_blank" rel="noreferrer">
                  View Code
                </a>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>











        </>
    )
}   

export default Mypage   