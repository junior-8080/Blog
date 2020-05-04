import React, { Component } from "react"

import Header from "./Header"
import Footer from "./Footer"
import "./apost.css"

const contentful = require('contentful')

const client = contentful.createClient({
    space:"zymvofoqzatx",
    accessToken:"Nmp5brYY9IP6W3sb_r-tKrXkTeAARIwrgp71JxWLB68"
})

class APost extends Component {
    constructor(props){
        super(props)
        this.state = {
            result : {},
            id : props.match.params.id
        }
    }
    
    componentDidMount(){
        client.getEntry(this.state.id)
            .then((entry) => {
            this.setState({
               result: entry
            })
            console.log(entry)
        })
        .catch(console.error)
    }

    render() {
        return(
            <div className="a-post">
                <Header />
                {
                 this.state.result.fields ?
                <div className="post">
                    <div className="image">
                        <img src={`https:`+this.state.result.fields.heroImage.fields.file.url} alt="apost"  width="100%" height="100%"/>
                    </div>
                    <div class="post-body">
                        <h2 className="title">{this.state.result.fields.title}</h2>
                        <h4 className="description">{this.state.result.fields.description}</h4>
                        <p className="body">{this.state.result.fields.body}</p>
                    </div>
                </div>
                : null
                 }
                <Footer />
            </div>
        )
    }
}
export default APost