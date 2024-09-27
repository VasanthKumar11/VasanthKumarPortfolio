import React from 'react'
import photo from '../Images/Grey one.png'
import { Row, Col, Container, Navbar, Nav, Image, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
import { Typewriter } from 'react-simple-typewriter';


function Portfolio() {
    return (

        <>
            <div className='bgvido'>
                <Navbar expand="lg" className="a1">
                    <Container fluid >
                        <Navbar.Brand href="/" className='a2' style={{ color: '#FF2E63' }}> <h5>Home</h5> </Navbar.Brand>
                        <Navbar.Brand href="/Aboutus" className='a3' style={{ color: '#FF2E63' }}> <h5>About</h5></Navbar.Brand>
                        <Navbar.Brand href="/Project" className='a4' style={{ color: '#FF2E63' }}><h5>Project</h5> </Navbar.Brand>
                        <Navbar.Brand href="/Contact" className='a4' style={{ color: '#FF2E63' }}><h5> Contact </h5></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            ></Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Row>

                    <Col xs={12} md={2} className='a6'></Col>
                    <Col xs={12} md={4} className='a6'>
                        {/* <body className='a5'> */}
                            <h1  className='cotnt'> I'M <span style={{color:"#FF2E63"}}>Vasanth Kumar</span></h1>
                            <br />
                         <h5  className='wrd'> <Typewriter
                                        words={["B.E Mechanical Engineer"]}
                                        loop={true}
                                        cursor
                                        cursorStyle=''
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                               </h5>  
<br/>

                           <h3 className='wrd'>  <Typewriter
                                        words={["Front End Developer"]}
                                        loop={true}
                                        cursor
                                        cursorStyle=''
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                         
                         </h3> 
                           
                            <br />
                           
                            <a href='https://github.com/VasanthKumar11'><VscGithubInverted style={{marginLeft:"140px",color:"#FF2E63",font:"icon" ,fontSize:"40px",}} /></a>
                            <br />
                            <a href='https://www.linkedin.com/in/vasanthkumar11/'><FaLinkedin style={{marginTop:"-70px",color:"#FF2E63",marginLeft:"80px",font:"icon" ,fontSize:"40px"}}/></a>
                        {/* </body> */}
                          
                          
                      
                    </Col>
                    <Col xs={12} md={4} className='a7'>
                        <Image src={photo} className='a8' />

                    </Col>
                    <Col xs={12}md={2} className='a9' ></Col>

                </Row>

              
            </div>

        </>



    )
}

export default Portfolio
