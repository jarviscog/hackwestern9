
import React, { useState } from "react";
import './App.css';

function Alert () { 
    alert("Clicked") //Alert user
  }
  
const view = {
    blue: {
      default: "#8C51FF",
      hover: "##5e28c7" },
  };
  
function StartBtn(props) { 
       return <button onClick= {Alert}> {props.text} </button>
}



const App = () => {
   
  const name = ""
  const issomeone = true; 

  return (
    <div  className="App" >
        
        
        <h1> Hello, Welcome to SportzML{issomeone ? name : 'someone'}</h1>
        <StartBtn text = "Click"/> 
        <div className = "search"> 
        <input placeholder = "Search teams" /> 
        </div>
    </div>
    
  );
}






export default App;
