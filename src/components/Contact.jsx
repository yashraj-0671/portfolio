import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-box">

        <p><FaEnvelope /> &nbsp; umaatuldixit9598990671@gmail.com</p>

        <p><FaPhone /> &nbsp; +91 9598990671</p>

        <p>
          <FaGithub /> &nbsp;
          <a
            href="https://github.com/yashraj-0671"
            target="_blank"
            rel="noreferrer"
          >
            github.com/yashraj-0671
          </a>
        </p>

        <p>
          <FaLinkedin /> &nbsp;
          <a
            href="https://linkedin.com/in/yashraj-dixit-b5b3b83a9"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>

      </div>
    </section>
  );
}

export default Contact;