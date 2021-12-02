import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Card,Container,Image,Button} from 'react-bootstrap';

import NavBar from '../Home/Navbar/Navbar';
import './Event.css'


function Event() {
    
    const [loadTeventData, setTeventLoadData] = useState([]);
useEffect(()=>{
   fetch('https://guarded-inlet-22236.herokuapp.com/sessionData')
   .then(res => res.json())
  .then(data => setTeventLoadData(data))
}, [])

    

 return (
     <div>
         <NavBar/>
        
     <Container >
     <div className="  d-flex justify-content-between  flex-xl-wrap
" >
         { 
           loadTeventData.map(data=>
            <div  className=" cinfo text-center">
             <Card >
                 <Card.Img variant="top" style={{ maxWidth: "300px" }} src={data.image} />
                 <Card.Body>
                     <Card.Title>{data.title}</Card.Title>
                     
                     <Card.Text>
                              
                         <small> Place: {data.place}</small>
                         <br/>
                         <small>Date: {data.date}</small>
                         <br/>
                         <small> Community: {data.community}</small>
                         <br/>
                         

                         </Card.Text>
                    
                 </Card.Body>
             </Card>
             </div>
             )
         }
     
     </div>
     </Container>
     

     </div>
     
 );
};
export default Event;
