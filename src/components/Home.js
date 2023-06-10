import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`

  padding-top:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding-bottom:30px;
`

const Left = styled.div`
  width:20%;
  // background:yellow;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Right = styled.div`
  width:80%;
  // background:red;
  font-size:20px;
  padding:10px;
  text-align:justify;
`
function Home() {
  return (
    <HomeContainer>
      <Left>
          <img style={{width:'150px',borderRadius:'10%'}} src='https://rudrapratap.netlify.app/assests/mebg.png'></img>
      </Left>
      <Right>
          Exploring web development, creating cool stuffs with Python and programming is one of the most exciting things I've done. It feels like the perfect blend of fields to really understand how computers work and how they can be manipulated to create something truly magical.
          <br></br><br></br>
          I am currently studying my third year of Bachelor of Information Technology at Madan Mohan Malaviya University of Technology. In my spare time, I try to learn web technology related stuffs like nodejs, reactjs, express etc. I love to make real world projects that can help people in their daily lives. I run a blog where I post Data Structure and Algorithms related things. I also love to make simulations of algorithms.
          <br></br><br></br>
          Luckily, I enjoy it all! I find it particularly intriguing how it all ties together and that only makes me more motivated to dive deeper. I believe I am capable enough to provide value to organizations in software/IT field.
      </Right>
    </HomeContainer>
  )
}

export default Home