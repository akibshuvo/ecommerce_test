'use client'

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Checkout = () => {
    let [data, setData] = useState({
        fullName: "",
        email: "",
        address:"",
        zip: "",
        number: "",
        amount: localStorage.getItem('totalPrice') ? parseFloat(localStorage.getItem('totalPrice')) : 0
    })

   let handleChange = (e)=>{
    console.log(e.target.value)
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
   }

   let handlePlace =async ()=>{
    const rawResponse = await fetch('http://localhost:8000/api/v1/product/checkout', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const content = await rawResponse.json();
    console.log(content)

    localStorage.removeItem('totalPrice');
   }
   
  return (
    <Container>
    <Form >
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>First name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Full name"
          name='fullName'
          onChange={handleChange}
          
          

        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter your Email"
          name='email'
          onChange={handleChange}
          
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        <Form.Label>Adress</Form.Label>
        <InputGroup hasValidation>
          <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Full Address"
            name='address'
            onChange={handleChange}
          
          />
          
        </InputGroup>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="Number"
         placeholder="Numer" 
         required 
         name='number'
         onChange={handleChange}
         />
        
      </Form.Group>
     
      <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label>Zip</Form.Label>
        <Form.Control 
        type="number" 
        placeholder="Zip" 
        required 
        name='zip'
        onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid zip.
        </Form.Control.Feedback>
      </Form.Group>
    </Row>
    <Form.Group className="mb-3">
      <Form.Check
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
        feedbackType="invalid"
      />
    </Form.Group>
    <Button onClick={handlePlace} type="submit">place Order --{data.amount}</Button>
   
  </Form>
  </Container> 
  )
}

export default Checkout