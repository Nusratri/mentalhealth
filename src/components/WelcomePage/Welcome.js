import React from 'react'
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth'
import NavBar2 from '../Home/Navbar/NavBar2';
import './welcome.css'

function Welcome() {
    const { user } = useAuth();
    return (
        <div>
            <NavBar2/>
           
            <div className="welcome text-center">
             <h4>“I understand your pain. Trust me, I do. I’ve seen people go from the darkest moments in their lives to living a happy, fulfilling life. You can do it too. I believe in you. You are not a burden. You will NEVER BE a burden.” — Sophie Turner</h4>
            </div>
        
            <Container>
            <div className=" welcome-section">
           {user.email && <span style={{ color: 'black' }}><h5>Hello {user.displayName},</h5> </span>} 
           <br/>
           <h1 className="head">We will notify you for your therapy session very soon...</h1>
           </div>
           </Container>
        </div>
    )
}

export default Welcome
