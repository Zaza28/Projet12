import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";


export const Banner = () => {



return(
    <section className="banner" id="home">
        <Container>
            <Row className="align-item-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Bonjour, je suis Zaïneb Harzi développeuse Web.</h1>
                <p>introduction à ajouter</p>
                <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={HeaderImg} alt="Header img"></img>
                </Col>
            </Row>

        </Container>

    </section>
)

}