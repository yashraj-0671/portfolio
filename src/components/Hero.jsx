import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >

        <p className="intro">
          Hello, I'm
        </p>

        <h1>
          <span>Yashraj</span> Dixit
        </h1>


        <TypeAnimation
          sequence={[
            "Software Developer",
            2000,
            "React Developer",
            2000,
            "Frontend Developer",
            2000,
            "Java Programmer",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
        />


        <p className="desc">
          MCA student and Frontend Developer passionate about building
          modern, responsive and animated web applications using React,
          JavaScript and modern UI technologies.
        </p>


        <div className="hero-btns">

          <a href="#contact">
            <button className="hire-btn">
              Hire Me
            </button>
          </a>


          <a href="/resume.pdf" download>
            <button className="resume-btn">
              Download Resume
            </button>
          </a>

        </div>



        <div className="hero-icons">

          <a
            href="https://github.com/yashraj-0671"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>


          <a
            href="https://linkedin.com/in/yashraj-dixit-b5b3b83a9"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>


          <a href="mailto:umaatuldixit9598990671@gmail.com">
            <FaEnvelope />
          </a>


        </div>


      </motion.div>



      <motion.div
        className="hero-right"
        animate={{
          y: [-15, 15, -15]
        }}
        transition={{
          duration: 5,
          repeat: Infinity
        }}
      >


        <div className="profile-circle">

          <img
            src="/profile.png"
            alt="Yashraj Dixit"
          />

        </div>


      </motion.div>


    </section>
  );
}


export default Hero;