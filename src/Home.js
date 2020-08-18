import React, { Component } from "react"

import Navbars from "./Navbar"
import Allpost from "./AllPost"
import Recent  from "./Recent"
import Footer from  "./Footer"
import CategoryDisplay from  "./CategoryDisplay"

import "./home.css"

const contentful = require('contentful')

const client = contentful.createClient({
    space:"zymvofoqzatx",
    accessToken:"Nmp5brYY9IP6W3sb_r-tKrXkTeAARIwrgp71JxWLB68"
})

class  Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result :[]
        }
    }

    componentDidMount(){
        client.getEntries()
            .then((response) => {
             let newResult = []
                 response.items.forEach(item => {
                 if (item.sys.contentType.sys.id === "blogPost"){
                  return newResult.push(item)
                 }
             })
             console.log(newResult)
            this.setState({
               result:newResult
            })

        }
        )
            .catch(console.error)
    }

    render(){

        let firstItem = this.state.result[0]
        console.log(firstItem)
        return(

            <div className="home">
                <Navbars />
                <CategoryDisplay />
                {/* {
                this.state.result.length !== 0?
                <div className="post-recent">
                    <div className="random-post">
                        <div>
                            <h5 className="tag">{firstItem.fields.tags[0]}</h5>
                            <img src={`https:` + firstItem.fields.heroImage.fields.file.url} alt="img" width="100%" height="600px" />
                        </div>
                        <div className="desc">
                            <h2>{firstItem.fields.title}</h2>
                            <p>{firstItem.fields.description}</p>
                        </div>
                    </div>
                    <Recent result={this.state.result} />
                </div>
                :null
                    
                } */}
                <Allpost result={this.state.result} />
                <Footer />
            </div>
        )
    }
}
export default Home