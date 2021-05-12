import React, {useState, useEffect} from "react";
import './recomended_food_page.css'
import {Col, Row, Container} from "react-bootstrap"

const RecomendedFoodPage =()=>{

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
        <div className="recomended_food_wrapper">
             {exitPanel('Рекомендації з харчування','/main','Про Нас ', '  Рекомендації з харчування')}
             <Container>
                 <h4>Важливим аспектом при м’язової дистрофії Дюшена – є дотримання правильної дієти.</h4>
                    <p>На сьогоднішній день, золотим стандартом медикаментозної терапії є застосування 
                    глюкокортикостероїдів. Деякі батьки намагаються також доповнити раціон різними харчовими добавками (БАД).</p>
                  
                <div className="img_recomended_food">
                    <div>
                    <p>У цій презентації Ви зможете ознайомитись з основними принципами дієти на ранній стадії захворювання, з різними харчовими добавками і їх клінічною ефективністю.</p>
                   <a target='_blank'  href="https://drive.google.com/open?id=1lfOjuTnsqY2F29E9b1M4d-CNHStN7itQ">
                       <img src="http://miolife.org/wp-content/uploads/2019/06/rpp1-1-600x600.png" alt="alt" />
                       </a> 
                    </div>
                    <div>
                       <p>Вміст кальцію в продуктах харчування</p>
                       <a target='_blank'  href="https://drive.google.com/open?id=1EAYuXaegjGj8V2m8FGRTTt4SwOefqW00">
                    <img  src="http://miolife.org/wp-content/uploads/2019/06/rpp2-1-600x600.png" alt="alt" />
                       </a>
                    </div>
                </div>

</Container>
        </div>
    )
}


export default RecomendedFoodPage;