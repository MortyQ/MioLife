import React, {useState, useEffect} from "react";
import {Parallax} from 'react-parallax';
import head from '../../img/head.jpg';
import { Row, Container, Col } from "react-bootstrap";
import '../header.css'

const HeaderParallax  =()=>{




    return (
        <Parallax  className="header_main_img" bgImage={head} strength={400} >

                <div  className="header_main_img_div " >    

                <Container >
 
  <Row className="header_parallax_h1" >
    <Col><h1>
                        Подолаємо м'язову дистрофію Дюшенна разом!.
                        </h1></Col>
  </Row>
 
</Container>

                                 
                </div>
            </Parallax>
    )

}

export default HeaderParallax;