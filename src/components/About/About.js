import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Card,Image } from 'react-bootstrap'
import NavBar from '../Home/Navbar/Navbar'
import './About.css'


function About() {
  const [loadData, setLoadData] = useState([]);
useEffect(()=>{
   fetch('http://localhost:5000/therapistData')
   .then(res => res.json())
  .then(data => setLoadData(data))
}, [])

const [loadstoryData, setstoryLoadData] = useState([]);
useEffect(()=>{
   fetch('http://localhost:5000/storyData')
   .then(res => res.json())
  .then(data => setstoryLoadData(data))
}, [])

    return (
        <div>
            <NavBar></NavBar>
            <section>
            <div className="back">
                <p></p>
           </div>
           </section>
         <Container>
             <h2>MentalHealth is the most promising therapy platform for Cumilla</h2>
             <h4>About our mission</h4>
             <h6 className=" text-center">Making professional therapy accessible, affordable, and convenient — so <br/> anyone who struggles with life’s challenges can get help, anytime and anywhere.</h6>
             <h4>Our Therapist</h4>
             <h6 className='text-center'>MentalHealth offers access to licensed, trained, experienced, and accredited psychologists (PhD / PsyD), marriage and family therapists (LMFT), <br/> clinical social workers (LCSW / LMSW), and board licensed professional counselors (LPC).</h6>
         </Container>
         <Container className="crd d-flex justify-content-between">
         { 
           loadData.map(data=>
            <Card bg= 'info' className="text-white"style={{ width: '15rem' }}>
            <Image src={data.image} roundedCircle />
  <Card.Body>
  <Card.Text>{data.title}</Card.Text>
    <Card.Text>
        <small>{data.designation}</small><br/>
        <small> {data.year}</small>
    </Card.Text>
    
  </Card.Body>
</Card>
           )
}
</Container>
     <Container >
            <h4>Our success story</h4>
            <div className="d-flex justify-content-between"> 
            { 
           loadstoryData.map(data=>  
            <div className="text-center" >
                <div><Image className="pimg" src={data.image} roundedCircle /></div>
                <p><b>{data.title}</b></p>
                <small><b>{data.designation}</b></small>
                <br/>
                <small>{data.story}</small>
                <br/>
                </div>
           )}
                </div>
         </Container>

        </div>

    )
}

export default About
