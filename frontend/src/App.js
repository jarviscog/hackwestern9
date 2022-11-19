
import React, { useState } from "react";
import './App.css';
import {useRef} from 'react';

const styles = {
   header: {
      backgroundImage:  "background.jpg"
    }

}
function StartBtn(props) { 
       return <button> {props.text} </button>
}




const App = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  } 
   
  const name = ""
  const issomeone = true; 

  return (
    <div  className="App"  >
        <div style = { styles.header}>  
        
        </div>
        <h1> Hello, Welcome to SportzML{issomeone ? name : 'someone'}</h1>
        <button onClick={handleClick}> Scroll to element</button>
        <div className = "search"> 
        <input placeholder = "Search teams" /> 
        </div>

        
        
        
        <div ref={ref}>Some content here</div>




    </div>
    
  );
}






export default App;
