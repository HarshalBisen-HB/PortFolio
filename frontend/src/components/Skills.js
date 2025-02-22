import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { FaCode, FaMobileAlt, FaTools, FaDatabase, FaProjectDiagram, FaPalette } from 'react-icons/fa'; // Icons for categories

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className="subtitle">
                Here are some of the skills and technologies I work with. <br />
                I specialize in web and mobile development, along with tools and frameworks that enhance productivity.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {/* Web Development */}
                <div className="item">
                  <div className="skill-card">
                    <FaCode className="skill-icon" />
                    <h3>Web Development</h3>
                    <ul>
                      <li>JavaScript, CSS, HTML, Vite</li>
                      <li>React, Express.js, Node.js, Spring Boot</li>
                      <li>Tailwind CSS, Redux, Axios, Multer</li>
                      <li>Mongoose, JsonWebToken, MongoDB, MySQL</li>
                    </ul>
                  </div>
                </div>

                {/* Android Development */}
                <div className="item">
                  <div className="skill-card">
                    <FaMobileAlt className="skill-icon" />
                    <h3>Android Development</h3>
                    <ul>
                      <li>Java, Kotlin, Android Studio, XML</li>
                      <li>Firebase, MVVM, MVC, Android SDK</li>
                      <li>ROOM, View Model, React Native, Lottie Files</li>
                    </ul>
                  </div>
                </div>

                {/* Tools & Frameworks */}
                <div className="item">
                  <div className="skill-card">
                    <FaTools className="skill-icon" />
                    <h3>Tools & Frameworks</h3>
                    <ul>
                      <li>VS Code, Android Studio, Postman, Swagger</li>
                      <li>Git, GitHub, MongoDB Compass, Vite</li>
                      <li>React Native Paper, Async Storage, Lottie Files</li>
                    </ul>
                  </div>
                </div>

                {/* Databases */}
                <div className="item">
                  <div className="skill-card">
                    <FaDatabase className="skill-icon" />
                    <h3>Databases</h3>
                    <ul>
                      <li>MySQL, MongoDB, Firebase</li>
                      <li>ROOM, Mongoose, NoSQL, SQL</li>
                    </ul>
                  </div>
                </div>

                {/* Software Architecture & Design */}
                <div className="item">
                  <div className="skill-card">
                    <FaProjectDiagram className="skill-icon" />
                    <h3>Software Architecture & Design</h3>
                    <ul>
                      <li>OOPs Concepts, DSA, MVC, MVVM</li>
                      <li>View Model, Software Development Methodologies</li>
                    </ul>
                  </div>
                </div>

                {/* UI/UX Design */}
                <div className="item">
                  <div className="skill-card">
                    <FaPalette className="skill-icon" />
                    <h3>UI/UX Design</h3>
                    <ul>
                      <li>Tailwind CSS, React Native Paper</li>
                      <li>Lottie Files, Responsive Design</li>
                    </ul>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};