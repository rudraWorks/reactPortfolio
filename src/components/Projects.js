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
  background:#cccccc;
  width:100%;
  cursor:pointer;
  margin-bottom:10px;
  margin-top:10px;
  padding:10px;
  &:hover{
    background:#808080;
  }
  font-size:20px;
`
const BoxDiv = styled.div`
  background:#999999;

  display:flex;
  flex-direction:column;
  width:100%;
  padding:5px;
  margin-bottom:30px;
  // border:1px solid black;
`
const InnterBoxDiv = styled.div`
  background:#808080;
  display:flex;
  flex-direction:column;
  width:100%;
  padding:5px;
  margin-bottom:10px;
  // border:1px solid black;
`
const Row = styled.div`
  background:#cccccc;
  margin:3px;
  padding:3px;
  // border:1px solid black;
`

const about = ( 
  <>
  <BoxDiv>
    <h1 style={{textAlign:'center'}}>About</h1>
    <Row>
      <img style={{maxWidth:'100px'}} src='https://rudrapratap.netlify.app/assests/bSocialLogo.PNG'></img>
</Row>
    <Row>beSocial is a social media cum blogging platform</Row>
    <Row>Users can share posts (including images)</Row>
    <Row> Users can change their display picture (dp)</Row>
    <Row>Users can follow/unfollow other users</Row>
    <Row>Logged in users, can like and comment on posts</Row>
    <Row>Users can search other users by their user id</Row>
    <Row>Users can update their bio, name, age etc. (basic info)</Row>
    <Row>Users can't share a post having profane words</Row>
  </BoxDiv>

  <BoxDiv>
  <h1 style={{textAlign:'center'}}>Tech Stack</h1>
  <InnterBoxDiv>
    <h2>Backend</h2>
    <Row>Nodejs</Row>
    <Row>Expressjs</Row>
    <Row>Mongoose (ORM)</Row>
    <Row>EJS (Template Engine)</Row>
  </InnterBoxDiv>
  <InnterBoxDiv>
    <h2>Frontend</h2>
    <Row>HTML</Row>
    <Row>CSS</Row>
    <Row>Javascript</Row>
  </InnterBoxDiv>
  <InnterBoxDiv>
    <h2>Database</h2>
    <Row>Mongodb</Row>
  </InnterBoxDiv>
  <InnterBoxDiv>
    <h2>User Authentication</h2>
    <Row>Jsonwebtoken</Row>
  </InnterBoxDiv>
  
  <InnterBoxDiv>
    <h2>Image Manipulation</h2>
    <Row>Multer</Row>
    <Row>Sharp</Row>
  </InnterBoxDiv>
  <InnterBoxDiv>
    <h2>Other NPM Libraries</h2>
    <Row>Moment (for time manipulation)</Row>
    <Row>cookie-parser (for parsing cookies of loggedin users)</Row>
    <Row>bad-words (to check for profanity inside posts)</Row>
    <Row>dot-env (to manage jwt signatures and Mongodb Atlas cloud db url)</Row>
  </InnterBoxDiv>
  <InnterBoxDiv>
    <h2>Tools</h2>
    <Row>Github (to host the project online)</Row>
    <Row>Git (for version controlling)</Row>
  </InnterBoxDiv>
  <InnterBoxDiv>
    <h2>Deployment</h2>
    <Row>Render.com</Row>
  </InnterBoxDiv>


  </BoxDiv>
  <BoxDiv>
  <h1 style={{textAlign:'center'}}>Snapshots</h1>
  <Row>
    <img style={{width:'100%'}} src='https://rudrapratap.netlify.app/assests/besocial/homepage.PNG'></img>
  </Row>
  <Row>
    <img style={{width:'100%'}} src='https://rudrapratap.netlify.app/assests/besocial/post1.PNG'></img>
  </Row>
  <Row>
    <img style={{width:'100%'}} src='https://rudrapratap.netlify.app/assests/besocial/user1.PNG'></img>
  </Row>
  </BoxDiv>


  </>


)

const ProjectSection = styled.div`

  padding:20px;
  background:#999999;
  width:80%;
  margin-bottom:40px;
`

function Projects() {
  const [show, setShow] = useState(false)
  const [project, setProject] = useState({ projectName: 'beSocial', projectDescription: 'it is a social media site' })

  return (
    <ProjectsContainer>
      <Modal isShow={show} close={() => setShow((p) => !p)} title={project.projectName} about={about} ></Modal>

      <ProjectSection>
        <h1>Nodejs Projects</h1>
        <Project onClick={() => setShow(true)}>beSocial</Project>
        <Project onClick={() => setShow(true)}>liveType</Project>
        <Project onClick={() => setShow(true)}>typeMaster</Project>
        <Project onClick={() => setShow(true)}>Live Chat Application</Project>
        <Project onClick={() => setShow(true)}>Book Management System</Project>
        <Project onClick={() => setShow(true)}>Weather App</Project>
      </ProjectSection>

     
      <ProjectSection>
        <h1>DSA Visualizations</h1>
        <Project onClick={() => setShow(true)}>beSocial</Project>
        <Project onClick={() => setShow(true)}>beSocial</Project>
        <Project onClick={() => setShow(true)}>beSocial</Project>
        <Project onClick={() => setShow(true)}>beSocial</Project>
      </ProjectSection>

    </ProjectsContainer>
  )
}

export default Projects