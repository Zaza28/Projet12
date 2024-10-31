import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgURL }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proh-imgbx">
        <img src={imgURL} alt="image-projet" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
