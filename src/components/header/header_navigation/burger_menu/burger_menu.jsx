import React from "react";
import './burger_menu.css'

const BurgerMenu =({header, items, active, setActive})=>{



    return(
        <div className={active ? 'burger_menu_main active' : 'burger_menu_main'} onClick={()=> setActive(false)} >
            <div className="blur"></div>
                <div className="burger_menu_main_content" onClick={e => e.stopPropagation() } >
                    <div className="burger_menu_main_header">{header} 
                    <div className='burger_menu_main_header_escape' >
                    </div>
                    </div>
                    
                    <ul>
                        {items.map(item =>
                            <li>
                             <span className="material-icons">{item.icon}</span>
                                <a href={item.href}>{item.value}</a>
                               
                            </li>
                            )}
                    </ul>
                </div>
        </div>
    )
}

export default BurgerMenu;