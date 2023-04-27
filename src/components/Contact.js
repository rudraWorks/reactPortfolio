import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width:50px;
  height:50px;
  margin:10px;
`
const Div = styled.div`
  padding:20px;
  margin:10px;
`
const InnerDiv = styled.div`
  margin:20px;
  // background:gray;
  border:1px solid black;
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  word-break:break-all;
  padding:20px;
`
function Contact() {
  return (
    <Div>
      
      <InnerDiv>
          <Img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></Img>
          <a href='https://www.linkedin.com/in/merudra/' target='_blank'> <h3>https://www.linkedin.com/in/merudra/</h3></a>
      </InnerDiv>
      <InnerDiv>
        <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1b7Zb4f7LTEWo6_1mtrkyokm7LmL7zA8-5iBJnC_6&s'></Img>
        <a href='mailto:merudra.official@gmail.com' target='_blank'> <h3>merudra.official@gmail.com</h3></a>
      </InnerDiv>
      <InnerDiv>
         <Img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'></Img>
         <a href='https://www.instagram.com/rp_singh_1008/' target='_blank'> <h3>https://www.instagram.com/rp_singh_1008/</h3></a>
      </InnerDiv>

    </Div>
  )
}

export default Contact