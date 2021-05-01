import React from 'react';
import './main_content.css'
import MainSlider from './main_slider/main_slider'


import { Row, Container, Col } from "react-bootstrap";

const MainContent =()=>{


    return(
        <div className="main_wrapper">

        <Container>
  <Row>
    <Col sm={8}></Col>
    <Col sm={4}></Col>
  </Row>
  <Row>
    <Col sm><MainSlider /></Col>
    
    <Col sm>
        <article>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ipsum maiores atque itaque labore deleniti. Expedita, eveniet eum,
                   incidunt illum, porro quisquam consequatur excepturi provident sint vel aperiam. Consequatur nam 
                  labore distinctio. Adipisci ipsam ex ipsum optio, iste laborum cupiditate accusamus accusantium amet? Dolor nostrum tenetur tempore perferendis unde incidunt.
        </article>
          <br/>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quidem ipsam ullam nostrum similique excepturi, unde velit quos cum itaque cumque fuga? Maiores, temporibus. Assumenda, est sequi eiu
          s molestiae, perferendis incidunt optio repellat nihil maiores quis numquam laudantium! Inventore perferendis saepe repellendus quam minus in blanditiis accusamus quis,
           totam est explicabo earum itaque libero aperiam!
           Placeat, ullam doloribus. Nobis rerum laudantium sed expedita, itaque et molestiae ex, nam non a molestias dolore placeat repellendus aperiam quos culpa deserunt rem amet.
        </article>
    </Col>
  </Row>
</Container>

 

        </div>
    )

}


export default MainContent;