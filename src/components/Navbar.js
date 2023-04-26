import React from 'react'
import Modal from '../overlays/Modal'
import styled from 'styled-components'

import { pageStateActions } from '../store/pageState'
import {useDispatch,useSelector} from 'react-redux'


const NavbarUI = styled.div`
    height:40px;
    width:100%;
    background:#26619c; 
    color:white;
    display:flex;
    justify-content:center;
`

const NavButtons = styled.div`
    width:100px;
    height:100%;
    background:${props=>props.current?"white":"transparent"};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer; 
    color:${props=>props.current?"black":"white"};

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
            <NavButtons current={pageObj.contact} onClick={()=>dispatch(pageStateActions.setContact())}>Contact</NavButtons>
        </NavbarUI>
    </div>
  )
}

export default Navbar