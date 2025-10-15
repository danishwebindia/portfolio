import React, {useEffect} from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import "./About.css";
import profile_img from "../../assets/profile.jpeg";

const About = () => {

      // Years of experience
  const years = useMotionValue(0);
  const roundedYears = useTransform(() => Math.round(years.get()));

  // Projects completed
  const projects = useMotionValue(0);
  const roundedProjects = useTransform(() => Math.round(projects.get()));

  // Happy clients
  const clients = useMotionValue(0);
  const roundedClients = useTransform(() => Math.round(clients.get()));

  const skills = [
  { name: "HTML / CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Angular", level: 80 },
];

  useEffect(() => {
    const controls1 = animate(years, 10, { duration: 5 });
    const controls2 = animate(projects, 90, { duration: 5 });
    const controls3 = animate(clients, 15, { duration: 5 });

    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
    };
  }, []);

  return (
    <div id='about' className="section">
      <h1>About me</h1>
      <div className="section-body">
        <div className="section-left">
          {/* <img src={profile_img} alt="" /> */}
        </div>
        <div className="section-right">
          <p>
            I am a Frontend Developer with over 10 years of experience crafting modern, responsive, and high-performance web applications. 
          </p>
          <p>
            My expertise lies in building intuitive user interfaces with technologies like React, Angular, TypeScript, and JavaScript, ensuring seamless experiences across devices.
          </p>
          {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-info">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}%</span>
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      ))}
          {/* <div className="skills">
            <div className="skill">
              <p className="skill-text">HTML5</p>
              <hr style={{ width: "95%" }} />
            </div>
            <div className="skill">
              <p className="skill-text">CSS3</p>
              <hr style={{ width: "55%" }} />
            </div>
            <div className="skill">
              <p className="skill-text">JavaScript</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p className="skill-text">React</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="skill">
              <p className="skill-text">Angular</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div> */}
         
        </div>
         
      </div>
      <div className="achivements">
            <div className="achivement">
              <h1><motion.span>{roundedYears}</motion.span>+</h1>
              <h2>YEARS OF EXPERIENCE</h2>
            </div>
            <hr/>
            <div className="achivement">
              <h1><motion.span>{roundedProjects}</motion.span>+</h1>
              <h2>PROJECTS COMPLETED</h2>
            </div>
            <hr/>
            <div className="achivement">
              <h1><motion.span>{roundedClients}</motion.span>+</h1>
              <h2>HAPPY CLIENTS</h2>
            </div>
          </div>
    </div>
  );
};

export default About;
