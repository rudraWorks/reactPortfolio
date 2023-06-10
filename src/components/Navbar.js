import React from 'react'
import Modal from '../overlays/Modal'
import styled from 'styled-components'

import { pageStateActions } from '../store/pageState'
import {useDispatch,useSelector} from 'react-redux'


const NavbarUI = styled.div`
    min-height:70px;
    width:100%;
    // background:#26619c; 
    background:#4f5055;
    color:white;
    display:flex;
    justify-content:center;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    padding-left:30px;
    padding-right:30px;
    flex-wrap:wrap;
    align-items:center;
    padding:10px;
    font-size:20px;
`

const NavButtons = styled.div`
    width:100px;
    height:100%;
    background:${props=>props.current?"#f5f5f5":"transparent"};
    display:flex;
    justify-content:space-around;
    align-items:center;
    cursor:pointer; 
    margin-left:8px;
    margin-right:8px;
    color:${props=>props.current?"black":"white"};
    padding:3px;
    font-weight:bolder;
    border-radius:5px;
`

function Navbar() {

  const dispatch = useDispatch()
  const pageObj = useSelector(state=>state.pageState) 
  return ( 
    <div>
        <NavbarUI>
            <NavButtons current={pageObj.home} onClick={()=>dispatch(pageStateActions.setHome())}>Home</NavButtons>
            <NavButtons current={pageObj.about} onClick={()=>dispatch(pageStateActions.setAbout())}>About</NavButtons>
            <NavButtons current={pageObj.projects} onClick={()=>dispatch(pageStateActions.setProjects())}>Projects</NavButtons>
            <NavButtons current={pageObj.certif} onClick={()=>dispatch(pageStateActions.setCertif())}>Certificates</NavButtons>
            <NavButtons current={pageObj.contact} onClick={()=>dispatch(pageStateActions.setContact())}>Contact</NavButtons>
            <NavButtons current={pageObj.blog} onClick={()=>dispatch(pageStateActions.setBlog())}>Blog</NavButtons>

        </NavbarUI>
    </div>
  )
}

export default Navbar