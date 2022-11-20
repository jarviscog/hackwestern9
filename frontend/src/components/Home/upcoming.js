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


function GetPercentage(team1, team2, stat){
    const [posts, setPosts] = useState([]);
    let url = "http://172.30.37.67:3000/?teamone=" + team1 + "&teamtwo=" + team2
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
    if(stat == 0){
        return Number(posts['0']).toFixed(2) * 100;
    }
    if(stat == 1){
        return Number(posts['1']).toFixed(2) * 100;
    }
    if(stat == 0.5){
        return Number(posts['0.5']).toFixed(2) * 100;
    }
    
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
            <h4 style={{display: "inline", marginLeft: "30px"}}>{GetPercentage("Qatar", "Ecuador", 1)}%</h4>
            <p>Al Bayt Staidum</p>
            <ProgressBar style={{float: "left", height: "80px", width: "100%", marginTop: "-80px", opacity:"15%", borderRadius: "3rem"}}>
                <ProgressBar striped variant="success" now={GetPercentage("Qatar", "Ecuador", 1)} key={1} />
                <ProgressBar variant="warning" now={GetPercentage("Qatar", "Ecuador", 0.5)} key={2} />
                <ProgressBar striped variant="danger" now={GetPercentage("Qatar", "Ecuador", 0)} key={3} />
            </ProgressBar>
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
            <h4 style={{display: "inline", marginRight: "50px"}}>{GetPercentage("England", "Iran", 1)}%</h4>
            <p>Khalifa International Staidum</p>
            <ProgressBar style={{float: "left", height: "80px", width: "100%", marginTop: "-80px", opacity:"15%", borderRadius: "3rem"}}>
                <ProgressBar striped variant="success" now={GetPercentage("England", "Iran", 1)} key={1} />
                <ProgressBar variant="warning" now={GetPercentage("England", "Iran", 0.5)} key={2} />
                <ProgressBar striped variant="danger" now={GetPercentage("England", "Iran", 0)} key={3} />
            </ProgressBar>
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
            <h4 style={{display: "inline", marginLeft: "20px"}}>{GetPercentage("USA", "Wales", 1)}%</h4>
            <p>Al Rayyan Staidum</p>
            <ProgressBar style={{float: "left", height: "80px", width: "100%", marginTop: "-80px", opacity:"15%", borderRadius: "3rem"}}>
                <ProgressBar striped variant="success" now={GetPercentage("USA", "Wales", 1)} key={1} />
                <ProgressBar variant="warning" now={GetPercentage("USA", "Wales", 0.5)} key={2} />
                <ProgressBar striped variant="danger" now={GetPercentage("USA", "Wales", 0)} key={3} />
            </ProgressBar>
        </div>
        </Col>
       </Row>
      </Container> 
    </Container>
  );
}
export default Upcoming;