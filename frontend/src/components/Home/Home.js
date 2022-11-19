import {React,useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/soccer.png";
import Particle from "../Particle";
import Home2 from "./projection";
import Type from "./Type";
import Button from 'react-bootstrap/Button';




function Home() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  } 
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 className="heading-name">
                WELCOME TO  
                <strong className="main-name"> MIRAI9</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
      
              </div>
              <div style={{ padding: 60, textAlign: "left" }}>
    
              <Button className = "like-btn animate-like" variant="outline-primary" onClick={handleClick}>Get Started</Button>
              </div> 
              
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>

            <Col> 
          <Button className = "like-btn animate-like" variant="outline-primary" onClick={handleClick}>Get Started</Button>
                
          <div ref={ref}  > </div> 
          </Col> 
            
          </Row>
        </Container>

      

      
      </Container>
      < Home2 /> 
    </section>
  );
}

export default Home;
