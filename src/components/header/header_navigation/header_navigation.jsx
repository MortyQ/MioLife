import React, {useState} from "react";
import './header_navigation.css'
import BurgerMenu from './burger_menu/burger_menu'




 const HeaderNavigation =()=>{


     const [menuActive, setMenuActive] = useState(false)

     const items = [{value:'Главная', href: '/main', icon: 'touch_app'},{value:'О Нас', href: '/about', icon: 'accessibility'},{value:'Галерея', href: '/galery', icon: 'dashboard'},{value:'Контакты', href: '/contacts', icon: 'question_answer'},{value:'Наш Чай', href: '/tea', icon: 'emoji_food_beverage'},{value:'История Болезни', href: '/courses', icon: 'fingerprint'}]
    
    const showMenuAction =()=>{
        setMenuActive(!menuActive)
    }
         return(
             
             <div className="header_navigation">
              
                 <div className='header_navigation_logo' >
                            <img src="http://miolife.org/wp-content/uploads/2018/07/240.svg" alt="alt"/>
                 </div>
            
    <nav>
                <div className="burger_btn" onClick={showMenuAction} >
                  <span>Меню</span>
                </div>
                

  </nav>       
              <div className="header_navigation_mainText">
          <h1 className='header_navigation_h1' >Подолаємо м'язову дистрофію Дюшенна разом!</h1>
              </div>

            <BurgerMenu  active={menuActive} setActive={setMenuActive} header={'Меню'} items={items}  />
        </div>

)
}

export default HeaderNavigation;