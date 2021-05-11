import React, {useState} from "react";
import './header_navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css'



    import { Container, Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";



 const HeaderNavigation =()=>{
         return(
             
             <div className="header_navigation">           
  <Navbar width='100%'  bg="light header_navigation_bootstrap_navbar" variant="light">
    <Navbar.Brand href="/main"><img src="http://miolife.org/wp-content/uploads/2018/07/240.svg" alt="alt"/></Navbar.Brand>
    <Nav className="mr-auto ">
      <Nav.Link href="/main"><i class="fas fa-male"> </i> Про нас</Nav.Link>
      <Nav.Link href="/gallery"><i class="fas fa-camera-retro"> </i> Галерея</Nav.Link>
      <Nav.Link href="/contacts"><i class="fas fa-address-card"> </i> Наші контакти</Nav.Link>
      {/* <Nav.Link href="/about"><i class="fas fa-mug-hot"> </i> Чай</Nav.Link> */}
       <NavDropdown title='Про хворобу' id="basic-nav-dropdown">
        <NavDropdown.Item className="header_navigation_dropdown" href="/understanding_dushen">Розуміння М’язової дистрофії Дюшена</NavDropdown.Item>
        <NavDropdown.Item className="header_navigation_dropdown" href="/diagnostic_page">  Діагностика</NavDropdown.Item>
        <NavDropdown.Item className="header_navigation_dropdown" href="/phys_theraph">Фізична терапія у дітей з м’язовою дистрофією Дюшенна (МДД)</NavDropdown.Item>
        <NavDropdown.Item className="header_navigation_dropdown" href="/respirator">Респіраторна підтримка</NavDropdown.Item>
        <NavDropdown.Item className="header_navigation_dropdown" href="/family_training">Керівництво для сімей та професіоналів</NavDropdown.Item>
        <NavDropdown.Item className="header_navigation_dropdown" href="/info_for_helping">Інформаційні пам'ятки на випадок невідкладної допомоги</NavDropdown.Item>
        <NavDropdown.Item className="header_navigation_dropdown" href="/recomended_food">Рекомендації з харчування</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar>
        </div>

)
}

export default HeaderNavigation;