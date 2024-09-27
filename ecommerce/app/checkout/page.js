'use client'

import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Checkout = () => {
  // let tk = localStorage.getItem('totalPrice') 
  const [data, setData] = useState({
    cus_name: "",
    cus_email: "",
    cus_add1: "",
    cus_postcode: "",
    cus_phone: "",
    amount:500
    // amount: localStorage.getItem('totalPrice') // Default amount or you can fetch from localStorage
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handlePlace = async () => {
    try {
      const rawResponse = await fetch('http://localhost:8000/api/v1/product/payment', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!rawResponse.ok) {
        throw new Error(`HTTP error! Status: ${rawResponse.status}`);
      }

      const content = await rawResponse.json();
      console.log(content, 'Payment response');
      
      // Redirect to payment URL or handle response
      window.location.href = content.payment_url;
      
    } catch (error) {
      console.error('Error during payment process:', error);
    }
  };

  return (
    <Container>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Full name"
              name="cus_name"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your Email"
              name="cus_email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustomAddress">
            <Form.Label>Address</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Full Address"
                name="cus_add1"
                onChange={handleChange}
              />
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Phone Number"
              required
              name="cus_phone"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="number"
              placeholder="Zip"
              required
              name="cus_postcode"
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button onClick={handlePlace} type="button">
          Place Order - {data.amount} BDT
        </Button>
      </Form>
    </Container>
  );
};

export default Checkout;