import React from "react"

import logo from "./contentful.png"
import "./footer.css"

function Footer(props) {
    return(
        <div className="footer">
            <img src={logo} alt="api-logo" width="35px" height="35px" />
            <span>Powered By Contentful API </span>
        </div>
    )

}
export default Footer