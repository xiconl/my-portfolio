import React from "react";
import { Container, Row, Col, Image, Button, Navbar, Nav, Stack } from "react-bootstrap";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import image from '../assets/myImgage.jpg'

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="Hero" className="py-5 bg-info text-center">
        <Container>
          <h1 className="display-4 mt-5 fw-bold text-light">Hi, I'm <span className="text-dark">Aloysius Chikwendu</span></h1>
          <Stack className="container mt-4"><Image
            src={image}
            className="d-block mx-auto rounded-3"
            width={250}
            height={250}
            alt="Aloysius Chikwendu"
          /></Stack>
          <p className="lead mx-auto text-dark pt-5" style={{ maxWidth: "600px" }}>
            I'm a passionate Web Developer who loves crafting beautiful and functional websites with modern technologies.
          </p>
          <a
            href="/myResume.pdf"
            download
            className="bg-blue-500 text-white px-4 py-2 rounded text-decoration-none hover:bg-blue-600"
          >
            My Resume
          </a>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="Skill" className="py-5 bg-info text-center">
        <Container>
          <h2 className="mb-4 fs-1">My Skills</h2>
          <Row className="g-4 text-success justify-content-center">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git', 'Bootstrap'].map((skill) => (
              <Col xs={6} md={3} key={skill}>
                <div className="rounded-pill border border-dark p-3 shadow-sm bg-info">
                  {skill}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="About" className="py-5 bg-info text-center">
        <Container>
          <h2 className="mb-4">About Me</h2>
          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            I'm a dedicated web developer with experience in frontend and backend development. I enjoy turning complex problems into simple, beautiful, and intuitive designs. My goal is to always build applications that are scalable and efficient under the hood while providing slick user experiences.
          </p>
        </Container>
      </section>

      {/* My Works*/}
      <section id="Work" className="py-5 bg-info text-center">
        <Container>
          <h2 className="mb-4">My work</h2>
          <p className="text-muted">Projects coming soon!</p>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="py-5 bg-info text-center">
        <Container>
          <h2 className="mb-3">Contact</h2>
          <p className="text-primary">Feel free to reach out via email:</p>
          <div className="d-flex justify-content-center align-items-center gap-2 mt-3 mb-4">
            <Mail />
            <a href="mailto:chiemeriechikwendu2@gmail.com" className="d-block text-decoration-none text-dark">
              chiemeriechikwendu2@gmail.com
            </a>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-2 mt-3 mb-4">
            <Phone size={20} />
            <a href="tel:+2347048919625" className="text-decoration-none text-dark">
              +234 704 891 9625
            </a>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://github.com/xiconl" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/aloysius-chikwendu//" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://stackoverflow.com/users/29475105/aloysius-chikwendu" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faStackOverflow} size="2x" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <faStackOverflow />
            </a>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 text-center">
        <Container>
          <p className="mb-0">&copy; {new Date().getFullYear()} Aloysius Chikwendu. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Hero;
