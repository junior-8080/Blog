import React from "react"
import {Link} from "react-router-dom"

import program from "./program.jpg"
import tech   from "./tech.jpg"
import sport from "./sport.jpg"
import health from "./health.jpg"
import "./catdisplay.css"


function CategoryDisplay() {
    return(
        <div className="categories">
            <Link  to="/category/programming" className="item">
                <h4 className="tag">
                    Programming
                </h4>
                <img src={program} alt="img-1" className="item-image"/>
            </Link>
            <div className="item">
                <Link  to = "/category/tech" className="item">
                    <h4 className="tag">
                        Technologies
                    </h4>
                    <img src={tech} alt="img-1" className="item-image"/>
                </Link>
            </div>
            
            <Link to = "/category/sport" className="item">
                <h4 className="tag">
                    Sports
                </h4>
                <img src={sport} alt="img-1" className="item-image"/>
            </Link>
            <Link  to = "/category/health" className="item">
                <h4 className="tag">
                    Health
                </h4>
                <img src={health} alt="img-1" className="item-image"/>
            </Link>
        </div>
    )
}
export default CategoryDisplay