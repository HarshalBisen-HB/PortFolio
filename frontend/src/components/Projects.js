import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Screenshot 2025-02-22 134812.png";
import projImg2 from "../assets/img/Screenshot 2025-02-22 135337.png";
import projImg3 from "../assets/img/Screenshot 2025-02-22 140054.png";
import projImg4 from "../assets/img/Screenshot 2025-02-22 161211.png";
import projImg5 from "../assets/img/Screenshot 2025-02-22 161956.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Employee Management System",
      description: "Web and Android App",
      imgUrl: projImg1,
      gitUrl: "https://github.com/HarshalBisen-HB/Cdac_Project", // Replace with your GitHub repo URL
    },
    {
      title: "Audio Book Android App",
      description: "Native Android App",
      imgUrl: projImg2,
      gitUrl: "https://github.com/HarshalBisen-HB/audio-book", // Replace with your GitHub repo URL
    },
    {
      title: "Web App BookOrder",
      description: "Web Development",
      imgUrl: projImg3,
      gitUrl: "https://github.com/HarshalBisen-HB/BookOrderfrontend-backend", // Replace with your GitHub repo URL
    },
    {
      title: "Web App Keep-Clone",
      description: "Web Development",
      imgUrl: projImg4,
      gitUrl: "https://github.com/HarshalBisen-HB/keep-Clone", // Replace with your GitHub repo URL
    },
    {
      title: " web App Calculator",
      description: "Web Development",
      imgUrl: projImg5,
      gitUrl: "https://github.com/HarshalBisen-HB/Calculator", // Replace with your GitHub repo URL
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      gitUrl: "https://github.com/your-username/business-startup-3", // Replace with your GitHub repo URL
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Android and Web Development</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}