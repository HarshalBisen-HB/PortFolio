import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Mail, Phone } from "lucide-react";  // Importing email and phone icons
import logo from "../assets/img/hrb.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            
            {/* Contact details with icons */}
            <div className="mt-4 text-[#B8B8B8] text-sm">
          
              <p className="flex items-center text-[#B8B8B8] gap-2">
                <Mail size={18} className="text-white" /> harshalbisen712@gmail.com
              </p>
              <p className="flex items-center text-[#B8B8B8] gap-2">
                <Phone size={18} className="text-white" /> +91 7030765169
              </p>
            </div>
          </Col>
          
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div style={{ paddingTop: "10px" }} className="social-icon">
              <a href="https://www.linkedin.com/in/harshal-bisen-7122000hrb/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/HarshalBisen-HB">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/harshal_rb/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
