import React from "react";
import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import qatarFlag from "../../Assets/qatar.png";
import ecuadorFlag from "../../Assets/ecuador.png";
import englandFlag from "../../Assets/england.png";
import iranFlag from "../../Assets/iran.png";
import usaFlag from "../../Assets/usa.png";
import walesFlag from "../../Assets/wales.png";
import ProgressBar from 'react-bootstrap/ProgressBar';


function GetPercentage(team1, team2){
    const [posts, setPosts] = useState([]);
    let url = "http://172.30.37.67:3000/?teamone=" + team1 + "&teamtwo=" + team2
    console.log(url)
    useEffect(() => {
       fetch(url)
          .then((res) => res.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
    return 87;
}
function getPercentage2(){
    return 30;
}
function getPercentage3(){
    return 69;
}

function Upcoming() {
  return (
    <Container fluid className="upcoming" id="up">
       <Container>
       <Row>
       <h1> Upcoming Games... </h1>

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
            <h4 style={{display: "inline", marginLeft: "30px"}}>{GetPercentage("Qatar", "Ecuador")}%</h4>
            <p>Al Bayt Staidum</p>
            <ProgressBar striped variant="success" animated now={GetPercentage("Qatar", "Ecuador")} style={{float: "left", height: "80px", width: "100%", marginTop: "-80px", opacity:"15%", borderRadius: "3rem"}}/>
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
            <p>Khalifa International Staidum</p>
            <ProgressBar striped variant="success" animated now={getPercentage2()} style={{float: "left", height: "80px", width: "100%", marginTop: "-80px", opacity:"15%", borderRadius: "3rem"}}/>
        </div>
        </Col>
       </Row>
       <Row>
        <Col style={{ margin: "10px"}}>
        <div className="upcomingGame">
            <img
                src={usaFlag}
                alt="qatar flag icon"
                className="img-fluid"
                style={{ maxHeight: "50px", float: "left", marginTop: "15px", marginLeft: "25px"}}
              />
            <img
                src={walesFlag}
                alt="ecuador flag icon"
                className="img-fluid"
                style={{ maxHeight: "50px", float: "right", marginTop: "15px", marginRight: "25px"}}
              />
            <h4 style={{float: "left", margin:"25px"}}>USA</h4>
            <h4 style={{float: "right", margin:"25px"}}>Wales</h4>
            <h4 style={{display: "inline", marginLeft: "20px"}}>{getPercentage3()}%</h4>
            <p>Al Rayyan Staidum</p>
            <ProgressBar striped variant="success" animated now={getPercentage3()} style={{float: "left", height: "80px", width: "100%", marginTop: "-80px", opacity:"15%", borderRadius: "3rem"}}/>
        </div>
        </Col>
       </Row>
      </Container> 
    </Container>
  );
}
export default Upcoming;