import React, { useEffect, useState } from 'react'
import NavBar from '../Home/Navbar/Navbar'
import './Blog.css'
import mt from "../../images/mt.jpg"
import { Col, Container, Row } from 'react-bootstrap'
function Blog() {
    const [blogData, setBlogData] = useState([]);
useEffect(()=>{
   fetch('https://guarded-inlet-22236.herokuapp.com/blogData')
   .then(res => res.json())
  .then(data => setBlogData(data))
}, [])

    return (
        <div>
            <NavBar></NavBar>
            <img className="mt" src={mt}/>
            <div >
                <Container  className="border border-dark cd">
                { 
           blogData.map(data=> 
              <Row>
                  <Col xm={6}><img className="bimg" src={data.image}/></Col>
                  <Col xm={6} className="ctx">
                      <a  href=" "><h5>{data.title}</h5></a>
                      <small>{data.content}</small>
                  </Col>
              </Row>
              )}
              </Container>
            </div>
        </div>
    )
}

export default Blog
