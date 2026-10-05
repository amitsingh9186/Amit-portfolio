const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <h3>
        Amit<span>Singh</span>
      </h3>

      <p>Full Stack MERN Developer</p>

      <div className="footer-links">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#skills">Skills</a>

        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>

      </div>

      <p className="copyright">
        © {currentYear} Amit Singh. All Rights Reserved.
      </p>

    </footer>
  );
};

export default Footer;