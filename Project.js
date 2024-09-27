import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap';
import './Project.css'
import photo from '../Images/Cal-age.png';
import photo1 from '../Images/Calculator.jpeg'
import photo2 from '../Images/CRM.jpeg'
function Project() {
  

  return (
    <>
      <Row>
        <Col md={4} className="bgclr ">
          <Card className='age-crd'>
            <Card.Body>
              <Card.Img variant="top" src={photo} className='age-cal-img' />
              <br />
              <br />
              <Card.Text >
                <p className='age-cal'>
                  <h3>Age Calulator</h3>
                </p>
                <br />
                <br />
                <p link href='<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Serif&family=Roboto:wght@300&display=swap" rel="stylesheet">' className='content-age'>
                  An age calculator is a tool that calculates a person's age based on their date of birth and the current date or another specified date.
                   It provides the age in years, months, and days. The tool accurately accounts for leap years and can handle different date formats. 
                  It’s useful for determining age differences, important milestones, and anniversaries in fields like healthcare, genealogy, and education.</p>


<Button className='age-btn' href='https://github.com/VasanthKumar11/Age-Calculator' >Code</Button>


              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="bgclr ">
        <h1 className='prt-txt' >Project</h1>
        <Card className='cal-crd'>
       
            <Card.Body>
              <Card.Img variant="top" src={photo1} className='age-cal-img' />
              <br />
              <br />
              <Card.Text >
                <p className='cal'>
                  <h3>Calulator</h3>
                </p>
                <br />
                <br />
                <p link href='<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Serif&family=Roboto:wght@300&display=swap" rel="stylesheet">' className='content-cal'>
                 
A calculator is a tool used to perform mathematical operations quickly and accurately. 
It can handle basic arithmetic as well as complex functions like trigonometry and logarithms. 
Essential in education, engineering, finance, and science, calculators facilitate fast computations and problem-solving. 
They come in various forms, including handheld devices, apps, and built-in tools on smartphones and computers. 
This versatility makes them indispensable for both simple and advanced calculations.</p>

<Button className='cde-btn' href='https://github.com/VasanthKumar11/Calculator'>
 Code</Button>


              </Card.Text>
            </Card.Body>
          </Card></Col>
        <Col md={4} className="bgclr ">
        <Card className='crm-crd'>
            <Card.Body>
              <Card.Img variant="top" src={photo2} className='age-cal-img' />
              <br />
              <br />
              <Card.Text >
                <p className='crm'>
                  <h3>CRM</h3>
                </p>
                <br />
                <br />
                <p link href='<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Open+Sans&family=PT+Serif&family=Roboto:wght@300&display=swap" rel="stylesheet">' className='content-crm'>
                  Customer Relationship Management (CRM) is a strategy and technology for managing a company’s interactions with current and potential customers.
                   It involves using data analysis to improve business relationships, focusing on customer retention and driving sales growth. 
                   CRM systems compile information from various channels, such as websites, phone calls, emails, and social media, providing a comprehensive view of customer interactions. 
                   This helps businesses personalize communication, streamline processes, and enhance customer satisfaction and loyalty.






</p>


<Button className='crm-btn' href='https://github.com/VasanthKumar11/ClientPulse' >Code</Button>


              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Project