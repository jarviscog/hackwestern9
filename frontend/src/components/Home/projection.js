import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
       <Container>
       <Row>
       <div> Some more text </div>

       </Row>
        
      </Container> 
      <Container>
       <Row>
        <Col className = "block">1 of 1</Col>
        <Col className = "block">1 of 1</Col>
       </Row>
        
      </Container> 
    </Container>
  );
}
export default Home2;
