import React, {useState, useEffect} from "react";
import './phys_theraph.css'
import {Col, Row, Container} from "react-bootstrap"
import PhysImg from '../../img/phys_therap.jpg'


const PhysTherap =()=>{

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
        <div className="phys_therap_wrapper understanding_dushen_wrapper">
             {exitPanel('Фізична терапія у дітей з м’язовою дистрофією Дюшенна (МДД)','/main','Про Нас ', '  Фізична терапія у дітей з м’язовою дистрофією Дюшенна (МДД)')}
          


          
             <div className="diagnostic_page_text">
                    <h4>Найчастіше неправильно підібрана фізична терапія призводить до погіршення фізичного стану хворого, що призводить до незворотніх наслідків.</h4>
                    <p>
                    Світова практика показує, що правильно підібрана фізична терапія сприяє більшому збереженню функціональності м’язів і мінімізації респіраторних та серцевих ускладнень.
                    </p>
                    <p>
                    Основною програмою навчання повинна бути регулярна і правильно підібрана фізична терапія і використання відповідних (ортопедичних і респіраторних) засобів, які допоможуть компенсувати наслідки підвищеної м’язової слабкості при м’язовій дистрофії та справити позитивний вплив на рухливість і незалежність дитини в повсякденному житті.
                    </p>
                    <h4>
                    Основні функції фізичної терапії:
                    </h4>
                    <p>
                    Максимальне збереження навичок ходьби, запобігання обмеженої рухливості в суглобах, запобігання формуванню сколіозу і підтримку легеневої функції.
                    </p>
                    <p>
                        <h5>Зокрема, мова йде про:</h5>
                    </p>
                        <ul className='diagnostic_ul' >
                            <li>Активізації мускулатури в залежності від функціональних і повсякденних особливостей.</li>
                            <li>Підвищенні і підтримці витривалості і працездатності інтактних м’язів за рахунок активних вправ.</li>
                            <li>Підтримання і поліпшення координації рухів.</li>
                            <li>Збереженні навичок ходьби і положення «стоячи» за допомогою Школи Ходьби (ходьба уздовж брусів, ходьба за допомогою спеціальних ходунків і ін.) 
                                Індивідуальний підхід у виборі ортезів і супутніх засобів реабілітації.</li>
                            <li>Профілактики контрактур.</li>
                            <li>Поліпшення кровообігу і обміну речовин.</li>
                            <li>Удосконалення та навчання дихальної, мовної, ковтальної функції і полегшення відкашлювання. Індивідуальний підхід у виборі апаратів, що підтримують ці функції.</li>
                            <li>Поліпшення функцій серцево-судинної системи і кишечника.</li>
                            <li>Стимулювання і цілеспрямоване просування самостійної діяльності дитини.</li>
                            <li>Навчанні відповідним вправам батьків для реалізації в домашніх умовах</li>
                            <li>Ранньої мобілізації після травм і операцій. Тривала відсутність рухів сприяє швидкому руйнуванню м’язів.</li>
                            <li>Профілактики проти респіраторних захворювань і підготовка індивідуального плану реабілітації в домашніх умовах в разі респіраторного захворювання.</li>
                        </ul>
                    <p>Вибір терапії повинен бути заснований на клінічних даних, поточної стадії захворювання і індивідуальних потребах дитини.</p>
                    <p>Для залучення дитини в процес фізичної терапії, атмосфера приміщення повинна бути оформлена в яскравій і ігровій манері. Вправи повинні адаптуватися відповідно до ігровим інтересам дитини в повсякденному житті.</p>
                    <p>При МДД категорично протипоказано перенапруження. Фізичний терапевт повинен завжди дотримуватися допустимого навантаження і ні в якому разі не перевищувати індивідуальний ліміт витривалості.</p>
                    <div className="img_phys_theraph">
                    <h4 className='img_phys_theraph_h4_text' >У цій брошурі Ви зможете ознайомитися з основними прийомами розтяжок.</h4>
                        <a target='_blank' href="https://drive.google.com/open?id=1lxBDjcMeqOcLzemsQdVkFZYCO1wdR6qD">
                        <img src={PhysImg} alt="Терапия" />
                        </a>
                    </div>
                </div>
                </div>
    )
}


export default PhysTherap;