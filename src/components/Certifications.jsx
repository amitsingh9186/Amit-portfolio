const Certifications = () => {

  const certificates = [
    {
      title: "Introduction to the Fundamentals of Database",
      company: "Simplilearn",
      date: "January 2025",
    },

    {
      title: "Introduction to Computer Network",
      company: "Cisco Networking Academy",
      date: "April 2025",
    },

    {
      title: "Web Development",
      company: "CodSoft",
      date: "August 2025",
    },
  ];

  return (
    <section className="section" id="certifications">

      <div className="section-title">
        <p>My Achievements</p>
        <h2>Certifications</h2>
      </div>

      <div className="certificate-container">

        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>

            <div className="certificate-icon">✓</div>

            <h3>{certificate.title}</h3>

            <p>{certificate.company}</p>

            <span>{certificate.date}</span>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Certifications;