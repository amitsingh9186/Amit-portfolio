import amitImage from "../assets/amit.jpg";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-content">
        <p className="hello">Hello, I'm</p>

        <h1>
          Amit <span>Singh</span>
        </h1>

        <h2>Full Stack MERN Developer</h2>

        <p>
          I build responsive, scalable and user-friendly web applications
          using React.js, Node.js, Express.js and MongoDB.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View Projects
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/amitsingh9186"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/amit-singh-8577b833b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="profile-circle">
          <img src={amitImage} alt="Amit Singh" />
        </div>
      </div>

    </section>
  );
};

export default Hero;