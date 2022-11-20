import {React, useRef, useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';


function Home2() {
  
  const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch('http://172.30.37.67:3000/?teamone=${value}&teamtwo=Scotland')
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
    
    const [value,setValue] = useState('');
    const [value2,setValue2] = useState('');

    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
    const handleSelect2=(e)=>{
      console.log(e);
      setValue2(e)
    }
  
  

  return (
    
    <Container fluid className="home-about-section" id="about">
    {/* =========== The Title */}
      <Container>
        <Row>
        <div className = "container"> 
       <h1 style ={{color:"white"}}> CHOOSE TWO TEAMS TO SEE THE PREDICTED OUTCOME </h1>
       </div>
       </Row>
      </Container> 
      {/* =========== The Dropdowns  */}
      <Container>
      <Row>
      <Col className = "projBlock">
     
      <div>
        <Dropdown onSelect={handleSelect} >
        <Dropdown.Toggle  variant="success" id="dropdown-menu">
          Country 1
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
          <Dropdown.Item eventKey="Canada" >Canada</Dropdown.Item>
          <Dropdown.Item eventKey="USA" >USA</Dropdown.Item>
          <Dropdown.Item eventKey="Argentina" >Argentina</Dropdown.Item>
          <Dropdown.Item eventKey="Ecuador">Ecuador</Dropdown.Item>
          <Dropdown.Item eventKey="Qatar">Qatar</Dropdown.Item>
          <Dropdown.Item eventKey="Senegal">Senegale</Dropdown.Item>
          <Dropdown.Item eventKey="Netherlands"> Netherlands</Dropdown.Item>
          <Dropdown.Item eventKey="England"> England</Dropdown.Item>
          <Dropdown.Item eventKey="Iran"> Iran</Dropdown.Item>
          <Dropdown.Item eventKey="Wales"> Wales</Dropdown.Item>
          <Dropdown.Item eventKey="Saudi Arabia"> Saudi Arabia</Dropdown.Item>
          <Dropdown.Item eventKey="Mexico"> Mexico</Dropdown.Item>
          <Dropdown.Item eventKey="Poland"> Poland</Dropdown.Item>
          <Dropdown.Item eventKey="France"> France</Dropdown.Item>
          <Dropdown.Item eventKey="Australia"> Australia</Dropdown.Item>
          <Dropdown.Item eventKey="Denmark"> Denmark</Dropdown.Item>
          <Dropdown.Item eventKey="Tunisia"> Tunisia</Dropdown.Item>
          <Dropdown.Item eventKey="Spain"> Spain</Dropdown.Item>
          <Dropdown.Item eventKey="Costa Rica"> Costa Rica</Dropdown.Item>
          <Dropdown.Item eventKey="Germany"> Germany</Dropdown.Item>
          <Dropdown.Item eventKey="Japan"> Japan</Dropdown.Item>
          <Dropdown.Item eventKey="Morocco"> Morocco</Dropdown.Item>
          <Dropdown.Item eventKey="Croatia"> Croatia</Dropdown.Item>
          <Dropdown.Item eventKey="Brazil"> Brazil</Dropdown.Item>
          <Dropdown.Item eventKey="Serbia"> Serbia</Dropdown.Item>
          <Dropdown.Item eventKey="Switzerland"> Switzerland</Dropdown.Item>
          <Dropdown.Item eventKey="Cameroon"> Cameroon</Dropdown.Item>
          <Dropdown.Item eventKey="Portugal"> Portugal</Dropdown.Item>
          <Dropdown.Item eventKey="Ghana"> Ghana</Dropdown.Item>
          <Dropdown.Item eventKey="Uruguay"> Uruguay</Dropdown.Item>
          <Dropdown.Item eventKey=" South Korea">  South Korea</Dropdown.Item>
          

        </Dropdown.Menu>
      </Dropdown>
      </div>

      </Col>
      <Col className = "projBlock">  
      <div>
        <Dropdown onSelect={handleSelect2} >
        <Dropdown.Toggle variant="success" id="dropdown-menu">
        Country 2
        </Dropdown.Toggle>

        <Dropdown.Menu>
        
          <Dropdown.Item eventKey="Canada" >Canada</Dropdown.Item>
          <Dropdown.Item eventKey="USA" >USA</Dropdown.Item>
          <Dropdown.Item eventKey="Argentina" >Argentina</Dropdown.Item>
          <Dropdown.Item eventKey="Ecuador">Ecuador</Dropdown.Item>
          <Dropdown.Item eventKey="Qatar">Qatar</Dropdown.Item>
          <Dropdown.Item eventKey="Senegal">Senegale</Dropdown.Item>
          <Dropdown.Item eventKey="Netherlands"> Netherlands</Dropdown.Item>
          <Dropdown.Item eventKey="England"> England</Dropdown.Item>
          <Dropdown.Item eventKey="Iran"> Iran</Dropdown.Item>
          <Dropdown.Item eventKey="Wales"> Wales</Dropdown.Item>
          <Dropdown.Item eventKey="Saudi Arabia"> Saudi Arabia</Dropdown.Item>
          <Dropdown.Item eventKey="Mexico"> Mexico</Dropdown.Item>
          <Dropdown.Item eventKey="Poland"> Poland</Dropdown.Item>
          <Dropdown.Item eventKey="France"> France</Dropdown.Item>
          <Dropdown.Item eventKey="Australia"> Australia</Dropdown.Item>
          <Dropdown.Item eventKey="Denmark"> Denmark</Dropdown.Item>
          <Dropdown.Item eventKey="Tunisia"> Tunisia</Dropdown.Item>
          <Dropdown.Item eventKey="Spain"> Spain</Dropdown.Item>
          <Dropdown.Item eventKey="Costa Rica"> Costa Rica</Dropdown.Item>
          <Dropdown.Item eventKey="Germany"> Germany</Dropdown.Item>
          <Dropdown.Item eventKey="Japan"> Japan</Dropdown.Item>
          <Dropdown.Item eventKey="Morocco"> Morocco</Dropdown.Item>
          <Dropdown.Item eventKey="Croatia"> Croatia</Dropdown.Item>
          <Dropdown.Item eventKey="Brazil"> Brazil</Dropdown.Item>
          <Dropdown.Item eventKey="Serbia"> Serbia</Dropdown.Item>
          <Dropdown.Item eventKey="Switzerland"> Switzerland</Dropdown.Item>
          <Dropdown.Item eventKey="Cameroon"> Cameroon</Dropdown.Item>
          <Dropdown.Item eventKey="Portugal"> Portugal</Dropdown.Item>
          <Dropdown.Item eventKey="Ghana"> Ghana</Dropdown.Item>
          <Dropdown.Item eventKey="Uruguay"> Uruguay</Dropdown.Item>
          <Dropdown.Item eventKey=" South Korea">  South Korea</Dropdown.Item>

          
        </Dropdown.Menu>
      </Dropdown>
      </div>

      </Col>
       </Row>
        <h1 style={{color:"white"}}>You selected {value}</h1>
        <h1 style={{color:"white"}}>You selected {value2}</h1>
      </Container> 

    </Container>
  );
}
export default Home2;
