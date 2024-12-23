import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/surise.jpg'
import heroImg02 from '../assets/images/suryanalli.jpg'
import heroVideo from '../assets/images/katika.mp4'
import Subtitle from '../shared/Subtitle'
import worldImg from '../assets/images/world.png'
const Home = () => {
  return <>
  <section>
    <Container>
      <Row>
        <Col lg='6'>
         <div className="hero_content">
           <div className="hero_subtitle d-flex align-items-center">
            <Subtitle subtitle={'Let Your Heart Guide You'}/>
            <img src={worldImg} alt=""/>
           </div>
           <h1>Your heart needs Travelling{' '}<span
            className='highlight'><b>Memories</b></span></h1>
         </div>
        </Col>
        <Col lg='2'>
        <div className="hero_img-box">
          <img src={heroImg} alt=""/>
        </div>
        
        </Col>
        <Col lg='2'>
        <div className="hero_img-box">
          <video src={heroVideo} alt="" controls/>
        </div>
        
        </Col>
        <Col lg='2'>
        <div className="hero_img-box">
          <img src={heroImg02} alt=""/>
        </div>
        
        </Col>
      </Row>
    </Container>
  </section>
  </>
    
  
}

export default Home