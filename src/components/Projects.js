import React from 'react'
import { useState } from 'react'
import Modal from '../overlays/Modal'
import styled from 'styled-components'

const ProjectsContainer = styled.div`

      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      padding-top:30px;
`

const ProjectSection = styled.div`

  padding:10px;
  width:92%;
  margin-bottom:40px;
  color:black;
  font-weight:bolder;
  border-radius:20px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:lightgray;
`

const Project = styled.div`
  // background:rgba(98,109,230,1);
  background:darkgray;
  width:90%;
  cursor:pointer;
  margin-bottom:5px;
  margin-top:5px;
  padding:2px;
  padding-left:10px;
  padding-right:10px;
  &:hover{
    // background:rgba(108,119,250,1);
    background:gray;
  }
  font-size:18px;
  border-radius:5px;
  font-weight:400;
`

/* ------- -------*/
const BoxDiv = styled.div`
  background:#3b49df;
  border-radius:20px;
  color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
  width:95%;
  padding-top:30px;
  padding-bottom:30px;
  margin-bottom:30px;
  // border:1px solid black;
  text-align:left;
`
const InnterBoxDiv = styled.div`
background:rgba(98,109,230,1);
display:flex;

  flex-direction:column;
  width:90%;
  padding:5px;
  margin-bottom:10px;
  // border:1px solid black;
  align-items:center;
  text-align:left;
  border-radius:10px;
`
const Row = styled.div`
background:rgba(108,119,250,1);
margin:3px;
  padding:10px;
  width:90%;
  border-radius:10px;
`

const about = ( 
  <>
  <BoxDiv>
    <InnterBoxDiv>
        <h1 style={{textAlign:'center'}}>About</h1>
        <br></br>
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
    </InnterBoxDiv>
  </BoxDiv>

  <BoxDiv>
  <h1 style={{textAlign:'left'}}>Tech Stack</h1>
  <br></br>
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
  <h1 style={{textAlign:'left'}}>Snapshots</h1>
  <br></br>
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


function Projects() {
  const [show, setShow] = useState(false)
  const [project, setProject] = useState({ projectName: 'beSocial', projectDescription: 'it is a social media site' })

  return (
    <>
          <Modal isShow={show} close={() => setShow((p) => !p)} title={project.projectName} about={about} ></Modal>
          <ProjectsContainer>
            <ProjectSection>
              <h2>Nodejs Projects</h2>
              <Project onClick={() => setShow(true)}>beSocial</Project>
              <Project onClick={() => setShow(true)}>liveType</Project>
              <Project onClick={() => setShow(true)}>typeMaster</Project>
              <Project onClick={() => setShow(true)}>Live Chat Application</Project>
              <Project onClick={() => setShow(true)}>Book Management System</Project>
              <Project onClick={() => setShow(true)}>Weather App</Project>
            </ProjectSection>

          
            <ProjectSection>
              <h2>DSA Visualizations</h2>
              <Project onClick={() => setShow(true)}>beSocial</Project>
              <Project onClick={() => setShow(true)}>beSocial</Project>
              <Project onClick={() => setShow(true)}>beSocial</Project>
              <Project onClick={() => setShow(true)}>beSocial</Project>
            </ProjectSection>

          </ProjectsContainer>
    </>
  )
}

export default Projects