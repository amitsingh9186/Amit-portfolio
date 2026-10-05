const Skills = () => {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Python",
    "Git",
    "GitHub",
    "REST APIs",
    "Data Structures",
    "Algorithms",
    "OOP",
  ];

  return (
    <section className="section alternate-section" id="skills">

      <div className="section-title">
        <p>What I Know</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;