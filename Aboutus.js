import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import photo from '../Images/School.jpg';
import photo1 from '../Images/Dip.jpg';
import photo2 from '../Images/Engneeringclg.jpg';
import photo10 from '../Images/Vasanth_Kumar_S-nrmlll.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aboutus.css';

function Aboutus() {

    return (
        <div className='bgndclr'>
            <Row>
                <Col md={8}>
                    <h1 className='abo-txt' >About Me</h1>
                    <p className='content'>
                        Aspiring engineering graduate excited to kickstart a career in the IT field. Eager to utilize my
                        relevant skills and knowledge to support a dynamic team, learn from experienced professionals,
                        and contribute positively to the innovative projects and goals of the organization.
                    </p>
                </Col>

                <Col md={4}>
                    <Image src={photo10} className='img10' />
                </Col>

                <h1 className='edu-txt' >EDUCATION</h1>
                   <Col xs={12} md={4} className='bgclr1'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card className='sns card-dance'>
                                    <Card.Body>
                                        <Card.Img variant="top" src={photo2} className='snseg1' />     
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="flip-card-back">
                                <Card className='sns card-dance'>
                                    <Card.Body>
                                    <Card.Text className='snseg2'>
                                            <p>SNS College of Engineering</p>
                                               
                                           <p>B.E-MECH-upto(2020-2023)</p> 
                                          
                                         <p className='snseg3'>  CGPA-8.42%</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={4} className='bgclr2'>
                    {/* <h1 className='edu-txt' >EDUCATION</h1> */}
                    <div className="flip-card" >
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card className='sri'>
                                    <Card.Body className='b3'>
                                        <Card.Img variant="top" src={photo1} className='sri1' />
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="flip-card-back">
                                <Card className='sri'>
                                    <Card.Body>
                                    <Card.Text >
                                            <p className='Dip-txt'>Sri Ramakrishna Polytechnic College</p>
                                             
                                            <p className='Dip-txt1'>DME-upto(2017-2020)</p>
                                             
                                           <p className='Dip-txt2'> Per-72%</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={4} className='bgclr3'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Card className='pr'>
                                    <Card.Body>
                                        <Card.Img variant="top" src={photo} className='imgsl' />
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="flip-card-back">
                                <Card className='pr'>
                                    <Card.Body>
                                    <Card.Text >
                                            <p className='sclnme'>P.R.Sidha Naidu Memorial Matriculation School</p>
                                             
                                            <p className='sclnme1'>2017-SSLC 66%</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </Col> 
              
                
                <Col xs={12} md={8}>
                    <h1 className='skil-txt' >SKILLS</h1>
                </Col>

                <Col xs={12} md={10}>
                <div className="about-us-container">
            
                <Card className='skl-crd'>
                    <Marquee 
                    speed={50} 
                    gradient={false}
                    pauseOnHover={true} >
                        <div className="skill-card">
                            <img src={require('../Images/React-logo.png')} alt="ReactJs" className='inner-skill' />
                          
                        </div>
                        <div className="skill-card">
                            <img src={require('../Images/HTML-logo.png')} alt="HTML" className='inner-skill' />
                         
                        </div>
                        <div className="skill-card">
                            <img src={require('../Images/CSS-logo.png')} alt="CSS" className='inner-skill' />
                      
                        </div>
                        <div className="skill-card">
                            <img src={require('../Images/JS-logo.png')} alt="Javascript" className='inner-skill' />
                            
                        </div>
                        <div className="skill-card">
                            <img src={require('../Images/Java-logo.png')} alt="Java" className='inner-skill' />
                          
                        </div>
                        <div className="skill-card">
                            <img src={require('../Images/Python-logo.png')} alt="Python" className='inner-skill' />
                        
                        </div>
                        <div className="skill-card">
                            <img src={require('../Images/Node-js-logo.png')} alt="Node.js" className='inner-skill' />
                         
                        </div>
                        <div className="skill-card">
                            <img src={require('../Images/Expressjs-logo.png')} alt="Express.js" className='inner-skill' />
                        
                        </div>
                        <div className="skill-card">
                            <img src={require('../Images/Mongodb-logo.png')} alt="MongoDB" className='inner-skill' />
                          
                        </div>
                    </Marquee>
       </Card>
        </div>
                  
                </Col>
            </Row>
        </div>
    );
}

export default Aboutus;
