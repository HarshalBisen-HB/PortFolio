import { Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, gitUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={gitUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="proj-imgbx" style={{ cursor: "pointer" }}>
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            <div style={{ marginTop: "10px" }}>
              <FaGithub size={24} /> {/* GitHub icon */}
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};