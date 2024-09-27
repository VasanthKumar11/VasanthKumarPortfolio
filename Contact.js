import React from 'react'
import { useState } from 'react'
import { Row, Col, Button, Form, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as yup from "yup"
import { ErrorMessage, Formik } from 'formik';
import './Contact.css'
function Contact() {
  let [client, setClient] = useState({
    Companyname:'',
    email: '',
    phone: '',
    description:''

  })
  let more = yup.object().shape({
  
    Companyname: yup.string().required('Company name is required'),
    email: yup.string().email().required('Email is required'),
    phone: yup.number().typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10)
      .required('A phone number is required'),
  description: yup.string().required("description is required")
  })
  let handleInput = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value })
  }

  let handleSubmit = () => {
    let val = {
      
      Companyname: client.Companyname,
      email: client.email,
      phone: client.phone,
      description:client.description
    }
    console.log(val)

  }
  return (
    <Container>
      <div className='bgimg'>
        <Formik
          validationSchema={more}
          onSubmit={handleSubmit}
          initialValues={client}
        >
          {({ handleChange, handleSubmit }) => (
          
            <Row>
              <Col xs={12} md={4}></Col>
              <Col xs={12} md={4}>
                <Form onSubmit={handleSubmit}>
                  

                  <Card   className='Valid'>
                  
                    <Card.Body >
                      <Card.Text  >
                      <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control style={{borderRadius:"30px"}} type="text" name="Companyname" value={client.Companyname} onChange={(e) => { handleChange(e); handleInput(e) }} />
                          <ErrorMessage name='Companyname' />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Email</Form.Label>
                          <Form.Control style={{borderRadius:"30px"}} type="text" name="email" value={client.email} onChange={(e) => { handleChange(e); handleInput(e) }} />
                          <ErrorMessage name='email' />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control style={{borderRadius:"30px"}} type="text" name="phone" value={client.phone} onChange={(e) => { handleChange(e); handleInput(e) }} />
                          <ErrorMessage name='phone' />
                        </Form.Group >
                        <Form.Group controlId="exampleForm.ControlInput1" >
                          <Form.Label >Description</Form.Label>
                          <Form.Control style={{borderRadius:"30px",height:"100px"}} type="text" name="description" value={client.description} onChange={(e) => { handleChange(e); handleInput(e) }}  />
                          <ErrorMessage name='description' />
                        </Form.Group>
                        <br />
                        <Button type="submit" variant='dark' style={{marginLeft: "38%" }}>Submit</Button>

                      </Card.Text>
                    </Card.Body>
                  </Card>

                </Form>
              </Col>
              <Col xs={12} md={4}></Col>

            </Row>
          )}
        </Formik>

      </div >
    </Container>
  )
}

export default Contact