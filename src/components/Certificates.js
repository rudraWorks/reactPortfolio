import React,{useState} from 'react'
import nodejsImg from '../certificates/nodejs.jpg'
import styled from 'styled-components'
import algorthmicToolbox from '../certificates/algorithmic-toolbox.jpg'
import npteDSA from '../certificates/Nptel_algorithms_and_analysis.jpg'
import dsaUdemy from '../certificates/dsaUdemy.jpg'
import Modal from '../overlays/Modal'
import { useDispatch,useSelector } from 'react-redux'
import { modalStateActions } from '../store/modalState'
import { isMobile } from 'react-device-detect'

const Img = styled.img`
    width:100%;
    height:100%;
    cursor:pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`
const ImgDiv = styled.div`
    width:300px;
    height:200px;
    margin:10px;
`
const CertContainer = styled.div`
    display:flex;
    padding:20px;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:space-around;
`
function Certificates() {
   const dispatch = useDispatch()
   const modalOn = useSelector(state=>state.modalState)
   const [modalDetails,setModalDetails] = useState({title:'none',about:'none'})

  return (
    <CertContainer>
      <Modal isShow={modalOn.on} close={() =>  dispatch(modalStateActions.isOn())}  title={modalDetails.title} about={modalDetails.about} ></Modal>
 
     <ImgDiv onClick={() => {  setModalDetails({title:"Nodejs",about:<img src={nodejsImg} style={isMobile?{width:"100%"}:{height:"100%"}}></img>}) ;dispatch(modalStateActions.isOn())}}>
        <Img src={nodejsImg}></Img>
     </ImgDiv>

     <ImgDiv onClick={() => {  setModalDetails({title:"Algorithmic Toolbox",about:<img src={algorthmicToolbox} style={isMobile?{width:"100%"}:{height:"100%"}}></img>}) ;dispatch(modalStateActions.isOn())}}>
        <Img src={algorthmicToolbox}></Img>
     </ImgDiv>

     <ImgDiv  onClick={() => {  setModalDetails({title:"NPTEL DSA",about:<img src={npteDSA} style={isMobile?{width:"100%"}:{height:"100%"}}></img>}) ;dispatch(modalStateActions.isOn())}}>
        <Img src={npteDSA}></Img> 
     </ImgDiv>


     <ImgDiv  onClick={() => {  setModalDetails({title:"DSA Udemy",about:<img src={dsaUdemy} style={isMobile?{width:"100%"}:{height:"100%"}}></img>}) ;dispatch(modalStateActions.isOn())}}>
        <Img src={dsaUdemy}></Img>
     </ImgDiv>

    </CertContainer>
  )
}

export default Certificates