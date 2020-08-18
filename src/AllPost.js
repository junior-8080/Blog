import React from "react"

// import "./allpost.css"
import { Link } from "react-router-dom"
import { Container, Col,Row } from "reactstrap"

function AllPost(props) {

    let allpost = props.result.map((item,i )=>{
        return(
            <Col className="post" key={i} md={4}>
                <h4 className="post-title">{item.fields.title}</h4>    
            </Col>
        )
    })
    return(
        <Container>
            <h2>Posts</h2>
            <Row>
                {
                    allpost
                }
            </Row>
        </Container>
    )
}
export default AllPost