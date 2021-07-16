import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Photo from './Photo'
import Header from './Header'
import Details from "./Details";


function App() {
   const [data, setData]=useState([])
   useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=8XyWIvHWIBFhPAeFhGzwXa5jsXfVAaYZFMhad1lO&count=5
    `)
    .then(res =>{
        setData(res.data)  
    })
    .catch(err => console.log(err))
  }, [])
       
        
  return (
    
    <div className="App">
     <Header/>
     <h1>Photo Of The Day</h1>
         <Photo images={data}/>
        
     
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
     
    </div>
  );
}

export default App;
