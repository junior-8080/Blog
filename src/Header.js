import React from "react"
import {Link} from "react-router-dom"

import "./header.css"

function Header() {
    return(
        <header className="header">
            <Link to = "/" className="logo ">
                <h5 className="log-text">LOGO</h5>
            </Link>
            <nav className="navs">
                <Link to = "/category/programming" className="nav-link">programming</Link>
                <Link to = "/category/tech"  className="nav-link">technologies</Link>
                <Link to = "/category/health" className="nav-link">health</Link>
                <Link  to = "/category/sport" className="nav-link">sports</Link>
            </nav>
            <div className="contact">
                <a href="twitter.com" className="nav-link">
                    <i className="fa fa-twitter"></i>
                </a>
                <a href="twitter.com" className="nav-link">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="twitter.com" className="nav-link">
                    <i className="fa fa-linkedin"></i>
                </a>
                <a href="twitter.com" className="nav-link">
                    <i className="fa fa-facebook"></i>
                </a>
            </div>
        </header>
    )
    
}
export default Header