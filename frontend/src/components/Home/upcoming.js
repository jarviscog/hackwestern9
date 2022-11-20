import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Upcoming() {
  return (
    <Container fluid className="upcoming" id="up">
       <Container>
       <Row>
       <div> Upcoming Games... </div>

       </Row>
        
      </Container> 
      <Container>
       <Row>
        <Col style={{ margin: "10px"}}>
        <div className="upcomingGame">
            1 of 2
        </div>
        </Col>
       </Row>
       <Row>
        <Col style={{ margin: "10px"}}>
        <div className="upcomingGame">
            1 of 2
        </div>
        </Col>
       </Row>
      </Container> 
    </Container>
  );
}
export default Upcoming;