import React, {useState, useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap"
import './info_for_helping.css'

const InfoForHelping =()=>{

    const exitPanel =(name, href, namehref, namePanel)=>{
        return(
            <div className="wrapper_exit_menu">
            <h2>{name}</h2>
            <div className="exit_menu_a_plus_text">

            <p><a href={href}>{namehref}</a></p>
            <p><span class="material-icons">arrow_right</span></p>
            <p>{namePanel}</p>
            </div>
        </div>
        )
    }

    return(
        <div className="info_for_helping_wrapper">
             {exitPanel('Невідкладна допомога','/main','Про Нас ', '  Невідкладна допомога')}
             <div>

             <div className="diagnostic_page_text"> 
                <Container   className='info_for_helping_wrapper'>
                        <Col><h4>Сплануйте заздалегідь, як ви будете діяти в разі невідкладної допомоги</h4></Col>
                        <Col>М’язова дистрофія Дюшена – захворювання, яке має вплив на весь організм. Найчастіше неправильно 
                        надана невідкладна допомога може спричинити за собою дуже важкі наслідки, аж до летального результату. При переломах, простудних захворюваннях або інших 
                        ускладненнях, важливо, щоб лікарі, за місцем вашого проживання, були готові надати вашій дитині відповідне лікування і догляд. Не чекайте, коли трапиться 
                        непередбачена ситуація, продумайте ретельно всі кроки, які потрібно буде зробити, заздалегідь.</Col>  
                        <Row>
                        <Col xs={6}>
                                <h4>1</h4>
                                <h4>Складіть план дій в разі, якщо вашій дитині буде потрібна невідкладна допомога</h4>
                                <ul className='diagnostic_ul' >
                                    <li>Дізнайтеся у лікаря, у якого спостерігається ваша дитина за місцем проживання, 
                                        де може бути надана невідкладна допомога. Якщо лікуючий лікар вашої дитини 
                                        знаходиться в іншому місті, дізнайтеся про те, чи зможе він керувати реанімаційним процесом.</li>
                                    <li>Під час регулярного огляду у лікаря або знаходження в стаціонарі, складіть план щодо 
                                        запобігання респіраторних захворювань і як здійснювати лікування в разі, якщо дитина захворіє</li>
                                    <li>Якщо ви перебуваєте в відділенні, де ваш лікуючий лікар НЕ працює, заздалегідь 
                                        складіть план, щоб дізнатися, як зв’язатися з вашим неврологом і пульмонологом в неробочий час</li>
                                    <li>Донесіть інформацію лікарям за місцем вашого проживання, що пацієнти з МДД на
                                         відміну від інших потребують особливого догляду та лікування в разі надання невідкладної допомоги</li>
                                </ul>
                                <br />
                                <h4>4</h4>
                                <h4>Підтримка</h4>
                                <p>Члени сім’ї або друзі – це не просто компанія, вони можуть допомогти:</p>
                                <ul className='diagnostic_ul' >
                                    <li>Поговорити з персоналом, який надає невідкладну допомогу</li>
                                    <li>Записати рекомендації персоналу, які надають невідкладну допомогу</li>
                                    <li>Чи зможуть надати емоційну підтримку</li>
                                    
                                </ul>
                        </Col>
                        <Col xs={6}>
                            <div className="info_column_2_parth_1">
                            <h4>2</h4>
                                <h4>Завжди тримайте під рукою інформацію про поточний стан вашої дитини</h4>
                                <ul className='diagnostic_ul' >
                                    <li>Заведіть папку з останніми обстеженнями вашої дитини</li>
                                    <li>Запишіть на окремому аркуші всі ліки, які приймає ваша дитина</li>
                                    <li>Запишіть на окремому аркуші контактну інформацію та імена лікарів</li>
                                    
                                </ul>
                            </div>
                            <div className="info_column_2_parth_2">
                            <h4>3</h4>
                                <h4>Не забудьте взяти з собою</h4>
                                <p>
                                Будь-яке респіраторне обладнання (відкашлюватель, апарат нівл), що використовується в домашніх умовах – не у всіх відділеннях невідкладної допомоги є це обладнання
                                </p>
                            </div>
                        </Col>
                        </Row>
                        <h4>Тут узагальнена важлива інформація про захворювання та запобіжні заходи в разі надання невідкладної допомоги. Ви можете роздрукувати ці пам’ятки і завжди носити їх при собі.</h4>
                        <div className="img_respirator">
                   <a target='_blank'  href="https://drive.google.com/open?id=1n7eUbivwEKqVBbKQcWqoTMiugIQshhEU">
                       <img src="http://miolife.org/wp-content/uploads/2019/06/nd1-1-600x600.jpg" alt="alt" />
                       </a> 
                       <a target='_blank' href="https://drive.google.com/open?id=1mqpYiYWwdrqxk99Uc9RE8fDN4DZgIpbr">
                    <img  src="http://miolife.org/wp-content/uploads/2019/06/nd2-1-600x600.jpg" alt="alt" />
                       </a>
                </div>
                </Container>
            </div>
        </div>
        </div>
    )
}


export default InfoForHelping;