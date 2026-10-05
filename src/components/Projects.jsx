const Projects = () => {
  return (
    <section className="section alternate-section" id="projects">

      <div className="section-title">
        <p>What I Have Built</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        <div className="project-card">

          <div className="project-number">
            01
          </div>

          <h3>Product Recommendation System</h3>

          <p>
            A full-stack MERN web application designed to provide
            product recommendations and handle dynamic application data.
          </p>

          <div className="project-tech">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>

          <ul>
            <li>Developed full-stack MERN application.</li>
            <li>Implemented RESTful APIs.</li>
            <li>Implemented CRUD operations.</li>
            <li>Created responsive UI components.</li>
            <li>Integrated frontend and backend.</li>
          </ul>

          <a
            href="https://github.com/amitsingh9186"
            target="_blank"
            rel="noreferrer"
            className="project-btn"
          >
            View GitHub
          </a>

        </div>
      </div>
    </section>
  );
};

export default Projects;