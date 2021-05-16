import React, {useState, useEffect} from "react"; 

import './footer.css'

const Footer =()=>{

    
    const rootElement = document.documentElement
    



function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
  })
}



    return(
        <footer>

                <div className="footer_left">

                </div>
                <div className="footer_right">
                    <div className="footer_right1">
                        
                    </div>
                    <div className="btn_up">
                   <button onClick={scrollToTop} id="scrollToTopBtn"><span class="material-icons arrow_up">expand_less</span></button>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;