import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import linkdinIcon from '../../assets/linkdinIcon.png'
import githubIcon from '../../assets/githubIcon.png'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <img width="80px" height="80px" src={logo}/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="/">
                    <img width="35px" height="30px" src={linkdinIcon}/>
                    </NavLink>
                    <NavLink to="https://github.com/theoskille">
                    <img src={githubIcon}/>
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar
