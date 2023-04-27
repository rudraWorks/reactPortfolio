import React from 'react'
import { useState } from 'react'
import Modal from '../overlays/Modal'
import styled from 'styled-components'

const ProjectsContainer = styled.div`

      // background:pink;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      padding-top:30px;
`
const Project = styled.div`
  background:#87ceeb;
  background:#808080;
  color:white;
  width:100%;
  cursor:pointer;
  margin-bottom:10px;
  margin-top:10px;
  padding:10px;
  &:hover{
    background:#666666;
  }
  font-size:20px;
`
const Line = styled.div`
  width:100%;
  background:black;
  height:1px;
`

const about = (
  <>
    <img style={{maxWidth:'100%',minWidth:'200px'}} src='https://rudrapratap.netlify.app/assests/bSocialLogo.PNG'></img>
    <ul>
      <li> beSocial is a social media cum blogging platform. </li>
      <li> Users can share posts (including images). </li>
      <li> Users can change their display picture (dp).</li>
      <li> Users can follow/unfollow other users.</li>
      <li>Logged in users, can like and comment on posts. </li>
      <li> Users can search other users by their user id.</li>
      <li>Users can update their bio, name, age etc. (basic info).</li>
      <li>Users can't share a post having profane words. </li>
    </ul>
    <br></br>
    <h2>Tech Stack</h2>
    <br></br>
    <ul>
      <li><b>Backend</b>
        <ul style={{marginLeft:'30px'}}>
          <li>Nodejs</li>
          <li>Expressjs</li>
          <li>Mongoose (ORM)</li>
          <li>EJS (Template Engine)</li>
        </ul>
      </li>
    </ul>

    <br></br>
    <ul>
      <li><b>Frontend</b>
        <ul style={{marginLeft:'30px'}}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
      </li>
    </ul>

    <br></br>
    <ul>
      <li><b>Database</b>
        <ul style={{marginLeft:'30px'}}>
          <li>Mongodb</li>
        </ul>
      </li>
    </ul>

    <br></br>
    <ul>
      <li><b>User Authentication </b>
        <ul style={{marginLeft:'30px'}}>
          <li>Jsonwebtoken (JWT)</li>
        </ul>
      </li>
    </ul>

    <br></br>
    <ul>
      <li><b>Image Manipulation</b>
        <ul style={{marginLeft:'30px'}}>
          <li>Multer</li>
          <li>Sharp</li>
        </ul>
      </li>
    </ul>

    <br></br>
    <ul>
      <li><b>Other NPM Libraries</b>
        <ul style={{marginLeft:'30px'}}>
          <li>Moment (for time manipulation)</li>
          <li>cookie-parser (for parsing cookies of loggedin users)</li>
          <li>bad-words (to check for profanity inside posts)</li>
          <li>dot-env (to manage jwt signatures and Mongodb Atlas cloud db url)</li>
        </ul>
      </li>
    </ul>

    <br></br>
    <ul>
      <li><b>Tools</b>
        <ul style={{marginLeft:'30px'}}>
          <li>Github (to host the project online)</li>
          <li>Git (for version controlling)</li>
        </ul>
      </li>
    </ul>

    <br></br>
    <h2>Deployment</h2>
    <br></br>
    <li>Render.com</li>

    
  </>


)

function Projects() {
  const [show, setShow] = useState(false)
  const [project, setProject] = useState({ projectName: 'beSocial', projectDescription: 'it is a social media site' })

  return (
    <ProjectsContainer>
      <Modal isShow={show} close={() => setShow((p) => !p)} title={project.projectName} about={about} ></Modal>

      <div style={{padding:'30px',background:'lightgray',width:'80%'}}>
        <h1>Nodejs Projects</h1>
        <Project onClick={() => setShow(true)}>beSocial</Project>
        <Project onClick={() => setShow(true)}>beSocial</Project>
        <Project onClick={() => setShow(true)}>beSocial</Project>
        <Project onClick={() => setShow(true)}>beSocial</Project>
      </div>

      <br></br>
      <div style={{padding:'30px',background:'lightgray',width:'80%'}}>
        <h1>DSA Visualizations</h1>
        <Project onClick={() => setShow(true)}>beSocial</Project>
        <Project onClick={() => setShow(true)}>beSocial</Project>
        <Project onClick={() => setShow(true)}>beSocial</Project>
        <Project onClick={() => setShow(true)}>beSocial</Project>
      </div>
      <br></br>

    </ProjectsContainer>
  )
}

export default Projects