import React, {useState, useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap"
import FotoRespirator from '../../img/respirator.jpg'
import FotoRespirator1 from '../../img/respirator1.jpg'
import './respirator.css'


const Respirator =()=>{

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
        <div className="respirator_wrapper understanding_dushen_wrapper">
             {exitPanel('Респіраторна підтримка','/main','Про Нас ', '  Респіраторна підтримка')}
             <div className="diagnostic_page_text"> 
                    <p className='p_respirator' >У цих брошурах, підготовлених італійською батьківською асоціацією Дюшенна (Duchenne Parent Project Onlus), ви знайдете багато корисної інформації про те, як правильно і своєчасно надавати респіраторну підтримку пацієнтам з МДД.</p>
  
                <div className="img_respirator">
                   <a target='_blank'  href="https://drive.google.com/file/d/1eGC6oEB_tUCrj3BEPejTnUVtsFLt-OMU/view">
                       <img src={FotoRespirator} alt="alt" />
                       </a> 
                       <a target='_blank' href="https://drive.google.com/file/d/1g2i6vnO2FU01KtQY48_eSiRPBLh5bB2p/view">
                    <img  src= {FotoRespirator1} alt="alt" />
                       </a>
                </div>

</div>
        </div>
    )
}


export default Respirator;