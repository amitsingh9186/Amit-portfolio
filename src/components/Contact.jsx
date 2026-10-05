const Contact = () => {
  return (
    <section className="section contact-section" id="contact">

      <div className="section-title">
        <p>Let's Connect</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-card">

          <h3>Let's build something together.</h3>

          <p>
            I'm interested in Full Stack, MERN Stack and Web Development
            opportunities.
          </p>

          <div className="contact-details">

            <p>
              <strong>Email:</strong>
              {" "}
              <a href="mailto:amittalan9186@gmail.com">
                amittalan9186@gmail.com
              </a>
            </p>

            <p>
              <strong>Phone:</strong>
              {" "}
              <a href="tel:+919548739186">
                +91 9548739186
              </a>
            </p>

            <p>
              <strong>Location:</strong>
              {" "}
              Greater Noida, Uttar Pradesh, India
            </p>

          </div>

          <div className="contact-buttons">

            <a
              href="mailto:amittalan9186@gmail.com"
              className="btn primary-btn"
            >
              Send Email
            </a>

            <a
              href="https://github.com/amitsingh9186"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;