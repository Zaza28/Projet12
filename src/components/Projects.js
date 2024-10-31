import {
  Container,
  Row,
  Col,
  TabContainer,
  TabContent,
  TabPane,
  Nav,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";



export const Projects = () => {
  const projects = [
    {
      title: "Booki",
      description: "intégration du site en HTML et CSS",
      imgURL: projImg1,
    },
    {
      title: "OhMyFood",
      description: "Développement et Intégration en mobile first",
      imgURL: projImg2,
    },
    {
      title: "Sophie Bluel",
      description: "Développement et Intégration en Javascript",
      // imgURL: projImg3,
    },
    {
      title: "Kasa",
      description: "Implémentation front-end avec React",
      imgURL: projImg4,
    },
    {
      title: "Argent Bank",
      description: "Développement front-end avec React et Redux",
      imgURL: projImg5,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>description à ajouter</p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Mes Projets</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item> */}
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                {/* <TabPane eventKey="second">Context à ajouter</TabPane>
                <TabPane eventKey="third">Context à ajouter</TabPane> */}
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="image-background"
        src={colorSharp2}
      />
    </section>
  );
};
