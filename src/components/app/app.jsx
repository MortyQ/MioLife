import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './app.css'
import Header from '../header/header'
import MainContent from '../main_content/main_content'
import HeaderParallax from '../header/header_parallax/header_parallax'


const App =()=> {


  return (
    <div className="wrapper">
      <Header />
      <HeaderParallax />
      <MainContent />
    </div>

  )
}


export default App;
