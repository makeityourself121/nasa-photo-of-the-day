import React from 'react'
import logo from "./NASA_logo.png"
import styled from "styled-components"

export default function Header(props){

    const StyleDiv= styled.nav`
    
    color:#6495ED;
    `
    return(
        <div>
            <nav>
              <div className="head">
               <img className="logo" src={logo} alt={'log'}/>
                <input type="text" placeholder="Search..."></input>
             </div>
            </nav>
            
        </div>
    )
}