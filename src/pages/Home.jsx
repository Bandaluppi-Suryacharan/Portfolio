import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/prof_pic.jpg'
import About from '../components/Home/About';
import Type from '../components/Home/Type';


const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 style={{color:"white"}} className="heading-name" >
                I'M
                <strong className="main-name"> Surya Charan Bandaluppi</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
                    <div className="profile-pic-wrapper">
                      <img
                        src={homeLogo}
                        alt="home pic"
                        className="profile-pic"/>
                    </div>
            </Col>  

          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home