import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import logo from "./NASA_logo.png"


function App() {
   const [images, setImages]=useState([])
  const [currentIndex, setCurrenIndex]=useState(0)
  const [date, setDate]=useState('')
  const [titles, setTitles]=useState('')
  const [text, setText]=useState('')

 

  if(currentIndex<0){
    setCurrenIndex(currentIndex+1)
  }else if(currentIndex>=5){
    setCurrenIndex(0)
  }

  
  
   useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=8XyWIvHWIBFhPAeFhGzwXa5jsXfVAaYZFMhad1lO&count=5
    `)
    .then(res =>{
     
        setImages(res.data)
        setDate(res.data)
        setTitles(res.data)
        setText(res.data)
       console.log(res.data)
    })
    .catch(err => console.log(err))
  }, [])
  return (
    
    <div className="App">
      <header>
        <nav>
          <div className='head'>
            <img className="logo" src={logo} />
            <input type="text" placeholder="Search.."></input>

          </div>
        </nav>
      </header>
         <h1>PHOTO OF THE DAY</h1>
         
      <img className='Main' src={images[currentIndex]&&images[currentIndex].hdurl}/>
      <button className='left-button' onClick={()=>{
        setCurrenIndex(currentIndex-1)
      }}>left</button>
      <button className='right-button'onClick={()=>{
        setCurrenIndex(currentIndex+1)
      }} >right</button>
      <p className='date' >{date[currentIndex]&&date[currentIndex].date}</p>
      <h2>{titles[currentIndex]&&titles[currentIndex].title}</h2>
      <p>{text[currentIndex]&&text[currentIndex].explanation}</p>
     
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
     
    </div>
  );
}

export default App;
