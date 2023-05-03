import React from 'react'
import nodejsImg from '../certificates/nodejs.jpg'
import styled from 'styled-components'
import algorthmicToolbox from '../certificates/algorithmic-toolbox.jpg'
import npteDSA from '../certificates/Nptel_algorithms_and_analysis.jpg'
import dsaUdemy from '../certificates/dsaUdemy.jpg'

const Img = styled.img`
    width:100%;
    max-width:1000px;
    border:1px solid black;
`
const ImgDiv = styled.div`
    width:90%;
    display:flex;
    justify-content:center;
    margin-bottom:30px;
`
const CertContainer = styled.div`
    margin-top:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`
function Certificates() {
  return (
    <CertContainer>
    
     
     <ImgDiv>
        <Img src={nodejsImg}></Img>
     </ImgDiv>
     <ImgDiv>
        <Img src={algorthmicToolbox}></Img>
     </ImgDiv>
     <ImgDiv>
        <Img src={npteDSA}></Img> 
     </ImgDiv>
     <ImgDiv>
        <Img src={dsaUdemy}></Img>
     </ImgDiv>

    </CertContainer>
  )
}

export default Certificates