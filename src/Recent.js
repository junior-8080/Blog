import React from "react"
import {Link} from "react-router-dom"

import "./recent.css"


function Recent(props) {
    let recent = props.result.map((item,i) => {
        return(
            <div className="card" key={i}>
                <div>
                    <h5 className="tag">{item.fields.tags[0]}</h5>
                    <Link to={`/post/${item.sys.id}`}>
                     <img src={`https:`+item.fields.heroImage.fields.file.url} width="150px" height="150px" alt={`recent`+i}/>
                    </Link>
                </div>
                <div className="card-text">
                    {
                        item.fields.description
                    }
                </div>
            </div>
        )
    })
    return(
        //loop over the data and pass
        <div className="recent">
            <h5>Recent Post</h5>
            {
                recent
            }
        </div>
    )

}
export default Recent