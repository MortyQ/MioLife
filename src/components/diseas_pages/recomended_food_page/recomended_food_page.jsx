import React, {useState, useEffect} from "react";
import './recomended_food_page.css'
import {Col, Row, Container} from "react-bootstrap"
import foodRecom from '../../img/foodRecom.jpg'
import foodRecom2 from '../../img/foodRecom2.jpg'

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
        <div className="recomended_food_wrapper understanding_dushen_wrapper">
             {exitPanel('Рекомендації з харчування','/main','Про Нас ', '  Рекомендації з харчування')}
             
             <div className="diagnostic_page_text"> 
                 <h4>Важливим аспектом при м’язової дистрофії Дюшена – є дотримання правильної дієти.</h4>
                    <p>На сьогоднішній день, золотим стандартом медикаментозної терапії є застосування 
                    глюкокортикостероїдів. Деякі батьки намагаються також доповнити раціон різними харчовими добавками (БАД).</p>
                  
                <div className="img_recomended_food">
                    <div className='img_recomended_food_1' >
                    {/* <p>У цій презентації Ви зможете ознайомитись з основними принципами дієти на ранній стадії захворювання, з різними харчовими добавками і їх клінічною ефективністю.</p> */}
                   <a target='_blank'  href="https://drive.google.com/open?id=1lfOjuTnsqY2F29E9b1M4d-CNHStN7itQ">
                       <img src= {foodRecom} alt="alt" />
                       </a> 
                    </div>
                    <div className='img_recomended_food_2' >
                       
                       <a target='_blank'  href="https://drive.google.com/open?id=1EAYuXaegjGj8V2m8FGRTTt4SwOefqW00">
                    <img  src={foodRecom2} alt="alt" />
                       </a>
                    </div>
                </div>
                </div>


        </div>
    )
}


export default RecomendedFoodPage;