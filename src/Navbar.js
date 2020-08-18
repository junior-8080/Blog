import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from './logo.svg'
import './header.css'

const Navbars = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
      <div className="nav-container">
        <Navbar  light expand="md">
            <NavbarBrand href="/" className="mr-auto">
                <img src={logo} width="50px" height="50px" />
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar}/>
            <Collapse isOpen={!collapsed} navbar>
            <Nav navbar className="mr-auto">
                <NavItem>
                <NavLink href="/components/">Categories</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">blogs</NavLink>
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    <NavLink>
                          <i className="fa fa-twitter"></i>
                    </NavLink>      
                </NavItem>
                    <NavItem>
                        <NavLink>
                             <i className="fa fa-instagram"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                             <i className="fa fa-facebook"></i>
                        </NavLink>
                    </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
      </div>
  );
}

export default Navbars