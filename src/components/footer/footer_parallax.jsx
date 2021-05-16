import React,{useState} from 'react';
import {Parallax} from 'react-parallax';
import Slider3 from '../img/img6.jpg'
import { Row, Container, Col } from "react-bootstrap";
import './footer.css'



const FooterParallax =()=>{


    return(
        <Parallax  className="parallax_img_foot" bgImage={Slider3} strength={600} >
    </Parallax>
    )
}


export default FooterParallax;