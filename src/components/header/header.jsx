import React, {useState, useEffect} from "react";

import './header.css' ;

import HeaderNavigation from './header_navigation/header_navigation';



const Header  =()=>{



    // const [offsetY,setOffsetY] = useState(0);
    // const handleScroll =()=> setOffsetY(window.pageYOffset);

    // useEffect(()=>{
    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll',handleScroll);
    // }, []);
    // style={{transform: `translateY(-$(offsetY * 0.9)px)`}}





    return (
        <div className="wrapper_header"  >


            {/* <div className="purpl_panel">
                    <div className="purpl_panel_text">
                        <p className='purpl_panel_text_childrendItsAll'>Дети наше все!</p>
                        <p><i class="fas fa-phone"></i><a href="tel:+380631201708">+380(63)120 17 08</a></p>
                        <p><i class="fas fa-phone"></i><a href="tel:+380934740655">+380(93)474 06 55</a></p>
                        <p className='purpl_panel_text_mail'><i class="fas fa-envelope-open"></i><a href="mailto:info.miolife@gmail.com"> Задавайте вопросы по электронной почте</a></p>
                    </div>
            </div> */}

                <HeaderNavigation />



            



        

        </div>
    )

}

export default Header;