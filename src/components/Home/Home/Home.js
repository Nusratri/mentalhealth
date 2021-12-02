import React from "react";

import bodyImg from '../../../images/body-img.png'
import './Home.css';
import depression from '../../../images/depression.png'
import anxity from '../../../images/anxity.png'
import stress from '../../../images/stress.jpeg'
import relationship from '../../../images/relationship.jpg'
import NavBar from "../Navbar/Navbar";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate= useNavigate();
    const handleHistory = () => {
        navigate('../login', { replace: true })
        
    }
    return (
        <div>
            <NavBar/>
       <div>
        <img className= "body-image" src={ bodyImg} alt=""/>
        </div> 
        <h2><b>We will match you a therapist who can help you......</b></h2>
        <div className ="body">
          <Container>
          <Row>
            <Col xm ={3}>
          <Card className=" text-dark" onClick={() => handleHistory()}>

  <Card.Img className="card-image "  src={depression} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title className="text"><h5><b>Depression</b></h5></Card.Title>
  
  </Card.ImgOverlay>
</Card>
</Col>
<Col xm={3}><Card className="text-dark " onClick={() => handleHistory()} >

<Card.Img className="card-image" src={anxity} alt="Card image" />
<Card.ImgOverlay>
  <Card.Title className="text "><b>Anxiety</b></Card.Title>
</Card.ImgOverlay>
</Card>
</Col>
<Col xm = {3}><Card className=" text-dark" onClick={() => handleHistory()}>

<Card.Img className="card-image" src={relationship} alt="Card image" />
<Card.ImgOverlay>
  <Card.Title className="text "><b>Relationship</b></Card.Title>
</Card.ImgOverlay>
</Card></Col>
<Col xm={3}><Card className="text-dark" onClick={() => handleHistory()}>

<Card.Img className="card-image" src={stress} alt="Card image" />
<Card.ImgOverlay>
  <Card.Title className="text "><b>Stress</b></Card.Title>
</Card.ImgOverlay>
</Card></Col>
</Row>
</Container>
       </div>
       
       </div>
    );
};

export default Home;