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
                <Allpost result={this.state.result} />
                <Footer />
            </div>
        )
    }
}
export default Home