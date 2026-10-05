const Education = () => {

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "Galgotias University, Greater Noida",
      year: "2024 - 2026",
    },

    {
      degree: "Bachelor of Science (B.Sc.) in Mathematics",
      institute: "Dr. Bhimrao Ambedkar University, Agra",
      year: "2023",
    },

    {
      degree: "Senior Secondary (XII)",
      institute: "CBSE Board - Bajna, Uttar Pradesh",
      year: "2020",
    },

    {
      degree: "Secondary (X)",
      institute: "CBSE Board - Bajna, Uttar Pradesh",
      year: "2018",
    },
  ];

  return (
    <section className="section" id="education">

      <div className="section-title">
        <p>My Academic Journey</p>
        <h2>Education</h2>
      </div>

      <div className="timeline">

        {education.map((item, index) => (
          <div className="timeline-card" key={index}>

            <span>{item.year}</span>

            <h3>{item.degree}</h3>

            <p>{item.institute}</p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Education;