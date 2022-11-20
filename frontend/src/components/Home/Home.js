import {React, useRef, useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/soccer.png";
import Particle from "../Particle";
import Home2 from "./projection";
import Type from "./Type";

import Upcoming from "./upcoming";


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
        <Container>
        
        </Container>
       
      </Container>
     
      < Home2  /> 
      < Upcoming /> 
      
      <div  style = {{height:"100px"} }></div>
    </section>
  );
  
  
  
}


export default Home;
