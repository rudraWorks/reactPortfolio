import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`

  padding:30px;
`

const Span = styled.div`
  width:100px;
  height:30px;
  background:#3a7ca5;
  color:white;
  padding:5px;
  border-radius:10px;
  margin-right:5px;
  margin-top:5px;
  cursor:default;
  justify-content:center;
  display:flex;
  align-items:center;
  min-width:fit-content;
`

const Div = styled.div`
  display:flex;
  flex-wrap:wrap;
`

function About() {
  return (
    <AboutContainer>

    <div style={{padding:'30px',background:'lightgray'}}>
        <h1>Education</h1>
        <br></br>
        <h2>Graduation</h2>
        Madan Mohan Malaviya University of Technology, Gorakhpur, Uttar Pradesh
        <br></br>
        2020 - 2024
        <br></br>
        CGPA 8.1

        <br></br><br></br>
        <h2>Intermediate</h2>
        Kendriya Vidyalaya Mughalsarai, Chandauli, Uttar Pradesh
        <br></br>
        2017-2019
        <br></br>
        Percentage: 90.4

        <br></br><br></br>
        <h2>Matriculation</h2>
        Kendriya Vidyalaya Mughalsarai, Chandauli, Uttar Pradesh
        <br></br>
        2013-2017
        <br></br>
        CGPA 10
    </div>
    
    <br></br><br></br>
    <div  style={{padding:'30px',background:'lightgray'}}>

        <h1>Tools and Technologies</h1>
        <br></br>

        <h2>Languages</h2>
        <Div>
          <Span>C++</Span>  <Span>Java</Span>
          <Span>Python</Span> <Span>Javascript</Span>
          <Span>HTML</Span> <Span>CSS</Span>
        </Div>

        <br></br>
        <h2>Frameworks</h2>
        <Div>
          <Span>Nodejs</Span>  <Span>Expressjs</Span>
          <Span>Reactjs</Span> <Span>jQuery</Span>
         <Span>Bootstrap</Span>
        </Div>

        <br></br>
        <h2>Tools</h2>
        <Div>
          <Span>    Git</Span>  <Span>MySQL</Span>
          <Span>Sequelize (ORM)</Span> <Span>Mongoose (ODM)</Span>
        </Div>
    

        <br></br>
        <h2>Databases</h2>
        <Div>
          <Span>    mySQL</Span>  <Span>MongoDB</Span>
        </Div>
    
      
    </div>

    </AboutContainer>
  )
}

export default About