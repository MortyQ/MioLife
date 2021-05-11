import React, {useState, useEffect} from "react";
import MainContent from '../main_content/main_content'
import HeaderParallax from '../header/header_parallax/header_parallax'



const RenderParallaxPlusMain =()=>{


    return(
        <div>
                <HeaderParallax />
                <MainContent />
        </div>
    )
}

export default RenderParallaxPlusMain;
