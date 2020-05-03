import React from "react"

import "./allpost.css"
import { Link } from "react-router-dom"

function AllPost(props) {
    let allpost = props.result.map((item,i )=>{
        return(
            <div className="post" key={i}>
                <h5 className="tag">{item.fields.tags[0]}</h5>
                <h4 className="post-title">{item.fields.title}</h4>
                <Link to={`/post/${item.sys.id}`}>
                  <img src={`https:`+item.fields.heroImage.fields.file.url} width="200px" height="200px" alt={`all`+i}/>
                </Link>
                
            </div>
        )
    })
    return(
        <div>
            <h2>All Posts</h2>
            <hr />
            <div className="all-post">
                {
                    allpost
                }
            </div>
        </div>
    )
}
export default AllPost