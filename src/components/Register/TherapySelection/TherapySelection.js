import React, { useState } from 'react'
import { Container,Col, Form, Nav, Row, Tab,Button } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function TherapySelection() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [regInfo, setRegInfo] = useState({
      firstName: ' ',
      lastName:' ',
      email:' ',
        zip:' ' ,
      upzila:' ',
      age:'  ',
      city:' ',
      religion: ' ',
      address: ' ',
     bkashId:' ',
     gender:' ',
      consideration:' ',
     therapistGender:' ' ,
     therapistType:' ',
     benefit:' ',
       });
    const handleonChange = e => {
      e.preventDefault();
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...regInfo };
      newInfo[field] = value;
      setRegInfo(newInfo);
  }

  
    const onNewSubmit = e =>  {
      const newSubmit = {...regInfo};
      fetch('https://guarded-inlet-22236.herokuapp.com/bookingLoad', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({newSubmit})
          
        })
        .then(res => res.json())
        .then(data => {
          
          
        });
        
      }

  return (
    <div>
      <Container>
      <form className="border border-dark" >
      <h5>What kind of therapy you want to take?</h5>
      <Form>
      <div class="form-check">
  <input class="form-check-input" type="radio"  name="therapistType" value="personal" onChange={handleonChange} checked={regInfo.therapistType==="personal"}/>
  <label class="form-check-label" for="flexRadioDefault1">
    Personal
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio"  name="therapistType" value="relationship (individual)" onChange={handleonChange} checked={regInfo.therapistType==="relationship(individual)"}/>
  <label class="form-check-label" for="flexRadioDefault1">
    Relationship (individual)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="therapistType" value=" relationship(together)" onChange={handleonChange} checked={regInfo.therapistType==="relationship(together)"}/>
  <label class="form-check-label" for="flexRadioDefault2">
  Relationship(together)
  </label>
</div>
</Form>

<h5>Are you male or female?</h5> 
      <Form>
<div class="form-check">
  <input class="form-check-input" type="radio"  name="gender" value="female" onChange={handleonChange} checked={regInfo.gender==="female"}/>
  <label class="form-check-label" for="flexRadioDefault1">
    Female
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio"  name="gender"
   value="male" onChange={handleonChange} checked={regInfo.gender==="male"}/>
  <label class="form-check-label" for="flexRadioDefault2">
  Male
  </label>
</div>
</Form>
<h5>What led you to consider therapy today?</h5> 
<Form>
<div class="form-check">
  <input class="form-check-input" type="radio"   name="consideration"
   value=" I am feeling depressed" checked={regInfo.consideration===" I am feeling depressed"}
   onChange={handleonChange}/>
  <label class="form-check-label" for="flexRadioDefault2">
  I am feeling depressed
  </label>
  </div>
<div class="form-check">
  <input class="form-check-input" type="radio"   name="consideration"
   value=" I feel anxious or overwhelmed" checked={regInfo.consideration===" I feel anxious or overwhelmed"}
   onChange={handleonChange}/>
  <label class="form-check-label" for="flexRadioDefault2">
  I feel anxious or overwhelmed
  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio"  name="consideration"
    value="My mood interfering in my work" checked={regInfo.consideration==="My mood interfering in my work"}
   onChange={handleonChange}/>
  <label class="form-check-label" for="flexRadioDefault2">
  My mood interfering in my work
  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio"  name="consideration"
    value="I'm struggling with maintaining therapy" checked={regInfo.consideration==="I'm struggling with maintaining therapy"}
   onChange={handleonChange}/>
  <label class="form-check-label" for="flexRadioDefault2">
  I'm struggling with maintaining therapy
  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio"  name="consideration"
    value="I,ve experienced trauma" checked={regInfo.consideration==="I,ve experienced trauma"}
   onChange={handleonChange}/>
  <label class="form-check-label" for="flexRadioDefault2">
  I,ve experienced trauma
  </label>
</div>
</Form>
<h5>From therapist what are the benefits you are looking for?</h5>
<Form>
      <div class="form-check">
  <input class="form-check-input" type="radio"   name="benefit" value="   Teaches me some new skill" checked={regInfo.benefit==="   Teaches me some new skill"} onChange={handleonChange}/>
  <label class="form-check-label" for="flexRadioDefault1">
  Teaches me some new skill
  </label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio"   name="benefit" value=" Assigns me homework" checked={regInfo.benefit===" Assigns me homework"} onChange={handleonChange}/>
  <label class="form-check-label" for="flexRadioDefault2">
  Assigns me homework
  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio"   name="benefit" value=" Guides me to set goals" checked={regInfo.benefit===" Guides me to set goals"} onChange={handleonChange}/>
  <label class="form-check-label" for="flexRadioDefault2">
  Guides me to set goals
  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio"   name="benefit" value=" Explore your past" checked={regInfo.benefit===" IExplore your past"} onChange={handleonChange}/>
  <label class="form-check-label" for="flexRadioDefault2">
  Explore your past
  </label>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio"   name="benefit"value=" Listens to you" checked={regInfo.benefit===" Listens to you"} onChange={handleonChange}/>
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
  <input class="form-check-input" type="radio"  name="therapistGender"
   value=" female" checked={regInfo.therapistGender===" female"} 
   onChange={handleonChange}/>
  <label class="form-check-label" for="flexRadioDefault2">
  Female
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio"  name="therapistGender"
   value=" male" checked={regInfo.therapistGender===" male"} 
   onChange={handleonChange}/>
  <label class="form-check-label" for="flexRadioDefault2">
  Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio"  name="therapistGender"
  value=" I don't care" checked={regInfo.therapistGender===" I don't care"} 
   onChange={handleonChange}/>
  <label class="form-check-label" for="flexRadioDefault1">
    I don.t care
  </label>
</div>
</Form>
<Form>
<Row>
<Col>
 <Form.Control placeholder="First name"  name="firstName"  value={regInfo.firstName} onChange={handleonChange}/>
</Col>
<Col>
 <Form.Control placeholder="Last name"  name="lastName"  value={regInfo.lastName} onChange={handleonChange}/>
</Col>
</Row>
<Row>
<Form.Group as={Col} controlId="formGridState">
 <Form.Label>Age</Form.Label>
 <Form.Control placeholder="Age"  name="age"  value={regInfo.age} onChange={handleonChange}/>
</Form.Group>
<Form.Group as={Col} controlId="formGridState">
 <Form.Label>Religion</Form.Label>
 <Form.Control placeholder="Religion"  name="religion"  value={regInfo.religion} onChange={handleonChange}/>
</Form.Group>

</Row>
<Row>
<Form.Group as={Col} controlId="formGridEmail">
 <Form.Label>Email</Form.Label>
 <Form.Control type="email" placeholder="Enter email"  name="email"  value={regInfo.email} onChange={handleonChange}/>
</Form.Group>

<Form.Group as ={Col}className="mb-3" controlId="formGridAddress1">
<Form.Label>Address</Form.Label>
<Form.Control placeholder="Address"  name="address"  value={regInfo.address} onChange={handleonChange}/>
</Form.Group>
</Row>

<Row className="mb-3">
<Form.Group as={Col} controlId="formGridCity">
 <Form.Label  >City</Form.Label>
 <Form.Control  name="city"  value={regInfo.city} onChange={handleonChange}/>
</Form.Group>

<Form.Group as={Col} controlId="formGridState">
 <Form.Label >Upzila</Form.Label>
 <Form.Control placeholder="Upzila"  name="upzila"  value={regInfo.upzila} onChange={handleonChange}/>
</Form.Group>

<Form.Group as={Col} controlId="formGridZip" >
 <Form.Label  >Zip</Form.Label>
 <Form.Control name="zip"  value={regInfo.zip} onChange={handleonChange}/>
</Form.Group>
<Form.Group as={Col} controlId="formGridZip" >
 <Form.Label >bKash Transaction Id</Form.Label>
 <Form.Control name="bkashId"  value={regInfo.bkashId} onChange={handleonChange} />
</Form.Group>
</Row>
<Link to="/welcome">
<Button variant="primary" type="submit" onSubmit={handleSubmit(onNewSubmit())}  >Submit</Button>
</Link>
</Form>

</form>
</Container>
  </div>
  )
}

export default TherapySelection
