import React, {useState, useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap"
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
        <div className="respirator_wrapper">
             {exitPanel('RESPIRATOR','/main','Про Нас ', '  Рекомендації з харчування')}
             <Container>
                    <p className='p_respirator' >У цих брошурах, підготовлених італійською батьківською асоціацією Дюшенна (Duchenne Parent Project Onlus), ви знайдете багато корисної інформації про те, як правильно і своєчасно надавати респіраторну підтримку пацієнтам з МДД.</p>
  
                <div className="img_respirator">
                   <a target='_blank'  href="https://drive.google.com/file/d/1eGC6oEB_tUCrj3BEPejTnUVtsFLt-OMU/view">
                       <img src="http://miolife.org/wp-content/uploads/2019/06/rp2-1-600x600.png" alt="alt" />
                       </a> 
                       <a target='_blank' href="https://drive.google.com/file/d/1g2i6vnO2FU01KtQY48_eSiRPBLh5bB2p/view">
                    <img  src="http://miolife.org/wp-content/uploads/2019/06/rp1-1-600x600.png" alt="alt" />
                       </a>
                </div>

</Container>
        </div>
    )
}


export default Respirator;