import "../styles/Projects.css";

const projects = [
  {
    title: "Bank Management System",
    tech: "Java • SQL",
    desc: "A banking application for managing customer accounts, deposits, withdrawals and transactions."
  },
  {
    title: "Spotify Clone",
    tech: "HTML • CSS • JavaScript",
    desc: "A responsive music player inspired by Spotify with playlist and audio controls."
  },
  {
    title: "Portfolio Website",
    tech: "React • CSS",
    desc: "A modern animated portfolio showcasing projects, skills and contact information."
  },
  {
    title: "Student Management System",
    tech: "Java • SQL",
    desc: "A system to manage student records, attendance and academic information."
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <h4>{project.tech}</h4>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;