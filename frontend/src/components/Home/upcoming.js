import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import qatarFlag from "../../Assets/qatar.png";
import ecuadorFlag from "../../Assets/ecuador.png";
import englandFlag from "../../Assets/england.png";
import iranFlag from "../../Assets/iran.png";
import ProgressBar from 'react-bootstrap/ProgressBar';


function getPercentage(){
    return 70;
}
function getPercentage2(){
    return 30;
}

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
            
            <img
                src={qatarFlag}
                alt="qatar flag icon"
                className="img-fluid"
                style={{ maxHeight: "50px", float: "left", marginTop: "15px", marginLeft: "25px"}}
              />
              
            <img
                src={ecuadorFlag}
                alt="ecuador flag icon"
                className="img-fluid"
                style={{ maxHeight: "50px", float: "right", marginTop: "15px", marginRight: "25px"}}
              />
            <h4 style={{float: "left", margin:"25px"}}>Qatar</h4>
            <h4 style={{float: "right", margin:"25px"}}>Ecuador</h4>
            <h4 style={{display: "inline", marginLeft: "30px"}}>{getPercentage()}%</h4>
            <ProgressBar striped variant="success" animated now={getPercentage()} style={{float: "left", height: "80px", width: "100%", marginTop: "-80px", opacity:"15%", borderRadius: "3rem"}}/>
        </div>
        
        </Col>
       </Row>
       <Row>
        <Col style={{ margin: "10px"}}>
        <div className="upcomingGame">
            <img
                src={englandFlag}
                alt="qatar flag icon"
                className="img-fluid"
                style={{ maxHeight: "50px", float: "left", marginTop: "15px", marginLeft: "25px"}}
              />
            <img
                src={iranFlag}
                alt="ecuador flag icon"
                className="img-fluid"
                style={{ maxHeight: "50px", float: "right", marginTop: "15px", marginRight: "25px"}}
              />
            <h4 style={{float: "left", margin:"25px"}}>England</h4>
            <h4 style={{float: "right", margin:"25px"}}>Iran</h4>
            <h4 style={{display: "inline", marginRight: "50px"}}>{getPercentage2()}%</h4>
            <ProgressBar striped variant="success" animated now={getPercentage2()} style={{float: "left", height: "80px", width: "100%", marginTop: "-80px", opacity:"15%", borderRadius: "3rem"}}/>
        </div>
        </Col>
       </Row>
      </Container> 
    </Container>
  );
}
export default Upcoming;