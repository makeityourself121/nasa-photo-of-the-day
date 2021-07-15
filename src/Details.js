import { useState} from "react"
import React from 'react'

import styled from "styled-components"

export default function Details(props){
    
    const { date, titles , text, index}=props
    
    // useEffect(()=>{
    //     if(currentIndex<0){
    //       setCurrenIndex(currentIndex+1)
    //     }else if(currentIndex>=date.length){
    //       setCurrenIndex(0)
    //     }
    //   },[currentIndex])
      const StyledDiv=styled.div`
      .date{
          color:#7FFF00;
      }
      h2{
          color: #000080;
      }

      .exp{
          color:#1E90FF;

      }
   

      `
return(
    <StyledDiv>
         <p className='date' >{date[index]&&date[index].date}</p>
      <h2>{titles[index]&&titles[index].title}</h2>
      <p className='exp'>{text[index]&&text[index].explanation}</p>
    </StyledDiv>
)
}