import React from 'react';
import './main_content.css'
import MainSlider from './main_slider/main_slider'


import { Row, Container, Col } from "react-bootstrap";

const MainContent =()=>{


    return(
        <div id='about'  className="main_wrapper">

        <Container className="main_wrapper_content" >
  
  <Row>
    <Col sm><MainSlider /></Col>
    
    <Col sm>
        <article>
        <h2>Про нас </h2> 
        <p>

MIOlife- це батьківська організація пацієнтів з м‘язовою дистрофією Дюшена та Беккера. 
        </p>
     
Головною метою проекту є якісне інформування батьків та медичних спеціалістів щодо диагностики, 
фізичної терапії , респіраторної підтримки та рекомендацій з харчування. Також було розроблено інформаційну пам‘ятку на випадок невідкладної допомоги. 
        </article>
          <br/>
        <article>
        Керівництво MIO life здійснює регулярні збори з представниками влади, розроблює проекти, які покликані надати пацієнтам з м‘язовою дистрофією допомогу та покращити умови їх життя. 
        <br/>
      <br/>
MIO life спільно з  благодійними організаціями систематично створює заходи збору коштів задля забезпечення дітей необхідним медичним обладнанням. 
<br/>
      <br/>
Долучайтесь!
        </article>
    </Col>
  </Row>
</Container>

 

        </div>
    )

}


export default MainContent;