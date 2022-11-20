import {React, useRef, useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/soccer.png";
import Particle from "../Particle";
import Home2 from "./projection";
import Type from "./Type";
import Button from 'react-bootstrap/Button';
import Upcoming from "./upcoming";


function callHttp() { 
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://172.30.37.67:3000/?teamone=Scotland&teamtwo=Scotland')
       .then((res) => res.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
       
  }, 
  []);
  return (posts)
}

function Home() {
  
  
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
              
              <Button variant="primary" >Get Started</Button>
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
          
            
          
          </Col> 
            
          </Row>
        </Container>
       
      </Container>
      < Home2  /> 
      < Upcoming /> 
    </section>
  );
  
  
  
}


export default Home;
