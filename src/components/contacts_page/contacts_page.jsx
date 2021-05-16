import React, {useState, useEffect} from "react";
import PhoneBro from '../img/phonebro.gif'
import GeoLock from '../img/117967.png'
import './contacts_page.css' ;

import { InputGroup,FormControl } from "react-bootstrap";

const ContactsPage =()=>{

    return(
        <div className="contacts_page_wrapper">


            <div className="contacts_information">


            <div className="contacts_numbers">
                <h4>Зв‘язатись з нами</h4>
                <div className="phone_numbers">
                <span>
                <img src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/support/ic_callcentrenumber_pc.svg" alt="" />
                
                </span>
                <div className="phone_numbers_numbers">
                <p> <a href="tel:+380631201708"> +380 63 120 1708 - Анна  </a>  </p>
                <p> <a href="tel:+380934740655"> +380 93 474 0655 - Віталій </a> </p>
                </div>
                </div>


                <div className="mail_plus_adress">


                <div className="phone_numbers">
                    <span>
                    <img  className='mail' src="//consumer-img.huawei.com/content/dam/huawei-cbg-site/common/support/ic_emailus_pc.svg" alt="" />
                    </span>
                    <div className="phone_numbers_numbers">
                <p> <a href="mailto:annfe@meta.ua">annfe@meta.ua </a>  </p>
                <p> <a href="mailto:info.miolife@gmail.com">info.miolife@gmail.com</a> </p>
                </div>
                </div>
                <div className="phone_numbers">
                    <span>
                    <img  className='mail' src={GeoLock} alt="" />
                    </span>
                    <div className="phone_numbers_numbers">
                <p className='address'> вул. Наталії Ужвій, 92 </p>
                <p className='address'> Харків, Харківська область, Україна</p>
                </div>
                </div>
                </div>
                    <div className="contacts_text_donate">

                <h4> Бажаєте допомогти проекту ? </h4>
                <p>Ми потребуємо постійних юридичних консультацій з питань соціального захисту та забезпечення дітей ліками й засобами реабілітації. </p>
                <h4>Реквізити для благодійних внесків :</h4>
                <p>*****************</p>
               
                    </div>
            </div>
            <div className="contacts_mini_info">
                    <h4>Наша місія - дати життя дітям.</h4>
                    <div className="img_ukraine">
                        <div className='img_ukraine_img'>
                        <img src="http://miolife.org/wp-content/uploads/2014/10/home_charity_icon_mission_1.png" alt="" />
                        </div>
                        <div className='img_text_img' >
                            <h4>Понад 100 дітей в Україні потребують вашої допомоги</h4>
                            <p>Не залишайтеся байдужими, адже ці діти - майбутнє України.</p>
                        </div>
                    </div>
                    <div className="img_ukraine">
                        <div className='img_ukraine_img' >
                        <img src="http://miolife.org/wp-content/uploads/2014/10/home_charity_icon_mission_2.png" alt="" />
                        </div>
                        <div  className='img_text_img' >
                            <h4>Ми пишаємося тим, що незважаючи на страшний діагноз, ми даруємо дітям щастя</h4>
                            <p>Вся радість життя вміщується в усмішці дитини!</p>
                        </div>
                    </div>
            </div>

            
            </div>

            


                
            <div className="social_contacts">
            <div>
            <p>Слідкуйте за нами в соціальних мережах</p>
            </div>
            <div className='social_social'>

            <div class="social instagram">
    <a href="#" target="_blank"><i class="fa fa-instagram fa-2x"></i></a>
</div>
            <div class="social facebook">
    <a href="#" target="_blank"><i class="fa fa-facebook fa-2x"></i></a>    
</div>
<div class="social telegram">
    <a href="#" target="_blank"><i class="fa fa-paper-plane fa-2x"></i></a>
</div>
                </div>
            </div>
            </div>
    )
}


export default ContactsPage;