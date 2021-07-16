import { useEffect, useState } from "react"
import React from 'react'
import styled from 'styled-components'
import Details from "./Details";

export default function Photo(props){
    const [currentIndex, setCurrenIndex]=useState(0)
    const {images}=props
useEffect(()=>{
  if(currentIndex<0){
    setCurrenIndex(currentIndex+1)
  }else if(currentIndex>=images.length){
    setCurrenIndex(0)
  }
},[currentIndex])

  const StyledImg=styled.div`
  img{
    transition: all 0.2s ease-in-out;
  } 
  button{
      color:red;
      border-radius: 50%;
      text-align: center;
      &:hover{
          background-color: royalblue;
      }
  }

  `

   
    return(
        <StyledImg>
            <img className='Main' src={images[currentIndex]&&images[currentIndex].hdurl} alt={images[currentIndex]&&images[currentIndex].titles}/>
      <button className='left-button' onClick={()=>{
        setCurrenIndex(currentIndex-1)
      }}>&#8249;</button>
      <button className='right-button'onClick={()=>{
        setCurrenIndex(currentIndex+1)
      }} >&#8250;</button>
       <Details date={images} titles={images} text={images} index={currentIndex}/>
        </StyledImg>
    )
}