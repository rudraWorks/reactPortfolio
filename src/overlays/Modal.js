import React from 'react'
import styled from 'styled-components'
import reactDom from 'react-dom'

const MODAL_STYLES = {
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)',
    width:'90%',
    height:'90%',
    zIndex:10,
}

let Overlay = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color:rgba(0,0,0,.75);
    z-index:10;
`
const About = styled.div`
    height:100%;
    background:white;
    overflow-y:scroll;
    padding:30px;
`
const Title = styled.div`

    font-size:30px;
    margin-left:20px;
`
const Header = styled.div`
    display:flex;
    background:#26619c;
    width:100%;
    color:white;
    align-items:center;
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
  
`
function Modal({isShow,close,title,about}) {

  if(!isShow)return null 
  document.getElementsByTagName('body')[0].style.overflow="hidden"

  return reactDom.createPortal(
    <>
        <Overlay></Overlay>
        <div style={MODAL_STYLES}>
            <Header>
              <Title>{title}</Title>
              <Button onClick={()=>{  document.getElementsByTagName('body')[0].style.overflow="scroll";close()}}>X</Button>
            </Header>

            <About>
                {about}
            </About>
        </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal