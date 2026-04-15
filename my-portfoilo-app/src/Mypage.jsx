import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Mypage() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "A custom-built E-Commerce platform with WhatsApp integration for direct ordering.",
      img: "/mithra.png",
      live: "https://your-ecommerce.vercel.app",
      github: "https://github.com/CM-techs/Mithran-front",
      tech: "React • Node • MongoDB"
    },
    {
      title: "Todo App",
      desc: "A dynamic task management app focusing on state management and UI interactions.",
      img: "/Todo.png",
      live: "https://your-todo.vercel.app",
      github: "https://github.com/CM-techs/To-do",
      tech: "React"
    },
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built with React and deployed on Vercel.",
      img: "/CMporfo.png",
      live: "https://portfolio-cm-git-main-cm-techs-projects.vercel.app/",
      github: "https://github.com/CM-techs/Portfolio-cm",
      tech: "React"
    },
    {
      title: "PM Cube (Intern Project)",
      desc: "A tuition center management platform developed as a real client project.",
      img: "/Pm.png",
      live: "#",
      github: "https://github.com/CM-techs/Pmcube",
      tech: "React • Node • MongoDB"
    },
  ];

  return (
    <>
      {/* HERO */}
      <div className="container">
        <div className="text-box">
          <h1 className="name">Chellamani . J</h1>
          <p className="role">Full Stack Developer</p>

          <p className="tagline">
            Full Stack Developer | Building real-world applications | Open to opportunities
          </p>

          <div className="button-group">
            <button
              className="visit-btn"
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Visit my works
            </button>

            <a style={{textDecoration:"none",fontSize:"13px"}} href="https://drive.google.com/file/d/16ALobXWL4DAHKulA05mJwqjSmgSG9Ui-/view?usp=drivesdk" download className="visit-btn">
              Download Resume
            </a>

            <button
              className="visit-btn"
              onClick={() =>
                (window.location.href =
                  "mailto:cchellamani12@gmail.com?subject=Project Enquiry")
              }
            >
              Email
            </button>
          </div>

          <div className="social-links">
            <h3>Connect with me</h3>
            <a href="https://github.com/CM-techs"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/chellamani-j-432762298"><FaLinkedin /></a>
            <a href="https://wa.me/918680062065?text=Hi%2C%20I%20came%20across%20your%20profile%20and%20I%E2%80%99m%20a%20Full%20Stack%20Developer%20currently%20looking%20for%20job%20opportunities%20and%20freelance%20projects.%20I%E2%80%99d%20love%20to%20connect%20and%20discuss%20if%20there%E2%80%99s%20any%20suitable%20opportunity." target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            {/* <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a> */}
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <section className="skills-section">
        <h2>My Skills</h2>
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

      {/* EXPERIENCE */}
      <section className="experience-section">
        <h2 className="experience-title">Experience</h2>

        <div className="experience-container">
          <div className="experience-card">
            <h3>Zaalima Development Pvt Ltd</h3>
            <p className="role">Intern (Present)</p>
            <ul>
              <li>Working on real-world web applications</li>
              <li>Contributing to company products</li>
              <li>Gaining production-level experience</li>
            </ul>
          </div>

          <div className="experience-card">
            <h3>Xplocode</h3>
            <p className="role">Project Intern</p>
            <ul>
              <li>Developing a tuition center website</li>
              <li>Working on real client-based project</li>
              <li>Handling frontend and backend integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
  <h2 className="about-title">Who Am I ?</h2>

  <p className="about-text">
    I am a passionate and dedicated Full Stack Developer with hands-on experience in building real-world web applications using modern technologies such as React, Node.js, MySQL, and MongoDB. I enjoy transforming ideas into scalable, efficient, and user-friendly digital solutions with clean and maintainable code.
  </p>

  <p className="about-text">
    Currently, I am working as an intern at Zaalima Development Pvt Ltd, where I contribute to real-time company products and gain valuable exposure to production-level development practices. This experience has helped me understand how real-world applications are designed, developed, and maintained in a professional environment.
  </p>

  <p className="about-text">
    In addition, I am actively working on a client-based project with Xplocode, where I am developing a complete tuition center management system. In this project, I am responsible for building responsive user interfaces, handling backend logic, and integrating databases to ensure smooth functionality and performance.
  </p>

  <p className="about-text">
    I have a strong foundation in both frontend and backend development, and I continuously improve my skills by working on practical projects, exploring new technologies, and following industry best practices.
  </p>

  <p className="about-text">
    I am a quick learner, highly adaptable, and motivated to grow as a developer. My goal is to work on impactful projects, collaborate with teams, and build applications that provide real value to users while continuously enhancing my technical expertise.
  </p>
</section>

      {/* OBJECTIVE */}
     <section className="objective-section">
  <h2 className="objective-title">Objective</h2>

  <p className="objective-text">
    To start my career as a Full Stack Developer in a dynamic and growth-oriented organization where I can apply my technical skills, contribute to real-world projects, and continuously enhance my knowledge. I aim to build scalable, efficient, and user-friendly applications while collaborating with teams and gaining hands-on experience in modern web development practices.
  </p>
</section>

      {/* PROJECTS */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>

        <div className="projects-container">
          {projects.map((item, index) => (
            <div className="project-card" key={index}>
              <img src={item.img} alt={item.title} />

              <div className="project-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p className="tags">{item.tech}</p>

                <div className="project-buttons">
                  {/* <a href={item.live} target="_blank" rel="noreferrer">
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

      {/* CONTACT */}
      <section className="contact-section">
        <h2>Contact</h2>
        <p>Email: cchellamani12@gmail.com</p>
        <p>Location: Tamil Nadu, India</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Chellamani J | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Mypage;