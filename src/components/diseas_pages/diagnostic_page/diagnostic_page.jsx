import React, {useState, useEffect} from "react";
import './diagnostic_page.css'

const DiagnosticPage =()=>{


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
        <div className="diagnostic_page_wrapper">
                {exitPanel('Диагностика','/main','Про Нас ', '  Диагностика')}


                <div className="diagnostic_page_text">
                    <h4>У кожної родини своя історія.</h4>
                    
                    <p>
                    Багато батьків дізнаються про діагноз своєї дитини тільки після декількох місяців або років візитів до лікаря. Кожна дитина розвивається у своєму власному темпі, тому педіатр може не вжити негайних дій, коли ваша дитина не може довго сидіти, стояти або ходити. Однак, з часом, затримки у фізичному розвитку, які спостерігаються у дітей з м’язовою дистрофією Дюшенна, стають більш тривожними.
                    </p>
                    <p>
                    Процес діагностики часто включає в себе ряд кроків для підтвердження МДД. Отримання офіційного діагнозу і розуміння специфічної мутації вашої дитини є критичним кроком у визначенні шляху відходу, будь то ведення захворювання або участь в клінічних випробуваннях.
                    </p>
                    <p>
                        <h5>Діагностика МДД:</h5>
                    </p>
                        <ul className='diagnostic_ul' >
                            <li>Спостереження за ознаками і симптомами.</li>
                            <li>Аналіз крові на визначення підвищеного рівня ферменту в крові (креатин кінази або СК тест). Високий рівень в крові може вказувати на проблему з м’язами, але не може з достовірною точністю підтвердити діагноз МДД.</li>
                            <li>Напрямок до фахівця (невролог).</li>
                            <li>Генетичний тест. Аналізується ДНК пацієнта, щоб побачити, чи є мутація в гені дистрофіна. Якщо є мутація, цей тест показує і тип мутації.</li>
                            <li>Біопсія м’язи (якщо є необхідність). У разі, якщо генетичний тест не вказує на мутації, біопсія дозволяє визначити наявність, відсутність, кількість і розташування дистрофіна в м’язовій тканині.</li>
                        </ul>
                    <h5>Почути новину про те, що вашій дитині був поставлений діагноз МДД, завжди важко.</h5>
                    <p>Швидше за все, буде період печалі і перебудови щоденного укладу життя, коли ви дізнаєтеся більше про вплив хвороби на вашу дитину і вашу сім’ю. Проте, сім’ї, що живуть з МДД створили потужну і спільноту, яка хоче допомогти.</p>
                    <p>Важливо, щоб сім’ї мали розуміння про різні аспекти захворювання. Обговоріть з лікарем вашої дитини і можливо, з генетичним консультантом, який допоможе вам зрозуміти, що цей діагноз означає для вас і вашої родини. Є багато ресурсів, які допоможуть вам пройти по етапах захворювання і нададуть вам інформацію, яка необхідна, щоб підготувати вас до майбутнього.</p>
                </div>
        </div>
    )
}

export default DiagnosticPage;
