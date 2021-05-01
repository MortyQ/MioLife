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
      <Nav.Link href="/about"><i class="fas fa-male"> </i> О Нас</Nav.Link>
      <Nav.Link href="/about"><i class="fas fa-camera-retro"> </i> Галерея</Nav.Link>
      <Nav.Link href="/about"><i class="fas fa-address-card"> </i> Наши Контакты</Nav.Link>
      <Nav.Link href="/about"><i class="fas fa-mug-hot"> </i> Чай</Nav.Link>
      <Nav.Link href="/about"></Nav.Link>
       <NavDropdown title='История Болезни' id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Общая информация</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Диагностика</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Респираторная поддержка</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar>
        </div>

)
}

export default HeaderNavigation;