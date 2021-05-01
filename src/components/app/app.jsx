import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './app.css'
import Header from '../header/header'
import MainContent from '../main_content/main_content'
import {Parallax} from 'react-parallax';
import head from '../img/head.jpg';

const App =()=> {


  return (
    <div className="wrapper">
      <Header />
      <Parallax  className="header_main_img" bgImage={head} strength={400} >
                <div  className="header_main_img_div" >
                   
                </div>
            </Parallax>
      <MainContent />
    </div>

  )
}


export default App;
