import React from 'react'
import styled from 'styled-components'
import reactDom from 'react-dom'


let ModalContainer = styled.div`
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-52%);
    width:70%;

    height:85vh;
    z-index:10;
    border-radius:20px;

    @media only screen and (max-width: 600px){
        width:90%;
    }
`

let Overlay = styled.div`
    position:fixed;
    top:0; 
    left:0;
    bottom:0;
    right:0;
    background-color:rgba(0,0,0,.45);
    z-index:10;
    
`
const About = styled.div`
    height:100%;
    background:whitesmoke; 
    overflow-y:scroll;
    padding:20px;
    display:flex;
    align-items:center;
    flex-direction:column;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;

`
const Title = styled.div`

    font-size:20px;
    margin-left:20px;
`
const Header = styled.div`
    display:flex;
    background:#26619c;
    width:100%;
    color:white;
    align-items:center;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
`
const Button = styled.button`
    width:40px;
    height:40px;
    margin-left:auto;
    background:transparent;
    color:red;
    cursor:pointer;
    border:none;
    font-weight:bolder;
    font-size:20px;
`
function Modal({isShow,close,title,about}) {

  if(!isShow)return null 
  document.getElementsByTagName('body')[0].style.overflow="hidden"
  return reactDom.createPortal(
    <>
        <Overlay></Overlay>
        <ModalContainer>
            <Header>
              <Title>{title}</Title>
              <Button onClick={()=>{  document.getElementsByTagName('body')[0].style.overflow="scroll";close()}}>🗙</Button>
            </Header>

            <About>
                 {about}
            </About>
        </ModalContainer>
    </>,
    document.getElementById('portal')
  )
}

export default Modal