import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import loadingGif from '../images/loading-gif.gif'

const BlogDiv = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    margin-bottom:20px;
`

const Article = styled.div`

    border-radius:5px;
    margin:10px;
    padding:5px;
    cursor:pointer;

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`

function Blog() {

    const [articles,setArticles] = useState([])
    const [showLoader,setShowLoader] = useState(true)

    useEffect(   ()=> {
        
        async function loadArticles(){
            let res = await fetch('https://dev.to/api/articles?username=merudra754')
            let data = await res.json()
            setArticles(data)
            setShowLoader(false)
        }
        loadArticles()

    },[])

    return (
        <div style={{marginTop:"30px"}}> 
            <BlogDiv>

                {showLoader && <img src={loadingGif} style={{width:"100px",marginTop:"30px"}}></img>}

                {articles.map(item=><a href={item.url} target='_blank' style={{textDecoration:"none"}} ><Article key={Math.random()*Math.random()  }>
                    <img style={{width:"250px",borderRadius:"5px"}} src={item.social_image}></img>
                    <br></br>
                    <div style={{display:"flex",alignItems:"center"}}>
                     <span style={{marginRight:"15px"}}>🧡 {item.public_reactions_count}</span>   <span>✍️ {item.comments_count}</span>
                      <span style={{marginLeft:"auto"}}>📅 { new Date(item.created_at).getDate() }/{ new Date(Date.parse(item.created_at)).getMonth()+1 }/{ new Date(Date.parse(item.created_at)).getFullYear() }</span>
                    </div>
                </Article></a>)}
            </BlogDiv>
        </div>
    )
}

export default Blog