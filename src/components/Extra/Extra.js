import React, { useState } from 'react'
import { Container,Col, Form, Nav, Row, Tab,Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

function Extra() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useNavigate()
    const onNewSubmit = data=>  {

        fetch('http://localhost:5000/bookingLoad', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
          });
          
        }
  
    return (
        <div>
          <Container>
          <form className="border border-dark" >
          <h5>What kind of therapy you want to take?</h5>
          <Form>
          <div class="form-check">
      <input class="form-check-input" type="radio"  name="therapistType"  defaultValue="" {...register("personal")}/>
      <label class="form-check-label" for="flexRadioDefault1">
        Personal
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio"  name="therapistType" />
      <label class="form-check-label" for="flexRadioDefault1">
        Relationship (individual)
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" name="therapistType" />
      <label class="form-check-label" for="flexRadioDefault2">
      Relationship(together)
      </label>
    </div>
    </Form>
    
    <h5>Are you male or female?</h5> 
          <Form>
    <div class="form-check">
      <input class="form-check-input" type="radio"  name="gender" />
      <label class="form-check-label" for="flexRadioDefault1">
        Female
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio"  name="gender"/>
      <label class="form-check-label" for="flexRadioDefault2">
      Male
      </label>
    </div>
    </Form>
    <h5>What led you to consider therapy today?</h5> 
    <Form>
    <div class="form-check">
      <input class="form-check-input" type="radio"   name="consideration"/>
      <label class="form-check-label" for="flexRadioDefault2">
      I am feeling depressed
      </label>
      </div>
    <div class="form-check">
      <input class="form-check-input" type="radio"   name="consideration"/>
      <label class="form-check-label" for="flexRadioDefault2">
      I feel anxious or overwhelmed
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio"  name="consideration"/>
      <label class="form-check-label" for="flexRadioDefault2">
      My mood interfering in my work
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio"  name="consideration"/>
      <label class="form-check-label" for="flexRadioDefault2">
      I'm struggling with maintaining therapy
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio"  name="consideration"/>
      <label class="form-check-label" for="flexRadioDefault2">
      I,ve experienced trauma
      </label>
    </div>
    </Form>
    <h5>From therapist what are the benefits you are looking for?</h5>
    <Form>
          <div class="form-check">
      <input class="form-check-input" type="radio"   name="benefit" />
      <label class="form-check-label" for="flexRadioDefault1">
      Teaches me some new skill
      </label>
    </div>
    <div class="form-check">
    <input class="form-check-input" type="radio"   name="benefit" />
      <label class="form-check-label" for="flexRadioDefault2">
      Assigns me homework
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio"   name="benefit" />
      <label class="form-check-label" for="flexRadioDefault2">
      Guides me to set goals
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio"   name="benefit"/>
      <label class="form-check-label" for="flexRadioDefault2">
      Explore your past
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio"   name="benefit"/>
      <label class="form-check-label" for="flexRadioDefault2">
      Listens to you
      </label>
    </div>
    </Form>
    <h5>Prefer Therapist Gender</h5>
    <Form>
    <div class="form-check">
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" />
      <label class="form-check-label" for="flexRadioDefault2">
      Female
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio"  name="therapistGender"
      />
      <label class="form-check-label" for="flexRadioDefault2">
      Male
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio"  name="therapistGender"/>
      <label class="form-check-label" for="flexRadioDefault1">
        I don.t care
      </label>
    </div>
    </Form>
    <Form>
    <Row>
    <Col>
     <Form.Control placeholder="First name"  name="firstName" defaultValue="" {...register("firstName")} />
    </Col>
    <Col>
     <Form.Control placeholder="Last name"  name="lastName" defaultValue="" {...register("lastName")}/>
    </Col>
    </Row>
    <Row>
    <Form.Group as={Col} controlId="formGridState">
     <Form.Label>Age</Form.Label>
     <Form.Control placeholder="Age"  name="age" defaultValue="" {...register("age")} />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
     <Form.Label>Religion</Form.Label>
     <Form.Control placeholder="Religion"  name="religion" defaultValue="" {...register("religion")}  />
    </Form.Group>
    
    </Row>
    <Row>
    <Form.Group as={Col} controlId="formGridEmail">
     <Form.Label>Email</Form.Label>
     <Form.Control type="email" placeholder="Enter email"  name="email" defaultValue="" {...register("email")} />
    </Form.Group>
    
    <Form.Group as ={Col}className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Address"  name="address" defaultValue="" {...register("address")}/>
    </Form.Group>
    </Row>
    
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
     <Form.Label  >City</Form.Label>
     <Form.Control  name="city" defaultValue="" {...register("city")}/>
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridState">
     <Form.Label >Upzila</Form.Label>
     <Form.Control placeholder="Upzila"  defaultValue="" {...register("upzila")} />
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridZip" >
     <Form.Label  >Zip</Form.Label>
     <Form.Control name="zip" defaultValue="" {...register("zip")}  />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip" >
     <Form.Label >bKash Transaction Id</Form.Label>
     <Form.Control name="bkashId" defaultValue="" {...register("bkashId")} />
    </Form.Group>
    </Row>
    <Link to="/welcome">
    <Button variant="primary" type="submit"  onSubmit={handleSubmit(onNewSubmit())} >
    Submit
    </Button>
    </Link>
    </Form>
    
    </form>
    </Container>
      </div>
      )
    }
export default Extra
