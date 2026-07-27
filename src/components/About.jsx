import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <p>
        Hello! I'm <span>Yashraj Dixit</span>, an MCA student at PSIT Kanpur and
        a passionate Software Developer. I enjoy building modern, responsive,
        and user-friendly web applications using React, JavaScript, Node.js,
        Java, Python, SQL, and Oracle.
      </p>

      <div className="about-cards">
        <div className="card">
          <h3>Education</h3>
          <p>MCA - PSIT Kanpur</p>
        </div>

        <div className="card">
          <h3>Experience</h3>
          <p>Fresher | Open Source Learner</p>
        </div>

        <div className="card">
          <h3>Location</h3>
          <p>Kanpur, Uttar Pradesh</p>
        </div>
      </div>
    </section>
  );
}

export default About;