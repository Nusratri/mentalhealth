
import React from 'react'
import { Card, ListGroup,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBar2 from '../Home/Navbar/NavBar2'
import './TherapyInfo.css'

function TherapyInfo() {
    return (
        <div>
            <NavBar2/>
            <div className="text-center d-flex justify-content-center bg-warning">
            <Card className="therapy-info"style={{ width: '40rem' }}>
  <Card.Header><h5>Therapy Information</h5></Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item><p>Therapy Hour : 3 hours per week</p></ListGroup.Item>
    <ListGroup.Item><p>Session Fee : 1000BDT</p></ListGroup.Item>
    <ListGroup.Item><p>Deadline : Patient Perspective</p></ListGroup.Item>

  </ListGroup>
 
</Card>
<Link to="/therapySelection">              
 <Button sx={{ width: '100%', m: 3 }} type="submit" variant="contained" className="next" >Next</Button>
 </Link>
</div>
        </div>
    )
}

export default TherapyInfo
