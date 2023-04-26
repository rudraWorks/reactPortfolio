import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    width:100px;
    height:100px;
    background:tomato; 
    margin:20px;
`

function Card({children}) {
  return (
    <CardDiv>
        {children}
    </CardDiv>
  )  
}

export default Card