import React, { useEffect, useState } from 'react'
import {Container,Row, Col} from 'react-bootstrap';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Public.css"




const Public = () => {
    const [loopNum , setLoopNum]=useState(0);
    const [isDeleting,setDeleting]=useState(false);
    const toRotate =["Registration","Portal"];
    const [text,setText]= useState('');
    const [delta,setDelta]= useState(300 - Math.random() * 100);
    const period= 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)}
    },{text})

    const tick=()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText= isDeleting ? fullText.substring(0,text.length -1):fullText.substring(0,text.length +1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=> prevDelta /2)
        }
        if(!isDeleting&& updatedText===fullText){
            setDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText===''){
            setDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500)
        }
            
        }

  return (
    <div className='banner' id='home'style={{ height: '100vh' }}>
    
        <Container>
             <Row className ='home' > 
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to ICTAK</span>
                    <h1>Exam Registration Portal  <span className='wrap'></span></h1>
                    <button  onClick={()=>console.log('connect')}><Link to={'/login'} style={{ textDecoration: "none",color:"black" }}>Login</Link> <FaArrowCircleRight /></button>
                </Col>

            </Row>
        </Container>



    
    </div>
    
  )
}

export default Public