import React from "react"

import "./allpost.css"
import { Link } from "react-router-dom"
import { Container, Col,Row } from "reactstrap"

function AllPost(props) {

    let allPost = props.result.map((item,i )=>{
        return(
            <Col className="post" key={i} md={4}>
                <h4 className="post-title">{item.fields.title}</h4>  
                <p className="description">{item.fields.description}</p>  
                <Link to={`/post/${item.sys.id}`}>
                    <span>Continue Reading <i className="fa fa-arrow-right"></i></span>
                </Link>
            </Col>
        )
    })
    return(
        <div className="my-posts">
            <h2>Posts</h2>
            <Row className="all-post">
                {
                    allPost
                }
            </Row>
        </div>
    )
}
export default AllPost