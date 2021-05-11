import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './app.css'
import Header from '../header/header'
import MainContent from '../main_content/main_content'
import HeaderParallax from '../header/header_parallax/header_parallax'
import {BrowserRouter,Router,Switch,Route,Link,useParams} from "react-router-dom";
import DiagnosticPage from '../diseas_pages/diagnostic_page/diagnostic_page'
import RenderParallaxPlusMain from '../app_render_parallax_plus_main_content/app_render_parallax_plus_main_content'
import RecomendedFoodPage from '../diseas_pages/recomended_food_page/recomended_food_page'
import UnderstandingDushen from '../diseas_pages/understanding_dushen/understanding_dushen'
import FamilyTraining from '../diseas_pages/family_training/family_training'
import InfoForHelping from '../diseas_pages/info_for_helping/info_for_helping'
import PhysTherap from '../diseas_pages/phys_theraph/phys_theraph'
import Respirator from '../diseas_pages/respirator/respirator'


const App =()=> {



  



  return (
      
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      
      <Route path = '/main'
            component = {RenderParallaxPlusMain}/>
      <Route path = '/diagnostic_page'
            component = {DiagnosticPage}/>
            <Route path = '/recomended_food'
            component = {RecomendedFoodPage}/>
            <Route path = '/understanding_dushen'
            component = {UnderstandingDushen}/>
            <Route path = '/respirator'
            component = {Respirator}/>
            <Route path = '/phys_theraph'
            component = {PhysTherap}/>
            <Route path = '/info_for_helping'
            component = {InfoForHelping}/>
            <Route path = '/family_training'
            component = {FamilyTraining}/>
  

{/*       
      <HeaderParallax />
      <MainContent /> */}
    </div>
    </BrowserRouter>
  )
}


export default App;
