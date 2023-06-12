import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width:20px;
  height:20px;
  margin:10px;
`
const Div = styled.div`
  padding:20px;
  margin-top:10px;
`
const InnerDiv = styled.div`
  margin-bottom:20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    
  &:hover {
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  word-break:break-all;
  padding:10px;
`
function Contact() {
  return (
    <Div>
      
      <InnerDiv>
          <Img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></Img>
          <a href='https://www.linkedin.com/in/merudra/' target='_blank'> <h4>https://www.linkedin.com/in/merudra/</h4></a>
      </InnerDiv>
      <InnerDiv>
        <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1b7Zb4f7LTEWo6_1mtrkyokm7LmL7zA8-5iBJnC_6&s'></Img>
        <a href='mailto:merudra.official@gmail.com' target='_blank'> <h4>merudra.official@gmail.com</h4></a>
      </InnerDiv>
      <InnerDiv>
         <Img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'></Img>
         <a href='https://www.instagram.com/rp_singh_1008/' target='_blank'> <h4>https://www.instagram.com/rp_singh_1008/</h4></a>
      </InnerDiv>

    </Div> 
  )
}

export default Contact