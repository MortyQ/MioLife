import React, {useState, useEffect} from "react";
import {Col, Row, Container} from "react-bootstrap"
import './family_training.css'
import FamilyGif1 from '../../img/famtran1.jpg'
import FamilyGif2 from '../../img/famTran2.jpg'

const FamilyTraining =()=>{

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
        <div className="family_training_wrapper understanding_dushen_wrapper">
             {exitPanel('Керівництво для сімей та професіоналів','/main','Про Нас ', '  Керівництво для сімей та професіоналів')}
             <div className="diagnostic_page_text"> 
                    <p>У цих двох брошурах узагальнені результати міжнародної угоди з питань лікування та організації медичної допомоги хворим м’язовою дистрофією Дюшена (МДД).</p>
                  
                <div className="img_respirator">
                    <div>
                   <a target='_blank'  href="https://drive.google.com/open?id=1JI7z3lkAtWLVXN4dROYT6uOSJ4y4cmUV">
                       <img src={FamilyGif2} alt="alt" />
                       </a> 
                    </div>
                    <div>
                       <a target='_blank'  href="https://drive.google.com/open?id=1RSkXv79nBfu4_2cMnp8Hs7ASYADlBr5Z">
                    <img  src={FamilyGif1} alt="alt" />
                       </a>
                    </div>
                </div>

             </div>
        </div>
    )
}


export default FamilyTraining;