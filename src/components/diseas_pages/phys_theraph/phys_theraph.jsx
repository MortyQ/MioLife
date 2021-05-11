import React, {useState, useEffect} from "react";

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
        <div className="phys_therap_wrapper">
             {exitPanel('PHYSTHERAP','/main','Про Нас ', '  Рекомендації з харчування')}
                <h2>Hello</h2>
        </div>
    )
}


export default PhysTherap;