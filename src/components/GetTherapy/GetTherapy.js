
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../Home/Navbar/Navbar';

import './GetTherapy.css';
function GetTherapy() {
  
    return (
        <div>
          <NavBar/>
          
          <div className="therapy">
            <div>
              <h3>Provide MentalHelp to your journey <br/>
Meet the most comprehensive  mental health program for your life.......</h3>
            </div>
            <div >
          <Link to={"/login"}>
          <Button className="btn"  variant= "info">BOOK NOW</Button>
          </Link>
          </div>
          </div>
          </div>
          
      
      );
    }
    
    export default GetTherapy;