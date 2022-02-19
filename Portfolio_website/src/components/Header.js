import React from 'react';
import {Link } from 'react-router-dom';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../images/logo/logo_blue.png'

class Header extends React.Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.changeMenuIcon = this.changeMenuIcon.bind(this);
    this.setActiveLink = this.setActiveLink.bind(this);


    this.state = {
      menuIcon: faBars, 
    }
  }

  setActiveLink({target}) {
  
    const currentPage = "active-page";
    const lastPage = document.querySelector("#active-page");
    if (target.id !== currentPage) {
      target.id = currentPage;
      lastPage.id = "";
    }
    if(!target.parentNode.classList.contains("logo")) {
      this.toggleMenu();
      this.changeMenuIcon();
    }
  }

  changeMenuIcon() {
    const {menuIcon} = this.state;

    menuIcon === faBars ? this.setState({menuIcon: faTimes}) : this.setState({menuIcon:faBars})
  }

  toggleMenu() {
    const navigationBar = document.querySelector("#navigation-bar");
    if (navigationBar.classList.contains("active")) {
      navigationBar.classList.remove("active");
    } else {
      navigationBar.classList.add("active");
    }
    this.changeMenuIcon();
  }

  render() {
    const {menuIcon} = this.state;
    return(
      <header>
        <nav id="navigation-bar">
          <Link onClick={this.setActiveLink} className="logo" id="active-page" to='/'><img src={logo} alt="Home link" width="80vw"/></Link>
          <Link onClick={this.setActiveLink} className="menu-item" to='/about'>About</Link>
          <Link onClick={this.setActiveLink} className="menu-item" to='/projects'>Projects</Link>
          <Link onClick={this.setActiveLink} className="menu-item" to='/contact'>Contact</Link>
          <a onClick={this.toggleMenu} className="toggle-menu-container"><FontAwesomeIcon className="toggle-menu" icon={menuIcon} /></a>
        </nav>
      </header>
    )
  }
}

export default Header;