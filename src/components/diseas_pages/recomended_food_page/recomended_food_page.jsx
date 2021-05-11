import React, {useState, useEffect} from "react";
import './recomended_food_page.css'

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
                <h2>Hello</h2>
        </div>
    )
}


export default RecomendedFoodPage;