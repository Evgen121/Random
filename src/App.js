import React, {useState, useEffect}from "react"
import "./App.css"


const API_URL= 'https://api.chucknorris.io/jokes/random';

function App() {
  const [text, setJoke]=useState('');

      const generateText=()=>{
        fetch(API_URL)
        .then(res=>res.json())
        .then((text)=>{
        setJoke(text.value) })
      }


      useEffect(()=>{
      generateText()
      },[])

  return (
    <div className="container">
   <h1>Hello <span>Chuck Norris</span></h1>
        {/* <p>{text}</p> */}
        <p dangerouslySetInnerHTML={{__html:text}}/>
        <button onClick={generateText}>Push</button>
          </div>
  );
}

export default App;
